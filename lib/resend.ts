import { Resend } from "resend";
import { OrderConfirmationEmail } from "@/emails/OrderConfirmationEmail";
import { ActivationEmail } from "@/emails/ActivationEmail";
import { RenewalReminderEmail } from "@/emails/RenewalReminderEmail";
import { ContactReceivedEmail } from "@/emails/ContactReceivedEmail";

let resendClient: Resend | null = null;

export function getResendClient(): Resend | null {
  if (resendClient) {
    return resendClient;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[Resend] RESEND_API_KEY is not defined. Emails will be logged to console in mock mode."
      );
    }
    return null;
  }

  resendClient = new Resend(apiKey);
  return resendClient;
}

export const DEFAULT_SENDER =
  process.env.RESEND_FROM_EMAIL ||
  process.env.RESEND_FROM ||
  "Atlasproibofficiel <support@atlasproibofficiel.com>";

export interface SendOrderConfirmationParams {
  to: string;
  customerName?: string;
  orderId: string;
  planTitle: string;
  amount: number;
  devicesCount?: number;
  preferredPayment?: string;
}

export async function sendOrderConfirmationEmail({
  to,
  customerName,
  orderId,
  planTitle,
  amount,
  devicesCount,
  preferredPayment,
}: SendOrderConfirmationParams): Promise<{ success: boolean; id?: string }> {
  const resend = getResendClient();

  if (!resend) {
    console.log(
      `[Dev Email Mock] To: ${to} | OrderConfirmation: Order #${orderId} (${planTitle} - ${amount}€ - ${devicesCount || 1} écran(s) - ${preferredPayment || "carte"})`
    );
    return { success: true, id: `mock_email_${Date.now()}` };
  }

  try {
    const response = await resend.emails.send({
      from: DEFAULT_SENDER,
      to,
      subject: `Confirmation de commande #${orderId} - Atlas Pro ONTV`,
      react: OrderConfirmationEmail({
        customerName,
        orderId,
        planTitle,
        amount,
        devicesCount,
        preferredPayment,
      }),
    });

    if (response.error) {
      console.error("[Resend Error: Order Confirmation]", response.error);
      return { success: false };
    }

    return { success: true, id: response.data?.id };
  } catch (error: unknown) {
    console.error("[Resend Exception: Order Confirmation]", error);
    return { success: false };
  }
}

export interface SendActivationParams {
  to: string;
  customerName?: string;
  orderId: string;
  planTitle: string;
  code: string;
  m3uUrl?: string;
  xtreamUser?: string;
  xtreamPass?: string;
}

export async function sendActivationEmail({
  to,
  customerName,
  orderId,
  planTitle,
  code,
  m3uUrl,
  xtreamUser,
  xtreamPass,
}: SendActivationParams): Promise<{ success: boolean; id?: string }> {
  const resend = getResendClient();

  if (!resend) {
    console.log(
      `[Dev Email Mock] To: ${to} | Activation Code: ${code} (Order #${orderId})`
    );
    return { success: true, id: `mock_email_${Date.now()}` };
  }

  try {
    const response = await resend.emails.send({
      from: DEFAULT_SENDER,
      to,
      subject: `Vos accès officiels Atlas Pro ONTV (Commande #${orderId})`,
      react: ActivationEmail({
        customerName,
        orderId,
        planTitle,
        code,
        m3uUrl,
        xtreamUser,
        xtreamPass,
      }),
    });

    if (response.error) {
      console.error("[Resend Error: Activation]", response.error);
      return { success: false };
    }

    return { success: true, id: response.data?.id };
  } catch (error: unknown) {
    console.error("[Resend Exception: Activation]", error);
    return { success: false };
  }
}

export interface SendRenewalReminderParams {
  to: string;
  customerName?: string;
  planTitle: string;
  expirationDate: string;
}

export async function sendRenewalReminderEmail({
  to,
  customerName,
  planTitle,
  expirationDate,
}: SendRenewalReminderParams): Promise<{ success: boolean; id?: string }> {
  const resend = getResendClient();

  if (!resend) {
    console.log(
      `[Dev Email Mock] To: ${to} | Renewal Reminder: ${planTitle} expires on ${expirationDate}`
    );
    return { success: true, id: `mock_email_${Date.now()}` };
  }

  try {
    const response = await resend.emails.send({
      from: DEFAULTSENDER_SAFE(DEFAULT_SENDER),
      to,
      subject: `Rappel d'échéance : Votre abonnement Atlas Pro expire dans 7 jours`,
      react: RenewalReminderEmail({
        customerName,
        planTitle,
        expirationDate,
      }),
    });

    if (response.error) {
      console.error("[Resend Error: Renewal Reminder]", response.error);
      return { success: false };
    }

    return { success: true, id: response.data?.id };
  } catch (error: unknown) {
    console.error("[Resend Exception: Renewal Reminder]", error);
    return { success: false };
  }
}

function DEFAULTSENDER_SAFE(sender: string): string {
  return sender;
}

export interface SendContactReceivedParams {
  to: string;
  customerName?: string;
  ticketId: string;
  subject?: string;
  messagePreview?: string;
}

export async function sendContactReceivedEmail({
  to,
  customerName,
  ticketId,
  subject,
  messagePreview,
}: SendContactReceivedParams): Promise<{ success: boolean; id?: string }> {
  const resend = getResendClient();

  if (!resend) {
    console.log(
      `[Dev Email Mock] To: ${to} | Contact Ticket #${ticketId} Received (${subject})`
    );
    return { success: true, id: `mock_email_${Date.now()}` };
  }

  try {
    const response = await resend.emails.send({
      from: DEFAULT_SENDER,
      to,
      subject: `Accusé de réception - Ticket de support #${ticketId}`,
      react: ContactReceivedEmail({
        customerName,
        ticketId,
        subject,
        messagePreview,
      }),
    });

    if (response.error) {
      console.error("[Resend Error: Contact Received]", response.error);
      return { success: false };
    }

    return { success: true, id: response.data?.id };
  } catch (error: unknown) {
    console.error("[Resend Exception: Contact Received]", error);
    return { success: false };
  }
}
