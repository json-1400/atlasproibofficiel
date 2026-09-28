import React from "react";

export interface AdminNewTicketEmailProps {
  ticketId: string;
  customerName?: string;
  customerEmail: string;
  subject: string;
  message: string;
}

export function AdminNewTicketEmail({
  ticketId,
  customerName = "Visiteur",
  customerEmail,
  subject,
  message,
}: AdminNewTicketEmailProps): React.JSX.Element {
  const mailtoUrl = `mailto:${customerEmail}?subject=Re: ${encodeURIComponent(subject)} [Ticket #${ticketId}]`;

  return (
    <div
      style={{
        backgroundColor: "#0F172A",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        padding: "40px 16px",
        margin: "0",
        color: "#F8FAFC",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#1E293B",
          borderRadius: "16px",
          border: "1px solid #334155",
          overflow: "hidden",
        }}
      >
        {/* Header Alert */}
        <div
          style={{
            backgroundColor: "#0284C7",
            padding: "20px 32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 4px",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: "700",
              color: "#E0F2FE",
            }}
          >
            Support Client • Alerte Admin
          </p>
          <h1
            style={{
              margin: 0,
              color: "#FFFFFF",
              fontSize: "22px",
              fontWeight: "800",
            }}
          >
            Nouveau Message Support
          </h1>
        </div>

        {/* Content */}
        <div style={{ padding: "32px" }}>
          <div
            style={{
              backgroundColor: "#0F172A",
              borderRadius: "12px",
              border: "1px solid #334155",
              padding: "20px",
              marginBottom: "24px",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "6px 0", color: "#94A3B8" }}>Ticket ID :</td>
                  <td style={{ padding: "6px 0", textAlign: "right", fontFamily: "monospace", color: "#38BDF8" }}>
                    #{ticketId}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", color: "#94A3B8" }}>Expéditeur :</td>
                  <td style={{ padding: "6px 0", textAlign: "right", fontWeight: "600", color: "#F8FAFC" }}>
                    {customerName}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", color: "#94A3B8" }}>E-mail :</td>
                  <td style={{ padding: "6px 0", textAlign: "right", color: "#F8FAFC" }}>
                    <a href={mailtoUrl} style={{ color: "#818CF8", textDecoration: "underline" }}>
                      {customerEmail}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", color: "#94A3B8" }}>Sujet :</td>
                  <td style={{ padding: "6px 0", textAlign: "right", fontWeight: "600", color: "#F8FAFC" }}>
                    {subject}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Message Box */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ margin: "0 0 8px", fontSize: "12px", fontWeight: "700", color: "#94A3B8", textTransform: "uppercase" }}>
              Message du client :
            </p>
            <div
              style={{
                backgroundColor: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "12px",
                padding: "16px",
                fontSize: "13px",
                lineHeight: "1.6",
                color: "#E2E8F0",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </div>
          </div>

          {/* Quick Action Button */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <a
              href={mailtoUrl}
              style={{
                display: "inline-block",
                backgroundColor: "#0284C7",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: "700",
                padding: "12px 24px",
                borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              Répondre à {customerEmail}
            </a>
          </div>

          <p style={{ margin: 0, fontSize: "12px", color: "#64748B", textAlign: "center" }}>
            Atlas Pro ONTV Support Automatisé
          </p>
        </div>
      </div>
    </div>
  );
}
