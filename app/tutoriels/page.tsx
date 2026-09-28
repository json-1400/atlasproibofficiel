import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Wrench, Tv, Key, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllTutorials } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import { buildOrganizationSchema, buildBreadcrumbSchema } from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Tutoriels & Guides Atlas Pro ONTV | Dépannage et Configuration",
    description:
      "Tous les guides d'installation et solutions de dépannage pour Atlas Pro ONTV. Résolution des coupures, erreurs serveur et configuration Smart TV.",
    path: "/tutoriels",
  });
}

export default function TutorielsPage(): React.JSX.Element {
  const tutorials = getAllTutorials();

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Tutoriels", path: "/tutoriels" },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  const getCategoryBadge = (category: string): { label: string; icon: React.JSX.Element } => {
    switch (category) {
      case "troubleshooting":
        return {
          label: "Dépannage & Erreurs",
          icon: <Wrench className="h-3.5 w-3.5" aria-hidden="true" />,
        };
      case "hardware":
        return {
          label: "Installation Écran / TV",
          icon: <Tv className="h-3.5 w-3.5" aria-hidden="true" />,
        };
      case "account":
        return {
          label: "Compte & Codes",
          icon: <Key className="h-3.5 w-3.5" aria-hidden="true" />,
        };
      default:
        return {
          label: "Guide",
          icon: <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />,
        };
    }
  };

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: "Tutoriels" }]} />

      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold sm:text-4xl text-heading">
          Centre d&apos;Assistance & <span className="text-primary">Tutoriels Atlas Pro</span>
        </h1>
        <p className="text-base text-body">
          Guides pratiques rédigés par nos techniciens pour configurer votre matériel, résoudre les
          éventuels blocages et profiter de la meilleure qualité de visionnage.
        </p>
      </header>

      {/* Tutorials Grid */}
      <section aria-label="Liste des guides et tutoriels" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tut) => {
          const badge = getCategoryBadge(tut.category);

          return (
            <article
              key={tut.slug}
              className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-1 text-xs font-semibold text-primary mb-3">
                  {badge.icon}
                  <span>{badge.label}</span>
                </div>

                <h2 className="text-base font-bold text-heading mb-2 leading-snug">
                  <Link href={`/tutoriels/${tut.slug}`} className="hover:text-primary transition-colors">
                    {tut.title}
                  </Link>
                </h2>

                <p className="text-xs text-body leading-relaxed line-clamp-3">
                  {tut.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                <Link
                  href={`/tutoriels/${tut.slug}`}
                  className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover"
                >
                  <span>Consulter le tutoriel</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <span className="text-[11px] text-slate-400">
                  {tut.steps.length} étapes
                </span>
              </div>
            </article>
          );
        })}
      </section>

      {/* Assistance Contact Card */}
      <section className="rounded-2xl border border-border bg-surface p-8 text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-heading">
          Vous ne trouvez pas la solution à votre problème ?
        </h2>
        <p className="text-xs sm:text-sm text-body">
          Notre équipe technique vous guide pas-à-pas sur WhatsApp 7j/7 pour configurer votre équipement.
        </p>
        <div>
          <Link
            href="/abonnements/atlas-pro-12-mois"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
          >
            Contacter le Support Technique
          </Link>
        </div>
      </section>
    </div>
  </>
);
}
