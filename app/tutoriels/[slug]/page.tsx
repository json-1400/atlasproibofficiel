import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ExpiredAlert } from "@/components/sections/ExpiredAlert";
import { RelatedTutorials } from "@/components/sections/RelatedTutorials";
import { JsonLd } from "@/components/seo/JsonLd";
import { AeoSummaryBox } from "@/components/tutorial/AeoSummaryBox";
import { TableOfContents } from "@/components/tutorial/TableOfContents";
import { TutorialHeader } from "@/components/tutorial/TutorialHeader";
import { TutorialSectionsList } from "@/components/tutorial/TutorialSectionsList";
import { TutorialStepsSection } from "@/components/tutorial/TutorialStepsSection";
import { TutorialFaqSection } from "@/components/tutorial/TutorialFaqSection";
import { TutorialSidebar } from "@/components/tutorial/TutorialSidebar";
import {
  getAllTutorials,
  getTutorialBySlug,
  getRelatedTutorials,
} from "@/lib/mock-data";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { buildOrganizationSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { buildTutorialSchema } from "@/lib/schema-content";

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

  const imageUrl = tut.mainImage?.url?.startsWith("http")
    ? tut.mainImage.url
    : `${SITE_URL}${tut.mainImage?.url || "/icon.png"}`;

  return buildMetadata({
    title: tut.seoTitle,
    description: tut.seoDescription,
    path: `/tutoriels/${tut.slug}`,
    image: imageUrl,
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
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Tutoriels", href: "/tutoriels" },
            { label: tut.title },
          ]}
        />

        {tut.showExpiredAlert && <ExpiredAlert />}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Content Column */}
          <article className="lg:col-span-8 space-y-8">
            <TutorialHeader tut={tut} />

            {/* Sommaire du guide - In the body under the main post image */}
            {tut.tableOfContents && tut.tableOfContents.length > 0 && (
              <TableOfContents items={tut.tableOfContents} />
            )}

            <AeoSummaryBox
              directAnswer={tut.directAnswer}
              keyTakeaways={tut.keyTakeaways}
              author={tut.author}
              updatedAt={tut.updatedAt}
              readingTime={tut.readingTime}
              wordCount={tut.wordCount}
            />

            {/* Introductory Body Paragraphs */}
            <div className="space-y-4 text-base text-body leading-relaxed">
              {tut.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <TutorialSectionsList sections={tut.sections} />

            <TutorialStepsSection steps={tut.steps} />

            {/* Advanced Tips Block */}
            {tut.advancedTips && tut.advancedTips.length > 0 && (
              <section
                id="reglages-avances"
                aria-label="Réglages avancés"
                className="space-y-4 pt-6 border-t border-border scroll-mt-24"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-heading">
                  Réglages avancés & Optimisation réseau
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tut.advancedTips.map((tip, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border bg-surface p-4 space-y-2 shadow-2xs"
                    >
                      <h3 className="text-sm font-bold text-heading">
                        {tip.title}
                      </h3>
                      <p className="text-xs text-body leading-relaxed">
                        {tip.description}
                      </p>
                      {tip.codeOrParam && (
                        <code className="block rounded bg-white border border-border px-2.5 py-1 text-xs font-mono text-primary font-bold overflow-x-auto">
                          {tip.codeOrParam}
                        </code>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <TutorialFaqSection faq={tut.faq} />
          </article>

          {/* Sticky Sidebar Column */}
          <div className="lg:col-span-4">
            <TutorialSidebar tut={tut} related={related} />
          </div>
        </div>

        <section className="pt-8 border-t border-border">
          <RelatedTutorials tutorials={related} />
        </section>
      </div>
    </>
  );
}
