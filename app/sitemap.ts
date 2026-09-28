import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllPlans, getAllAppPages, getAllTutorials } from "@/lib/mock-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/abonnements`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/abonnements/renouvellement`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/telecharger`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/tutoriels`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const planRoutes: MetadataRoute.Sitemap = getAllPlans().map((plan) => ({
    url: `${SITE_URL}/abonnements/${plan.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const appRoutes: MetadataRoute.Sitemap = getAllAppPages().map((app) => ({
    url: `${SITE_URL}/telecharger/${app.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const tutorialRoutes: MetadataRoute.Sitemap = getAllTutorials().map((tut) => ({
    url: `${SITE_URL}/tutoriels/${tut.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...planRoutes, ...appRoutes, ...tutorialRoutes];
}
