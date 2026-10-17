import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Download, Tv, Smartphone, Monitor, Apple, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { AlternativeAppsGrid } from "@/components/sections/AlternativeAppsGrid";
import { getAllAppPages } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Atlas Pro APK : Télécharger l'Application Officielle 2026",
    description:
      "Télécharger l'APK officiel Atlas Pro (Atlas Pro ONTV, Max 7, 9X) pour Fire TV Stick, Android TV et smartphone. Codes Downloader certifiés et guide d'installation 2026.",
    path: "/telecharger",
  });
}

const FAQ_ITEMS = [
  {
    q: "Comment télécharger Atlas Pro APK sur Fire TV Stick et Android TV ?",
    a: "Pour installer Atlas Pro APK sur Amazon Fire Stick ou boîtier Android TV, ouvrez l'application Downloader by AFTVnews, puis saisissez le code officiel certifié : 822648 pour Atlas Pro ONTV, 388685 pour Atlas Pro Max 7, ou 4858164 pour Atlas Pro 9X. Le téléchargement direct de l'APK démarre automatiquement en quelques secondes sans ordinateur.",
  },
  {
    q: "Quelle application utiliser si ma TV Samsung ou LG ne supporte pas l'APK Atlas Pro ?",
    a: "Les systèmes Samsung (Tizen OS) et LG (webOS) ne permettent pas d'installer directement un fichier APK. Installez IBO Player, Smart IPTV (SIPTV) ou IPTV Smarters Pro depuis le store officiel de votre téléviseur. Vous pourrez vous connecter avec vos identifiants Atlas Pro via l'API Xtream Codes.",
  },
  {
    q: "L'APK Atlas Pro est-il sécurisé et sans virus ?",
    a: "Oui. Toutes les versions de l'APK Atlas Pro fournies via nos codes officiels sont certifiées sans malware, sans logiciel espion et sans publicités intrusives. Chaque fichier APK est vérifié par empreinte numérique SHA-256 avant déploiement.",
  },
  {
    q: "Peut-on installer Atlas Pro APK sur smartphone et tablette Android ?",
    a: "Oui, vous pouvez installer Atlas Pro Max 7 ou Atlas Pro ONTV sur tout smartphone ou tablette Android. Téléchargez le fichier APK directement depuis votre navigateur ou via Downloader, autorisez les sources inconnues dans les paramètres de sécurité, puis lancez l'installation.",
  },
  {
    q: "Peut-on utiliser TiviMate IPTV Player avec un abonnement Atlas Pro ?",
    a: "Oui, TiviMate est entièrement compatible avec les flux Atlas Pro. Dans TiviMate, ajoutez une playlist 'Xtream Codes', renseignez l'URL du serveur Atlas Pro ainsi que vos identifiants de compte pour profiter du guide EPG 7 jours et de la qualité 4K UHD.",
  },
  {
    q: "Quelle est la meilleure alternative pour iPhone, iPad et Apple TV ?",
    a: "Sur iOS et tvOS (Apple TV 4K), installez UHF IPTV ou IPTV Smarters Player Lite depuis l'App Store officiel d'Apple. Renseignez vos accès Xtream Codes Atlas Pro pour synchroniser l'ensemble des chaînes en direct et la VOD.",
  },
];

export default function TelechargerPage(): React.JSX.Element {
  const apps = getAllAppPages();

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Télécharger Atlas Pro APK", path: "/telecharger" },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema(breadcrumbs),
    buildFaqSchema(FAQ_ITEMS.map((item) => ({ question: item.q, answer: item.a }))),
  ];

  const getPlatformIcon = (slug: string): React.JSX.Element => {
    switch (slug) {
      case "atlas-pro-ontv":
      case "atlas-pro-9x":
      case "atlas-pro-ibo":
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
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 space-y-14">
        <Breadcrumbs items={[{ label: "Télécharger Atlas Pro APK" }]} />

        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold sm:text-4xl text-heading">
            Télécharger Atlas Pro APK : <span className="text-primary">Applications Officielles & Compatibles</span>
          </h1>
          <p className="text-sm sm:text-base text-body">
            Téléchargez l&apos;application <strong>Atlas Pro APK</strong> officielle adaptée à votre appareil pour profiter de vos flux IPTV en 4K UHD. Installez <strong>Atlas Pro ONTV</strong>, <strong>Atlas Pro Max 7</strong> ou <strong>Atlas Pro 9X</strong> directement sur votre Fire TV Stick et box Android via nos codes certifiés Downloader, ou configurez vos lecteurs compatibles (<strong>IBO Player, Smart IPTV, TiviMate</strong>) sur Samsung Tizen, LG webOS et Apple TV.
          </p>
        </header>

        {/* Section 1: Official Atlas Pro Apps Matrix */}
        <section aria-label="Applications officielles Atlas Pro APK" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-heading">
              Atlas Pro APK : Versions Officielles (Installation via Downloader)
            </h2>
            <span className="inline-block text-xs font-semibold text-slate-500">
              Certifié SHA-256 sans publicité
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                  <h3 className="text-lg font-bold text-heading mb-1">
                    {app.title}
                  </h3>
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

                  {app.downloaderCode && app.downloaderCode !== "Non requis (Store TV)" && (
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                      <span>Code Downloader :</span>
                      <strong className="font-mono text-sm">{app.downloaderCode}</strong>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <Link
                    href={`/telecharger/${app.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
                  >
                    <span>Guide de téléchargement</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  <span className="text-[11px] text-slate-400">Sécurisé</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 2: Step-by-Step Installation Guide for Atlas Pro APK */}
        <section aria-label="Guide installation Atlas Pro APK" className="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-heading">
              Comment Télécharger et Installer Atlas Pro APK via Downloader ?
            </h2>
            <p className="text-xs sm:text-sm text-body">
              Procédure rapide en 3 étapes pour Amazon Fire TV Stick, Xiaomi Mi Box, Nvidia Shield et téléviseurs Android TV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white border border-border p-5 space-y-3 relative shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-black">
                  1
                </span>
                <h3 className="text-sm font-bold text-heading">Installez Downloader</h3>
              </div>
              <p className="text-xs text-body leading-relaxed">
                Depuis votre Fire Stick ou Android TV, ouvrez le store d&apos;applications et installez l&apos;application gratuite <strong>Downloader by AFTVnews</strong>.
              </p>
            </div>

            <div className="rounded-xl bg-white border-2 border-primary/40 p-5 space-y-3 relative shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-black">
                  2
                </span>
                <h3 className="text-sm font-bold text-heading">Saisissez le Code APK</h3>
              </div>
              <p className="text-xs text-body leading-relaxed">
                Dans la barre URL de Downloader, tapez l&apos;un de nos codes officiels : <strong className="font-mono text-primary">822648</strong> (ONTV 4K), <strong className="font-mono text-primary">388685</strong> (Max 7) ou <strong className="font-mono text-primary">4858164</strong> (9X).
              </p>
            </div>

            <div className="rounded-xl bg-white border border-border p-5 space-y-3 relative shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-black">
                  3
                </span>
                <h3 className="text-sm font-bold text-heading">Validez l&apos;Installation</h3>
              </div>
              <p className="text-xs text-body leading-relaxed">
                Le téléchargement direct démarre. Cliquez sur <strong>Installer</strong>, puis ouvrez l&apos;application pour renseigner votre code d&apos;abonnement ou vos identifiants.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Universal Alternatives Grid (Samsung, LG, Apple TV, TiviMate, etc.) */}
        <AlternativeAppsGrid />

        {/* Section 4: Hardware Choice Quick Comparison */}
        <section aria-label="Comparatif matériel" className="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-heading text-center">
            Résumé : Quelle Solution Choisir Pour Votre Écran ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl bg-white border-2 border-primary p-4 space-y-2">
              <h3 className="font-bold text-heading text-sm">Fire Stick & Android TV</h3>
              <p className="text-[11px] font-medium text-primary">Downloader Code 822648</p>
              <ul className="text-xs text-body space-y-1 list-disc list-inside">
                <li>Atlas Pro ONTV (4K natif)</li>
                <li>Atlas Pro 9X (Box 1 Go RAM)</li>
                <li>TiviMate (Option avancée)</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white border border-border p-4 space-y-2">
              <h3 className="font-bold text-heading text-sm">Samsung & LG Smart TV</h3>
              <p className="text-[11px] font-medium text-primary">Store TV Officiel</p>
              <ul className="text-xs text-body space-y-1 list-disc list-inside">
                <li>IBO Player (Recommandé)</li>
                <li>Smart IPTV (SIPTV)</li>
                <li>IPTV Smarters Pro</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white border border-border p-4 space-y-2">
              <h3 className="font-bold text-heading text-sm">Apple (iOS & Apple TV)</h3>
              <p className="text-[11px] font-medium text-primary">App Store Apple</p>
              <ul className="text-xs text-body space-y-1 list-disc list-inside">
                <li>UHF IPTV (Apple TV 4K)</li>
                <li>IPTV Smarters Lite</li>
                <li>GSE Smart IPTV</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white border border-border p-4 space-y-2">
              <h3 className="font-bold text-heading text-sm">PC, Mac & Formuler</h3>
              <p className="text-[11px] font-medium text-primary">Logiciel & Portal</p>
              <ul className="text-xs text-body space-y-1 list-disc list-inside">
                <li>Smarters Pro PC / Mac</li>
                <li>VLC Media Player</li>
                <li>MyTVOnline (Formuler)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Expanded FAQ */}
        <section aria-label="Questions fréquentes sur les applications" className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-heading text-center">
            Questions Fréquentes sur les Applications Atlas Pro
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map(({ q, a }) => (
              <details
                key={q}
                className="rounded-xl border border-border bg-white p-5 group open:border-primary/40 open:shadow-sm"
              >
                <summary className="text-sm font-bold text-heading cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{q}</span>
                  <Download className="h-4 w-4 text-primary shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true" />
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Section 5: Need Activation CTA */}
        <section className="rounded-2xl border border-border bg-surface p-8 text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-heading">
            Vous venez d&apos;installer votre application IPTV ?
          </h2>
          <p className="text-xs sm:text-sm text-body">
            Obtenez immédiatement vos identifiants officiels Atlas Pro (Code 12 chiffres, API Xtream Codes et lien M3U) valables sur l&apos;ensemble de ces lecteurs.
          </p>
          <div className="pt-2">
            <Link
              href="/plans-tarifs/atlas-pro-12-mois"
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
