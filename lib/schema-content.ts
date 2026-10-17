import { SITE_URL } from "@/lib/seo";
import type { AppPage, Tutorial } from "@/lib/mock-data";
import { ENTITY_IDS } from "@/lib/schema";

export function buildAppSchema(app: AppPage): Record<string, unknown> {
  const isExternal = app.apkUrl.startsWith("http://") || app.apkUrl.startsWith("https://");
  const pageUrl = `${SITE_URL}/telecharger/${app.slug}`;
  const downloadUrl = isExternal ? app.apkUrl : pageUrl;

  return {
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#software`,
    name: app.title,
    operatingSystem: app.platform,
    applicationCategory: "MultimediaApplication",
    softwareVersion: app.version,
    url: pageUrl,
    installUrl: pageUrl,
    downloadUrl,
    image: app.logoUrl
      ? (app.logoUrl.startsWith("http") ? app.logoUrl : `${SITE_URL}${app.logoUrl}`)
      : `${SITE_URL}/icon.png`,
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
  const pageUrl = `${SITE_URL}/tutoriels/${tut.slug}`;
  const imageUrl = tut.mainImage?.url?.startsWith("http")
    ? tut.mainImage.url
    : `${SITE_URL}${tut.mainImage?.url || "/icon.png"}`;

  const articleSchema: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: tut.title,
    description: tut.excerpt,
    image: imageUrl,
    datePublished: tut.publishedAt,
    dateModified: tut.updatedAt,
    wordCount: tut.wordCount,
    keywords: tut.tags?.join(", ") || "",
    author: {
      "@type": "Person",
      name: tut.author?.name || "Équipe Technique Atlas Pro",
      jobTitle: tut.author?.role || "Support Technique IPTV",
    },
    publisher: {
      "@id": ENTITY_IDS.organization,
    },
    inLanguage: "fr-FR",
    mainEntityOfPage: pageUrl,
  };

  const howToSchema: Record<string, unknown> = {
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: tut.title,
    description: tut.excerpt,
    image: imageUrl,
    totalTime: "PT10M",
    step: tut.steps.map((step) => ({
      "@type": "HowToStep",
      position: step.stepNumber,
      name: step.title,
      text: step.instruction,
      image: step.image?.url?.startsWith("http")
        ? step.image.url
        : `${SITE_URL}${step.image?.url || imageUrl}`,
    })),
  };

  const schemas: Array<Record<string, unknown>> = [articleSchema, howToSchema];

  if (tut.faq && tut.faq.length > 0) {
    schemas.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: tut.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return schemas;
}

export function buildAppHowToSchema(app: AppPage): Record<string, unknown> | null {
  if (!app.installSteps || app.installSteps.length === 0) return null;
  return {
    "@type": "HowTo",
    "@id": `${SITE_URL}/telecharger/${app.slug}#howto`,
    name: `Comment installer ${app.title}`,
    description: `Guide d'installation étape par étape de ${app.title} sur ${app.platform}.`,
    step: app.installSteps.map((step, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: step.title,
      text: step.description,
    })),
  };
}

