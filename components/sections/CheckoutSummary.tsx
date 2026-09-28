import React from "react";
import { ShieldCheck, Zap } from "lucide-react";
import type { Plan } from "@/lib/mock-data";
import type { PricingBreakdown } from "@/lib/pricing";

export interface CheckoutSummaryProps {
  plan: Plan;
  breakdown: PricingBreakdown;
}

export function CheckoutSummary({ plan, breakdown }: CheckoutSummaryProps): React.JSX.Element {
  const isMulti = breakdown.devicesCount > 1;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 space-y-4">
      <h2 className="text-sm font-bold text-heading pb-3 border-b border-border">
        Récapitulatif de la commande
      </h2>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between text-heading font-medium">
          <span>{plan.title}</span>
          <span className="font-bold">{breakdown.totalPrice}€</span>
        </div>

        <div className="flex justify-between text-body">
          <span>Connexions simultanées</span>
          <span className="font-semibold text-heading">
            {breakdown.devicesCount} {isMulti ? "écrans" : "écran"}
          </span>
        </div>

        {isMulti && (
          <div className="flex justify-between text-slate-500">
            <span>Coût par écran</span>
            <span>{breakdown.pricePerDevice}€ / écran</span>
          </div>
        )}

        <div className="flex justify-between text-body">
          <span>Durée d&apos;abonnement</span>
          <span>{breakdown.durationMonths} mois</span>
        </div>

        <div className="flex justify-between text-body">
          <span>Frais d&apos;activation</span>
          <span className="text-emerald-600 font-semibold">Gratuit</span>
        </div>
      </div>

      <div className="pt-3 border-t border-border flex justify-between items-baseline font-bold text-heading">
        <span>Total TTC</span>
        <span className="text-2xl text-primary transition-all">
          {breakdown.totalPrice}€
        </span>
      </div>

      <div className="rounded-xl bg-white border border-border p-3.5 space-y-2 text-[11px] text-body">
        <div className="flex items-center gap-2 text-emerald-700 font-semibold">
          <Zap className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Livraison instantanée par e-mail en 15 min</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          <span>Garantie de service officiel Atlas Pro</span>
        </div>
      </div>
    </div>
  );
}
