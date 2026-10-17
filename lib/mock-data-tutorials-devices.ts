import type { Tutorial } from "./mock-data-tutorials";

const AUTHOR = {
  name: "Équipe Technique Atlas Pro",
  role: "Architecte Réseau & Support IPTV",
};

export const DEVICE_TUTORIALS: Tutorial[] = [
  {
    id: "tut-android-tv",
    slug: "installer-atlas-pro-sur-android-tv",
    title: "Installer Atlas Pro sur Android TV (Sony, Philips, TCL, Xiaomi)",
    category: "installation",
    categoryLabel: "Installation & Configuration TV",
    tags: ["Android TV", "Downloader", "Atlas Pro ONTV", "Code d'activation"],
    excerpt:
      "Installez l'application officielle Atlas Pro ONTV sur votre téléviseur Android TV avec Downloader en 5 minutes : sources inconnues, code de téléchargement et activation.",
    readingTime: "5 min",
    wordCount: 1000,
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    author: AUTHOR,
    mainImage: {
      url: "/images/tutorials/installer-atlas-pro-fire-stick.webp",
      alt: "Installation d'Atlas Pro ONTV sur un téléviseur Android TV avec Downloader",
      caption: "Les téléviseurs Android TV acceptent l'APK officiel Atlas Pro ONTV.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "Pour installer Atlas Pro sur Android TV : installez Downloader depuis le Google Play Store, autorisez l'installation depuis des sources inconnues pour Downloader, saisissez le code officiel (Atlas Pro ONTV V4 : 822648), installez l'APK puis entrez votre code d'activation. Les téléviseurs Android TV sont compatibles avec l'application officielle.",
    keyTakeaways: [
      "Android TV est compatible avec l'APK officiel Atlas Pro ONTV.",
      "Downloader est téléchargeable gratuitement sur le Google Play Store.",
      "L'autorisation « sources inconnues » se donne uniquement à Downloader.",
      "L'activation se fait avec votre code à 12 chiffres.",
    ],
    tableOfContents: [
      { id: "prerequis-android-tv", title: "Prérequis", level: 2 },
      { id: "installer-downloader", title: "Installer Downloader", level: 2 },
      { id: "installer-apk", title: "Installer l'application Atlas Pro", level: 2 },
      { id: "activer-code", title: "Activer votre code", level: 2 },
    ],
    body: [
      "Les téléviseurs et boîtiers sous Android TV (Sony, Philips, TCL, Xiaomi Mi Box, Nvidia Shield) peuvent exécuter directement l'application officielle Atlas Pro ONTV.",
    ],
    sections: [
      {
        id: "prerequis-android-tv",
        h2: "Prérequis",
        paragraphs: ["Un téléviseur Android TV connecté à internet (idéalement en Ethernet) et votre code d'activation reçu par e-mail."],
      },
      {
        id: "installer-downloader",
        h2: "Installer Downloader",
        paragraphs: [
          "Ouvrez le Google Play Store, recherchez Downloader et installez-le. Dans Paramètres > Sécurité et restrictions, autorisez Downloader à installer des applications inconnues.",
        ],
      },
      {
        id: "installer-apk",
        h2: "Installer l'application Atlas Pro",
        paragraphs: [
          "Dans Downloader, saisissez le code officiel (Atlas Pro ONTV V4 : 822648), laissez le téléchargement se terminer puis cliquez sur Installer.",
        ],
      },
      {
        id: "activer-code",
        h2: "Activer votre code",
        paragraphs: ["Lancez Atlas Pro ONTV, choisissez « Se connecter avec un code » et saisissez les 12 chiffres sans espace."],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Installer Downloader",
        instruction: "Téléchargez Downloader depuis le Google Play Store de votre téléviseur.",
      },
      {
        stepNumber: 2,
        title: "Autoriser les sources inconnues",
        instruction: "Autorisez uniquement Downloader à installer des applications inconnues.",
      },
      {
        stepNumber: 3,
        title: "Entrer le code de téléchargement",
        instruction: "Saisissez le code Downloader officiel (V4 : 822648) puis installez l'APK.",
      },
      {
        stepNumber: 4,
        title: "Activer l'abonnement",
        instruction: "Ouvrez l'application et entrez votre code d'activation.",
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "installer-atlas-pro-sur-box-android",
      "installer-atlas-pro-sur-fire-stick",
      "atlas-pro-code-invalide-que-faire",
    ],
    seoTitle: "Installer Atlas Pro sur Android TV : Guide Downloader 2026",
    seoDescription:
      "Installez Atlas Pro ONTV sur Android TV (Sony, Philips, TCL, Xiaomi) avec Downloader en 5 minutes : code officiel, sources inconnues et activation pas à pas.",
    faq: [
      {
        question: "Atlas Pro est-il disponible sur le Google Play Store ?",
        answer:
          "L'application officielle s'installe via son APK avec Downloader. Seul Downloader se télécharge depuis le Play Store.",
      },
    ],
  },
  {
    id: "tut-box-android",
    slug: "installer-atlas-pro-sur-box-android",
    title: "Installer Atlas Pro sur Box Android (Mi Box, MXQ, H96, Shield)",
    category: "installation",
    categoryLabel: "Installation & Configuration TV",
    tags: ["Box Android", "Downloader", "Atlas Pro ONTV", "Code d'activation"],
    excerpt:
      "Configurez Atlas Pro ONTV sur une box Android : autorisations, code Downloader, installation de l'APK et réglages pour une lecture stable en FHD et 4K.",
    readingTime: "5 min",
    wordCount: 950,
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    author: AUTHOR,
    mainImage: {
      url: "/images/tutorials/installer-atlas-pro-fire-stick.webp",
      alt: "Box Android branchée en HDMI avec l'application Atlas Pro ONTV installée",
      caption: "Une box Android est la solution la plus simple pour une TV non compatible.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "Sur une box Android : activez les options de sécurité pour autoriser Downloader, installez Downloader, saisissez le code officiel (Atlas Pro ONTV V4 : 822648), installez l'APK puis activez votre code. Reliez la box en Ethernet pour la meilleure stabilité. Une box Android est aussi la solution recommandée pour les téléviseurs Samsung et LG.",
    keyTakeaways: [
      "Une box Android exécute l'APK officiel, contrairement aux TV Samsung (Tizen) et LG (webOS).",
      "Le câble Ethernet garantit la stabilité en 4K.",
      "L'installation se fait avec le même code Downloader que sur Android TV.",
    ],
    tableOfContents: [
      { id: "choisir-box", title: "Choisir sa box Android", level: 2 },
      { id: "installation-box", title: "Installation pas à pas", level: 2 },
      { id: "reglages-box", title: "Réglages recommandés", level: 2 },
    ],
    body: [
      "Les box Android se branchent en HDMI sur n'importe quel téléviseur et offrent une compatibilité complète avec l'application officielle Atlas Pro ONTV.",
    ],
    sections: [
      {
        id: "choisir-box",
        h2: "Choisir sa box Android",
        paragraphs: [
          "Privilégiez un modèle avec au moins 2 Go de RAM et le support du 4K (Mi Box S, Nvidia Shield, H96 Max...).",
        ],
      },
      {
        id: "installation-box",
        h2: "Installation pas à pas",
        paragraphs: [
          "Installez Downloader, autorisez l'installation depuis des sources inconnues, entrez le code officiel (V4 : 822648), installez l'APK puis activez votre code.",
        ],
      },
      {
        id: "reglages-box",
        h2: "Réglages recommandés",
        paragraphs: ["Connectez la box en Ethernet, activez le décodage matériel et laissez la résolution en automatique."],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Brancher la box en HDMI et en Ethernet",
        instruction: "Connectez la box à la TV et à votre routeur pour une connexion stable.",
      },
      {
        stepNumber: 2,
        title: "Installer Downloader",
        instruction: "Téléchargez Downloader depuis le store de la box et autorisez les sources inconnues.",
      },
      {
        stepNumber: 3,
        title: "Installer et activer Atlas Pro",
        instruction: "Entrez le code officiel dans Downloader, installez l'APK puis saisissez votre code d'activation.",
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "installer-atlas-pro-sur-android-tv",
      "installer-atlas-pro-sur-tv-samsung",
      "installer-atlas-pro-sur-lg-smart-tv",
    ],
    seoTitle: "Installer Atlas Pro sur Box Android : Guide Complet",
    seoDescription:
      "Installez Atlas Pro ONTV sur une box Android (Mi Box, H96, Shield) : Downloader, code officiel, activation et réglages pour une lecture 4K stable.",
    faq: [
      {
        question: "Quelle box Android choisir pour Atlas Pro ?",
        answer:
          "Un modèle avec au moins 2 Go de RAM, compatible 4K et doté d'un port Ethernet, comme une Xiaomi Mi Box S ou une Nvidia Shield.",
      },
    ],
  },
  {
    id: "tut-pc-windows",
    slug: "regarder-atlas-pro-sur-pc-windows",
    title: "Regarder Atlas Pro sur PC Windows : Méthodes Compatibles",
    category: "installation",
    categoryLabel: "Installation & Configuration TV",
    tags: ["PC Windows", "Xtream Codes", "Atlas Pro ONTV", "IBO Player"],
    excerpt:
      "Comment profiter de votre abonnement Atlas Pro sur un ordinateur Windows : lecteur compatible Xtream Codes/M3U ou émulateur Android, avec leurs avantages et limites.",
    readingTime: "5 min",
    wordCount: 900,
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    author: AUTHOR,
    mainImage: {
      url: "/images/tutorials/installer-atlas-pro-fire-stick.webp",
      alt: "Lecture d'une chaîne IPTV sur un ordinateur Windows",
      caption: "Sur PC, un lecteur compatible remplace l'application Android officielle.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "L'application officielle Atlas Pro ONTV est un APK Android. Sur un PC Windows, deux méthodes : utiliser un lecteur compatible avec vos identifiants Xtream Codes ou votre lien M3U (comme VLC ou un lecteur IPTV pour Windows), ou installer un émulateur Android pour exécuter l'application officielle. La première est plus légère, la seconde reproduit l'interface de la TV.",
    keyTakeaways: [
      "L'application officielle est conçue pour Android et non pour Windows.",
      "Un lecteur compatible Xtream Codes/M3U est la solution la plus simple sur PC.",
      "Un émulateur Android permet d'utiliser l'APK, au prix de plus de ressources.",
    ],
    tableOfContents: [
      { id: "methode-lecteur", title: "Méthode 1 : lecteur compatible", level: 2 },
      { id: "methode-emulateur", title: "Méthode 2 : émulateur Android", level: 2 },
      { id: "quelle-methode", title: "Quelle méthode choisir ?", level: 2 },
    ],
    body: [
      "Il n'existe pas d'application Atlas Pro native pour Windows. Deux solutions permettent toutefois de regarder votre abonnement sur ordinateur.",
    ],
    sections: [
      {
        id: "methode-lecteur",
        h2: "Méthode 1 : lecteur compatible",
        paragraphs: [
          "Utilisez un lecteur capable de lire une playlist M3U ou une connexion Xtream Codes, puis renseignez l'URL, l'utilisateur et le mot de passe fournis par e-mail.",
        ],
      },
      {
        id: "methode-emulateur",
        h2: "Méthode 2 : émulateur Android",
        paragraphs: [
          "Un émulateur Android permet d'installer l'APK officiel. Cette méthode demande davantage de mémoire et de puissance processeur.",
        ],
      },
      {
        id: "quelle-methode",
        h2: "Quelle méthode choisir ?",
        paragraphs: ["Pour un usage simple, préférez le lecteur compatible. Choisissez l'émulateur si vous tenez à l'interface de l'application officielle."],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Récupérer vos identifiants Xtream Codes",
        instruction: "Retrouvez l'URL, le nom d'utilisateur et le mot de passe dans votre e-mail de confirmation.",
      },
      {
        stepNumber: 2,
        title: "Configurer le lecteur",
        instruction: "Ajoutez une playlist Xtream Codes ou M3U dans le lecteur choisi.",
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "retrouver-entrer-code-atlas-pro-ontv",
      "alternatives-atlas-pro-tv-non-compatible-ibo-player-smarters-tivimate",
      "installer-atlas-pro-sur-android-tv",
    ],
    seoTitle: "Regarder Atlas Pro sur PC Windows : 2 Méthodes Compatibles",
    seoDescription:
      "Atlas Pro sur PC Windows : utilisez un lecteur Xtream Codes/M3U ou un émulateur Android. Comparatif des deux méthodes et configuration pas à pas.",
    faq: [
      {
        question: "Existe-t-il une application Atlas Pro officielle pour Windows ?",
        answer:
          "Non, l'application officielle est un APK Android. Sur Windows, utilisez un lecteur compatible ou un émulateur Android.",
      },
    ],
  },
  {
    id: "tut-alternatives",
    slug: "alternatives-atlas-pro-tv-non-compatible-ibo-player-smarters-tivimate",
    title: "Alternatives à Atlas Pro pour TV Non Compatible : IBO Player, Smarters, TiviMate",
    category: "comparisons",
    categoryLabel: "Comparatifs & Alternatives IPTV",
    tags: ["IBO Player", "IPTV Smarters", "TiviMate", "Samsung", "LG webOS", "Xtream Codes"],
    excerpt:
      "Votre TV ne peut pas installer l'application officielle Atlas Pro ? Comparez IBO Player, IPTV Smarters et TiviMate pour utiliser votre service sur Samsung, LG et autres appareils.",
    readingTime: "7 min",
    wordCount: 1400,
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    author: AUTHOR,
    mainImage: {
      url: "/images/tutorials/installer-atlas-pro-tv-samsung/maxresdefault.jpg",
      alt: "Comparatif des lecteurs IBO Player, IPTV Smarters et TiviMate sur Smart TV",
      caption: "Les alternatives servent à utiliser votre service sur les appareils non compatibles.",
      width: 1280,
      height: 720,
    },
    directAnswer:
      "Les applications alternatives (IBO Player, IPTV Smarters, TiviMate) servent à utiliser votre service Atlas Pro sur les appareils qui ne peuvent pas installer les applications officielles, comme les TV Samsung (Tizen) et LG (webOS). IBO Player est disponible sur les stores Samsung et LG ; IPTV Smarters et TiviMate fonctionnent sur Android TV, Fire Stick et box Android. Elles se configurent avec vos identifiants Xtream Codes.",
    keyTakeaways: [
      "Les applications officielles Atlas Pro sont des APK Android : elles ne s'installent pas sur Samsung ou LG.",
      "Les alternatives se configurent avec les identifiants Xtream Codes de votre abonnement.",
      "IBO Player est la solution privilégiée sur Samsung et LG.",
      "Aucune application Atlas Pro officielle n'existe sur l'App Store d'Apple.",
    ],
    tableOfContents: [
      { id: "pourquoi-alternatives", title: "Pourquoi utiliser une alternative ?", level: 2 },
      { id: "ibo-player", title: "IBO Player : Samsung et LG", level: 2 },
      { id: "iptv-smarters", title: "IPTV Smarters : polyvalent", level: 2 },
      { id: "tivimate", title: "TiviMate : Android TV et Fire Stick", level: 2 },
      { id: "tableau-comparatif", title: "Comparatif rapide", level: 2 },
    ],
    body: [
      "Les applications officielles Atlas Pro (ONTV, Max, 9X) sont des applications Android. Elles ne peuvent pas s'installer sur les téléviseurs Samsung (Tizen), LG (webOS) ni sur les appareils Apple, pour lesquels il n'existe pas d'application officielle sur l'App Store.",
      "Pour utiliser votre abonnement sur ces appareils, il faut passer par un lecteur alternatif configuré avec vos identifiants Xtream Codes.",
    ],
    sections: [
      {
        id: "pourquoi-alternatives",
        h2: "Pourquoi utiliser une alternative ?",
        paragraphs: [
          "Les alternatives ne remplacent pas l'application officielle : elles permettent d'accéder à votre service sur les appareils incompatibles avec elle. Sur Android TV, Fire Stick ou box Android, privilégiez l'application officielle.",
        ],
      },
      {
        id: "ibo-player",
        h2: "IBO Player : Samsung et LG",
        paragraphs: [
          "IBO Player est disponible sur le Samsung Smart Hub et le LG Content Store. Il propose une période d'essai, puis une activation payante à l'éditeur. Suivez le guide d'installation dédié à votre marque : Samsung ou LG.",
        ],
      },
      {
        id: "iptv-smarters",
        h2: "IPTV Smarters : polyvalent",
        paragraphs: [
          "IPTV Smarters fonctionne sur de nombreux appareils (Android, certaines Smart TV) et accepte les identifiants Xtream Codes, avec un guide TV intégré.",
        ],
      },
      {
        id: "tivimate",
        h2: "TiviMate : Android TV et Fire Stick",
        paragraphs: [
          "TiviMate est un lecteur très apprécié sur Android TV et Fire Stick pour son interface et son guide des programmes. Il se configure avec Xtream Codes.",
        ],
      },
      {
        id: "tableau-comparatif",
        h2: "Comparatif rapide",
        paragraphs: [
          "- IBO Player : Samsung, LG, Android. Idéal pour les TV non compatibles avec l'APK.",
          "- IPTV Smarters : Android, Fire Stick, certaines Smart TV. Polyvalent.",
          "- TiviMate : Android TV, Fire Stick. Confort d'utilisation et guide des programmes.",
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Identifier votre appareil",
        instruction: "Samsung ou LG : IBO Player. Android TV, Fire Stick ou box : application officielle, ou TiviMate/Smarters.",
      },
      {
        stepNumber: 2,
        title: "Récupérer vos identifiants Xtream Codes",
        instruction: "Retrouvez URL, utilisateur et mot de passe dans votre e-mail de confirmation.",
      },
      {
        stepNumber: 3,
        title: "Suivre le guide dédié à votre marque",
        instruction: "Consultez le guide d'installation Samsung ou LG pour le pas à pas détaillé.",
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "installer-atlas-pro-sur-tv-samsung",
      "installer-atlas-pro-sur-lg-smart-tv",
      "installer-atlas-pro-sur-box-android",
      "regarder-atlas-pro-sur-pc-windows",
    ],
    seoTitle: "Alternatives Atlas Pro pour TV Non Compatible : IBO, Smarters",
    seoDescription:
      "TV Samsung ou LG incompatible avec Atlas Pro ? Comparez IBO Player, IPTV Smarters et TiviMate pour utiliser votre service avec vos identifiants Xtream Codes.",
    faq: [
      {
        question: "Pourquoi Atlas Pro ne s'installe-t-il pas sur ma TV Samsung ou LG ?",
        answer:
          "Les applications officielles sont des APK Android. Les systèmes Tizen (Samsung) et webOS (LG) ne les exécutent pas : utilisez IBO Player ou une box Android.",
      },
      {
        question: "Atlas Pro existe-t-il sur iPhone, iPad ou Mac ?",
        answer:
          "Non, il n'existe pas d'application Atlas Pro officielle sur l'App Store. Seuls des lecteurs tiers compatibles Xtream Codes peuvent être utilisés.",
      },
    ],
  },
];
