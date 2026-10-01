import { NextResponse } from "next/server";
import { submitToIndexNow, getIndexNowKey, getIndexNowKeyLocation } from "@/lib/indexnow";
import { SITE_URL } from "@/lib/seo";
import { getAllPlans, getAllAppPages, getAllTutorials } from "@/lib/mock-data";
import { recordContentRevisions } from "@/lib/supabase/sitemap";

export const dynamic = "force-dynamic";

/**
 * Returns all public, indexable canonical URLs for the website.
 */
function getAllCanonicalUrls(): string[] {
  const staticUrls = [
    `${SITE_URL}`,
    `${SITE_URL}/abonnements`,
    `${SITE_URL}/abonnements/multi-ecran`,
    `${SITE_URL}/abonnements/renouvellement`,
    `${SITE_URL}/telecharger`,
    `${SITE_URL}/tutoriels`,
    `${SITE_URL}/ouvrir-ticket`,
    `${SITE_URL}/mentions-legales`,
    `${SITE_URL}/politique-de-confidentialite`,
    `${SITE_URL}/conditions-generales-de-vente`,
  ];

  const planUrls = getAllPlans().map((p) => `${SITE_URL}/abonnements/${p.slug}`);
  const appUrls = getAllAppPages().map((a) => `${SITE_URL}/telecharger/${a.slug}`);
  const tutorialUrls = getAllTutorials().map((t) => `${SITE_URL}/tutoriels/${t.slug}`);

  return [...staticUrls, ...planUrls, ...appUrls, ...tutorialUrls];
}

/**
 * GET: Diagnostics and current IndexNow key configuration.
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: "ok",
    key: getIndexNowKey(),
    keyLocation: getIndexNowKeyLocation(),
    endpoint: "https://api.indexnow.org/indexnow",
  });
}

/**
 * POST: Submit updated URLs to IndexNow (Bing, Yandex, Seznam, Naver)
 * and update content revision timestamps in Supabase.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const secret = process.env.INDEXNOW_API_SECRET || process.env.CRON_SECRET;
  
  if (secret) {
    const authHeader = request.headers.get("authorization");
    const providedSecret = authHeader?.replace(/^Bearer\s+/i, "");
    if (providedSecret !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  let urlsToSubmit: string[] = [];

  try {
    const body = (await request.json().catch(() => ({}))) as { urls?: unknown };
    if (body.urls && Array.isArray(body.urls) && body.urls.length > 0) {
      urlsToSubmit = body.urls.filter((u): u is string => typeof u === "string");
    } else {
      urlsToSubmit = getAllCanonicalUrls();
    }
  } catch {
    urlsToSubmit = getAllCanonicalUrls();
  }

  const result = await submitToIndexNow(urlsToSubmit);

  // If Supabase is available, sync the last_modified timestamps
  if (result.success && urlsToSubmit.length > 0) {
    await recordContentRevisions(urlsToSubmit);
  }

  return NextResponse.json(result, { status: result.success ? 200 : result.status || 500 });
}
