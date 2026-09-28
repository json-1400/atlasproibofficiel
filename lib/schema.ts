import { SITE_NAME, SITE_URL } from "@/lib/seo";
import type { Plan, AppPage, Tutorial } from "@/lib/mock-data";

export const ENTITY_IDS = {
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  productAggregate: `${SITE_URL}/#product-aggregate`,
};

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    "@type": "Organization",
    "@id": ENTITY_IDS.organization,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 148,
      height: 148,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["French"],
        url: `${SITE_URL}/contact`,
      },
    ],
  };
}

export function buildWebSiteSchema(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": ENTITY_IDS.website,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: {
      "@id": ENTITY_IDS.organization,
    },
    inLanguage: "fr-FR",
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path?: string }>
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: `${SITE_URL}${item.path.startsWith("/") ? item.path : `/${item.path}`}` } : {}),
    })),
  };
}

export function buildFaqSchema(
  faqs: Array<{ question: string; answer: string }>
): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildHomepageProductAggregateSchema(plans: Plan[]): Record<string, unknown> {
  const prices = plans.map((p) => p.price);
  const lowPrice = Math.min(...prices).toFixed(2);
  const highPrice = Math.max(...prices).toFixed(2);

  return {
    "@type": "Product",
    "@id": ENTITY_IDS.productAggregate,
    name: "Abonnement Atlas Pro",
    description:
      "Abonnement officiel IPTV Atlas Pro avec plus de 10 000 chaînes directes et VOD en 4K/FHD. Activation immédiate en moins de 15 minutes.",
    brand: {
      "@id": ENTITY_IDS.organization,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice,
      highPrice,
      offerCount: plans.length,
      offers: plans.map((plan) => ({
        "@type": "Offer",
        name: plan.title,
        price: plan.price.toFixed(2),
        priceCurrency: "EUR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/abonnements/${plan.slug}`,
      })),
    },
  };
}

export function buildPlanSchema(plan: Plan): Record<string, unknown> {
  return {
    "@type": "Product",
    "@id": `${SITE_URL}/abonnements/${plan.slug}#product`,
    name: plan.title,
    description: plan.seoDescription,
    brand: {
      "@id": ENTITY_IDS.organization,
    },
    offers: {
      "@type": "Offer",
      price: plan.price.toFixed(2),
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/abonnements/${plan.slug}`,
      seller: {
        "@id": ENTITY_IDS.organization,
      },
    },
  };
}

export function buildAppSchema(app: AppPage): Record<string, unknown> {
  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/telecharger/${app.slug}#software`,
    name: app.title,
    operatingSystem: app.platform,
    applicationCategory: "MultimediaApplication",
    softwareVersion: app.version,
    downloadUrl: `${SITE_URL}${app.apkUrl}`,
    fileFormat: app.apkUrl.endsWith(".apk")
      ? "application/vnd.android.package-archive"
      : "application/octet-stream",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    publisher: {
      "@id": ENTITY_IDS.organization,
    },
  };
}

export function buildTutorialSchema(tut: Tutorial): Array<Record<string, unknown>> {
  const articleSchema: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${SITE_URL}/tutoriels/${tut.slug}#article`,
    headline: tut.title,
    description: tut.excerpt,
    publisher: {
      "@id": ENTITY_IDS.organization,
    },
    inLanguage: "fr-FR",
  };

  const howToSchema: Record<string, unknown> = {
    "@type": "HowTo",
    "@id": `${SITE_URL}/tutoriels/${tut.slug}#howto`,
    name: tut.title,
    description: tut.excerpt,
    step: tut.steps.map((step) => ({
      "@type": "HowToStep",
      position: step.stepNumber,
      name: step.title,
      text: step.instruction,
    })),
  };

  return [articleSchema, howToSchema];
}

export function buildContactPageSchema(): Record<string, unknown> {
  return {
    "@type": "ContactPage",
    "@id": `${SITE_URL}/ouvrir-ticket#webpage`,
    url: `${SITE_URL}/ouvrir-ticket`,
    name: "Support Client & Ouverture de Ticket | Atlas Pro ONTV",
    description:
      "Formulaire officiel d'ouverture de ticket support et assistance technique Atlas Pro ONTV. Réponse en moins de 2h ouvrées.",
    isPartOf: {
      "@id": ENTITY_IDS.website,
    },
    about: {
      "@id": ENTITY_IDS.organization,
    },
    inLanguage: "fr-FR",
  };
}

export function buildCatalogCollectionSchema(plans: Plan[]): Record<string, unknown> {
  return {
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/abonnements#webpage`,
    url: `${SITE_URL}/abonnements`,
    name: "Catalogue des Abonnements Atlas Pro",
    description:
      "Catalogue et comparatif des forfaits d'abonnement Atlas Pro officiels : 12 mois, 6 mois, 3 mois et renouvellement.",
    isPartOf: {
      "@id": ENTITY_IDS.website,
    },
    about: {
      "@id": ENTITY_IDS.organization,
    },
    inLanguage: "fr-FR",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: plans.map((plan, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/abonnements/${plan.slug}`,
        name: plan.title,
      })),
    },
  };
}

export function buildMultiScreenHubSchema(plans: Plan[]): Record<string, unknown> {
  return {
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/abonnements/multi-ecran#webpage`,
    url: `${SITE_URL}/abonnements/multi-ecran`,
    name: "Abonnement IPTV Atlas Multiécrans",
    description:
      "Formules officielles multi-écrans Atlas Pro : 2, 3 et 4 connexions simultanées en 4K/FHD. Profitez de votre abonnement sur plusieurs téléviseurs en même temps.",
    isPartOf: {
      "@id": ENTITY_IDS.website,
    },
    about: {
      "@id": ENTITY_IDS.organization,
    },
    inLanguage: "fr-FR",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: plans.map((plan, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/abonnements/${plan.slug}`,
        name: plan.title,
      })),
    },
  };
}

export function buildHomepageHowToSchema(): Record<string, unknown> {
  return {
    "@type": "HowTo",
    "@id": `${SITE_URL}/#howto-activation`,
    name: "Comment activer votre abonnement Atlas Pro ONTV en 3 étapes",
    description:
      "Guide d'activation rapide de votre abonnement IPTV Atlas en France. Réception immédiate de vos codes par e-mail en moins de 15 minutes.",
    totalTime: "PT15M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Choisissez votre formule d'abonnement",
        text: "Sélectionnez votre durée (12 mois à 40€, 6 mois à 30€ ou 3 mois à 20€) et validez votre commande par paiement sécurisé sans reconduction tacite.",
        url: `${SITE_URL}/#tarifs`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Réception instantanée de vos codes par e-mail",
        text: "Recevez en moins de 15 minutes vos identifiants Xtream Codes API, mot de passe et lien M3U directement par e-mail.",
        url: `${SITE_URL}/#tarifs`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Configuration de l'application et visionnage",
        text: "Téléchargez l'application Atlas Pro ONTV ou Atlas Pro Max sur votre Smart TV ou boîtier, entrez vos codes et commencez le visionnage.",
        url: `${SITE_URL}/telecharger`,
      },
    ],
  };
}



