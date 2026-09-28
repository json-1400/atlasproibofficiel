import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ExpiredAlert } from "@/components/sections/ExpiredAlert";
import { RelatedTutorials } from "@/components/sections/RelatedTutorials";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllTutorials, getTutorialBySlug, getRelatedTutorials } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildTutorialSchema,
  buildBreadcrumbSchema,
} from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const tutorials = getAllTutorials();
  return tutorials.map((tut) => ({
    slug: tut.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tut = getTutorialBySlug(slug);

  if (!tut) {
    return buildMetadata({
      title: "Tutoriel non trouvé",
      description: "Le tutoriel demandé n'existe pas.",
      path: `/tutoriels/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: tut.seoTitle,
    description: tut.seoDescription,
    path: `/tutoriels/${tut.slug}`,
  });
}

export default async function TutorialDetailPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const tut = getTutorialBySlug(slug);

  if (!tut) {
    notFound();
  }

  const related = getRelatedTutorials(tut.relatedTutorialSlugs);

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Tutoriels", path: "/tutoriels" },
    { name: tut.title, path: `/tutoriels/${tut.slug}` },
  ];

  const graphData = [
    buildOrganizationSchema(),
    ...buildTutorialSchema(tut),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Tutoriels", href: "/tutoriels" },
            { label: tut.title },
          ]}
        />

        {/* Monetization Bridge for Expired Codes */}
        {tut.showExpiredAlert && <ExpiredAlert />}

        <article className="space-y-8">
          <header className="space-y-3 pb-6 border-b border-border">
            <span className="inline-block rounded-md bg-surface px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              {tut.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading leading-tight">
              {tut.title}
            </h1>
            <p className="text-sm sm:text-base text-body leading-relaxed">
              {tut.excerpt}
            </p>
          </header>

          {/* Tutorial Body Introduction */}
          <div className="space-y-4 text-sm sm:text-base text-body leading-relaxed">
            {tut.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Numbered Steps */}
          <section aria-label="Étapes de configuration" className="space-y-6 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-heading">
              Marche à suivre détaillée
            </h2>

            <div className="space-y-5">
              {tut.steps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white font-bold text-sm">
                    {step.stepNumber}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-heading">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body leading-relaxed">
                      {step.instruction}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Cross-linking to related tutorials */}
        <RelatedTutorials tutorials={related} />
      </div>
    </>
  );
}
