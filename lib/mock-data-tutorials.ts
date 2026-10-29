import { TROUBLESHOOTING_TUTORIALS } from "./mock-data-tutorials-depannage";
import { DEVICE_TUTORIALS } from "./mock-data-tutorials-devices";

export interface TutorialStep {
  stepNumber: number;
  title: string;
  instruction: string;
  tip?: string;
  image?: {
    url?: string;
    alt: string;
    caption: string;
    placeholderLabel: string;
  };
}

export interface TutorialSectionH3 {
  id: string;
  title: string;
  content: string;
  h4Tip?: string;
}

export interface TutorialTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface TutorialCallout {
  type: "warning" | "info" | "tip";
  title: string;
  text: string;
  link?: { label: string; url: string };
}

export interface TutorialSection {
  id: string;
  h2: string;
  intro?: string;
  paragraphs?: string[];
  h3s?: TutorialSectionH3[];
  table?: TutorialTable;
  callout?: TutorialCallout;
}

export interface TutorialTocItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface TutorialCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  fullIntro: string;
  directAnswer: string;
  keyTakeaways: string[];
  relatedTags: string[];
  faq: Array<{ question: string; answer: string }>;
}

export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  category: "installation" | "troubleshooting" | "optimization" | "account" | "comparisons";
  categoryLabel: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
  wordCount: number;
  publishedAt: string;
  updatedAt: string;
  author: {
    name: string;
    role: string;
  };
  mainImage: {
    url: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
  directAnswer: string;
  keyTakeaways: string[];
  tableOfContents: TutorialTocItem[];
  body: string[];
  sections: TutorialSection[];
  steps: TutorialStep[];
  advancedTips?: Array<{
    title: string;
    description: string;
    codeOrParam?: string;
  }>;
  showExpiredAlert: boolean;
  relatedTutorialSlugs: string[];
  seoTitle: string;
  seoDescription: string;
  faq?: Array<{ question: string; answer: string }>;
}

export const TUTORIAL_CATEGORIES: TutorialCategory[] = [
  {
    id: "all",
    slug: "tous",
    name: "Tous les guides",
    description: "Tous nos guides officiels et tutoriels techniques Atlas Pro",
    h1: "Tous les Guides et Tutoriels Officiels Atlas Pro",
    seoTitle: "Tous les Guides & Tutoriels Atlas Pro | Support IPTV Officiel",
    seoDescription: "Tous les manuels d'installation et guides de dépannage officiels Atlas Pro pour Smart TV, Fire Stick, Android et iOS.",
    fullIntro: "Retrouvez l'intégralité de nos tutoriels techniques rédigés et vérifiés par l'équipe réseau Atlas Pro. Du téléchargement d'application au réglage anti-buffering, chaque procédure est documentée étape par étape.",
    directAnswer: "Pour accéder à tous les tutoriels Atlas Pro : parcourez nos guides d'installation par marque de téléviseur (Samsung, LG, Fire Stick) ou nos fiches de dépannage rapide (erreurs de connexion, code perdu, buffering 4K).",
    keyTakeaways: [
      "Plus de 6 guides exhaustifs et vérifiés pour l'année 2026.",
      "Procédures compatibles avec 100 % des Smart TV et boîtiers du marché.",
      "Assistance technique disponible 7j/7 par ticket et messagerie."
    ],
    relatedTags: ["Samsung", "LG webOS", "Fire TV Stick", "Downloader", "Erreur Serveur"],
    faq: [
      {
        question: "Quel est le premier guide à consulter après commande ?",
        answer: "Consultez d'abord le guide d'installation correspondant à votre équipement (Samsung, LG ou Fire Stick) ou notre fiche pour retrouver et entrer votre code d'activation à 12 chiffres."
      }
    ]
  },
  {
    id: "installation",
    slug: "installation-configuration-tv",
    name: "Installation & Configuration TV",
    description: "Guides pas à pas pour Smart TV Samsung, LG webOS, Fire Stick et boîtiers Android",
    h1: "Tutoriels d'Installation Atlas Pro sur Smart TV & Boîtiers",
    seoTitle: "Comment Installer Atlas Pro sur TV | Guides Officiels",
    seoDescription: "Guides pas à pas pour installer et configurer Atlas Pro sur Samsung Smart TV, LG webOS, Fire Stick 4K et boîtiers Android TV. Configuration en 5 minutes.",
    fullIntro: "Vous venez de souscrire à votre abonnement Atlas Pro et vous souhaitez en profiter sur votre grand écran ? Cette catégorie regroupe tous nos manuels détaillés pour installer l'application officielle Atlas Pro ONTV ou un lecteur certifié (IBO Player, Smart IPTV) selon la marque de votre équipement.",
    directAnswer: "Pour installer Atlas Pro sur un téléviseur : utilisez l'application Downloader (code officiel 822648) sur Fire Stick et Android TV, ou téléchargez IBO Player depuis le store officiel Samsung Smart Hub ou LG Content Store. L'activation prend moins de 5 minutes avec vos identifiants Xtream Codes ou code à 12 chiffres.",
    keyTakeaways: [
      "Les Smart TV Samsung (Tizen) et LG (webOS) requièrent un lecteur certifié comme IBO Player.",
      "L'Amazon Fire TV Stick permet l'installation directe de l'APK officiel Atlas Pro ONTV via le code Downloader 822648.",
      "Le raccordement par câble Ethernet garantit une stabilité 4K sans fluctuation de signal.",
      "L'activation s'effectue en moins de 5 minutes sans matériel informatique supplémentaire."
    ],
    relatedTags: ["Samsung", "LG webOS", "Fire TV Stick", "Downloader", "IBO Player", "Smart IPTV"],
    faq: [
      {
        question: "Peut-on installer Atlas Pro sur n'importe quel téléviseur ?",
        answer: "Oui. Si votre téléviseur est connecté à internet (Smart TV Samsung, LG, Android TV) ou s'il est équipé d'une clé HDMI (Fire TV Stick, Chromecast, Xiaomi TV Box), vous pouvez installer et regarder vos chaînes 4K."
      },
      {
        question: "Faut-il payer pour installer IBO Player sur Samsung ou LG ?",
        answer: "IBO Player propose un essai gratuit de 7 jours, puis requiert une activation unique à vie d'environ 8€ demandée par l'éditeur de l'application."
      }
    ]
  },
  {
    id: "troubleshooting",
    slug: "depannage-erreurs-serveur",
    name: "Dépannage & Erreurs Serveur",
    description: "Résolution des erreurs de connexion, écran noir, blocages FAI et réglage DNS",
    h1: "Dépannage Atlas Pro : Résoudre les Erreurs Serveur & Connexion",
    seoTitle: "Dépannage Atlas Pro : Solutions Erreur Serveur & Connexion",
    seoDescription: "Résolvez les erreurs de connexion au serveur Atlas Pro, écrans noirs, blocages FAI et problèmes de chargement. Solutions techniques vérifiées par nos experts.",
    fullIntro: "Un message 'Atlas Pro ne peut pas se connecter au serveur', une boucle de chargement ou un code d'erreur inattendu ? Nos experts réseau ont diagnostiqué et résolu chaque situation pour vous permettre de rétablir vos flux sans délai.",
    directAnswer: "Pour dépanner une erreur serveur sur Atlas Pro : remplacez vos serveurs DNS par ceux de Cloudflare (1.1.1.1 et 1.0.0.1) dans les réglages de votre TV pour débloquer le filtrage opérateur. Videz ensuite le cache de l'application et redémarrez votre box internet pendant 30 secondes.",
    keyTakeaways: [
      "92 % des erreurs serveur en soirée sont causées par le filtrage DNS de votre fournisseur d'accès internet.",
      "Le passage aux DNS neutres Cloudflare 1.1.1.1 contourne instantanément les blocages FAI.",
      "Le vidage du cache applicatif élimine les métadonnées de flux corrompues.",
      "Un code d'abonnement expiré produit un message d'échec serveur identique."
    ],
    relatedTags: ["Erreur Serveur", "DNS Cloudflare", "Dépannage", "Cache", "Blocage FAI"],
    faq: [
      {
        question: "Les serveurs Atlas Pro sont-ils souvent en panne ?",
        answer: "Non. Notre infrastructure dispose de serveurs miroirs redondants répartis en Europe garantissant une disponibilité de 99,8 %."
      },
      {
        question: "Pourquoi la connexion échoue-t-elle le soir et fonctionne le matin ?",
        answer: "Les fournisseurs d'accès internet régulent le trafic vidéo UDP aux heures de forte consommation (18h-23h). Changer vos DNS pour Cloudflare résout ce problème."
      }
    ]
  },
  {
    id: "optimization",
    slug: "optimisation-4k-fluidite",
    name: "Optimisation 4K & Fluidité",
    description: "Suppression du buffering, réglage de mémoire tampon et décodage matériel",
    h1: "Optimisation 4K & Anti-Buffering Atlas Pro : Guides de Fluidité",
    seoTitle: "Optimiser Atlas Pro 4K : Supprimer Coupures & Buffering",
    seoDescription: "Supprimez définitivement les coupures et le buffering sur Atlas Pro. Réglage de la mémoire tampon (buffer), décodage matériel HW+ et DNS rapides.",
    fullIntro: "Profitez de la véritable puissance des flux 4K UHD 60fps sans aucun temps d'arrêt. Découvrez les réglages avancés de mémoire tampon, d'accélération matérielle graphique et d'infrastructure réseau locale.",
    directAnswer: "Pour supprimer le buffering sur Atlas Pro : passez votre connexion en câble Ethernet direct RJ45, augmentez la mémoire tampon (buffer) à 3 ou 5 secondes dans les paramètres du lecteur et activez le décodeur Hardware HW+.",
    keyTakeaways: [
      "Le Wi-Fi 2.4 GHz domestique génère des micro-pertes de paquets fatales au streaming direct 4K.",
      "Un buffer réglé à 3-5 secondes absorbe les micro-variations de débit sans coupure apparente.",
      "Le décodage matériel HW+ soulage le processeur principal et prévient la surchauffe de l'appareil.",
      "Un débit stable de 25 Mbps est optimal pour visionner les flux 4K HDR."
    ],
    relatedTags: ["Buffering", "Coupures", "Hardware Decoding", "Ethernet", "4K HDR"],
    faq: [
      {
        question: "Quel débit internet minimum faut-il pour la 4K Atlas Pro ?",
        answer: "Un débit stable de 25 Mbps est recommandé pour la 4K UHD. Pour les chaînes Full HD standard, 10 à 15 Mbps suffisent."
      },
      {
        question: "Pourquoi augmenter le buffer supprime-t-il les saccades ?",
        answer: "Le buffer pré-charge quelques secondes de flux à l'avance. Si votre connexion subit une micro-perte de 200 ms, la vidéo continue de tourner sur la mémoire tampon sans aucun freeze."
      }
    ]
  },
  {
    id: "account",
    slug: "abonnement-activation-codes",
    name: "Abonnement & Activation",
    description: "Retrouver son code, renouveler son abonnement et configurer le multi-écrans",
    h1: "Abonnement, Codes & Activation Atlas Pro : Guides du Compte",
    seoTitle: "Activer & Renouveler son Code Atlas Pro | Guide Officiel",
    seoDescription: "Comment retrouver un code perdu, entrer ses identifiants à 12 chiffres, configurer les identifiants Xtream Codes API et renouveler sans réinstaller.",
    fullIntro: "Tout ce qu'il faut savoir pour gérer votre abonnement Atlas Pro en toute sérénité : retrouver un code d'activation égaré, entrer vos accès sans erreur sur votre téléviseur et prolonger votre accès annuel.",
    directAnswer: "Pour retrouver ou renouveler votre code Atlas Pro : consultez votre boîte mail (dossier spams inclus) pour récupérer vos 12 chiffres ou contactez notre support. Pour prolonger votre abonnement, commandez un renouvellement en ligne : votre ligne est réactivée à distance sans réinstaller l'application.",
    keyTakeaways: [
      "Le code d'activation se compose de 12 chiffres uniques transmis immédiatement par e-mail après commande.",
      "Les identifiants Xtream Codes API sont également inclus pour configurer les applications tierces.",
      "Le renouvellement d'abonnement conserve l'ensemble de vos favoris et préférences sans réinstallation."
    ],
    relatedTags: ["Code d'activation", "Xtream Codes", "Renouvellement", "Compte", "Multi-écrans"],
    faq: [
      {
        question: "Comment faire si je ne retrouve pas mon code après achat ?",
        answer: "Inspectez votre dossier courrier indésirable (spam). Si le message est introuvable, ouvrez un ticket technique ou contactez notre support avec votre e-mail d'achat : nous vous renvoyons vos accès en quelques minutes."
      }
    ]
  },
  {
    id: "comparisons",
    slug: "comparatifs-alternatives-iptv",
    name: "Comparatifs & Alternatives",
    description: "Meilleures applications selon votre téléviseur et solutions de secours",
    h1: "Comparatifs & Applications Alternatives Atlas Pro",
    seoTitle: "Alternatives Atlas Pro & Comparatifs Lecteurs IPTV",
    seoDescription: "Quelle application choisir pour votre téléviseur ? Découvrez les alternatives certifiées à Atlas Pro ONTV pour Samsung, LG, iOS et box TV.",
    fullIntro: "Votre équipement ne supporte pas le fichier APK Atlas Pro ONTV ou vous cherchez un lecteur adapté à vos habitudes ? Découvrez notre comparatif des alternatives certifiées pour Samsung, LG, Apple TV et boîtiers Android.",
    directAnswer: "Si Atlas Pro ONTV n'est pas installable sur votre appareil : optez pour IBO Player sur Smart TV Samsung et LG, TiviMate sur Android TV / Nvidia Shield, ou IPTV Smarters Pro sur iPhone, iPad et Apple TV.",
    keyTakeaways: [
      "IBO Player est la meilleure alternative pour les téléviseurs Samsung Tizen et LG webOS.",
      "TiviMate offre la gestion multi-listes et l'EPG le plus ergonomique sur Android TV.",
      "Tous les lecteurs tiers se connectent directement à votre compte grâce aux identifiants Xtream Codes API fournis."
    ],
    relatedTags: ["IBO Player", "TiviMate", "IPTV Smarters", "Smart IPTV", "Alternatives"],
    faq: [
      {
        question: "Les applications alternatives offrent-elles la même qualité de flux ?",
        answer: "Oui, la qualité vidéo (4K UHD, 60fps, Dolby Audio) et le catalogue de chaînes sont rigoureusement identiques car ils proviennent des mêmes serveurs Atlas Pro."
      }
    ]
  }
];

export const POPULAR_TAGS: string[] = [
  "Samsung",
  "LG webOS",
  "Fire TV Stick",
  "Downloader",
  "Erreur Serveur",
  "DNS Cloudflare",
  "Buffering",
  "IBO Player",
  "Xtream Codes",
  "4K HDR",
  "Smart IPTV",
  "Code d'activation",
];

const BASE_TUTORIALS: Tutorial[] = [
  {
    id: "tut-connexion-serveur",
    slug: "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
    title: "Atlas Pro Ne Peut Pas Se Connecter au Serveur : 5 Solutions Immédiates",
    category: "troubleshooting",
    categoryLabel: "Dépannage & Erreurs Serveur",
    tags: ["Erreur Serveur", "DNS Cloudflare", "Dépannage", "Fire TV Stick", "Smart TV"],
    excerpt:
      "Votre application affiche 'Atlas Pro ne peut pas se connecter au serveur' ou 'Échec de connexion' ? Suivez nos 5 solutions techniques vérifiées pour rétablir vos flux 4K en moins de 3 minutes.",
    readingTime: "7 min",
    wordCount: 1480,
    publishedAt: "2024-01-15",
    updatedAt: "2026-03-20",
    author: {
      name: "Équipe Technique Atlas Pro",
      role: "Architecte Réseau & Support IPTV",
    },
    mainImage: {
      url: "/images/tutorials/atlas-pro-erreur-serveur.webp",
      alt: "Message d'erreur Atlas Pro ne peut pas se connecter au serveur résolu sur écran TV",
      caption: "Résolution pas à pas de l'erreur de connexion aux serveurs Atlas Pro.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "Pour résoudre l'erreur 'Atlas Pro ne peut pas se connecter au serveur' : basculez immédiatement les serveurs DNS de votre téléviseur ou Fire Stick vers Cloudflare (1.1.1.1 et 1.0.0.1) afin de contourner le blocage opérateur. Videz ensuite le cache de l'application et redémarrez votre box internet. Si l'erreur persiste, vérifiez la date de validité de votre code d'accès.",
    keyTakeaways: [
      "90 % des erreurs de connexion proviennent d'un filtrage DNS appliqué par les fournisseurs d'accès internet (Orange, Free, SFR, Bouygues).",
      "Le remplacement des DNS FAI par Cloudflare (1.1.1.1 / 1.0.0.1) rétablit instantanément la communication avec nos clusters.",
      "Un cache DNS corrompu dans l'application nécessite un forçage d'arrêt et un effacement du cache mémoire.",
      "Un code expiré génère le même écran d'erreur : vérifiez la validité de votre compte dans l'espace client.",
    ],
    tableOfContents: [
      { id: "causes-techniques", title: "Pourquoi Atlas Pro ne peut pas se connecter au serveur ?", level: 2 },
      { id: "solution-dns-cloudflare", title: "Solution 1 : Basculer sur les DNS Cloudflare 1.1.1.1", level: 2 },
      { id: "solution-vider-cache", title: "Solution 2 : Vider le cache de l'application", level: 2 },
      { id: "solution-connexion-ethernet", title: "Solution 3 : Éliminer les micro-coupures Wi-Fi", level: 2 },
      { id: "solution-renouvellement-code", title: "Solution 4 : Vérifier l'expiration du code", level: 2 },
      { id: "guide-etape-par-etape", title: "Marche à suivre pas à pas illustrée", level: 2 },
      { id: "reglages-avances", title: "Réglages avancés pour prévenir les déconnexions", level: 2 },
      { id: "faq", title: "Questions fréquentes", level: 2 },
    ],
    body: [
      "Le message d'erreur 'Atlas Pro ne peut pas se connecter au serveur' (ou 'Server connection failed - check your internet') est la première cause de sollicitation de notre assistance technique. Lorsque cet avertissement surgit à l'écran de votre téléviseur Samsung, LG, Android TV ou Amazon Fire TV Stick, vos chaînes et films refusent de se charger, laissant place à un écran noir ou à une boucle de chargement infinie.",
      "Rassurez-vous : cette anomalie ne signifie pas que le service Atlas Pro est hors service. Nos infrastructures disposent d'un taux de disponibilité certifié de 99,8 % grâce à des serveurs miroir redondants répartis à travers l'Europe. Dans l'immense majorité des cas, le blocage se situe entre votre box internet locale et nos passerelles de diffusion.",
    ],
    sections: [
      {
        id: "causes-techniques",
        h2: "Pourquoi Atlas Pro ne peut pas se connecter au serveur ?",
        intro:
          "Pour appliquer le bon correctif, il est primordial de comprendre les mécanismes réseau sous-jacents qui provoquent l'interruption de communication entre votre équipement et notre infrastructure :",
        callout: {
          type: "tip",
          title: "Diagnostic Réseau : Pourquoi les blocages surviennent aux heures de forte écoute",
          text: "Lors des grands événements diffusés en direct, certains fournisseurs d'accès internet appliquent un filtrage automatisé sur leurs serveurs DNS par défaut ou régulent le trafic vidéo UDP non prioritaire. Remplacer les résolveurs DNS de votre appareil par des DNS neutres et rapides comme [Cloudflare 1.1.1.1](#solution-dns-cloudflare) résout immédiatement ces interruptions sans toucher à votre installation.",
        },
        paragraphs: [
          "1. **Le filtrage et bridage DNS par votre FAI :** En France, Belgique et Suisse, les grands opérateurs télécoms appliquent des règles de filtrage automatisé sur leurs résolveurs DNS par défaut, ciblant les requêtes de streaming direct aux heures de forte consommation.",
          "2. **La saturation du cache mémoire de votre équipement :** À force d'accumuler les métadonnées des flux 4K et de la vidéothèque, le cache local de l'application [Atlas Pro ONTV](/tutoriels/installer-atlas-pro-sur-fire-stick) ou [IBO Player](/tutoriels/installer-atlas-pro-sur-tv-samsung) se corrompt et bloque les négociations TLS.",
          "3. **Une attribution d'adresse IP bloquée par le pare-feu :** Certaines box internet activent un niveau de sécurité strict qui rejette les flux de streaming UDP entrants nécessaires à la fluidité sans saccade.",
          "4. **L'expiration de votre abonnement :** Si votre accès a dépassé sa date d'échéance, nos serveurs renvoient immédiatement un statut HTTP 401 ou 403. Consultez notre guide pour [renouveler un abonnement expiré](/tutoriels/atlas-pro-code-expire-comment-renouveler) ou souscrivez un [abonnement officiel Atlas Pro 12 mois](/plans-tarifs/atlas-pro-12-mois).",
        ],
        table: {
          caption: "Matrice technique de diagnostic des erreurs de connexion Atlas Pro",
          headers: ["Code ou Message d'Erreur", "Origine Technique", "Diagnostic Immédiat", "Action Recommandée"],
          rows: [
            [
              "Server connection failed (Timeout)",
              "Délai de poignée de main TLS dépassé (> 5000 ms)",
              "Filtrage DNS de votre box internet ou micro-coupure Wi-Fi",
              "Basculez sur les [DNS Cloudflare 1.1.1.1](#solution-dns-cloudflare) et privilégiez un câble Ethernet RJ45."
            ],
            [
              "HTTP 401 Unauthorized / Code Invalide",
              "Session de streaming refusée par le cluster d'authentification",
              "Erreur de frappe dans le code à 12 chiffres ou abonnement expiré",
              "Vérifiez l'e-mail de confirmation ou suivez le guide [code invalide](/tutoriels/atlas-pro-code-invalide-que-faire)."
            ],
            [
              "HTTP 403 Forbidden / Écran Noir",
              "Blocage d'adresse IP source par filtrage dynamique opérateur",
              "Filtrage DNS opérateur actif lors des pics d'audience",
              "Activez les DNS neutres ou un protocole DNS sécurisé (DoH) dans votre lecteur."
            ],
            [
              "Boucle de chargement infinie (0 %)",
              "Corruption de la table locale des flux (cache > 500 Mo)",
              "Saturation de la mémoire tampon de votre Smart TV ou boîtier",
              "Exécutez la [procédure de vidage de cache](#solution-vider-cache) et redémarrez électriquement l'appareil."
            ]
          ]
        },
        h3s: [
          {
            id: "impact-fai",
            title: "Le rôle méconnu du bridage des ports par les fournisseurs d'accès",
            content:
              "Aux heures de pointe (entre 20h30 et 23h00), les équipements réseau de certains opérateurs brident volontairement les connexions vers les ports multimédias non prioritaires. Changer vos DNS permet de contourner les serveurs de noms de votre opérateur et de router vos requêtes directement vers des backbones internationaux à haute vitesse.",
            h4Tip: "Conseil Réseau : Si vous êtes raccordé chez un opérateur national en France, l'activation des DNS Cloudflare résout à elle seule 92 % des cas de non-connexion signalés.",
          },
        ],
      },
      {
        id: "solution-dns-cloudflare",
        h2: "Solution 1 : Basculer sur les DNS Cloudflare 1.1.1.1",
        paragraphs: [
          "Les serveurs DNS (Domain Name System) traduisent le nom de domaine de nos serveurs en adresses IP de routage. Les DNS par défaut de votre fournisseur d'accès sont lents et sujets aux blocages administratifs. La méthode la plus efficace consiste à remplacer ces DNS par ceux de Cloudflare (1.1.1.1 et 1.0.0.1) ou de Google (8.8.8.8 et 8.8.4.4).",
          "Cette manipulation s'effectue directement dans les paramètres réseau de votre téléviseur ou de votre Fire TV Stick sans avoir besoin de modifier la configuration de votre box internet globale.",
        ],
        h3s: [
          {
            id: "dns-firestick",
            title: "Configuration DNS sur Amazon Fire TV Stick",
            content:
              "Allez dans Paramètres > Réseau > sélectionnez votre réseau Wi-Fi > cliquez sur le bouton Options (3 barres) pour Oublier le réseau, puis reconnectez-vous en choisissant 'Paramètres avancés'. Entrez une adresse IP statique et indiquez DNS 1 : 1.1.1.1 et DNS 2 : 1.0.0.1.",
            h4Tip: "Alternative rapide : Téléchargez l'application officielle '1.1.1.1: Faster Internet' depuis le store d'applications pour une activation en un clic.",
          },
          {
            id: "dns-smart-tv",
            title: "Configuration DNS sur Samsung Smart TV (Tizen) & LG (webOS)",
            content:
              "Sur Samsung : Menu > Général > Réseau > État du réseau > Paramètres IP > Réglage DNS > Entrer manuellement > Tapez 1.1.1.1. Sur LG : Paramètres > Tous les paramètres > Réseau > Connexion Wi-Fi > Paramètres avancés > Modifier > Décochez 'Automatique' et tapez 1.1.1.1 dans Serveur DNS.",
          },
        ],
      },
      {
        id: "solution-vider-cache",
        h2: "Solution 2 : Vider le cache de l'application Atlas Pro",
        paragraphs: [
          "Le cache stocke temporairement les logos des chaînes, les affiches des films et les index de catégories. Lorsqu'il dépasse 500 Mo, l'application peut se bloquer lors de la phase de poignée de main (handshake) avec nos serveurs.",
          "Pour vider le cache : accédez aux Paramètres de votre Android TV ou Fire Stick > Applications > Gérer les applications installées > Sélectionnez Atlas Pro ONTV > Forcer l'arrêt > Vider le cache. Ne cliquez pas sur 'Effacer les données' sauf si vous souhaitez ressaisir votre code d'accès.",
        ],
      },
      {
        id: "solution-connexion-ethernet",
        h2: "Solution 3 : Éliminer les micro-coupures Wi-Fi",
        paragraphs: [
          "Le protocole de diffusion IPTV nécessite une liaison réseau continue sans perte de paquets. Le réseau Wi-Fi 2.4 GHz traditionnel subit de lourdes interférences avec les téléphones, micro-ondes et réseaux voisins. Raccordez votre appareil avec un câble réseau Ethernet direct RJ45 Cat 6 ou connectez-vous impérativement à la bande Wi-Fi 5 GHz de votre box.",
        ],
      },
      {
        id: "solution-renouvellement-code",
        h2: "Solution 4 : Vérifier l'expiration du code d'activation",
        paragraphs: [
          "Lorsque votre abonnement arrive à son terme, les serveurs bloquent la session de diffusion. L'application Atlas Pro ONTV affiche alors un écran de connexion serveur en échec. Vérifiez la date d'échéance inscrite dans l'e-mail de confirmation reçu lors de votre souscription ou contactez notre support.",
          "Si votre code est expiré ou si votre ligne actuelle subit des coupures récurrentes dues à un serveur saturé, vous pouvez réactiver un accès direct avec notre formule Abonnement IPTV 12 Mois Smart TV (40€). Vos nouveaux identifiants Xtream Codes vous sont transmis par e-mail en moins de 15 minutes pour rétablir vos flux 4K sans interruption.",
        ],
      },
      {
        id: "reglages-avances",
        h2: "Réglages avancés pour prévenir les déconnexions",
        paragraphs: [
          "Pour vous prémunir durablement contre toute interruption, ajustez ces deux paramètres au sein de votre lecteur :",
          "- Mémoire tampon vidéo : augmentez la taille du buffer à 3 ou 5 secondes dans Paramètres > Lecteur > Buffer Size.",
          "- Décodeur vidéo : basculez sur 'Hardware Decoding' (décodage matériel HW+) pour décharger le processeur de votre appareil.",
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Tester la connexion internet globale",
        instruction:
          "Ouvrez une autre application (YouTube ou Netflix) sur votre téléviseur pour vérifier que votre connexion internet générale fonctionne convenablement.",
        tip: "Si YouTube ne charge pas non plus, redémarrez votre box internet pendant 60 secondes.",
        image: {
          alt: "Vérification de la connexion internet sur écran Smart TV",
          caption: "Étape 1 : Validez que l'accès internet de votre équipement est pleinement opérationnel.",
          placeholderLabel: "Écran Diagnostic Réseau TV",
        },
      },
      {
        stepNumber: 2,
        title: "Changer les DNS pour Cloudflare (1.1.1.1)",
        instruction:
          "Accédez aux paramètres réseau avancés de votre appareil et modifiez le serveur DNS principal vers 1.1.1.1 et le secondaire vers 1.0.0.1.",
        tip: "Cette manipulation lève immédiatement les restrictions de filtrage imposées par votre opérateur.",
        image: {
          alt: "Configuration des serveurs DNS 1.1.1.1 dans les paramètres réseau",
          caption: "Étape 2 : Entrez manuellement les adresses DNS Cloudflare 1.1.1.1.",
          placeholderLabel: "Menu Configuration DNS Manuelle",
        },
      },
      {
        stepNumber: 3,
        title: "Forcer l'arrêt et vider le cache de l'application",
        instruction:
          "Dans Paramètres > Applications > Atlas Pro ONTV, cliquez sur 'Forcer l'arrêt' puis sur 'Vider le cache'.",
        tip: "Ne cliquez pas sur 'Effacer les données' pour conserver vos identifiants enregistrés.",
        image: {
          alt: "Menu Forcer l'arrêt et vider le cache sur Android TV",
          caption: "Étape 3 : Nettoyez les données temporaires corrompues de l'application.",
          placeholderLabel: "Paramètres Applications Android",
        },
      },
      {
        stepNumber: 4,
        title: "Redémarrer la TV et relancer Atlas Pro",
        instruction:
          "Débranchez la prise électrique de votre téléviseur pendant 30 secondes pour purger la mémoire RAM, puis relancez l'application.",
        tip: "Atlas Pro charge à nouveau le catalogue officiel en quelques secondes.",
        image: {
          alt: "Écran de chargement réussi du catalogue Atlas Pro ONTV",
          caption: "Étape 4 : Vos chaînes en direct et VOD 4K sont de nouveau accessibles.",
          placeholderLabel: "Catalogue Chaînes Restauré",
        },
      },
    ],
    advancedTips: [
      {
        title: "Port de secours Xtream Codes",
        description:
          "Si votre opérateur bloque le port standard 80 ou 8080, notre équipe peut vous communiquer une URL de secours chiffrée en HTTPS (port 443).",
        codeOrParam: "https://serveur-secours.atlaspro.tv:443",
      },
      {
        title: "Désactivation du protocole IPv6",
        description:
          "Sur certaines box récentes (Livebox 5/6, Freebox Pop), l'IPv6 peut entrer en conflit avec les passerelles IPTV. Désactiver l'IPv6 dans la console de gestion de votre box stabilise les flux.",
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "resoudre-coupure-buffering-atlas-pro",
      "retrouver-entrer-code-atlas-pro-ontv",
      "installer-atlas-pro-sur-fire-stick",
      "atlas-pro-ecran-noir-chargement-infini",
    ],
    seoTitle: "Atlas Pro Ne Peut Pas Se Connecter au Serveur : 5 Solutions",
    seoDescription:
      "Atlas Pro ne peut pas se connecter au serveur ? 5 solutions vérifiées pour Smart TV, Fire Stick et boîtier Android. Résolvez le blocage en 5 minutes.",
    faq: [
      {
        question: "Pourquoi mon application Atlas Pro indique 'Échec de connexion au serveur' uniquement le soir ?",
        answer:
          "Ce phénomène est typique du bridage d'heure de pointe appliqué par les fournisseurs d'accès internet (FAI). En soirée, l'opérateur régule le trafic vidéo UDP non prioritaire. La configuration des DNS Cloudflare (1.1.1.1) ou l'usage d'une connexion chiffrée résout ce désagrément.",
      },
      {
        question: "Faut-il désinstaller et réinstaller Atlas Pro ONTV en cas d'erreur serveur ?",
        answer:
          "Non, la désinstallation n'est presque jamais nécessaire. Un forçage de l'arrêt couplé au vidage du cache de l'application suffit à éliminer les fichiers temporaires corrompus sans perdre vos identifiants.",
      },
      {
        question: "Comment savoir si mon abonnement Atlas Pro est expiré ?",
        answer:
          "Si votre code est expiré, le serveur renvoie un code de rejet d'authentification. Vous pouvez vérifier votre statut dans Paramètres > Compte dans l'application, ou contacter notre service client avec votre e-mail d'achat.",
      },
      {
        question: "Un VPN est-il obligatoire pour faire fonctionner Atlas Pro ?",
        answer:
          "Non, nos serveurs sont optimisés pour fonctionner sans VPN dans 95 % des cas. Cependant, si votre FAI filtre agressivement les flux de streaming, un VPN de qualité (comme ExpressVPN, NordVPN ou Proton) permet de contourner complètement tout blocage.",
      },
    ],
  },
  {
    id: "tut-smart-tv-samsung",
    slug: "installer-atlas-pro-sur-tv-samsung",
    title: "Comment Installer Atlas Pro sur TV Samsung : Guide IBO Player & Smart IPTV",
    category: "installation",
    categoryLabel: "Installation & Configuration TV",
    tags: ["Samsung", "Tizen OS", "IBO Player", "Smart IPTV", "Smart TV"],
    excerpt:
      "Guide complet pour installer Atlas Pro sur Smart TV Samsung sous Tizen OS. Téléchargez IBO Player ou Smart IPTV depuis le Smart Hub officiel et configurez vos flux 4K sans clé USB.",
    readingTime: "8 min",
    wordCount: 1540,
    publishedAt: "2024-02-10",
    updatedAt: "2026-03-22",
    author: {
      name: "Équipe Technique Atlas Pro",
      role: "Architecte Réseau & Support IPTV",
    },
    mainImage: {
      url: "/images/tutorials/installer-atlas-pro-tv-samsung/maxresdefault.jpg",
      alt: "Installation d'Atlas Pro sur Smart TV Samsung via IBO Player dans le Smart Hub",
      caption: "Configuration d'Atlas Pro sur téléviseur connecté Samsung Tizen OS.",
      width: 1280,
      height: 720,
    },
    directAnswer:
      "Pour installer Atlas Pro sur une TV Samsung : ouvrez le Samsung Smart Hub, recherchez et installez l'application IBO Player (ou Smart IPTV). Lancez l'application pour relever votre adresse MAC et votre Device Key. Connectez ensuite vos identifiants Xtream Codes Atlas Pro (URL serveur, nom d'utilisateur, mot de passe) pour charger instantanément vos chaînes 4K.",
    keyTakeaways: [
      "Les téléviseurs Samsung fonctionnent sous Tizen OS : les fichiers APK Android ne peuvent pas être installés directement.",
      "IBO Player est le lecteur certifié numéro 1 sur le Samsung Smart Hub pour profiter d'Atlas Pro avec zapping instantané sous 0.3s.",
      "L'activation s'effectue avec l'adresse MAC unique et la Device Key affichées au premier lancement du lecteur.",
      "Une connexion par câble Ethernet RJ45 est vivement recommandée pour fluidifier les flux 4K UHD sans saccade.",
    ],
    tableOfContents: [
      { id: "pourquoi-pas-apk", title: "Pourquoi l'APK Atlas Pro ne s'installe pas sur Samsung ?", level: 2 },
      { id: "meilleures-applications", title: "Les meilleures applications pour Samsung Tizen", level: 2 },
      { id: "etape-par-etape-samsung", title: "Guide d'installation étape par étape sur TV Samsung", level: 2 },
      { id: "reglages-image-samsung", title: "Optimisation de l'image 4K sur écran Samsung", level: 2 },
      { id: "faq-samsung", title: "Questions fréquentes TV Samsung", level: 2 },
    ],
    body: [
      "Vous venez de recevoir votre [code IPTV Atlas Pro ONTV 12 mois](/plans-tarifs/atlas-pro-12-mois) et vous souhaitez en profiter sur votre grand écran Smart TV Samsung ? Vous avez peut-être tenté de copier un fichier APK sur une clé USB sans succès. C'est tout à fait normal : Samsung utilise son propre système d'exploitation propriétaire nommé Tizen OS, incompatible avec le format APK Android.",
      "Heureusement, il existe une solution simple, rapide et 100 % légale : installer un lecteur multimédia IPTV certifié depuis le magasin officiel Samsung Apps du Smart Hub, puis y injecter vos identifiants Atlas Pro Xtream Codes. Si vous possédez également un téléviseur LG, découvrez notre guide pour [installer Atlas Pro sur LG Smart TV](/tutoriels/installer-atlas-pro-sur-lg-smart-tv).",
    ],
    sections: [
      {
        id: "pourquoi-pas-apk",
        h2: "Pourquoi l'APK Atlas Pro ne s'installe pas sur Samsung ?",
        intro: "Les spécificités techniques de l'écosystème Samsung Tizen :",
        paragraphs: [
          "Contrairement aux téléviseurs Sony, Philips ou TCL qui fonctionnent sous Android TV ou Google TV, Samsung développe son propre environnement logiciel basé sur Linux et HTML5/JavaScript : Tizen OS. Les téléviseurs Samsung refusent systématiquement les paquets .apk, même déposés sur une clé USB formatée en FAT32.",
          "Pour profiter de la qualité Atlas Pro sur un écran Samsung, la méthode officielle et éprouvée consiste à passer par un lecteur tiers approuvé par le Samsung Apps Store. Ces lecteurs offrent une interface fluide, une compatibilité avec la télécommande Samsung One Remote et un décodage 4K natif.",
        ],
        h3s: [
          {
            id: "modeles-compatibles",
            title: "Modèles de téléviseurs Samsung compatibles",
            content:
              "Toutes les Smart TV Samsung produites depuis 2017 (séries MU, NU, RU, TU, AU, BU, CU et gammes QLED, Neo QLED, OLED, The Frame) disposent du Smart Hub et peuvent installer IBO Player sans aucune restriction matérielle.",
            h4Tip: "Vérification modèle : Allez dans Paramètres > Assistance > À propos de cette TV pour consulter l'année de fabrication de votre téléviseur.",
          },
        ],
      },
      {
        id: "meilleures-applications",
        h2: "Les meilleures applications pour Samsung Tizen",
        callout: {
          type: "tip",
          title: "Pourquoi IBO Player surpasse les autres lecteurs sur Samsung",
          text: "Sur l'écosystème Samsung Tizen, **IBO Player Pro** exploite directement l'accélération matérielle des puces vidéo Quantum Processor. Il assure un décodage 4K 60fps sans saccade et offre une intégration native avec la télécommande **Samsung One Remote** (navigation fluide avec la molette et pavé tactile).",
        },
        paragraphs: [
          "Si plusieurs lecteurs multimédias existent sur le Samsung Smart Hub, ils ne se valent pas tous en termes de performances et de stabilité avec les flux 4K :",
          "1. **IBO Player Pro (Recommandation N°1) :** L'application la plus véloce du Smart Hub. Elle gère le multi-profils, l'EPG sur 7 jours, le contrôle du direct (timeshift), les sous-titres multilingues et le choix des pistes audio en Dolby Digital.",
          "2. **Smart IPTV (SIPTV) :** L'application historique avec interface épurée. Très stable mais interface graphique plus spartiate.",
          "3. **SET IPTV & Nanomid Player :** Deux alternatives secondaires si IBO Player venait à être indisponible dans le store de votre région.",
        ],
        table: {
          caption: "Comparatif des lecteurs IPTV disponibles sur le Samsung Apps Store (Tizen OS)",
          headers: ["Lecteur Tizen", "Disponibilité Smart Hub", "Temps de Zapping", "Gestion Replay & EPG", "Tarif Éditeur", "Verdict Technique"],
          rows: [
            [
              "IBO Player Pro",
              "100 % officiel Samsung Apps",
              "Ultra-rapide (< 1,2 s)",
              "EPG 7 jours complet, Replay, audio Dolby",
              "Essai 7j puis ~8 € à vie",
              "Le choix incontournable N°1 pour toutes Smart TV Samsung."
            ],
            [
              "Smart IPTV (SIPTV)",
              "Disponible selon modèles",
              "Standard (< 2,0 s)",
              "Grille basique avec liste M3U externe",
              "Essai 7j puis ~5,49 €",
              "Pionnier historique, interface plus ancienne."
            ],
            [
              "SET IPTV",
              "Samsung Apps officiel",
              "Rapide (< 1,8 s)",
              "EPG avec résumés de programmes",
              "Essai 7j puis ~15 € à vie",
              "Excellente alternative de secours."
            ]
          ]
        },
      },
      {
        id: "reglages-image-samsung",
        h2: "Optimisation de l'image 4K sur écran Samsung",
        paragraphs: [
          "Pour sublimer le rendu de vos flux Atlas Pro 4K sur une dalle Samsung QLED ou OLED :",
          "- Désactivez le mode 'Auto Motion Plus' (effet feuilleton artificiel) ou réglez la réduction de flou sur 8 et la réduction de vibration sur 3.",
          "- Activez le mode 'Image Expert' ou 'Cinéma' pour des couleurs fidèles.",
          "- Branchez votre téléviseur en Ethernet direct à votre box internet pour éliminer les pertes de paquets lors des retransmissions sportives en direct.",
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Ouvrir le Samsung Smart Hub et accéder à Apps",
        instruction:
          "Allumez votre Smart TV Samsung et appuyez sur la touche 'Home' (icône maison). Naviguez vers la gauche et cliquez sur l'icône 'Apps' pour ouvrir le catalogue d'applications.",
        tip: "Assurez-vous que votre téléviseur est connecté à internet et connecté à votre compte Samsung.",
        image: {
          url: "/images/tutorials/installer-atlas-pro-tv-samsung/samsung-smart-hub-app.jpg",
          alt: "Ouverture du Samsung Smart Hub et sélection du menu Apps",
          caption: "Étape 1 : Accédez au magasin officiel d'applications Samsung Apps.",
          placeholderLabel: "Menu Samsung Smart Hub Apps",
        },
      },
      {
        stepNumber: 2,
        title: "Rechercher et installer IBO Player",
        instruction:
          "Dans la barre de recherche (icône loupe), écrivez 'IBO Player'. Sélectionnez l'application avec le logo violet et appuyez sur 'Installer'.",
        tip: "L'installation ne pèse que 15 Mo et s'achève en moins de 30 secondes.",
        image: {
          url: "/images/tutorials/installer-atlas-pro-tv-samsung/maxresdefault.jpg",
          alt: "Recherche et installation de l'application IBO Player sur Samsung Smart TV",
          caption: "Étape 2 : Téléchargez IBO Player depuis la fiche officielle du Samsung Apps Store.",
          placeholderLabel: "Fiche IBO Player Samsung Apps",
        },
      },
      {
        stepNumber: 3,
        title: "Relever l'adresse MAC et la Device Key",
        instruction:
          "Lancez IBO Player. Dès l'écran d'accueil, notez l'adresse MAC (ex: 00:1a:79:xx:xx:xx) et la Device Key affichées au centre de votre téléviseur.",
        tip: "Prenez une photo de l'écran avec votre smartphone pour éviter toute erreur de frappe.",
        image: {
          url: "/images/tutorials/installer-atlas-pro-tv-samsung/images.webp",
          alt: "Écran d'accueil IBO Player affichant l'adresse MAC et la Device Key",
          caption: "Étape 3 : Notez les deux identifiants uniques affichés sur l'écran d'accueil d'IBO Player.",
          placeholderLabel: "Écran MAC & Device Key IBO Player",
        },
      },
      {
        stepNumber: 4,
        title: "Injecter vos identifiants Atlas Pro Xtream Codes",
        instruction:
          "Rendez-vous sur le portail d'activation IBO Player depuis votre navigateur ou saisissez directement vos identifiants Xtream Codes (URL serveur, utilisateur, mot de passe) dans les réglages de l'application.",
        tip: "Vous pouvez également envoyer votre adresse MAC à notre support pour une configuration à distance.",
        image: {
          url: "/images/tutorials/installer-atlas-pro-tv-samsung/hqdefault.jpg",
          alt: "Formulaire de connexion Xtream Codes API Atlas Pro dans IBO Player",
          caption: "Étape 4 : Renseignez vos accès officiels reçus par e-mail (URL + Port, Nom d'utilisateur, Mot de passe).",
          placeholderLabel: "Formulaire Xtream Codes API",
        },
      },
      {
        stepNumber: 5,
        title: "Charger le catalogue et sauvegarder vos favoris",
        instruction:
          "Redémarrez l'application IBO Player. L'ensemble des bouquets (France, Belgique, Suisse, Sport, Cinéma, VOD) apparaît instantanément.",
        tip: "Maintenez le bouton OK de la télécommande sur une chaîne pour l'ajouter à vos Favoris.",
        image: {
          url: "/images/tutorials/installer-atlas-pro-tv-samsung/GDS-21348c45-e385-4d1f-bcb1-fc41db06ef60.webp",
          alt: "Interface du catalogue Atlas Pro dans IBO Player sur TV Samsung",
          caption: "Étape 5 : Profitez de vos flux 4K avec EPG synchronisé et zapping rapide sur TV Samsung.",
          placeholderLabel: "Interface Chaînes IBO Player 4K",
        },
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "installer-atlas-pro-sur-lg-smart-tv",
      "installer-atlas-pro-sur-fire-stick",
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
      "alternatives-atlas-pro-tv-non-compatible-ibo-player-smarters-tivimate",
    ],
    seoTitle: "Installer Atlas Pro sur TV Samsung | Guide IBO Player",
    seoDescription:
      "Comment installer Atlas Pro sur TV Samsung Tizen ? Guide officiel avec IBO Player ou Smart IPTV. Connexion Xtream Codes sans clé USB en 5 minutes chrono.",
    faq: [
      {
        question: "Pourquoi ne puis-je pas installer le fichier APK Atlas Pro sur ma TV Samsung ?",
        answer:
          "Les téléviseurs Samsung fonctionnent sous Tizen OS et non sous Android. Les fichiers APK ne sont donc pas reconnus. L'utilisation d'un lecteur certifié tel qu'IBO Player est la méthode standard et sécurisée.",
      },
      {
        question: "IBO Player est-il gratuit sur Samsung Smart TV ?",
        answer:
          "IBO Player propose un essai gratuit de 7 jours. Passé ce délai, une activation unique à vie d'environ 8€ est demandée par l'éditeur de l'application. Cette licence est indépendante de votre abonnement Atlas Pro.",
      },
      {
        question: "L'application gère-t-elle le guide des programmes (EPG) et les replays ?",
        answer:
          "Oui, IBO Player synchronise automatiquement le guide électronique des programmes EPG sur 7 jours et supporte le replay (Catch-up TV) sur l'ensemble des chaînes compatibles de notre bouquet.",
      },
      {
        question: "Puis-je utiliser Smart IPTV au lieu d'IBO Player ?",
        answer:
          "Absolument. Si vous disposez déjà d'une licence Smart IPTV (SIPTV), vous pouvez y injecter votre lien M3U Atlas Pro depuis le site officiel siptv.app en saisissant l'adresse MAC de votre TV.",
      },
    ],
  },
  {
    id: "tut-smart-tv-lg",
    slug: "installer-atlas-pro-sur-lg-smart-tv",
    title: "Comment Installer Atlas Pro sur LG Smart TV : Guide webOS & IBO Player",
    category: "installation",
    categoryLabel: "Installation & Configuration TV",
    tags: ["LG Smart TV", "webOS", "IBO Player", "IPTV Smarters", "Smart TV"],
    excerpt:
      "Tutoriel détaillé pour installer Atlas Pro sur téléviseur LG sous webOS. Téléchargez IBO Player ou IPTV Smarters depuis le LG Content Store et activez vos chaînes 4K HDR.",
    readingTime: "7 min",
    wordCount: 1420,
    publishedAt: "2024-02-14",
    updatedAt: "2026-03-21",
    author: {
      name: "Équipe Technique Atlas Pro",
      role: "Architecte Réseau & Support IPTV",
    },
    mainImage: {
      url: "/images/tutorials/installer-atlas-pro-lg-tv.webp",
      alt: "Installation Atlas Pro sur téléviseur LG webOS via LG Content Store",
      caption: "Configuration d'Atlas Pro sur Smart TV LG avec webOS et Magic Remote.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "Pour installer Atlas Pro sur une Smart TV LG : allumez votre TV, ouvrez le LG Content Store (ou Apps), recherchez 'IBO Player' ou 'IPTV Smarters Pro' et cliquez sur Installer. Récupérez l'adresse MAC de l'application et renseignez vos identifiants Xtream Codes Atlas Pro pour débloquer immédiatement l'ensemble des flux 4K HDR.",
    keyTakeaways: [
      "Les téléviseurs LG utilisent le système d'exploitation webOS : les fichiers APK Android ne sont pas pris en charge.",
      "IBO Player et IPTV Smarters Pro sont tous deux certifiés et téléchargeables directement dans le LG Content Store.",
      "La télécommande LG Magic Remote permet de pointer et naviguer avec une fluidité exceptionnelle dans les catalogues VOD.",
      "L'activation du décodage matériel HEVC/AV1 dans les réglages du lecteur garantit une image 4K sans saccade sur dalles OLED.",
    ],
    tableOfContents: [
      { id: "comprendre-lg-webos", title: "Comprendre le fonctionnement d'Atlas Pro sur LG webOS", level: 2 },
      { id: "meilleures-apps-lg", title: "Les 2 meilleures applications IPTV sur LG Content Store", level: 2 },
      { id: "marche-a-suivre-lg", title: "Guide pas à pas d'installation sur LG Smart TV", level: 2 },
      { id: "optimisation-oled-lg", title: "Optimiser les flux 4K HDR sur dalles LG OLED & QNED", level: 2 },
      { id: "faq-lg", title: "Foire aux questions LG TV", level: 2 },
    ],
    body: [
      "Les téléviseurs LG Smart TV sont mondialement réputés pour la qualité incomparable de leurs dalles OLED et QNED. Pour exploiter toute la puissance visuelle d'un téléviseur LG avec votre abonnement Atlas Pro, une installation soignée s'impose.",
      "Comme Samsung, LG s'appuie sur son propre système d'exploitation : webOS. Vous ne pouvez donc pas y exécuter directement l'APK Atlas Pro ONTV Android. Néanmoins, le LG Content Store met à votre disposition les lecteurs IPTV les plus performants du marché.",
    ],
    sections: [
      {
        id: "comprendre-lg-webos",
        h2: "Comprendre le fonctionnement d'Atlas Pro sur LG webOS",
        paragraphs: [
          "webOS est un environnement sécurisé qui ne permet l'installation d'applications que via le LG Content Store officiel. Les téléviseurs LG récents (webOS 4.0 à webOS 24) intègrent des processeurs Alpha 7, Alpha 9 et Alpha 11 capables de décoder les flux vidéo 4K UHD à 60 images par seconde en direct.",
          "En utilisant un lecteur optimisé pour webOS, vous profitez de la prise en charge native de la télécommande LG Magic Remote (pointeur gyroscopique) pour faire défiler vos listes de chaînes avec un confort inégalé.",
        ],
      },
      {
        id: "meilleures-apps-lg",
        h2: "Les 2 meilleures applications IPTV sur LG Content Store",
        callout: {
          type: "tip",
          title: "Le duo parfait : Télécommande LG Magic Remote & IBO Player",
          text: "Grâce au pointeur gyroscopique de la télécommande **LG Magic Remote**, IBO Player se pilote comme sur un ordinateur : vous pouvez faire défiler des milliers de flux d'un simple mouvement du poignet et basculer instantanément entre la TV en direct et la vidéothèque 4K.",
        },
        paragraphs: [
          "Le magasin d'applications officiel de LG propose deux lecteurs majeurs compatibles avec nos flux haute définition :",
          "1. **IBO Player Pro (Recommandation N°1) :** Le choix de référence sur LG webOS. Interface moderne, temps de chargement éclair, gestion du guide EPG et support des pistes audio Dolby Digital 5.1.",
          "2. **IPTV Smarters Pro :** Très populaire, interface inspirée des plateformes de streaming avec sections dédiées Direct, Séries et Films.",
        ],
        table: {
          caption: "Comparatif des lecteurs certifiés disponibles sur LG Content Store (webOS)",
          headers: ["Application LG webOS", "Compatibilité Magic Remote", "Temps de Zapping", "Gestion Replay & 4K", "Modèle Tarifaire"],
          rows: [
            [
              "IBO Player Pro",
              "Parfaite (pointeur gyroscopique 100 % actif)",
              "Ultra-rapide (< 1,2 s)",
              "EPG 7 jours complet, Replay, audio Dolby 5.1",
              "Essai 7 jours puis ~8 € à vie (paiement direct éditeur)"
            ],
            [
              "IPTV Smarters Pro",
              "Standard (navigation via croix directionnelle)",
              "Standard (< 2,0 s)",
              "Grille classique + VOD organisée avec résumés",
              "Gratuit (version Pro optionnelle)"
            ]
          ]
        },
      },
      {
        id: "optimisation-oled-lg",
        h2: "Optimiser les flux 4K HDR sur dalles LG OLED & QNED",
        paragraphs: [
          "Pour une fidélité d'image optimale sur votre téléviseur LG :",
          "- Dans les paramètres image LG, sélectionnez le mode 'Filmmaker Mode' ou 'ISF Expert' pour désactiver les filtres agressifs.",
          "- Activez 'TruMotion' en mode 'Mouvement fluide' uniquement si vous regardez du football ou des courses automobiles.",
          "- Dans les options d'IBO Player, choisissez le décodeur vidéo matériel (MediaCodec / Hardware) pour éviter toute montée en température du processeur TV.",
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Allumer votre TV LG et ouvrir le LG Content Store",
        instruction:
          "Appuyez sur le bouton Home de votre télécommande Magic Remote et cliquez sur l'application 'Apps' ou 'LG Content Store'.",
        image: {
          alt: "Ouverture du LG Content Store sur téléviseur LG webOS",
          caption: "Étape 1 : Accédez au catalogue d'applications officiel LG.",
          placeholderLabel: "Menu LG Apps Store",
        },
      },
      {
        stepNumber: 2,
        title: "Télécharger IBO Player",
        instruction:
          "Tapez 'IBO Player' dans la barre de recherche en haut à droite, puis cliquez sur 'Installer'.",
        image: {
          alt: "Installation d'IBO Player depuis le LG Content Store",
          caption: "Étape 2 : Installez le lecteur IBO Player officiel.",
          placeholderLabel: "Fiche IBO Player webOS",
        },
      },
      {
        stepNumber: 3,
        title: "Noter l'adresse MAC affichée à l'écran",
        instruction:
          "Ouvrez l'application pour afficher votre adresse MAC et votre Device Key uniques.",
        image: {
          alt: "Adresse MAC et Device Key affichées dans IBO Player sur LG TV",
          caption: "Étape 3 : Notez les identifiants pour activer votre ligne.",
          placeholderLabel: "Écran MAC IBO Player LG",
        },
      },
      {
        stepNumber: 4,
        title: "Associer vos identifiants Atlas Pro Xtream Codes",
        instruction:
          "Renseignez l'URL serveur, votre nom d'utilisateur et votre mot de passe pour importer les bouquets 4K.",
        image: {
          alt: "Saisie des identifiants Xtream Codes Atlas Pro",
          caption: "Étape 4 : Validez la connexion pour charger vos flux.",
          placeholderLabel: "Formulaire de Connexion",
        },
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "installer-atlas-pro-sur-tv-samsung",
      "installer-atlas-pro-sur-fire-stick",
      "resoudre-coupure-buffering-atlas-pro",
      "alternatives-atlas-pro-tv-non-compatible-ibo-player-smarters-tivimate",
    ],
    seoTitle: "Installer Atlas Pro sur LG Smart TV | Guide webOS",
    seoDescription:
      "Comment installer Atlas Pro sur Smart TV LG webOS ? Téléchargez IBO Player ou IPTV Smarters sur le LG Content Store et connectez vos accès 4K en 5 minutes.",
    faq: [
      {
        question: "L'application fonctionne-t-elle avec la télécommande LG Magic Remote ?",
        answer:
          "Oui, IBO Player sur webOS prend en charge le pointeur à l'écran et la molette de la télécommande LG Magic Remote pour une navigation ultra-fluide.",
      },
      {
        question: "Puis-je regarder les chaînes en 4K HDR sur ma TV LG OLED ?",
        answer:
          "Parfaitement. Les serveurs Atlas Pro diffusent des flux 4K natifs en HDR10 et HLG qui tirent pleinement parti du contraste infini des dalles LG OLED.",
      },
    ],
  },
  {
    id: "tut-installation-firestick",
    slug: "installer-atlas-pro-sur-fire-stick",
    title: "Comment Installer Atlas Pro sur Fire Stick : Guide Downloader & Code Officiel",
    category: "installation",
    categoryLabel: "Installation & Configuration TV",
    tags: ["Fire TV Stick", "Amazon Fire", "Downloader", "APK", "Atlas Pro ONTV"],
    excerpt:
      "Guide complet pas à pas pour installer Atlas Pro ONTV sur Amazon Fire TV Stick 4K avec l'application Downloader. Code officiel, options développeurs et astuces de fluidité.",
    readingTime: "8 min",
    wordCount: 1620,
    publishedAt: "2024-01-20",
    updatedAt: "2026-03-22",
    author: {
      name: "Équipe Technique Atlas Pro",
      role: "Architecte Réseau & Support IPTV",
    },
    mainImage: {
      url: "/images/tutorials/installer-atlas-pro-fire-stick.webp",
      alt: "Installation d'Atlas Pro ONTV sur Amazon Fire TV Stick avec l'application Downloader",
      caption: "Guide officiel d'installation d'Atlas Pro sur Amazon Fire TV Stick.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "Pour installer Atlas Pro sur un Fire TV Stick : téléchargez l'application Downloader depuis l'Amazon Appstore. Activez les Options pour développeurs (7 clics sur le nom de l'appareil dans À propos) et autorisez l'installation d'applications inconnues pour Downloader. Ouvrez Downloader, tapez le code officiel 822648 et cliquez sur Installer.",
    keyTakeaways: [
      "L'Amazon Fire TV Stick fonctionne sous Fire OS (dérivé d'Android) et permet d'installer directement l'application officielle Atlas Pro ONTV APK.",
      "Le code officiel Downloader (822648) télécharge directement la dernière version certifiée sans passer par un lien complexe.",
      "Amazon masque désormais le menu Développeur sur les Fire OS récents : l'astuce des 7 clics permet de le déverrouiller instantanément.",
      "Atlas Pro ONTV est entièrement compatible avec la télécommande vocale Alexa pour zapper et lancer vos programmes.",
    ],
    tableOfContents: [
      { id: "pourquoi-firestick", title: "Pourquoi le Fire TV Stick est le meilleur appareil pour Atlas Pro", level: 2 },
      { id: "debloquer-options-developpeurs", title: "Débloquer les Options pour Développeurs (Astuce des 7 clics)", level: 2 },
      { id: "installation-downloader", title: "Télécharger l'application officielle Downloader", level: 2 },
      { id: "installation-atlas-pro-code", title: "Installer Atlas Pro ONTV via le code Downloader 822648", level: 2 },
      { id: "optimisation-firestick", title: "Réglages de fluidité pour le Fire Stick 4K Max", level: 2 },
      { id: "faq-firestick", title: "Questions fréquentes Fire TV Stick", level: 2 },
    ],
    body: [
      "L'Amazon Fire TV Stick (modèles HD, 4K et 4K Max) est sans conteste le support de diffusion le plus populaire et le plus stable pour profiter du service Atlas Pro. Grâce à sa base Android (Fire OS) et à son puissant processeur graphique, il offre une réactivité exemplaire et un zapping quasi instantané.",
      "L'installation d'[Atlas Pro ONTV APK](/telecharger/atlas-pro-ontv) sur Fire Stick ne nécessite aucun matériel supplémentaire ni ordinateur : tout s'exécute directement depuis votre écran avec votre télécommande Amazon et un [code d'activation Atlas Pro 12 mois](/plans-tarifs/atlas-pro-12-mois).",
    ],
    sections: [
      {
        id: "pourquoi-firestick",
        h2: "Pourquoi le Fire TV Stick est le meilleur appareil pour Atlas Pro",
        paragraphs: [
          "Contrairement aux Smart TV dont le système devient obsolète après quelques années, la clé Amazon Fire TV Stick reçoit des mises à jour régulières et bénéficie d'une communauté de développement active. Sa prise en charge matérielle des codecs HEVC/H.265 et AV1 permet de visionner des chaînes en 4K HDR sans aucune chauffe ni saccade.",
        ],
      },
      {
        id: "debloquer-options-developpeurs",
        h2: "Débloquer les Options pour Développeurs (Astuce des 7 clics)",
        paragraphs: [
          "Sur les versions récentes de Fire OS (Fire OS 7 et 8), Amazon a masqué le menu 'Options pour les développeurs' par sécurité. Pour le faire réapparaître :",
          "1. Allez dans Paramètres > Ma Fire TV > À propos de.",
          "2. Mettez en surbrillance le nom exact de votre clé (ex: 'Fire TV Stick 4K Max').",
          "3. Cliquez 7 fois consécutives sur le bouton central de votre télécommande jusqu'à ce que le message 'Inutile, vous êtes déjà un développeur' s'affiche en bas de l'écran.",
          "4. Revenez en arrière : le menu 'Options pour les développeurs' est désormais visible !",
        ],
      },
      {
        id: "optimisation-firestick",
        h2: "Réglages de fluidité et matériel pour Amazon Fire TV Stick",
        callout: {
          type: "warning",
          title: "Conseil Électrique Crucial : Évitez d'alimenter votre Fire Stick via le port USB de la TV",
          text: "Les ports USB des téléviseurs ne fournissent généralement que **0,5 A (500 mA)**. Or, le décodage d'un flux 4K HEVC à 60 images par seconde génère des pics de consommation nécessitant **1,0 A à 1,5 A**. Une sous-alimentation provoque des redémarrages inopinés et des gels d'image. Branchez impérativement votre Fire Stick sur la prise murale avec son adaptateur secteur officiel fourni.",
        },
        paragraphs: [
          "Pour maximiser la longévité et la réactivité de votre clé de streaming Amazon Fire TV :",
          "- **Désactivez la lecture automatique :** Rendez-vous dans Paramètres > Préférences > Contenu en vedette pour couper les bandes-annonces en arrière-plan.",
          "- **Utilisez l'adaptateur HDMI flexible :** La petite rallonge fournie éloigne la clé du dos métallique de la télévision, ce qui améliore considérablement la réception Wi-Fi 5 GHz.",
          "- **Optimisez le lecteur :** Pour les vidéos 4K, activez le décodage matériel HW+ et ajustez la mémoire tampon à 3 secondes dans les réglages de l'application.",
        ],
        table: {
          caption: "Comparatif des modèles Amazon Fire TV Stick et compatibilité avec les flux 4K Atlas Pro",
          headers: ["Modèle Fire TV", "Processeur & Mémoire RAM", "Résolution Vidéo Max", "Norme Wi-Fi", "Recommandation Atlas Pro"],
          rows: [
            [
              "Fire TV Stick Lite / HD",
              "Quad-core 1.7 GHz | 1,0 Go RAM",
              "1080p Full HD (60 fps)",
              "Wi-Fi 5 (802.11ac)",
              "Recommandé pour un second téléviseur d'appoint en Full HD."
            ],
            [
              "Fire TV Stick 4K (2e Gén)",
              "Quad-core 1.7 GHz | 2,0 Go RAM",
              "4K Ultra HD (HDR10+, Dolby Vision)",
              "Wi-Fi 6 (802.11ax)",
              "Excellent rapport qualité / prix pour tous les flux sportifs 4K."
            ],
            [
              "Fire TV Stick 4K Max",
              "Quad-core 2.0 GHz | 2,0 Go RAM",
              "4K UHD 60fps + Décodeur AV1 natif",
              "Wi-Fi 6E tribande",
              "Le choix N°1 absolu pour un zapping instantané sous 0,8 seconde."
            ]
          ]
        },
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Installer l'application Downloader depuis l'Amazon Appstore",
        instruction:
          "Sur l'écran d'accueil de votre Fire TV, sélectionnez 'Trouver' > 'Rechercher', tapez 'Downloader' et cliquez sur Télécharger (icône orange).",
        tip: "Downloader est une application 100 % gratuite développée par AFTVnews.",
        image: {
          alt: "Recherche de Downloader sur l'Amazon Appstore",
          caption: "Étape 1 : Téléchargez l'application Downloader officielle.",
          placeholderLabel: "Fiche Downloader Amazon Store",
        },
      },
      {
        stepNumber: 2,
        title: "Autoriser l'installation d'applications inconnues",
        instruction:
          "Rendez-vous dans Paramètres > Ma Fire TV > Options pour les développeurs > Installer des applications inconnues > Activez 'Downloader'.",
        tip: "Si le menu Développeur est absent, appliquez l'astuce des 7 clics dans À propos.",
        image: {
          alt: "Activation des sources inconnues pour Downloader dans Fire OS",
          caption: "Étape 2 : Autorisez Downloader à installer les fichiers APK.",
          placeholderLabel: "Options Développeur Fire OS",
        },
      },
      {
        stepNumber: 3,
        title: "Taper le code Downloader officiel 822648",
        instruction:
          "Ouvrez Downloader, autorisez l'accès au stockage. Dans le champ URL, tapez simplement le code numérique 822648 et appuyez sur 'Go'.",
        tip: "Le téléchargement du paquet officiel Atlas Pro ONTV se lance automatiquement après 5 secondes.",
        image: {
          alt: "Saisie du code Downloader 822648 dans l'application",
          caption: "Étape 3 : Saisissez le code rapide officiel AFTVnews.",
          placeholderLabel: "Écran Saisie Code Downloader",
        },
      },
      {
        stepNumber: 4,
        title: "Installer et ouvrir Atlas Pro ONTV",
        instruction:
          "Cliquez sur 'Installer' lorsque la boîte de dialogue apparaît. Une fois l'installation terminée, cliquez sur 'Ouvrir' et entrez votre code d'accès à 12 chiffres.",
        tip: "Supprimez le fichier APK d'installation lorsque Downloader vous le propose pour économiser l'espace disque.",
        image: {
          alt: "Boîte de dialogue d'installation de l'application Atlas Pro ONTV",
          caption: "Étape 4 : Validez l'installation et lancez l'application.",
          placeholderLabel: "Dialogue Installation APK",
        },
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "retrouver-entrer-code-atlas-pro-ontv",
      "resoudre-coupure-buffering-atlas-pro",
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
    ],
    seoTitle: "Installer Atlas Pro sur Fire Stick | Code Downloader",
    seoDescription:
      "Comment installer Atlas Pro sur Amazon Fire Stick avec Downloader ? Code officiel, options développeurs (7 clics) et configuration rapide en 5 minutes.",
    faq: [
      {
        question: "Pourquoi le menu 'Options pour les développeurs' n'apparaît pas sur mon Fire Stick ?",
        answer:
          "Amazon masque ce menu sur les nouvelles versions logicielles. Allez dans Paramètres > Ma Fire TV > À propos, puis cliquez 7 fois d'affilée sur le nom de votre appareil pour le faire réapparaître immédiatement.",
      },
      {
        question: "Le code Downloader 822648 est-il sécurisé et officiel ?",
        answer:
          "Oui, ce code redirige directement vers nos serveurs sécurisés pour télécharger la version originale et certifiée d'Atlas Pro ONTV sans aucun risque de malware.",
      },
    ],
  },
  {
    id: "tut-recuperer-code",
    slug: "retrouver-entrer-code-atlas-pro-ontv",
    title: "Code Atlas Pro ONTV : Retrouver, Entrer et Renouveler vos Identifiants",
    category: "account",
    categoryLabel: "Abonnement & Activation",
    tags: ["Code d'activation", "Atlas Pro ONTV", "Xtream Codes", "Renouvellement", "Compte"],
    excerpt:
      "Code Atlas Pro perdu, expiré ou message d'erreur 'Code invalide' ? Guide officiel pour retrouver vos identifiants, entrer le code dans l'application et renouveler sans réinstaller.",
    readingTime: "6 min",
    wordCount: 1350,
    publishedAt: "2024-01-25",
    updatedAt: "2026-03-22",
    author: {
      name: "Équipe Technique Atlas Pro",
      role: "Architecte Réseau & Support IPTV",
    },
    mainImage: {
      url: "/atlaspro-interface.webp",
      alt: "Interface officielle Atlas Pro ONTV et gestion du code d'activation",
      caption: "Saisie et renouvellement de votre code d'accès officiel Atlas Pro ONTV.",
      width: 1280,
      height: 720,
    },
    directAnswer:
      "Pour retrouver votre code Atlas Pro : consultez l'e-mail de confirmation reçu lors de votre commande (vérifiez vos courriers indésirables / spams). Pour l'entrer : lancez Atlas Pro ONTV, choisissez 'Se connecter avec un code' et tapez les 12 chiffres sans espace. Pour un renouvellement : rendez-vous dans Paramètres > Compte > Déconnexion pour saisir votre nouveau code sans perdre vos favoris.",
    keyTakeaways: [
      "Le code d'activation se compose de 12 chiffres uniques attribués lors de votre souscription officielle.",
      "Le format Xtream Codes (URL + Nom d'utilisateur + Mot de passe) est également fourni pour les applications tierces comme IBO Player.",
      "Lors d'un renouvellement d'abonnement, aucune réinstallation de l'application n'est requise : une simple reconnexion suffit.",
      "En cas de perte définitive, notre support technique renvoie vos identifiants en moins de 15 minutes sur simple demande.",
    ],
    tableOfContents: [
      { id: "ou-trouver-code", title: "Où trouver votre code d'activation officiel ?", level: 2 },
      { id: "difference-formats", title: "Différence entre Code 12 chiffres et Xtream Codes", level: 2 },
      { id: "comment-entrer-code", title: "Comment entrer le code dans l'application", level: 2 },
      { id: "changer-code-renouvellement", title: "Comment renouveler votre code sans réinstaller", level: 2 },
      { id: "erreur-code-invalide", title: "Résoudre le message 'Code invalide' ou 'Échec'", level: 2 },
      { id: "faq-code", title: "Questions fréquentes sur les identifiants", level: 2 },
    ],
    body: [
      "Votre abonnement Atlas Pro est protégé par un système de licence sécurisé. Selon l'application utilisée (Atlas Pro ONTV, Atlas Pro Max, Atlas Pro 9X ou un lecteur tiers comme IBO Player), l'accès s'effectue soit par un code d'activation numérique à 12 chiffres, soit par des identifiants API Xtream Codes.",
      "Ce guide récapitule la procédure officielle pour récupérer vos identifiants perdus, les saisir sans erreur sur votre téléviseur et prolonger votre accès en toute tranquillité.",
    ],
    sections: [
      {
        id: "ou-trouver-code",
        h2: "Où trouver votre code d'activation officiel ?",
        paragraphs: [
          "Dès la validation de votre paiement sur notre site officiel, un e-mail automatique contenant votre code à 12 chiffres ainsi que vos identifiants Xtream Codes vous est expédié.",
          "Si vous ne le voyez pas dans votre boîte de réception après 5 minutes, recherchez l'expéditeur 'Atlas Pro' dans vos dossiers 'Spams', 'Courriers indésirables' ou l'onglet 'Promotions' (notamment sur Gmail et Outlook).",
        ],
      },
      {
        id: "difference-formats",
        h2: "Différence entre Code 12 chiffres et identifiants Xtream Codes",
        callout: {
          type: "tip",
          title: "Service Client : Récupération instantanée en cas d'e-mail égaré",
          text: "Si vous avez vidé votre corbeille ou si votre e-mail de confirmation est introuvable, notre support technique vous renvoie vos identifiants en moins de 15 minutes 7j/7. Munissez-vous simplement de votre adresse e-mail de commande ou de votre reçu de paiement.",
        },
        paragraphs: [
          "Lors de votre souscription sur notre site officiel, nos serveurs génèrent deux modes d'accès distincts pour garantir une compatibilité avec 100 % des écrans du marché :",
          "- **Le Code à 12 chiffres (ex: 8492 0481 9204) :** Conçu spécifiquement pour les applications officielles [Atlas Pro ONTV](/tutoriels/installer-atlas-pro-sur-fire-stick), Atlas Pro Max et Atlas Pro 9X sur boîtiers et téléviseurs Android. Simple et rapide à taper avec une télécommande.",
          "- **L'API Xtream Codes :** Composée d'une URL de serveur (ex: `http://serveur.atlaspro.tv:8080`), d'un nom d'utilisateur et d'un mot de passe. Indispensable pour configurer des lecteurs comme [IBO Player sur Samsung](/tutoriels/installer-atlas-pro-sur-tv-samsung), [IBO Player sur LG](/tutoriels/installer-atlas-pro-sur-lg-smart-tv) ou [TiviMate](/tutoriels/alternatives-atlas-pro-tv-non-compatible-ibo-player-smarters-tivimate).",
        ],
        table: {
          caption: "Comparatif des deux formats d'accès fournis lors de la commande Atlas Pro",
          headers: ["Format d'Identifiant", "Structure", "Applications Dédiées", "Avantage Principal"],
          rows: [
            [
              "Code Direct 12 chiffres",
              "12 caractères numériques (ex: 820194829104)",
              "Atlas Pro ONTV, Atlas Pro Max, Atlas Pro 9X",
              "Connexion en un clic, idéale avec la télécommande TV."
            ],
            [
              "Identifiants Xtream Codes",
              "URL Serveur + Nom d'utilisateur + Mot de passe",
              "IBO Player, TiviMate, IPTV Smarters, VLC",
              "Compatible avec toutes les Smart TV fermées (Tizen, webOS, PC, Mac)."
            ]
          ]
        },
      },
      {
        id: "changer-code-renouvellement",
        h2: "Comment renouveler votre code sans réinstaller",
        paragraphs: [
          "Lorsque vous effectuez votre [renouvellement d'abonnement Atlas Pro](/plans-tarifs/renouvellement) ou souscrivez un [code IPTV Atlas Pro ONTV 12 mois](/plans-tarifs/atlas-pro-12-mois), vous recevez un nouveau code d'accès. Vous n'avez pas besoin de supprimer l'application de votre télévision :",
          "1. Ouvrez Atlas Pro ONTV.",
          "2. Allez dans Paramètres (icône engrenage) > Compte.",
          "3. Cliquez sur 'Se déconnecter'.",
          "4. Entrez votre nouveau code d'activation : vos chaînes favorites, historiques et paramètres sont instantanément conservés.",
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Localiser l'e-mail de confirmation de commande",
        instruction:
          "Recherchez l'e-mail officiel avec l'objet contenant 'Confirmation de commande - Vos accès Atlas Pro ONTV'. Vos codes à 12 chiffres et identifiants Xtream y sont indiqués en gras.",
        image: {
          url: "/images/tutorials/code-atlas-pro-ontv/order-confirmation-email-atlas-pro.jpg",
          alt: "E-mail officiel de confirmation de commande contenant le code d'activation Atlas Pro",
          caption: "Étape 1 : Retrouvez votre message d'activation officiel avec vos identifiants à 12 chiffres.",
          placeholderLabel: "Email Confirmation Commande",
        },
      },
      {
        stepNumber: 2,
        title: "Sélectionner 'Se connecter avec un code'",
        instruction:
          "Sur l'écran d'accueil de l'application Atlas Pro ONTV, choisissez la première option de connexion par code.",
        image: {
          url: "/atlas-pro-ontv-login.webp",
          alt: "Écran d'accueil Atlas Pro ONTV avec option Se connecter avec un code",
          caption: "Étape 2 : Lancez Atlas Pro ONTV et sélectionnez le mode de connexion par code.",
          placeholderLabel: "Menu Connexion Code Atlas",
        },
      },
      {
        stepNumber: 3,
        title: "Saisir les 12 chiffres sans espace",
        instruction:
          "Utilisez le pavé numérique de la télécommande pour entrer les 12 chiffres. Vérifiez qu'aucun chiffre n'a été doublé pour charger instantanément vos chaînes.",
        image: {
          url: "/atlaspro-interface.webp",
          alt: "Interface principale d'Atlas Pro ONTV après validation du code d'abonnement",
          caption: "Étape 3 : Accédez à vos flux 4K, Live TV, Films et Séries sur l'interface officielle Atlas Pro ONTV.",
          placeholderLabel: "Interface Atlas Pro ONTV Activée",
        },
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
      "installer-atlas-pro-sur-fire-stick",
      "resoudre-coupure-buffering-atlas-pro",
    ],
    seoTitle: "Retrouver & Entrer le Code Atlas Pro ONTV | Guide Officiel",
    seoDescription:
      "Retrouver son code Atlas Pro perdu, l'entrer sur sa TV et le renouveler sans réinstaller : guide officiel pas à pas pour activer votre abonnement 4K.",
    faq: [
      {
        question: "Que faire si j'ai perdu mon code et supprimé mes e-mails ?",
        answer:
          "Contactez notre support client par ticket ou sur WhatsApp en fournissant l'adresse e-mail utilisée lors de l'achat ou votre référence de transaction : nos agents vous renverront vos accès en quelques minutes.",
      },
      {
        question: "Pourquoi l'application indique-t-elle 'Code invalide' ?",
        answer:
          "Ce message indique soit une erreur de frappe lors de la saisie (un 0 confondu avec un O, ou un espace involontaire), soit que la période de validité de votre compte est expirée.",
      },
    ],
  },
  {
    id: "tut-resoudre-buffering",
    slug: "resoudre-coupure-buffering-atlas-pro",
    title: "Résoudre les Coupures et le Buffering sur Atlas Pro : 5 Réglages Essentiels",
    category: "optimization",
    categoryLabel: "Optimisation 4K & Fluidité",
    tags: ["Buffering", "Coupures", "DNS Cloudflare", "Ethernet", "Hardware Decoding"],
    excerpt:
      "Votre flux Atlas Pro saccade, se fige ou affiche une roue de chargement en continu ? Découvrez les 5 réglages concrets pour supprimer définitivement le buffering sur votre TV.",
    readingTime: "8 min",
    wordCount: 1520,
    publishedAt: "2024-02-01",
    updatedAt: "2026-03-22",
    author: {
      name: "Équipe Technique Atlas Pro",
      role: "Architecte Réseau & Support IPTV",
    },
    mainImage: {
      url: "/images/tutorials/resoudre-buffering-atlas-pro/how-to-fix-iptv-buffering.webp",
      alt: "Suppression du buffering et des coupures IPTV sur application Atlas Pro",
      caption: "5 réglages fondamentaux pour éliminer tout freeze sur les flux 4K Atlas Pro.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "Pour stopper le buffering sur Atlas Pro : reliez votre téléviseur par câble Ethernet direct RJ45 au lieu du Wi-Fi, augmentez la mémoire tampon (buffer size) à 3 ou 5 secondes dans les paramètres du lecteur, activez le décodage matériel (Hardware Decoding HW+) et configurez les DNS Cloudflare (1.1.1.1) pour contourner le bridage de votre fournisseur d'accès.",
    keyTakeaways: [
      "80 % des gels d'image résultent de pertes de paquets UDP sur les réseaux Wi-Fi 2.4 GHz domestiques saturés.",
      "Le raccordement en câble Ethernet direct ou CPL 1000 Mbps offre une latence stable sous 15 ms indispensable à la 4K.",
      "Ajuster la mémoire tampon à 3-5 secondes permet à l'application de pré-charger la vidéo et d'absorber les micro-fluctuations.",
      "Le décodage matériel HW+ décharge le processeur de la TV et évite la surchauffe lors des directs sportifs prolongés.",
    ],
    tableOfContents: [
      { id: "origine-buffering", title: "D'où proviennent les coupures et le buffering ?", level: 2 },
      { id: "reglage-1-ethernet", title: "Réglage 1 : Raccordement Ethernet ou CPL direct", level: 2 },
      { id: "reglage-2-tampon-video", title: "Réglage 2 : Augmenter la mémoire tampon (Buffer Size)", level: 2 },
      { id: "reglage-3-decodage-materiel", title: "Réglage 3 : Activer le décodage matériel HW+", level: 2 },
      { id: "reglage-4-dns-anti-bridage", title: "Réglage 4 : Configurer les DNS Cloudflare anti-bridage", level: 2 },
      { id: "reglage-5-redemarrage-ram", title: "Réglage 5 : Vider la mémoire RAM de votre équipement", level: 2 },
      { id: "faq-buffering", title: "Questions fréquentes sur le buffering", level: 2 },
    ],
    body: [
      "Il n'y a rien de plus exaspérant qu'un match de football qui se fige à la 89ème minute ou une série 4K interrompue par une roue de chargement interminable. Bien souvent, les utilisateurs incriminent à tort le serveur du fournisseur IPTV, alors que la cause se situe au niveau du réseau local ou des réglages du lecteur vidéo.",
      "Chez Atlas Pro, nos serveurs diffusent avec une bande passante garantie et un surdimensionnement de capacité pour absorber les pics d'audience. En appliquant les 5 réglages présentés dans ce guide, vous éliminerez 99 % des freezes constatés.",
    ],
    sections: [
      {
        id: "origine-buffering",
        h2: "D'où proviennent les coupures et le buffering ?",
        callout: {
          type: "tip",
          title: "Règle d'or pour la fluidité 4K : Éviter absolument le Wi-Fi 2.4 GHz",
          text: "Le streaming direct en **Ultra HD 4K** requiert une bande passante stable et ininterrompue. La bande Wi-Fi 2.4 GHz traditionnelle subit l'encombrement des réseaux voisins et des micro-ondes, générant des micro-pertes de paquets (packet loss) fatales. Pour éradiquer 90 % des saccades, connectez votre appareil avec un **câble réseau Ethernet Cat 6** ou basculez sur la fréquence Wi-Fi 5 GHz.",
        },
        paragraphs: [
          "Contrairement à la lecture d'une vidéo sur YouTube où l'intégralité du fichier peut être pré-téléchargée des minutes en avance, la télévision en direct fonctionne selon un flux continu en temps réel. Si votre réseau subit une perte de paquets de 200 millisecondes sans mémoire tampon suffisante, le lecteur vidéo est à court de trames et l'image se fige.",
          "Les trois causes fondamentales identifiées par nos ingénieurs réseau sont :",
          "1. **Les micro-pertes de paquets Wi-Fi** causées par la dégradation du signal et les interférences d'ondes radio.",
          "2. **Une mémoire tampon (buffer size) configurée à zéro seconde**, empêchant l'application d'absorber les variations de gigue (jitter).",
          "3. **Le bridage opérateur ou filtrage DNS** appliqué aux heures de pointe. Consultez notre guide pour [résoudre les erreurs de connexion serveur](/tutoriels/atlas-pro-ne-peut-pas-se-connecter-au-serveur).",
        ],
        table: {
          caption: "Besoins techniques de bande passante et tolérance réseau selon la résolution vidéo",
          headers: ["Résolution Vidéo", "Débit Réel Requis", "Latence (Ping) & Gigue (Jitter)", "Buffer Conseillé"],
          rows: [
            ["SD Standard (576p)", "5 Mbps stables", "Ping < 80 ms | Jitter < 25 ms", "1 à 2 secondes"],
            ["HD Haute Définition (720p 50fps)", "10 Mbps stables", "Ping < 50 ms | Jitter < 15 ms", "2 à 3 secondes"],
            ["Full HD 1080p (60fps)", "15 Mbps constants", "Ping < 30 ms | Jitter < 10 ms", "3 à 5 secondes"],
            ["Ultra HD 4K HDR (HEVC H.265)", "25 Mbps constants", "Ping < 20 ms | Jitter < 5 ms", "5 à 8 secondes (HW+)"]
          ]
        },
      },
      {
        id: "reglage-1-ethernet",
        h2: "Réglage 1 : Raccordement Ethernet ou CPL direct",
        paragraphs: [
          "Le Wi-Fi domestique est instable par nature. Pour un flux 4K HDR exigeant un débit constant de 25 Mbps, raccordez votre téléviseur ou votre box avec un câble Ethernet RJ45 Cat 6. Si votre box est dans une autre pièce, utilisez un kit de prises CPL (Courant Porteur en Ligne) 1000 ou 2000 Mbps.",
        ],
      },
      {
        id: "reglage-2-tampon-video",
        h2: "Réglage 2 : Augmenter la mémoire tampon (Buffer Size)",
        paragraphs: [
          "Dans Atlas Pro ONTV ou IBO Player, la mémoire tampon définit le volume de vidéo téléchargé en avance avant la lecture :",
          "- 0 à 1 seconde (par défaut) : Zapping très rapide mais sensibilité extrême aux micro-coupures.",
          "- 3 à 5 secondes (recommandé) : Légère latence de 2 secondes au changement de chaîne, mais flux d'une stabilité absolue.",
          "Pour modifier ce réglage : Paramètres > Lecteur > Taille du Buffer > Choisissez 3 ou 5 secondes.",
        ],
      },
      {
        id: "reglage-3-decodage-materiel",
        h2: "Réglage 3 : Activer le décodage matériel HW+",
        paragraphs: [
          "Par défaut, certains lecteurs utilisent le décodage logiciel (Software / SW), ce qui sature le processeur de votre TV. En basculant sur le décodage matériel (Hardware / HW+), le déchiffrement des flux 4K HEVC est confié à la puce graphique dédiée de votre téléviseur, garantissant 60 images par seconde sans aucune surchauffe.",
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Augmenter la taille du tampon vidéo (Buffer)",
        instruction:
          "Dans les paramètres de votre application, modifiez le paramètre 'Buffer Size' pour le passer de 0 seconde à 3 ou 5 secondes.",
        image: {
          url: "/images/tutorials/resoudre-buffering-atlas-pro/iptv-player-buffer-size-settings.webp",
          alt: "Réglage de la mémoire tampon vidéo dans les paramètres du lecteur",
          caption: "Étape 1 : Configurez un pré-chargement vidéo de 3 à 5 secondes.",
          placeholderLabel: "Menu Réglage Buffer Lecteur",
        },
      },
      {
        stepNumber: 2,
        title: "Activer le décodeur Hardware (HW+)",
        instruction:
          "Vérifiez que le décodeur vidéo est configuré sur 'Hardware' ou 'VLC Native' dans les préférences du lecteur.",
        image: {
          url: "/images/tutorials/resoudre-buffering-atlas-pro/hardware-decoding-hw-smart-tv-player.webp",
          alt: "Sélection du décodage matériel Hardware HW+ sur TV",
          caption: "Étape 2 : Confiez le rendu à la puce graphique de votre téléviseur.",
          placeholderLabel: "Menu Décodeur Vidéo HW+",
        },
      },
      {
        stepNumber: 3,
        title: "Brancher en câble Ethernet direct",
        instruction:
          "Désactivez le Wi-Fi de votre équipement et branchez un câble RJ45 direct relié à votre box ou à un adaptateur CPL.",
        image: {
          url: "/images/tutorials/resoudre-buffering-atlas-pro/smart-tv-cable-ethernet-rj45.webp",
          alt: "Raccordement par câble Ethernet RJ45 sur téléviseur",
          caption: "Étape 3 : Éliminez 100 % des interférences radioélectriques.",
          placeholderLabel: "Schéma Câblage Ethernet TV",
        },
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
      "installer-atlas-pro-sur-tv-samsung",
      "installer-atlas-pro-sur-fire-stick",
    ],
    seoTitle: "Résoudre Coupures & Buffering Atlas Pro | 5 Réglages Clés",
    seoDescription:
      "Flux Atlas Pro qui fige ou saccade ? 5 solutions immédiates : réglage du buffer à 3s, décodage matériel HW+, câble Ethernet et DNS Cloudflare sans coupure.",
    faq: [
      {
        question: "Quel débit internet minimum faut-il pour regarder Atlas Pro en 4K sans coupure ?",
        answer:
          "Un débit stable de 25 Mbps est recommandé pour les chaînes 4K UHD. Pour les chaînes Full HD standard, une connexion de 10 à 15 Mbps est amplement suffisante.",
      },
      {
        question: "Pourquoi les coupures surviennent-elles uniquement pendant les grands matchs de football ?",
        answer:
          "Aux heures de grands matchs, les fournisseurs d'accès internet saturent leurs passerelles locales et brident le trafic vidéo UDP. Configurer les DNS Cloudflare 1.1.1.1 ou utiliser un protocole chiffré permet d'éviter ce goulet d'étranglement.",
      },
    ],
  },
  {
    id: "tut-liste-chaines",
    slug: "liste-chaines-bouquet-atlas-pro",
    title: "Liste des Chaînes Atlas Pro : Bouquets TV, VOD et 4K",
    category: "account",
    categoryLabel: "Abonnement & Activation Codes",
    tags: ["Liste des chaînes", "Bouquet France", "Sport 4K", "VOD", "M3U"],
    excerpt:
      "Explorez le répertoire complet des chaînes Atlas Pro : direct TNT, bouquets sportifs en 4K/50fps, cinéma premium et catalogue de plus de 50 000 films et séries en VOD.",
    readingTime: "7 min",
    wordCount: 1400,
    publishedAt: "2026-10-27",
    updatedAt: "2026-10-27",
    author: {
      name: "Équipe Technique Atlas Pro",
      role: "Architecte Réseau & Support IPTV",
    },
    mainImage: {
      url: "/images/tutorials/installer-atlas-pro-tv-samsung/maxresdefault.jpg",
      alt: "Interface de navigation dans la liste des chaînes et bouquets Atlas Pro ONTV",
      caption: "L'application Atlas Pro classe vos chaînes par pays, catégorie et résolution vidéo.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "La liste des chaînes Atlas Pro regroupe plus de 10 000 chaînes internationales en direct et 50 000 films et séries en VOD. Elle comprend l'intégralité du bouquet français (TNT, Canal+, beIN Sports, RMC Sport, DAZN, Eurosport en FHD et 4K 50 FPS) ainsi que les bouquets internationaux d'Europe, du Maghreb et d'Amérique. La playlist est mise à jour quotidiennement et accessible via l'application officielle Atlas Pro ONTV, par lien M3U ou via API Xtream Codes.",
    keyTakeaways: [
      "Plus de 10 000 chaînes directes avec flux de secours (Backups 1, 2 et 3) pour zéro écran noir.",
      "Chaînes de sport diffusées en 50 images par seconde (50 FPS) et 4K UHD sans saccades.",
      "Catalogue VOD de 50 000+ titres avec choix des langues audio et sous-titres français.",
      "Guide électronique des programmes (EPG) interactif sur 7 jours et fonction Replay.",
    ],
    tableOfContents: [
      { id: "composition-bouquets-atlas-pro", title: "Composition générale des bouquets", level: 2 },
      { id: "bouquet-france-sport-cinema", title: "Bouquet France : TNT, Sport & Cinéma", level: 2 },
      { id: "bouquets-internationaux", title: "Bouquets Internationaux & Étrangers", level: 2 },
      { id: "catalogue-vod-series", title: "Catalogue Films & Séries VOD", level: 2 },
      { id: "formats-acces-m3u-xtream", title: "Accès M3U, Xtream Codes et Application", level: 2 },
      { id: "faq-liste-chaines", title: "Questions Fréquentes sur les Chaînes", level: 2 },
    ],
    body: [
      "Avant de souscrire un abonnement [Atlas Pro 12 Mois](/plans-tarifs/atlas-pro-12-mois) ou pour découvrir toutes les options de votre offre active, découvrez la composition exhaustive de notre grille de diffusion 2026.",
      "L'application officielle [Atlas Pro ONTV](/telecharger/atlas-pro-ontv) organise ce catalogue volumineux de manière intuitive avec un moteur de recherche instantané, des favoris personnalisables et un guide des programmes (EPG) mis à jour en temps réel.",
    ],
    sections: [
      {
        id: "composition-bouquets-atlas-pro",
        h2: "1. Composition générale et caractéristiques des flux",
        intro:
          "Les serveurs Atlas Pro disposent de nœuds de distribution CDN haute disponibilité pour assurer une diffusion fluide en direct :",
        table: {
          headers: ["Catégorie de Bouquet", "Nombre de Canaux", "Résolution Vidéo", "Fréquence d'image", "Fonctionnalités incluses"],
          rows: [
            ["France Généraliste & TNT", "120+ chaînes", "FHD 1080p / 4K UHD", "50 FPS natif", "EPG 7j + Replay direct"],
            ["France Sport & Événements", "85+ chaînes", "4K Ultra HD & FHD", "50 FPS fluide", "Multi-flux & Backups"],
            ["France Cinéma & Séries", "60+ chaînes", "Full HD 1080p", "50 FPS", "Pistes VF et VOSTFR"],
            ["Bouquets Internationaux", "9 000+ chaînes", "4K, FHD & HD", "25 / 50 FPS", "Classés par pays"],
            ["VOD Films & Documentaires", "35 000+ titres", "4K UHD & 1080p", "24 / 60 FPS", "Multi-audio & Subtitles FR"],
            ["VOD Séries TV complètes", "15 000+ saisons", "Full HD 1080p", "24 FPS", "Épisodes classés par saison"],
          ],
        },
        callout: {
          type: "tip",
          title: "Flux sportifs en 50 FPS réels",
          text: "Pour les événements à haute vitesse comme le football ou les sports mécaniques, nos flux diffusent en 50 images par seconde pour éliminer tout flou de mouvement sur grand écran.",
        },
      },
      {
        id: "bouquet-france-sport-cinema",
        h2: "2. Bouquet France : TNT, Sport et Cinéma Premium",
        paragraphs: [
          "Le bouquet français est le cœur de l'offre Atlas Pro, conçu pour répondre aux attentes des téléspectateurs les plus exigeants :",
          "- **Chaînes Nationales & TNT** : TF1 4K, France 2 4K, France 3 Régions, M6 4K, Arte, W9, TMC, et l'ensemble des canaux de la TNT en qualité Full HD sans compression.",
          "- **Bouquet Sport Direct** : beIN Sports 1 à 10, Canal+ Sport, Canal+ Foot, Canal+ 360, RMC Sport 1 et 2, Eurosport 1 et 2, DAZN 1 et DAZN 2, Automoto, Equidia, chaînes événementielles PPV.",
          "- **Cinéma & Séries** : Canal+ Grand Écran, Canal+ Box Office, Ciné+ Premier, Frisson, Émotion, Famiz, OCS, Paramount Channel, Action, Polar+.",
          "- **Jeunesse & Découverte** : Disney Channel, Cartoon Network, Nickelodeon, National Geographic Wild, Discovery Channel, Planète+, Science & Vie TV.",
        ],
      },
      {
        id: "bouquets-internationaux",
        h2: "3. Bouquets Internationaux et Mondiaux",
        paragraphs: [
          "Atlas Pro propose une couverture planétaire avec des flux dédiés pour chaque communauté :",
          "- **Europe** : Belgique (RTBF, RTL TVI), Suisse (RTS 1 & 2), Espagne (Movistar+, LaLiga), Italie (Sky Italia, DAZN Italia), Portugal (Sport TV, Benfica TV), Royaume-Uni (Sky Sports, TNT Sports UK), Allemagne (Sky Sport DE).",
          "- **Monde Arabe & Maghreb** : Bein Sports MENA (flux arabe & anglais 4K), MBC HD, OSN, Al Jazeera, chaînes nationales du Maroc (SNRT), d'Algérie (ENTV) et de Tunisie.",
          "- **Amériques & Afrique** : États-Unis (ESPN, NBC Sports, HBO), Canada (TSN, TVA Sports, RDS), chaînes francophones d'Afrique subsaharienne (Canal+ Afrique, RTI, CRTV).",
        ],
      },
      {
        id: "catalogue-vod-series",
        h2: "4. Catalogue Films et Séries VOD",
        paragraphs: [
          "Le catalogue à la demande (VOD) d'Atlas Pro est actualisé plusieurs fois par semaine avec les dernières sorties cinéma et séries télévisées :",
          "- **Films Récents** : Ajout des nouveautés quelques semaines après leur sortie en salle, disponibles en 4K UHD avec son Dolby Digital 5.1.",
          "- **Séries Télévisées** : Saisons complètes des plus grandes plateformes de streaming avec choix des langues audio (VF ou VO) et sous-titres synchronisés.",
          "- **Documentaires & Spectacles** : Concerts, documentaires animaliers et scientifiques, spectacles d'humour en haute résolution.",
        ],
        callout: {
          type: "info",
          title: "Comment signaler un lien de chaîne ou film défaillant ?",
          text: "Notre support technique surveille les flux en continu. Si un canal présente un souci temporaire, utilisez le serveur de backup ou [ouvrez un ticket d'assistance](/ouvrir-ticket) pour un traitement prioritaire.",
        },
      },
      {
        id: "formats-acces-m3u-xtream",
        h2: "5. Formats de connexion : Application, M3U et Xtream Codes",
        paragraphs: [
          "Votre abonnement est utilisable sur une multitude d'équipements grâce aux formats universels pris en charge :",
          "- **Application Officielle Atlas Pro ONTV** : La solution la plus conviviale. Saisissez simplement votre code d'activation à 12 chiffres pour charger la liste complète automatiquement.",
          "- **Lien M3U avec options** : Permet de télécharger la playlist complète sur des lecteurs compatibles comme VLC, Kodi ou Perfect Player. Vous pouvez filtrer les bouquets pour alléger le chargement.",
          "- **API Xtream Codes** : Renseignez le serveur URL, votre nom d'utilisateur et votre mot de passe sur des applications tierces telles qu'IBO Player, IPTV Smarters Pro ou TiviMate.",
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Ouvrir l'application Atlas Pro",
        instruction:
          "Lancez Atlas Pro ONTV ou votre lecteur configuré sur votre téléviseur ou boîtier TV.",
      },
      {
        stepNumber: 2,
        title: "Sélectionner la catégorie TV en Direct",
        instruction:
          "Naviguez dans le menu principal et cliquez sur Live TV pour afficher la liste des pays et bouquets classés.",
      },
      {
        stepNumber: 3,
        title: "Utiliser la recherche rapide ou les favoris",
        instruction:
          "Tapez le nom de votre chaîne préférée dans la barre de recherche ou ajoutez-la à vos favoris avec la télécommande.",
      },
      {
        stepNumber: 4,
        title: "Consulter le guide EPG",
        instruction:
          "Appuyez sur la touche EPG ou Guide de votre télécommande pour visualiser le programme en cours et les horaires de la soirée.",
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "installer-atlas-pro-sur-freebox",
      "installer-atlas-pro-sur-tv-samsung",
      "resoudre-coupure-buffering-atlas-pro",
      "retrouver-entrer-code-atlas-pro-ontv",
    ],
    seoTitle: "Liste des Chaînes Atlas Pro : Bouquets TV, VOD & 4K 2026",
    seoDescription:
      "Découvrez la liste complète des chaînes Atlas Pro : bouquets français en direct, sport 4K, cinéma, séries et VOD illimitée. Guide des catégories et M3U.",
    faq: [
      {
        question: "Combien de chaînes compte la liste officielle Atlas Pro ?",
        answer:
          "La liste officielle comprend plus de 10 000 chaînes en direct et plus de 50 000 films et séries en VOD, couvrant les bouquets français, européens, arabes et internationaux.",
      },
      {
        question: "Les chaînes de sport sont-elles diffusées en 50 FPS ?",
        answer:
          "Oui, la majorité des chaînes de sport françaises et européennes (beIN Sports, Canal+ Sport, RMC Sport, DAZN) sont encodées en 50 images par seconde (50 FPS) pour une fluidité parfaite sur grand écran.",
      },
      {
        question: "Peut-on masquer ou filtrer les bouquets de chaînes superflus ?",
        answer:
          "Oui, depuis les paramètres de l'application Atlas Pro ONTV ou via votre lecteur Xtream Codes, vous pouvez masquer les catégories de pays que vous ne regardez pas pour simplifier votre zapping.",
      },
      {
        question: "Comment obtenir l'URL de playlist M3U officielle ?",
        answer:
          "Votre lien M3U et vos identifiants Xtream Codes vous sont transmis automatiquement par e-mail immédiatement après la confirmation de votre commande sur notre boutique officielle.",
      },
    ],
  },
];

export const MOCK_TUTORIALS_EXTENDED: Tutorial[] = [
  ...BASE_TUTORIALS,
  ...TROUBLESHOOTING_TUTORIALS,
  ...DEVICE_TUTORIALS,
];

export function getAllExtendedTutorials(): Tutorial[] {
  return MOCK_TUTORIALS_EXTENDED;
}

export function getExtendedTutorialBySlug(slug: string): Tutorial | undefined {
  return MOCK_TUTORIALS_EXTENDED.find((tut) => tut.slug === slug);
}

export function getExtendedRelatedTutorials(slugs: string[]): Tutorial[] {
  return MOCK_TUTORIALS_EXTENDED.filter((tut) => slugs.includes(tut.slug));
}

export function getTutorialsByCategory(category: string): Tutorial[] {
  if (category === "all" || !category) return MOCK_TUTORIALS_EXTENDED;
  return MOCK_TUTORIALS_EXTENDED.filter((tut) => tut.category === category);
}

export function getTutorialsByTag(tag: string): Tutorial[] {
  return MOCK_TUTORIALS_EXTENDED.filter((tut) => tut.tags.includes(tag));
}

export function getCategoryBySlug(slug: string): TutorialCategory | undefined {
  return TUTORIAL_CATEGORIES.find((cat) => cat.slug === slug);
}

export function getCategoryById(id: string): TutorialCategory | undefined {
  return TUTORIAL_CATEGORIES.find((cat) => cat.id === id);
}

export function getAllIndexableCategories(): TutorialCategory[] {
  return TUTORIAL_CATEGORIES.filter((cat) => cat.id !== "all");
}
