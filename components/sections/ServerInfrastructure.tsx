import React from "react";
import { Cpu, Server, Lock, Zap, ShieldCheck, RefreshCw } from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
}

const SERVER_FEATURES: FeatureCard[] = [
  {
    title: "Qualité 4K Native & Encodage HEVC H.265",
    description:
      "Flux IPTV encodés en H.265 pour une réduction de 50% de la consommation de bande passante, tout en restituant une image 4K Ultra HD et Full HD 60 fps d'une fluidité absolue sans artefact de compression.",
    icon: Cpu,
  },
  {
    title: "Serveurs Dédiés CDN Haute Performance",
    description:
      "Infrastructure sur serveurs CDN dédiés 10 Gbps garantissant une bande passante stable, une latence minimale et une diffusion 4K fluide pour l'ensemble des utilisateurs en France et en Europe.",
    icon: Server,
  },
  {
    title: "Technologie Anti-Freeze & Anti-Buffering",
    description:
      "Algorithme intelligent de load-balancing répartissant la charge réseau en temps réel pour prévenir tout buffering ou coupure lors des pics d'audience (soirées football Ligue des Champions, Clasico, Formule 1).",
    icon: Zap,
  },
  {
    title: "Sécurité Chiffrée & Compatibilité VPN Totale",
    description:
      "Toutes les communications API Xtream Codes sont sécurisées par protocole SSL/TLS. Les flux serveur Atlas Pro fonctionnent parfaitement avec tous les fournisseurs VPN (NordVPN, CyberGhost, ExpressVPN).",
    icon: Lock,
  },
  {
    title: "Guide des Programmes (EPG) & Replay Intégré",
    description:
      "Grille des programmes TV synchronisée en temps réel avec résumé des émissions et fonction Replay jusqu'à 7 jours pour rattraper vos films, documentaires et rendez-vous sportifs favoris.",
    icon: RefreshCw,
  },
  {
    title: "Garantie de Disponibilité 99.9% & Support 7j/7",
    description:
      "Monitoring 24h/24 des serveurs avec basculement automatique en cas d'incident, complété par une assistance technique réactive via WhatsApp et billetterie en moins de 2 heures ouvrées.",
    icon: ShieldCheck,
  },
];

export function ServerInfrastructure(): React.JSX.Element {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8" aria-label="Infrastructure technique serveur Atlas Pro">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
          Infrastructure Serveur Dédié Atlas Pro : Technologie Anti-Freeze & Qualité 4K Native
        </h2>
        <p className="text-sm sm:text-base text-body leading-relaxed">
          Pourquoi le <strong>serveur Atlas Pro</strong> est la référence de l&apos;<strong>abonnement IPTV 4K en France</strong> : une architecture haute disponibilité conçue pour les utilisateurs exigeants.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVER_FEATURES.map((feat) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.title}
              className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm hover:border-primary/40 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden={true} />
              </div>
              <h3 className="text-base font-bold text-heading">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                {feat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
