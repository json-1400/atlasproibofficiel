import React from "react";

export interface OrderConfirmationEmailProps {
  customerName?: string;
  orderId: string;
  planTitle: string;
  amount: number;
}

export function OrderConfirmationEmail({
  customerName = "Client",
  orderId,
  planTitle,
  amount,
}: OrderConfirmationEmailProps): React.JSX.Element {
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
            backgroundColor: "#4F46E5",
            padding: "24px 32px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#FFFFFF",
              fontSize: "20px",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            Atlas Pro ONTV Officiel
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
            Merci pour votre commande, {customerName} !
          </h2>

          <p style={{ margin: "0 0 20px", fontSize: "14px", lineHeight: "1.6" }}>
            Nous avons bien enregistré votre demande d&apos;abonnement. Notre serveur prépare
            actuellement vos codes d&apos;activation officiels.
          </p>

          {/* Order Details Card */}
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
                  <td style={{ padding: "6px 0", color: "#64748B" }}>Référence commande :</td>
                  <td style={{ padding: "6px 0", textAlign: "right", fontWeight: "600", color: "#0F172A" }}>
                    {orderId}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", color: "#64748B" }}>Formule :</td>
                  <td style={{ padding: "6px 0", textAlign: "right", fontWeight: "600", color: "#0F172A" }}>
                    {planTitle}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", color: "#64748B" }}>Montant réglé :</td>
                  <td style={{ padding: "6px 0", textAlign: "right", fontWeight: "700", color: "#4F46E5", fontSize: "16px" }}>
                    {amount} €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            style={{
              backgroundColor: "#ECFDF5",
              border: "1px solid #A7F3D0",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#065F46",
                fontWeight: "600",
                lineHeight: "1.5",
              }}
            >
              ⏱️ Prochaine étape : Vous recevrez un second e-mail d&apos;ici 15 minutes contenant votre code à 12 chiffres et vos liens de connexion.
            </p>
          </div>

          <p style={{ margin: "0 0 24px", fontSize: "13px", lineHeight: "1.6" }}>
            En attendant vos accès, vous pouvez d&apos;ores et déjà télécharger l&apos;application officielle sur votre téléviseur ou appareil :
          </p>

          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <a
              href="https://atlasproibofficiel.com/telecharger/atlas-pro-ontv"
              style={{
                display: "inline-block",
                backgroundColor: "#4F46E5",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: "700",
                padding: "12px 28px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Télécharger l&apos;APK Atlas Pro
            </a>
          </div>

          <p style={{ margin: 0, fontSize: "12px", color: "#94A3B8", textAlign: "center" }}>
            Une question ? Contactez notre support WhatsApp accessible 7j/7 depuis notre site officiel.
          </p>
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
            © {new Date().getFullYear()} Atlas Pro ONTV Officiel • atlasproibofficiel.com
          </p>
          <p style={{ margin: 0 }}>
            Cet e-mail automatique fait office d&apos;accusé de réception de votre commande.
          </p>
        </div>
      </div>
    </div>
  );
}
