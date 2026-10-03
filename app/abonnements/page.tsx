import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, RefreshCw, HelpCircle, Layers, ShieldCheck, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSingleScreenPlans, getAllPlans } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildCatalogCollectionSchema,
  buildBreadcrumbSchema,
} from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Abonnement Atlas Pro : Formules Officielles 12, 6 & 3 Mois en France",
    description:
      "Abonnement Atlas Pro officiel en France. Comparez nos formules 12 mois à 40€, 6 mois à 30€ et 3 mois à 20€. Codes d'accès IPTV livrés par e-mail en 15 minutes.",
    path: "/abonnements",
  });
}

export default function AbonnementsPage(): React.JSX.Element {
  const plans = getSingleScreenPlans();
  const allPlans = getAllPlans();

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Catalogue Abonnements", path: "/abonnements" },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildCatalogCollectionSchema(plans),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: "Catalogue Abonnements" }]} />

        {/* Hub Header */}
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <Layers className="h-4 w-4" aria-hidden="true" />
            <span>Catalogue Officiel • Distributeur Atlas Pro France</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl text-heading tracking-tight">
            Abonnement Atlas Pro Officiel : Choisissez Votre Formule en France
          </h1>
          <p className="text-base text-body leading-relaxed">
            Vous cherchez un abonnement Atlas Pro fiable pour regarder vos chaînes préférées sans coupures ? Vous êtes au bon endroit. En tant que distributeur officiel en France, nous proposons trois formules d&apos;abonnement IPTV Atlas Pro adaptées à chaque usage : 12 mois à 40€ pour les utilisateurs réguliers, 6 mois à 30€ pour les saisons sportives, et 3 mois à 20€ pour découvrir le service. Chaque abonnement inclut un accès immédiat à plus de 10 000 chaînes en flux direct, un catalogue VOD complet et vos identifiants Xtream Codes livrés par e-mail en moins de 15 minutes après validation de la commande.
          </p>
        </header>

        {/* SEO Entity Block */}
        <section className="rounded-2xl border border-border bg-surface p-8 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-heading">
            Pourquoi choisir un abonnement IPTV Atlas Pro en France ?
          </h2>
          <p className="text-sm text-body leading-relaxed">
            Le service Atlas Pro s&apos;appuie sur une infrastructure CDN européenne dédiée qui garantit un flux IPTV stable même lors des grands événements sportifs en direct. Contrairement aux offres génériques, chaque code d&apos;activation Atlas Pro est lié à un serveur individuel avec load-balancing automatique. Résultat : zéro freeze, zéro buffering. Compatible avec les applications Atlas Pro ONTV, Atlas Pro Max, IBO Player, IPTV Smarters Pro et TiviMate, votre abonnement fonctionne sur Smart TV, boîtier Android, Fire Stick, PC et iOS. Besoin de renouveler un code existant ?{" "}
            <Link href="/abonnements/renouvellement" className="text-primary underline font-semibold">
              Renouveler votre code Atlas Pro existant
            </Link>.
          </p>
        </section>

        {/* Catalog Cards Grid */}
        <section aria-label="Liste des formules au catalogue" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const monthlyEquivalent = (plan.price / plan.durationMonths).toFixed(2);
            return (
              <article
                key={plan.slug}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 bg-surface transition-all ${
                  plan.isPopular ? "border-primary ring-1 ring-primary shadow-sm" : "border-border hover:border-slate-300"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-heading">{plan.title}</h2>
                    <p className="text-xs text-muted mt-1">Durée ferme : {plan.durationMonths} mois</p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-heading">{plan.price}€</span>
                    {plan.oldPrice && (
                      <span className="text-sm text-muted line-through">{plan.oldPrice}€</span>
                    )}
                    <span className="text-xs font-semibold text-primary ml-auto">
                      Soit {monthlyEquivalent}€ / mois
                    </span>
                  </div>

                  <ul className="space-y-2.5 pt-2 border-t border-border text-xs text-body">
                    {plan.features.slice(0, 4).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 space-y-2.5">
                  <Link
                    href={`/abonnements/${plan.slug}`}
                    className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-primary bg-white px-4 text-xs font-bold text-primary hover:bg-primary/5 transition-colors"
                  >
                    <span>Voir la fiche détaillée</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/commander/${plan.slug}`}
                    rel="nofollow"
                    className="flex h-10 w-full items-center justify-center rounded-xl bg-primary px-4 text-xs font-semibold text-white shadow-sm hover:bg-primary-hover transition-colors"
                  >
                    Commander directement
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        {/* Multi-Screen Hub Spotlight */}
        <section aria-label="Offres Multi-Écrans" className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                <Zap className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                  <span>Nouveau • Multi-Connexions</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-heading">
                  Besoin de regarder sur 2, 3 ou 4 écrans en simultané ?
                </h2>
                <p className="text-xs sm:text-sm text-body max-w-2xl">
                  Découvrez nos forfaits multi-écrans 12 mois dès <strong>60€ (2 écrans)</strong>, <strong>80€ (3 écrans)</strong> et <strong>100€ (4 écrans)</strong>. Diffusez vos flux en 4K sur plusieurs téléviseurs en même temps sans coupure.
                </p>
              </div>
            </div>
            <Link
              href="/abonnements/multi-ecran"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors w-full sm:w-auto"
            >
              <span>Voir les forfaits Multi-Écrans</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Existing Customers Hub Banner: Renouvellement */}
        <section aria-label="Espace Renouvellement" className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <RefreshCw className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-heading">
                  Vous possédez déjà un abonnement Atlas Pro ?
                </h2>
                <p className="text-xs sm:text-sm text-body max-w-xl">
                  Prolongez votre abonnement en conservant votre code d&apos;activation ou votre adresse MAC sans réinstaller votre application.
                </p>
              </div>
            </div>
            <Link
              href="/abonnements/renouvellement"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors w-full sm:w-auto"
            >
              <span>Accéder au Renouvellement</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Comparison Matrix (Hub Value-Add) */}
        <section aria-label="Tableau comparatif des formules" className="space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-heading">
              Tableau Comparatif des Formules 1 Écran
            </h2>
            <p className="text-xs sm:text-sm text-body">
              Comparez les durées d&apos;abonnement pour sélectionner l&apos;offre la plus avantageuse.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border bg-white text-heading">
                  <th scope="col" className="p-4 font-bold">Critères</th>
                  <th scope="col" className="p-4 font-bold text-center">12 Mois (Optimal)</th>
                  <th scope="col" className="p-4 font-bold text-center">6 Mois</th>
                  <th scope="col" className="p-4 font-bold text-center">3 Mois</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-body">
                <tr>
                  <td className="p-4 font-semibold text-heading">Tarif total</td>
                  <td className="p-4 text-center font-bold text-primary">40 €</td>
                  <td className="p-4 text-center font-bold text-heading">30 €</td>
                  <td className="p-4 text-center font-bold text-heading">20 €</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-heading">Équivalent mensuel</td>
                  <td className="p-4 text-center font-bold text-primary">3,33 € / mois</td>
                  <td className="p-4 text-center">5,00 € / mois</td>
                  <td className="p-4 text-center">6,67 € / mois</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-heading">Qualité 4K, FHD & HEVC</td>
                  <td className="p-4 text-center text-primary font-bold">Inclus</td>
                  <td className="p-4 text-center text-primary font-bold">Inclus</td>
                  <td className="p-4 text-center text-primary font-bold">Inclus</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-heading">VOD Films & Séries</td>
                  <td className="p-4 text-center text-primary font-bold">Illimité</td>
                  <td className="p-4 text-center text-primary font-bold">Illimité</td>
                  <td className="p-4 text-center text-primary font-bold">Illimité</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-heading">Replay 7 jours</td>
                  <td className="p-4 text-center text-primary font-bold">Inclus</td>
                  <td className="p-4 text-center text-primary font-bold">Inclus</td>
                  <td className="p-4 text-center text-primary font-bold">Inclus</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-heading">Économie constatée</td>
                  <td className="p-4 text-center font-bold text-emerald-600 bg-emerald-50/50">Jusqu&apos;à 44% d&apos;économie</td>
                  <td className="p-4 text-center font-medium">25% d&apos;économie</td>
                  <td className="p-4 text-center text-muted">Tarif de base</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Hub Footer Navigation */}
        <section className="rounded-2xl border border-border bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <p className="text-body">
              Une question avant de choisir votre abonnement ? Nos techniciens vous répondent 7j/7.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/ouvrir-ticket"
              className="inline-flex h-9 items-center justify-center rounded-xl bg-surface border border-border px-4 font-bold text-heading hover:bg-slate-50 transition-colors w-full sm:w-auto"
            >
              Poser une question
            </Link>
            <Link
              href="/tutoriels"
              className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 font-bold text-white hover:bg-primary-hover transition-colors w-full sm:w-auto"
            >
              Guides d&apos;installation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
