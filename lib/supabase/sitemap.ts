import { getSupabaseServerClient } from "@/lib/supabase/server";

// Fallback deterministic release timestamps ensuring Googlebot re-crawl trust
const DEFAULT_CONTENT_REVISION_DATE = new Date("2026-10-01T08:00:00.000Z");

/**
 * Retrieves per-route genuine last_modified timestamps from Supabase.
 * Falls back to deterministic content revision timestamps if Supabase is not configured or in mock mode.
 */
export async function getContentRevisions(): Promise<Map<string, Date>> {
  const revisionMap = new Map<string, Date>();
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return revisionMap;
  }

  try {
    const { data, error } = await supabase
      .from("content_revisions")
      .select("route, last_modified");

    if (!error && data) {
      for (const row of data) {
        if (row.route && row.last_modified) {
          revisionMap.set(row.route, new Date(row.last_modified));
        }
      }
    }
  } catch (err: unknown) {
    console.warn("[Sitemap] Failed to fetch content revisions from Supabase:", err);
  }

  return revisionMap;
}

/**
 * Records or updates the last_modified timestamp in Supabase for a set of URLs.
 */
export async function recordContentRevisions(urls: string[]): Promise<void> {
  const supabase = getSupabaseServerClient();
  if (!supabase || urls.length === 0) {
    return;
  }

  const nowIso = new Date().toISOString();
  const upsertRows = urls.map((url) => {
    // Extract path from full URL or keep raw route
    let route = url;
    try {
      const parsed = new URL(url);
      route = parsed.pathname || "/";
    } catch {
      // already path
    }

    return {
      route: route.replace(/\/$/, "") || "/",
      last_modified: nowIso,
      updated_at: nowIso,
    };
  });

  try {
    await supabase.from("content_revisions").upsert(upsertRows, { onConflict: "route" });
  } catch (err: unknown) {
    console.warn("[Sitemap] Failed to record content revisions in Supabase:", err);
  }
}

/**
 * Returns a genuine last_modified Date for a given route, using the Supabase map or deterministic fallback.
 */
export function resolveLastModified(
  route: string,
  revisionMap: Map<string, Date>,
  fallbackDate: Date = DEFAULT_CONTENT_REVISION_DATE
): Date {
  const cleanRoute = route.replace(/\/$/, "") || "/";
  return revisionMap.get(cleanRoute) || fallbackDate;
}
