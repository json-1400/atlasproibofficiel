import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Search engines and AI citation engines allowed to index public pages
const ALLOWED_ENGINES = [
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
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
];

// Bulk scrapers, raw dataset harvesters, and competitive SEO bots strictly blocked
const DISALLOWED_SCRAPERS = [
  "CCBot",
  "anthropic-ai",
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
        userAgent: ALLOWED_ENGINES,
        allow: "/",
        disallow: PROTECTED_PATHS,
      },
      {
        userAgent: DISALLOWED_SCRAPERS,
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
