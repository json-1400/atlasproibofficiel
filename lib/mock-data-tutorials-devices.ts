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
        h2: "1. Modèles compatibles et prérequis techniques",
        callout: {
          type: "tip",
          title: "Compatibilité Native : Android TV et Google TV acceptent l'APK officiel",
          text: "Contrairement aux téléviseurs [Samsung Tizen](/tutoriels/installer-atlas-pro-sur-tv-samsung) ou [LG webOS](/tutoriels/installer-atlas-pro-sur-lg-smart-tv), tous les téléviseurs équipés d'**Android TV** ou **Google TV** sont capables d'exécuter directement l'APK officiel d'Atlas Pro ONTV sans passer par un lecteur tiers.",
        },
        paragraphs: [
          "Ce tutoriel s'applique à l'ensemble des téléviseurs connectés tournant sous l'environnement Google :",
          "- **Sony Bravia** (toutes séries sous Android TV et Google TV).",
          "- **Philips Smart TV** (modèles Ambilight équipés d'Android TV).",
          "- **TCL et Thomson** (téléviseurs Google TV QLED et Mini-LED).",
          "- **Xiaomi TV, Hisense (modèles Android)** et vidéoprojecteurs connectés.",
        ],
        table: {
          caption: "Compatibilité et performances vidéo selon les marques de téléviseurs Android TV",
          headers: ["Marque TV", "Système d'Exploitation", "Processeur Vidéo", "Performances 4K Atlas Pro"],
          rows: [
            [
              "Sony Bravia",
              "Google TV (Android 10/12)",
              "Cognitive Processor XR",
              "Décodage 4K HDR natif exceptionnel, zapping instantané."
            ],
            [
              "Philips Ambilight",
              "Android TV 11 / Google TV",
              "P5 Perfect Picture Engine",
              "Immersion lumineuse Ambilight synchronisée avec les flux directs."
            ],
            [
              "TCL / Thomson",
              "Google TV",
              "Processeur AiPQ",
              "Très bonne fluidité sur les flux sportifs 60 fps."
            ],
            [
              "Xiaomi Mi TV",
              "PatchWall / Android TV",
              "Puce quad-core 64-bit",
              "Excellente stabilité en liaison Ethernet RJ45."
            ]
          ]
        },
      },
      {
        id: "installer-downloader",
        h2: "2. Installer Downloader depuis le Google Play Store",
        paragraphs: [
          "1. Sur votre téléviseur, ouvrez l'application officielle **Google Play Store**.",
          "2. Dans la barre de recherche vocale ou textuelle, saisissez **Downloader** (application orange développée par AFTVnews) et cliquez sur **Installer**.",
          "3. Une fois l'installation terminée, ouvrez les **Paramètres Android de la TV > Applications > Accès spécial des applications > Installer des applications inconnues**.",
          "4. Cochez l'autorisation pour **Downloader** afin de lui permettre de finaliser l'installation de l'APK officiel.",
        ],
      },
      {
        id: "installer-apk",
        h2: "3. Saisir le code officiel 822648 pour télécharger l'APK",
        paragraphs: [
          "Lancez Downloader depuis vos applications, autorisez l'accès au stockage, puis entrez le code officiel de redirection automatique :",
          "- **Code Downloader Atlas Pro ONTV V4 :** `822648`",
          "Appuyez sur la touche **Go** de la télécommande : le fichier d'installation officiel est téléchargé directement depuis nos serveurs sécurisés en moins de 30 secondes.",
        ],
      },
      {
        id: "activer-code",
        h2: "4. Activer votre code à 12 chiffres et lancer les chaînes",
        paragraphs: [
          "Dès l'ouverture d'Atlas Pro ONTV, sélectionnez **Connexion avec code d'activation**, tapez vos 12 chiffres sans espace et validez.",
          "Vos bouquets de télévision en direct, vos guides EPG et votre vidéothèque VOD 4K sont immédiatement opérationnels.",
        ],
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
        h2: "1. Choisir sa box Android : Box certifiées Google vs Boîtiers génériques",
        callout: {
          type: "warning",
          title: "Attention aux certifications DRM : Widevine L1 vs Widevine L3",
          text: "Pour profiter de la 4K Ultra HD à 60 fps sans saccade, privilégiez un boîtier certifié **Google Android TV avec DRM Widevine L1** (comme la **Xiaomi Mi Box S**, la **Nvidia Shield TV** ou le **Chromecast avec Google TV**). Les boîtiers génériques d'entrée de gamme (type MXQ Pro ou boîtiers Amlogic non certifiés) sont souvent limités au DRM Widevine L3 et peuvent surchauffer lors des diffusions en continu.",
        },
        paragraphs: [
          "Une box TV Android est la solution idéale pour transformer n'importe quel téléviseur en Smart TV de pointe. Elle est particulièrement plébiscitée par les détenteurs de téléviseurs [Samsung Tizen](/tutoriels/installer-atlas-pro-sur-tv-samsung) ou [LG webOS](/tutoriels/installer-atlas-pro-sur-lg-smart-tv) souhaitant profiter de l'APK officiel Atlas Pro ONTV sans contrainte.",
        ],
        table: {
          caption: "Comparatif des boîtiers Android TV recommandés pour Atlas Pro en 2026",
          headers: ["Boîtier Android TV", "Système & DRM", "Port Réseau & Wi-Fi", "Performances 4K HDR", "Recommandation d'Expert"],
          rows: [
            [
              "Nvidia Shield TV Pro",
              "Android TV certifié | Widevine L1",
              "Ethernet Gigabit 1000 Mbps + Wi-Fi 5",
              "Processeur Tegra X1+, Upscaling IA 4K magique",
              "La Rolls-Royce absolue pour les passionnés de Home Cinema."
            ],
            [
              "Xiaomi Mi Box S (2nd Gen)",
              "Google TV officiel | Widevine L1",
              "Wi-Fi 5 double bande (adaptateur USB-Ethernet)",
              "4K Ultra HD, Dolby Vision, HDR10+",
              "Le meilleur rapport qualité / prix grand public (< 60 €)."
            ],
            [
              "Chromecast avec Google TV 4K",
              "Google TV officiel | Widevine L1",
              "Wi-Fi 5 double bande MIMO",
              "Interface très épurée, télécommande Bluetooth ergonomique",
              "Compact et très fiable pour un usage familial quotidien."
            ],
            [
              "Boîtiers génériques (MXQ, H96, T95)",
              "Android AOSP smartphone | Widevine L3",
              "Ethernet 100 Mbps basique",
              "Surchauffe fréquente, navigation souris obligatoire",
              "Déconseillé pour la 4K; acceptable uniquement en dépannage."
            ]
          ]
        },
      },
      {
        id: "installation-box",
        h2: "2. Procédure d'installation avec le code Downloader 822648",
        paragraphs: [
          "1. Ouvrez le **Google Play Store** sur votre box et installez l'application **Downloader**.",
          "2. Dans les paramètres de la box, autorisez Downloader à installer des applications inconnues.",
          "3. Lancez Downloader, tapez le code officiel **822648** et validez avec la touche Entrée de la télécommande.",
          "4. Une fois l'APK officiel téléchargé, cliquez sur **Installer**, ouvrez Atlas Pro ONTV et saisissez votre code à 12 chiffres.",
        ],
      },
      {
        id: "reglages-box",
        h2: "3. Réglages réseau et affichage pour une fluidité sans freeze",
        paragraphs: [
          "- **Priorité Ethernet :** Branchez impérativement votre box avec un câble réseau RJ45 Cat 6 directement à votre box internet pour éliminer les micro-coupures de la bande Wi-Fi.",
          "- **Décodeur matériel :** Dans les réglages d'Atlas Pro ONTV, basculez le lecteur sur **Hardware (HW+)** pour exploiter le processeur graphique du boîtier.",
          "- **Espace libre :** Conservez au moins 2 Go d'espace de stockage disponible pour la mémoire tampon.",
        ],
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
    seoTitle: "Installer Atlas Pro sur Box TV Android : Boîtiers & Shield",
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
        h2: "1. Méthode recommandée : Lecteur IPTV compatible Windows & macOS",
        callout: {
          type: "tip",
          title: "Le choix le plus performant pour ordinateur",
          text: "Pour regarder Atlas Pro sur votre PC portable ou tour sans ralentir votre machine, privilégiez un lecteur autonome comme **IPTV Smarters Pro pour Windows** ou **VLC Media Player**. Ces logiciels décodent nativement les flux vidéo sans nécessiter de couche de virtualisation Android.",
        },
        paragraphs: [
          "Il n'existe pas d'application exécutable .exe native développée sous la marque Atlas Pro. Deux logiciels se démarquent pour une restitution fluide des flux :",
          "- **IPTV Smarters Pro pour Windows / Mac :** Interface moderne, gestion des catégories TV en direct, affiches de films VOD et guide EPG intégré. Il se connecte en 10 secondes avec vos identifiants **Xtream Codes** (Serveur URL, Identifiant et Mot de passe).",
          "- **VLC Media Player :** Le lecteur universel le plus léger. Ouvrez simplement votre lien de playlist M3U reçue par e-mail via le menu *Média > Ouvrir un flux réseau*.",
        ],
        table: {
          caption: "Comparatif des solutions logicielles pour regarder Atlas Pro sur PC Windows et Mac",
          headers: ["Logiciel PC / Mac", "Système Compatible", "Consommation RAM", "Interface & EPG", "Verdict"],
          rows: [
            [
              "IPTV Smarters Pro",
              "Windows 10/11 & macOS",
              "Faible (~250 Mo RAM)",
              "Excellente, réplique une interface Smart TV avec affiches VOD",
              "La solution numéro 1 recommandée pour un usage quotidien."
            ],
            [
              "VLC Media Player",
              "Windows, Mac, Linux",
              "Très faible (< 150 Mo RAM)",
              "Basique (liste textuelle des chaînes)",
              "Idéal pour tester un flux rapidement avec un lien M3U."
            ],
            [
              "Émulateur Android (Bluestacks)",
              "Windows 10/11",
              "Élevée (> 2 Go RAM)",
              "Interface TV originale de l'APK officiel",
              "Gourmand en ressources processeur; réservé aux PC puissants."
            ]
          ]
        },
      },
      {
        id: "methode-emulateur",
        h2: "2. Méthode alternative : Émulateur Android sur PC (Bluestacks / WSA)",
        paragraphs: [
          "Si vous tenez absolument à utiliser l'interface officielle de l'application [Atlas Pro Windows PC](/telecharger/windows) ou [Atlas Pro ONTV](/telecharger/atlas-pro-ontv) avec votre code à 12 chiffres :",
          "1. Téléchargez et installez l'émulateur gratuit **Bluestacks 5** (ou activez le sous-système Windows pour Android sur Windows 11).",
          "2. Téléchargez le lecteur officiel depuis notre page [Atlas Pro Windows PC](/telecharger/windows).",
          "3. Glissez-déposez le fichier .apk dans la fenêtre de l'émulateur pour finaliser l'installation.",
        ],
      },
      {
        id: "quelle-methode",
        h2: "3. Quelle méthode choisir selon la puissance de votre ordinateur ?",
        paragraphs: [
          "- Pour un **ordinateur portable de bureau standard** (Intel Core i3 / i5, 8 Go RAM) : installez **IPTV Smarters Pro** pour préserver votre autonomie de batterie et éviter la chauffe des ventilateurs.",
          "- Pour un **PC gamer ou station de travail** (16 Go+ RAM) : l'émulateur vous offrira l'expérience télévisuelle exacte.",
          "Pour profiter de vos flux sur grand écran, découvrez également nos guides pour [Smart TV Samsung](/tutoriels/installer-atlas-pro-sur-tv-samsung) et [Amazon Fire Stick](/tutoriels/installer-atlas-pro-sur-fire-stick).",
        ],
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
        h2: "Pourquoi utiliser une alternative à l'application officielle ?",
        callout: {
          type: "info",
          title: "Lecteurs Multimédias Certifiés sur les Boutiques Officielles",
          text: "Les lecteurs multimédias comme [IBO Player](https://iboplayer.com), TiviMate ou IPTV Smarters sont des logiciels de lecture vidéo certifiés et validés sur les boutiques officielles d'applications ([Google Play Store](https://play.google.com), Samsung Smart Hub, LG Content Store). Ils fonctionnent comme VLC Media Player en permettant la lecture fluide de vos flux via l'API Xtream Codes.",
        },
        paragraphs: [
          "Les applications officielles Atlas Pro (ONTV, Max 7, 9X) sont compilées sous forme d'**APK Android**. Elles s'installent à merveille sur les appareils équipés d'un système Android ou Fire OS ([Amazon Fire Stick](/tutoriels/installer-atlas-pro-sur-fire-stick), [Android TV Sony / Philips / TCL](/tutoriels/installer-atlas-pro-sur-android-tv), boîtiers Nvidia Shield et Xiaomi Box).",
          "En revanche, les téléviseurs connectés de marque Samsung et LG utilisent des systèmes d'exploitation propriétaires fermés : **Tizen OS** pour Samsung et **webOS** pour LG. Ces systèmes refusent catégoriquement l'installation de fichiers APK Android.",
          "Pour profiter de votre abonnement sur ces écrans sans investir dans une box TV externe, l'installation d'un **lecteur certifié compatible Xtream Codes** sur le store de votre téléviseur est la méthode officielle recommandée.",
        ],
      },
      {
        id: "ibo-player",
        h2: "IBO Player : La solution recommandée sur Samsung Smart TV et LG webOS",
        paragraphs: [
          "**IBO Player Pro** s'est imposé comme la référence absolue sur les téléviseurs modernes Samsung et LG. Téléchargeable en 30 secondes depuis le Samsung Smart Hub ou le LG Content Store, il propose une interface fluide, une compatibilité parfaite avec les flux 4K HEVC et une gestion ergonomique des télécommandes Magic Remote et One Remote.",
          "Consultez nos guides pas à pas complets :",
          "- [Comment installer et activer IBO Player sur Samsung Smart TV](/tutoriels/installer-atlas-pro-sur-tv-samsung)",
          "- [Comment configurer IBO Player sur LG Smart TV webOS](/tutoriels/installer-atlas-pro-sur-lg-smart-tv)",
        ],
      },
      {
        id: "tivimate",
        h2: "TiviMate IPTV Player : Le summum de la personnalisation sur Android TV & Fire Stick",
        paragraphs: [
          "Conçu exclusivement pour les interfaces TV pilotées à la télécommande, **TiviMate** offre une expérience utilisateur digne des décodeurs des plus grands opérateurs câble/satellite. Sa fluidité de zapping (inférieure à 0,8 seconde) et sa grille de programmes EPG interactive sont sans équivalent.",
          "TiviMate est idéal si vous utilisez un [Amazon Fire TV Stick 4K](/tutoriels/installer-atlas-pro-sur-fire-stick) ou un téléviseur sous [Android TV / Google TV](/tutoriels/installer-atlas-pro-sur-android-tv).",
        ],
      },
      {
        id: "iptv-smarters",
        h2: "IPTV Smarters Pro : La polyvalence multi-écrans (PC, Mac, iOS)",
        paragraphs: [
          "Si vous souhaitez regarder vos chaînes et films VOD sur ordinateur portable ou tablette, **IPTV Smarters Pro** reste le lecteur le plus versatile du marché. Compatible Windows, macOS, Android et iOS, il permet de tester facilement vos accès avec vos identifiants URL / Utilisateur / Mot de passe Xtream Codes.",
          "Retrouvez notre guide pour [installer Atlas Pro sur iPhone, iPad et Apple TV](/telecharger/ios) ou notre tutoriel pour [regarder Atlas Pro sur PC Windows et Mac](/tutoriels/regarder-atlas-pro-sur-pc-windows).",
        ],
      },
      {
        id: "tableau-comparatif",
        h2: "Comparatif technique : Quel lecteur choisir selon votre équipement ?",
        table: {
          caption: "Benchmark comparatif des meilleurs lecteurs IPTV compatibles Atlas Pro en 2026",
          headers: ["Lecteur IPTV", "Systèmes d'Exploitation", "Vitesse de Zapping", "EPG & Replay", "Modèle Tarifaire", "Recommandation d'Expert"],
          rows: [
            [
              "IBO Player Pro",
              "Samsung Tizen, LG webOS, Android TV, Fire TV, Apple tvOS",
              "Très rapide (< 1,2 s)",
              "EPG 7 jours, Replay, pistes multi-audio & sous-titres",
              "Essai 7 jours puis ~8 € à vie (paiement direct développeur)",
              "Choix numéro 1 pour les Smart TV Samsung et LG sans boîtier externe."
            ],
            [
              "TiviMate IPTV",
              "Android TV, Google TV, Amazon Fire TV Stick",
              "Ultra-rapide (< 0,8 s)",
              "Meilleure interface EPG du marché, mode mosaïque multi-écrans",
              "Version gratuite basique ou Premium (~35 € à vie)",
              "La Rolls-Royce des lecteurs pour Fire Stick et Android TV."
            ],
            [
              "IPTV Smarters Pro",
              "Android, iOS, Windows, macOS, WebOS/Tizen (selon région)",
              "Standard (< 2,0 s)",
              "Grille EPG classique, organisation VOD et séries avec résumés",
              "Gratuit (version Pro optionnelle)",
              "Recommandé pour PC, tablettes et dépannage multi-appareils."
            ],
            [
              "XCIPTV Player",
              "Android TV, Fire OS, smartphones Android",
              "Rapide (< 1,4 s)",
              "Guide TV interactif, intégration lecteurs ExoPlayer et VLC",
              "Gratuit",
              "Interface très simple, idéale pour les utilisateurs seniors."
            ]
          ]
        },
        paragraphs: [
          "Une fois votre lecteur installé, vous pouvez relier votre [Abonnement IPTV 12 Mois](/plans-tarifs/atlas-pro-12-mois) en saisissant vos identifiants Xtream Codes (Serveur URL, Nom d'utilisateur et Mot de passe) reçus par e-mail.",
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
    seoTitle: "Alternatives Atlas Pro TV Non Compatible : IBO & Smarters",
    seoDescription:
      "TV Samsung ou LG non compatible avec l'APK Atlas Pro ? Comparez IBO Player, IPTV Smarters et TiviMate pour configurer vos accès Xtream Codes en 5 minutes.",
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
  {
    id: "tut-freebox",
    slug: "installer-atlas-pro-sur-freebox",
    title: "Installer Atlas Pro sur Freebox : Guide Pop, Delta & Mini 4K",
    category: "installation",
    categoryLabel: "Installation & Configuration TV",
    tags: ["Freebox Pop", "Freebox Mini 4K", "Freebox Delta", "Downloader", "Android TV"],
    excerpt:
      "Installez facilement Atlas Pro sur votre Freebox Pop, Delta ou Mini 4K. Procédure détaillée avec le Google Play Store, Downloader et vos codes d'activation.",
    readingTime: "6 min",
    wordCount: 1250,
    publishedAt: "2026-10-27",
    updatedAt: "2026-10-27",
    author: AUTHOR,
    mainImage: {
      url: "/images/tutorials/installer-atlas-pro-fire-stick.webp",
      alt: "Installation officielle d'Atlas Pro ONTV sur boîtier Freebox Pop et Mini 4K",
      caption: "La Freebox Pop et la Freebox Mini 4K exécutent directement l'application officielle Atlas Pro.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "Pour installer Atlas Pro sur Freebox : sur Freebox Pop ou Mini 4K (Android TV), ouvrez le Google Play Store et téléchargez Downloader, autorisez les sources inconnues, entrez le code officiel Atlas Pro ONTV (822648) puis renseignez votre code d'activation à 12 chiffres. Pour la Freebox Delta ou Révolution sans Android TV natif, utilisez une clé HDMI (Fire TV Stick ou Chromecast Google TV) ou diffusez le flux via Chromecast.",
    keyTakeaways: [
      "La Freebox Pop et la Freebox Mini 4K intègrent nativement le système Android TV certifié Google.",
      "L'application officielle Atlas Pro ONTV s'installe en 2 minutes via Downloader (code 822648).",
      "Pour Freebox Delta et Révolution, le branchement d'un dongle HDMI ou le cast sans fil est requis.",
      "La modification des DNS sur Freebox OS permet d'éliminer tout bridage opérateur lors des matchs.",
    ],
    tableOfContents: [
      { id: "compatibilite-modeles-freebox", title: "Compatibilité des boîtiers Freebox", level: 2 },
      { id: "installation-freebox-pop-mini-4k", title: "Installation pas à pas sur Freebox Pop & Mini 4K", level: 2 },
      { id: "solutions-freebox-delta-revolution", title: "Solutions pour Freebox Delta, Ultra & Révolution", level: 2 },
      { id: "optimisation-dns-freebox", title: "Optimisation Réseau & DNS Freebox OS", level: 2 },
      { id: "faq-freebox", title: "Questions Fréquentes Freebox", level: 2 },
    ],
    body: [
      "Vous souhaitez profiter de votre abonnement [Atlas Pro 12 Mois](/plans-tarifs/atlas-pro-12-mois) directement sur votre téléviseur relié à une box internet Free ? Ce guide technique complet vous explique comment installer et configurer l'application officielle [Atlas Pro ONTV](/telecharger/atlas-pro-ontv) sur l'ensemble des décodeurs TV de l'opérateur Free.",
      "Selon le modèle de votre boîtier TV Freebox (Player Pop, Mini 4K, Delta, Ultra ou Révolution), la méthode d'installation diffère sensiblement en raison du système d'exploitation embarqué.",
    ],
    sections: [
      {
        id: "compatibilite-modeles-freebox",
        h2: "1. Compatibilité des décodeurs Freebox avec Atlas Pro",
        intro:
          "Tous les décodeurs Freebox ne fonctionnent pas sous le même système. Voici le tableau récapitulatif de compatibilité pour choisir la bonne méthode :",
        table: {
          headers: ["Modèle Player Freebox", "Système d'exploitation", "Compatibilité APK Officiel", "Méthode recommandée"],
          rows: [
            ["Freebox Pop (Player Pop)", "Android TV 9 / 10 / 11", "100 % Compatible", "Google Play Store + Downloader (code 822648)"],
            ["Freebox Mini 4K", "Android TV", "100 % Compatible", "Google Play Store + Downloader ou Clé USB"],
            ["Freebox Delta (Player Devialet)", "Freebox OS propriétaire", "Non compatible APK direct", "Clé HDMI (Fire Stick / Chromecast) ou AirPlay"],
            ["Freebox Ultra (Player TV Free 4K)", "Android TV / Google TV", "100 % Compatible", "Play Store + Downloader officiel"],
            ["Freebox Révolution", "Freebox OS propriétaire", "Non compatible APK direct", "Dongle HDMI externe ou Cast vidéo réseau"],
          ],
        },
        callout: {
          type: "tip",
          title: "Vous possédez une Freebox Pop ou Mini 4K ?",
          text: "Votre décodeur dispose d'un accès natif au Google Play Store. Vous pouvez installer directement l'APK certifié sans aucun matériel supplémentaire.",
        },
      },
      {
        id: "installation-freebox-pop-mini-4k",
        h2: "2. Procédure d'installation sur Freebox Pop et Mini 4K",
        paragraphs: [
          "Suivez ces 4 étapes simples depuis votre téléviseur pour déployer l'application officielle :",
          "1. **Installer l'utilitaire Downloader** : Depuis l'écran d'accueil Android TV de votre Freebox, ouvrez l'application **Google Play Store**. Dans la barre de recherche, tapez « Downloader by AFTVnews » et lancez l'installation gratuite.",
          "2. **Autoriser les sources inconnues** : Rendez-vous dans les *Paramètres Freebox (icône engrenage) > Préférences relatives à l'appareil > Sécurité et restrictions > Sources inconnues*. Activez l'interrupteur en face de l'application Downloader.",
          "3. **Télécharger l'APK Atlas Pro ONTV** : Ouvrez Downloader, autorisez l'accès aux fichiers, puis entrez le code de téléchargement officiel **822648** dans la barre URL. Appuyez sur **Go**. Le téléchargement de la version optimisée Android TV démarre automatiquement.",
          "4. **Installer et Activer** : Cliquez sur **Installer**. Une fois le déploiement terminé, ouvrez Atlas Pro ONTV et saisissez votre code d'activation à 12 chiffres fourni lors de votre commande.",
        ],
        callout: {
          type: "info",
          title: "Codes de téléchargement rapide Downloader",
          text: "Pour Atlas Pro ONTV V4 : entrez le code **822648**. Pour la variante Atlas Pro Max : utilisez le code **134444**.",
        },
      },
      {
        id: "solutions-freebox-delta-revolution",
        h2: "3. Comment regarder Atlas Pro sur Freebox Delta et Révolution ?",
        paragraphs: [
          "Les décodeurs Player Devialet (Freebox Delta) et Player Révolution n'utilisent pas Android TV, mais un environnement fermé conçu par Free ne permettant pas l'installation d'APK tiers.",
          "Pour profiter de vos chaînes et VOD sur ces équipements, deux solutions officielles existent :",
          "- **Brancher un dongle HDMI externe** : Branchez une clé [Fire TV Stick](/tutoriels/installer-atlas-pro-sur-fire-stick) ou un [Chromecast avec Google TV](/tutoriels/installer-atlas-pro-sur-android-tv) sur l'un des ports HDMI libres de votre téléviseur. Vous bénéficiez ainsi d'une expérience 4K ultra-fluide avec télécommande dédiée.",
          "- **Diffusion sans fil (Casting / AirPlay)** : Lancez vos flux depuis l'application Atlas Pro sur votre smartphone ou tablette, puis cliquez sur l'icône de diffusion (AirPlay sur Player Devialet ou Chromecast) pour projeter l'image sur l'écran du salon.",
        ],
      },
      {
        id: "optimisation-dns-freebox",
        h2: "4. Réglage DNS sur Freebox OS pour éviter les coupures",
        paragraphs: [
          "Lors des retransmissions sportives majeures (Ligue des Champions, Classico, F1), certains Fournisseurs d'Accès Internet peuvent appliquer un filtrage ou un bridage temporaire sur les serveurs de streaming.",
          "Pour garantir une fluidité totale sans aucun buffering, il est vivement conseillé de remplacer les DNS par défaut de votre Freebox par des serveurs ultra-rapides et non filtrés :",
          "1. Ouvrez un navigateur web sur votre ordinateur ou smartphone et connectez-vous à l'interface `http://mafreebox.freebox.fr`.",
          "2. Rendez-vous dans **Paramètres de la Freebox** > **Mode avancé** > **Réseau local** > **Serveur DHCP**.",
          "3. Remplacez le DNS 1 par `1.1.1.1` (Cloudflare) et le DNS 2 par `8.8.8.8` (Google DNS).",
          "4. Sauvegardez puis redémarrez votre Freebox Server et votre Player Pop.",
        ],
        callout: {
          type: "tip",
          title: "Fluidité 4K garantie",
          text: "Pour aller plus loin dans la résolution des ralentissements, consultez notre [guide complet de résolution du buffering](/tutoriels/resoudre-coupure-buffering-atlas-pro).",
        },
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Installer Downloader sur la Freebox",
        instruction:
          "Depuis le Google Play Store de votre Freebox Pop ou Mini 4K, recherchez et installez l'application officielle gratuite Downloader.",
      },
      {
        stepNumber: 2,
        title: "Autoriser l'installation d'applications",
        instruction:
          "Dans Paramètres > Sécurité et restrictions > Sources inconnues, activez l'autorisation pour l'application Downloader.",
      },
      {
        stepNumber: 3,
        title: "Télécharger l'APK Atlas Pro",
        instruction:
          "Lancez Downloader, tapez le code officiel 822648 dans le champ de saisie et validez en cliquant sur Go.",
      },
      {
        stepNumber: 4,
        title: "Activer votre abonnement",
        instruction:
          "Ouvrez l'application Atlas Pro ONTV et renseignez votre code d'accès à 12 chiffres pour charger instantanément les chaînes.",
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "installer-atlas-pro-sur-android-tv",
      "installer-atlas-pro-sur-fire-stick",
      "resoudre-coupure-buffering-atlas-pro",
      "retrouver-entrer-code-atlas-pro-ontv",
    ],
    seoTitle: "Installer Atlas Pro sur Freebox : Pop, Delta et Mini 4K",
    seoDescription:
      "Guide pas à pas pour installer Atlas Pro sur Freebox Pop, Delta et Mini 4K. Téléchargez l'application officielle via Google Play Store ou Downloader.",
    faq: [
      {
        question: "L'application Atlas Pro fonctionne-t-elle sur la Freebox Pop ?",
        answer:
          "Oui, la Freebox Pop fonctionne sous Android TV certifié par Google. Vous pouvez installer directement l'APK officiel Atlas Pro ONTV via l'application Downloader en utilisant le code 822648.",
      },
      {
        question: "Peut-on installer Atlas Pro sur une Freebox Révolution ou Delta ?",
        answer:
          "Ces décodeurs n'utilisent pas Android TV et ne peuvent pas installer d'APK. La solution recommandée est de brancher une clé Fire TV Stick ou Chromecast Google TV en HDMI sur votre téléviseur.",
      },
      {
        question: "Faut-il modifier les DNS Freebox pour regarder le streaming sans coupure ?",
        answer:
          "Oui, configurer les DNS 1.1.1.1 de Cloudflare sur Freebox OS permet d'éviter tout bridage ou ralentissement aux heures de grande affluence lors des événements sportifs en direct.",
      },
      {
        question: "Quel code Downloader utiliser pour la Freebox ?",
        answer:
          "Le code Downloader officiel pour Atlas Pro ONTV V4 est 822648. Pour la déclinaison Atlas Pro Max, utilisez le code 134444.",
      },
    ],
  },
];
