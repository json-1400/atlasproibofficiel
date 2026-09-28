import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Download, Tv, Smartphone, Monitor, Apple, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllAppPages } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import { buildOrganizationSchema, buildBreadcrumbSchema } from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Télécharger Atlas Pro ONTV APK Officiel | Toutes Plateformes",
    description:
      "Téléchargez les applications officielles Atlas Pro ONTV et Atlas Pro Max en version APK vérifiée pour Android TV, Smart TV, Fire Stick, PC Windows et iOS.",
    path: "/telecharger",
  });
}

export default function TelechargerPage(): React.JSX.Element {
  const apps = getAllAppPages();

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Téléchargements", path: "/telecharger" },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  const getPlatformIcon = (slug: string): React.JSX.Element => {
    switch (slug) {
      case "atlas-pro-ontv":
        return <Tv className="h-6 w-6 text-primary" aria-hidden="true" />;
      case "atlas-pro-max":
        return <Smartphone className="h-6 w-6 text-primary" aria-hidden="true" />;
      case "windows":
        return <Monitor className="h-6 w-6 text-primary" aria-hidden="true" />;
      case "ios":
        return <Apple className="h-6 w-6 text-primary" aria-hidden="true" />;
      default:
        return <Download className="h-6 w-6 text-primary" aria-hidden="true" />;
    }
  };

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: "Téléchargements" }]} />

      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold sm:text-4xl text-heading">
          Centre de <span className="text-primary">Téléchargement Atlas Pro ONTV</span>
        </h1>
        <p className="text-base text-body">
          Installez les applications officielles et certifiées Atlas Pro sur l&apos;ensemble de vos écrans.
          Versions APK directes, exemptes de publicités et optimisées pour les flux 4K.
        </p>
      </header>

      {/* App Matrix Grid */}
      <section aria-label="Liste des applications" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {apps.map((app) => (
          <article
            key={app.slug}
            className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  {getPlatformIcon(app.slug)}
                </div>
                <span className="rounded-full bg-surface border border-border px-3 py-1 text-xs font-semibold text-heading">
                  {app.version}
                </span>
              </div>

              <h2 className="text-xl font-bold text-heading mb-1">
                <Link href={`/telecharger/${app.slug}`} className="hover:text-primary transition-colors">
                  {app.title}
                </Link>
              </h2>
              <p className="text-xs font-medium text-primary mb-3">{app.platform}</p>

              <div className="text-xs text-body space-y-1 mb-4">
                <p className="font-semibold text-heading">Points forts :</p>
                <ul className="list-disc list-inside space-y-0.5 text-slate-500">
                  {app.changelog.slice(0, 2).map((item) => (
                    <li key={item} className="line-clamp-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <Link
                href={`/telecharger/${app.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover"
              >
                <span>Guide & Téléchargement</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <span className="text-[11px] text-slate-400">SHA-256 certifié</span>
            </div>
          </article>
        ))}
      </section>

      {/* Need Activation CTA */}
      <section className="rounded-2xl border border-border bg-surface p-8 text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-heading">
          Vous venez d&apos;installer l&apos;application ?
        </h2>
        <p className="text-xs sm:text-sm text-body">
          Pour utiliser Atlas Pro, un code d&apos;accès valide à 12 chiffres est requis. Obtenez votre code officiel en quelques instants.
        </p>
        <div>
          <Link
            href="/abonnements/atlas-pro-12-mois"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
          >
            Obtenir mon Code d&apos;Activation (12 Mois à 40€)
          </Link>
        </div>
      </section>
    </div>
  </>
);
}
