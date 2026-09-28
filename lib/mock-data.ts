export interface Plan {
  id: string;
  slug: string;
  title: string;
  durationMonths: number;
  price: number;
  oldPrice?: number;
  badge?: string;
  isPopular?: boolean;
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
  changelog: string[];
  installSteps: Array<{ title: string; description: string }>;
  relatedTutorialSlugs: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  category: "troubleshooting" | "hardware" | "account";
  excerpt: string;
  body: string[];
  steps: Array<{ stepNumber: number; title: string; instruction: string }>;
  showExpiredAlert: boolean;
  relatedTutorialSlugs: string[];
  seoTitle: string;
  seoDescription: string;
}

export const MOCK_PLANS: Plan[] = [
  {
    id: "plan-12",
    slug: "atlas-pro-12-mois",
    title: "Abonnement Atlas Pro 12 Mois",
    durationMonths: 12,
    price: 45,
    oldPrice: 65,
    badge: "Populaire - Meilleur Prix",
    isPopular: true,
    features: [
      "Plus de 10 000 chaînes internationales en direct",
      "Qualité 4K, FHD et HD sans coupures",
      "VOD Films et Séries mis à jour chaque semaine",
      "Replay 7 jours sur les chaînes principales",
      "Compatible Smart TV, Android, Fire Stick, Mag, PC, iOS",
      "Livraison immédiate par e-mail en 15 minutes",
      "Support WhatsApp réactif 7j/7",
    ],
    ctaLabel: "Commander 12 Mois (45€)",
    seoTitle: "Abonnement Atlas Pro 12 Mois Officiel | IPTV Stable 4K",
    seoDescription:
      "Achetez l'abonnement Atlas Pro 12 mois officiel au meilleur prix (45€). Activation express en 15 minutes, chaînes 4K/FHD et assistance WhatsApp.",
    faq: [
      {
        question: "En combien de temps recevrai-je mes codes Atlas Pro 12 mois ?",
        answer:
          "Dès validation de votre paiement, vos identifiants de connexion et instructions de configuration vous sont expédiés par e-mail en moins de 15 minutes.",
      },
      {
        question: "L'abonnement 12 mois fonctionne-t-il sur plusieurs appareils ?",
        answer:
          "Vous pouvez installer l'application sur tous vos écrans, mais l'utilisation en direct se fait sur un écran à la fois par abonnement.",
      },
      {
        question: "Y a-t-il un engagement ou un prélèvement automatique ?",
        answer:
          "Non, c'est un paiement unique sans reconduction tacite. Vous recevez un simple rappel avant l'expiration pour renouveler si vous le souhaitez.",
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
    ctaLabel: "Commander 6 Mois (30€)",
    seoTitle: "Abonnement Atlas Pro 6 Mois Officiel | Serveur IPTV Garanti",
    seoDescription:
      "Commandez l'abonnement Atlas Pro 6 mois officiel pour 30€. Idéal pour tester sur la durée avec une qualité optimale et support inclus.",
    faq: [
      {
        question: "Puis-je prolonger en formule 12 mois par la suite ?",
        answer:
          "Oui, vous pouvez faire évoluer votre compte vers l'abonnement 12 mois à tout moment via notre page de renouvellement.",
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
      "Qualité FHD & HD",
      "Catalogue VOD à la demande",
      "Livraison par e-mail en 15 minutes",
      "Support d'installation inclus",
    ],
    ctaLabel: "Commander 3 Mois (20€)",
    seoTitle: "Abonnement Atlas Pro 3 Mois | Formule Découverte",
    seoDescription:
      "Testez la puissance des serveurs Atlas Pro avec la formule 3 mois à 20€. Configuration facile sur tous vos appareils.",
    faq: [
      {
        question: "Quelle connexion internet est recommandée ?",
        answer:
          "Une connexion d'au moins 15 Mbps (ADSL stable, 4G/5G ou Fibre) est recommandée pour profiter des flux FHD et 4K sans interruption.",
      },
    ],
  },
];

export const MOCK_APP_PAGES: AppPage[] = [
  {
    id: "app-ontv",
    slug: "atlas-pro-ontv",
    title: "Atlas Pro ONTV APK",
    platform: "Android TV, Boîtier Android & Smart TV",
    version: "4.2.0",
    apkUrl: "/downloads/atlas-pro-ontv-v4.2.0.apk",
    sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    changelog: [
      "Optimisation du chargement du guide des programmes (EPG)",
      "Réduction du temps de zapping à moins de 0.5s",
      "Compatibilité native avec Android TV 12 et 14",
      "Correction des plantages du lecteur interne sur flux 4K HEVC",
    ],
    installSteps: [
      {
        title: "Télécharger l'APK",
        description:
          "Téléchargez le fichier APK directement sur votre appareil ou via l'application Downloader avec le code officiel.",
      },
      {
        title: "Autoriser les sources inconnues",
        description:
          "Dans les Paramètres de sécurité de votre téléviseur ou boîtier, autorisez l'installation d'applications inconnues.",
      },
      {
        title: "Installer et ouvrir l'application",
        description:
          "Lancez l'installateur APK puis ouvrez Atlas Pro ONTV pour saisir votre code d'abonnement actif.",
      },
    ],
    relatedTutorialSlugs: [
      "installation-smart-tv-samsung",
      "installation-fire-stick",
      "erreur-connexion-serveur",
    ],
    seoTitle: "Télécharger Atlas Pro ONTV APK Officiel v4.2.0 | Android & Smart TV",
    seoDescription:
      "Téléchargement direct et sécurisé de l'APK officiel Atlas Pro ONTV pour Android TV et Smart TV. Version v4.2.0 vérifiée SHA-256.",
  },
  {
    id: "app-max",
    slug: "atlas-pro-max",
    title: "Atlas Pro Max APK",
    platform: "Smartphones Android, Tablettes & Fire TV",
    version: "3.1.5",
    apkUrl: "/downloads/atlas-pro-max-v3.1.5.apk",
    sha256: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb",
    changelog: [
      "Interface tactile retravaillée pour smartphones et tablettes",
      "Fonction de téléchargement pour visionnage hors-ligne des films VOD",
      "Support du Picture-in-Picture (PiP)",
    ],
    installSteps: [
      {
        title: "Télécharger l'APK Atlas Pro Max",
        description: "Enregistrez le fichier APK sur votre smartphone ou tablette Android.",
      },
      {
        title: "Ouvrir le fichier téléchargé",
        description: "Cliquez sur la notification de téléchargement pour démarrer l'installation.",
      },
      {
        title: "Connexion",
        description: "Renseignez vos identifiants reçus par e-mail après votre commande.",
      },
    ],
    relatedTutorialSlugs: [
      "installation-fire-stick",
      "recuperer-identifiant-code",
      "resoudre-buffering-coupures",
    ],
    seoTitle: "Télécharger Atlas Pro Max APK v3.1.5 | Mobile & Fire Stick",
    seoDescription:
      "Téléchargez la dernière version officielle de l'application Atlas Pro Max APK. Application légère et rapide pour mobile et Fire TV.",
  },
  {
    id: "app-windows",
    slug: "windows",
    title: "Atlas Pro pour Windows PC",
    platform: "Windows 10 / Windows 11",
    version: "2.4.1",
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
    relatedTutorialSlugs: ["erreur-connexion-serveur", "recuperer-identifiant-code"],
    seoTitle: "Atlas Pro Windows PC | Télécharger le lecteur IPTV Officiel",
    seoDescription:
      "Installez Atlas Pro sur votre ordinateur Windows 10 et 11. Lecteur haute performance avec zapping ultra-rapide.",
  },
  {
    id: "app-ios",
    slug: "ios",
    title: "Atlas Pro pour iOS & Apple TV",
    platform: "iPhone, iPad & Apple TV (tvOS)",
    version: "Guide App Store",
    apkUrl: "https://apps.apple.com",
    sha256: "Vérifié App Store",
    changelog: ["Compatibilité iOS 17 & 18", "Prise en charge AirPlay 2"],
    installSteps: [
      {
        title: "Télécharger le lecteur recommandé sur l'App Store",
        description: "Installez l'application recommandée (IPTV Smarters Pro ou GSE Smart IPTV).",
      },
      {
        title: "Choisir la connexion Xtream Codes",
        description: "Sélectionnez 'Se connecter avec l'API Xtream Codes'.",
      },
      {
        title: "Renseigner l'URL de serveur et vos identifiants",
        description: "Utilisez les identifiants fournis dans votre e-mail de bienvenue.",
      },
    ],
    relatedTutorialSlugs: ["recuperer-identifiant-code", "resoudre-buffering-coupures"],
    seoTitle: "Atlas Pro iOS & Apple TV | Tutoriel de configuration",
    seoDescription:
      "Guide complet pour installer et configurer votre abonnement Atlas Pro sur iPhone, iPad et Apple TV en quelques minutes.",
  },
];

export const MOCK_TUTORIALS: Tutorial[] = [
  {
    id: "tut-erreur-connexion",
    slug: "erreur-connexion-serveur",
    title: "Comment résoudre l'erreur 'Impossible de se connecter au serveur' sur Atlas Pro",
    category: "troubleshooting",
    excerpt:
      "Votre application Atlas Pro indique une erreur de connexion au serveur ou un écran noir ? Découvrez les 4 étapes pour rétablir votre accès immédiatement.",
    body: [
      "L'erreur 'Impossible de se connecter au serveur' survient généralement lorsque l'URL de diffusion est obsolète, que le réseau local bloque les requêtes UDP/DNS, ou lorsque votre abonnement est arrivé à expiration.",
      "Avant toute manipulation lourde, vérifiez la validité de votre code d'accès ou l'état de votre connexion internet.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Vérifier la connexion Internet et redémarrer la box",
        instruction:
          "Éteignez votre box internet pendant 30 secondes puis redémarrez-la. Les blocages DNS des FAI sont fréquemment levés par un simple renouvellement de bail IP.",
      },
      {
        stepNumber: 2,
        title: "Tester avec un changement de DNS",
        instruction:
          "Dans les paramètres réseau de votre Smart TV ou boîtier, configurez les DNS sur Cloudflare (1.1.1.1 et 1.0.0.1) ou Google (8.8.8.8).",
      },
      {
        stepNumber: 3,
        title: "Vérifier la date de validité de votre compte",
        instruction:
          "Si votre code est expiré, le serveur rejette automatiquement l'authentification sans afficher de message d'alerte explicite.",
      },
      {
        stepNumber: 4,
        title: "Vider le cache de l'application",
        instruction:
          "Rendez-vous dans Paramètres > Applications > Atlas Pro ONTV > Forcer l'arrêt, puis Vider le cache.",
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "recuperer-identifiant-code",
      "resoudre-buffering-coupures",
      "installation-smart-tv-samsung",
    ],
    seoTitle: "Résoudre Erreur Connexion Serveur Atlas Pro | Guide Dépannage",
    seoDescription:
      "Solution pas à pas pour réparer l'erreur de connexion serveur sur Atlas Pro ONTV. Récupérez vos flux télévisés en moins de 5 minutes.",
  },
  {
    id: "tut-smart-tv-samsung",
    slug: "installation-smart-tv-samsung",
    title: "Comment installer Atlas Pro ONTV sur Smart TV Samsung",
    category: "hardware",
    excerpt:
      "Guide complet et à jour pour faire fonctionner Atlas Pro sur les téléviseurs Samsung Tizen sans clé USB ni manipulations complexes.",
    body: [
      "Les téléviseurs Samsung sous le système Tizen ne permettent pas l'installation directe de fichiers .APK Android. Cependant, il est très simple d'activer votre abonnement Atlas Pro via les applications agréées disponibles sur le Samsung Smart Hub.",
      "Suivez les étapes ci-dessous pour configurer votre téléviseur en 5 minutes chrono.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Ouvrir le Samsung Smart Hub / Apps",
        instruction:
          "Appuyez sur le bouton Home de votre télécommande Samsung et naviguez jusqu'au magasin d'applications Apps.",
      },
      {
        stepNumber: 2,
        title: "Rechercher une application compatible",
        instruction:
          "Tapez dans la barre de recherche 'IBO Player', 'SET IPTV' ou 'Smart IPTV' puis lancez l'installation.",
      },
      {
        stepNumber: 3,
        title: "Noter l'adresse MAC",
        instruction:
          "Ouvrez l'application installée et notez l'adresse MAC (ex: 00:1A:79:...) et la Device Key affichées à l'écran.",
      },
      {
        stepNumber: 4,
        title: "Associer vos identifiants Atlas Pro",
        instruction:
          "Transmettez votre adresse MAC à notre support WhatsApp lors de votre commande, ou injectez votre lien M3U sur le portail de l'application.",
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "installation-fire-stick",
      "erreur-connexion-serveur",
      "resoudre-buffering-coupures",
    ],
    seoTitle: "Installer Atlas Pro ONTV sur Smart TV Samsung | Tutoriel",
    seoDescription:
      "Découvrez comment installer et configurer Atlas Pro ONTV sur votre téléviseur Samsung. Guide étape par étape simple et rapide.",
  },
  {
    id: "tut-fire-stick",
    slug: "installation-fire-stick",
    title: "Comment installer Atlas Pro sur Amazon Fire TV Stick",
    category: "hardware",
    excerpt:
      "Installez facilement l'APK officiel Atlas Pro ONTV sur votre Fire Stick Amazon à l'aide de l'application Downloader.",
    body: [
      "La clé Amazon Fire Stick est le support idéal pour Atlas Pro grâce à sa fluidité et son lecteur vidéo matériel puissant.",
      "En quelques manipulations simples, vous aurez accès à l'interface complète sur votre téléviseur.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Installer l'application Downloader",
        instruction:
          "Depuis l'écran d'accueil Fire TV, allez dans 'Trouver' > 'Rechercher', tapez 'Downloader' et installez l'application orange.",
      },
      {
        stepNumber: 2,
        title: "Activer les options pour les développeurs",
        instruction:
          "Allez dans Paramètres > Ma Fire TV > Options pour les développeurs > Installer applis inconnues > Activer pour Downloader.",
      },
      {
        stepNumber: 3,
        title: "Télécharger l'APK Atlas Pro",
        instruction:
          "Lancez Downloader, saisissez le code direct fourni par notre service et appuyez sur Go.",
      },
      {
        stepNumber: 4,
        title: "Installer et lancer l'application",
        instruction:
          "Validez l'installation de l'APK puis entrez votre code d'activation 12 mois.",
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "installation-smart-tv-samsung",
      "erreur-connexion-serveur",
      "recuperer-identifiant-code",
    ],
    seoTitle: "Installer Atlas Pro sur Amazon Fire Stick | Guide Complet",
    seoDescription:
      "Tutoriel d'installation rapide d'Atlas Pro ONTV sur Amazon Fire TV Stick via Downloader. Étapes illustrées et vérifiées.",
  },
  {
    id: "tut-recuperer-code",
    slug: "recuperer-identifiant-code",
    title: "Comment récupérer ou renouveler votre code d'activation Atlas Pro",
    category: "account",
    excerpt:
      "Vous avez égaré vos identifiants ou votre code Atlas Pro arrive à échéance ? Voici comment renouveler votre compte sans perdre vos favoris.",
    body: [
      "Chaque compte Atlas Pro est associé à une clé unique d'activation ou à un identifiant Xtream Codes.",
      "Si votre période de validité arrive à son terme, votre application cesse de charger les chaînes.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Vérifier votre boîte e-mail de confirmation",
        instruction:
          "Recherchez l'e-mail envoyé par 'Atlas Pro ONTV' le jour de votre achat contenant votre code à 12 chiffres.",
      },
      {
        stepNumber: 2,
        title: "Vérifier le statut d'expiration",
        instruction:
          "Dans l'application Atlas Pro, rendez-vous dans 'Paramètres' > 'Compte' pour visualiser la date d'expiration exacte.",
      },
      {
        stepNumber: 3,
        title: "Renouveler votre code sans changer d'application",
        instruction:
          "Commandez simplement un renouvellement sur notre site officiel. Votre nouveau code est expédié instantanément.",
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "erreur-connexion-serveur",
      "installation-smart-tv-samsung",
      "resoudre-buffering-coupures",
    ],
    seoTitle: "Récupérer ou Renouveler Code Atlas Pro | Guide Officiel",
    seoDescription:
      "Identifiants Atlas Pro perdus ou expirés ? Retrouvez votre code ou renouvelez votre abonnement en 15 minutes avec assistance 7j/7.",
  },
  {
    id: "tut-resoudre-buffering",
    slug: "resoudre-buffering-coupures",
    title: "Comment résoudre les coupures et le buffering sur Atlas Pro",
    category: "troubleshooting",
    excerpt:
      "Flux qui ralentit, saccades ou gel d'image ? Appliquez ces réglages simples pour profiter d'une diffusion fluide en direct et VOD.",
    body: [
      "Le buffering peut être causé par une saturation de la mémoire cache de votre appareil, des micro-coupures Wi-Fi ou un bridage opérateur pendant les grands événements sportifs.",
      "Ces optimisations permettent de garantir une fluidité permanente.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Privilégier une connexion filaire Ethernet",
        instruction:
          "Le Wi-Fi subit des interférences. Reliez votre Smart TV ou boîtier par câble Ethernet pour un débit constant.",
      },
      {
        stepNumber: 2,
        title: "Ajuster la taille du tampon vidéo (Buffer size)",
        instruction:
          "Dans les paramètres d'Atlas Pro ONTV, configurez le lecteur sur 'Lecteur matériel' et augmentez le tampon à 3 ou 5 secondes.",
      },
      {
        stepNumber: 3,
        title: "Vérifier le débit réel de votre ligne",
        instruction:
          "Effectuez un test de débit sur Fast.com. Si votre FAI bride la bande passante aux heures de pointe, l'utilisation d'un VPN résout instantanément le problème.",
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "erreur-connexion-serveur",
      "installation-smart-tv-samsung",
      "installation-fire-stick",
    ],
    seoTitle: "Supprimer Coupures & Buffering Atlas Pro | Solutions Rapides",
    seoDescription:
      "Éliminez les ralentissements et gels d'image sur Atlas Pro ONTV. Réglages de cache, connexion et paramètres de lecture.",
  },
];

// Query helper functions
export function getAllPlans(): Plan[] {
  return MOCK_PLANS;
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
