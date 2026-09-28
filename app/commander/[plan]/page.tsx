import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CheckoutView } from "@/components/sections/CheckoutView";
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

        <CheckoutView plan={plan} />
      </div>
    </>
  );
}
