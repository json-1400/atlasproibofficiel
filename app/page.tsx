import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowRight, ShieldCheck, Zap, Tv, CheckCircle2, HelpCircle } from "lucide-react";
import { PricingCard } from "@/components/sections/PricingCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSingleScreenPlans, getAllPlans } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildHomepageProductAggregateSchema,
  buildFaqSchema,
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
      "Le traitement est entièrement automatisé : vos identifiants d'accès au serveur IPTV Atlas (code d'activation et liens m3u/Xtream) vous sont expédiés par e-mail en moins de 15 minutes après validation de la commande.",
  },
  {
    question: "L'abonnement Atlas IPTV est-il compatible avec les applications Atlas Pro ONTV et Max ?",
    answer:
      "Oui, votre abonnement Atlas IPTV fonctionne parfaitement sur l'application officielle Atlas Pro ONTV, Atlas Pro Max, ainsi que sur les lecteurs tiers (IBO Player, IPTV Smarters Pro, TiviMate).",
  },
  {
    question: "Pourquoi choisir le serveur Atlas Pro en France pour le streaming direct ?",
    answer:
      "Le réseau Atlas Pro France s'appuie sur des serveurs CDN européens 10 Gbps dotés de load-balancing intelligent pour éliminer le buffering lors des grands matchs de football en direct.",
  },
  {
    question: "Que faire en cas de problème de connexion au serveur Atlas IPTV ?",
    answer:
      "Consultez nos tutoriels pas-à-pas pour résoudre les erreurs de configuration courantes, ou ouvrez un ticket d'assistance technique disponible 7 jours sur 7.",
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
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="space-y-16 sm:space-y-24 pb-20">
        {/* 1. Hero Section (Transactional & Core Keywords) */}
        <section className="bg-surface border-b border-border py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1 text-xs font-semibold text-heading shadow-sm">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Serveur Officiel Atlas Pro France 2026 • Activation en moins de 15 min
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-heading max-w-5xl mx-auto leading-tight">
              Abonnement <span className="text-primary">Atlas Pro ONTV</span> Officiel : Serveur IPTV Atlas & Atlas IPTV en France
            </h1>

            <p className="mx-auto max-w-3xl text-base sm:text-lg text-body leading-relaxed">
              Bienvenue sur le distributeur officiel <strong>Atlas Pro France</strong>. Profitez de la qualité supérieure de l&apos;<strong>IPTV Atlas</strong> avec votre <strong>abonnement Atlas Pro ONTV</strong> : plus de 10 000 chaînes directes en 4K/FHD et VOD illimitée. Grâce à la stabilité de l&apos;infrastructure <strong>Atlas IPTV</strong>, bénéficiez d&apos;une activation express en moins de 15 minutes, d&apos;une diffusion anti-freeze et d&apos;une compatibilité sur Smart TV et boîtiers.
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
          </div>
        </section>

        {/* 2. Pricing Grid */}
        <section id="tarifs" aria-label="Tarifs des abonnements" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-20">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Nos Formules d&apos;Abonnement Atlas Pro ONTV
            </h2>
            <p className="text-sm text-body">
              Accès complet 4K/FHD au flux IPTV Atlas, support multi-écrans et expédition instantanée de votre code par e-mail.
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

        {/* 3. Application & Compatibility Bridge */}
        <section className="bg-surface border-y border-border py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
                Comment Activer votre Abonnement Atlas IPTV en France ?
              </h2>
              <p className="text-sm text-body">
                Une mise en service rapide en 3 étapes sans compétences techniques requises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white text-sm font-bold">
                  1
                </span>
                <h3 className="text-base font-bold text-heading">Choisissez votre durée</h3>
                <p className="text-xs text-body leading-relaxed">
                  Optez pour 3, 6 ou 12 mois pour votre abonnement Atlas Pro ONTV selon vos besoins. Paiement unique sécurisé sans renouvellement forcé.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white text-sm font-bold">
                  2
                </span>
                <h3 className="text-base font-bold text-heading">Recevez vos accès en 15 min</h3>
                <p className="text-xs text-body leading-relaxed">
                  Vos identifiants et votre code d&apos;activation IPTV Atlas vous sont expédiés par e-mail et WhatsApp dès validation.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white text-sm font-bold">
                  3
                </span>
                <h3 className="text-base font-bold text-heading">Connectez-vous sur votre écran</h3>
                <p className="text-xs text-body leading-relaxed">
                  Ouvrez{" "}
                  <Link href="/telecharger/atlas-pro-ontv" className="text-primary font-semibold hover:underline">
                    Atlas Pro ONTV
                  </Link>{" "}
                  ou{" "}
                  <Link href="/telecharger/atlas-pro-max" className="text-primary font-semibold hover:underline">
                    Atlas Pro Max
                  </Link>{" "}
                  sur votre Smart TV ou boîtier pour lancer le visionnage immédiat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SEO/AEO Entity Block */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Pourquoi Choisir le Réseau IPTV Atlas Pro en France ?
            </h2>
            <p className="text-sm text-body">
              L&apos;infrastructure de référence pour le public français à la recherche de flux sportifs et chaînes premium en 4K.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-heading">Technologie Anti-Freeze & Serveurs Dédiés France</h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                Grâce à notre réseau distribué et nos liaisons 10 Gbps, le service <strong>Atlas IPTV</strong> assure une fluidité sans interruption, même lors des pics d&apos;audience des grandes compétitions sportives en direct.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Tv className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-heading">Compatibilité Totale avec Vos Équipements</h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                Que vous utilisiez une Smart TV Samsung (Tizen), LG (webOS), Amazon Fire TV Stick, Nvidia Shield ou Android Box, votre <strong>abonnement Atlas Pro ONTV</strong> se configure instantanément avec nos guides officiels.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FAQ Block */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" aria-hidden="true" />
              <span>Questions Fréquentes sur l&apos;Abonnement Atlas Pro ONTV et l&apos;IPTV Atlas</span>
            </h2>
            <p className="text-sm text-body">
              Tout ce que vous devez savoir avant de commander votre licence Atlas IPTV en France.
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
