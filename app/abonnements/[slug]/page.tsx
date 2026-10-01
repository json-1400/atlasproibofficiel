import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ShieldCheck, Zap, ArrowRight, HelpCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllPlans, getPlanBySlug } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildPlanSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const plans = getAllPlans();
  return plans.map((plan) => ({
    slug: plan.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);

  if (!plan) {
    return buildMetadata({
      title: "Forfait non trouvé",
      description: "Le forfait demandé n'existe pas.",
      path: `/abonnements/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: plan.seoTitle,
    description: plan.seoDescription,
    path: `/abonnements/${plan.slug}`,
  });
}

export default async function PlanDetailPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);

  if (!plan) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: "Abonnements", path: "/abonnements" },
    { name: plan.title, path: `/abonnements/${plan.slug}` },
  ];

  const graphData: Array<Record<string, unknown>> = [
    buildOrganizationSchema(),
    buildPlanSchema(plan),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  if (plan.faq && plan.faq.length > 0) {
    graphData.push(buildFaqSchema(plan.faq));
  }

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs
          items={[
            { label: "Abonnements", href: "/abonnements" },
            { label: plan.title },
          ]}
        />

        {/* Main Plan Presentation */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-light px-3.5 py-1 text-xs font-semibold text-emerald-800">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Livraison garantie en 15 minutes par e-mail</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-heading">
              {plan.title}
            </h1>

            <p className="text-base text-body leading-relaxed">
              Profitez de l&apos;expérience télévisuelle ultime avec l&apos;abonnement officiel Atlas Pro ONTV pour {plan.durationMonths} mois. Accès immédiat à toutes vos chaînes en direct favorites, retransmissions sportives en haute définition et milliers de titres VOD.
            </p>

            <div className="rounded-2xl border border-border bg-surface p-6 space-y-4">
              <h2 className="text-lg font-bold text-heading">
                Ce qui est inclus dans votre formule :
              </h2>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-heading">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl border-2 border-primary bg-white p-6 sm:p-8 shadow-md">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-3">
                Offre Directe Fournisseur
              </span>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-heading">{plan.price}€</span>
                {plan.oldPrice && (
                  <span className="text-base text-slate-400 line-through">
                    {plan.oldPrice}€
                  </span>
                )}
                <span className="text-xs text-body">/ {plan.durationMonths} mois</span>
              </div>

              <p className="mt-2 text-xs text-body">
                Paiement unique sécurisé, sans prélèvement automatique récurrent.
              </p>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <Link
                  href={`/commander/${plan.slug}`}
                  rel="nofollow"
                  className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
                >
                  <span>Commander maintenant</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <p className="text-[11px] text-center text-slate-400">
                  Support WhatsApp 7j/7 pour vous aider à la configuration
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-center gap-2 text-xs text-body">
                <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                <span>Garantie de service et assistance incluse</span>
              </div>
            </div>
          </div>
        </section>

        {/* Plan-specific FAQ */}
        {plan.faq && plan.faq.length > 0 && (
          <section className="space-y-6 max-w-3xl pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-heading flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" aria-hidden="true" />
              <span>Questions fréquentes - {plan.title}</span>
            </h2>

            <div className="space-y-4">
              {plan.faq.map((item) => (
                <div key={item.question} className="rounded-xl border border-border bg-white p-5">
                  <h3 className="text-sm font-bold text-heading">{item.question}</h3>
                  <p className="mt-2 text-xs text-body leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
