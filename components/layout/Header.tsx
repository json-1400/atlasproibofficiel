// CLIENT: interactive mobile navigation drawer state
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, LifeBuoy } from "lucide-react";

interface NavLinkItem {
  label: string;
  href: string;
  badge?: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "Abonnements", href: "/abonnements" },
  { label: "Télécharger", href: "/telecharger" },
  { label: "Tutoriels", href: "/tutoriels" },
  { label: "Renouvellement", href: "/abonnements/renouvellement" },
  { label: "Ouvrir un Ticket", href: "/ouvrir-ticket", badge: "7j/7" },
];

export function Header(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle ESC key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-heading font-bold text-lg tracking-tight"
          aria-label="Atlas Pro ONTV Accueil"
          onClick={closeMenu}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "text-primary font-semibold" : "text-body hover:text-heading"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/abonnements/atlas-pro-12-mois"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 text-xs font-semibold text-white shadow-sm hover:bg-primary-hover transition-colors"
          >
            Commander 12 Mois
          </Link>

          {/* Hamburger Button (Mobile) */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-heading hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-30 bg-black/40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Panel */}
      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 top-16 z-40 border-b border-border bg-background shadow-lg transition-all duration-200 ease-in-out md:hidden ${
          isOpen ? "max-h-[calc(100vh-4rem)] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
        }`}
      >
        <div className="px-4 py-6 space-y-5">
          {/* Mobile Links */}
          <nav className="flex flex-col space-y-1" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex h-12 items-center justify-between rounded-xl px-4 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-heading hover:bg-surface"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Action Buttons */}
          <div className="space-y-3 pt-2 border-t border-border">
            <Link
              href="/abonnements/atlas-pro-12-mois"
              onClick={closeMenu}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
            >
              <span>Commander 12 Mois (45€)</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href="https://wa.me/33756898687?text=Bonjour,%20j'ai%20besoin%20d'aide%20avec%20mon%20abonnement%20Atlas%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 text-xs font-semibold text-heading hover:bg-white transition-colors"
            >
              <LifeBuoy className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Assistance Directe WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
