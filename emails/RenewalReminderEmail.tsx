import React from "react";

export interface RenewalReminderEmailProps {
  customerName?: string;
  planTitle: string;
  expirationDate: string;
}

export function RenewalReminderEmail({
  customerName = "Client",
  planTitle,
  expirationDate,
}: RenewalReminderEmailProps): React.JSX.Element {
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
            backgroundColor: "#F59E0B",
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
            Rappel d&apos;Échéance • Atlas Pro ONTV
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
            Bonjour {customerName}, votre abonnement expire bientôt !
          </h2>

          <p style={{ margin: "0 0 20px", fontSize: "14px", lineHeight: "1.6" }}>
            Votre formule <strong>{planTitle}</strong> arrive à son terme le{" "}
            <strong>{expirationDate}</strong> (dans 7 jours).
          </p>

          <div
            style={{
              backgroundColor: "#FFFBEB",
              border: "1px solid #FCD34D",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#92400E",
                fontWeight: "600",
                lineHeight: "1.5",
              }}
            >
              ⚠️ Évitez toute coupure de vos services en renouvelant votre ligne à l&apos;avance. Vos réglages et votre liste de favoris seront intégralement conservés.
            </p>
          </div>

          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <a
              href="https://atlasproibofficiel.com/abonnements/renouvellement"
              style={{
                display: "inline-block",
                backgroundColor: "#4F46E5",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: "700",
                padding: "14px 32px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Renouveler mon abonnement maintenant
            </a>
          </div>

          <p style={{ margin: 0, fontSize: "12px", color: "#64748B", textAlign: "center", lineHeight: "1.6" }}>
            Aucun prélèvement automatique n&apos;est effectué sans votre consentement. Si vous ne souhaitez pas reconduire votre offre, ignorez simplement ce message.
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
            Message automatique d&apos;information contractuelle avant échéance.
          </p>
        </div>
      </div>
    </div>
  );
}
