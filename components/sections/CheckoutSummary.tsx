import React from "react";
import { ShieldCheck, Zap, Lock, MessageCircle } from "lucide-react";
import type { Plan } from "@/lib/mock-data";
import type { PricingBreakdown } from "@/lib/pricing";

export interface CheckoutSummaryProps {
  plan: Plan;
  breakdown: PricingBreakdown;
}

export function CheckoutSummary({ plan, breakdown }: CheckoutSummaryProps): React.JSX.Element {
  const isMulti = breakdown.devicesCount > 1;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 space-y-5 sticky top-24 shadow-xs">
      <h2 className="text-sm font-bold text-heading pb-3 border-b border-border">
        Récapitulatif de la commande
      </h2>

      <div className="space-y-2.5 text-xs">
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
          <span className="text-emerald-600 font-semibold">Offert (0€)</span>
        </div>
      </div>

      <div className="pt-3 border-t border-border flex justify-between items-baseline font-bold text-heading">
        <span>Total TTC</span>
        <span className="text-2xl text-primary transition-all">
          {breakdown.totalPrice}€
        </span>
      </div>

      {/* 4 Trust Anchors */}
      <div className="rounded-xl bg-white border border-border p-3.5 space-y-2.5 text-xs text-body">
        <div className="flex items-center gap-2.5 text-heading font-medium">
          <Zap className="h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
          <span>Livraison express par email en 15 min</span>
        </div>
        <div className="flex items-center gap-2.5 text-heading font-medium">
          <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
          <span>Garantie satisfait ou remboursé 7 jours</span>
        </div>
        <div className="flex items-center gap-2.5 text-heading font-medium">
          <Lock className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span>Paiement 100% sécurisé (SSL 256 bits)</span>
        </div>
        <div className="flex items-center gap-2.5 text-heading font-medium">
          <MessageCircle className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
          <span>Assistance WhatsApp 7j/7</span>
        </div>
      </div>
    </div>
  );
}
