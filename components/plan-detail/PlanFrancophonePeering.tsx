import React from "react";
import { Globe2, ShieldCheck, MapPin, CheckCircle, Wifi } from "lucide-react";

interface CoverageHighlight {
  country: string;
  badge: string;
  description: string;
  features: string[];
}

const COVERAGE_REGIONS: CoverageHighlight[] = [
  {
    country: "France Métropolitaine & DROM-COM",
    badge: "Zone Principale",
    description:
      "Accès complet et immédiat à l'ensemble du service pour nos utilisateurs situés en France métropolitaine ainsi que dans les départements et régions d'outre-mer (Guadeloupe, Martinique, Réunion, Guyane, Mayotte).",
    features: [
      "Flux direct 4K Ultra HD et Full HD 60 fps sans coupure",
      "Guide des programmes EPG synchronisé à l'heure de Paris (UTC+1/UTC+2)",
      "Assistance technique en français disponible 7j/7",
    ],
  },
  {
    country: "Belgique & Luxembourg",
    badge: "Communauté Francophone",
    description:
      "Service pleinement actif pour tous nos abonnés résidant en Belgique (Bruxelles, Wallonie, Flandre) et au Grand-Duché de Luxembourg, sans aucune restriction géographique.",
    features: [
      "Accès aux bouquets francophones régionaux et internationaux",
      "Temps de zapping instantané inférieur à une seconde",
      "Compatible avec n'importe quelle connexion internet haut débit",
    ],
  },
  {
    country: "Suisse Romande",
    badge: "Utilisateurs & Frontaliers",
    description:
      "Diffusion haute définition disponible pour nos clients situés dans les cantons romands (Genève, Vaud, Neuchâtel, Fribourg, Valais, Jura) ainsi que pour les travailleurs frontaliers.",
    features: [
      "Qualité d'image optimale adaptée aux écrans 4K et téléviseurs récents",
      "Stabilité garantie lors des grands rendez-vous sportifs",
      "Activation express en moins de 15 minutes",
    ],
  },
  {
    country: "Canada, Québec & Expatriés",
    badge: "Diaspora Francophone",
    description:
      "Une solution idéale pour les Québécois, les francophones d'Amérique du Nord et les expatriés désirant accéder facilement à leurs chaînes et émissions préférées depuis l'étranger.",
    features: [
      "Accès illimité sans obligation d'adresse IP française fixe",
      "Catalogue VOD complet disponible avec sous-titres et pistes VF/VOSTFR",
      "Parfaite compatibilité en mobilité (smartphones, tablettes, PC portables)",
    ],
  },
];

export function PlanFrancophonePeering(): React.JSX.Element {
  return (
    <section className="space-y-6 pt-6 border-t border-border" aria-label="Couverture géographique de nos abonnés francophones">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Couverture & Disponibilité Géographique</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-heading">
          Services Disponibles en France, Belgique, Suisse, Canada et pour la Diaspora
        </h2>
        <p className="text-xs sm:text-sm text-body leading-relaxed max-w-3xl">
          Notre <strong>abonnement Atlas Pro IPTV</strong> dessert quotidiennement des milliers d&apos;utilisateurs francophones à travers le monde. Le service fonctionne de manière autonome sur toute connexion Internet standard (Fibre optique, ADSL, 4G ou 5G) sans nécessiter d&apos;équipement propriétaire.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {COVERAGE_REGIONS.map((item) => (
          <div key={item.country} className="rounded-2xl border border-border bg-surface p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-heading flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <span>{item.country}</span>
              </span>
              <span className="inline-flex items-center text-[10px] font-bold text-emerald-800 bg-emerald-100/70 rounded-full px-2.5 py-0.5">
                {item.badge}
              </span>
            </div>
            <p className="text-xs text-body leading-relaxed">{item.description}</p>
            <ul className="pt-2 border-t border-border/80 space-y-1.5 text-[11px] text-heading">
              {item.features.map((feat) => (
                <li key={feat} className="flex items-start gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Trust & VPN Capsule */}
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-3">
        <div className="flex items-center gap-2 text-primary font-bold text-sm">
          <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          <span>Flexibilité d&apos;Usage, Déplacements & Compatibilité VPN</span>
        </div>
        <p className="text-xs sm:text-sm text-body leading-relaxed">
          Que vous soyez à votre domicile, en déplacement professionnel ou en vacances à l&apos;hôtel, votre compte Atlas IPTV reste pleinement fonctionnel. Vos flux sont sécurisés par chiffrement SSL/TLS et restent 100% compatibles avec l&apos;usage d&apos;un VPN (NordVPN, CyberGhost, ExpressVPN, etc.) sans restriction ni bridage de connexion.
        </p>
      </div>
    </section>
  );
}
