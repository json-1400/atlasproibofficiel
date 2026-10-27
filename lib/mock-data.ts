export interface Plan {
  id: string;
  slug: string;
  title: string;
  durationMonths: number;
  price: number;
  oldPrice?: number;
  badge?: string;
  isPopular?: boolean;
  screensCount?: number;
  features: string[];
  ctaLabel: string;
  seoTitle: string;
  seoDescription: string;
  faq: Array<{ question: string; answer: string }>;
}

export interface AppPage {
  id: string;
  slug: string;
  title: string;
  platform: string;
  version: string;
  apkUrl: string;
  sha256: string;
  logoUrl?: string;
  fileSize?: string;
  minRequirements?: string;
  downloaderCode?: string;
  changelog: string[];
  installSteps: Array<{ title: string; description: string }>;
  relatedTutorialSlugs: string[];
  seoTitle: string;
  seoDescription: string;
  directAnswer?: string;
  keyTakeaways?: string[];
  faq?: Array<{ question: string; answer: string }>;
}

export type {
  Tutorial,
  TutorialStep,
  TutorialSection,
  TutorialTocItem,
  TutorialCategory,
} from "./mock-data-tutorials";

export {
  MOCK_TUTORIALS_EXTENDED,
  TUTORIAL_CATEGORIES,
  POPULAR_TAGS,
  getTutorialsByCategory,
  getTutorialsByTag,
  getCategoryBySlug,
  getCategoryById,
  getAllIndexableCategories,
} from "./mock-data-tutorials";
import { MOCK_TUTORIALS_EXTENDED } from "./mock-data-tutorials";
import type { Tutorial } from "./mock-data-tutorials";

export const MOCK_PLANS: Plan[] = [
  {
    id: "plan-12",
    slug: "atlas-pro-12-mois",
    title: "Abonnement Atlas Pro 12 Mois",
    durationMonths: 12,
    price: 40,
    oldPrice: 60,
    badge: "Populaire - Meilleur Prix",
    isPopular: true,
    screensCount: 1,
    features: [
      "Plus de 10 000 chaînes internationales en direct 4K / FHD sans coupure",
      "Compatible Smart TV Samsung (Tizen), LG (webOS), Android TV & Fire Stick",
      "Codes d'activation compatibles IPTV Smarters Pro, IBO Player & Atlas Pro ONTV",
      "VOD Films et Séries récents mis à jour chaque semaine",
      "Replay 7 jours et EPG synchronisé sur l'ensemble des bouquets",
      "Livraison immédiate des identifiants Xtream Codes par e-mail en 15 minutes",
      "Support WhatsApp réactif 7j/7 pour la configuration",
    ],
    ctaLabel: "Acheter 12 Mois (40€)",
    seoTitle: "Abonnement Atlas Pro 12 Mois (40€) | 4K Sans Coupure",
    seoDescription:
      "Abonnement officiel Atlas Pro 12 mois pour Smart TV (Samsung, LG, Android TV, Firestick). Flux 4K Ultra HD sans coupure, 10 000+ chaînes et activation 15 min.",
    faq: [
      {
        question: "Comment installer et utiliser l'abonnement IPTV 12 mois sur Smart TV Samsung ou LG ?",
        answer:
          "L'abonnement IPTV 12 mois fonctionne sur Smart TV Samsung (Tizen OS) et LG (webOS) via des applications certifiées comme IBO Player, IPTV Smarters Pro ou Smart IPTV. Dès validation de votre commande, vous recevez vos identifiants Xtream Codes (URL serveur, identifiant, mot de passe) et notre tutoriel de configuration pas à pas.",
      },
      {
        question: "L'abonnement 12 mois est-il compatible avec Fire TV Stick et boîtier Android ?",
        answer:
          "Oui, à 100%. Sur Fire Stick, boîtier Android TV ou Google TV, vous pouvez soit utiliser l'application native Atlas Pro ONTV (via le code Downloader 822648), soit n'importe quel lecteur IPTV tiers compatible Xtream Codes.",
      },
      {
        question: "En combien de temps recevrai-je mes codes Atlas Pro 12 mois ?",
        answer:
          "Dès validation de votre paiement, vos identifiants de connexion et instructions de configuration vous sont expédiés par e-mail en moins de 15 minutes.",
      },
      {
        question: "L'abonnement 12 mois fonctionne-t-il sur plusieurs appareils ?",
        answer:
          "Vous pouvez installer l'application sur tous vos écrans (Smart TV du salon, smartphone en déplacement, PC de bureau), mais la lecture en direct se fait sur un écran simultané pour la formule standard (pour 2 à 4 écrans en simultané, découvrez nos formules multi-écrans).",
      },
      {
        question: "Y a-t-il un engagement ou un prélèvement automatique ?",
        answer:
          "Non, c'est un paiement unique de 40€ sans aucun prélèvement récurrent ni reconduction tacite. Vous recevez un simple rappel avant l'expiration pour renouveler si vous le souhaitez.",
      },
    ],
  },
  {
    id: "plan-6",
    slug: "atlas-pro-6-mois",
    title: "Abonnement Atlas Pro 6 Mois",
    durationMonths: 6,
    price: 30,
    oldPrice: 40,
    badge: "Flexible",
    isPopular: false,
    features: [
      "Accès complet aux 10 000 chaînes direct & replay",
      "Qualité FHD & HD fluide",
      "VOD Films et Séries illimitée",
      "Compatible tous boîtiers & Smart TVs",
      "Livraison express par email en 15 minutes",
      "Assistance technique 7j/7",
    ],
    ctaLabel: "Acheter 6 Mois (30€)",
    seoTitle: "Acheter Abonnement Atlas Pro 6 Mois : Commander en Ligne (30€)",
    seoDescription:
      "Commandez votre abonnement IPTV Atlas Pro 6 mois officiel pour 30€. Idéal pour la saison de football et le sport en 4K. Activation immédiate en 15 min.",
    faq: [
      {
        question: "À qui s'adresse principalement l'abonnement Atlas Pro 6 mois ?",
        answer:
          "Cette formule est particulièrement prisée par les amateurs de sport désirant couvrir une demi-saison de compétitions (Ligue des Champions, championnats de football, F1) ou par les utilisateurs souhaitant tester le service sur une durée significative sans engagement annuel.",
      },
      {
        question: "Puis-je prolonger en formule 12 mois par la suite sans réinstaller l'application ?",
        answer:
          "Oui, absolument. Vous pouvez faire évoluer votre abonnement vers un forfait 12 mois à tout moment via notre page de renouvellement. Vos identifiants sont prolongés sans nécessiter de réinstallation ni de perte de vos favoris.",
      },
      {
        question: "Le forfait 6 mois comprend-il les chaînes 4K et le bouquet VOD complet ?",
        answer:
          "Tout à fait. La formule 6 mois inclut l'intégralité du bouquet Atlas Pro : plus de 10 000 chaînes en 4K/FHD native, le service Replay 7 jours ainsi que la cinémathèque VOD mise à jour chaque semaine.",
      },
    ],
  },
  {
    id: "plan-3",
    slug: "atlas-pro-3-mois",
    title: "Abonnement Atlas Pro 3 Mois",
    durationMonths: 3,
    price: 20,
    oldPrice: 25,
    badge: "Découverte",
    isPopular: false,
    features: [
      "Accès complet au bouquet IPTV Atlas Pro",
      "Qualité FHD & HD fluide",
      "Catalogue VOD à la demande complet",
      "Livraison par e-mail en 15 minutes",
      "Support d'installation et configuration inclus",
    ],
    ctaLabel: "Acheter 3 Mois (20€)",
    seoTitle: "Acheter Forfait Atlas Pro 3 Mois : Test & Commande Immédiate (20€)",
    seoDescription:
      "Commandez votre forfait test 3 mois Atlas Pro IPTV pour 20€. Évaluez la qualité de notre flux 4K stable sans engagement. Réception de vos codes en 15 minutes.",
    faq: [
      {
        question: "Pourquoi choisir la formule découverte 3 mois ?",
        answer:
          "C'est la solution idéale pour évaluer sereinement la stabilité de nos serveurs CDN européens, la fluidité des flux en direct lors des grands matchs et la réactivité de notre support client pour seulement 20€.",
      },
      {
        question: "Y a-t-il des restrictions sur les chaînes avec l'offre 3 mois ?",
        answer:
          "Aucune restriction. La formule 3 mois bénéficie rigoureusement du même accès premium que les formules longue durée : l'ensemble des chaînes en direct et le catalogue VOD complet.",
      },
      {
        question: "Quelle connexion internet est recommandée pour le flux 4K ?",
        answer:
          "Une connexion internet stable d'au moins 15 Mbps (ADSL stable, Fibre optique ou 4G/5G) est recommandée pour profiter d'un visionnage fluide sans interruption.",
      },
    ],
  },
  {
    id: "plan-2-ecrans",
    slug: "atlas-pro-2-ecrans",
    title: "Abonnement Atlas Pro 2 Écrans (12 Mois)",
    durationMonths: 12,
    price: 60,
    oldPrice: 80,
    badge: "Duo • 2 Écrans",
    isPopular: false,
    screensCount: 2,
    features: [
      "2 Connexions simultanées indépendantes",
      "Plus de 10 000 chaînes directes en 4K/FHD",
      "VOD Films et Séries en illimité sur 2 écrans",
      "Replay 7 jours inclus sur chaque téléviseur",
      "Compatible Smart TV, Android Box, Fire Stick, iOS",
      "Livraison immédiate de vos 2 accès en 15 min",
      "Support technique prioritaire 7j/7",
    ],
    ctaLabel: "Commander 2 Écrans (60€)",
    seoTitle: "Abonnement IPTV Atlas 2 Écrans Simultanés | Atlas Pro ONTV Officiel",
    seoDescription:
      "Abonnement Atlas Pro 2 écrans simultanés (12 mois pour 60€). Regardez vos programmes en même temps sur 2 téléviseurs ou appareils en 4K sans coupure.",
    faq: [
      {
        question: "Comment fonctionnent les 2 écrans simultanés ?",
        answer:
          "Vous recevez deux codes d'accès distincts ou un lien multiposte permettant de diffuser deux programmes différents au même moment, sans aucun conflit.",
      },
      {
        question: "Les 2 écrans doivent-ils être dans le même logement ?",
        answer:
          "Ils peuvent être utilisés dans votre domicile principal (salon et chambre) ou en déplacement sur votre smartphone ou tablette.",
      },
    ],
  },
  {
    id: "plan-3-ecrans",
    slug: "atlas-pro-3-ecrans",
    title: "Abonnement Atlas Pro 3 Écrans (12 Mois)",
    durationMonths: 12,
    price: 80,
    oldPrice: 110,
    badge: "Trio • 3 Écrans",
    isPopular: false,
    screensCount: 3,
    features: [
      "3 Connexions simultanées indépendantes",
      "Accès 4K / FHD / HEVC sur 3 téléviseurs",
      "VOD et Replay complets pour toute la famille",
      "Chaque utilisateur gère ses favoris et zapping",
      "Compatible toutes marques de Smart TV et boîtiers",
      "Activation express en moins de 15 minutes",
      "Assistance dédiée WhatsApp 7j/7",
    ],
    ctaLabel: "Commander 3 Écrans (80€)",
    seoTitle: "Abonnement IPTV Atlas 3 Écrans Simultanés | Atlas Pro ONTV Officiel",
    seoDescription:
      "Abonnement Atlas Pro 3 écrans simultanés (12 mois à 80€). 3 flux 4K actifs en même temps pour toute la famille. Activation rapide et garantie anti-freeze.",
    faq: [
      {
        question: "Puis-je utiliser 3 applications différentes ?",
        answer:
          "Oui, par exemple une Smart TV dans le salon avec IBO Player, une chambre avec Fire Stick, et une tablette en déplacement.",
      },
    ],
  },
  {
    id: "plan-4-ecrans",
    slug: "atlas-pro-4-ecrans",
    title: "Abonnement Atlas Pro 4 Écrans (12 Mois)",
    durationMonths: 12,
    price: 100,
    oldPrice: 140,
    badge: "Pack Famille • 4 Écrans",
    isPopular: false,
    screensCount: 4,
    features: [
      "4 Connexions simultanées indépendantes",
      "Le meilleur tarif par écran du marché (25€ / an / écran)",
      "4 Flux 4K/FHD actifs en simultané sans baisse de débit",
      "Catalogue VOD cinéma et séries illimité",
      "Serveurs haute performance 10 Gbps anti-freeze",
      "Livraison de vos 4 accès par e-mail en 15 min",
      "Support VIP dédié 7j/7",
    ],
    ctaLabel: "Commander 4 Écrans (100€)",
    seoTitle: "Abonnement IPTV Atlas 4 Écrans Simultanés | Atlas Pro ONTV Officiel",
    seoDescription:
      "Abonnement Atlas Pro 4 écrans simultanés Pack Famille (12 mois pour 100€). 4 postes actifs en direct 4K. Idéal grands foyers au meilleur tarif unitaire.",
    faq: [
      {
        question: "Quelle bande passante internet est requise pour 4 écrans en 4K ?",
        answer:
          "Une connexion Fibre ou très haut débit (minimum 40 à 50 Mbps au total) permet d'alimenter les 4 écrans simultanément en ultra haute définition sans ralentissement.",
      },
    ],
  },
];

export const MOCK_APP_PAGES: AppPage[] = [
  {
    id: "app-ontv",
    slug: "atlas-pro-ontv",
    title: "Atlas Pro ONTV APK Officiel",
    platform: "Android TV, Boîtier Android & Fire Stick",
    version: "4.5.0",
    fileSize: "45 Mo",
    minRequirements: "Android 5.1+, Fire OS 6.0+, 1.5 Go RAM",
    downloaderCode: "822648",
    logoUrl: "/atlaspro-ontv-apk-logo.webp",
    apkUrl: "/downloads/atlas-pro-ontv-v4.5.0.apk",
    sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    changelog: [
      "Stabilité multi-serveur : basculement automatique instantané en cas de surcharge de ligne",
      "Interface télécommande entièrement optimisée avec raccourcis directs 4 touches",
      "Zapping ultra-rapide sous les 0.3 seconde sur l'ensemble des chaînes direct",
      "Compatibilité certifiée avec Android TV 14 et Amazon Fire OS 8",
      "Décodage matériel 4K HEVC / HDR10 et gestion du son Dolby Digital 5.1",
    ],
    installSteps: [
      {
        title: "Ouvrir l'application Downloader by AFTVnews",
        description:
          "Sur votre Amazon Fire TV Stick, Smart TV Android ou boîtier TV, ouvrez l'application officielle Downloader by AFTVnews (téléchargeable gratuitement depuis l'Amazon Appstore ou le Google Play Store).",
      },
      {
        title: "Saisir le code Downloader 822648",
        description:
          "Dans le champ URL de recherche de Downloader by AFTVnews, tapez directement le code numérique officiel 822648 puis appuyez sur le bouton 'Go'. Le téléchargement officiel se lance automatiquement.",
      },
      {
        title: "Valider l'installation et entrer votre code d'accès",
        description:
          "Dès que le fichier est chargé, confirmez en cliquant sur 'Installer'. Ouvrez Atlas Pro ONTV et saisissez votre code d'activation à 12 chiffres ou vos identifiants Xtream Codes pour profiter de vos chaînes 4K.",
      },
    ],
    relatedTutorialSlugs: [
      "installer-atlas-pro-sur-tv-samsung",
      "installer-atlas-pro-sur-fire-stick",
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
    ],
    seoTitle: "Atlas Pro ONTV APK [Code Downloader 822648] v4.5",
    seoDescription:
      "Télécharger l'APK officiel Atlas Pro ONTV v4.5 pour Smart TV et Fire Stick via le code 822648. Guide d'installation rapide sans coupure.",
    directAnswer:
      "Pour installer l'application officielle Atlas Pro ONTV (ou Atlas Pro On TV / atlaspro ontv) sur Smart TV, Fire Stick ou boîtier Android : ouvrez l'application Downloader by AFTVnews, entrez le code numérique officiel 822648 dans la barre d'adresse, puis validez sur 'Go'. Le fichier APK officiel v4.5.0 se télécharge directement et en toute sécurité sans passer par le Google Play Store ni les plateformes miroirs comme APKPure. Cliquez sur 'Installer' puis renseignez vos identifiants pour profiter de vos chaînes 4K.",
    keyTakeaways: [
      "Code Downloader officiel : 822648 pour un téléchargement direct et sécurisé en 15 secondes.",
      "Variantes d'appellation : application officielle reconnue sous les noms Atlas Pro ONTV et Atlas Pro On TV.",
      "Installation certifiée sans Play Store : procédure officielle directe sans passer par des miroirs tiers non vérifiés.",
      "Compatibilité étendue : Smart TV Android, Google TV, boîtiers 4K (Xiaomi, Nvidia Shield) et Amazon Fire Stick.",
    ],
    faq: [
      {
        question: "Comment installer Atlas Pro ONTV avec le code Downloader by AFTVnews ?",
        answer:
          "Installez l'application gratuite Downloader by AFTVnews depuis l'Amazon Appstore ou le Google Play Store. Ouvrez Downloader, tapez le code 822648 dans la barre d'adresse et appuyez sur 'Go'. L'application se télécharge et s'installe directement sans clé USB ni ordinateur.",
      },
      {
        question: "Pourquoi l'application Atlas Pro ONTV n'est-elle pas disponible sur le Google Play Store ?",
        answer:
          "Les politiques du Google Play Store restreignent la distribution directe de lecteurs IPTV préconfigurés. L'application officielle Atlas Pro ONTV est distribuée au format APK certifié sans virus ni malware via le code officiel Downloader 822648, garantissant la version la plus stable et exempte de restrictions.",
      },
      {
        question: "Peut-on télécharger Atlas Pro ONTV APK depuis APKPure ou d'autres plateformes tierces ?",
        answer:
          "Nous recommandons formellement d'utiliser exclusivement notre lien officiel via le code Downloader 822648. Les fichiers proposés sur APKPure ou d'autres sites miroirs sont fréquemment obsolètes ou modifiés, ce qui peut provoquer des erreurs de connexion au serveur ou des fermetures inattendues de l'application.",
      },
      {
        question: "Comment autoriser Downloader by AFTVnews à installer des applications ?",
        answer:
          "Sur Fire Stick : allez dans Paramètres > Ma Fire TV > Options pour les développeurs > Installer applis inconnues, puis activez Downloader. Sur Android TV : Paramètres > Sécurité et restrictions > Sources inconnues > autoriser Downloader.",
      },
      {
        question: "Quelle est la différence entre Atlas Pro ONTV et Atlas Pro Max ?",
        answer:
          "Atlas Pro ONTV est spécialement pensé pour les écrans de salon contrôlés par télécommande (Smart TV, boîtiers Android, Fire Stick, Xiaomi TV Box) avec interface horizontale et décodage 4K natif. Atlas Pro Max est quant à lui conçu pour les interfaces tactiles sur smartphones et tablettes Android.",
      },
      {
        question: "L'application fonctionne-t-elle avec un code à 12 chiffres ?",
        answer:
          "Oui, Atlas Pro ONTV supporte nativement la connexion par code d'activation à 12 chiffres, ainsi que les identifiants Xtream Codes (URL serveur, nom d'utilisateur et mot de passe).",
      },
    ],
  },
  {
    id: "app-max",
    slug: "atlas-pro-max",
    title: "Atlas Pro Max 7 APK Officiel",
    platform: "Smartphones Android, Tablettes & Fire TV",
    version: "7.0.0",
    fileSize: "28 Mo",
    minRequirements: "Android 6.0+, 2 Go RAM",
    downloaderCode: "388685",
    apkUrl: "/downloads/atlas-pro-max-v7.0.0.apk",
    sha256: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb",
    changelog: [
      "Mise à jour majeure succédant à Atlas Pro Max 5.0.1 APK avec stabilité multi-flux",
      "Interface tactile retravaillée avec navigation intuitive par gestes de glissement",
      "Fonction de téléchargement local pour visionnage hors-ligne des films et séries VOD",
      "Mode Picture-in-Picture (PiP) pour continuer à regarder vos chaînes en multitâche",
      "Optimisation de la consommation de batterie et réduction de la chauffe processeur",
      "Compatibilité étendue avec Chromecast et diffusion sans fil Miracast",
    ],
    installSteps: [
      {
        title: "Ouvrir l'application Downloader by AFTVnews",
        description:
          "Lancez l'application Downloader by AFTVnews sur votre Fire TV Stick, boîtier TV ou tablette Android.",
      },
      {
        title: "Saisir le code Downloader 388685 (ou 999217)",
        description:
          "Entrez le code officiel 388685 (ou le code miroir 999217) dans le champ d'adresse URL principal et cliquez sur 'Go'. Le téléchargement démarre immédiatement.",
      },
      {
        title: "Installer et activer Atlas Pro Max 7",
        description:
          "Cliquez sur 'Installer', lancez l'application et renseignez votre code d'accès à 12 chiffres pour débloquer l'accès à tous vos contenus en direct et VOD.",
      },
    ],
    relatedTutorialSlugs: [
      "installer-atlas-pro-sur-fire-stick",
      "retrouver-entrer-code-atlas-pro-ontv",
      "resoudre-coupure-buffering-atlas-pro",
    ],
    seoTitle: "Atlas Pro Max APK 2026 (v6.0 & 7.0) | Code 388685",
    seoDescription:
      "Télécharger l'APK officiel Atlas Pro Max 2026 (v6.0, 7.0 et 5.0.1) pour smartphone et Fire TV. Code Downloader 388685, 4K & mode PiP.",
    directAnswer:
      "Pour installer l'application officielle Atlas Pro Max APK 2026 (remplaçant les versions antérieures 5.0.1, 6.0 et 7.0) sur smartphone, tablette ou Fire TV : ouvrez Downloader by AFTVnews ou votre navigateur mobile, tapez le code officiel 388685 (ou le miroir 999217) et cliquez sur 'Go'. Cette version officielle 2026 préserve vos identifiants de compte et favoris tout en intégrant le mode Picture-in-Picture, le zapping ultra-rapide et le téléchargement hors-ligne des séries et films VOD.",
    keyTakeaways: [
      "Version officielle 2026 : remplace les packages antérieurs et fichiers clones étiquetés 5.0.1, 6.0 ou 7.0.",
      "Codes Downloader certifiés : 388685 (serveur principal) et 999217 (miroir haute disponibilité).",
      "Usage tactile & mobile : optimisé pour smartphones et tablettes Android avec diffusion Chromecast sur TV.",
      "Protection contre les faux APK : évitez les versions tierces non sécurisées (7.0 v911) distribuées hors réseau officiel.",
    ],
    faq: [
      {
        question: "Comment installer Atlas Pro Max avec Downloader by AFTVnews ?",
        answer:
          "Ouvrez l'application Downloader by AFTVnews sur votre appareil, tapez le code court 388685 (ou le code alternatif 999217) dans la barre de recherche et validez sur 'Go'. Dès que le fichier est prêt, cliquez sur 'Installer'.",
      },
      {
        question: "Que valent les versions Atlas Pro Max 6.0, 7.0 ou 7.0 v911 trouvées sur Internet ?",
        answer:
          "La plupart des fichiers étiquetés 'Atlas Pro Max 6.0', '7.0' ou '7.0 v911' sur des sites miroirs non vérifiés sont des APK modifiés (mods) ou obsolètes pouvant provoquer des blocages serveur, des failles de sécurité ou des déconnexions intempestives. La version officielle 2026 authentifiée et sécurisée est distribuée exclusivement via nos codes officiels Downloader 388685 et 999217.",
      },
      {
        question: "Comment passer d'Atlas Pro Max 5.0.1 APK à cette nouvelle version 2026 ?",
        answer:
          "Si vous utilisez encore la version 5.0.1 d'Atlas Pro Max, il vous suffit d'installer cette version par-dessus. Vos identifiants de connexion et vos favoris sont conservés sans aucune perte.",
      },
      {
        question: "Peut-on utiliser Atlas Pro Max sur smartphone et le caster sur TV ?",
        answer:
          "Oui, Atlas Pro Max intègre un protocole de diffusion compatible Google Cast et Chromecast. Vous pouvez lancer un direct ou un film sur votre téléphone et l'envoyer sur votre téléviseur d'un simple clic.",
      },
      {
        question: "Le mode hors-ligne fonctionne-t-il sur les séries et films VOD ?",
        answer:
          "Oui, la version 7.0.0 permet de pré-télécharger des épisodes ou des films en mémoire locale pour les visionner en voyage sans connexion internet active.",
      },
    ],
  },
  {
    id: "app-9x",
    slug: "atlas-pro-9x",
    title: "Atlas Pro 9X APK Officiel",
    platform: "Boîtiers TV Android, Fire TV & Anciens Appareils",
    version: "9.8.0",
    fileSize: "18 Mo",
    minRequirements: "Android 4.4+, Fire OS 5.0+, 1 Go RAM",
    downloaderCode: "4858164",
    logoUrl: "/images/atlas/atlaspro-9x-apk-logo.webp",
    apkUrl: "/downloads/atlas-pro-9x-v9.8.0.apk",
    sha256: "9f8a3c2e1b4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f",
    changelog: [
      "Moteur de lecture ultra-allégé consommant moins de 40 Mo de mémoire vive RAM",
      "Vitesse de zapping exceptionnelle inférieure à 0.2 seconde entre les chaînes",
      "Support élargi pour anciens boîtiers Android (compatible dès Android 4.4 KitKat)",
      "Prise en charge complète des claviers et télécommandes infrarouges avec pavé numérique",
      "Optimisation anti-freeze sur connexions ADSL et réseaux Wi-Fi faibles",
    ],
    installSteps: [
      {
        title: "Ouvrir Downloader by AFTVnews sur votre TV",
        description:
          "Lancez l'application Downloader by AFTVnews sur votre téléviseur Android ou Amazon Fire TV Stick.",
      },
      {
        title: "Entrer le code Downloader 4858164 (ou 1003269)",
        description:
          "Saisissez le code officiel 4858164 (ou code miroir 1003269) dans la barre d'adresse de Downloader et appuyez sur 'Go'. Grâce au poids plume de 18 Mo, le chargement s'effectue en quelques secondes.",
      },
      {
        title: "Installer et profiter du zapping ultra-rapide",
        description:
          "Validez l'installation, ouvrez Atlas Pro 9X et renseignez votre code d'activation. Idéal pour les box 1 Go de RAM et connexions ADSL.",
      },
    ],
    relatedTutorialSlugs: [
      "installer-atlas-pro-sur-fire-stick",
      "resoudre-coupure-buffering-atlas-pro",
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
    ],
    seoTitle: "Atlas Pro 9X APK Officiel v9.8 [Code 4858164]",
    seoDescription:
      "Installez l'APK officiel Atlas Pro 9X v9.8 via le code Downloader 4858164. Version allégée pour Fire Stick et boîtier Android : zapping rapide sans coupure.",
    directAnswer:
      "Pour installer Atlas Pro 9X v9.8.0 sur boîtier Android ou Fire Stick : ouvrez l'application Downloader, saisissez le code 4858164 (ou 1003269) et validez. Avec un poids plume de seulement 18 Mo et moins de 40 Mo de RAM consommée, Atlas Pro 9X est la version ultra-légère conçue pour éliminer tout freeze sur les box modestes (1 Go RAM) et les connexions ADSL.",
    keyTakeaways: [
      "Codes Downloader : 4858164 (principal) et 1003269 (serveur secondaire).",
      "Poids plume 18 Mo : chargement instantané et consommation mémoire minimale (idéal box 1 Go RAM).",
      "Zapping ultra-véloce : passage d'une chaîne à l'autre en moins de 0.2 seconde.",
      "Rétrocompatibilité maximale : fonctionne dès Android 4.4 KitKat et Fire OS 5.0.",
    ],
    faq: [
      {
        question: "Comment installer Atlas Pro 9X avec Downloader by AFTVnews ?",
        answer:
          "Dans l'application Downloader by AFTVnews sur votre boîtier TV ou Fire Stick, saisissez simplement le code 4858164 (ou 1003269) et validez avec 'Go'. L'application se télécharge et vous propose immédiatement l'installation.",
      },
      {
        question: "Que faire en cas de message 'No signal found' ou d'écran noir sur Atlas Pro 9X ?",
        answer:
          "Le message 'No signal found' indique généralement une mise en cache corrompue ou un blocage DNS de votre FAI. Allez dans Paramètres > Applications > Atlas Pro 9X > Vider le cache, puis redémarrez votre box internet. Si le problème persiste, testez avec les DNS Cloudflare 1.1.1.1.",
      },
      {
        question: "Pourquoi choisir Atlas Pro 9X plutôt qu'Atlas Pro ONTV ?",
        answer:
          "Atlas Pro 9X est la version ultra-allégée de la gamme Atlas. Avec seulement 18 Mo et une consommation minimale de RAM, elle est idéale si votre boîtier TV Android dispose de peu de ressources (1 Go de RAM) ou si vous recherchez le zapping le plus rapide possible sans fioritures visuelles.",
      },
      {
        question: "Atlas Pro 9X est-il compatible avec les téléviseurs récents ?",
        answer:
          "Absolument. Bien qu'optimisé pour tourner sans faille sur des configurations modestes, Atlas Pro 9X prend en charge la 4K Ultra HD et fonctionne parfaitement sur les boîtiers récents (Nvidia Shield, Xiaomi Box S 2nd Gen, Fire TV 4K Max).",
      },
    ],
  },
  {
    id: "app-ibo",
    slug: "atlas-pro-ibo",
    title: "Atlas Pro IBO APK Officiel",
    platform: "Android TV, Boîtiers Android & Fire TV Stick",
    version: "3.8.0",
    fileSize: "32 Mo",
    minRequirements: "Android 5.0+, Fire OS 6.0+, 1.5 Go RAM",
    downloaderCode: "2681120",
    apkUrl: "/downloads/atlas-pro-ibo-v3.8.0.apk",
    sha256: "7b4e2a1d8f3c5e6a9b0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
    changelog: [
      "Interface épurée et ultra-rapide dédiée exclusivement aux serveurs Atlas Pro",
      "Connexion directe par code d'activation à 12 chiffres ou API Xtream Codes",
      "Guide électronique des programmes (EPG 7 jours) synchronisé automatiquement",
      "Lecture fluide en 4K Ultra HD avec accélération matérielle et contrôle du buffer",
      "Prise en charge intégrale des flux audio multicanaux Dolby et sous-titres multiples",
    ],
    installSteps: [
      {
        title: "Ouvrir l'application Downloader by AFTVnews",
        description:
          "Sur votre boîtier Android ou clé Amazon Fire TV Stick, ouvrez l'application officielle Downloader by AFTVnews.",
      },
      {
        title: "Saisir le code Downloader 2681120 (ou 135290)",
        description:
          "Tapez le code numérique officiel 2681120 (ou code miroir 135290) dans la zone de recherche URL et cliquez sur 'Go'. Le téléchargement officiel démarre instantanément.",
      },
      {
        title: "Installer et activer avec votre code Atlas Pro",
        description:
          "Cliquez sur 'Installer', lancez Atlas Pro IBO et entrez simplement votre code d'activation à 12 chiffres pour accéder à vos bouquets TV.",
      },
    ],
    relatedTutorialSlugs: [
      "installer-atlas-pro-sur-fire-stick",
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
      "retrouver-entrer-code-atlas-pro-ontv",
    ],
    seoTitle: "Atlas Pro IBO APK [Code 2681120 & 135290] | Officiel",
    seoDescription:
      "Installez l'APK officiel Atlas Pro IBO via le code Downloader 2681120 ou 135290. Serveurs 4K stables, zapping fluide et configuration Android TV.",
    directAnswer:
      "Pour installer Atlas Pro IBO sur votre téléviseur ou clé Fire TV : saisissez le code 2681120 (ou 135290) dans l'application Downloader by AFTVnews. Cette version combine la puissance de l'interface IBO avec une préconfiguration directe sur les serveurs Atlas Pro sans frais d'activation supplémentaires.",
    keyTakeaways: [
      "Codes Downloader : 2681120 (officiel) et 135290 (serveur alternatif).",
      "Sans frais tiers : intègre nativement la licence Atlas Pro sans payer d'activation IBO séparée.",
      "Double compatibilité de connexion : connexion directe par code 12 chiffres ou API Xtream Codes.",
      "Moteur vidéo 4K UHD : décodage matériel avec contrôle du buffer anti-coupures.",
    ],
    faq: [
      {
        question: "Comment installer Atlas Pro IBO avec Downloader by AFTVnews ?",
        answer:
          "Lancez l'application Downloader by AFTVnews sur votre appareil, tapez le code 2681120 (ou le code alternatif 135290) dans le champ URL et validez avec 'Go'. Dès le chargement terminé, cliquez sur 'Installer'.",
      },
      {
        question: "Quelle est la différence entre Atlas Pro IBO et l'application IBO Player classique ?",
        answer:
          "Atlas Pro IBO est l'application APK officielle dédiée et configurée pour le service Atlas Pro. Contrairement à IBO Player qui est un lecteur multimédia généraliste nécessitant une activation payante séparée et la configuration manuelle de listes M3U, Atlas Pro IBO intègre directement les serveurs Atlas Pro sans frais d'activation tiers.",
      },
      {
        question: "Sur quels appareils fonctionne l'APK Atlas Pro IBO ?",
        answer:
          "Atlas Pro IBO fonctionne sur tous les équipements sous Android ou Fire OS : Amazon Fire TV Stick, Xiaomi Mi Box, Nvidia Shield, Smart TV Sony/Philips/TCL sous Android TV ou Google TV, ainsi que les smartphones et tablettes Android.",
      },
    ],
  },
  {
    id: "app-windows",
    slug: "windows",
    title: "Atlas Pro pour Windows PC",
    platform: "Windows 10 / Windows 11",
    version: "2.4.1",
    fileSize: "68 Mo",
    minRequirements: "Windows 10/11 64-bit, 4 Go RAM",
    apkUrl: "/downloads/atlas-pro-windows-setup.exe",
    sha256: "8743b52063cd84097a65d1633f5c74f5",
    changelog: [
      "Prise en charge de l'accélération matérielle GPU DirectX",
      "Amélioration de la gestion multi-écrans",
    ],
    installSteps: [
      {
        title: "Télécharger l'exécutable",
        description: "Récupérez le programme d'installation pour Windows 64-bit.",
      },
      {
        title: "Exécuter l'installateur",
        description: "Suivez l'assistant d'installation standard sur votre ordinateur.",
      },
      {
        title: "Entrer le code d'activation",
        description: "Lancez le lecteur et saisissez votre code à 12 chiffres.",
      },
    ],
    relatedTutorialSlugs: ["atlas-pro-ne-peut-pas-se-connecter-au-serveur", "retrouver-entrer-code-atlas-pro-ontv"],
    seoTitle: "Atlas Pro Windows PC | Télécharger le lecteur IPTV Officiel",
    seoDescription:
      "Installez Atlas Pro sur votre ordinateur Windows 10 et 11. Lecteur haute performance avec zapping ultra-rapide.",
    directAnswer:
      "Pour installer Atlas Pro sur un ordinateur Windows 10 ou Windows 11 (64-bit) : téléchargez l'exécutable officiel atlas-pro-windows-setup.exe, lancez l'installation guidée en 3 clics, puis saisissez votre code d'activation à 12 chiffres ou vos accès Xtream Codes. Le lecteur prend en charge l'accélération matérielle DirectX pour un affichage 4K 60fps sans solliciter le processeur.",
    keyTakeaways: [
      "Compatibilité native : fonctionne sur PC portable et tour sous Windows 10 et Windows 11 (64 bits).",
      "Accélération GPU DirectX : fluidité maximale en 4K 60fps sans surchauffe de la machine.",
      "Gestion multi-écrans : regardez un direct sportif en plein écran tout en continuant à travailler.",
      "Zéro émulateur requis : installation directe sans BlueStacks ni logiciel tiers lourd.",
    ],
  },
  {
    id: "app-ios",
    slug: "ios",
    title: "Service Atlas Pro sur iPhone, iPad & Apple TV (Guide App Store)",
    platform: "iPhone, iPad & Apple TV (tvOS)",
    version: "Guide Lecteurs App Store",
    fileSize: "App Store",
    minRequirements: "iOS 15+, iPadOS 15+, tvOS 15+",
    apkUrl: "https://apps.apple.com",
    sha256: "Certifié App Store (Non applicable APK)",
    changelog: [
      "Appareils non compatibles avec les APK natifs Atlas Pro (Écosystème Apple)",
      "Accès 100 % opérationnel au service Atlas Pro via lecteurs certifiés App Store",
      "Compatibilité Xtream Codes API & M3U sur IPTV Smarters Lite, UHF IPTV & IBO Player",
      "Prise en charge AirPlay 2, 4K HDR 60fps et son Dolby Digital 5.1",
    ],
    installSteps: [
      {
        title: "Télécharger un lecteur IPTV alternatif sur l'App Store",
        description:
          "Les appareils Apple ne supportant pas les APK natifs Atlas Pro, installez une application de lecture certifiée sur l'App Store : IPTV Smarters Player Lite ou UHF IPTV (recommandé pour Apple TV).",
      },
      {
        title: "Sélectionner la connexion Xtream Codes API",
        description:
          "Dans le lecteur installé, choisissez l'option de connexion 'Xtream Codes API' (ou 'Login with Xtream Codes') qui permet de charger vos bouquets en direct et VOD.",
      },
      {
        title: "Saisir vos identifiants d'abonnement Atlas Pro",
        description:
          "Renseignez l'URL du serveur, votre identifiant (username) et votre mot de passe reçus par e-mail lors de votre commande pour charger l'intégralité du bouquet 4K Atlas Pro.",
      },
    ],
    relatedTutorialSlugs: ["retrouver-entrer-code-atlas-pro-ontv", "resoudre-coupure-buffering-atlas-pro"],
    seoTitle: "Comment Regarder Atlas Pro sur iPhone, iPad & Apple TV | Guide App Store",
    seoDescription:
      "Comment faire tourner le service Atlas Pro sur iPhone, iPad et Apple TV ? Les appareils Apple n'étant pas compatibles APK, découvrez les lecteurs certifiés App Store et la configuration Xtream Codes.",
    directAnswer:
      "Pour utiliser votre abonnement Atlas Pro sur iPhone, iPad ou Apple TV : téléchargez un lecteur IPTV homologué sur l'App Store officiel d'Apple (comme IPTV Smarters Player Lite, UHF IPTV ou IBO Player). Ouvrez l'application, sélectionnez 'Connexion via API Xtream Codes' et renseignez vos identifiants Atlas Pro (URL serveur, nom d'utilisateur et mot de passe reçus par e-mail).",
    keyTakeaways: [
      "Pas d'APK sur Apple : iOS et tvOS n'acceptent pas les fichiers APK Android.",
      "Lecteurs homologués App Store : IPTV Smarters Lite, UHF IPTV (recommandé Apple TV) ou IBO Player.",
      "Configuration Xtream Codes : vos identifiants officiels fonctionnent sur tous les lecteurs certifiés.",
      "Fonctionnalités avancées : prise en charge d'AirPlay 2, son spatial Dolby Digital et EPG complet.",
    ],
    faq: [
      {
        question: "Existe-t-il une application officielle 'Atlas Pro' sur l'App Store Apple ?",
        answer:
          "Non. En raison des règles de l'App Store, il n'existe aucune application officielle éditée sous le nom 'Atlas Pro' sur iPhone, iPad, Mac ou Apple TV. Le service IPTV Atlas Pro fonctionne en revanche à 100 % sur ces appareils via des lecteurs tiers certifiés (IPTV Smarters Lite, UHF IPTV, IBO Player) connectés avec vos identifiants Xtream Codes.",
      },
      {
        question: "Peut-on installer un fichier APK Atlas Pro sur iPhone ou iPad ?",
        answer:
          "Non. Les fichiers APK sont strictement réservés au système Android. Le système d'exploitation Apple iOS bloque toute installation de fichier APK et n'autorise que les applications validées sur l'App Store officiel.",
      },
      {
        question: "Quelle est la meilleure application pour faire tourner Atlas Pro sur Apple TV 4K ?",
        answer:
          "Pour l'Apple TV 4K, nous recommandons UHF IPTV ou IBO Player (disponibles sur l'App Store tvOS). Ces lecteurs offrent un décodage 4K 60 fps d'une fluidité exemplaire et s'intègrent nativement avec la télécommande Siri Remote.",
      },
      {
        question: "Où trouver mes identifiants pour connecter mon lecteur sur iPhone ou Apple TV ?",
        answer:
          "Dès validation de votre abonnement Atlas Pro, vous recevez par e-mail vos 3 informations de connexion : l'URL du serveur, votre nom d'utilisateur et votre mot de passe, ainsi que votre lien M3U direct.",
      },
    ],
  },
];

export const MOCK_TUTORIALS: Tutorial[] = MOCK_TUTORIALS_EXTENDED;

// Query helper functions
export function getAllPlans(): Plan[] {
  return MOCK_PLANS;
}

export function getSingleScreenPlans(): Plan[] {
  return MOCK_PLANS.filter((plan) => !plan.screensCount || plan.screensCount === 1);
}

export function getMultiScreenPlans(): Plan[] {
  return MOCK_PLANS.filter((plan) => (plan.screensCount ?? 1) > 1);
}

export function getPlanBySlug(slug: string): Plan | undefined {
  return MOCK_PLANS.find((plan) => plan.slug === slug);
}

export function getAllAppPages(): AppPage[] {
  return MOCK_APP_PAGES;
}

export function getAppPageBySlug(slug: string): AppPage | undefined {
  return MOCK_APP_PAGES.find((app) => app.slug === slug);
}

export function getAllTutorials(): Tutorial[] {
  return MOCK_TUTORIALS;
}

export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return MOCK_TUTORIALS.find((tut) => tut.slug === slug);
}

export function getRelatedTutorials(slugs: string[]): Tutorial[] {
  return MOCK_TUTORIALS.filter((tut) => slugs.includes(tut.slug));
}

export function getPlanProfileDescription(months: number): { title: string; desc: string } {
  switch (months) {
    case 12:
      return {
        title: "Abonnement IPTV 12 Mois : La formule N°1 pour Smart TV & boîtiers 4K",
        desc: "Cette formule annuelle est le meilleur investissement pour votre divertissement. Elle offre le tarif mensuel le plus bas du marché (seulement 3,33€/mois), une compatibilité totale avec tous vos téléviseurs et vous garantit un accès ininterrompu à toutes les compétitions de l'année sans risque de coupure.",
      };
    case 6:
      return {
        title: "L'équilibre idéal entre flexibilité et budget",
        desc: "Parfait pour suivre l'intégralité d'une demi-saison sportive (Ligue des Champions, championnats de football, sports mécaniques) ou profiter d'une période automne/hiver sans vous engager sur une année entière.",
      };
    case 3:
      return {
        title: "La formule découverte sans engagement",
        desc: "Idéale pour évaluer en conditions réelles la stabilité de nos flux direct en 4K/FHD, vérifier la compatibilité avec vos équipements (Smart TV, boîtier, Fire Stick) et tester la réactivité de notre support client.",
      };
    default:
      return {
        title: "Formule sur-mesure",
        desc: "Accès complet aux serveurs Atlas Pro en haute définition avec support dédié.",
      };
  }
}

