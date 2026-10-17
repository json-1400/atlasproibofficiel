import React from "react";
import Link from "next/link";
import {
  Tv,
  Apple,
  Monitor,
  Smartphone,
  Box,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Layers,
} from "lucide-react";

interface AlternativeApp {
  name: string;
  badge: string;
  category: "smarttv" | "apple" | "android" | "pc" | "mag";
  protocols: string;
  description: string;
  guideUrl?: string;
  recommended?: boolean;
}

const ALTERNATIVE_APPS: AlternativeApp[] = [
  // Smart TV (Samsung & LG)
  {
    name: "IBO Player",
    badge: "Samsung Smart Hub & LG Store",
    category: "smarttv",
    protocols: "Xtream Codes API & M3U",
    description:
      "La solution N°1 pour Samsung Tizen et LG webOS. Interface 4K épurée, zapping instantané et synchronisation automatique de l'EPG Atlas Pro.",
    guideUrl: "/tutoriels/installer-atlas-pro-sur-tv-samsung",
    recommended: true,
  },
  {
    name: "Smart IPTV (SIPTV)",
    badge: "LG Content Store & Android TV",
    category: "smarttv",
    protocols: "Activation par adresse MAC",
    description:
      "Lecteur classique très léger. Idéal si vous préférez une activation directe par l'adresse MAC de votre téléviseur sans saisir de mot de passe.",
    guideUrl: "/tutoriels/installer-atlas-pro-sur-lg-smart-tv",
  },
  {
    name: "IPTV Smarters Pro / Lite",
    badge: "Stores officiels Samsung, LG & TV",
    category: "smarttv",
    protocols: "Xtream Codes API",
    description:
      "L'application universelle multi-plateforme. Gestion complète des catégories de chaînes direct, VOD avec affiches et contrôle parental.",
    guideUrl: "/tutoriels/installer-atlas-pro-sur-tv-samsung",
  },
  {
    name: "Flix IPTV",
    badge: "Samsung Tizen & LG webOS",
    category: "smarttv",
    protocols: "Xtream Codes & MAC",
    description:
      "Lecteur multimédia moderne intégrant la gestion avancée des pistes audio multilingues et des sous-titres français pour les films et séries.",
  },

  // Apple Ecosystem
  {
    name: "UHF IPTV",
    badge: "App Store (Apple TV & iPhone)",
    category: "apple",
    protocols: "Xtream Codes API",
    description:
      "L'un des lecteurs les plus fluides sur Apple TV et iOS. Synchronisation automatique des favoris via iCloud et lecture 4K HDR sans saccades.",
    guideUrl: "/telecharger/ios",
    recommended: true,
  },
  {
    name: "IPTV Smarters Player Lite",
    badge: "App Store iOS & iPadOS",
    category: "apple",
    protocols: "Xtream Codes API",
    description:
      "Disponible gratuitement sur l'App Store Apple. Connexion immédiate avec vos identifiants Atlas Pro et support du Picture-in-Picture.",
    guideUrl: "/telecharger/ios",
  },
  {
    name: "GSE Smart IPTV",
    badge: "iPhone, iPad & Mac M-Series",
    category: "apple",
    protocols: "Xtream Codes & M3U",
    description:
      "Lecteur complet avec moteur de décodage matériel puissant pour les flux haute définition et formats vidéo exotiques.",
  },

  // Android & Fire TV Alternatives
  {
    name: "TiviMate IPTV Player",
    badge: "Google Play Store & Fire TV",
    category: "android",
    protocols: "Xtream Codes API & M3U",
    description:
      "La référence absolue des passionnés sur Android TV. Guide TV (EPG) ergonomique style décodeur câble, multiview multi-écrans et enregistrement.",
    guideUrl: "/tutoriels/installer-atlas-pro-sur-fire-stick",
    recommended: true,
  },
  {
    name: "XCIPTV Player",
    badge: "Android TV & Fire Stick",
    category: "android",
    protocols: "Xtream Codes API",
    description:
      "Double lecteur intégré (ExoPlayer et VLC), interface personnalisable et excellente fluidité sur les téléviseurs récents.",
  },
  {
    name: "OTT Navigator IPTV",
    badge: "Android TV Box & Téléviseurs",
    category: "android",
    protocols: "Xtream Codes & M3U",
    description:
      "Idéal pour les boîtiers TV d'entrée de gamme (1 Go / 2 Go RAM). Très faible consommation de ressources et personnalisation poussée.",
  },

  // PC Windows & Mac
  {
    name: "IPTV Smarters Pro Desktop",
    badge: "Windows 10 / 11 & macOS",
    category: "pc",
    protocols: "Xtream Codes API",
    description:
      "Application logicielle autonome pour PC et Mac. Affichage plein écran sans navigateur avec sélection rapide des bouquets.",
    guideUrl: "/telecharger/windows",
    recommended: true,
  },
  {
    name: "VLC Media Player",
    badge: "Windows, Linux & Mac",
    category: "pc",
    protocols: "Lien M3U direct",
    description:
      "Le lecteur universel open-source. Ouvrez simplement votre lien M3U Atlas Pro pour tester vos chaînes instantanément sans configuration.",
  },

  // Boîtiers Dédiés (MAG & Formuler)
  {
    name: "MyTVOnline 2 / 3 (Formuler)",
    badge: "Natif sur boîtiers Formuler",
    category: "mag",
    protocols: "Portal Stalker & Xtream Codes",
    description:
      "L'expérience décodeur TV par excellence. Conçu sur-mesure pour le matériel Formuler Z8, Z10 et Z11 avec zapping sous 0.1 seconde.",
    recommended: true,
  },
  {
    name: "MAG Stalker Portal (Infomir)",
    badge: "MAG 254 / 322 / 424 / 524",
    category: "mag",
    protocols: "Adresse MAC Portal",
    description:
      "Activez directement l'adresse MAC de votre boîtier MAG auprès de notre support pour charger les portails Atlas Pro sans aucune application à installer.",
  },
];

export function AlternativeAppsGrid(): React.JSX.Element {
  return (
    <section aria-label="Applications alternatives compatibles" className="space-y-8">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Layers className="h-3.5 w-3.5" aria-hidden="true" />
          Compatibilité Universelle
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
          Votre Appareil n&apos;est pas Compatible avec l&apos;APK Natif ? <span className="text-primary">Les Meilleurs Lecteurs IPTV Alternatifs</span>
        </h2>
        <p className="text-xs sm:text-sm text-body leading-relaxed">
          Les Smart TV Samsung (Tizen), LG (webOS) et les équipements Apple (iPhone, iPad, Apple TV, Mac) ne supportent pas les applications APK natives Atlas Pro. Pour faire tourner votre abonnement IPTV Atlas Pro sur ces écrans, utilisez simplement l&apos;un de ces lecteurs certifiés avec vos identifiants Xtream Codes ou lien M3U.
        </p>
      </div>

      {/* Connection Protocol Box */}
      <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 space-y-3">
        <h3 className="text-sm sm:text-base font-bold text-heading flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
          Comment connecter votre abonnement Atlas Pro à ces applications ?
        </h3>
        <p className="text-xs text-body leading-relaxed">
          Toutes ces applications fonctionnent parfaitement avec votre abonnement Atlas Pro en utilisant l&apos;une des 3 méthodes incluses dans votre e-mail de commande :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="rounded-xl bg-white border border-border p-3 space-y-1">
            <span className="text-[11px] font-bold text-primary uppercase">Méthode 1 (Recommandée)</span>
            <p className="text-xs font-bold text-heading">API Xtream Codes</p>
            <p className="text-[11px] text-slate-500">Saisissez l&apos;URL Serveur, le Nom d&apos;utilisateur et le Mot de passe.</p>
          </div>
          <div className="rounded-xl bg-white border border-border p-3 space-y-1">
            <span className="text-[11px] font-bold text-primary uppercase">Méthode 2</span>
            <p className="text-xs font-bold text-heading">Lien Playlist M3U</p>
            <p className="text-[11px] text-slate-500">Collez le lien M3U complet dans les paramètres de votre lecteur (VLC, etc.).</p>
          </div>
          <div className="rounded-xl bg-white border border-border p-3 space-y-1">
            <span className="text-[11px] font-bold text-primary uppercase">Méthode 3</span>
            <p className="text-xs font-bold text-heading">Adresse MAC Stalker</p>
            <p className="text-[11px] text-slate-500">Pour boîtiers MAG ou Smart IPTV : transmettez votre adresse MAC pour liaison directe.</p>
          </div>
        </div>
      </div>

      {/* Grid of Compatible Alternative Apps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ALTERNATIVE_APPS.map((item) => (
          <article
            key={item.name}
            className={`flex flex-col justify-between rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md ${
              item.recommended
                ? "border-primary/40 ring-1 ring-primary/20"
                : "border-border hover:border-slate-300"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-surface border border-border px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                  {item.badge}
                </span>
                {item.recommended && (
                  <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 text-[10px] font-bold">
                    Recommandé
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-base font-bold text-heading">{item.name}</h3>
                <p className="text-[11px] font-medium text-primary">{item.protocols}</p>
              </div>

              <p className="text-xs text-body leading-relaxed">{item.description}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
              {item.guideUrl ? (
                <Link
                  href={item.guideUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
                >
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Consulter le guide</span>
                </Link>
              ) : (
                <span className="text-[11px] text-slate-500">Installation via store</span>
              )}
              <span className="text-[11px] text-slate-400">100% Compatible</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
