import React from "react";

export interface TicketConfirmationEmailProps {
  customerName?: string;
  ticketNumber: string;
  category: string;
  deviceType?: string;
  subject: string;
  message: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  activation: "Activation & Codes d'accès",
  technique: "Problème technique / Coupure",
  renouvellement: "Renouvellement d'abonnement",
  commercial: "Question commerciale / Paiement",
  autre: "Autre demande",
};

const DEVICE_LABELS: Record<string, string> = {
  smart_tv_samsung_lg: "Smart TV (Samsung / LG / Tizen / WebOS)",
  android_box_tv: "Android TV / Boîtier TV Box",
  fire_tv_stick: "Amazon Fire TV Stick",
  smartphone_tablette: "Smartphone / Tablette (iOS / Android)",
  pc_mac: "Ordinateur (PC Windows / Mac)",
  mag_formuler: "Boîtier MAG / Formuler",
  autre: "Autre appareil",
};

export function TicketConfirmationEmail({
  customerName = "Client",
  ticketNumber,
  category,
  deviceType,
  subject,
  message,
}: TicketConfirmationEmailProps): React.JSX.Element {
  const categoryLabel = CATEGORY_LABELS[category] || category;
  const deviceLabel = deviceType ? DEVICE_LABELS[deviceType] || deviceType : "Non spécifié";

  return (
    <div
      style={{
        backgroundColor: "#F8FAFC",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        padding: "40px 16px",
        margin: "0",
        color: "#475569",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          border: "1px solid #E2E8F0",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#0F172A",
            padding: "28px 32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 6px",
              color: "#38BDF8",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Assistance Technique Officielle
          </p>
          <h1
            style={{
              margin: 0,
              color: "#FFFFFF",
              fontSize: "22px",
              fontWeight: "800",
            }}
          >
            Ticket Pris en Compte
          </h1>
        </div>

        {/* Content */}
        <div style={{ padding: "32px" }}>
          <h2
            style={{
              margin: "0 0 16px",
              color: "#0F172A",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            Bonjour {customerName},
          </h2>

          <p style={{ margin: "0 0 20px", fontSize: "14px", lineHeight: "1.6" }}>
            Votre demande de support technique a bien été enregistrée par nos serveurs. Notre équipe traite
            les tickets 7j/7 avec un temps de réponse moyen inférieur à <strong>2 heures ouvrées</strong>.
          </p>

          {/* Ticket Information Card */}
          <div
            style={{
              backgroundColor: "#F8FAFC",
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              padding: "20px",
              marginBottom: "24px",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "6px 0", color: "#64748B" }}>Numéro de suivi :</td>
                  <td
                    style={{
                      padding: "6px 0",
                      textAlign: "right",
                      fontFamily: "monospace",
                      fontWeight: "700",
                      color: "#0284C7",
                    }}
                  >
                    #{ticketNumber}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", color: "#64748B" }}>Catégorie :</td>
                  <td style={{ padding: "6px 0", textAlign: "right", fontWeight: "600", color: "#0F172A" }}>
                    {categoryLabel}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", color: "#64748B" }}>Appareil :</td>
                  <td style={{ padding: "6px 0", textAlign: "right", color: "#0F172A" }}>
                    {deviceLabel}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", color: "#64748B" }}>Sujet :</td>
                  <td style={{ padding: "6px 0", textAlign: "right", fontWeight: "600", color: "#0F172A" }}>
                    {subject}
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              style={{
                marginTop: "16px",
                paddingTop: "16px",
                borderTop: "1px solid #E2E8F0",
              }}
            >
              <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#64748B", fontWeight: "600" }}>
                Résumé de votre demande :
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  lineHeight: "1.6",
                  color: "#334155",
                  fontStyle: "italic",
                }}
              >
                &quot;{message.length > 200 ? `${message.slice(0, 200)}...` : message}&quot;
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#EFF6FF",
              border: "1px solid #BFDBFE",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "24px",
            }}
          >
            <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: "700", color: "#1E40AF" }}>
              💡 Besoin d&apos;une réponse immédiate ?
            </p>
            <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.5", color: "#1E3A8A" }}>
              Consultez nos <a href="https://atlasproibofficiel.com/tutoriels" style={{ color: "#2563EB", fontWeight: "600" }}>tutoriels d&apos;installation</a> ou répondez directement à cet e-mail avec vos détails techniques.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#F8FAFC",
            padding: "20px 32px",
            borderTop: "1px solid #E2E8F0",
            textAlign: "center",
            fontSize: "11px",
            color: "#94A3B8",
          }}
        >
          <p style={{ margin: "0 0 6px" }}>
            © {new Date().getFullYear()} Atlas Pro ONTV Officiel • Support Client
          </p>
          <p style={{ margin: 0 }}>
            Ce message confirme la réception de votre ticket de support. Conservez votre numéro #{ticketNumber}.
          </p>
        </div>
      </div>
    </div>
  );
}
