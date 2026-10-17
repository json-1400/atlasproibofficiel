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
        h2: "1. Vérifier la saisie du code",
        paragraphs: [
          "Copiez le code depuis l'e-mail de confirmation plutôt que de le retaper de mémoire. Sur une télécommande, vérifiez qu'aucun chiffre n'est doublé.",
          "Évitez tout espace avant ou après le code, et distinguez bien le chiffre 0 de la lettre O.",
        ],
      },
      {
        id: "bonne-application",
        h2: "2. Utiliser la bonne application",
        paragraphs: [
          "Le code à 12 chiffres est destiné aux applications officielles Atlas Pro (ONTV, Max, 9X). Dans un lecteur tiers (IBO Player, IPTV Smarters, TiviMate), il faut saisir les identifiants Xtream Codes : URL du serveur, nom d'utilisateur et mot de passe.",
        ],
      },
      {
        id: "version-application",
        h2: "3. Mettre à jour l'application",
        paragraphs: [
          "Une ancienne version peut ne plus être reconnue par le serveur. Réinstallez la dernière version via le code Downloader officiel (Atlas Pro ONTV V4 : 822648) ou depuis la page de téléchargement du site.",
        ],
      },
      {
        id: "date-heure",
        h2: "4. Contrôler la date et l'heure de l'appareil",
        paragraphs: [
          "Une date ou une heure incorrecte provoque des échecs d'authentification. Activez la date et l'heure automatiques dans les paramètres de votre téléviseur ou box, puis relancez l'application.",
        ],
      },
      {
        id: "abonnement-expire",
        h2: "5. Vérifier la validité de l'abonnement",
        paragraphs: [
          "Si tout est correct, la période de votre abonnement est peut-être terminée. Un renouvellement génère un nouveau code sans nécessiter de réinstallation.",
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
    seoTitle: "Code Atlas Pro Invalide : 6 Solutions Rapides | Guide Officiel",
    seoDescription:
      "Message « Code invalide » sur Atlas Pro ONTV ? Saisie, version de l'application, date de l'appareil, abonnement : 6 solutions pas à pas pour réactiver votre accès.",
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
      { id: "reconnaitre-expiration", title: "Reconnaître un abonnement expiré", level: 2 },
      { id: "renouveler-code", title: "Renouveler votre code", level: 2 },
      { id: "saisir-nouveau-code", title: "Saisir le nouveau code", level: 2 },
    ],
    body: [
      "Lorsque votre période d'abonnement se termine, l'application cesse de charger les chaînes. Ce n'est pas une panne : il suffit de renouveler.",
    ],
    sections: [
      {
        id: "reconnaitre-expiration",
        h2: "Reconnaître un abonnement expiré",
        paragraphs: [
          "Signes typiques : liste de chaînes vide, message « expiré » ou « code invalide » alors que rien n'a changé sur votre connexion internet.",
          "Vérifiez la date d'échéance dans Paramètres > Compte de l'application.",
        ],
      },
      {
        id: "renouveler-code",
        h2: "Renouveler votre code",
        paragraphs: [
          "Choisissez la durée souhaitée (3, 6 ou 12 mois) et indiquez votre ancien code ou votre adresse MAC au moment de la commande afin que la ligne existante soit prolongée.",
        ],
      },
      {
        id: "saisir-nouveau-code",
        h2: "Saisir le nouveau code",
        paragraphs: [
          "Dans l'application : Paramètres > Compte > Se déconnecter, puis saisissez le nouveau code reçu par e-mail. Aucune désinstallation n'est requise.",
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
      "Code Atlas Pro expiré ou plus de chaînes ? Reconnaissez l'expiration et renouvelez votre accès en 15 minutes sans réinstaller l'application, favoris conservés.",
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
      { id: "tester-chaines", title: "Tester plusieurs chaînes", level: 2 },
      { id: "redemarrer", title: "Redémarrer appareil et box", level: 2 },
      { id: "vider-cache", title: "Vider le cache de l'application", level: 2 },
      { id: "tester-reseau", title: "Tester le réseau", level: 2 },
    ],
    body: [
      "Un écran noir ou un chargement qui ne se termine jamais ne signifie pas forcément que le service est en panne. Voici la méthode de diagnostic la plus rapide.",
    ],
    sections: [
      {
        id: "tester-chaines",
        h2: "Tester plusieurs chaînes",
        paragraphs: [
          "Si une seule chaîne est concernée, le problème vient de ce flux. Si toutes les chaînes sont touchées, poursuivez avec les étapes suivantes.",
        ],
      },
      {
        id: "redemarrer",
        h2: "Redémarrer appareil et box",
        paragraphs: [
          "Débranchez la box internet et l'appareil (TV, Fire Stick, box Android) pendant 30 secondes, puis rallumez-les.",
        ],
      },
      {
        id: "vider-cache",
        h2: "Vider le cache de l'application",
        paragraphs: [
          "Sur Fire Stick ou Android TV : Paramètres > Applications > Atlas Pro ONTV > Vider le cache, puis Forcer l'arrêt et relancer.",
        ],
      },
      {
        id: "tester-reseau",
        h2: "Tester le réseau",
        paragraphs: [
          "Préférez un câble Ethernet au Wi-Fi. Pour écarter un blocage de votre fournisseur d'accès, testez brièvement en partage de connexion 4G/5G.",
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
        h2: "Vérifier l'abonnement",
        paragraphs: ["Un abonnement terminé supprime l'accès aux chaînes. Contrôlez la date d'échéance dans Paramètres > Compte."],
      },
      {
        id: "actualiser-liste",
        h2: "Actualiser la liste",
        paragraphs: [
          "Utilisez l'option d'actualisation de la playlist, puis videz le cache et reconnectez-vous avec votre code.",
        ],
      },
      {
        id: "filtres",
        h2: "Contrôler filtres et contrôle parental",
        paragraphs: ["Des catégories masquées ou un contrôle parental activé donnent l'impression que des chaînes ont disparu."],
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
      { id: "redemarrer-vider", title: "Redémarrer et vider le cache", level: 2 },
      { id: "liberer-espace", title: "Libérer de l'espace", level: 2 },
      { id: "reinstaller", title: "Réinstaller la dernière version", level: 2 },
    ],
    body: [
      "Une application qui plante au lancement vient souvent d'un cache corrompu, d'un manque d'espace ou d'une ancienne version.",
    ],
    sections: [
      {
        id: "redemarrer-vider",
        h2: "Redémarrer et vider le cache",
        paragraphs: [
          "Redémarrez l'appareil, puis Paramètres > Applications > Atlas Pro ONTV > Vider le cache et Effacer les données.",
        ],
      },
      {
        id: "liberer-espace",
        h2: "Libérer de l'espace",
        paragraphs: ["Désinstallez les applications inutilisées : un stockage presque plein provoque des fermetures inattendues."],
      },
      {
        id: "reinstaller",
        h2: "Réinstaller la dernière version",
        paragraphs: [
          "Désinstallez Atlas Pro ONTV, puis relancez Downloader et entrez le code officiel pour récupérer la dernière version (Atlas Pro ONTV V4 : 822648).",
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
