import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ShieldCheck, Zap, ArrowRight, HelpCircle, Clock, Layers } from "lucide-react";
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

  const monthlyPrice = (plan.price / plan.durationMonths).toFixed(2);
  const otherPlans = getAllPlans().filter((p) => p.slug !== plan.slug && !p.slug.includes("ecrans"));

  const getProfileDescription = (months: number): { title: string; desc: string } => {
    switch (months) {
      case 12:
        return {
          title: "Le choix N°1 pour la sérénité & les économies",
          desc: "Cette formule annuelle est le meilleur investissement pour votre divertissement. Elle offre le tarif mensuel le plus bas du marché (seulement 3,33€/mois) et vous garantit un accès ininterrompu à toutes les compétitions de l'année sans risque de coupure.",
        };
      case 6:
        return {
          title: "L'équilibre idéal entre flexibilité et budget",
          desc: "Parfait pour suivre l'intégralité d'une demi-saison sportive (Ligue des Champions, championnats de football, sports mécaniques) ou profiter d'une période automne/hiver sans vous engager sur une année entière.",
        };
      case 3:
        return {
          title: "La formule découverte sans engagement",
          desc: "Idéale pour évaluer en conditions réelles la stabilité de nos flux direct en 4K/FHD, vérifier la compatibilité avec vos équipements (Smart TV, boîtier, Fire Stick) et tester la réactivité de notre support client.",
        };
      default:
        return {
          title: "Formule sur-mesure",
          desc: "Accès complet aux serveurs Atlas Pro en haute définition avec support dédié.",
        };
    }
  };

  const profile = getProfileDescription(plan.durationMonths);

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

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-2">
              <h2 className="text-base font-bold text-heading flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>{profile.title}</span>
              </h2>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                {profile.desc}
              </p>
            </div>

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
              <p className="text-xs font-semibold text-emerald-600 mt-1">
                Soit ~{monthlyPrice}€ / mois (Paiement unique sans abonnement caché)
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
        {/* Cross-Plan Comparison Section */}
        {otherPlans.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-border">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-heading flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Comparer avec les autres formules Atlas Pro</span>
              </h2>
              <p className="text-xs text-body">
                Vous hésitez sur la durée ? Découvrez les autres forfaits disponibles avec activation instantanée :
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {otherPlans.map((other) => (
                <Link
                  key={other.slug}
                  href={`/abonnements/${other.slug}`}
                  className="rounded-xl border border-border bg-surface p-4 hover:border-primary/40 hover:bg-white transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-heading group-hover:text-primary transition-colors">
                      {other.title}
                    </span>
                    <span className="text-sm font-extrabold text-primary">{other.price}€</span>
                  </div>
                  <p className="text-[11px] text-body line-clamp-2">
                    {other.seoDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
                    <span>Voir les détails</span>
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
