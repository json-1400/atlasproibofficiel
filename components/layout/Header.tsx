import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Header(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-heading font-bold text-lg tracking-tight"
          aria-label="Atlas Pro ONTV Accueil"
        >
          <Image
            src="/logo.png"
            alt="Atlas Pro ONTV - Logo Officiel"
            width={36}
            height={36}
            sizes="36px"
            priority
            className="h-9 w-9 rounded-xl object-contain"
          />
          <span>Atlas Pro ONTV</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
          <Link
            href="/abonnements"
            className="text-sm font-medium text-body hover:text-heading transition-colors"
          >
            Abonnements
          </Link>
          <Link
            href="/telecharger"
            className="text-sm font-medium text-body hover:text-heading transition-colors"
          >
            Télécharger
          </Link>
          <Link
            href="/tutoriels"
            className="text-sm font-medium text-body hover:text-heading transition-colors"
          >
            Tutoriels
          </Link>
          <Link
            href="/abonnements/renouvellement"
            className="text-sm font-medium text-body hover:text-heading transition-colors"
          >
            Renouvellement
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/abonnements/atlas-pro-12-mois"
            className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 text-xs font-semibold text-white shadow-sm hover:bg-primary-hover transition-colors"
          >
            Commander 12 Mois
          </Link>
        </div>
      </div>
    </header>
  );
}
