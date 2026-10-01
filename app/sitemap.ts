import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllPlans, getAllAppPages, getAllTutorials } from "@/lib/mock-data";
import { getContentRevisions, resolveLastModified } from "@/lib/supabase/sitemap";

// Explicit release dates per content domain for deterministic fallback
const RELEASE_DATES = {
  homepage: new Date("2026-10-01T10:00:00.000Z"),
  catalog: new Date("2026-10-01T09:30:00.000Z"),
  downloads: new Date("2026-10-01T09:00:00.000Z"),
  tutorials: new Date("2026-09-28T14:00:00.000Z"),
  legal: new Date("2026-10-01T08:00:00.000Z"),
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const revisions = await getContentRevisions();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: resolveLastModified("/", revisions, RELEASE_DATES.homepage),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/abonnements`,
      lastModified: resolveLastModified("/abonnements", revisions, RELEASE_DATES.catalog),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/abonnements/multi-ecran`,
      lastModified: resolveLastModified("/abonnements/multi-ecran", revisions, RELEASE_DATES.catalog),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/abonnements/renouvellement`,
      lastModified: resolveLastModified("/abonnements/renouvellement", revisions, RELEASE_DATES.catalog),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/telecharger`,
      lastModified: resolveLastModified("/telecharger", revisions, RELEASE_DATES.downloads),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/tutoriels`,
      lastModified: resolveLastModified("/tutoriels", revisions, RELEASE_DATES.tutorials),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ouvrir-ticket`,
      lastModified: resolveLastModified("/ouvrir-ticket", revisions, RELEASE_DATES.legal),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: resolveLastModified("/mentions-legales", revisions, RELEASE_DATES.legal),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/politique-de-confidentialite`,
      lastModified: resolveLastModified("/politique-de-confidentialite", revisions, RELEASE_DATES.legal),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/conditions-generales-de-vente`,
      lastModified: resolveLastModified("/conditions-generales-de-vente", revisions, RELEASE_DATES.legal),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const planRoutes: MetadataRoute.Sitemap = getAllPlans().map((plan) => ({
    url: `${SITE_URL}/abonnements/${plan.slug}`,
    lastModified: resolveLastModified(`/abonnements/${plan.slug}`, revisions, RELEASE_DATES.catalog),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const appRoutes: MetadataRoute.Sitemap = getAllAppPages().map((app) => ({
    url: `${SITE_URL}/telecharger/${app.slug}`,
    lastModified: resolveLastModified(`/telecharger/${app.slug}`, revisions, RELEASE_DATES.downloads),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const tutorialRoutes: MetadataRoute.Sitemap = getAllTutorials().map((tut) => ({
    url: `${SITE_URL}/tutoriels/${tut.slug}`,
    lastModified: resolveLastModified(`/tutoriels/${tut.slug}`, revisions, RELEASE_DATES.tutorials),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...planRoutes, ...appRoutes, ...tutorialRoutes];
}
