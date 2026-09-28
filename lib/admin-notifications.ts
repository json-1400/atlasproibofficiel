import { getResendClient, DEFAULT_SENDER } from "@/lib/resend";
import { AdminNewOrderEmail } from "@/emails/AdminNewOrderEmail";
import { AdminNewTicketEmail } from "@/emails/AdminNewTicketEmail";

/**
 * Parses and returns validated admin notification emails from ADMIN_EMAILS environment variable.
 */
export function getAdminEmails(): string[] {
  const envAdmins = process.env.ADMIN_EMAILS;
  if (!envAdmins) {
    return ["jasonhomehome@gmail.com", "proatlas12@gmail.com"];
  }

  return envAdmins
    .split(",")
    .map((email) => email.trim().replace(/^["']|["']$/g, ""))
    .filter((email) => email.length > 0 && email.includes("@"));
}

export interface SendAdminNewOrderParams {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  planTitle: string;
  amount: number;
  devicesCount?: number;
  preferredPayment?: string;
  existingCode?: string;
}

export async function sendAdminNewOrderAlert(
  params: SendAdminNewOrderParams
): Promise<{ success: boolean }> {
  const resend = getResendClient();
  const admins = getAdminEmails();

  if (admins.length === 0) {
    return { success: true };
  }

  if (!resend) {
    console.log(
      `[Dev Mock Alert] New Order #${params.orderId} from ${params.customerName} sent to: ${admins.join(", ")}`
    );
    return { success: true };
  }

  try {
    const response = await resend.emails.send({
      from: DEFAULT_SENDER,
      to: admins,
      subject: `🚨 Nouvelle Commande #${params.orderId} - ${params.customerName} (${params.planTitle})`,
      react: AdminNewOrderEmail(params),
    });

    if (response.error) {
      console.error("[Resend Error: Admin Order Alert]", response.error);
      return { success: false };
    }

    return { success: true };
  } catch (error: unknown) {
    console.error("[Resend Exception: Admin Order Alert]", error);
    return { success: false };
  }
}

export interface SendAdminNewTicketParams {
  ticketId: string;
  customerName?: string;
  customerEmail: string;
  subject: string;
  message: string;
}

export async function sendAdminNewTicketAlert(
  params: SendAdminNewTicketParams
): Promise<{ success: boolean }> {
  const resend = getResendClient();
  const admins = getAdminEmails();

  if (admins.length === 0) {
    return { success: true };
  }

  if (!resend) {
    console.log(
      `[Dev Mock Alert] New Support Ticket #${params.ticketId} from ${params.customerEmail} sent to: ${admins.join(", ")}`
    );
    return { success: true };
  }

  try {
    const response = await resend.emails.send({
      from: DEFAULT_SENDER,
      to: admins,
      subject: `📩 Nouveau Ticket Support #${params.ticketId} - ${params.customerName || params.customerEmail}`,
      react: AdminNewTicketEmail(params),
    });

    if (response.error) {
      console.error("[Resend Error: Admin Ticket Alert]", response.error);
      return { success: false };
    }

    return { success: true };
  } catch (error: unknown) {
    console.error("[Resend Exception: Admin Ticket Alert]", error);
    return { success: false };
  }
}
