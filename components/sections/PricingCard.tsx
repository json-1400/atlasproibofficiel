import React from "react";
import Link from "next/link";
import { Check, Zap, Sparkles } from "lucide-react";
import type { Plan } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export interface PricingCardProps {
  plan: Plan;
}

export function PricingCard({ plan }: PricingCardProps): React.JSX.Element {
  const isPop = plan.isPopular;

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 transition-all",
        isPop
          ? "border-primary bg-white shadow-md ring-2 ring-primary/20"
          : "border-border bg-white shadow-sm hover:shadow-md"
      )}
    >
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold shadow-sm",
              isPop
                ? "bg-primary text-white"
                : "bg-surface text-heading border border-border"
            )}
          >
            {isPop && <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />}
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        <div className="text-center pb-6 border-b border-border">
          <h3 className="text-lg font-bold text-heading">{plan.title}</h3>
          <p className="text-xs text-body mt-1">
            Valable pour {plan.durationMonths} mois d&apos;accès complet
          </p>

          <div className="mt-4 flex items-baseline justify-center gap-2">
            <span className="text-4xl font-extrabold text-heading">{plan.price}€</span>
            {plan.oldPrice && (
              <span className="text-sm text-slate-400 line-through">
                {plan.oldPrice}€
              </span>
            )}
          </div>

          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent-light px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
            <Zap className="h-3 w-3" aria-hidden="true" />
            <span>Livraison en 15 minutes</span>
          </div>
        </div>

        <ul className="mt-6 space-y-3 text-xs text-body">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-4">
        <Link
          href={`/commander/${plan.slug}`}
          rel="nofollow"
          className={cn(
            "w-full inline-flex h-11 items-center justify-center rounded-xl text-xs font-bold transition-colors shadow-sm",
            isPop
              ? "bg-primary text-white hover:bg-primary-hover"
              : "bg-surface text-heading border border-border hover:bg-slate-200"
          )}
        >
          {plan.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
