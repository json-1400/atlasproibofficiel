import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight, ShieldCheck, Zap, HelpCircle, Server, Activity } from "lucide-react";
import { PricingCard } from "@/components/sections/PricingCard";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { ActivationSteps } from "@/components/sections/ActivationSteps";
import { DeviceCompatibility } from "@/components/sections/DeviceCompatibility";
import { ChannelCatalogPreview } from "@/components/sections/ChannelCatalogPreview";
import { VodCarousel } from "@/components/sections/VodCarousel";
import { ServerInfrastructure } from "@/components/sections/ServerInfrastructure";
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
    title: "Atlas Pro Officiel : Abonnement IPTV 4K & Téléchargement",
    description:
      "Fournisseur officiel Atlas Pro IPTV 4K en France sans coupure. Codes d'activation reçus en 15 min et téléchargement direct des APK officiels ONTV & Max 7.",
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
    question: "Qu'est-ce qui garantit la stabilité du serveur dédié Atlas Pro en France ?",
    answer:
      "Notre infrastructure s'appuie sur des serveurs dédiés CDN 10 Gbps dotés d'une technologie anti-freeze avancée et d'un load-balancing intelligent. Cette architecture garantit une qualité 4K native sans aucun buffering même lors des fortes affluences sportives.",
  },
  {
    question: "L'abonnement Atlas IPTV est-il compatible avec les applications Atlas Pro ONTV et Max 7 ?",
    answer:
      "Oui, votre abonnement Atlas IPTV fonctionne parfaitement sur nos applications officielles Atlas Pro ONTV (v4.5) et Atlas Pro Max 7 (v7.0), ainsi que sur les lecteurs universels tels qu'IBO Player, IPTV Smarters Pro et TiviMate.",
  },
  {
    question: "L'abonnement Atlas Pro fonctionne-t-il avec un VPN en France ?",
    answer:
      "Oui, le serveur officiel Atlas IPTV est 100% compatible avec tous les VPN majeurs (NordVPN, CyberGhost, ExpressVPN, Surfshark). Vos flux sont chiffrés en SSL/TLS et aucun bridage n'est appliqué.",
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
              Atlas Pro ONTV 2026 : <span className="text-primary">Service IPTV 4K Officiel</span> en France
            </h1>

            <p className="mx-auto max-w-3xl text-base sm:text-lg text-body leading-relaxed">
              Bienvenue sur le portail officiel <strong>Atlas Pro</strong> (<em>atlasproibofficiel</em>), fournisseur de référence pour votre <strong>abonnement IPTV 4K en France</strong>. Profitez d&apos;un <strong>serveur dédié</strong> haute disponibilité avec technologie <strong>anti-freeze</strong> et diffusion en <strong>qualité 4K native</strong> sans coupure sur plus de 10 000 chaînes directes et VOD. Téléchargez nos applications officielles (<strong>Atlas Pro ONTV</strong>, <strong>Atlas Pro Max 7</strong>) ou activez vos identifiants Xtream Codes API et M3U sur Smart TV Samsung, LG, Fire Stick et boîtier Android en moins de 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#tarifs"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-sm font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
              >
                <span>Voir les plans & tarifs</span>
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

            {/* Showcase Image with Mapped Keywords */}
            <div className="pt-6 max-w-4xl mx-auto">
              <div className="relative rounded-2xl border border-border bg-white p-2 sm:p-3 shadow-md overflow-hidden">
                <Image
                  src="/atlas-pro-ontv-devices.webp"
                  alt="Interface de l'application officielle Atlas Pro sur TV et multi-écrans : Service IPTV 4K France 2026"
                  width={1672}
                  height={941}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 900px"
                  priority
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
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
        <section id="tarifs" aria-label="Plans et tarifs Atlas Pro" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-20">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Nos Plans & Tarifs Atlas Pro ONTV en France
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/plans-tarifs"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-heading hover:bg-surface transition-colors"
            >
              <span>Consulter le comparatif de tous les plans & tarifs</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/plans-tarifs/multi-ecran"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-5 py-3 text-xs sm:text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              <span>Multi-Écrans (2, 3 ou 4 TV) dès 60€/an</span>
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

        {/* 7. Deep Authority, Anti-Freeze Architecture & Server Peering (H2) */}
        <ServerInfrastructure />

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
