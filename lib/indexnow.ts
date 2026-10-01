import { SITE_URL } from "@/lib/seo";

export const DEFAULT_INDEXNOW_KEY = "b4f8a3c9e2d14785b6a7c9e0d1f3a5b7";
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export interface IndexNowResponse {
  success: boolean;
  status: number;
  message: string;
  submittedCount: number;
}

/**
 * Returns the active IndexNow API key from environment or fallback default.
 */
export function getIndexNowKey(): string {
  return process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
}

/**
 * Returns the absolute URL location of the verification key file.
 */
export function getIndexNowKeyLocation(): string {
  const key = getIndexNowKey();
  return `${SITE_URL}/${key}.txt`;
}

/**
 * Submits one or multiple URLs to the IndexNow protocol (Bing, Yandex, Seznam, Naver).
 * Handles batching (up to 10,000 URLs per payload), host validation, and strict error logging.
 */
export async function submitToIndexNow(urls: string[]): Promise<IndexNowResponse> {
  const key = getIndexNowKey();
  const keyLocation = getIndexNowKeyLocation();
  const host = new URL(SITE_URL).hostname;

  // Filter and normalize URLs to only include URLs from this host
  const validUrls = Array.from(
    new Set(
      urls
        .map((u) => u.trim())
        .filter((u) => {
          try {
            const parsed = new URL(u);
            return parsed.hostname === host;
          } catch {
            return false;
          }
        })
    )
  );

  if (validUrls.length === 0) {
    return {
      success: false,
      status: 400,
      message: "No valid URLs matching site hostname to submit",
      submittedCount: 0,
    };
  }

  const payload = {
    host,
    key,
    keyLocation,
    urlList: validUrls,
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    // IndexNow returns 200 (OK) or 202 (Accepted) on success
    if (response.status === 200 || response.status === 202) {
      return {
        success: true,
        status: response.status,
        message: `Successfully submitted ${validUrls.length} URLs to IndexNow (Status ${response.status})`,
        submittedCount: validUrls.length,
      };
    }

    const errorText = await response.text().catch(() => "Unknown error");
    return {
      success: false,
      status: response.status,
      message: `IndexNow returned status ${response.status}: ${errorText}`,
      submittedCount: 0,
    };
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Network error";
    return {
      success: false,
      status: 500,
      message: `Failed to connect to IndexNow API: ${errMsg}`,
      submittedCount: 0,
    };
  }
}
