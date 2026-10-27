import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { TutorialsExplorer } from "@/components/tutorial/TutorialsExplorer";
import {
  getAllTutorials,
  TUTORIAL_CATEGORIES,
  POPULAR_TAGS,
} from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import { buildOrganizationSchema, buildBreadcrumbSchema } from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Tutoriels & Guides Atlas Pro : Installation & Dépannage TV",
    description:
      "Guides pas à pas Atlas Pro sur Smart TV Samsung, LG, Fire Stick et boîtier Android. Résolvez les erreurs de connexion et serveur en 5 minutes.",
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

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs items={[{ label: "Tutoriels" }]} />

        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold sm:text-4xl text-heading">
            Comment Installer Atlas Pro sur la TV :{" "}
            <span className="text-primary">Tous les Tutoriels Officiels</span>
          </h1>
          <p className="text-base text-body leading-relaxed">
            Vous venez d&apos;obtenir votre abonnement Atlas Pro et vous cherchez comment l&apos;installer sur votre téléviseur ? Cette section regroupe tous nos guides techniques rédigés et vérifiés par notre équipe d&apos;experts réseau. Que vous ayez une Smart TV Samsung, un LG, un Fire TV Stick ou une box Android, retrouvez les étapes précises et résolvez tout blocage en moins de 5 minutes.
          </p>

          {/* AEO Answer Block — Featured Snippet Target */}
          <div className="rounded-2xl border-l-4 border-primary bg-surface p-5 text-left space-y-2 max-w-2xl mx-auto shadow-xs">
            <p className="text-xs font-bold text-primary uppercase tracking-wide">
              Réponse rapide (AEO)
            </p>
            <p className="text-sm text-body leading-relaxed">
              Pour installer Atlas Pro sur votre téléviseur : téléchargez l&apos;APK officiel via <strong>Downloader</strong> (code officiel <strong>822648</strong>) sur Fire Stick, ou installez <strong>IBO Player</strong> depuis le Samsung Smart Hub / LG Content Store. Entrez ensuite votre code d&apos;activation à 12 chiffres reçu par e-mail. L&apos;activation prend moins de 5 minutes.
            </p>
          </div>
        </header>

        {/* Interactive Category & Tag Filter System */}
        <TutorialsExplorer
          tutorials={tutorials}
          categories={TUTORIAL_CATEGORIES}
          popularTags={POPULAR_TAGS}
        />
      </div>
    </>
  );
}
