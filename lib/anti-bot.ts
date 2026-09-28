import crypto from "crypto";

const CHALLENGE_SECRET =
  process.env.ANTI_BOT_SECRET || "atlaspro-antibot-secret-salt-2026";

export interface AntiBotChallenge {
  question: string;
  expectedHash: string;
  timestamp: number;
}

/**
 * Generates a lightweight, accessible math challenge with a cryptographically signed hash.
 */
export function generateAntiBotChallenge(): AntiBotChallenge {
  const numA = Math.floor(Math.random() * 8) + 2; // 2 to 9
  const numB = Math.floor(Math.random() * 8) + 1; // 1 to 8
  const sum = numA + numB;

  const timestamp = Date.now();
  const hash = crypto
    .createHash("sha256")
    .update(`${sum}:${timestamp}:${CHALLENGE_SECRET}`)
    .digest("hex");

  return {
    question: `Combien font ${numA} + ${numB} ?`,
    expectedHash: hash,
    timestamp,
  };
}

export interface AntiBotVerificationResult {
  isValid: boolean;
  reason?: string;
}

/**
 * Validates the anti-bot challenge response and enforces human completion time (min. 3.5s, max 2h).
 */
export function verifyAntiBot({
  answer,
  expectedHash,
  timestamp,
  honeypot,
}: {
  answer: string;
  expectedHash: string;
  timestamp: number;
  honeypot?: string;
}): AntiBotVerificationResult {
  // 1. Honeypot verification
  if (honeypot && honeypot.length > 0) {
    return { isValid: false, reason: "Robot détecté par le piège honeypot." };
  }

  // 2. Minimum human interaction time check (3.5 seconds)
  const now = Date.now();
  const timeDifferenceMs = now - timestamp;
  const MIN_FILL_TIME_MS = 3500;
  const MAX_FILL_TIME_MS = 2 * 60 * 60 * 1000; // 2 hours

  if (timeDifferenceMs < MIN_FILL_TIME_MS) {
    return {
      isValid: false,
      reason: "Soumission trop rapide. Veuillez patienter quelques secondes avant d'envoyer.",
    };
  }

  if (timeDifferenceMs > MAX_FILL_TIME_MS) {
    return {
      isValid: false,
      reason: "La session a expiré. Veuillez rafraîchir la page.",
    };
  }

  // 3. Math challenge answer validation
  const cleanAnswer = answer.trim();
  const computedHash = crypto
    .createHash("sha256")
    .update(`${cleanAnswer}:${timestamp}:${CHALLENGE_SECRET}`)
    .digest("hex");

  if (computedHash !== expectedHash) {
    return {
      isValid: false,
      reason: "La réponse à la question de sécurité anti-robot est incorrecte.",
    };
  }

  return { isValid: true };
}
