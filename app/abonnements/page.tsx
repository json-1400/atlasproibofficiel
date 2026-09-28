import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingCard } from "@/components/sections/PricingCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllPlans } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildBreadcrumbSchema,
  buildHomepageProductAggregateSchema,
} from "@/lib/schema";
import { ShieldCheck, HelpCircle } from "lucide-react";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Abonnements Atlas Pro ONTV Officiel | Comparatif des Offres",
    description:
      "Comparez les formules d'abonnement Atlas Pro ONTV 12 mois, 6 mois et 3 mois. Codes d'activation officiels livrés en 15 minutes avec garantie de stabilité.",
    path: "/abonnements",
  });
}

export default function AbonnementsPage(): React.JSX.Element {
  const plans = getAllPlans();

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Abonnements", path: "/abonnements" },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildHomepageProductAggregateSchema(plans),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: "Abonnements" }]} />

        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold sm:text-4xl text-heading">
            Nos Formules d&apos;<span className="text-primary">Abonnement Atlas Pro ONTV</span>
          </h1>
          <p className="text-base text-body">
            Choisissez la formule adaptée à vos besoins. Tous les abonnements Atlas Pro incluent plus
            de 10 000 chaînes directes, la VOD en 4K/FHD et une activation instantanée par e-mail.
          </p>
        </header>

        {/* Pricing Grid */}
        <section aria-label="Grille des tarifs" className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {plans.map((plan) => (
            <PricingCard key={plan.slug} plan={plan} />
          ))}
        </section>

        {/* Trust & Guarantee Section */}
        <section className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <h2 className="text-xl font-bold text-heading text-center mb-8">
            La Garantie Atlas Pro ONTV Officiel
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto sm:mx-0">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-heading text-base">Serveurs Dédiés Anti-Coupures</h3>
              <p className="text-xs text-body leading-relaxed">
                Infrastructure hébergée dans des datacenters européens à très haut débit pour éliminer les temps de chargement.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto sm:mx-0">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-heading text-base">Sans Engagement</h3>
              <p className="text-xs text-body leading-relaxed">
                Paiement unique sans reconduction tacite. Vous gardez le contrôle total sur votre abonnement et son renouvellement.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto sm:mx-0">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-heading text-base">Support Dédié 7j/7</h3>
              <p className="text-xs text-body leading-relaxed">
                Assistance technique et configuration pas-à-pas disponible tous les jours pour vous accompagner sur tous vos appareils.
              </p>
            </div>
          </div>
        </section>

        {/* Global FAQ */}
        <section className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-heading text-center flex items-center justify-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary" aria-hidden="true" />
            <span>Foire Aux Questions sur l&apos;Abonnement</span>
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-white p-5">
              <h3 className="text-sm font-bold text-heading">Comment activer mon code après commande ?</h3>
              <p className="mt-2 text-xs text-body leading-relaxed">
                Dès la confirmation de votre commande, vous recevez un code d&apos;activation unique par e-mail. Ouvrez simplement votre application Atlas Pro ONTV sur votre Smart TV ou boîtier et saisissez ce code pour déverrouiller l&apos;intégralité des flux.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-5">
              <h3 className="text-sm font-bold text-heading">Puis-je changer d&apos;appareil en cours d&apos;abonnement ?</h3>
              <p className="mt-2 text-xs text-body leading-relaxed">
                Oui, votre abonnement peut être transféré vers un nouvel appareil. Il suffit de vous déconnecter de l&apos;ancien ou de contacter notre support pour réinitialiser le lien d&apos;adresse MAC en quelques secondes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
