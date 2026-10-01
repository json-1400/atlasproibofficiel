import { SITE_URL } from "@/lib/seo";
import type { AppPage, Tutorial } from "@/lib/mock-data";
import { ENTITY_IDS } from "@/lib/schema";

export function buildAppSchema(app: AppPage): Record<string, unknown> {
  const isExternal = app.apkUrl.startsWith("http://") || app.apkUrl.startsWith("https://");
  const downloadUrl = isExternal
    ? app.apkUrl
    : `${SITE_URL}${app.apkUrl.startsWith("/") ? app.apkUrl : `/${app.apkUrl}`}`;

  const fileFormat = app.apkUrl.endsWith(".apk")
    ? "application/vnd.android.package-archive"
    : app.apkUrl.endsWith(".exe")
    ? "application/vnd.microsoft.portable-executable"
    : isExternal
    ? "text/html"
    : "application/octet-stream";

  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/telecharger/${app.slug}#software`,
    name: app.title,
    operatingSystem: app.platform,
    applicationCategory: "MultimediaApplication",
    softwareVersion: app.version,
    downloadUrl,
    fileFormat,
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
