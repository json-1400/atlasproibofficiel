import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  Wrench,
  Tv,
  Key,
  Zap,
  Layers,
  HelpCircle,
  ArrowRight,
  Clock,
  FileText,
  Tag,
  ShieldCheck,
  Download,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { AeoSummaryBox } from "@/components/tutorial/AeoSummaryBox";
import {
  getAllIndexableCategories,
  getCategoryBySlug,
  getTutorialsByCategory,
} from "@/lib/mock-data";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { buildOrganizationSchema, buildBreadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const categories = getAllIndexableCategories();
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);

  if (!cat || cat.id === "all") {
    return buildMetadata({
      title: "Catégorie non trouvée",
      description: "La catégorie demandée n'existe pas.",
      path: `/tutoriels/categorie/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: cat.seoTitle,
    description: cat.seoDescription,
    path: `/tutoriels/categorie/${cat.slug}`,
  });
}

export default async function CategoryHubPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);

  if (!cat || cat.id === "all") {
    notFound();
  }

  const tutorials = getTutorialsByCategory(cat.id);

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Tutoriels", path: "/tutoriels" },
    { name: cat.name, path: `/tutoriels/categorie/${cat.slug}` },
  ];

  const pageUrl = `${SITE_URL}/tutoriels/categorie/${cat.slug}`;

  const collectionSchema: Record<string, unknown> = {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    url: pageUrl,
    name: cat.h1,
    description: cat.description,
    inLanguage: "fr-FR",
    hasPart: tutorials.map((tut) => ({
      "@type": "Article",
      name: tut.title,
      url: `${SITE_URL}/tutoriels/${tut.slug}`,
      description: tut.excerpt,
    })),
  };

  const graphData: Array<Record<string, unknown>> = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema(breadcrumbs),
    collectionSchema,
  ];

  if (cat.faq && cat.faq.length > 0) {
    graphData.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: cat.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  const getCategoryIcon = (id: string): React.JSX.Element => {
    switch (id) {
      case "installation":
        return <Tv className="h-4 w-4" aria-hidden="true" />;
      case "troubleshooting":
        return <Wrench className="h-4 w-4" aria-hidden="true" />;
      case "optimization":
        return <Zap className="h-4 w-4" aria-hidden="true" />;
      case "account":
        return <Key className="h-4 w-4" aria-hidden="true" />;
      default:
        return <HelpCircle className="h-4 w-4" aria-hidden="true" />;
    }
  };

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs
          items={[
            { label: "Tutoriels", href: "/tutoriels" },
            { label: cat.name },
          ]}
        />

        {/* Category Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            {getCategoryIcon(cat.id)}
            <span>Catégorie Officielle</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading leading-tight">
            {cat.h1}
          </h1>

          <p className="text-base sm:text-lg text-body leading-relaxed">
            {cat.fullIntro}
          </p>
        </header>

        {/* Category AEO & GEO Summary Box */}
        <AeoSummaryBox
          directAnswer={cat.directAnswer}
          keyTakeaways={cat.keyTakeaways}
          author={{
            name: "Équipe Technique Atlas Pro",
            role: "Support & Infrastructure IPTV",
          }}
          updatedAt="2026-03-22"
          readingTime={`${tutorials.length * 6} min total`}
          wordCount={tutorials.reduce((acc, t) => acc + t.wordCount, 0)}
        />

        {/* Category Tutorials Grid */}
        <section aria-label={`Guides de la catégorie ${cat.name}`} className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-heading">
              Guides et Tutoriels Disponibles ({tutorials.length})
            </h2>
            <Link
              href="/tutoriels"
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
            >
              <span>Voir tous les tutoriels</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tut) => (
              <article
                key={tut.slug}
                className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-1 text-xs font-semibold text-primary">
                      {getCategoryIcon(tut.category)}
                      <span>{tut.categoryLabel}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {tut.readingTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-heading leading-snug">
                    <Link
                      href={`/tutoriels/${tut.slug}`}
                      className="hover:text-primary transition-colors line-clamp-2"
                    >
                      {tut.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-body leading-relaxed line-clamp-3">
                    {tut.excerpt}
                  </p>

                  {tut.tags && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {tut.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                  <Link
                    href={`/tutoriels/${tut.slug}`}
                    className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover"
                  >
                    <span>Consulter le tutoriel</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <FileText className="h-3 w-3" aria-hidden="true" />
                    {tut.wordCount} mots
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Related Tags Bar */}
        {cat.relatedTags && cat.relatedTags.length > 0 && (
          <div className="rounded-2xl border border-border bg-white p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-heading">
              <Tag className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span>Thématiques et Mots-Clés Associés</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.relatedTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-surface border border-border/80 px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Category FAQ Accordion */}
        {cat.faq && cat.faq.length > 0 && (
          <section aria-label="Foire aux questions de la catégorie" className="space-y-4 pt-4 border-t border-border">
            <h2 className="text-xl sm:text-2xl font-bold text-heading flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" aria-hidden="true" />
              <span>Questions Fréquentes sur {cat.name}</span>
            </h2>
            <div className="space-y-3">
              {cat.faq.map(({ question, answer }) => (
                <details
                  key={question}
                  className="group rounded-xl border border-border bg-white p-5 open:border-primary/40 open:shadow-xs transition-all"
                >
                  <summary className="text-sm font-bold text-heading cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{question}</span>
                    <HelpCircle className="h-4 w-4 text-primary shrink-0 group-open:text-primary-hover transition-colors" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed border-t border-slate-100 pt-3">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Monetization Banner */}
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-surface to-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              <span>Garantie de Fluidité & 4K</span>
            </div>
            <h3 className="text-xl font-extrabold text-heading">
              Prêt à profiter d&apos;Atlas Pro sur votre écran ?
            </h3>
            <p className="text-sm text-body max-w-xl">
              Accédez à plus de 10 000 chaînes en direct et 40 000 films et séries en 4K. Activation immédiate après commande.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/telecharger"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-xs sm:text-sm font-bold text-heading hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <Download className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Télécharger l&apos;application</span>
            </Link>
            <Link
              href="/commander"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-primary-hover transition-colors shadow-sm"
            >
              <span>Activer mon abonnement</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
