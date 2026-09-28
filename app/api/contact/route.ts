import { NextRequest, NextResponse } from "next/server";
import { contactInputSchema } from "@/lib/validations/contact";
import { checkRateLimit } from "@/lib/rate-limit";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { sendContactReceivedEmail } from "@/lib/resend";
import { sendAdminNewTicketAlert } from "@/lib/admin-notifications";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // 1. Rate Limiting by IP
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("cf-connecting-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(`contact_${clientIp}`, {
      limit: 3,
      windowMs: 15 * 60 * 1000, // 3 attempts per 15 minutes
    });

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: "Trop de messages envoyés. Veuillez patienter avant de renouveler votre demande.",
        },
        { status: 429 }
      );
    }

    // 2. Parse Body & Honeypot Check
    const body: unknown = await request.json();
    const parseResult = contactInputSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: "Formulaire de contact invalide.",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot } = parseResult.data;

    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ error: "Requête refusée." }, { status: 400 });
    }

    // 3. Supabase Insert Ticket
    const supabase = getSupabaseServerClient();
    let ticketId = `tkt_${Date.now().toString(36)}`;

    if (supabase) {
      const { data: ticket, error: ticketError } = await supabase
        .from("tickets")
        .insert({
          email,
          subject: subject || "Demande générale de support",
          message,
          status: "open",
        })
        .select("id")
        .single();

      if (ticketError || !ticket) {
        console.error("[Supabase Error: Ticket Insert]", ticketError);
        return NextResponse.json(
          { error: "Impossible d'enregistrer le ticket de support." },
          { status: 500 }
        );
      }

      ticketId = ticket.id;
    } else {
      console.log(
        `[Dev Mock Ticket Created] Email: ${email}, Subject: ${subject}`
      );
    }

    // 4. Send Confirmation & Admin Alert Emails via Resend
    // Await both in parallel so the serverless runtime stays active until emails are dispatched.
    await Promise.allSettled([
      sendContactReceivedEmail({
        to: email,
        customerName: name,
        ticketId,
        subject: subject || "Demande de support",
        messagePreview: message,
      }),
      sendAdminNewTicketAlert({
        ticketId,
        customerName: name,
        customerEmail: email,
        subject: subject || "Demande générale de support",
        message,
      }),
    ]);

    return NextResponse.json(
      {
        success: true,
        ticketId,
        message: "Votre message a été transmis avec succès. Notre équipe vous répondra par e-mail sous peu.",
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[API Contact Exception]", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue." },
      { status: 500 }
    );
  }
}
