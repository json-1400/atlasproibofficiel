import React from "react";
import { Trophy, Film, Globe2, RotateCcw, Sparkles } from "lucide-react";

interface CategoryBlock {
  title: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  highlights: string[];
}

const CATEGORIES: CategoryBlock[] = [
  {
    title: "Chaînes Sportives en Direct en 4K Ultra HD",
    badge: "Flux 60 FPS Anti-Freeze",
    icon: Trophy,
    description:
      "Vivez les plus grands événements sportifs mondiaux en immersion totale : Ligue 1, Ligue des Champions, Premier League, Liga, Serie A, Formule 1, MotoGP, UFC et NBA.",
    highlights: ["Canaux UHD dédiés 4K", "Multi-flux sans latence", "Zéro coupure en direct"],
  },
  {
    title: "Bouquet Français Généraliste & TNT en FHD",
    badge: "100% Chaînes Nationales",
    icon: Sparkles,
    description:
      "Accédez à l'intégralité de la TNT française ainsi qu'aux chaînes thématiques d'information, jeunesse, découverte, documentaires et divertissement en qualité Full HD native.",
    highlights: ["Qualité 1080p native", "EPG Guide TV synchronisé", "Multi-langues VF/VO"],
  },
  {
    title: "VOD Films & Séries Box-Office Illimitée",
    badge: "Catalogue Actualisé Hebdo",
    icon: Film,
    description:
      "Une médiathèque riche de milliers de films récents, grands classiques et séries complètes en streaming haute définition avec sous-titres et sélection des pistes audio.",
    highlights: ["Dernières sorties cinéma", "Séries intégrales en 4K", "Sous-titres FR & VOSTFR"],
  },
  {
    title: "Chaînes Internationales & Replay 7 Jours",
    badge: "Monde Entier & Catch-Up",
    icon: Globe2,
    description:
      "Plus de 50 pays couverts (Belgique, Suisse, Espagne, Italie, Portugal, Royaume-Uni, pays arabes, USA). Fonction Replay 7 jours pour rattraper vos émissions favorites.",
    highlights: ["Bouquets internationaux", "Replay jusqu'à 7 jours", "Zapping instantané"],
  },
];

export function ChannelCatalogPreview(): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        return (
          <div
            key={cat.title}
            className="rounded-2xl border border-border bg-white p-6 sm:p-7 space-y-4 shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="rounded-full bg-surface border border-border px-3 py-1 text-[11px] font-semibold text-heading">
                  {cat.badge}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-heading">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="pt-3 border-t border-border flex flex-wrap gap-2">
              {cat.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-md bg-slate-50 border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                >
                  ✓ {h}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
