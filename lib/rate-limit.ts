interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Clean up stale entries every 10 minutes to prevent memory leak
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.resetAt < now) {
        rateLimitStore.delete(key);
      }
    }
  }, 10 * 60 * 1000).unref?.();
}

export interface RateLimitOptions {
  limit: number;
  windowMs: number;
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  reset: number;
}

/**
 * In-memory sliding window rate limiter per key (e.g. client IP + action).
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = { limit: 5, windowMs: 10 * 60 * 1000 }
): RateLimitResult {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || record.resetAt < now) {
    const newRecord: RateLimitRecord = {
      count: 1,
      resetAt: now + options.windowMs,
    };
    rateLimitStore.set(identifier, newRecord);
    return {
      success: true,
      remaining: options.limit - 1,
      reset: newRecord.resetAt,
    };
  }

  if (record.count >= options.limit) {
    return {
      success: false,
      remaining: 0,
      reset: record.resetAt,
    };
  }

  record.count += 1;
  return {
    success: true,
    remaining: options.limit - record.count,
    reset: record.resetAt,
  };
}
