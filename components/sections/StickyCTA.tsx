import React from "react";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export function StickyCTA(): React.JSX.Element {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white px-4 py-3 shadow-lg md:relative md:border-0 md:bg-transparent md:p-0 md:shadow-none">
      <div className="mx-auto flex max-w-4xl flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-surface border border-border p-4">
        <div className="flex items-center gap-3 text-left">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
            <Zap className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold text-heading sm:text-sm">
              Codes reçus en 15 minutes par e-mail • Activation immédiate
            </p>
            <p className="text-[11px] text-body hidden sm:block">
              Profitez d&apos;un serveur stable 4K sans coupure avec support 7j/7.
            </p>
          </div>
        </div>

        <Link
          href="/abonnements/atlas-pro-12-mois"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
        >
          <span>Activer l&apos;Abonnement (45€)</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
