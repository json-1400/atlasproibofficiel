import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, CheckCircle2, Zap, ArrowRight, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { buildOrganizationSchema, buildBreadcrumbSchema } from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Renouvellement Abonnement Atlas Pro ONTV | Réactivation Immédiate",
    description:
      "Renouvelez votre abonnement Atlas Pro ONTV en quelques clics sans changer vos paramètres ni perdre vos favoris. Réactivation immédiate en 15 minutes.",
    path: "/abonnements/renouvellement",
  });
}

export default function RenouvellementPage(): React.JSX.Element {
  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Abonnements", path: "/abonnements" },
    { name: "Renouvellement", path: "/abonnements/renouvellement" },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs
          items={[
            { label: "Abonnements", href: "/abonnements" },
            { label: "Renouvellement" },
          ]}
        />

      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
          <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Espace Réactivation Rapide</span>
        </div>

        <h1 className="text-3xl font-extrabold sm:text-4xl text-heading">
          Renouvellement de votre <span className="text-primary">Abonnement Atlas Pro ONTV</span>
        </h1>
        <p className="text-base text-body">
          Votre abonnement arrive à échéance ou votre code est déjà expiré ? Prolongez votre service
          directement sans réinstaller votre application et sans perdre vos chaînes favorites.
        </p>
      </header>

      {/* 3 Steps Process */}
      <section className="rounded-2xl border border-border bg-surface p-8">
        <h2 className="text-xl font-bold text-heading text-center mb-8">
          Comment fonctionne le renouvellement ?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white border border-border p-5 space-y-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
              1
            </span>
            <h3 className="font-bold text-heading text-sm">Sélectionnez votre durée</h3>
            <p className="text-xs text-body">
              Choisissez la formule de votre choix (12 mois recommandé pour bénéficier du tarif le plus avantageux).
            </p>
          </div>

          <div className="rounded-xl bg-white border border-border p-5 space-y-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
              2
            </span>
            <h3 className="font-bold text-heading text-sm">Indiquez votre ancien code</h3>
            <p className="text-xs text-body">
              Précisez votre code actuel ou adresse MAC lors du paiement pour que notre serveur prolonge votre ligne existante.
            </p>
          </div>

          <div className="rounded-xl bg-white border border-border p-5 space-y-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
              3
            </span>
            <h3 className="font-bold text-heading text-sm">Réactivation automatique</h3>
            <p className="text-xs text-body">
              En moins de 15 minutes, votre ligne est prolongée à distance. Redémarrez votre application et profitez de vos flux.
            </p>
          </div>
        </div>
      </section>

      {/* Renewal Plan Options */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-heading text-center">
          Choisissez la durée de votre prolongation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl border-2 border-primary bg-white p-6 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-primary text-white text-[11px] font-bold px-3 py-0.5">
                Meilleur Tarif
              </span>
              <h3 className="text-lg font-bold text-heading">Renouvellement 12 Mois</h3>
              <p className="text-3xl font-extrabold text-heading">40€</p>
              <ul className="space-y-2 text-xs text-body pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>Prolongation immédiate sur 1 an</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>Sauvegarde de vos favoris</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>Support prioritaire 7j/7</span>
                </li>
              </ul>
            </div>
            <Link
              href="/commander/atlas-pro-12-mois"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-hover transition-colors shadow-sm"
            >
              <span>Renouveler pour 12 Mois (40€)</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-heading">Renouvellement 6 Mois</h3>
              <p className="text-3xl font-extrabold text-heading">30€</p>
              <ul className="space-y-2 text-xs text-body pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>Prolongation de 6 mois</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>Qualité 4K/FHD garantie</span>
                </li>
              </ul>
            </div>
            <Link
              href="/commander/atlas-pro-6-mois"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-surface border border-border text-heading text-xs font-bold hover:bg-slate-200 transition-colors"
            >
              Renouveler pour 6 Mois (30€)
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-heading">Renouvellement 3 Mois</h3>
              <p className="text-3xl font-extrabold text-heading">20€</p>
              <ul className="space-y-2 text-xs text-body pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>Prolongation de 3 mois</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>Livraison e-mail en 15 min</span>
                </li>
              </ul>
            </div>
            <Link
              href="/commander/atlas-pro-3-mois"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-surface border border-border text-heading text-xs font-bold hover:bg-slate-200 transition-colors"
            >
              Renouveler pour 3 Mois (20€)
            </Link>
          </div>
        </div>
      </section>

      <div className="rounded-2xl bg-accent-light border border-emerald-200 p-5 flex items-center justify-between gap-4 text-emerald-900 text-xs sm:text-sm">
        <div className="flex items-center gap-3">
          <Zap className="h-5 w-5 text-emerald-700 shrink-0" aria-hidden="true" />
          <span>Besoin d&apos;aide immédiate pour retrouver votre ancien code ? Notre support technique est disponible sur WhatsApp.</span>
        </div>
        <ShieldCheck className="h-6 w-6 text-emerald-700 shrink-0 hidden sm:block" aria-hidden="true" />
      </div>
    </div>
  </>
);
}
