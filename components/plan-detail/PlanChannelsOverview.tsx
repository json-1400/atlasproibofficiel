import React from "react";
import { Tv, Film, Trophy, Globe, Sparkles, CheckCircle2 } from "lucide-react";

interface BouquetCard {
  title: string;
  count: string;
  description: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
}

const BOUQUET_CATEGORIES: BouquetCard[] = [
  {
    title: "Chaînes Généralistes & Actualités Francophones",
    count: "+1 500 chaînes",
    description:
      "Toutes les grandes chaînes nationales et régionales françaises, belges, suisses et canadiennes en qualité 4K Ultra HD et Full HD 1080p 60 fps pour un suivi en direct sans décalage.",
    highlights: [
      "Information continue en direct et débats de société",
      "Émissions de divertissement, magazines et culture",
      "Pistes audio en français avec sous-titrage synchronisé",
      "Replay disponible jusqu'à 7 jours pour revoir vos programmes",
    ],
    icon: Tv,
  },
  {
    title: "Retransmissions Sportives Internationales",
    count: "+2 000 chaînes",
    description:
      "Couverture complète des plus grandes compétitions sportives mondiales : football européen, sports mécaniques, tournois de tennis, basketball et championnats majeurs avec flux haute fluidité.",
    highlights: [
      "Multi-flux à 60 images par seconde éliminant tout flou de mouvement",
      "Commentaires disponibles en langue française et multilingue",
      "Multiplex direct lors des grands soirs de compétitions",
      "Débit optimisé anti-freeze pour éviter toute coupure lors des tirs aux buts",
    ],
    icon: Trophy,
  },
  {
    title: "Cinémathèque VOD & Séries en Ultra HD 4K",
    count: "+25 000 titres",
    description:
      "Catalogue exhaustif de longs métrages, documentaires et séries complètes classés par genre et mis à jour de façon hebdomadaire dès leur sortie avec affiches et synopsis détaillés.",
    highlights: [
      "Fichiers encodés en HEVC / H.265 avec son surround 5.1",
      "Version française intégrale (VF) et version originale sous-titrée (VOSTFR)",
      "Saisons complètes de séries sans coupure publicitaire",
      "Reprise automatique de lecture sur n'importe quel écran",
    ],
    icon: Film,
  },
  {
    title: "Bouquets Régionaux & Internationaux",
    count: "+6 500 chaînes",
    description:
      "Large sélection internationale incluant les bouquets d'Europe (Royaume-Uni, Espagne, Italie, Allemagne), d'Amérique du Nord, du Maghreb et du monde arabe en flux natifs de haute définition.",
    highlights: [
      "Flux stables depuis les émetteurs d'origine sans recompression dégradante",
      "Chaînes jeunesse, documentaires scientifiques et faune",
      "Chaînes musicales, concerts et spectacles en direct",
      "Guide électronique des programmes (EPG) interactif inclus",
    ],
    icon: Globe,
  },
];

export function PlanChannelsOverview(): React.JSX.Element {
  return (
    <section className="space-y-6 pt-6 border-t border-border" aria-label="Présentation du bouquet de chaînes et VOD">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Contenu Illimité Inclus dans Votre Licence</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-heading">
          Bouquet TV en Direct & Vidéothèque VOD : Plus de 10 000 Flux 4K/FHD
        </h2>
        <p className="text-xs sm:text-sm text-body leading-relaxed max-w-3xl">
          Votre abonnement <strong>Atlas Pro IPTV</strong> vous donne un accès illimité et sans restriction géographique à l&apos;ensemble de notre catalogue audiovisuel. Chaque flux bénéficie d&apos;une diffusion numérique directe depuis nos serveurs dédiés avec encodage <strong>HEVC / H.265</strong> pour une clarté d&apos;image irréprochable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        {BOUQUET_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              className="rounded-2xl border border-border bg-white p-6 space-y-4 shadow-2xs hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Icon className="h-5 w-5" aria-hidden={true} />
                  </div>
                  <h3 className="text-base font-bold text-heading">{cat.title}</h3>
                </div>
                <span className="rounded-full bg-surface px-2.5 py-1 text-xs font-bold text-primary shrink-0">
                  {cat.count}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-body leading-relaxed">{cat.description}</p>

              <ul className="space-y-2 pt-2 border-t border-border text-xs text-heading">
                {cat.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
