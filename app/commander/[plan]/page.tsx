import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";
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
      title: "Commande Sécurisée",
      description: "Finalisez votre commande Atlas Pro ONTV en toute sécurité.",
      path: `/commander/${planSlug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `Commander ${plan.title} | Paiement Sécurisé`,
    description: `Finalisez votre commande ${plan.title}. Activation express en 15 min par email et WhatsApp, garantie satisfait ou remboursé.`,
    path: `/commander/${plan.slug}`,
    noIndex: true,
  });
}

export default async function CommanderPlanPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { plan: planSlug } = await params;
  const plan = getPlanBySlug(planSlug);

  if (!plan) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Plans & Tarifs", path: "/plans-tarifs" },
    { name: plan.title, path: `/plans-tarifs/${plan.slug}` },
    { name: "Commander", path: `/commander/${plan.slug}` },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
        {/* Subtle, non-distracting return link */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <Link
            href="/plans-tarifs"
            className="inline-flex items-center gap-1.5 hover:text-heading transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Changer de formule</span>
          </Link>
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            <span>Garantie 7 jours satisfait ou remboursé</span>
          </div>
        </div>

        {/* Focused Checkout Header */}
        <header className="text-center space-y-2 pt-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-heading tracking-tight">
            Finaliser votre commande : {plan.title}
          </h1>
          <p className="text-xs sm:text-sm text-body max-w-xl mx-auto">
            Renseignez vos coordonnées ci-dessous pour recevoir vos identifiants officiels par e-mail et WhatsApp en moins de 15 minutes.
          </p>
        </header>

        {/* Distraction-Free Single-Step Checkout */}
        <CheckoutView plan={plan} />
      </div>
    </>
  );
}
