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
    title: "Télécharger Atlas Pro APK Officiel | ONTV, Max & Toutes Plateformes",
    description:
      "Téléchargez l'APK officiel Atlas Pro ONTV ou Atlas Pro Max pour Android, Smart TV, Fire Stick, PC et iOS. Versions vérifiées SHA-256, sans publicité, flux 4K.",
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
          Télécharger Atlas Pro ONTV APK Officiel : <span className="text-primary">Toutes les Applications</span>
        </h1>
        <p className="text-base text-body">
          Pour télécharger Atlas Pro, deux applications officielles sont disponibles selon votre matériel. <strong>Atlas Pro ONTV</strong> est l’application principale conçue pour Smart TV, Android TV box et Fire TV Stick — elle offre le meilleur confort de visionnage sur grand écran. <strong>Atlas Pro Max</strong> est l’application mobile optimisée pour smartphones Android, tablettes et Chromecast. Chaque APK est vérifié par empreinte SHA-256 et ne contient aucune publicité.
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

      {/* Comparison Section — 'quelle appli pour atlas pro' */}
      <section className="rounded-2xl border border-border bg-surface p-8 space-y-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-heading text-center">
          Atlas Pro ONTV ou Atlas Pro Max : Quelle Application Choisir ?
        </h2>
        <p className="text-sm text-body text-center max-w-2xl mx-auto">
          Le choix dépend de votre matériel. Voici la règle simple : <strong>ONTV pour les TV et boîtiers, Max pour les smartphones et tablettes.</strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-white border-2 border-primary p-5 space-y-3">
            <h3 className="font-bold text-heading text-base">Atlas Pro ONTV — Smart TV & Boîtiers</h3>
            <ul className="text-xs text-body space-y-1.5 list-disc list-inside">
              <li>Android TV, Fire TV Stick 4K, Nvidia Shield</li>
              <li>Smart TV via IBO Player ou IPTV Smarters</li>
              <li>Interface télécommande optimisée, zapping ultra-rapide</li>
              <li>Lecture matérielle 4K HDR, Dolby Audio</li>
              <li>Version APK 4.5 — compatible Android 5.1+</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white border border-border p-5 space-y-3">
            <h3 className="font-bold text-heading text-base">Atlas Pro Max — Mobile & Tablettes</h3>
            <ul className="text-xs text-body space-y-1.5 list-disc list-inside">
              <li>Smartphones et tablettes Android</li>
              <li>Chromecast et Miracast depuis mobile</li>
              <li>Mode Picture-in-Picture (PiP)</li>
              <li>Téléchargement VOD hors-ligne</li>
              <li>Interface tactile repensée, poids léger (28 Mo)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section — 'comment telecharger atlas pro', 'atlas pro apk' */}
      <section className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-xl font-bold text-heading text-center">
          Questions Fréquentes sur le Téléchargement Atlas Pro
        </h2>
        <div className="space-y-3">
          {[
            {
              q: "Comment télécharger Atlas Pro sur mon téléviseur ?",
              a: "Sur Fire TV Stick, utilisez l'application Downloader pour installer l'APK Atlas Pro ONTV directement. Sur Android TV box (Xiaomi, Nvidia Shield), activez les sources inconnues dans Paramètres > Sécurité, puis installez l'APK. Sur Samsung ou LG Smart TV, utilisez IBO Player ou IPTV Smarters depuis le Smart Hub.",
            },
            {
              q: "L'APK Atlas Pro est-il sécurisé ?",
              a: "Oui. Chaque APK distribué sur cette page est signé et vérifié par empreinte SHA-256. Il ne contient aucun logiciel espion ni publicité. Vérifiez toujours que vous téléchargez depuis atlasproibofficiel.com — seule source officielle en France.",
            },
            {
              q: "Atlas Pro ONTV 4.0 ou 4.5 : quelle version installer ?",
              a: "Installez toujours la dernière version disponible (actuellement 4.5). La version 4.0 n'est plus maintenue. La version 4.5 apporte la stabilité multi-serveur et la compatibilité avec les nouvelles TV Android 14.",
            },
          ].map(({ q, a }) => (
            <details
              key={q}
              className="rounded-xl border border-border bg-white p-5 group open:border-primary/40"
            >
              <summary className="text-sm font-bold text-heading cursor-pointer list-none flex items-center justify-between gap-4">
                <span>{q}</span>
                <Download className="h-4 w-4 text-primary shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-xs text-body leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
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
