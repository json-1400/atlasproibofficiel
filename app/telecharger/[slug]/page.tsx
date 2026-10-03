import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Download, FileCheck, CheckCircle2, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { RelatedTutorials } from "@/components/sections/RelatedTutorials";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllAppPages, getAppPageBySlug, getRelatedTutorials } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildBreadcrumbSchema,
} from "@/lib/schema";
import { buildAppSchema } from "@/lib/schema-content";

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
  const showStickyCTA = app.slug === "atlas-pro-ontv" || app.slug === "atlas-pro-max";
  const isExternal = app.apkUrl.startsWith("http://") || app.apkUrl.startsWith("https://");

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Téléchargements", path: "/telecharger" },
    { name: app.title, path: `/telecharger/${app.slug}` },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildAppSchema(app),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 space-y-12 pb-24 md:pb-12">
        <Breadcrumbs
          items={[
            { label: "Téléchargements", href: "/telecharger" },
            { label: app.title },
          ]}
        />

        {/* Main Download Hero */}
        <section className="rounded-2xl border border-border bg-white p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border">
            <div className="space-y-2">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {app.platform}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-heading">
                Télécharger {app.title}
              </h1>
              <p className="text-sm text-body">
                Version officielle {app.version} • Fichier certifié sans publicité ni malware
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-2">
              <button
                disabled
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-200 px-8 text-sm font-bold text-slate-500 shadow-sm cursor-not-allowed"
                title="Les fichiers de téléchargement seront disponibles prochainement"
              >
                <Download className="h-5 w-5 opacity-50" aria-hidden="true" />
                <span>Bientôt disponible</span>
              </button>
              <span className="text-[11px] text-center text-slate-400">
                Fichiers en cours de mise à jour
              </span>
            </div>
          </div>

          {/* SHA-256 and Integrity Check */}
          <div className="rounded-xl bg-surface border border-border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-heading font-medium">
              <FileCheck className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>Empreinte de sécurité SHA-256 :</span>
            </div>
            <code className="rounded bg-white px-2.5 py-1 text-[11px] text-slate-600 font-mono border border-border break-all">
              {app.sha256}
            </code>
          </div>

          {/* Installation Steps */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-heading">
              Guide d&apos;installation étape par étape
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {app.installSteps.map((step, idx) => (
                <div key={step.title} className="rounded-xl border border-border bg-surface p-5 space-y-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-heading">{step.title}</h3>
                  <p className="text-xs text-body leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Changelog */}
          <div className="pt-6 border-t border-border space-y-3">
            <h3 className="text-base font-bold text-heading">
              Nouveautés de la version {app.version}
            </h3>
            <ul className="space-y-2">
              {app.changelog.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-body">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sticky Conversion Bar */}
        {showStickyCTA && <StickyCTA />}

        {/* Cross-linking to related tutorials */}
        <RelatedTutorials
          tutorials={relatedTutorials}
          title={`Tutoriels d'installation pour ${app.title}`}
        />
      </div>
    </>
  );
}
