import React from "react";

export interface AdminNewOrderEmailProps {
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

export function AdminNewOrderEmail({
  orderId,
  customerName,
  customerEmail,
  customerPhone,
  planTitle,
  amount,
  devicesCount = 1,
  preferredPayment = "carte_bancaire",
  existingCode,
}: AdminNewOrderEmailProps): React.JSX.Element {
  // Clean phone number for WhatsApp link (remove spaces, plus, hyphens)
  const cleanPhone = (customerPhone || "").replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}`;
  const mailtoUrl = `mailto:${customerEmail}?subject=Votre commande Atlas Pro ONTV #${orderId}`;

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
            backgroundColor: "#4F46E5",
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
              color: "#E0E7FF",
            }}
          >
            Alerte Administrateur
          </p>
          <h1
            style={{
              margin: 0,
              color: "#FFFFFF",
              fontSize: "22px",
              fontWeight: "800",
            }}
          >
            Nouvelle Commande #{orderId}
          </h1>
        </div>

        {/* Body Content */}
        <div style={{ padding: "32px" }}>
          {/* Quick Action Button WhatsApp */}
          {cleanPhone && (
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  backgroundColor: "#22C55E",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: "700",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.2)",
                }}
              >
                Contacter le client sur WhatsApp ({customerPhone})
              </a>
            </div>
          )}

          {/* Details Table */}
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
                  <td style={{ padding: "8px 0", color: "#94A3B8" }}>Numéro commande :</td>
                  <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "700", color: "#60A5FA" }}>
                    #{orderId}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", color: "#94A3B8" }}>Nom client :</td>
                  <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "600", color: "#F8FAFC" }}>
                    {customerName}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", color: "#94A3B8" }}>E-mail :</td>
                  <td style={{ padding: "8px 0", textAlign: "right", color: "#F8FAFC" }}>
                    <a href={mailtoUrl} style={{ color: "#818CF8", textDecoration: "underline" }}>
                      {customerEmail}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", color: "#94A3B8" }}>Téléphone / WhatsApp :</td>
                  <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "600", color: "#4ADE80" }}>
                    {customerPhone}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", color: "#94A3B8" }}>Formule choisie :</td>
                  <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "600", color: "#F8FAFC" }}>
                    {planTitle}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", color: "#94A3B8" }}>Nombre d&apos;écrans :</td>
                  <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "700", color: "#FCD34D" }}>
                    {devicesCount} appareil{devicesCount > 1 ? "s" : ""}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", color: "#94A3B8" }}>Règlement souhaité :</td>
                  <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "700", color: "#F8FAFC" }}>
                    {preferredPayment === "paypal" ? "PayPal" : "Carte Bancaire"}
                  </td>
                </tr>
                {existingCode && (
                  <tr>
                    <td style={{ padding: "8px 0", color: "#94A3B8" }}>Ancien code / MAC :</td>
                    <td style={{ padding: "8px 0", textAlign: "right", fontFamily: "monospace", color: "#F87171" }}>
                      {existingCode}
                    </td>
                  </tr>
                )}
                <tr>
                  <td style={{ padding: "8px 0", color: "#94A3B8" }}>Montant total :</td>
                  <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "800", color: "#38BDF8", fontSize: "16px" }}>
                    {amount} €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ margin: 0, fontSize: "12px", color: "#64748B", textAlign: "center" }}>
            Alerte automatique générée par Atlas Pro ONTV • Atlasproibofficiel.com
          </p>
        </div>
      </div>
    </div>
  );
}
