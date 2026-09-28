import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowRight, ShieldCheck, Zap, Tv, HelpCircle, Server, Activity, Lock, Cpu } from "lucide-react";
import { PricingCard } from "@/components/sections/PricingCard";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { ActivationSteps } from "@/components/sections/ActivationSteps";
import { DeviceCompatibility } from "@/components/sections/DeviceCompatibility";
import { ChannelCatalogPreview } from "@/components/sections/ChannelCatalogPreview";
import { VodCarousel } from "@/components/sections/VodCarousel";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSingleScreenPlans, getAllPlans } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildHomepageProductAggregateSchema,
  buildFaqSchema,
  buildHomepageHowToSchema,
} from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Abonnement Atlas Pro ONTV Officiel | Atlas IPTV France",
    description:
      "Commandez votre abonnement Atlas Pro ONTV officiel en France. Profitez du serveur Atlas IPTV et IPTV Atlas en 4K/FHD. Activation immédiate en 15 min & support 7j/7.",
    path: "/",
  });
}

const HOMEPAGE_FAQS = [
  {
    question: "Combien de temps pour recevoir mon code d'abonnement Atlas Pro ONTV après paiement ?",
    answer:
      "Le traitement est entièrement automatisé : vos identifiants d'accès au serveur IPTV Atlas (code d'activation Xtream Codes API et liens M3U) vous sont expédiés par e-mail en moins de 15 minutes après validation sécurisée de la commande.",
  },
  {
    question: "L'abonnement Atlas IPTV est-il compatible avec les applications Atlas Pro ONTV et Max ?",
    answer:
      "Oui, votre abonnement Atlas IPTV fonctionne parfaitement sur nos applications officielles Atlas Pro ONTV (v4.5) et Atlas Pro Max (v5.2), ainsi que sur les lecteurs universels tels qu'IBO Player, IPTV Smarters Pro et TiviMate.",
  },
  {
    question: "Pourquoi choisir le serveur Atlas Pro en France pour le streaming direct ?",
    answer:
      "Le réseau Atlas Pro France s'appuie sur des serveurs CDN européens dédiés 10 Gbps dotés d'un load-balancing intelligent et d'une technologie anti-freeze avancée, éliminant tout buffering lors des grands matchs de football en direct.",
  },
  {
    question: "Comment fonctionne l'option multi-écrans sur Atlas IPTV France ?",
    answer:
      "L'option multi-écrans permet d'utiliser 2, 3 ou 4 connexions simultanées indépendantes sur le même compte. Chaque membre de la famille regarde son programme en 4K sans conflit d'adresse IP ni ralentissement.",
  },
  {
    question: "Quelle vitesse de connexion internet est recommandée pour le flux 4K ?",
    answer:
      "Une connexion internet stable d'au moins 15 Mbps (Fibre optique, ADSL haut débit ou 4G/5G) est recommandée pour profiter d'une diffusion fluide en 4K Ultra HD et Full HD 60 fps sans coupure.",
  },
];

export default function HomePage(): React.JSX.Element {
  const plans = getSingleScreenPlans();
  const allPlans = getAllPlans();

  const graphData = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildHomepageProductAggregateSchema(allPlans),
    buildFaqSchema(HOMEPAGE_FAQS),
    buildHomepageHowToSchema(),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="space-y-16 sm:space-y-24 pb-20">
        {/* 1. Hero Section (H1 + Mapped Keywords) */}
        <section className="bg-surface border-b border-border py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1 text-xs font-semibold text-heading shadow-sm">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Distributeur Officiel Atlas Pro France 2026 • Activation Express 15 min
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-heading max-w-5xl mx-auto leading-tight">
              Abonnement <span className="text-primary">Atlas Pro ONTV</span> Officiel : Serveur IPTV Atlas & Atlas IPTV en France
            </h1>

            <p className="mx-auto max-w-3xl text-base sm:text-lg text-body leading-relaxed">
              Bienvenue sur le portail de distribution officiel <strong>Atlas Pro France</strong>. Profitez de l&apos;excellence technologique de l&apos;<strong>IPTV Atlas</strong> avec votre <strong>abonnement Atlas Pro ONTV</strong> : plus de 10 000 chaînes directes en qualité 4K/FHD native et catalogue VOD illimité. Grâce à la robustesse de l&apos;infrastructure <strong>Atlas IPTV</strong>, bénéficiez d&apos;une activation express en moins de 15 minutes, d&apos;un flux anti-freeze sans coupure et d&apos;une compatibilité sur Smart TV et boîtiers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#tarifs"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-sm font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
              >
                <span>Choisir mon abonnement</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/telecharger"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 text-sm font-semibold text-heading hover:bg-surface transition-colors"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Télécharger l&apos;application</span>
              </Link>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-white p-3 text-xs font-semibold text-heading">
                <Zap className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <span>Livraison en 15 min</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-white p-3 text-xs font-semibold text-heading">
                <Server className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>Serveurs CDN 10 Gbps</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-white p-3 text-xs font-semibold text-heading">
                <Activity className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <span>Flux Anti-Freeze 4K</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-white p-3 text-xs font-semibold text-heading">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>Garantie Officielle 7j/7</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Pricing Section (H2) */}
        <section id="tarifs" aria-label="Tarifs des abonnements" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-20">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Nos Formules d&apos;Abonnement Atlas Pro ONTV en France
            </h2>
            <p className="text-sm text-body">
              Accès complet 4K/FHD au flux IPTV Atlas, support multi-écrans et expédition instantanée de vos codes d&apos;accès par e-mail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {plans.map((plan) => (
              <PricingCard key={plan.slug} plan={plan} />
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/abonnements/multi-ecran"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-5 py-3 text-xs sm:text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              <span>Besoin de 2, 3 ou 4 écrans simultanés ? Découvrez notre offre Multi-Écrans dès 60€/an</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* 3. AEO Technical Comparison Section (H2) */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Comparatif Technique : Serveur Atlas Pro France vs. IPTV Standard
            </h2>
            <p className="text-sm text-body">
              Pourquoi l&apos;infrastructure officielle Atlas IPTV est plébiscitée par les utilisateurs exigeants en France et en Europe.
            </p>
          </div>

          <ComparisonTable />
        </section>

        {/* 4. Activation Guide 3 Steps (H2) */}
        <section className="bg-surface border-y border-border py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
                Comment Activer Votre Abonnement IPTV Atlas en 3 Étapes Simples
              </h2>
              <p className="text-sm text-body">
                Une mise en service ultra-rapide sans aucune configuration complexe requise.
              </p>
            </div>

            <ActivationSteps />
          </div>
        </section>

        {/* 5. Application Ecosystem & Devices (H2) */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Applications Officielles Atlas Pro et Compatibilité Matérielle
            </h2>
            <p className="text-sm text-body">
              Nos applications propriétaires et la liste complète des équipements compatibles avec votre licence.
            </p>
          </div>

          <DeviceCompatibility />
        </section>

        {/* 6. Channel & VOD Catalog (H2) */}
        <section className="bg-surface border-y border-border py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
                Bouquet TV en Direct et Catalogue VOD Inclus avec Atlas IPTV
              </h2>
              <p className="text-sm text-body">
                Plus de 10 000 chaînes directes premium, compétitions sportives majeures et vidéothèque VOD mise à jour en continu.
              </p>
            </div>

            {/* AI-Generated 4K Cinema VOD Swiper */}
            <VodCarousel />

            {/* Category Highlights Grid */}
            <ChannelCatalogPreview />
          </div>
        </section>

        {/* 7. Deep Authority & Anti-Freeze Architecture (H2) */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Infrastructure Serveur Atlas Pro France : Technologie Anti-Coupure et Sécurité CDN
            </h2>
            <p className="text-sm text-body">
              Une architecture réseau haut de gamme pensée pour garantir une disponibilité continue de 99.9%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Cpu className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-heading">Encodage HEVC / H.265</h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                Nos flux IPTV bénéficient d&apos;une compression de pointe H.265 réduisant de 50% la bande passante nécessaire tout en restituant une image 4K et Full HD 60 fps d&apos;une netteté irréprochable.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Server className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-heading">CDN Européen & Peering France</h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                Connecté directement aux principaux opérateurs français (Orange, Free, SFR, Bouygues), notre réseau CDN distribue le signal depuis des serveurs de proximité pour un temps de réponse minimal.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Lock className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-heading">Sécurité & Confidentialité</h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                Vos flux de streaming et données de connexion sont protégés par chiffrement SSL/TLS. Les serveurs Atlas Pro sont pleinement compatibles avec l&apos;usage d&apos;un VPN sans restriction de débit.
              </p>
            </div>
          </div>
        </section>

        {/* 8. FAQ & AEO Direct Answer Capsules (H2) */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" aria-hidden="true" />
              <span>Foire Aux Questions : Tout Savoir sur l&apos;Abonnement Atlas Pro et Atlas IPTV</span>
            </h2>
            <p className="text-sm text-body">
              Les réponses directes de nos experts techniques aux questions les plus fréquentes sur nos services en France.
            </p>
          </div>

          <div className="space-y-4">
            {HOMEPAGE_FAQS.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-sm sm:text-base font-bold text-heading">
                  {faq.question}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
