"use client";

// CLIENT: interactive checkout state coordination between form and summary
import React, { useState } from "react";
import type { Plan } from "@/lib/mock-data";
import { getPricingBreakdown } from "@/lib/pricing";
import { CheckoutForm, type ValidPlanSlug } from "@/components/sections/CheckoutForm";
import { CheckoutSummary } from "@/components/sections/CheckoutSummary";

export interface CheckoutViewProps {
  plan: Plan;
}

export function CheckoutView({ plan }: CheckoutViewProps): React.JSX.Element {
  // Initialize device count with the plan's default screens (e.g. 2 for atlas-pro-2-ecrans, 1 for standard)
  const initialScreens = Math.max(1, Math.min(4, plan.screensCount || 1));
  const [devicesCount, setDevicesCount] = useState<number>(initialScreens);

  const breakdown = getPricingBreakdown(plan.slug, devicesCount);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      {/* Order Form */}
      <div className="md:col-span-7 rounded-2xl border border-border bg-white p-6 shadow-sm">
        <CheckoutForm
          planSlug={plan.slug as ValidPlanSlug}
          devicesCount={devicesCount}
          onDevicesCountChange={setDevicesCount}
          currentPrice={breakdown.totalPrice}
        />
      </div>

      {/* Order Summary */}
      <div className="md:col-span-5">
        <CheckoutSummary plan={plan} breakdown={breakdown} />
      </div>
    </div>
  );
}
