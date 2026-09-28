import React from "react";
import { Check, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  atlasPro: string;
  generic: string;
  isPositive: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Infrastructure & Bande Passante",
    atlasPro: "Serveurs CDN dédiés 10 Gbps en France & Europe",
    generic: "Serveurs mutualisés saturés à bas coût",
    isPositive: true,
  },
  {
    feature: "Qualité d'Image & Codecs",
    atlasPro: "Vrai 4K UHD & FHD natif (HEVC / H.265 à 60 fps)",
    generic: "720p / 1080p ré-encodé à faible bitrate",
    isPositive: true,
  },
  {
    feature: "Stabilité Événements Sportifs",
    atlasPro: "Technologie Anti-Freeze & Load-Balancing automatique",
    generic: "Buffering et coupures régulières lors des matchs",
    isPositive: true,
  },
  {
    feature: "Catalogue VOD & Replay",
    atlasPro: "Plus de 10 000 chaînes + VOD actualisée chaque semaine",
    generic: "Flux instables et médiathèque rarement mise à jour",
    isPositive: true,
  },
  {
    feature: "Délai de Livraison des Accès",
    atlasPro: "Activation automatique par e-mail en moins de 15 minutes",
    generic: "Attente manuelle aléatoire de 2h à 48h",
    isPositive: true,
  },
  {
    feature: "Formules Multi-Écrans",
    atlasPro: "2, 3 ou 4 connexions simultanées indépendantes",
    generic: "1 seul flux (blocage IP en cas de double connexion)",
    isPositive: true,
  },
  {
    feature: "Assistance Technique",
    atlasPro: "Support WhatsApp réactif & tickets d'assistance 7j/7",
    generic: "Support absent ou réponses automatisées lentes",
    isPositive: true,
  },
];

export function ComparisonTable(): React.JSX.Element {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
      <table className="w-full text-left text-xs sm:text-sm">
        <caption className="sr-only">
          Comparatif technique entre le serveur officiel Atlas Pro France et les offres IPTV génériques
        </caption>
        <thead className="border-b border-border bg-surface text-heading">
          <tr>
            <th scope="col" className="p-4 sm:p-5 font-bold">
              Caractéristique Technique
            </th>
            <th scope="col" className="p-4 sm:p-5 font-bold text-primary bg-primary/5">
              Serveur Officiel Atlas Pro France
            </th>
            <th scope="col" className="p-4 sm:p-5 font-semibold text-slate-500">
              Abonnements IPTV Génériques
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border text-body">
          {COMPARISON_DATA.map((row) => (
            <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
              <th scope="row" className="p-4 sm:p-5 font-semibold text-heading">
                {row.feature}
              </th>
              <td className="p-4 sm:p-5 font-medium text-heading bg-primary/[0.02]">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" aria-hidden="true" />
                  <span>{row.atlasPro}</span>
                </div>
              </td>
              <td className="p-4 sm:p-5 text-slate-500">
                <div className="flex items-start gap-2">
                  <X className="h-4 w-4 shrink-0 text-red-500 mt-0.5" aria-hidden="true" />
                  <span>{row.generic}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
