import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Search engines allowed to index public pages
const SEARCH_ENGINES = [
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",
  "YandexBot",
  "Qwantify",
  "Twitterbot",
  "facebookexternalhit",
  "LinkedInBot",
];

// Scrapers, SEO harvesters, and AI crawlers strictly blocked
const DISALLOWED_SCRAPERS_AND_AI = [
  "GPTBot",
  "ChatGPT-User",
  "CCBot",
  "anthropic-ai",
  "Claude-Web",
  "ClaudeBot",
  "PerplexityBot",
  "Bytespider",
  "cohere-ai",
  "Diffbot",
  "ImagesiftBot",
  "Omgilibot",
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
  "DotBot",
  "PetalBot",
  "DataForSeoBot",
  "Scrapy",
  "TurnitinBot",
];

const PROTECTED_PATHS = ["/api/", "/merci", "/studio/", "/*?*"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: SEARCH_ENGINES,
        allow: "/",
        disallow: PROTECTED_PATHS,
      },
      {
        userAgent: DISALLOWED_SCRAPERS_AND_AI,
        disallow: ["/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: PROTECTED_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
