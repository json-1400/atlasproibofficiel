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
