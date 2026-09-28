import React from "react";

export interface ActivationEmailProps {
  customerName?: string;
  orderId: string;
  planTitle: string;
  code: string;
  m3uUrl?: string;
  xtreamUser?: string;
  xtreamPass?: string;
  xtreamHost?: string;
}

export function ActivationEmail({
  customerName = "Client",
  orderId,
  planTitle,
  code,
  m3uUrl,
  xtreamUser,
  xtreamPass,
  xtreamHost = "http://atlas-pro.tv:8080",
}: ActivationEmailProps): React.JSX.Element {
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
            backgroundColor: "#10B981",
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
            Vos Accès Atlas Pro ONTV Officiels
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
            Bonjour {customerName}, vos accès sont prêts !
          </h2>

          <p style={{ margin: "0 0 20px", fontSize: "14px", lineHeight: "1.6" }}>
            Votre abonnement <strong>{planTitle}</strong> (Réf: {orderId}) a été activé sur notre
            serveur haute performance. Vous trouverez ci-dessous vos clés de connexion.
          </p>

          {/* Prominent Code Box */}
          <div
            style={{
              backgroundColor: "#EEF2FF",
              border: "2px dashed #4F46E5",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            <p style={{ margin: "0 0 8px", fontSize: "12px", fontWeight: "600", color: "#4F46E5", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Code d&apos;Activation Rapide (Application Atlas Pro ONTV)
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "26px",
                fontWeight: "800",
                color: "#1E1B4B",
                letterSpacing: "4px",
                fontFamily: "monospace",
              }}
            >
              {code}
            </p>
          </div>

          {/* Xtream Codes Section */}
          <div
            style={{
              backgroundColor: "#F8FAFC",
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              padding: "20px",
              marginBottom: "24px",
            }}
          >
            <p style={{ margin: "0 0 12px", fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>
              Identifiants Xtream Codes (Smart IPTV, IBO Player, TiviMate) :
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "4px 0", color: "#64748B", width: "35%" }}>Serveur URL :</td>
                  <td style={{ padding: "4px 0", fontWeight: "600", color: "#0F172A", fontFamily: "monospace" }}>
                    {xtreamHost}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "4px 0", color: "#64748B" }}>Nom d&apos;utilisateur :</td>
                  <td style={{ padding: "4px 0", fontWeight: "600", color: "#0F172A", fontFamily: "monospace" }}>
                    {xtreamUser || code}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "4px 0", color: "#64748B" }}>Mot de passe :</td>
                  <td style={{ padding: "4px 0", fontWeight: "600", color: "#0F172A", fontFamily: "monospace" }}>
                    {xtreamPass || code}
                  </td>
                </tr>
                {m3uUrl && (
                  <tr>
                    <td style={{ padding: "4px 0", color: "#64748B" }}>Lien M3U :</td>
                    <td style={{ padding: "4px 0", fontWeight: "600", color: "#4F46E5", wordBreak: "break-all" }}>
                      {m3uUrl}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Quick Setup Instructions */}
          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>
              Comment vous connecter en 2 minutes ?
            </h3>
            <ol style={{ margin: 0, paddingLeft: "20px", fontSize: "13px", lineHeight: "1.7" }}>
              <li>Ouvrez l&apos;application Atlas Pro sur votre écran.</li>
              <li>Saisissez le code d&apos;activation à 12 chiffres ci-dessus.</li>
              <li>Validez : les chaînes et le catalogue VOD se chargent instantanément.</li>
            </ol>
          </div>

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <a
              href="https://atlasproibofficiel.com/tutoriels"
              style={{
                display: "inline-block",
                backgroundColor: "#0F172A",
                color: "#FFFFFF",
                fontSize: "13px",
                fontWeight: "600",
                padding: "10px 24px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Consulter nos guides d&apos;installation
            </a>
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
            © {new Date().getFullYear()} Atlas Pro ONTV Officiel • Support technique 7j/7
          </p>
          <p style={{ margin: 0 }}>
            Ne partagez jamais vos identifiants d&apos;accès à des tiers pour garantir la stabilité de votre flux.
          </p>
        </div>
      </div>
    </div>
  );
}
