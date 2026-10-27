import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";

export default function NotFound(): React.JSX.Element {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
          <HelpCircle className="w-8 h-8" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-wide uppercase text-primary">Erreur 404</p>
          <h1 className="text-3xl font-extrabold text-heading sm:text-4xl">Page introuvable</h1>
          <p className="text-sm text-body leading-relaxed">
            La page que vous recherchez n&apos;existe pas ou a été déplacée. Utilisez les liens ci-dessous pour continuer votre navigation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Retour à l&apos;accueil</span>
          </Link>
          <Link
            href="/plans-tarifs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-xs font-bold text-heading hover:bg-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Voir les forfaits</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
