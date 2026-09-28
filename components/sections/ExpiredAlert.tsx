import React from "react";
import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";

export function ExpiredAlert(): React.JSX.Element {
  return (
    <aside
      aria-label="Alerte compte expiré"
      className="my-6 rounded-2xl border-2 border-amber-400 bg-amber-50 p-5 text-amber-900 shadow-sm"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white">
            <AlertTriangle className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-bold text-amber-950">
              Votre compte ou code Atlas Pro est expiré ?
            </h3>
            <p className="mt-1 text-xs text-amber-800 leading-relaxed">
              Une coupure de connexion ou un écran noir est le plus souvent dû à l&apos;échéance de votre abonnement.
              Réactivez votre accès instantanément sans reconfigurer votre application.
            </p>
          </div>
        </div>

        <Link
          href="/abonnements/atlas-pro-12-mois"
          className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
        >
          <span>Commander l&apos;abonnement Atlas Pro 12 mois</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
