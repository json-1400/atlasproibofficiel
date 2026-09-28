import { SITE_URL } from "@/lib/seo";
import type { AppPage, Tutorial } from "@/lib/mock-data";
import { ENTITY_IDS } from "@/lib/schema";

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
