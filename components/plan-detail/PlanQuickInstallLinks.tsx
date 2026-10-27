import React from "react";
import Link from "next/link";
import { Download, BookOpen, ArrowRight, Smartphone, Tv, Monitor } from "lucide-react";

interface AppLink {
  name: string;
  version: string;
  device: string;
  href: string;
}

const APPS: AppLink[] = [
  {
    name: "Atlas Pro ONTV",
    version: "v4.5 Officielle",
    device: "Android TV, Firestick & Box",
    href: "/telecharger/atlas-pro-ontv",
  },
  {
    name: "Atlas Pro Max 7",
    version: "v7.0 Édition 2026",
    device: "Smart TV & Mobiles Android",
    href: "/telecharger/atlas-pro-max",
  },
  {
    name: "Atlas Pro 9X",
    version: "v9.2 Ultra Légère",
    device: "Boîtiers anciens & Clés TV",
    href: "/telecharger/atlas-pro-9x",
  },
];

interface GuideLink {
  title: string;
  category: string;
  href: string;
}

const GUIDES: GuideLink[] = [
  {
    title: "Installer Atlas Pro sur Smart TV Samsung (Tizen)",
    category: "Smart TV",
    href: "/tutoriels/installer-atlas-pro-sur-tv-samsung",
  },
  {
    title: "Installer Atlas Pro sur Smart TV LG (webOS)",
    category: "Smart TV",
    href: "/tutoriels/installer-atlas-pro-sur-lg-smart-tv",
  },
  {
    title: "Installer Atlas Pro sur Amazon Fire TV Stick",
    category: "Clés TV",
    href: "/tutoriels/installer-atlas-pro-sur-fire-stick",
  },
  {
    title: "Résoudre l'erreur de connexion au serveur",
    category: "Dépannage",
    href: "/tutoriels/atlas-pro-ne-peut-pas-se-connecter-au-serveur",
  },
];

export function PlanQuickInstallLinks(): React.JSX.Element {
  return (
    <section className="space-y-6 pt-6 border-t border-border" aria-label="Applications et guides d'installation">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Écosystème & Guides d&apos;Activation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-heading">
          Applications Officielles et Guides d&apos;Installation Pas-à-Pas
        </h2>
        <p className="text-xs sm:text-sm text-body leading-relaxed max-w-3xl">
          Une fois votre commande validée, vous recevez vos identifiants <strong>Xtream Codes API</strong> et liens <strong>M3U</strong> par e-mail en moins de 15 minutes. Vous pouvez utiliser nos applications officielles dédiées ou configurer votre lecteur favori grâce à nos tutoriels complets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        {/* Apps Download Block */}
        <div className="rounded-2xl border border-border bg-white p-6 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-heading flex items-center gap-2">
              <Download className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Télécharger les Applications Officielles</span>
            </h3>
            <Link
              href="/telecharger"
              className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
            >
              <span>Tout voir</span>
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-2.5">
            {APPS.map((app) => (
              <Link
                key={app.name}
                href={app.href}
                className="flex items-center justify-between rounded-xl border border-border/80 bg-surface p-3.5 hover:border-primary hover:bg-white transition-all group"
              >
                <div>
                  <span className="block text-xs font-bold text-heading group-hover:text-primary transition-colors">
                    {app.name}
                  </span>
                  <span className="text-[11px] text-body">
                    {app.version} • {app.device}
                  </span>
                </div>
                <span className="rounded-lg bg-primary/10 text-primary px-2.5 py-1 text-[11px] font-semibold group-hover:bg-primary group-hover:text-white transition-colors">
                  APK Direct
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Setup Guides Block */}
        <div className="rounded-2xl border border-border bg-white p-6 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-heading flex items-center gap-2">
              <Tv className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Tutoriels de Configuration Rapide</span>
            </h3>
            <Link
              href="/tutoriels"
              className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
            >
              <span>Tous les guides</span>
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-2.5">
            {GUIDES.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="flex items-center justify-between rounded-xl border border-border/80 bg-surface p-3.5 hover:border-primary hover:bg-white transition-all group"
              >
                <div>
                  <span className="block text-xs font-bold text-heading group-hover:text-primary transition-colors">
                    {guide.title}
                  </span>
                  <span className="text-[11px] text-muted">{guide.category} • Moins de 5 min</span>
                </div>
                <ArrowRight className="h-4 w-4 text-body group-hover:text-primary group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
