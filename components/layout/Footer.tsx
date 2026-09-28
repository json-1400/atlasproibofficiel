import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface text-body">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-heading font-bold text-base"
              aria-label="Atlas Pro ONTV Officiel"
            >
              <Image
                src="/logo.png"
                alt="Atlas Pro ONTV - Logo Officiel"
                width={32}
                height={32}
                sizes="32px"
                loading="lazy"
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span>Atlas Pro ONTV</span>
            </Link>
            <p className="text-xs text-body leading-relaxed">
              Fournisseur officiel des abonnements et applications Atlas Pro ONTV.
              Activation rapide et assistance technique dédiée.
            </p>
          </div>

          <div>
            <p className="font-semibold text-heading text-sm mb-3">Abonnements</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/abonnements/atlas-pro-12-mois" className="hover:text-heading transition-colors">
                  Abonnement 12 Mois
                </Link>
              </li>
              <li>
                <Link href="/abonnements/atlas-pro-6-mois" className="hover:text-heading transition-colors">
                  Abonnement 6 Mois
                </Link>
              </li>
              <li>
                <Link href="/abonnements/atlas-pro-3-mois" className="hover:text-heading transition-colors">
                  Abonnement 3 Mois
                </Link>
              </li>
              <li>
                <Link href="/abonnements/renouvellement" className="hover:text-heading transition-colors">
                  Renouvellement d&apos;abonnement
                </Link>
              </li>
              <li>
                <Link href="/abonnements/multi-ecran" className="hover:text-heading transition-colors text-primary font-medium">
                  Offres Multi-Écrans (2 à 4 TV)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-heading text-sm mb-3">Applications & Support</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/telecharger/atlas-pro-ontv" className="hover:text-heading transition-colors">
                  Atlas Pro ONTV APK
                </Link>
              </li>
              <li>
                <Link href="/telecharger/atlas-pro-max" className="hover:text-heading transition-colors">
                  Atlas Pro Max APK
                </Link>
              </li>
              <li>
                <Link href="/tutoriels" className="hover:text-heading transition-colors">
                  Tous les tutoriels
                </Link>
              </li>
              <li>
                <Link href="/tutoriels/installation-smart-tv-samsung" className="hover:text-heading transition-colors">
                  Installation Smart TV
                </Link>
              </li>
              <li>
                <Link href="/ouvrir-ticket" className="hover:text-heading transition-colors font-medium text-primary">
                  Ouvrir un ticket support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-heading text-sm mb-3">Informations Légales</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/mentions-legales" className="hover:text-heading transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="hover:text-heading transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions-generales-de-vente" className="hover:text-heading transition-colors">
                  Conditions Générales de Vente
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-body gap-4">
          <p>© {currentYear} Atlas Pro ONTV Officiel. Tous droits réservés.</p>
          <p className="text-[11px] text-slate-400">
            Livraison instantanée par e-mail • Support WhatsApp 7j/7
          </p>
        </div>
      </div>
    </footer>
  );
}
