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

// Only internal APIs and CMS admin studio are strictly disallowed from crawling.
// Note: Pages with noindex (<meta robots="noindex"> like /commander and /merci) must NOT be disallowed in robots.txt,
// otherwise Googlebot cannot crawl them to read the noindex directive and flags "Indexed, though blocked by robots.txt".
const PROTECTED_PATHS = [
  "/api/",
  "/studio/",
];

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
