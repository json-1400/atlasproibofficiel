import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ShieldCheck, Zap, ArrowRight, HelpCircle, Clock, Layers } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllPlans, getPlanBySlug, getPlanProfileDescription } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildPlanSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/schema";
import { PlanChannelsOverview } from "@/components/plan-detail/PlanChannelsOverview";
import { PlanFrancophonePeering } from "@/components/plan-detail/PlanFrancophonePeering";
import { PlanQuickInstallLinks } from "@/components/plan-detail/PlanQuickInstallLinks";
import { PlanImageSlider } from "@/components/plan-detail/PlanImageSlider";

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
      path: `/plans-tarifs/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: plan.seoTitle,
    description: plan.seoDescription,
    path: `/plans-tarifs/${plan.slug}`,
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
    { name: "Plans & Tarifs", path: "/plans-tarifs" },
    { name: plan.title, path: `/plans-tarifs/${plan.slug}` },
  ];

  const monthlyPrice = (plan.price / plan.durationMonths).toFixed(2);
  const otherPlans = getAllPlans().filter((p) => p.slug !== plan.slug && !p.slug.includes("ecrans"));
  const profile = getPlanProfileDescription(plan.durationMonths);
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
            { label: "Plans & Tarifs", href: "/plans-tarifs" },
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
              {plan.h1 ?? `Commander Votre ${plan.title} (${plan.price}€)`}
            </h1>

            {/* Screenshots & Interface Preview Slider Under H1 */}
            <PlanImageSlider planTitle={plan.title} />

            <p className="text-base text-body leading-relaxed">
              {plan.slug === "atlas-pro-12-mois"
                ? "Achetez et commandez votre abonnement officiel Atlas Pro 12 mois pour Smart TV et profitez d'une diffusion 4K Ultra HD stable et sans coupure. Compatible avec l'ensemble des téléviseurs (Samsung Tizen OS, LG webOS, Android TV, Google TV et Fire TV Stick) ainsi que les applications certifiées IPTV Smarters Pro, IBO Player et Atlas Pro ONTV."
                : `Achetez et commandez votre licence officielle Atlas Pro ONTV pour ${plan.durationMonths} mois à ${plan.price}€. Accès direct à toutes vos chaînes en direct, flux sportifs en 4K/FHD native et cinémathèque VOD complète avec expédition de vos identifiants en moins de 15 minutes.`}
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
                {plan.slug === "atlas-pro-12-mois"
                  ? "Abonnement IPTV 12 Mois Smart TV : Ce qui est inclus"
                  : "Ce qui est inclus dans votre formule :"}
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

            {plan.slug === "atlas-pro-12-mois" && (
              <div className="rounded-2xl border border-border bg-white p-5 sm:p-6 space-y-3 shadow-2xs">
                <h3 className="text-sm font-bold text-heading flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>Compatibilité universelle Smart TV & Lecteurs IPTV</span>
                </h3>
                <p className="text-xs text-body leading-relaxed">
                  Vos identifiants <strong>Xtream Codes</strong> (URL serveur, nom d&apos;utilisateur, mot de passe) transmis par e-mail fonctionnent instantanément sur tous vos écrans :
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="rounded-xl bg-surface border border-border/80 p-3 text-center">
                    <span className="block text-xs font-bold text-heading">Samsung TV</span>
                    <span className="text-[10px] text-body">Tizen OS • IBO Player</span>
                  </div>
                  <div className="rounded-xl bg-surface border border-border/80 p-3 text-center">
                    <span className="block text-xs font-bold text-heading">LG Smart TV</span>
                    <span className="text-[10px] text-body">webOS • Smarters Pro</span>
                  </div>
                  <div className="rounded-xl bg-surface border border-border/80 p-3 text-center">
                    <span className="block text-xs font-bold text-heading">Fire TV Stick</span>
                    <span className="text-[10px] text-body">Code Downloader 822648</span>
                  </div>
                  <div className="rounded-xl bg-surface border border-border/80 p-3 text-center">
                    <span className="block text-xs font-bold text-heading">Android TV</span>
                    <span className="text-[10px] text-body">Sony, TCL, Philips, Mi Box</span>
                  </div>
                </div>
              </div>
            )}
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

        {/* 1. Bouquet TV Francophone & VOD 4K (DMCA Safe) */}
        <PlanChannelsOverview />

        {/* 2. Infrastructure & Peering France, Belgique, Suisse, Canada */}
        <PlanFrancophonePeering />

        {/* 3. Applications Officielles & Guides d'Installation */}
        <PlanQuickInstallLinks />

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
                  href={`/plans-tarifs/${other.slug}`}
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

            <div className="pt-2 text-center sm:text-left">
              <Link
                href="/plans-tarifs"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>« Consulter le tableau comparatif complet de toutes les formules</span>
              </Link>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
