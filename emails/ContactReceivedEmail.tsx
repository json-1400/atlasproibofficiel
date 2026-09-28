import React from "react";

export interface ContactReceivedEmailProps {
  customerName?: string;
  ticketId: string;
  subject?: string;
  messagePreview?: string;
}

export function ContactReceivedEmail({
  customerName = "Client",
  ticketId,
  subject = "Demande d'assistance",
  messagePreview,
}: ContactReceivedEmailProps): React.JSX.Element {
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
            Support Atlas Pro ONTV
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
            Message reçu, {customerName} !
          </h2>

          <p style={{ margin: "0 0 20px", fontSize: "14px", lineHeight: "1.6" }}>
            Nous avons bien reçu votre demande d&apos;assistance concernant <strong>&quot;{subject}&quot;</strong>.
            Notre équipe technique traite les tickets en moins de 2 heures ouvrées.
          </p>

          <div
            style={{
              backgroundColor: "#F8FAFC",
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              padding: "16px",
              marginBottom: "24px",
            }}
          >
            <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#64748B" }}>
              Numéro de suivi du ticket :
            </p>
            <p style={{ margin: 0, fontSize: "14px", fontWeight: "700", color: "#0F172A", fontFamily: "monospace" }}>
              {ticketId}
            </p>
            {messagePreview && (
              <p style={{ margin: "12px 0 0", fontSize: "12px", color: "#64748B", fontStyle: "italic" }}>
                &quot;{messagePreview.slice(0, 150)}...&quot;
              </p>
            )}
          </div>

          <p style={{ margin: "0 0 20px", fontSize: "13px", lineHeight: "1.6" }}>
            Besoin d&apos;une aide urgente en direct ? Vous pouvez également contacter notre support WhatsApp disponible tous les jours de 8h à 23h.
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
            Ce message confirme la bonne transmission de votre demande de support.
          </p>
        </div>
      </div>
    </div>
  );
}
