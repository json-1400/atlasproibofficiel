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
    price: 40,
    oldPrice: 60,
    badge: "Populaire - Meilleur Prix",
    isPopular: true,
    screensCount: 1,
    features: [
      "Plus de 10 000 chaînes internationales en direct",
      "Qualité 4K, FHD et HD sans coupures",
      "VOD Films et Séries mis à jour chaque semaine",
      "Replay 7 jours sur les chaînes principales",
      "Compatible Smart TV, Android, Fire Stick, Mag, PC, iOS",
      "Livraison immédiate par e-mail en 15 minutes",
      "Support WhatsApp réactif 7j/7",
    ],
    ctaLabel: "Commander 12 Mois (40€)",
    seoTitle: "Abonnement Atlas Pro 12 Mois Officiel | IPTV Stable 4K",
    seoDescription:
      "Achetez l'abonnement Atlas Pro 12 mois officiel au meilleur prix (40€). Activation express en 15 minutes, chaînes 4K/FHD et assistance WhatsApp.",
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
    ctaLabel: "Commander 3 Mois (20€)",
    seoTitle: "Abonnement Atlas Pro 3 Mois | Formule Découverte",
    seoDescription:
      "Testez la puissance des serveurs Atlas Pro avec la formule 3 mois à 20€. Configuration facile sur tous vos appareils.",
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
    platform: "Android TV, Boîtier Android & Smart TV",
    version: "4.5.0",
    apkUrl: "/downloads/atlas-pro-ontv-v4.5.0.apk",
    sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    changelog: [
      "Stabilité multi-serveur : basculement automatique en cas de surcharge",
      "Interface télécommande entièrement redessinée (navigation 4 touches)",
      "Zapping ultra-rapide inférieur à 0.3 seconde",
      "Compatibilité native Android TV 14, Amazon Fire OS 8",
      "Correction des gels de flux 4K HEVC sur certains boîtiers",
    ],
    installSteps: [
      {
        title: "Télécharger l'APK Atlas Pro ONTV",
        description:
          "Sur votre téléviseur Android ou boîtier, téléchargez le fichier APK via l'application Downloader avec le code fourni, ou directement depuis ce lien vérifié.",
      },
      {
        title: "Autoriser les sources inconnues",
        description:
          "Dans les Paramètres de sécurité de votre téléviseur ou boîtier, autorisez l'installation d'applications inconnues pour Downloader ou Gestionnaire de fichiers.",
      },
      {
        title: "Installer et ouvrir l'application",
        description:
          "Lancez l'installateur APK, acceptez les permissions demandées, puis ouvrez Atlas Pro ONTV. Saisissez votre code d'activation à 12 chiffres reçu par e-mail.",
      },
    ],
    relatedTutorialSlugs: [
      "installation-smart-tv-samsung",
      "installation-fire-stick",
      "erreur-connexion-serveur",
    ],
    seoTitle: "Atlas Pro ONTV APK Officiel v4.5 | Application Android TV & Smart TV",
    seoDescription:
      "Téléchargez Atlas Pro ONTV APK v4.5 officiel pour Android TV, Smart TV, Fire TV Stick et boîtiers. Application on TV stable, sans pub, flux 4K HDR. Code requis.",
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
    title: "Atlas Pro sur iOS iPhone, iPad & Apple TV",
    platform: "iPhone, iPad & Apple TV (tvOS)",
    version: "Guide App Store",
    apkUrl: "https://apps.apple.com",
    sha256: "Vérifié App Store",
    changelog: ["Compatibilité iOS 17 & 18 et iPadOS 18", "Prise en charge AirPlay 2 vers Apple TV", "Mode Picture-in-Picture natif"],
    installSteps: [
      {
        title: "Télécharger le lecteur recommandé sur l'App Store",
        description: "Ouvrez l'App Store sur votre iPhone ou iPad et installez l'application recommandée : IPTV Smarters Pro ou GSE Smart IPTV.",
      },
      {
        title: "Choisir la connexion Xtream Codes API",
        description: "Dans l'application installée, sélectionnez 'Se connecter avec l'API Xtream Codes' pour saisir vos identifiants Atlas Pro.",
      },
      {
        title: "Renseigner l'URL de serveur et vos identifiants",
        description: "Entrez l'URL de serveur, le nom d'utilisateur et le mot de passe Atlas Pro fournis dans votre e-mail de bienvenue. Votre catalogue de chaînes se charge automatiquement.",
      },
    ],
    relatedTutorialSlugs: ["recuperer-identifiant-code", "resoudre-buffering-coupures"],
    seoTitle: "Comment Télécharger Atlas Pro sur iPhone & iPad | Configuration iOS",
    seoDescription:
      "Comment télécharger Atlas Pro sur iPhone, iPad et Apple TV ? Guide complet pour installer et configurer votre service IPTV Atlas Pro sur iOS et tvOS en 5 minutes.",
  },
];

export const MOCK_TUTORIALS: Tutorial[] = [
  {
    id: "tut-erreur-connexion",
    slug: "erreur-connexion-serveur",
    title: "Atlas Pro ne peut pas se connecter au serveur : pourquoi et comment réparer",
    category: "troubleshooting",
    excerpt:
      "Votre Atlas Pro ne peut pas se connecter au serveur ou affiche un écran noir ? Découvrez les 5 causes les plus fréquentes et les solutions pour retrouver vos flux en moins de 5 minutes.",
    body: [
      "L'erreur 'Impossible de se connecter au serveur' survient généralement lorsque l'URL de diffusion est obsolète, que le réseau local bloque les requêtes UDP/DNS, ou lorsque votre abonnement est arrivé à expiration.",
      "Avant toute manipulation lourde, vérifiez la validité de votre code d'accès ou l'état de votre connexion internet.",
      "La deuxième cause la plus fréquente est l'expiration du code. Quand un abonnement expire, le serveur rejette l'authentification en silence — sans message d'alerte explicite. L'application se comporte alors comme si le serveur était en panne. Vérifiez immédiatement la date d'expiration dans Paramètres > Compte sur Atlas Pro ONTV. Si votre code est expiré, un simple renouvellement remet tout en marche en moins de 15 minutes.",
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
          "Dans les paramètres réseau de votre Smart TV ou boîtier, configurez les DNS sur Cloudflare (1.1.1.1 et 1.0.0.1) ou Google (8.8.8.8). Cette manipulation lève les blocages DNS opérateur en quelques secondes.",
      },
      {
        stepNumber: 3,
        title: "Vérifier la date de validité de votre compte",
        instruction:
          "Allez dans Paramètres > Compte sur Atlas Pro ONTV. Si votre code est expiré, le serveur rejette automatiquement l'authentification. Un renouvellement remet tout en marche.",
      },
      {
        stepNumber: 4,
        title: "Vider le cache de l'application",
        instruction:
          "Rendez-vous dans Paramètres > Applications > Atlas Pro ONTV > Forcer l'arrêt, puis Vider le cache. Relancez ensuite l'application.",
      },
      {
        stepNumber: 5,
        title: "Contacter le support si le problème persiste",
        instruction:
          "Si aucune des étapes précédentes n'a fonctionné, notre équipe technique est disponible sur WhatsApp 7j/7. Préparez votre code d'activation et le modèle de votre appareil.",
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "recuperer-identifiant-code",
      "resoudre-buffering-coupures",
      "installation-smart-tv-samsung",
    ],
    seoTitle: "Atlas Pro Ne Peut Pas Se Connecter au Serveur : 5 Solutions Rapides",
    seoDescription:
      "Pourquoi Atlas Pro ne fonctionne plus ? Résolvez l'erreur de connexion serveur Atlas Pro en 5 minutes. DNS, cache, code expiré : guide de dépannage complet.",
  },
  {
    id: "tut-smart-tv-samsung",
    slug: "installation-smart-tv-samsung",
    title: "Comment installer Atlas Pro ONTV sur Smart TV Samsung et LG",
    category: "hardware",
    excerpt:
      "Guide complet pour faire fonctionner Atlas Pro sur les téléviseurs Samsung (Tizen) et LG (webOS) via IBO Player, SET IPTV ou IPTV Smarters. Aucune clé USB requise.",
    body: [
      "Les téléviseurs Samsung sous le système Tizen ne permettent pas l'installation directe de fichiers .APK Android. Cependant, il est très simple d'activer votre abonnement Atlas Pro via les applications agréées disponibles sur le Samsung Smart Hub.",
      "Suivez les étapes ci-dessous pour configurer votre téléviseur Samsung en 5 minutes chrono.",
      "Sur les téléviseurs LG sous webOS, la démarche est similaire : ouvrez le LG Content Store et installez l'application Smart IPTV ou IPTV Smarters. Connectez-vous ensuite en utilisant vos identifiants Xtream Codes Atlas Pro (URL serveur + nom d'utilisateur + mot de passe). Votre catalogue de plus de 10 000 chaînes se charge en quelques secondes. Notez bien que l'application native Atlas Pro ONTV APK ne s'installe pas directement sur LG webOS — vous devez obligatoirement passer par un lecteur tiers compatible.",
      "Pour les deux marques, IBO Player est l'option la plus simple. C'est l'application IPTV la plus utilisée sur Smart TV en France. Elle accepte le lien M3U ou la connexion Xtream Codes, et se synchronise automatiquement avec votre guide des programmes (EPG) Atlas Pro.",
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
          "Tapez dans la barre de recherche 'IBO Player', 'SET IPTV' ou 'Smart IPTV' puis lancez l'installation. IBO Player est le choix recommandé pour Atlas Pro sur Samsung.",
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
      {
        stepNumber: 5,
        title: "Pour LG : ouvrir le LG Content Store et installer Smart IPTV",
        instruction:
          "Sur votre téléviseur LG, accédez au LG Content Store depuis le menu Home, recherchez 'Smart IPTV' et installez l'application. Choisissez ensuite 'Connexion Xtream Codes API' et entrez vos identifiants Atlas Pro.",
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "installation-fire-stick",
      "erreur-connexion-serveur",
      "resoudre-buffering-coupures",
    ],
    seoTitle: "Installer Atlas Pro sur Samsung & LG Smart TV | Guide IBO Player",
    seoDescription:
      "Installez Atlas Pro ONTV sur Smart TV Samsung Tizen et LG webOS via IBO Player, SET IPTV ou IPTV Smarters. Guide illustré pas à pas — sans clé USB.",
  },
  {
    id: "tut-fire-stick",
    slug: "installation-fire-stick",
    title: "Comment installer Atlas Pro sur Fire Stick, Chromecast et Xiaomi TV Box",
    category: "hardware",
    excerpt:
      "Installez facilement l'APK officiel Atlas Pro ONTV sur votre Fire TV Stick, Chromecast avec Google TV ou Xiaomi TV Box S. Guide illustré avec Downloader.",
    body: [
      "La clé Amazon Fire TV Stick est le support idéal pour Atlas Pro grâce à sa fluidité et son lecteur vidéo matériel puissant. En quelques manipulations simples, vous aurez accès à l'interface complète sur votre téléviseur.",
      "La Xiaomi TV Box S fonctionne sous Android TV natif, ce qui rend l'installation de l'APK Atlas Pro ONTV encore plus simple. Pas besoin d'application intermédiaire : activez simplement les sources inconnues et installez l'APK directement via un gestionnaire de fichiers ou Downloader. L'application se lance comme n'importe quelle application Android TV.",
      "Le Chromecast avec Google TV (modèle HD ou 4K) étant lui aussi basé sur Android TV, il accepte l'installation de l'APK Atlas Pro ONTV via Downloader ou le Play Store (cherchez un lecteur IPTV compatible Xtream Codes comme IPTV Smarters). La télécommande vocale Google est supportée pour la navigation.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Installer l'application Downloader (Fire Stick & Chromecast)",
        instruction:
          "Depuis l'écran d'accueil Fire TV ou Chromecast, recherchez 'Downloader' et installez l'application orange. Pour Xiaomi TV Box, utilisez directement le Gestionnaire de fichiers.",
      },
      {
        stepNumber: 2,
        title: "Activer les options pour les développeurs",
        instruction:
          "Allez dans Paramètres > Ma Fire TV > Options pour les développeurs > Installer applis inconnues > Activer pour Downloader. Pour Xiaomi TV Box : Paramètres > Paramètres supplémentaires > Sécurité > Sources inconnues.",
      },
      {
        stepNumber: 3,
        title: "Télécharger l'APK Atlas Pro ONTV",
        instruction:
          "Lancez Downloader, saisissez le code direct fourni par notre service et appuyez sur Go. Le fichier APK Atlas Pro ONTV v4.5 se télécharge automatiquement.",
      },
      {
        stepNumber: 4,
        title: "Installer et lancer l'application",
        instruction:
          "Validez l'installation de l'APK puis entrez votre code d'activation 12 mois reçu par e-mail. Votre catalogue de chaînes est prêt en moins d'une minute.",
      },
      {
        stepNumber: 5,
        title: "Xiaomi TV Box S : Installation via Android TV",
        instruction:
          "Sur votre Xiaomi TV Box S, allez dans Paramètres > Paramètres supplémentaires > Sécurité et activez 'Sources inconnues'. Installez ensuite l'APK Atlas Pro ONTV v4.5 via Downloader ou USB. C'est identique à n'importe quelle box Android TV.",
      },
      {
        stepNumber: 6,
        title: "Chromecast avec Google TV : Installation via Downloader",
        instruction:
          "Sur votre Chromecast 4K ou HD, accédez aux paramètres système et activez les sources inconnues. Installez Downloader depuis le Google Play Store, puis saisissez le code APK fourni par notre équipe pour télécharger Atlas Pro ONTV.",
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "installation-smart-tv-samsung",
      "erreur-connexion-serveur",
      "recuperer-identifiant-code",
    ],
    seoTitle: "Installer Atlas Pro sur Fire Stick, Chromecast & Xiaomi TV Box | Guide",
    seoDescription:
      "Guide complet pour installer Atlas Pro ONTV sur Amazon Fire TV Stick, Chromecast avec Google TV et Xiaomi TV Box S. Tutoriel illustré avec Downloader en 5 minutes.",
  },
  {
    id: "tut-recuperer-code",
    slug: "recuperer-identifiant-code",
    title: "Comment retrouver, entrer et changer le code Atlas Pro ONTV",
    category: "account",
    excerpt:
      "Code Atlas Pro perdu, expiré ou à saisir dans l'application ? Ce guide répond aux trois questions les plus posées sur les identifiants Atlas Pro ONTV.",
    body: [
      "Chaque compte Atlas Pro est associé à une clé unique d'activation ou à un identifiant Xtream Codes. Si votre période de validité arrive à son terme, votre application cesse de charger les chaînes.",
      "Si votre période de validité arrive à son terme, votre application cesse de charger les chaînes.",
      "Pour entrer le code Atlas Pro dans l'application : ouvrez Atlas Pro ONTV, sélectionnez 'Se connecter avec un code' (ou 'Connexion Xtream Codes' selon votre version), puis saisissez votre code à 12 chiffres exactement comme reçu par e-mail, sans espace. Si l'application vous demande une URL de serveur, un nom d'utilisateur et un mot de passe, entrez les identifiants Xtream Codes fournis dans votre e-mail de bienvenue.",
      "Pour changer le code sur Atlas Pro ONTV : allez dans Paramètres > Compte > Déconnexion, puis reconnectez-vous avec votre nouveau code. Aucune réinstallation n'est nécessaire.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Vérifier votre boîte e-mail de confirmation",
        instruction:
          "Recherchez l'e-mail envoyé par 'Atlas Pro ONTV' le jour de votre achat contenant votre code à 12 chiffres. Cherchez aussi dans vos spams.",
      },
      {
        stepNumber: 2,
        title: "Vérifier le statut d'expiration",
        instruction:
          "Dans l'application Atlas Pro, rendez-vous dans 'Paramètres' > 'Compte' pour visualiser la date d'expiration exacte. Si elle est dépassée, un renouvellement est nécessaire.",
      },
      {
        stepNumber: 3,
        title: "Entrer le code dans l'application Atlas Pro ONTV",
        instruction:
          "Ouvrez Atlas Pro ONTV, sélectionnez 'Connexion avec un code' et saisissez votre code à 12 chiffres sans espace. Appuyez sur Valider. Pour Xtream Codes, entrez l'URL + identifiant + mot de passe.",
      },
      {
        stepNumber: 4,
        title: "Renouveler votre code sans changer d'application",
        instruction:
          "Commandez simplement un renouvellement sur notre site officiel. Votre nouveau code est expédié instantanément, et votre line est prolongée à distance.",
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "erreur-connexion-serveur",
      "installation-smart-tv-samsung",
      "resoudre-buffering-coupures",
    ],
    seoTitle: "Comment Retrouver & Entrer le Code Atlas Pro | Guide Officiel",
    seoDescription:
      "Comment retrouver son code Atlas Pro, comment entrer le code dans l'application, comment le changer sur Atlas Pro ONTV ? Toutes les réponses ici.",
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
  {
    id: "tut-lg-smart-tv",
    slug: "installation-smart-tv-lg",
    title: "Comment installer Atlas Pro sur LG Smart TV (webOS) : Guide Complet",
    category: "hardware",
    excerpt:
      "Guide pas à pas pour configurer Atlas Pro ONTV sur un téléviseur LG Smart TV sous webOS via Smart IPTV, IBO Player ou IPTV Smarters. Aucune clé USB, aucune manipulation complexe.",
    body: [
      "Les téléviseurs LG Smart TV fonctionnent sous webOS, un système propriétaire qui ne supporte pas les APK Android nativement. Impossible donc d'installer l'application Atlas Pro ONTV directement comme sur un boîtier Android. La solution : passer par un lecteur IPTV tiers disponible sur le LG Content Store.",
      "Trois applications sont recommandées pour utiliser Atlas Pro sur LG : Smart IPTV (la plus populaire), IPTV Smarters Pro, et IBO Player. Toutes trois acceptent la connexion via identifiants Xtream Codes (URL serveur + identifiant + mot de passe) ou via un lien M3U. Vous recevez ces informations par e-mail lors de votre commande d'abonnement.",
      "La connexion via Xtream Codes API est la méthode recommandée pour Atlas Pro sur LG. Elle permet la mise à jour automatique du guide des programmes (EPG) et la synchronisation des favoris entre vos appareils.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Ouvrir le LG Content Store",
        instruction:
          "Sur votre téléviseur LG, appuyez sur le bouton Home de la télécommande. Sélectionnez 'LG Content Store' dans le menu principal.",
      },
      {
        stepNumber: 2,
        title: "Installer Smart IPTV ou IBO Player",
        instruction:
          "Dans la barre de recherche du Content Store, tapez 'Smart IPTV' ou 'IBO Player'. Sélectionnez l'application et cliquez sur Installer. L'installation prend moins de 30 secondes.",
      },
      {
        stepNumber: 3,
        title: "Ouvrir l'application et noter l'adresse MAC",
        instruction:
          "Lancez Smart IPTV ou IBO Player. L'écran d'accueil affiche votre adresse MAC (format 00:1A:79:XX:XX:XX) et une Device Key. Notez-les ou prenez une photo avec votre smartphone.",
      },
      {
        stepNumber: 4,
        title: "Saisir vos identifiants Atlas Pro (Xtream Codes)",
        instruction:
          "Dans les paramètres de l'application, choisissez 'Connexion Xtream Codes API'. Entrez l'URL du serveur, votre nom d'utilisateur et votre mot de passe Atlas Pro tels que reçus par e-mail. Validez pour charger votre catalogue.",
      },
      {
        stepNumber: 5,
        title: "Configurer le guide des programmes (EPG)",
        instruction:
          "Pour activer le guide TV (EPG), ajoutez l'URL EPG fournie dans votre e-mail d'activation dans la section 'Guide des programmes' des paramètres de l'application. Le guide se synchronise automatiquement toutes les 24h.",
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "installation-smart-tv-samsung",
      "erreur-connexion-serveur",
      "recuperer-identifiant-code",
    ],
    seoTitle: "Installer Atlas Pro sur LG Smart TV webOS | Guide IBO Player & Smart IPTV",
    seoDescription:
      "Comment installer Atlas Pro sur LG Smart TV webOS ? Utilisez Smart IPTV ou IBO Player depuis le LG Content Store. Connexion Xtream Codes — guide étape par étape.",
  },
];

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
