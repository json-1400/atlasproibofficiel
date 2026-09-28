import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Tv, ShieldCheck, HelpCircle, Users, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getMultiScreenPlans } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildMultiScreenHubSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Abonnement IPTV Atlas Multiécrans",
    description:
      "Abonnement IPTV Atlas multi-écrans officiel : diffusez en simultané sur 2, 3 ou 4 appareils en qualité 4K/FHD. Tarifs 12 mois dégressifs dès 60€.",
    path: "/abonnements/multi-ecran",
  });
}

const MULTI_SCREEN_FAQS = [
  {
    question: "Comment fonctionne l'utilisation simultanée sur plusieurs écrans ?",
    answer:
      "Chaque formule multi-écrans vous délivre des accès configurés pour autoriser plusieurs connexions actives au même moment sur nos serveurs. Vous pouvez regarder un match de football dans le salon pendant qu'un film est diffusé dans une chambre, sans aucune interruption.",
  },
  {
    question: "Les appareils doivent-ils être connectés au même réseau Wi-Fi ou adresse IP ?",
    answer:
      "Non, vos connexions simultanées sont totalement indépendantes. Elles peuvent être utilisées au sein de votre logement principal ou en déplacement sur réseau 4G/5G.",
  },
  {
    question: "Peut-on combiner différents types d'appareils et d'applications ?",
    answer:
      "Absolument. Vous pouvez par exemple associer une Smart TV Samsung avec IBO Player, un Amazon Fire TV Stick dans une autre pièce, et une tablette Android ou iPad.",
  },
  {
    question: "Quelle connexion internet est recommandée pour le multi-écrans en 4K ?",
    answer:
      "Nous préconisons environ 15 Mbps par écran actif en qualité FHD/4K. Une connexion Fibre ou VDSL stable garantit une fluidité totale sur l'ensemble de vos téléviseurs.",
  },
];

export default function MultiScreenHubPage(): React.JSX.Element {
  const plans = getMultiScreenPlans();

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Abonnements", path: "/abonnements" },
    { name: "Multi-Écrans", path: "/abonnements/multi-ecran" },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildMultiScreenHubSchema(plans),
    buildBreadcrumbSchema(breadcrumbs),
    buildFaqSchema(MULTI_SCREEN_FAQS),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs
          items={[
            { label: "Abonnements", href: "/abonnements" },
            { label: "Multi-Écrans" },
          ]}
        />

        {/* Hub Header */}
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <Users className="h-4 w-4" aria-hidden="true" />
            <span>Formules 2, 3 et 4 Connexions Simultanées</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl text-heading tracking-tight">
            Abonnement IPTV Atlas Multiécrans
          </h1>
          <p className="text-base text-body leading-relaxed">
            Profitez de vos chaînes en direct et de la VOD sur plusieurs téléviseurs en même temps sans conflit de connexion. Découvrez nos packs 12 mois <strong>2 écrans (60€)</strong>, <strong>3 écrans (80€)</strong> et <strong>4 écrans (100€)</strong> avec serveurs européens ultra-stables.
          </p>
        </header>

        {/* Multi-screen Products Grid */}
        <section aria-label="Nos formules multi-écrans" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const screens = plan.screensCount ?? 2;
            const pricePerScreen = (plan.price / screens).toFixed(2);
            return (
              <article
                key={plan.slug}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 bg-surface transition-all ${
                  screens === 2 ? "border-primary ring-1 ring-primary shadow-sm" : "border-border hover:border-slate-300"
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
                    <p className="text-xs text-muted mt-1">{screens} flux actifs simultanément • 12 mois</p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-heading">{plan.price}€</span>
                    {plan.oldPrice && (
                      <span className="text-sm text-muted line-through">{plan.oldPrice}€</span>
                    )}
                    <span className="text-xs font-semibold text-primary ml-auto">
                      Soit {pricePerScreen}€ / écran / an
                    </span>
                  </div>

                  <ul className="space-y-2.5 pt-2 border-t border-border text-xs text-body">
                    {plan.features.slice(0, 5).map((feat, idx) => (
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
                    <span>Voir la fiche {screens} écrans</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/commander/${plan.slug}`}
                    className="flex h-10 w-full items-center justify-center rounded-xl bg-primary px-4 text-xs font-semibold text-white shadow-sm hover:bg-primary-hover transition-colors"
                  >
                    Commander ({plan.price}€)
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        {/* Comparative Matrix for Multi-screens */}
        <section aria-label="Tableau comparatif multi-écrans" className="space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-heading">
              Comparatif des Offres Multi-Écrans
            </h2>
            <p className="text-xs sm:text-sm text-body">
              Choisissez le nombre de postes simultanés adapté à la taille de votre foyer.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border bg-white text-heading">
                  <th scope="col" className="p-4 font-bold">Critères</th>
                  <th scope="col" className="p-4 font-bold text-center">2 Écrans (Duo)</th>
                  <th scope="col" className="p-4 font-bold text-center">3 Écrans (Trio)</th>
                  <th scope="col" className="p-4 font-bold text-center">4 Écrans (Famille)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-body">
                <tr>
                  <td className="p-4 font-semibold text-heading">Tarif Annuel (12 Mois)</td>
                  <td className="p-4 text-center font-bold text-heading">60 €</td>
                  <td className="p-4 text-center font-bold text-heading">80 €</td>
                  <td className="p-4 text-center font-bold text-primary">100 €</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-heading">Coût unitaire par écran</td>
                  <td className="p-4 text-center">30 € / an</td>
                  <td className="p-4 text-center">26,67 € / an</td>
                  <td className="p-4 text-center font-bold text-emerald-600">25,00 € / an</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-heading">Flux simultanés indépendants</td>
                  <td className="p-4 text-center text-primary font-bold">2 postes</td>
                  <td className="p-4 text-center text-primary font-bold">3 postes</td>
                  <td className="p-4 text-center text-primary font-bold">4 postes</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-heading">Qualité 4K / FHD / HEVC</td>
                  <td className="p-4 text-center">Sur les 2 écrans</td>
                  <td className="p-4 text-center">Sur les 3 écrans</td>
                  <td className="p-4 text-center">Sur les 4 écrans</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-heading">VOD & Replay complets</td>
                  <td className="p-4 text-center">Illimité</td>
                  <td className="p-4 text-center">Illimité</td>
                  <td className="p-4 text-center">Illimité</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-heading">Usage recommandé</td>
                  <td className="p-4 text-center">Salon + Chambre</td>
                  <td className="p-4 text-center">Couple + 1 enfant</td>
                  <td className="p-4 text-center">Famille nombreuse</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Benefits & How it Works */}
        <section className="rounded-2xl border border-border bg-white p-8 sm:p-10 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-heading">
              Les Avantages de l&apos;Abonnement Multi-Connexions
            </h2>
            <p className="text-xs sm:text-sm text-body">
              Une technologie éprouvée pour profiter de tous vos contenus sans aucune friction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-heading text-base">Zéro Conflit de Zapping</h3>
              <p className="text-xs text-body leading-relaxed">
                Chaque téléviseur dispose de son propre flux dédié. Changer de chaîne ou lancer un film en VOD n&apos;impacte pas les autres pièces.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Tv className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-heading text-base">Compatibilité Multi-Écrans</h3>
              <p className="text-xs text-body leading-relaxed">
                Associez librement différentes applications (Atlas Pro ONTV, IBO Player, IPTV Smarters Pro) et systèmes (Samsung, LG, Firestick).
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-heading text-base">Tarif Dégressif Avantageux</h3>
              <p className="text-xs text-body leading-relaxed">
                Jusqu&apos;à 37% d&apos;économie par rapport à l&apos;achat de licences individuelles séparées pour votre foyer.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-heading flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" aria-hidden="true" />
              <span>Questions Fréquentes sur le Multi-Écrans</span>
            </h2>
            <p className="text-xs sm:text-sm text-body">
              Tout comprendre sur les connexions simultanées Atlas Pro.
            </p>
          </div>

          <div className="space-y-4">
            {MULTI_SCREEN_FAQS.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold text-heading">{faq.question}</h3>
                <p className="mt-2 text-xs text-body leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back to Single Screen Link */}
        <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-body text-center sm:text-left">
            Vous n&apos;avez besoin que d&apos;un seul écran ? Consultez nos forfaits classiques 1 écran dès 20€.
          </p>
          <Link
            href="/abonnements"
            className="inline-flex h-9 items-center justify-center rounded-xl bg-white border border-border px-4 font-bold text-heading hover:bg-slate-50 transition-colors shrink-0"
          >
            <span>Voir les forfaits 1 écran</span>
            <ArrowRight className="h-3.5 w-3.5 ml-1.5" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </>
  );
}
