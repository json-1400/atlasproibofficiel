import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowRight, ShieldCheck, Zap, Tv, CheckCircle2, HelpCircle } from "lucide-react";
import { PricingCard } from "@/components/sections/PricingCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllPlans } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildHomepageProductAggregateSchema,
  buildFaqSchema,
} from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Abonnement Atlas Pro : Accès Officiel IPTV & Atlas Pro Max",
    description:
      "Commandez votre abonnement Atlas Pro officiel. Formules 3, 6 et 12 mois compatibles Smart TV, Android et Fire Stick. Activation immédiate et code sécurisé.",
    path: "/",
  });
}

export default function HomePage(): React.JSX.Element {
  const plans = getAllPlans();

  const homepageFaqs = [
    {
      question: "Combien de temps pour recevoir mon code Atlas Pro après paiement ?",
      answer:
        "Le traitement est entièrement automatisé : vos codes d'activation et liens m3u/Xtream vous sont expédiés par e-mail en moins de 15 minutes après validation de la commande.",
    },
    {
      question: "Mon abonnement est-il compatible avec l'application Atlas Pro ONTV ?",
      answer:
        "Oui, votre abonnement fonctionne indifféremment sur l'application officielle Atlas Pro ONTV, Atlas Pro Max, ainsi que sur les lecteurs IPTV tiers tels que IBO Player, IPTV Smarters Pro et TiviMate.",
    },
    {
      question: "Que faire en cas de problème de connexion au serveur ?",
      answer:
        "Consultez notre guide dédié pour résoudre l'erreur impossible de se connecter au serveur Atlas Pro, ou contactez notre assistance technique via WhatsApp disponible 7 jours sur 7.",
    },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildHomepageProductAggregateSchema(plans),
    buildFaqSchema(homepageFaqs),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="space-y-16 sm:space-y-24 pb-20">
        {/* 1. Hero Section (Transactional) */}
        <section className="bg-surface border-b border-border py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1 text-xs font-semibold text-heading shadow-sm">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Serveur officiel 2026 • Activation en moins de 15 minutes
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-heading max-w-4xl mx-auto leading-tight">
              Abonnement <span className="text-primary">Atlas Pro</span> Officiel : Votre Accès IPTV Haute Définition
            </h1>

            <p className="mx-auto max-w-2xl text-base sm:text-lg text-body leading-relaxed">
              Activation en moins de 15 minutes, compatible avec toutes les applications Atlas Pro ONTV et Atlas Pro Max.
              Accédez à plus de 10 000 chaînes directes en 4K/FHD et à une vidéothèque VOD mise à jour quotidiennement.
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

        {/* 2. Pricing Grid (Immediate Commercial Focus) */}
        <section id="tarifs" aria-label="Tarifs des abonnements" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-20">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Nos Formules d&apos;Abonnement Atlas Pro
            </h2>
            <p className="text-sm text-body">
              Accès complet 4K/FHD, support multi-écrans et livraison instantanée de votre code d&apos;activation par e-mail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {plans.map((plan) => (
              <PricingCard key={plan.slug} plan={plan} />
            ))}
          </div>
        </section>

        {/* 3. Application & Compatibility Bridge */}
        <section className="bg-surface border-y border-border py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
                Comment Fonctionne l&apos;Abonnement Atlas Pro ?
              </h2>
              <p className="text-sm text-body">
                Une mise en route simple en 3 étapes sans compétences techniques requises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white text-sm font-bold">
                  1
                </span>
                <h3 className="text-base font-bold text-heading">Choisissez votre durée</h3>
                <p className="text-xs text-body leading-relaxed">
                  Optez pour la formule 3, 6 ou 12 mois selon vos besoins. Paiement unique sécurisé sans renouvellement tacite.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white text-sm font-bold">
                  2
                </span>
                <h3 className="text-base font-bold text-heading">Recevez vos accès en 15 min</h3>
                <p className="text-xs text-body leading-relaxed">
                  Vos identifiants et votre code d&apos;activation sécurisé vous sont envoyés par e-mail et WhatsApp dès validation de commande.
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
                  sur votre Smart TV ou boîtier pour commencer le visionnage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SEO/AEO Entity Block */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Pourquoi Choisir l&apos;Abonnement IPTV Atlas Pro ?
            </h2>
            <p className="text-sm text-body">
              L&apos;infrastructure serveur numéro 1 en France pour une fluidité permanente lors des événements sportifs en direct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-heading">Technologie Anti-Freeze & Serveurs Dédiés</h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                Grâce à notre architecture de load-balancing et nos serveurs hébergés en Europe à très haut débit (10 Gbps),
                l&apos;abonnement Atlas Pro élimine les ralentissements et le buffering, même lors des pics d&apos;audience des soirées de Ligue des Champions.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Tv className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-heading">Compatibilité Totale avec Vos Appareils</h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                Que vous possédiez une Smart TV Samsung (Tizen), LG (webOS), une passerelle Amazon Fire TV Stick, une box Android TV (Nvidia Shield, Xiaomi Mi Box) ou un ordinateur, votre abonnement s&apos;intègre immédiatement via nos applications dédiées.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FAQ Block */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" aria-hidden="true" />
              <span>Questions Fréquentes sur l&apos;Abonnement Atlas Pro</span>
            </h2>
            <p className="text-sm text-body">
              Tout ce que vous devez savoir avant de commander votre licence.
            </p>
          </div>

          <div className="space-y-4">
            {homepageFaqs.map((faq) => (
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
