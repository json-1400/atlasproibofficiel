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
    title: "Comment Installer Atlas Pro sur la TV | Tutoriels & Guides Officiels",
    description:
      "Guides d'installation Atlas Pro sur Smart TV Samsung, LG, Fire Stick, Xiaomi TV Box et Android. Résolvez les erreurs serveur et problèmes de connexion en 5 minutes.",
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
          Comment Installer Atlas Pro sur la TV :{" "}
          <span className="text-primary">Tous les Tutoriels Officiels</span>
        </h1>
        <p className="text-base text-body">
          Vous venez d&apos;obtenir votre abonnement Atlas Pro et vous cherchez comment l&apos;installer sur votre téléviseur ? Cette page regroupe tous nos guides techniques rédigés et vérifiés par notre équipe. Que vous ayez une Smart TV Samsung, un LG, un Fire TV Stick, une Xiaomi TV Box ou un appareil iOS, chaque tutoriel décrit les étapes précises.
        </p>

        {/* AEO Answer Block — Featured Snippet Target */}
        <div className="rounded-xl border-l-4 border-primary bg-surface px-6 py-4 text-left space-y-2 max-w-2xl mx-auto">
          <p className="text-xs font-bold text-primary uppercase tracking-wide">Réponse rapide</p>
          <p className="text-sm text-body leading-relaxed">
            Pour installer Atlas Pro sur votre téléviseur : téléchargez l&apos;APK officiel via <strong>Downloader</strong> sur Fire Stick, ou utilisez <strong>IBO Player</strong> depuis le Samsung Smart Hub. Entrez ensuite votre code d&apos;activation à 12 chiffres reçu par e-mail après votre commande. L&apos;installation prend moins de 5 minutes.
          </p>
        </div>
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
            href="/ouvrir-ticket"
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
