/**
 * Official Pricing Engine for Atlas Pro ONTV subscriptions.
 * Calculates exact total amount based on plan duration and concurrent devices count.
 */

export interface PricingBreakdown {
  totalPrice: number;
  devicesCount: number;
  durationMonths: number;
  pricePerDevice: number;
  monthlyEquivalent: number;
}

/**
 * Calculates the exact price for an order based on planSlug and selected devices count.
 * Enforces the official pricing rule:
 * - 12 Mois: 1 screen = 40€, 2 screens = 60€, 3 screens = 80€, 4 screens = 100€
 * - 6 Mois: 1 screen = 30€, 2 screens = 45€, 3 screens = 60€, 4 screens = 75€
 * - 3 Mois: 1 screen = 20€, 2 screens = 30€, 3 screens = 40€, 4 screens = 50€
 */
export function calculateOrderPrice(planSlug: string, devicesCount: number): number {
  const safeDevices = Math.max(1, Math.min(4, Math.floor(devicesCount || 1)));

  // 12 Months plans (standard or multi-screen variations)
  if (
    planSlug === "atlas-pro-12-mois" ||
    planSlug === "atlas-pro-2-ecrans" ||
    planSlug === "atlas-pro-3-ecrans" ||
    planSlug === "atlas-pro-4-ecrans"
  ) {
    switch (safeDevices) {
      case 1:
        return 40;
      case 2:
        return 60;
      case 3:
        return 80;
      case 4:
        return 100;
      default:
        return 40;
    }
  }

  // 6 Months plan
  if (planSlug === "atlas-pro-6-mois") {
    switch (safeDevices) {
      case 1:
        return 30;
      case 2:
        return 45;
      case 3:
        return 60;
      case 4:
        return 75;
      default:
        return 30;
    }
  }

  // 3 Months plan
  if (planSlug === "atlas-pro-3-mois") {
    switch (safeDevices) {
      case 1:
        return 20;
      case 2:
        return 30;
      case 3:
        return 40;
      case 4:
        return 50;
      default:
        return 20;
    }
  }

  // Default fallback for 12 months
  return 40;
}

/**
 * Returns the duration in months of a given plan slug.
 */
export function getPlanDurationMonths(planSlug: string): number {
  if (planSlug === "atlas-pro-3-mois") return 3;
  if (planSlug === "atlas-pro-6-mois") return 6;
  return 12;
}

/**
 * Returns full breakdown for display in summary cards.
 */
export function getPricingBreakdown(planSlug: string, devicesCount: number): PricingBreakdown {
  const safeDevices = Math.max(1, Math.min(4, Math.floor(devicesCount || 1)));
  const totalPrice = calculateOrderPrice(planSlug, safeDevices);
  const durationMonths = getPlanDurationMonths(planSlug);

  return {
    totalPrice,
    devicesCount: safeDevices,
    durationMonths,
    pricePerDevice: Number((totalPrice / safeDevices).toFixed(2)),
    monthlyEquivalent: Number((totalPrice / durationMonths).toFixed(2)),
  };
}
