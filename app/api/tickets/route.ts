import { NextRequest, NextResponse } from "next/server";
import { ticketInputSchema } from "@/lib/validations/ticket";
import { verifyAntiBot } from "@/lib/anti-bot";
import { checkRateLimit } from "@/lib/rate-limit";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { sendTicketConfirmationEmail } from "@/lib/resend";
import { sendAdminNewTicketAlert } from "@/lib/admin-notifications";

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("cf-connecting-ip") || "127.0.0.1";
}

function generateTicketNumber(): string {
  const randomPart = Math.floor(100000 + Math.random() * 900000);
  return `TKT-${randomPart}`;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // 1. Rate Limiting by IP (3 tickets per 15 minutes)
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(`ticket_${clientIp}`, {
      limit: 3,
      windowMs: 15 * 60 * 1000,
    });

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error:
            "Trop de demandes envoyées. Pour éviter les abus, veuillez patienter quelques minutes.",
        },
        { status: 429 }
      );
    }

    // 2. Body Parsing & Zod Validation
    const body: unknown = await request.json();
    const parseResult = ticketInputSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: "Veuillez vérifier les informations saisies.",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      phone,
      orderNumber,
      category,
      deviceType,
      subject,
      message,
      honeypot,
      timestamp,
      challengeAnswer,
      challengeExpectedHash,
    } = parseResult.data;

    // 3. Multi-layer Anti-Bot Verification
    const antiBotCheck = verifyAntiBot({
      answer: challengeAnswer,
      expectedHash: challengeExpectedHash,
      timestamp,
      honeypot,
    });

    if (!antiBotCheck.isValid) {
      return NextResponse.json(
        { error: antiBotCheck.reason || "Échec de la validation de sécurité anti-robot." },
        { status: 400 }
      );
    }

    // 4. Generate Ticket Reference
    const ticketNumber = generateTicketNumber();

    // 5. Supabase Insertion
    const supabase = getSupabaseServerClient();
    if (supabase) {
      const { error: insertError } = await supabase.from("tickets").insert({
        email,
        customer_name: name,
        phone: phone || null,
        order_number: orderNumber || null,
        category,
        device_type: deviceType,
        subject: `[${category.toUpperCase()}] ${subject}`,
        message: `Appareil: ${deviceType} | Téléphone: ${phone || "N/A"} | Commande: ${orderNumber || "N/A"}\n\n${message}`,
        status: "open",
        ticket_number: ticketNumber,
      });

      if (insertError) {
        // Fallback to base columns if migrations are pending in external Supabase instance
        console.warn("[Supabase Ticket Extended Insert Warning, trying base]", insertError.message);
        await supabase.from("tickets").insert({
          email,
          subject: `[${category.toUpperCase()}] ${subject}`,
          message: `Appareil: ${deviceType} | Téléphone: ${phone || "N/A"} | Commande: ${orderNumber || "N/A"}\n\n${message}`,
          status: "open",
        });
      }
    } else {
      console.log(
        `[Dev Mock Ticket] #${ticketNumber} created for ${name} (${email}) - ${category}`
      );
    }

    // 6. Asynchronous Email Dispatch (Customer Confirmation + Admin Alert)
    await Promise.allSettled([
      sendTicketConfirmationEmail({
        to: email,
        customerName: name,
        ticketNumber,
        category,
        deviceType,
        subject,
        message,
      }),
      sendAdminNewTicketAlert({
        ticketId: ticketNumber,
        customerName: `${name} (${deviceType})`,
        customerEmail: email,
        subject: `[${category.toUpperCase()}] ${subject} (Réf: ${orderNumber || "N/A"})`,
        message: `Téléphone: ${phone || "N/A"}\nAppareil: ${deviceType}\nCommande: ${orderNumber || "N/A"}\n\n${message}`,
      }),
    ]);

    return NextResponse.json(
      {
        success: true,
        ticketNumber,
        message: "Votre ticket a été créé avec succès.",
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[API Tickets Exception]", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue lors de l'enregistrement de votre ticket." },
      { status: 500 }
    );
  }
}
