import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Tv,
  Monitor,
  Smartphone,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { RelatedTutorials } from "@/components/sections/RelatedTutorials";
import { AppSpecsGrid } from "@/components/sections/AppSpecsGrid";
import { DownloaderCodeCard } from "@/components/sections/DownloaderCodeCard";
import { AppAeoBox } from "@/components/sections/AppAeoBox";
import { DeveloperOptionsGuide } from "@/components/sections/DeveloperOptionsGuide";
import { AppsComparisonTable } from "@/components/sections/AppsComparisonTable";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllAppPages, getAppPageBySlug, getRelatedTutorials } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/schema";
import { buildAppSchema, buildAppHowToSchema } from "@/lib/schema-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const apps = getAllAppPages();
  return apps.map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppPageBySlug(slug);

  if (!app) {
    return buildMetadata({
      title: "Application non trouvée",
      description: "L'application demandée n'existe pas.",
      path: `/telecharger/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: app.seoTitle,
    description: app.seoDescription,
    path: `/telecharger/${app.slug}`,
  });
}

export default async function AppPageDetail({ params }: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const app = getAppPageBySlug(slug);

  if (!app) {
    notFound();
  }

  const relatedTutorials = getRelatedTutorials(app.relatedTutorialSlugs);
  const otherApps = getAllAppPages().filter((other) => other.slug !== app.slug);

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Téléchargements", path: "/telecharger" },
    { name: app.title, path: `/telecharger/${app.slug}` },
  ];

  const howToSchema = buildAppHowToSchema(app);

  const graphData: Array<Record<string, unknown>> = [
    buildOrganizationSchema(),
    buildAppSchema(app),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  if (howToSchema) {
    graphData.push(howToSchema);
  }

  if (app.faq && app.faq.length > 0) {
    graphData.push(buildFaqSchema(app.faq));
  }

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 pb-24 md:pb-16">
        <Breadcrumbs
          items={[
            { label: "Téléchargements", href: "/telecharger" },
            { label: app.title },
          ]}
        />

        {/* Hero Section */}
        <section className="rounded-2xl border border-border bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-12 pb-6 border-b border-border">
            <div className="space-y-5 flex-1 min-w-0">
              <div className="flex items-start gap-4 sm:gap-5">
                {/* App Logo Placeholder */}
                <div className="relative shrink-0">
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-border/80 bg-gradient-to-br from-surface to-slate-100 shadow-sm overflow-hidden p-2 transition-transform hover:scale-105 duration-200">
                    {app.logoUrl ? (
                      <Image
                        src={app.logoUrl}
                        alt={`Logo officiel ${app.title}`}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain rounded-xl"
                        priority
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center select-none">
                        {app.slug === "ios" ? (
                          <Smartphone className="h-7 w-7 sm:h-8 sm:w-8 text-primary" aria-hidden="true" />
                        ) : app.slug === "windows" ? (
                          <Monitor className="h-7 w-7 sm:h-8 sm:w-8 text-primary" aria-hidden="true" />
                        ) : (
                          <Tv className="h-7 w-7 sm:h-8 sm:w-8 text-primary" aria-hidden="true" />
                        )}
                        <span className="text-[10px] sm:text-[11px] font-extrabold text-heading tracking-tight mt-0.5">
                          {app.slug === "atlas-pro-ontv"
                            ? "ONTV"
                            : app.slug === "atlas-pro-max"
                            ? "MAX 7"
                            : app.slug === "atlas-pro-9x"
                            ? "9X"
                            : app.slug === "atlas-pro-ibo"
                            ? "IBO"
                            : app.slug === "ios"
                            ? "iOS"
                            : "PC"}
                        </span>
                      </div>
                    )}
                  </div>
                  <span
                    className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white ring-2 ring-white shadow-2xs"
                    title="Package officiel vérifié"
                    aria-label="Vérifié"
                  >
                    <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                  </span>
                </div>

                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      {app.platform}
                    </span>
                    <span className="rounded-full bg-surface border border-border px-3 py-1 text-xs font-semibold text-heading">
                      Version {app.version}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading leading-tight">
                    {app.slug === "ios"
                      ? "Faire Tourner le Service Atlas Pro sur iPhone, iPad & Apple TV"
                      : `Télécharger ${app.title}`}
                  </h1>
                </div>
              </div>

              {app.slug === "ios" ? (
                <div className="space-y-3">
                  <div className="rounded-xl border border-amber-200 bg-amber-50/90 p-4 text-xs sm:text-sm text-amber-950 leading-relaxed space-y-1.5 shadow-2xs">
                    <p className="font-bold flex items-center gap-1.5 text-amber-900">
                      <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
                      Appareil non compatible avec les APK natifs Atlas Pro
                    </p>
                    <p>
                      Les équipements Apple (iOS, iPadOS, tvOS, macOS) ne supportent pas les fichiers APK et <strong>aucune application officielle &quot;Atlas Pro&quot; n&apos;existe sur l&apos;App Store</strong> (politique stricte Apple).
                    </p>
                    <p className="text-[12px] text-amber-800">
                      Pour faire fonctionner votre abonnement Atlas Pro sur iPhone, iPad ou Apple TV, vous devez installer un <strong>lecteur IPTV alternatif certifié App Store</strong> (IPTV Smarters Lite, UHF IPTV ou IBO Player) et y renseigner vos identifiants Xtream Codes fournis par e-mail.
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    Accédez à l&apos;intégralité de vos bouquets 4K Ultra HD, événements sportifs en direct et catalogue VOD avec une stabilité maximale sur votre écran Apple.
                  </p>
                </div>
              ) : app.slug === "atlas-pro-ontv" ? (
                <p className="text-sm sm:text-base text-body leading-relaxed">
                  Téléchargez l&apos;application officielle <strong>Atlas Pro ONTV</strong> (également reconnue sous l&apos;appellation <strong>Atlas Pro On TV</strong> ou <em>atlaspro ontv</em>) sur votre Smart TV, boîtier Android TV ou Amazon Fire Stick pour activer votre{" "}
                  <Link href="/plans-tarifs/atlas-pro-12-mois" className="text-primary font-semibold hover:underline">
                    code IPTV Atlas Pro ONTV 12 mois
                  </Link>
                  . Grâce au code officiel <strong>822648</strong> sur <strong>Downloader by AFTVnews</strong>, l&apos;installation de l&apos;APK s&apos;effectue directement en 15 secondes sans passer par le Play Store ni manipulation manuelle de fichiers.
                </p>
              ) : app.slug === "atlas-pro-max" ? (
                <div className="space-y-3">
                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    Téléchargez l&apos;application officielle <strong>Atlas Pro Max APK 2026</strong> (successeur certifié des versions <strong>5.0.1, 6.0 et 7.0 APK</strong>, également recherchée sous le nom <em>atlaspro max</em>) pour smartphones Android, tablettes et Fire TV Stick. Profitez d&apos;une interface tactile fluide avec mode Picture-in-Picture et visionnage hors-ligne VOD via le code officiel <strong>388685</strong> sur <strong>Downloader by AFTVnews</strong>.
                  </p>
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-3.5 sm:p-4 space-y-1.5 text-xs text-heading">
                    <p className="font-bold flex items-center gap-2 text-primary">
                      <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Compatibilité directe et mise à niveau des versions 5.0.1, 6.0 & 7.0</span>
                    </p>
                    <p className="text-body leading-relaxed">
                      Si vous utilisez encore une ancienne version (comme <strong>Atlas Pro Max 5.0.1 APK</strong> ou des fichiers miroirs étiquetés 6.0 / 7.0 v911), cette édition officielle 2026 s&apos;installe directement par-dessus votre application existante. Vos identifiants de compte, codes d&apos;accès et chaînes favorites sont intégralement préservés sans réinitialisation.
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-sm sm:text-base text-body leading-relaxed">
                  Installez l&apos;application officielle <strong>{app.title}</strong> sur votre équipement pour accéder à vos flux IPTV 4K Ultra HD. L&apos;installation s&apos;effectue simplement et rapidement à l&apos;aide du code officiel sur <strong>Downloader by AFTVnews</strong>, sans manipulation de fichiers manuelle ni clé USB.
                </p>
              )}

              {app.slug === "ios" && (
                <div className="rounded-xl bg-surface border border-border p-3.5 flex items-center gap-3 text-xs text-slate-700">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>
                    Applications homologuées : Téléchargement direct et sécurisé depuis l&apos;<strong>App Store officiel d&apos;Apple</strong>.
                  </span>
                </div>
              )}
            </div>

            {/* Downloader by AFTVnews Action Card */}
            <div className="w-full lg:w-[400px] shrink-0">
              <DownloaderCodeCard app={app} />
            </div>
          </div>
        </section>

        {/* AEO Direct Answer Box */}
        {app.directAnswer && app.keyTakeaways && (
          <AppAeoBox
            directAnswer={app.directAnswer}
            keyTakeaways={app.keyTakeaways}
            appName={app.title}
          />
        )}

        {/* Specifications Grid */}
        <AppSpecsGrid app={app} />

        {/* Installation Steps */}
        {app.installSteps && app.installSteps.length > 0 && (
          <section aria-label="Étapes d'installation" className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-heading">
              {app.slug === "ios"
                ? "Comment faire fonctionner votre service Atlas Pro sur appareil Apple"
                : `Comment installer ${app.title} avec Downloader by AFTVnews`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {app.installSteps.map((step, idx) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-sm space-y-3.5 hover:border-primary/30 transition-colors"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white text-xs font-bold shadow-xs">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-heading">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Developer Options & Unknown Sources Guide */}
        {app.slug !== "ios" && app.slug !== "windows" && (
          <DeveloperOptionsGuide />
        )}

        {/* Changelog & Key Features */}
        <section aria-label="Nouveautés et fonctionnalités" className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-heading flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
            Nouveautés et atouts majeurs de la version {app.version}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            {app.changelog.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-xl bg-white border border-border p-4 text-xs sm:text-sm text-body shadow-2xs"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Apps Comparison Matrix */}
        {app.slug !== "ios" && app.slug !== "windows" && (
          <AppsComparisonTable currentSlug={app.slug} />
        )}

        {/* FAQ Section */}
        {app.faq && app.faq.length > 0 && (
          <section aria-label="Questions fréquentes" className="space-y-6 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-heading flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" aria-hidden="true" />
              Questions fréquentes sur {app.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {app.faq.map(({ question, answer }) => (
                <details
                  key={question}
                  className="group rounded-xl border border-border bg-white p-5 sm:p-6 open:border-primary/40 open:shadow-sm transition-all"
                >
                  <summary className="text-sm font-bold text-heading cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{question}</span>
                    <HelpCircle className="h-4 w-4 text-primary shrink-0 group-open:text-primary-hover transition-colors" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">{answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Sticky CTA & Activation Banner */}
        <StickyCTA />

        {/* Related Tutorials */}
        {relatedTutorials.length > 0 && (
          <RelatedTutorials
            tutorials={relatedTutorials}
            title={`Guides et tutoriels d'installation pour ${app.title}`}
          />
        )}

        {/* Alternative Atlas Pro Apps */}
        <section aria-label="Autres applications" className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-10 space-y-6">
          <h2 className="text-xl font-bold text-heading">
            Découvrez les autres versions d&apos;Atlas Pro
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherApps.slice(0, 3).map((other) => (
              <Link
                key={other.slug}
                href={`/telecharger/${other.slug}`}
                className="flex items-center justify-between rounded-xl border border-border bg-white p-5 hover:border-primary/40 hover:shadow-sm transition-all group"
              >
                <div>
                  <p className="text-xs font-bold text-heading group-hover:text-primary transition-colors">{other.title}</p>
                  <p className="text-[11px] text-slate-500">{other.platform}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
