import { NextRequest, NextResponse } from "next/server";
import { orderInputSchema } from "@/lib/validations/order";
import { checkRateLimit } from "@/lib/rate-limit";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getPlanBySlug } from "@/lib/mock-data";
import { sendOrderConfirmationEmail } from "@/lib/resend";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // 1. Rate Limiting by IP
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("cf-connecting-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(`order_${clientIp}`, {
      limit: 5,
      windowMs: 10 * 60 * 1000, // 5 attempts per 10 minutes
    });

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: "Trop de tentatives de commande. Veuillez patienter quelques minutes.",
        },
        { status: 429 }
      );
    }

    // 2. Parse Body & Honeypot Check
    const body: unknown = await request.json();
    const parseResult = orderInputSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: "Données de formulaire invalides.",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, planSlug, existingCode, honeypot } = parseResult.data;

    // Reject bot submission if honeypot was filled
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ error: "Requête refusée." }, { status: 400 });
    }

    // 3. Resolve Plan & Price Server-Side
    const plan = getPlanBySlug(planSlug);
    if (!plan) {
      return NextResponse.json(
        { error: "Forfait introuvable." },
        { status: 404 }
      );
    }

    // 4. Supabase Database Operations
    const supabase = getSupabaseServerClient();
    let orderId = `ord_${Date.now().toString(36)}`;

    if (supabase) {
      // Upsert Customer
      const { data: customer, error: customerError } = await supabase
        .from("customers")
        .upsert(
          { email, name, phone },
          { onConflict: "email" }
        )
        .select("id")
        .single();

      if (customerError || !customer) {
        console.error("[Supabase Error: Customer Upsert]", customerError);
        return NextResponse.json(
          { error: "Erreur lors de l'enregistrement client." },
          { status: 500 }
        );
      }

      // Insert Order
      const { data: newOrder, error: orderError } = await supabase
        .from("orders")
        .insert({
          customer_id: customer.id,
          plan_slug: plan.slug,
          amount: plan.price,
          currency: "EUR",
          status: "pending",
          notes: existingCode || null,
        })
        .select("id")
        .single();

      if (orderError || !newOrder) {
        console.error("[Supabase Error: Order Insert]", orderError);
        return NextResponse.json(
          { error: "Erreur lors de la création de la commande." },
          { status: 500 }
        );
      }

      orderId = newOrder.id;
    } else {
      console.log(
        `[Dev Mock Order Created] Plan: ${plan.slug}, Amount: ${plan.price}€, Email: ${email}`
      );
    }

    // 5. Send Confirmation Email via Resend
    void sendOrderConfirmationEmail({
      to: email,
      customerName: name,
      orderId,
      planTitle: plan.title,
      amount: plan.price,
    });

    return NextResponse.json(
      {
        success: true,
        orderId,
        planTitle: plan.title,
        amount: plan.price,
        redirectUrl: `/merci?orderId=${encodeURIComponent(orderId)}&plan=${encodeURIComponent(
          plan.slug
        )}`,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[API Order Exception]", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue." },
      { status: 500 }
    );
  }
}
