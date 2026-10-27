import type { Tutorial } from "./mock-data-tutorials";

const AUTHOR = {
  name: "Équipe Technique Atlas Pro",
  role: "Architecte Réseau & Support IPTV",
};

export const TROUBLESHOOTING_TUTORIALS: Tutorial[] = [
  {
    id: "tut-code-invalide",
    slug: "atlas-pro-code-invalide-que-faire",
    title: "Code Atlas Pro Invalide : 6 Causes et Solutions Immédiates",
    category: "troubleshooting",
    categoryLabel: "Dépannage & Erreurs Serveur",
    tags: ["Code d'activation", "Code invalide", "Atlas Pro ONTV", "Erreur Serveur"],
    excerpt:
      "Le message « Code invalide » s'affiche à la connexion ? Voici les 6 causes les plus fréquentes (saisie, version de l'application, abonnement) et comment les corriger en quelques minutes.",
    readingTime: "5 min",
    wordCount: 1050,
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    author: AUTHOR,
    mainImage: {
      url: "/images/tutorials/atlas-pro-erreur-serveur.webp",
      alt: "Message d'erreur code invalide dans l'application Atlas Pro ONTV",
      caption: "Le message « Code invalide » a presque toujours une cause simple à corriger.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "Si Atlas Pro affiche « Code invalide » : retapez le code sans espace (attention 0/O et 1/I), vérifiez que vous utilisez la bonne application (ONTV, Max, IBO...), mettez l'application à jour, contrôlez la date et l'heure de l'appareil, puis vérifiez que votre abonnement n'est pas expiré. Si l'erreur persiste, le support renvoie vos identifiants en environ 15 minutes.",
    keyTakeaways: [
      "Un code est lié à un type d'application : un code Atlas Pro ONTV ne fonctionne pas dans un lecteur tiers.",
      "Les espaces involontaires et les confusions 0/O sont la première cause d'erreur.",
      "Une application obsolète peut refuser un code pourtant valide.",
      "Un code expiré affiche souvent le même message qu'un code erroné.",
    ],
    tableOfContents: [
      { id: "saisie-code", title: "1. Vérifier la saisie du code", level: 2 },
      { id: "bonne-application", title: "2. Utiliser la bonne application", level: 2 },
      { id: "version-application", title: "3. Mettre à jour l'application", level: 2 },
      { id: "date-heure", title: "4. Contrôler la date et l'heure de l'appareil", level: 2 },
      { id: "abonnement-expire", title: "5. Vérifier la validité de l'abonnement", level: 2 },
    ],
    body: [
      "Le message « Code invalide » est l'une des erreurs les plus courantes après une commande. Dans la grande majorité des cas, il ne s'agit pas d'un problème serveur mais d'un détail de saisie ou de compatibilité.",
      "Suivez les vérifications ci-dessous dans l'ordre : chacune prend moins de deux minutes.",
    ],
    sections: [
      {
        id: "saisie-code",
        h2: "1. Vérifier la saisie et les pièges typographiques fréquents",
        callout: {
          type: "tip",
          title: "Piège fréquent : Confusions entre chiffres et lettres",
          text: "Sur une télécommande virtuelle de téléviseur, la confusion la plus fréquente concerne le **chiffre 0** et la **lettre O**, ainsi que le **chiffre 1** et la **lettre I**. Nous vous recommandons de copier-coller vos accès depuis l'e-mail de confirmation ou d'utiliser l'application mobile télécommande de votre smartphone pour une saisie sans faute.",
        },
        paragraphs: [
          "Le message d'erreur **« Code invalide »** (ou « Invalid Code - Please check your credentials ») se déclenche dès lors qu'un seul caractère transmis ne correspond pas aux tables de notre serveur d'authentification.",
          "Veillez à ne laisser **aucun espace vide** au début ou à la fin du code à 12 chiffres lors de la validation.",
        ],
      },
      {
        id: "bonne-application",
        h2: "2. Distinguer code à 12 chiffres et identifiants Xtream Codes",
        paragraphs: [
          "Il existe deux protocoles de connexion distincts selon le logiciel utilisé sur votre écran :",
          "- **L'application officielle Atlas Pro ONTV :** nécessite exclusivement votre **code direct à 12 chiffres**. À installer sur boîtier ou clé TV via notre [guide Fire Stick](/tutoriels/installer-atlas-pro-sur-fire-stick) ou [Android TV](/tutoriels/installer-atlas-pro-sur-android-tv).",
          "- **Les lecteurs tiers (IBO Player, TiviMate, IPTV Smarters) :** refusent le code à 12 chiffres brut. Ils requièrent vos identifiants **Xtream Codes API** : *URL du serveur (http://...)*, *Nom d'utilisateur* et *Mot de passe*. Retrouvez les détails sur notre [comparatif des lecteurs alternatifs](/tutoriels/alternatives-atlas-pro-tv-non-compatible-ibo-player-smarters-tivimate).",
        ],
        table: {
          caption: "Méthode d'authentification requise selon l'application installée",
          headers: ["Application Utilisée", "Type d'Identifiant Requis", "Où le trouver ?", "Action en cas d'erreur"],
          rows: [
            [
              "Atlas Pro ONTV (V4)",
              "Code numérique à 12 chiffres",
              "E-mail d'activation officiel",
              "Retaper sans espace ou [télécharger la version officielle](/telecharger)."
            ],
            [
              "IBO Player (Samsung / LG)",
              "Adresse MAC + Device Key puis Xtream Codes",
              "Écran d'accueil de l'application IBO",
              "Consulter notre [guide d'installation Samsung TV](/tutoriels/installer-atlas-pro-sur-tv-samsung)."
            ],
            [
              "TiviMate / IPTV Smarters",
              "Serveur URL + Username + Password",
              "E-mail de livraison section Xtream API",
              "Vérifier le port du serveur (souvent :8080) et le protocole HTTP."
            ]
          ]
        },
      },
      {
        id: "version-application",
        h2: "3. Mettre à jour l'application officielle vers la dernière version",
        paragraphs: [
          "Nos serveurs déploient régulièrement des correctifs de sécurité TLS. Si vous utilisez une ancienne version d'Atlas Pro ONTV, vos requêtes peuvent être rejetées avec le statut « Code invalide ».",
          "Pour mettre à jour sur Fire Stick ou boîtier Android : lancez l'application **Downloader**, saisissez le code officiel **822648** et procédez à l'écrasement de l'ancienne version.",
        ],
      },
      {
        id: "date-heure",
        h2: "4. Synchroniser l'horloge et le fuseau horaire de l'appareil",
        paragraphs: [
          "Les jetons de session (tokens d'authentification) intègrent une signature horodatée universelle (UTC). Si l'horloge interne de votre Smart TV ou de votre box a accumulé un décalage supérieur à 5 minutes, le serveur rejette la poignée de main cryptographique.",
          "Rendez-vous dans **Paramètres > Système > Date et Heure** de votre téléviseur et cochez impérativement **Date et heure automatiques (fournies par le réseau)**.",
        ],
      },
      {
        id: "abonnement-expire",
        h2: "5. Vérifier si votre période d'accès est arrivée à échéance",
        paragraphs: [
          "Lorsque votre abonnement atteint son terme, le système renvoie le statut de code invalide. Si votre compte a plus de 12 mois, rendez-vous sur notre page [renouvellement de code Atlas Pro expiré](/tutoriels/atlas-pro-code-expire-comment-renouveler) pour réactiver votre ligne en quelques minutes sans perdre vos favoris.",
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Copier le code depuis l'e-mail",
        instruction: "Ouvrez l'e-mail de confirmation et copiez le code exactement, sans espace.",
      },
      {
        stepNumber: 2,
        title: "Choisir le bon mode de connexion",
        instruction:
          "Code à 12 chiffres pour les applications Atlas Pro ; identifiants Xtream Codes pour les lecteurs tiers.",
      },
      {
        stepNumber: 3,
        title: "Mettre à jour puis relancer",
        instruction: "Installez la dernière version, vérifiez la date automatique et relancez l'application.",
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "retrouver-entrer-code-atlas-pro-ontv",
      "atlas-pro-code-expire-comment-renouveler",
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
    ],
    seoTitle: "Code Atlas Pro Invalide : 6 Solutions Rapides | Guide",
    seoDescription:
      "Message « Code invalide » sur Atlas Pro ONTV ? Saisie, version APK, date de l'appareil et abonnement : 6 solutions pas à pas pour réactiver votre accès.",
    faq: [
      {
        question: "Pourquoi mon code Atlas Pro tout neuf est-il refusé ?",
        answer:
          "Le plus souvent à cause d'un espace ou d'une confusion 0/O, ou parce que le code est saisi dans une application qui n'est pas celle pour laquelle il a été généré.",
      },
      {
        question: "Un code invalide peut-il être simplement expiré ?",
        answer:
          "Oui. Une application affiche parfois le même message pour un code erroné et pour un abonnement terminé. Vérifiez la date d'échéance de votre abonnement.",
      },
    ],
  },
  {
    id: "tut-code-expire",
    slug: "atlas-pro-code-expire-comment-renouveler",
    title: "Code Atlas Pro Expiré : Comment Renouveler Sans Réinstaller",
    category: "troubleshooting",
    categoryLabel: "Dépannage & Erreurs Serveur",
    tags: ["Code expiré", "Renouvellement", "Code d'activation", "Atlas Pro ONTV"],
    excerpt:
      "Plus de chaînes, écran vide ou message « abonnement expiré » ? Identifiez un code Atlas Pro expiré et réactivez votre accès en environ 15 minutes sans rien réinstaller.",
    readingTime: "4 min",
    wordCount: 900,
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    author: AUTHOR,
    mainImage: {
      url: "/atlaspro-interface.webp",
      alt: "Écran Atlas Pro ONTV indiquant un abonnement expiré à renouveler",
      caption: "Renouvelez votre code : aucune réinstallation n'est nécessaire.",
      width: 1280,
      height: 720,
    },
    directAnswer:
      "Un code Atlas Pro expiré se reconnaît à l'absence de chaînes ou au message d'abonnement terminé. Pour le réactiver : commandez un renouvellement, recevez le nouveau code par e-mail (environ 15 minutes), puis dans l'application ouvrez Paramètres > Compte > Se déconnecter et saisissez le nouveau code. Vos favoris et réglages sont conservés.",
    keyTakeaways: [
      "L'expiration est la première cause de perte soudaine de toutes les chaînes.",
      "Le renouvellement fournit un nouveau code : l'application reste en place.",
      "Vos favoris et paramètres sont conservés après reconnexion.",
      "Indiquez votre ancien code lors du paiement pour prolonger la ligne existante.",
    ],
    tableOfContents: [
      { id: "reconnaitre-expiration", title: "1. Comment identifier formellement un abonnement expiré ?", level: 2 },
      { id: "renouveler-code", title: "2. Choisir sa formule de renouvellement officiel", level: 2 },
      { id: "saisir-nouveau-code", title: "3. Saisir le nouveau code dans l'application", level: 2 },
    ],
    body: [
      "Lorsque votre période d'abonnement se termine, l'application cesse de charger les chaînes. Ce n'est pas une panne : il suffit de renouveler.",
    ],
    sections: [
      {
        id: "reconnaitre-expiration",
        h2: "1. Comment identifier formellement un abonnement expiré ?",
        callout: {
          type: "info",
          title: "Astuce Conservation : Ne désinstallez jamais votre application",
          text: "Pour renouveler votre accès, **vous n'avez absolument pas besoin de désinstaller l'application** ni de refaire la configuration initiale. Tous vos réglages (décodeur matériel, liste de favoris, personnalisation des catégories) sont sauvegardés localement dans la mémoire de votre TV ou Fire Stick.",
        },
        paragraphs: [
          "Lorsque la période de validité de votre ligne arrive à son terme, nos clusters d'authentification refusent l'accès aux flux vidéo. Les symptômes les plus fréquents sont :",
          "- L'apparition du message **« Abonnement expiré »** ou **« Account Expired / Please Renew »**.",
          "- Une liste de chaînes qui s'affiche vide avec 0 flux détecté.",
          "- Une redirection vers l'écran de connexion initial demandant un code à 12 chiffres.",
          "Pour lever tout doute, ouvrez **Paramètres > Mon Compte (Account Info)** dans l'application : la ligne *Expiration Date* indique précisément l'heure et la date d'échéance de votre session.",
        ],
      },
      {
        id: "renouveler-code",
        h2: "2. Choisir sa formule de renouvellement officiel",
        paragraphs: [
          "Le renouvellement s'effectue directement en ligne avec livraison instantanée par e-mail en moins de 15 minutes. Choisissez la durée adaptée à vos habitudes de visionnage :",
        ],
        table: {
          caption: "Formules de renouvellement officiel Atlas Pro avec reconnexion instantanée",
          headers: ["Formule d'Abonnement", "Tarif Garanti", "Activation & Flux 4K", "Lien de Commande Immédiate"],
          rows: [
            [
              "Abonnement 12 Mois (Recommandé)",
              "40 € / an",
              "Livraison en 15 min, 10 000+ flux 4K/FHD, anti-freeze inclus",
              "[Renouveler 12 Mois (40€)](/plans-tarifs/atlas-pro-12-mois)"
            ],
            [
              "Abonnement 6 Mois",
              "30 € / semestre",
              "Accès complet 4K HDR, VOD illimitée, support WhatsApp 7j/7",
              "[Renouveler 6 Mois (30€)](/plans-tarifs/atlas-pro-6-mois)"
            ],
            [
              "Abonnement 3 Mois",
              "20 € / trimestre",
              "Formule découverte sans engagement, compatible tous écrans",
              "[Renouveler 3 Mois (20€)](/plans-tarifs/atlas-pro-3-mois)"
            ]
          ]
        },
      },
      {
        id: "saisir-nouveau-code",
        h2: "3. Saisir le nouveau code d'activation dans l'application",
        paragraphs: [
          "Dès réception de votre e-mail de confirmation contenant votre nouveau code à 12 chiffres :",
          "1. Ouvrez votre application Atlas Pro ONTV sur [Smart TV Samsung](/tutoriels/installer-atlas-pro-sur-tv-samsung), [LG webOS](/tutoriels/installer-atlas-pro-sur-lg-smart-tv) ou [Amazon Fire Stick](/tutoriels/installer-atlas-pro-sur-fire-stick).",
          "2. Accédez à **Paramètres > Compte > Se déconnecter (Logout)**.",
          "3. Saisissez votre nouveau code à 12 chiffres sans espace en veillant à ne pas confondre le chiffre 0 et la lettre O.",
          "4. Cliquez sur **Connexion** : l'ensemble des chaînes et de la vidéothèque se réactualise immédiatement avec vos favoris préservés !",
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Vérifier la date d'échéance",
        instruction: "Ouvrez Paramètres > Compte pour confirmer que l'abonnement est terminé.",
      },
      {
        stepNumber: 2,
        title: "Commander le renouvellement",
        instruction: "Sélectionnez la durée et renseignez l'ancien code lors du paiement.",
      },
      {
        stepNumber: 3,
        title: "Se reconnecter avec le nouveau code",
        instruction: "Déconnectez-vous depuis Paramètres > Compte puis entrez le nouveau code.",
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "atlas-pro-code-invalide-que-faire",
      "retrouver-entrer-code-atlas-pro-ontv",
      "atlas-pro-chaines-manquantes-liste-vide",
    ],
    seoTitle: "Code Atlas Pro Expiré : Renouveler Sans Réinstaller | Guide",
    seoDescription:
      "Code Atlas Pro expiré ? Reconnaissez l'expiration et renouvelez votre accès en 15 minutes sans réinstaller l'application, favoris conservés.",
    faq: [
      {
        question: "Perd-on ses favoris après un renouvellement ?",
        answer:
          "Non. En vous reconnectant avec le nouveau code depuis Paramètres > Compte, vos favoris et réglages sont conservés.",
      },
      {
        question: "Combien de temps dure la réactivation ?",
        answer: "Environ 15 minutes après validation de la commande, le nouveau code est envoyé par e-mail.",
      },
    ],
  },
  {
    id: "tut-ecran-noir",
    slug: "atlas-pro-ecran-noir-chargement-infini",
    title: "Atlas Pro Écran Noir ou Chargement Infini : Solutions",
    category: "troubleshooting",
    categoryLabel: "Dépannage & Erreurs Serveur",
    tags: ["Écran noir", "Chargement infini", "Erreur Serveur", "Buffering"],
    excerpt:
      "Écran noir, roue qui tourne sans fin ou chaîne qui ne démarre pas ? Méthode en 5 étapes pour retrouver l'image : réseau, cache, application et configuration.",
    readingTime: "5 min",
    wordCount: 980,
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    author: AUTHOR,
    mainImage: {
      url: "/images/tutorials/resoudre-buffering-atlas-pro.webp",
      alt: "Écran noir avec indicateur de chargement sur une chaîne Atlas Pro",
      caption: "Un écran noir s'explique presque toujours par le réseau ou le cache.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "En cas d'écran noir ou de chargement infini sur Atlas Pro : redémarrez l'appareil et la box internet, testez une autre chaîne, videz le cache de l'application (Paramètres > Applications > Atlas Pro > Vider le cache), passez en Ethernet ou testez en partage 4G pour écarter un blocage du fournisseur d'accès, puis réinstallez la dernière version si besoin.",
    keyTakeaways: [
      "Testez d'abord plusieurs chaînes pour isoler un problème de flux ou de réseau.",
      "Vider le cache résout la majorité des chargements infinis.",
      "Un test en partage de connexion mobile identifie un blocage du fournisseur d'accès.",
      "Un débit stable de 15 à 25 Mbps est recommandé en FHD/4K.",
    ],
    tableOfContents: [
      { id: "tester-chaines", title: "1. Diagnostic initial : Isoler le flux ou la passerelle", level: 2 },
      { id: "son-sans-image", title: "2. Son présent mais écran noir : Décodage matériel H.265", level: 2 },
      { id: "tableau-diagnostic-ecran-noir", title: "3. Tableau de diagnostic et solutions rapides", level: 2 },
      { id: "vider-cache", title: "4. Vider le cache de l'application", level: 2 },
      { id: "tester-reseau", title: "5. Tester le réseau en partage 4G/5G", level: 2 },
    ],
    body: [
      "Un écran noir ou un chargement qui ne se termine jamais ne signifie pas forcément que le service est en panne. Voici la méthode de diagnostic la plus rapide.",
    ],
    sections: [
      {
        id: "tester-chaines",
        h2: "1. Diagnostic initial : Isoler le flux ou la passerelle",
        paragraphs: [
          "Lorsque l'image refuse de s'afficher, la première démarche consiste à zapper sur au moins trois catégories différentes : une chaîne d'information en continu SD, une chaîne Full HD et un film VOD 4K.",
          "Si le problème est circonscrit à un flux unique, il s'agit d'une maintenance temporaire sur le serveur source. En revanche, si **l'ensemble des chaînes reste sur un écran noir**, le blocage provient soit de votre décodeur vidéo matériel (problème de codec), soit d'un filtrage réseau imposé par votre box internet.",
        ],
      },
      {
        id: "son-sans-image",
        h2: "2. Son présent mais écran noir : Décodage matériel H.265 (HEVC)",
        callout: {
          type: "tip",
          title: "Incompatibilité de Codec : Pourquoi vous entendez le son sans avoir l'image",
          text: "Les flux Ultra HD 4K modernes sont encodés en **HEVC / H.265 (Main 10 profile)**. Si votre lecteur multimédia utilise un décodage logiciel (Software Decoding), le processeur de votre téléviseur est incapable de restituer les trames à 60 images par seconde. L'activation du décodeur **Hardware HW+** délègue le calcul directement à la puce graphique de votre écran et résout instantanément ce symptôme.",
        },
        paragraphs: [
          "Si vous entendez parfaitement les commentateurs ou la bande sonore mais que l'écran reste obstinément noir, rendez-vous dans les paramètres de votre lecteur (Atlas Pro ONTV, [IBO Player](/tutoriels/installer-atlas-pro-sur-tv-samsung) ou [TiviMate](/tutoriels/installer-atlas-pro-sur-fire-stick)) :",
          "- Dans **Paramètres > Lecteur Vidéo (Player Settings)**, sélectionnez le décodeur **Hardware (HW+)** à la place de Software (SW).",
          "- Si vous êtes sur un lecteur alternatif, activez le moteur de rendu **ExoPlayer** ou **VLC**, réputés pour leur compatibilité universelle avec les codecs 10-bit.",
        ],
      },
      {
        id: "tableau-diagnostic-ecran-noir",
        h2: "3. Tableau de diagnostic et solutions rapides pour écran noir",
        table: {
          caption: "Matrice de dépannage selon les symptômes visuels constatés sur Atlas Pro",
          headers: ["Symptôme Constaté", "Cause Technique Probable", "Test Immédiat", "Action Recommandée"],
          rows: [
            [
              "Son audible mais écran totalement noir",
              "Incompatibilité du décodeur vidéo avec le profil HEVC / H.265 4K",
              "Le flux audio AAC / Dolby est décodé mais le GPU n'affiche pas la vidéo",
              "Activer le décodeur **Hardware HW+** dans les réglages du lecteur."
            ],
            [
              "Écran noir direct sans aucun son",
              "Filtrage DNS de l'opérateur ou rejet de la poignée de main TLS",
              "Aucune chaîne ni VOD ne se lance sur le bouquet entier",
              "Basculer sur les [DNS Cloudflare 1.1.1.1](/tutoriels/atlas-pro-ne-peut-pas-se-connecter-au-serveur) ou tester en partage 4G."
            ],
            [
              "Roue de chargement infinie bloquée à 0 %",
              "Cache de métadonnées saturé ou délai de préchargement expiré",
              "L'interface de l'application réagit mais le buffer ne se remplit pas",
              "Forcer l'arrêt de l'application et [vider le cache applicatif](#vider-cache)."
            ],
            [
              "Freeze soudain après quelques secondes de vidéo",
              "Saturation de la mémoire RAM du téléviseur ou surchauffe du boîtier",
              "L'application devient très lente lors de la navigation télécommande",
              "Débrancher la TV pendant 60 secondes pour purger la mémoire RAM."
            ]
          ]
        },
      },
      {
        id: "vider-cache",
        h2: "4. Vider le cache et purger les flux temporaires corrompus",
        paragraphs: [
          "Lorsque le téléviseur stocke trop de trames en cache, le décodeur vidéo s'engorge. Pour purger ce tampon temporaire sur [Fire TV Stick](/tutoriels/installer-atlas-pro-sur-fire-stick) ou [Android TV](/tutoriels/installer-atlas-pro-sur-android-tv) :",
          "Accédez à **Paramètres > Applications > Gérer les applications installées > Atlas Pro ONTV**, puis cliquez sur **Forcer l'arrêt** puis sur **Vider le cache** (attention : ne cliquez pas sur 'Effacer les données' afin de conserver votre code d'accès).",
        ],
      },
      {
        id: "tester-reseau",
        h2: "5. Tester le réseau en partage de connexion 4G/5G",
        paragraphs: [
          "Pour déterminer en 30 secondes si l'écran noir provient de votre box internet ou d'un filtrage FAI, activez le **partage de connexion (point d'accès mobile 4G/5G)** de votre smartphone.",
          "Connectez votre téléviseur à ce réseau Wi-Fi temporaire : si la chaîne démarre immédiatement avec l'image et le son, votre fournisseur d'accès internet bloque le flux sur votre ligne fixe. La solution définitive consiste à appliquer notre guide [DNS anti-bridage Cloudflare](/tutoriels/atlas-pro-ne-peut-pas-se-connecter-au-serveur).",
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Changer de chaîne",
        instruction: "Lancez deux ou trois chaînes différentes pour savoir si le problème est global.",
      },
      {
        stepNumber: 2,
        title: "Vider le cache",
        instruction: "Paramètres > Applications > Atlas Pro ONTV > Vider le cache, puis relancez.",
      },
      {
        stepNumber: 3,
        title: "Tester via un autre réseau",
        instruction: "Connectez l'appareil au partage 4G/5G pour identifier un blocage réseau.",
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "resoudre-coupure-buffering-atlas-pro",
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
      "atlas-pro-ontv-ne-s-ouvre-pas-ou-plante",
    ],
    seoTitle: "Atlas Pro Écran Noir ou Chargement Infini : 5 Solutions",
    seoDescription:
      "Écran noir ou chargement infini sur Atlas Pro ? Testez les chaînes, videz le cache, vérifiez le réseau et l'application : 5 étapes pour retrouver l'image.",
    faq: [
      {
        question: "Pourquoi l'écran reste noir alors que le son fonctionne ?",
        answer:
          "Il s'agit généralement d'un souci de décodage vidéo. Essayez de désactiver le décodage matériel ou de changer de lecteur dans les paramètres de l'application.",
      },
    ],
  },
  {
    id: "tut-chaines-manquantes",
    slug: "atlas-pro-chaines-manquantes-liste-vide",
    title: "Atlas Pro : Chaînes Manquantes ou Liste Vide, Que Faire ?",
    category: "troubleshooting",
    categoryLabel: "Dépannage & Erreurs Serveur",
    tags: ["Chaînes manquantes", "Liste vide", "Xtream Codes", "Code d'activation"],
    excerpt:
      "Liste de chaînes vide, catégories absentes ou chaînes qui ont disparu ? Causes (expiration, synchronisation, cache) et solutions pour retrouver tout votre bouquet.",
    readingTime: "4 min",
    wordCount: 850,
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    author: AUTHOR,
    mainImage: {
      url: "/images/tutorials/atlas-pro-erreur-serveur.webp",
      alt: "Liste de chaînes vide dans l'application Atlas Pro ONTV",
      caption: "Une liste vide se corrige le plus souvent par une resynchronisation.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "Si des chaînes manquent ou si la liste est vide : vérifiez d'abord que l'abonnement n'est pas expiré, puis actualisez la liste (Paramètres > Actualiser / Recharger), videz le cache de l'application, reconnectez-vous avec votre code et vérifiez le filtre ou le contrôle parental actif. En cas de persistance, contactez le support avec votre code.",
    keyTakeaways: [
      "Un abonnement expiré vide la liste des chaînes.",
      "Actualiser la liste et vider le cache corrige la plupart des cas.",
      "Un filtre de catégories ou un contrôle parental peut masquer des chaînes.",
    ],
    tableOfContents: [
      { id: "verifier-abonnement", title: "Vérifier l'abonnement", level: 2 },
      { id: "actualiser-liste", title: "Actualiser la liste", level: 2 },
      { id: "filtres", title: "Contrôler filtres et contrôle parental", level: 2 },
    ],
    body: [
      "Quand la liste de chaînes est vide ou incomplète, la cause se trouve presque toujours dans l'abonnement, la synchronisation ou un filtre.",
    ],
    sections: [
      {
        id: "verifier-abonnement",
        h2: "1. Distinguer compte expiré et défaut de synchronisation",
        callout: {
          type: "info",
          title: "Symptôme n°1 d'un compte arrivé à échéance",
          text: "Si l'ensemble de vos chaînes (tous pays et toutes catégories confondues) a subitement disparu pour laisser place à un écran totalement blanc ou vide, votre ligne a très probablement atteint sa date d'échéance. Consultez notre guide pour [identifier et renouveler un code expiré](/tutoriels/atlas-pro-code-expire-comment-renouveler).",
        },
        paragraphs: [
          "Avant de réinitialiser votre téléviseur ou votre lecteur, accédez à **Paramètres > Compte (Account Info)** dans Atlas Pro ONTV ou [IBO Player](/tutoriels/installer-atlas-pro-sur-tv-samsung).",
          "Vérifiez la ligne **Expire Date** : si la date est dépassée, aucune synchronisation ne pourra restaurer les flux sans prolongation de l'accès.",
        ],
      },
      {
        id: "actualiser-liste",
        h2: "2. Forcer la mise à jour de la playlist M3U / Xtream Codes",
        paragraphs: [
          "De nouvelles chaînes et films VOD 4K sont ajoutés chaque semaine à nos serveurs. Si votre application est restée en veille prolongée, elle conserve l'ancienne arborescence en mémoire cache.",
          "Pour réactualiser manuellement le bouquet :",
          "- Dans l'application, rendez-vous dans **Paramètres > Mettre à jour le contenu (Update Channels / Movies / Series)**.",
          "- Cliquez successivement sur **Actualiser les chaînes en direct** puis sur **Actualiser la VOD**.",
          "- Patientez jusqu'à l'affichage de la jauge à 100 % sans éteindre votre équipement.",
        ],
      },
      {
        id: "filtres",
        h2: "3. Contrôler les bouquets masqués et le code parental",
        paragraphs: [
          "Il arrive fréquemment qu'une fausse manipulation télécommande active un filtre de masquage ou le contrôle parental :",
          "- **Gestion des groupes :** Dans Paramètres > Gérer les catégories, vérifiez que les bouquets souhaités (France, Sport, Cinéma, Documentaires) sont bien cochés en statut « Visible ».",
          "- **Code PIN de déverrouillage :** Par défaut, le code d'accès parental configuré en usine sur nos serveurs est **0000** ou **1234**.",
        ],
        table: {
          caption: "Diagnostic des causes de disparition de chaînes sur Atlas Pro",
          headers: ["Anomalie Constatée", "Cause Identifiée", "Vérification", "Action Corrective"],
          rows: [
            [
              "Zéro chaîne détectée (tous bouquets)",
              "Abonnement arrivé à échéance",
              "Date dans Paramètres > Compte",
              "Consulter le guide [renouvellement](/tutoriels/atlas-pro-code-expire-comment-renouveler)."
            ],
            [
              "Catégories sport ou cinéma manquantes",
              "Filtre de masquage ou contrôle parental",
              "Paramètres > Gérer les groupes",
              "Saisir le code PIN 0000 et recocher les catégories."
            ],
            [
              "Nouvelles chaînes non visibles",
              "Cache de playlist obsolète",
              "Date de dernière mise à jour",
              "Lancer l'option Forcer l'actualisation de la playlist."
            ]
          ]
        },
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Contrôler l'échéance",
        instruction: "Paramètres > Compte : vérifiez la date de fin d'abonnement.",
      },
      {
        stepNumber: 2,
        title: "Actualiser la playlist",
        instruction: "Rechargez la liste, videz le cache puis reconnectez-vous.",
      },
    ],
    showExpiredAlert: true,
    relatedTutorialSlugs: [
      "atlas-pro-code-expire-comment-renouveler",
      "atlas-pro-ecran-noir-chargement-infini",
      "retrouver-entrer-code-atlas-pro-ontv",
    ],
    seoTitle: "Atlas Pro Chaînes Manquantes ou Liste Vide : Solutions",
    seoDescription:
      "Chaînes qui ont disparu ou liste vide sur Atlas Pro ? Vérifiez l'abonnement, actualisez la playlist et contrôlez les filtres : solutions pas à pas.",
    faq: [
      {
        question: "Pourquoi certaines catégories ne s'affichent-elles plus ?",
        answer:
          "Un filtre personnalisé ou un contrôle parental peut masquer des catégories. Réinitialisez les filtres dans les paramètres.",
      },
    ],
  },
  {
    id: "tut-application-plante",
    slug: "atlas-pro-ontv-ne-s-ouvre-pas-ou-plante",
    title: "Atlas Pro ONTV Ne S'ouvre Pas ou Plante : Solutions",
    category: "troubleshooting",
    categoryLabel: "Dépannage & Erreurs Serveur",
    tags: ["Application plante", "Atlas Pro ONTV", "Downloader", "Fire TV Stick"],
    excerpt:
      "L'application se ferme toute seule ou refuse de démarrer ? Videz le cache, libérez de la mémoire et réinstallez la dernière version via Downloader.",
    readingTime: "4 min",
    wordCount: 820,
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    author: AUTHOR,
    mainImage: {
      url: "/images/tutorials/installer-atlas-pro-fire-stick.webp",
      alt: "Application Atlas Pro ONTV qui se ferme sur un Fire TV Stick",
      caption: "Cache saturé ou version obsolète : les deux causes principales.",
      width: 1200,
      height: 675,
    },
    directAnswer:
      "Si Atlas Pro ONTV ne s'ouvre pas ou plante : redémarrez l'appareil, videz le cache et les données de l'application, libérez de l'espace de stockage, puis désinstallez et réinstallez la dernière version avec le code Downloader officiel (Atlas Pro ONTV V4 : 822648). Vérifiez aussi que l'appareil est compatible avec l'application officielle.",
    keyTakeaways: [
      "La mémoire saturée est une cause fréquente sur Fire Stick d'ancienne génération.",
      "Réinstaller la dernière version corrige les incompatibilités.",
      "Les TV Samsung/LG ne peuvent pas exécuter l'APK officiel : utilisez un lecteur alternatif.",
    ],
    tableOfContents: [
      { id: "redemarrer-vider", title: "1. Vider le cache et purger les résidus applicatifs", level: 2 },
      { id: "liberer-espace", title: "2. Libérer le stockage Flash et la mémoire vive (RAM)", level: 2 },
      { id: "reinstaller", title: "3. Réinstaller la dernière version via Downloader", level: 2 },
    ],
    body: [
      "Une application qui plante au lancement vient souvent d'un cache corrompu, d'un manque d'espace ou d'une ancienne version.",
    ],
    sections: [
      {
        id: "redemarrer-vider",
        h2: "1. Vider le cache et purger les résidus applicatifs",
        callout: {
          type: "warning",
          title: "Incompatibilité Matérielle : Téléviseurs Samsung & LG",
          text: "Si vous tentez d'installer le fichier APK d'Atlas Pro ONTV sur une Smart TV Samsung ou LG, l'application plantera ou refusera de s'ouvrir. Ces téléviseurs tournent sous des systèmes propriétaires fermés (Tizen et webOS). Vous devez impérativement passer par un lecteur certifié du store officiel comme [IBO Player sur Samsung](/tutoriels/installer-atlas-pro-sur-tv-samsung) ou [IBO Player sur LG](/tutoriels/installer-atlas-pro-sur-lg-smart-tv).",
        },
        paragraphs: [
          "Lorsqu'une application Android TV ou Fire OS se ferme brutalement ('crash' ou retour instantané à l'écran d'accueil), la cause la plus fréquente est une saturation de la mémoire tampon ou une bibliothèque graphique en conflit.",
          "Sur [Amazon Fire Stick](/tutoriels/installer-atlas-pro-sur-fire-stick) : rendez-vous dans **Paramètres > Applications > Gérer les applications installées > Atlas Pro ONTV**. Cliquez sur **Forcer l'arrêt** puis sur **Vider le cache**.",
        ],
      },
      {
        id: "liberer-espace",
        h2: "2. Libérer le stockage Flash et la mémoire vive (RAM)",
        paragraphs: [
          "Les clés HDMI de streaming disposent d'un stockage interne limité (souvent 8 Go dont moins de 4 Go réellement utilisables). Lorsque l'espace libre descend sous le seuil critique des 500 Mo, le système d'exploitation tue arbitrairement les processus gourmands comme le lecteur 4K.",
          "Désinstallez les applications et jeux inutilisés depuis les paramètres de stockage pour préserver un minimum de 1,5 Go d'espace libre.",
        ],
        table: {
          caption: "Besoins matériels et recommandations selon les modèles d'appareils de streaming",
          headers: ["Modèle d'Appareil", "Mémoire Vive (RAM)", "Stabilité Atlas Pro", "Recommandation Réglage"],
          rows: [
            [
              "Fire TV Stick Lite / Basic",
              "1,0 Go RAM",
              "Sensible à la surcharge mémoire",
              "Régler la mémoire tampon à 2 secondes et vider le cache régulièrement."
            ],
            [
              "Fire TV Stick 4K (Standard)",
              "1,5 Go RAM",
              "Très bonne fluidité générale",
              "Activer le décodeur Hardware HW+ pour soulager le GPU."
            ],
            [
              "Fire TV Stick 4K Max / Cube",
              "2,0 Go RAM (Wi-Fi 6E)",
              "Excellente, aucun crash constaté",
              "Compatible flux 4K HDR 60fps sans restriction."
            ],
            [
              "Box Android TV (Nvidia Shield / Xiaomi)",
              "2 à 3 Go RAM",
              "Performances maximales",
              "Privilégier la connexion Ethernet Gigabit RJ45."
            ]
          ]
        },
      },
      {
        id: "reinstaller",
        h2: "3. Réinstaller la dernière version officielle via Downloader",
        paragraphs: [
          "Si les fermetures persistent, la version installée est peut-être altérée. Désinstallez Atlas Pro ONTV, ouvrez l'application [Downloader](/tutoriels/installer-atlas-pro-sur-fire-stick) et saisissez le code officiel de téléchargement direct :",
          "- **Code Downloader Atlas Pro ONTV V4 :** `822648`",
          "Après téléchargement et installation de l'APK officiel, saisissez votre code à 12 chiffres pour retrouver un accès stable.",
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Vider cache et données",
        instruction: "Paramètres > Applications > Atlas Pro ONTV > Vider le cache puis Effacer les données.",
      },
      {
        stepNumber: 2,
        title: "Réinstaller via Downloader",
        instruction: "Désinstallez l'application puis saisissez le code Downloader officiel pour la réinstaller.",
      },
    ],
    showExpiredAlert: false,
    relatedTutorialSlugs: [
      "installer-atlas-pro-sur-fire-stick",
      "atlas-pro-ecran-noir-chargement-infini",
      "installer-atlas-pro-sur-android-tv",
    ],
    seoTitle: "Atlas Pro ONTV Ne S'ouvre Pas ou Plante : Solutions Rapides",
    seoDescription:
      "Atlas Pro ONTV plante ou ne démarre pas ? Videz le cache, libérez de l'espace et réinstallez la dernière version via Downloader : guide pas à pas.",
    faq: [
      {
        question: "Faut-il réinstaller l'application à chaque plantage ?",
        answer:
          "Non. Videz d'abord le cache et les données ; la réinstallation n'est nécessaire que si le problème persiste.",
      },
    ],
  },
];
