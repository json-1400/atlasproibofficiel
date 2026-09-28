import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShieldCheck, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CheckoutForm } from "@/components/sections/CheckoutForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllPlans, getPlanBySlug } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema, buildOrganizationSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ plan: string }>;
}

export async function generateStaticParams(): Promise<Array<{ plan: string }>> {
  const plans = getAllPlans();
  return plans.map((p) => ({
    plan: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { plan: planSlug } = await params;
  const plan = getPlanBySlug(planSlug);

  if (!plan) {
    return buildMetadata({
      title: "Commande",
      description: "Finaliser votre commande Atlas Pro ONTV.",
      path: `/commander/${planSlug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `Commander ${plan.title} | Paiement Sécurisé`,
    description: `Finalisez votre abonnement ${plan.title} (4K/FHD). Livraison immédiate de vos identifiants par e-mail en 15 minutes.`,
    path: `/commander/${plan.slug}`,
    noIndex: true,
  });
}

export default async function CommanderPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { plan: planSlug } = await params;
  const plan = getPlanBySlug(planSlug);

  if (!plan) {
    notFound();
  }

  const validPlanSlug = plan.slug as "atlas-pro-12-mois" | "atlas-pro-6-mois" | "atlas-pro-3-mois";

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Abonnements", path: "/abonnements" },
    { name: plan.title, path: `/abonnements/${plan.slug}` },
    { name: "Finaliser la commande", path: `/commander/${plan.slug}` },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Abonnements", href: "/abonnements" },
            { label: plan.title, href: `/abonnements/${plan.slug}` },
            { label: "Finaliser la commande" },
          ]}
        />

        <header className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-heading">
            Finaliser votre commande : {plan.title}
          </h1>
          <p className="text-xs sm:text-sm text-body">
            Renseignez vos coordonnées pour recevoir immédiatement vos codes d&apos;accès par e-mail et WhatsApp.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Order Form */}
          <div className="md:col-span-7 rounded-2xl border border-border bg-white p-6 shadow-sm">
            <CheckoutForm planSlug={validPlanSlug} planPrice={plan.price} />
          </div>

          {/* Order Summary */}
          <div className="md:col-span-5 rounded-2xl border border-border bg-surface p-6 space-y-4">
            <h2 className="text-sm font-bold text-heading pb-3 border-b border-border">
              Récapitulatif de la commande
            </h2>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-heading font-medium">
                <span>{plan.title}</span>
                <span>{plan.price}€</span>
              </div>
              <div className="flex justify-between text-body">
                <span>Durée</span>
                <span>{plan.durationMonths} mois</span>
              </div>
              <div className="flex justify-between text-body">
                <span>Frais d&apos;activation</span>
                <span className="text-emerald-600 font-semibold">Gratuit</span>
              </div>
            </div>

            <div className="pt-3 border-t border-border flex justify-between items-baseline font-bold text-heading">
              <span>Total TTC</span>
              <span className="text-2xl text-primary">{plan.price}€</span>
            </div>

            <div className="rounded-xl bg-white border border-border p-3.5 space-y-2 text-[11px] text-body">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Livraison instantanée par e-mail</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                <span>Garantie de service officiel Atlas Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
