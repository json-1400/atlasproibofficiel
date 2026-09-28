import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { sendRenewalReminderEmail } from "@/lib/resend";
import { getPlanBySlug } from "@/lib/mock-data";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return handleRenewalCron(request);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  return handleRenewalCron(request);
}

async function handleRenewalCron(request: NextRequest): Promise<NextResponse> {
  try {
    // 1. Authorization with CRON_SECRET
    const cronSecret = process.env.CRON_SECRET;
    const authHeader = request.headers.get("authorization");
    const querySecret = request.nextUrl.searchParams.get("secret");

    const isAuthorized =
      !cronSecret ||
      authHeader === `Bearer ${cronSecret}` ||
      querySecret === cronSecret;

    if (!isAuthorized) {
      return NextResponse.json(
        { error: "Non autorisé. Jeton CRON_SECRET manquant ou invalide." },
        { status: 401 }
      );
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json(
        {
          success: true,
          message: "Supabase non configuré. Cron exécuté en mode simulation.",
          processedCount: 0,
        },
        { status: 200 }
      );
    }

    // 2. Query orders expiring in the next 7 days without reminder sent
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    const targetDateString = targetDate.toISOString().split("T")[0];

    const { data: upcomingOrders, error: ordersError } = await supabase
      .from("orders")
      .select(`
        id,
        plan_slug,
        activation_end,
        reminder_sent,
        customer_id
      `)
      .eq("reminder_sent", false)
      .lte("activation_end", targetDateString)
      .not("customer_id", "is", null);

    if (ordersError) {
      console.error("[Cron Error: Fetching Orders]", ordersError);
      return NextResponse.json(
        { error: "Erreur lors de la récupération des commandes." },
        { status: 500 }
      );
    }

    if (!upcomingOrders || upcomingOrders.length === 0) {
      return NextResponse.json({
        success: true,
        message: "Aucun abonnement nécessitant un rappel aujourd'hui.",
        processedCount: 0,
      });
    }

    let remindersSent = 0;

    // 3. Process each expiring order
    for (const order of upcomingOrders) {
      if (!order.customer_id) continue;

      const { data: customer } = await supabase
        .from("customers")
        .select("email, name")
        .eq("id", order.customer_id)
        .single();

      if (!customer?.email) continue;

      const plan = getPlanBySlug(order.plan_slug);
      const planTitle = plan?.title || "Abonnement Atlas Pro";
      const expirationDate = order.activation_end || targetDateString;

      const emailResult = await sendRenewalReminderEmail({
        to: customer.email,
        customerName: customer.name || "Client",
        planTitle,
        expirationDate,
      });

      if (emailResult.success) {
        await supabase
          .from("orders")
          .update({ reminder_sent: true })
          .eq("id", order.id);

        remindersSent += 1;
      }
    }

    return NextResponse.json({
      success: true,
      processedCount: upcomingOrders.length,
      remindersSent,
      timestamp: new Date().toISOString(),
    });
  } catch (error: unknown) {
    console.error("[Cron Exception: Renewal Reminders]", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue lors de l'exécution du cron." },
      { status: 500 }
    );
  }
}
