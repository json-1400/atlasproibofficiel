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
  faq?: Array<{ question: string; answer: string }>;
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
      "Votre Atlas Pro ne peut pas se connecter au serveur ou affiche un écran noir ? Ce guide de dépannage complet identifie les 5 causes les plus fréquentes et vous donne des solutions précises pour retrouver vos flux IPTV en moins de 5 minutes.",
    body: [
      "L'erreur 'Impossible de se connecter au serveur' est le problème le plus signalé par les utilisateurs d'Atlas Pro ONTV. Elle peut sembler alarmante, mais dans la grande majorité des cas, la cause est simple et se résout en quelques minutes sans aucune réinstallation.",
      "La première chose à comprendre : cette erreur n'est presque jamais liée à une panne du serveur Atlas Pro. Les serveurs Atlas Pro France fonctionnent avec une disponibilité supérieure à 99,5 % et des mécanismes de basculement automatique. Si votre application affiche cette erreur, le problème vient dans 95 % des cas de votre côté : connexion internet, DNS bloqué, cache corrompu, ou code expiré.",
      "Le blocage DNS est la cause numéro un chez les abonnés Orange, SFR et Bouygues. Ces opérateurs filtrent parfois les requêtes UDP sur certains ports utilisés par les flux IPTV, en particulier entre 18h et 23h (heures de pointe). Résultat : l'application tente de joindre le serveur, n'obtient pas de réponse, et affiche le message d'erreur. La solution est immédiate : changer les DNS de votre téléviseur ou de votre box pour utiliser ceux de Cloudflare (1.1.1.1 / 1.0.0.1) ou de Google (8.8.8.8 / 8.8.4.4).",
      "La deuxième cause la plus fréquente est l'expiration silencieuse du code d'activation. Quand un abonnement arrive à échéance, le serveur Atlas Pro rejette l'authentification sans afficher de message d'alerte explicite dans l'application. L'écran reste noir, ou le message 'Connexion impossible' s'affiche. Les utilisateurs croient à une panne alors qu'il s'agit simplement d'un code expiré. Vérifiez immédiatement dans Paramètres > Compte de l'application : si la date d'expiration est dépassée, un simple renouvellement de votre abonnement remet tout en fonctionnement en moins de 15 minutes.",
      "Le cache applicatif est la troisième cause classique. L'application Atlas Pro ONTV stocke des données locales (informations EPG, listes de chaînes, tokens d'authentification) qui peuvent se corrompre après une mise à jour du firmware de votre Smart TV ou d'un redémarrage forcé. Vider le cache remet l'application dans un état propre sans supprimer votre abonnement ni vos favoris.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Vérifier la connexion Internet et redémarrer la box",
        instruction:
          "Éteignez complètement votre box internet en la débranchant de la prise électrique pendant 30 secondes — ne faites pas un simple redémarrage logiciel. Ce délai force le renouvellement du bail DHCP et souvent lève les blocages DNS temporaires imposés par votre FAI. Après le redémarrage, attendez que la box soit complètement reconnectée (environ 60 secondes) avant de relancer Atlas Pro ONTV. Si vous utilisez le Wi-Fi, testez également une connexion Ethernet filaire pour éliminer les interférences radio.",
      },
      {
        stepNumber: 2,
        title: "Changer les DNS vers Cloudflare ou Google",
        instruction:
          "Sur votre Smart TV : allez dans Paramètres > Réseau > Paramètres IP > Configurez manuellement. Remplacez les DNS automatiques par 1.1.1.1 (DNS primaire) et 1.0.0.1 (DNS secondaire) de Cloudflare, ou 8.8.8.8 et 8.8.4.4 de Google. Sur Android TV ou Fire Stick : Paramètres > Réseau > Votre connexion Wi-Fi > Modifier > DNS. Ce changement contourne les filtres DNS opérateur et fonctionne dans la grande majorité des cas de blocage.",
      },
      {
        stepNumber: 3,
        title: "Vérifier la date d'expiration de votre code",
        instruction:
          "Ouvrez Atlas Pro ONTV et allez dans Paramètres > Compte (ou icône profil). La date d'expiration de votre abonnement s'affiche. Si elle est dépassée d'un seul jour, le serveur rejette toutes vos requêtes d'authentification. La solution est le renouvellement : commandez une prolongation sur notre site, votre ligne est réactivée à distance en moins de 15 minutes, sans manipulation supplémentaire de votre part.",
      },
      {
        stepNumber: 4,
        title: "Vider le cache et forcer l'arrêt de l'application",
        instruction:
          "Sur Android TV et Fire Stick : allez dans Paramètres > Applications > Voir toutes les applications > Atlas Pro ONTV. Appuyez d'abord sur 'Forcer l'arrêt', puis sur 'Vider le cache'. NE touchez pas à 'Effacer les données' sauf en dernier recours, car cette option supprime votre configuration et vos favoris. Relancez l'application après avoir vidé le cache.",
      },
      {
        stepNumber: 5,
        title: "Tester avec un autre réseau (partage de connexion mobile)",
        instruction:
          "Si l'erreur persiste après les étapes 1 à 4, activez le partage de connexion de votre smartphone et connectez votre téléviseur à ce réseau mobile. Si l'application fonctionne immédiatement sur 4G/5G, cela confirme que votre FAI bloque les flux IPTV sur votre ligne fixe. Dans ce cas, l'utilisation d'un VPN sur votre Smart TV ou votre box (ExpressVPN, NordVPN) résoudra définitivement le problème.",
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
    faq: [
      {
        question: "Pourquoi Atlas Pro ne fonctionne plus du tout ?",
        answer:
          "Les causes les plus fréquentes sont : (1) votre code Atlas Pro est expiré — vérifiez dans Paramètres > Compte ; (2) votre FAI bloque les flux IPTV — changez les DNS vers 1.1.1.1 ; (3) le cache de l'application est corrompu — videz-le dans les paramètres système. Dans la grande majorité des cas, l'une de ces trois actions résout le problème en moins de 5 minutes.",
      },
      {
        question: "L'erreur 'Impossible de se connecter au serveur' veut-elle dire que le serveur est en panne ?",
        answer:
          "Non, dans 95 % des cas ce message ne signifie pas une panne du serveur Atlas Pro. Il indique le plus souvent un blocage DNS côté opérateur, un code expiré, ou un cache corrompu. Les serveurs Atlas Pro France maintiennent une disponibilité supérieure à 99,5 % avec basculement automatique.",
      },
      {
        question: "Comment changer les DNS sur ma Smart TV Samsung ?",
        answer:
          "Sur Samsung Tizen : allez dans Paramètres > Général > Réseau > État réseau > Paramètres IP. Passez en mode DNS Manuel et saisissez 1.1.1.1 comme DNS primaire et 1.0.0.1 comme DNS secondaire. Validez et redémarrez l'application Atlas Pro ONTV.",
      },
      {
        question: "Mon code Atlas Pro est valide mais l'erreur persiste, que faire ?",
        answer:
          "Si votre code est valide et les DNS sont déjà sur Cloudflare, testez en vous connectant au réseau 4G de votre smartphone via partage de connexion. Si ça fonctionne en 4G, votre FAI bride le IPTV sur votre ligne fixe aux heures de pointe. L'installation d'un VPN sur votre box ou TV résout ce problème définitivement.",
      },
    ],
  },
  {
    id: "tut-smart-tv-samsung",
    slug: "installation-smart-tv-samsung",
    title: "Comment installer Atlas Pro ONTV sur Smart TV Samsung et LG",
    category: "hardware",
    excerpt:
      "Guide complet pour activer Atlas Pro sur votre Smart TV Samsung Tizen ou LG webOS via IBO Player, SET IPTV ou IPTV Smarters. Pas de clé USB, pas de manipulation complexe — 5 minutes chrono.",
    body: [
      "Les Smart TV Samsung sous le système Tizen et les téléviseurs LG sous webOS ne supportent pas l'installation directe d'APK Android. C'est une contrainte technique de ces systèmes d'exploitation propriétaires, et non un défaut d'Atlas Pro. La bonne nouvelle : des lecteurs IPTV spécialement conçus pour ces plateformes permettent d'utiliser votre abonnement Atlas Pro exactement comme sur un boîtier Android.",
      "Pour Samsung Tizen, les trois applications disponibles sur le Smart Hub sont IBO Player, SET IPTV et Smart IPTV. Ces applications fonctionnent toutes en injectant votre lien M3U ou vos identifiants Xtream Codes Atlas Pro. IBO Player est notre recommandation principale : elle est la plus stable, se met à jour automatiquement et affiche le guide des programmes EPG sans configuration supplémentaire. Son unique contrainte est qu'elle nécessite une activation MAC — votre adresse MAC est affichée dès l'ouverture de l'application, et notre équipe l'active lors de la livraison de votre abonnement.",
      "Pour les téléviseurs LG sous webOS, la procédure est identique dans sa logique mais légèrement différente dans son exécution. Le LG Content Store propose Smart IPTV et IPTV Smarters Pro. Contrairement à Samsung, LG n'impose pas toujours l'activation MAC : vous pouvez souvent vous connecter directement en saisissant votre URL serveur, votre nom d'utilisateur et votre mot de passe Xtream Codes dans les paramètres de l'application. Ces trois informations vous sont transmises par e-mail lors de votre commande.",
      "Le guide des programmes (EPG) est un point important. Sur Smart TV, l'EPG permet d'afficher les programmes TV en cours et à venir pour chaque chaîne, exactement comme sur un décodeur satellite. IBO Player et Smart IPTV intègrent l'EPG Atlas Pro automatiquement via notre URL d'abonnement — aucune configuration manuelle n'est nécessaire si vous utilisez la connexion Xtream Codes. Si vous utilisez un lien M3U, ajoutez l'URL EPG fournie dans votre e-mail dans le champ correspondant des paramètres de l'application.",
      "Conseil pratique : si votre téléviseur Samsung date d'avant 2017 (modèles H, J ou K Series), certaines versions de Smart IPTV peuvent être incompatibles. Dans ce cas, SET IPTV est l'alternative la plus compatible et fonctionne sur les modèles Samsung jusqu'à 2015. Pour les LG antérieurs à webOS 3.0, contactez notre support — nous avons une procédure spécifique pour ces appareils.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Ouvrir le Samsung Smart Hub (ou LG Content Store)",
        instruction:
          "Sur Samsung : appuyez sur le bouton Home de votre télécommande. Le Smart Hub s'ouvre avec la barre d'applications en bas de l'écran. Naviguez vers l'icône loupe ou la section 'Apps' pour accéder au magasin d'applications. Sur LG : appuyez sur le bouton Home et sélectionnez 'LG Content Store' dans le menu principal.",
      },
      {
        stepNumber: 2,
        title: "Installer IBO Player (Samsung) ou Smart IPTV (LG)",
        instruction:
          "Samsung : tapez 'IBO Player' dans la barre de recherche du Smart Hub. Si IBO Player n'est pas disponible dans votre région, cherchez 'SET IPTV' ou 'Smart IPTV'. Sélectionnez l'application et appuyez sur Installer. LG : cherchez 'Smart IPTV' dans le Content Store. L'installation prend moins de 30 secondes sur une connexion haut débit.",
      },
      {
        stepNumber: 3,
        title: "Ouvrir l'application et récupérer l'adresse MAC",
        instruction:
          "Lancez IBO Player ou Smart IPTV. L'écran d'accueil affiche votre adresse MAC au format 00:1A:79:XX:XX:XX et parfois une Device Key. Photographiez cet écran avec votre smartphone ou notez l'adresse MAC exactement. Cette information est indispensable pour que notre équipe active votre ligne sur ce téléviseur.",
      },
      {
        stepNumber: 4,
        title: "Associer vos identifiants Atlas Pro",
        instruction:
          "Méthode Xtream Codes (recommandée) : dans les paramètres de l'application, sélectionnez 'Connexion Xtream Codes API'. Saisissez l'URL du serveur, votre nom d'utilisateur et votre mot de passe Atlas Pro tels que reçus par e-mail. Méthode M3U : si vous préférez, copiez le lien M3U fourni dans le champ 'Playlist URL' de l'application. Votre catalogue de chaînes se charge en 10 à 30 secondes selon votre connexion.",
      },
      {
        stepNumber: 5,
        title: "Configurer l'EPG et profiter",
        instruction:
          "Si le guide des programmes ne s'affiche pas automatiquement, allez dans Paramètres de l'application > EPG / Guide TV. Ajoutez l'URL EPG fournie dans votre e-mail d'activation dans le champ 'EPG URL'. Sauvegardez. L'application télécharge le guide TV (environ 1 à 3 minutes) puis affiche les programmes en cours et à venir pour toutes vos chaînes.",
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
    faq: [
      {
        question: "Peut-on installer l'APK Atlas Pro ONTV directement sur une Smart TV Samsung ?",
        answer:
          "Non. Les Samsung Smart TV sous Tizen ne supportent pas les APK Android. Vous devez passer par une application IPTV compatible disponible sur le Samsung Smart Hub : IBO Player, SET IPTV ou Smart IPTV. Ces applications acceptent votre lien M3U ou vos identifiants Xtream Codes Atlas Pro.",
      },
      {
        question: "Quelle est la différence entre IBO Player et Smart IPTV sur Samsung ?",
        answer:
          "IBO Player est gratuit et inclut le guide des programmes EPG automatiquement via Xtream Codes. Smart IPTV nécessite une activation unique payante (4,99 €) mais supporte davantage de formats de playlist. Pour Atlas Pro, IBO Player est notre recommandation car il ne nécessite aucun achat supplémentaire.",
      },
      {
        question: "Comment configurer Atlas Pro sur LG Smart TV webOS ?",
        answer:
          "Ouvrez le LG Content Store, installez Smart IPTV ou IPTV Smarters Pro, puis saisissez vos identifiants Xtream Codes Atlas Pro (URL serveur + identifiant + mot de passe) dans la section connexion de l'application. Le catalogue de chaînes se charge automatiquement en quelques secondes.",
      },
      {
        question: "L'EPG (guide des programmes) fonctionne-t-il sur Smart TV avec Atlas Pro ?",
        answer:
          "Oui, le guide EPG Atlas Pro est compatible avec IBO Player, Smart IPTV et IPTV Smarters sur Samsung et LG. En mode Xtream Codes, l'EPG se charge automatiquement. En mode M3U, ajoutez l'URL EPG fournie dans votre e-mail d'activation dans les paramètres de l'application.",
      },
    ],
  },
  {
    id: "tut-fire-stick",
    slug: "installation-fire-stick",
    title: "Comment installer Atlas Pro sur Fire Stick, Chromecast et Xiaomi TV Box",
    category: "hardware",
    excerpt:
      "Installez l'APK officiel Atlas Pro ONTV sur votre Amazon Fire TV Stick, Chromecast avec Google TV ou Xiaomi TV Box S. Guide complet avec Downloader — 5 minutes et c'est prêt.",
    body: [
      "La clé Amazon Fire TV Stick est l'un des appareils les plus utilisés pour regarder Atlas Pro en France. Compact, discret et puissant, le Fire Stick tourne sous Fire OS, une version modifiée d'Android. Il supporte nativement l'installation d'applications en dehors de l'Amazon Appstore (sideloading APK), ce qui le rend parfaitement adapté à l'installation de l'application Atlas Pro ONTV.",
      "Pour installer un APK sur Fire Stick, l'outil incontournable est l'application Downloader (fond orange, icône flèche). Elle est disponible gratuitement sur l'Appstore Amazon et permet de télécharger des fichiers APK directement sur votre appareil en saisissant un code court ou une URL. Vous pouvez aussi utiliser ES File Explorer si Downloader n'est pas disponible dans votre région.",
      "La Xiaomi TV Box S (génération 1 et 2) fonctionne sous Android TV natif certifié Google. C'est l'une des meilleures boxes du marché pour Atlas Pro : son processeur Amlogic S905X4 gère parfaitement les flux 4K HDR, le décodage HEVC matériel, et l'application Atlas Pro ONTV s'y installe exactement comme sur n'importe quelle box Android — sans aucun contournement spécifique. La seule étape supplémentaire est d'activer les sources inconnues dans les paramètres de sécurité.",
      "Le Chromecast avec Google TV (modèles HD ou 4K) est basé sur Android TV et dispose du Google Play Store. Deux options s'offrent à vous : (1) chercher un lecteur IPTV compatible Xtream Codes sur le Play Store (IPTV Smarters, TiviMate) et saisir vos identifiants Atlas Pro, ou (2) installer l'APK Atlas Pro ONTV via Downloader pour avoir l'interface native. La deuxième option est recommandée pour une expérience optimale et un zapping plus rapide.",
      "Quelle que soit la méthode, votre code d'activation Atlas Pro à 12 chiffres est nécessaire pour se connecter. Si vous avez pris une formule Xtream Codes (URL + identifiant + mot de passe), vous pouvez utiliser n'importe quel lecteur IPTV compatible. Si vous avez un code d'activation direct Atlas Pro ONTV, vous devez utiliser spécifiquement l'application Atlas Pro ONTV.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Installer Downloader depuis l'Appstore Amazon (Fire Stick & Chromecast)",
        instruction:
          "Sur votre Fire Stick : depuis l'écran d'accueil, appuyez sur le bouton de recherche (loupe) et tapez 'Downloader'. Sélectionnez l'application à fond orange et installez-la. Sur Chromecast Google TV : ouvrez le Google Play Store, cherchez 'Downloader' et installez-la. Sur Xiaomi TV Box S : l'application Downloader est disponible sur le Play Store ou utilisez le Gestionnaire de fichiers préinstallé.",
      },
      {
        stepNumber: 2,
        title: "Activer les sources inconnues pour Downloader",
        instruction:
          "Fire Stick : allez dans Paramètres > Ma Fire TV > Options pour les développeurs. Activez 'Applications de sources inconnues' et spécifiquement pour 'Downloader'. Xiaomi TV Box S : Paramètres > Sécurité et confidentialité > Sources inconnues > Activer. Chromecast Google TV : Paramètres > Système > À propos > Build > cliquez 7 fois pour activer le mode développeur, puis Paramètres système > Options développeur > Sources inconnues.",
      },
      {
        stepNumber: 3,
        title: "Télécharger l'APK Atlas Pro ONTV v4.5 via Downloader",
        instruction:
          "Ouvrez Downloader. Dans le champ URL, saisissez le code numérique court fourni par notre équipe lors de votre commande, ou l'URL directe du fichier APK. Appuyez sur 'Go'. Le téléchargement commence immédiatement. La taille du fichier APK Atlas Pro ONTV v4.5 est d'environ 45 Mo — comptez 30 secondes à 60 secondes selon votre débit.",
      },
      {
        stepNumber: 4,
        title: "Installer l'APK et configurer l'application",
        instruction:
          "Une fois le téléchargement terminé, Downloader vous propose automatiquement d'installer le fichier. Appuyez sur 'Installer'. L'installation prend 10 à 20 secondes. Une fois terminé, appuyez sur 'Ouvrir'. L'application Atlas Pro ONTV se lance. Saisissez votre code d'activation à 12 chiffres ou vos identifiants Xtream Codes reçus par e-mail.",
      },
      {
        stepNumber: 5,
        title: "Xiaomi TV Box S : activer la lecture matérielle 4K",
        instruction:
          "Sur Xiaomi TV Box S, pour profiter des flux 4K HDR sans compression, ouvrez Atlas Pro ONTV, allez dans Paramètres > Lecteur vidéo et sélectionnez 'Décodage matériel' (Hardware Decoding). Réglez le tampon vidéo sur 3 secondes. Cette configuration élimine les ralentissements sur les flux 4K HEVC.",
      },
      {
        stepNumber: 6,
        title: "Chromecast : alternative via TiviMate sur Play Store",
        instruction:
          "Si vous préférez éviter le sideloading APK, installez TiviMate IPTV Player depuis le Google Play Store sur votre Chromecast Google TV. C'est l'un des meilleurs lecteurs IPTV pour Android TV. Saisissez vos identifiants Xtream Codes Atlas Pro (URL + identifiant + mot de passe) dans les paramètres de TiviMate. L'interface est soignée et le zapping très fluide.",
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
    faq: [
      {
        question: "Peut-on installer Atlas Pro ONTV sur Fire TV Stick sans ordinateur ?",
        answer:
          "Oui, complètement. Grâce à l'application Downloader disponible sur l'Appstore Amazon, vous téléchargez et installez l'APK Atlas Pro ONTV directement depuis votre télécommande Fire Stick, sans ordinateur ni clé USB. Comptez 5 minutes au total.",
      },
      {
        question: "Atlas Pro ONTV est-il compatible avec le Fire Stick 4K Max ?",
        answer:
          "Oui. Atlas Pro ONTV v4.5 est compatible avec tous les modèles Fire Stick : Fire Stick Lite, Fire Stick HD, Fire Stick 4K et Fire Stick 4K Max. Sur les modèles 4K et 4K Max, les flux Ultra HD sont diffusés avec décodage matériel HDR10+.",
      },
      {
        question: "Comment utiliser Atlas Pro sur Xiaomi TV Box S sans sideloading ?",
        answer:
          "Si vous ne souhaitez pas installer d'APK, installez TiviMate IPTV Player depuis le Google Play Store sur votre Xiaomi TV Box S. Saisissez ensuite vos identifiants Xtream Codes Atlas Pro (URL + identifiant + mot de passe reçus par e-mail). Vous aurez accès à toutes vos chaînes sans manipulation technique.",
      },
    ],
  },
  {
    id: "tut-recuperer-code",
    slug: "recuperer-identifiant-code",
    title: "Comment retrouver, entrer et changer le code Atlas Pro ONTV",
    category: "account",
    excerpt:
      "Code Atlas Pro perdu, expiré ou à saisir dans l'application pour la première fois ? Ce guide répond aux trois questions les plus posées sur les identifiants Atlas Pro ONTV, avec des instructions précises étape par étape.",
    body: [
      "Votre accès Atlas Pro repose sur un code d'activation ou des identifiants Xtream Codes (URL serveur + nom d'utilisateur + mot de passe). Ces informations vous sont envoyées par e-mail dans les 15 minutes qui suivent votre commande. Si vous ne les trouvez pas, commencez toujours par vérifier vos dossiers Spams et Promotions — les e-mails de livraison de codes IPTV sont parfois mal classés par Gmail et Outlook.",
      "Il existe deux formats d'accès Atlas Pro selon votre abonnement. Le format Code direct à 12 chiffres : vous saisissez ce code dans l'application Atlas Pro ONTV dans la section 'Se connecter avec un code'. Le format Xtream Codes : vous disposez d'une URL de serveur, d'un nom d'utilisateur et d'un mot de passe à saisir dans la section 'Connexion Xtream Codes API'. Les deux formats donnent accès au même catalogue de chaînes — le format Xtream Codes est plus flexible car il fonctionne aussi dans TiviMate, IPTV Smarters et d'autres lecteurs tiers.",
      "Pour entrer le code dans Atlas Pro ONTV : ouvrez l'application, sur l'écran d'accueil appuyez sur 'Se connecter'. Si votre application vous propose deux options ('Code' et 'Xtream Codes'), choisissez celle correspondant à votre format de livraison. Saisissez votre code à 12 chiffres exactement comme reçu, sans espace, sans point, sans tiret. Si l'application accepte le code, votre liste de chaînes commence à se charger en quelques secondes.",
      "Pour changer le code sur Atlas Pro ONTV — après un renouvellement par exemple : allez dans Paramètres > Compte > Déconnexion. L'application revient à l'écran de connexion. Saisissez votre nouveau code. Vos favoris et listes personnalisés sont sauvegardés sur le serveur et réapparaîtront automatiquement après reconnexion. Aucune réinstallation de l'application n'est jamais nécessaire.",
      "Si votre code est refusé par l'application (message 'Code invalide' ou 'Échec de l'authentification'), vérifiez deux points : (1) votre date d'expiration dans Paramètres > Compte — si elle est dépassée, le serveur rejette toute tentative de connexion ; (2) l'exactitude du code saisi — un chiffre mal lu suffit à provoquer une erreur. En cas de doute, copiez-collez le code depuis votre e-mail plutôt que de le recopier manuellement.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Retrouver l'e-mail de livraison de votre code",
        instruction:
          "Cherchez dans votre boîte mail un e-mail expédié par notre service (expéditeur : noreply@atlasproibofficiel.com) le jour de votre achat. L'objet contient 'code Atlas Pro', 'identifiants IPTV' ou 'votre commande'. Vérifiez absolument les dossiers Spams, Promotions et Mises à jour. Si vous ne trouvez pas l'e-mail, contactez notre support WhatsApp en indiquant votre numéro de commande ou votre adresse e-mail d'achat.",
      },
      {
        stepNumber: 2,
        title: "Vérifier la date d'expiration de votre code",
        instruction:
          "Ouvrez l'application Atlas Pro ONTV et allez dans Paramètres > Compte. La date d'expiration de votre abonnement est indiquée. Si elle est dépassée, le serveur rejette automatiquement votre code même s'il est correct. Commandez un renouvellement sur notre site : votre code est réactivé à distance en moins de 15 minutes, sans aucune manipulation.",
      },
      {
        stepNumber: 3,
        title: "Entrer le code dans Atlas Pro ONTV",
        instruction:
          "Ouvrez Atlas Pro ONTV. Sur l'écran de connexion, sélectionnez 'Se connecter avec un code' si vous avez un code à 12 chiffres, ou 'Connexion Xtream Codes API' si vous avez reçu une URL + identifiant + mot de passe. Saisissez vos informations sans espace ni caractère supplémentaire. Si vous avez du mal à saisir via la télécommande, utilisez un clavier Bluetooth couplé à votre téléviseur.",
      },
      {
        stepNumber: 4,
        title: "Changer le code après un renouvellement",
        instruction:
          "Allez dans Paramètres > Compte > Déconnexion. L'application revient à l'écran d'accueil. Saisissez votre nouveau code reçu après renouvellement. Vos favoris et votre configuration sont conservés automatiquement. N'installez pas une nouvelle version de l'application : l'ancienne version continuera de fonctionner parfaitement avec le nouveau code.",
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
    faq: [
      {
        question: "Comment retrouver son code Atlas Pro perdu ?",
        answer:
          "Cherchez dans votre boîte e-mail (y compris Spams et Promotions) un message envoyé par notre service le jour de votre commande. L'objet contient 'code Atlas Pro' ou 'identifiants IPTV'. Si l'e-mail est introuvable, contactez notre support WhatsApp avec votre adresse e-mail d'achat — nous réenvoyons vos identifiants en quelques minutes.",
      },
      {
        question: "Comment entrer le code Atlas Pro dans l'application ?",
        answer:
          "Ouvrez Atlas Pro ONTV > Écran de connexion > 'Se connecter avec un code'. Saisissez votre code à 12 chiffres exactement comme reçu dans votre e-mail, sans espace. Si l'application utilise Xtream Codes, saisissez l'URL du serveur, votre nom d'utilisateur et votre mot de passe dans les champs correspondants.",
      },
      {
        question: "Comment changer le code sur Atlas Pro ONTV après un renouvellement ?",
        answer:
          "Dans l'application : Paramètres > Compte > Déconnexion. L'application revient à l'écran de connexion. Saisissez votre nouveau code. Vos favoris et listes personnalisées sont préservés automatiquement.",
      },
      {
        question: "Mon code Atlas Pro affiche 'code invalide', que faire ?",
        answer:
          "Vérifiez deux choses : (1) la date d'expiration dans Paramètres > Compte — un code expiré est refusé même s'il est exact ; (2) l'exactitude du code saisi — un chiffre manquant ou erroné provoque ce message. Copiez-collez le code depuis votre e-mail plutôt que de le retaper manuellement.",
      },
    ],
  },
  {
    id: "tut-resoudre-buffering",
    slug: "resoudre-buffering-coupures",
    title: "Comment résoudre les coupures et le buffering sur Atlas Pro",
    category: "troubleshooting",
    excerpt:
      "Votre flux Atlas Pro se fige, ralentit ou produit des saccades ? Ce guide identifie les vraies causes du buffering IPTV et vous donne 5 réglages concrets pour retrouver une diffusion parfaitement fluide, même pendant les matches en direct.",
    body: [
      "Le buffering sur les services IPTV comme Atlas Pro est rarement causé par une mauvaise qualité du service lui-même. Dans la grande majorité des cas, il s'agit d'un problème réseau ou de configuration de votre appareil. Comprendre la cause exacte vous permet d'appliquer le bon correctif du premier coup.",
      "La cause numéro un : la connexion Wi-Fi instable. Le Wi-Fi est soumis à des interférences radio (micro-ondes, voisins, murs en béton) et à des variations de débit. Pour les flux 4K, un débit stable de 25 Mbps minimum est requis en continu. Or, un Wi-Fi à 5 GHz peut descendre à 10 Mbps en cas d'interférence. La solution la plus rapide et la plus efficace : relier votre téléviseur ou votre boîtier par câble Ethernet directement à votre box. Le débit devient immédiatement stable et constant.",
      "La deuxième cause fréquente : le bridage opérateur (traffic shaping). Certains FAI français (Orange, SFR, Free) ralentissent volontairement les flux vidéo en streaming aux heures de pointe (18h-23h) pour réduire leur charge réseau. Ce phénomène est invisible dans un test de débit classique (Fast.com ou Speedtest) car ces tests ne simulent pas les flux UDP multi-streams. La preuve est simple : si votre Atlas Pro fonctionne parfaitement en dehors des heures de pointe mais bégaie le soir, votre FAI bride. Solution : un VPN (ExpressVPN, NordVPN, Mullvad) chiffre votre trafic et empêche votre FAI de l'identifier comme du streaming IPTV.",
      "La troisième cause : le tampon vidéo (buffer) trop faible. L'application Atlas Pro ONTV propose un réglage du tampon vidéo dans ses paramètres de lecteur. Un tampon trop petit (0 ou 1 seconde) provoque des freezes au moindre micro-saut de débit. Augmentez-le à 3 ou 5 secondes : l'application pré-télécharge 3 ou 5 secondes de flux en avance, ce qui absorbe les variations momentanées de débit sans interruption visible.",
      "La quatrième cause : la saturation de la mémoire vive (RAM) de votre appareil. Les boîtiers Android TV d'entrée de gamme (2 Go de RAM) peuvent accumuler des processus en arrière-plan qui empiètent sur les ressources disponibles pour Atlas Pro. Redémarrez votre boîtier ou téléviseur complètement (débranchement électrique) avant de lancer le visionnage, et fermez toutes les autres applications ouvertes.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Passer en connexion Ethernet filaire",
        instruction:
          "C'est la solution la plus efficace contre le buffering. Reliez votre Smart TV, boîtier Android ou Fire Stick (via adaptateur USB-C Ethernet) directement à votre box internet par un câble Ethernet. Le débit passe de variable (Wi-Fi) à constant (Ethernet), ce qui élimine les micro-coupures à l'origine de 70 % des cas de buffering. Si votre téléviseur est éloigné de votre box, un adaptateur CPL (courant porteur en ligne) acheminé via votre installation électrique est une excellente alternative.",
      },
      {
        stepNumber: 2,
        title: "Augmenter le tampon vidéo dans Atlas Pro ONTV",
        instruction:
          "Ouvrez Atlas Pro ONTV > Paramètres > Lecteur vidéo. Passez le lecteur sur 'Décodage matériel' (Hardware Decoding) pour réduire la charge CPU. Augmentez ensuite le 'Tampon vidéo' (étiqueté 'Buffer size' ou 'Cache') à 3 secondes minimum, 5 secondes pour les flux 4K. Ces réglages permettent à l'application de gérer les variations de débit sans interruption visible.",
      },
      {
        stepNumber: 3,
        title: "Vérifier et changer les DNS (contournement du bridage FAI)",
        instruction:
          "Allez dans les paramètres réseau de votre Smart TV ou boîtier. Configurez les DNS sur 1.1.1.1 (Cloudflare) et 1.0.0.1 en secondaire. Un changement de DNS réduit parfois les latences sur les requêtes de flux IPTV et contourne certains filtres opérateurs. Si le problème persiste aux heures de pointe, l'utilisation d'un VPN sur votre box ou TV est nécessaire.",
      },
      {
        stepNumber: 4,
        title: "Redémarrer l'appareil et fermer les applications en arrière-plan",
        instruction:
          "Débranchez complètement votre boîtier ou téléviseur de la prise électrique pendant 30 secondes (ne faites pas un simple redémarrage logiciel). Cela vide la RAM et ferme tous les processus en arrière-plan. Après redémarrage, lancez uniquement Atlas Pro ONTV sans ouvrir d'autres applications. Cette manipulation seule résout les problèmes de buffering sur les appareils avec peu de RAM (2 Go).",
      },
      {
        stepNumber: 5,
        title: "Effectuer un test de débit et calibrer la qualité du flux",
        instruction:
          "Ouvrez le navigateur de votre Smart TV et allez sur Fast.com pour tester votre débit. Pour regarder Atlas Pro sans coupure : 8 Mbps minimum pour HD, 20 Mbps pour FHD, 30 Mbps pour 4K. Si votre débit est insuffisant, dans Atlas Pro ONTV allez dans Paramètres > Qualité de diffusion et réduisez de 4K à FHD pour les chaînes concernées. Sur Ethernet, ces débits sont facilement atteints avec une box ADSL standard.",
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
      "Éliminez les ralentissements et gels d'image sur Atlas Pro ONTV. Réglages de cache, connexion Ethernet et contournement du bridage FAI — guide complet.",
    faq: [
      {
        question: "Pourquoi Atlas Pro fait-il des coupures uniquement le soir ?",
        answer:
          "Si votre Atlas Pro est fluide en journée mais coupe le soir (entre 18h et 23h), votre FAI brige très probablement les flux IPTV aux heures de pointe. Testez en activant le partage de connexion 4G de votre smartphone : si les coupures disparaissent, c'est bien votre FAI qui est responsable. Solution : un VPN sur votre téléviseur ou box chiffre le trafic et contourne le bridage.",
      },
      {
        question: "Quel débit internet minimum pour regarder Atlas Pro en 4K ?",
        answer:
          "Pour les flux 4K HDR Atlas Pro, prévoyez 25 à 30 Mbps stables dédiés à votre téléviseur. En pratique, une connexion Fibre (100 Mbps+) en Ethernet ne posera jamais de problème. En ADSL, réduisez la qualité de lecture à FHD (1080p) dans les paramètres d'Atlas Pro ONTV.",
      },
      {
        question: "Le tampon vidéo dans Atlas Pro ONTV : quelle valeur recommander ?",
        answer:
          "Réglez le tampon à 3 secondes pour les connexions stables (Ethernet Fibre), et à 5 secondes si vous êtes en Wi-Fi ou si des coupures subsistent malgré un bon débit. Au-delà de 5 secondes, le délai de démarrage des chaînes s'allonge sans bénéfice supplémentaire en termes de fluidité.",
      },
    ],
  },
  {
    id: "tut-lg-smart-tv",
    slug: "installation-smart-tv-lg",
    title: "Comment installer Atlas Pro sur LG Smart TV (webOS) : Guide Complet",
    category: "hardware",
    excerpt:
      "Guide complet et détaillé pour configurer Atlas Pro ONTV sur votre LG Smart TV sous webOS via Smart IPTV ou IBO Player. Connexion Xtream Codes, configuration EPG, compatibilité selon modèle — tout est expliqué.",
    body: [
      "Les téléviseurs LG Smart TV fonctionnent sous webOS, le système d'exploitation propriétaire de LG. Contrairement aux boxes Android TV, webOS ne permet pas d'installer des fichiers APK. Il est donc impossible d'utiliser directement l'application Atlas Pro ONTV native sur un LG Smart TV. En revanche, plusieurs lecteurs IPTV de qualité sont disponibles sur le LG Content Store et permettent d'accéder à votre abonnement Atlas Pro avec toutes ses fonctionnalités : catalogue complet, guide EPG, favoris et relecture 7 jours.",
      "Les trois applications recommandées pour Atlas Pro sur LG webOS sont : Smart IPTV (SIPTV), IBO Player, et IPTV Smarters Pro. Smart IPTV est la plus utilisée sur LG en France : son interface est épurée, elle charge très rapidement et le guide des programmes EPG s'intègre nativement. Son seul inconvénient est une activation unique payante d'environ 5,49 € après 7 jours d'essai. IBO Player est une alternative gratuite et très performante, disponible sur webOS 4.0 et versions supérieures. IPTV Smarters Pro est recommandé pour les utilisateurs qui souhaitent gérer plusieurs abonnements IPTV depuis la même application.",
      "Pour se connecter à Atlas Pro depuis n'importe laquelle de ces applications, vous utiliserez vos identifiants Xtream Codes. Lors de votre commande, notre équipe vous transmet par e-mail trois informations : l'URL du serveur Atlas Pro, votre nom d'utilisateur et votre mot de passe. Ces trois éléments constituent votre connexion Xtream Codes. Vous pouvez également utiliser le lien M3U fourni dans le même e-mail, mais la connexion Xtream Codes est recommandée car elle met à jour automatiquement votre liste de chaînes et votre guide EPG sans intervention manuelle.",
      "La configuration du guide des programmes (EPG) est souvent négligée, mais elle transforme l'expérience de visionnage. L'EPG permet d'afficher les programmes TV en cours et les prochaines émissions directement dans l'interface de l'application, comme sur un décodeur TNT ou satellite. Sur Smart IPTV et IBO Player, l'EPG Atlas Pro se charge automatiquement en mode Xtream Codes. En mode M3U, vous devez coller l'URL EPG fournie dans votre e-mail dans le champ dédié des paramètres de l'application. Le guide se met à jour toutes les 24 heures.",
      "Compatibilité selon version webOS : Smart IPTV fonctionne sur les LG avec webOS 2.0 et versions supérieures (téléviseurs LG à partir de 2015). IBO Player nécessite webOS 4.0 ou supérieur (LG à partir de 2019). Si votre téléviseur est un modèle LG antérieur à 2015, contactez notre support — nous pourrons vous indiquer si une solution alternative est envisageable. Pour connaître votre version webOS : Paramètres > Support > Informations sur le téléviseur.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Ouvrir le LG Content Store",
        instruction:
          "Depuis l'écran d'accueil de votre LG Smart TV, appuyez sur le bouton Home de votre télécommande Magic Remote LG. Dans le menu horizontal qui s'affiche, recherchez l'icône 'LG Content Store' (sac de shopping) et appuyez dessus. Si vous ne la voyez pas directement, allez dans 'Apps' ou 'Applications'. Assurez-vous que votre téléviseur est bien connecté à Internet avant d'ouvrir le Content Store.",
      },
      {
        stepNumber: 2,
        title: "Installer Smart IPTV ou IBO Player",
        instruction:
          "Dans le Content Store, utilisez la barre de recherche en haut et tapez 'Smart IPTV' pour trouver l'application SIPTV. Appuyez sur Installer. Si Smart IPTV n'est pas disponible dans votre pays ou sur votre version webOS, cherchez 'IBO Player' à la place. L'installation prend 20 à 60 secondes. Une fois terminée, l'application apparaît dans la liste de vos applications LG.",
      },
      {
        stepNumber: 3,
        title: "Ouvrir l'application et noter l'adresse MAC",
        instruction:
          "Lancez Smart IPTV ou IBO Player depuis votre liste d'applications. L'écran d'accueil affiche votre adresse MAC LG au format 00:1A:79:XX:XX:XX. Cette adresse MAC est l'identifiant unique de votre téléviseur. Photographiez l'écran ou notez l'adresse MAC avec précision — elle est indispensable si vous optez pour l'activation MAC plutôt que la connexion Xtream Codes directe.",
      },
      {
        stepNumber: 4,
        title: "Saisir vos identifiants Atlas Pro via Xtream Codes",
        instruction:
          "Dans Smart IPTV : allez dans les Paramètres de l'application > Listes de lecture > Ajouter. Sélectionnez 'Connexion Xtream Codes'. Entrez l'URL du serveur Atlas Pro (format http://...), votre nom d'utilisateur et votre mot de passe tels que reçus dans votre e-mail de commande. Validez. Dans IBO Player : allez dans Paramètres > Activation > Xtream Codes, et saisissez les mêmes informations. Votre catalogue de plus de 10 000 chaînes commence à se charger dans les 10 à 30 secondes qui suivent.",
      },
      {
        stepNumber: 5,
        title: "Activer le guide des programmes EPG",
        instruction:
          "Dans Smart IPTV : Paramètres > EPG > Ajouter une URL EPG. Collez l'URL EPG fournie dans votre e-mail d'activation et appuyez sur Enregistrer. Dans IBO Player : Paramètres > Guide TV > URL EPG. Le guide se télécharge (environ 1 à 3 minutes selon votre connexion) puis affiche les programmes en cours et à venir pour chaque chaîne. Il se met à jour automatiquement chaque nuit sans intervention.",
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
    faq: [
      {
        question: "Peut-on installer l'APK Atlas Pro ONTV sur un LG Smart TV ?",
        answer:
          "Non. Les téléviseurs LG sous webOS ne supportent pas les APK Android. Vous devez utiliser une application IPTV compatible disponible sur le LG Content Store : Smart IPTV (SIPTV), IBO Player ou IPTV Smarters Pro. Ces applications acceptent vos identifiants Xtream Codes Atlas Pro et donnent accès à l'intégralité du catalogue.",
      },
      {
        question: "Smart IPTV est-il gratuit sur LG Smart TV ?",
        answer:
          "Smart IPTV propose 7 jours d'essai gratuit. Au-delà, une activation unique est requise (environ 5,49 €). C'est un paiement unique, pas un abonnement. IBO Player est entièrement gratuit et disponible sur les LG avec webOS 4.0+ (modèles 2019 et plus récents).",
      },
      {
        question: "Comment trouver la version webOS de mon LG pour vérifier la compatibilité ?",
        answer:
          "Sur votre LG Smart TV : allez dans Paramètres (icône engrenage) > Support > Informations sur le téléviseur > Version logicielle. La version webOS est indiquée. Les modèles LG 2015-2018 tournent sur webOS 2.0 à 3.5, compatibles avec Smart IPTV. Les modèles 2019 et plus récents (webOS 4.0+) supportent également IBO Player.",
      },
      {
        question: "L'EPG Atlas Pro fonctionne-t-il sur LG Smart TV ?",
        answer:
          "Oui. En mode connexion Xtream Codes, l'EPG Atlas Pro se charge automatiquement dans Smart IPTV et IBO Player. En mode M3U, ajoutez l'URL EPG fournie dans votre e-mail d'activation dans les paramètres EPG de l'application. Le guide TV se met à jour toutes les 24 heures et affiche les programmes jusqu'à 7 jours à l'avance pour les chaînes principales.",
      },
    ],
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
