import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { RotateCcw, ShieldCheck, Clock, CheckCircle2, HelpCircle, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { buildOrganizationSchema, buildWebSiteSchema, buildBreadcrumbSchema } from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Politique de Remboursement | Garantie Satisfait ou Remboursé Atlas Pro",
    description:
      "Découvrez les conditions de notre garantie satisfait ou remboursé sous 7 jours. Procédure simple, transparente et traitement rapide de votre demande sur Atlas Pro ONTV Officiel.",
    path: "/politique-remboursement",
  });
}

export default function PolitiqueRemboursementPage(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Politique de Remboursement" },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildBreadcrumbSchema([
      { name: "Accueil", path: "/" },
      { name: "Politique de Remboursement", path: "/politique-remboursement" },
    ]),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="space-y-3 border-b border-border pb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Garantie Satisfait ou Remboursé</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl text-heading">
            Politique de Remboursement
          </h1>
          <p className="text-sm text-body">
            Chez {SITE_NAME}, la satisfaction de nos clients est au cœur de nos engagements. Si vous rencontrez une incompatibilité technique majeure que notre assistance ne peut résoudre, vous bénéficiez de notre politique de remboursement claire et équitable.
          </p>
        </header>

        <section className="space-y-6 text-sm text-body leading-relaxed">
          {/* Card 1: 7-day guarantee */}
          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
              1. Délai de rétractation et garantie de 7 jours
            </h2>
            <p>
              Tout nouvel abonnement souscrit sur {SITE_NAME} bénéficie d&apos;une période de garantie de <strong>7 jours calendaires</strong> à compter de la réception de vos identifiants d&apos;accès par e-mail.
            </p>
            <p>
              Pendant ce délai, si le service ne correspond pas à vos attentes techniques ou si votre matériel s&apos;avère incompatible après vérification conjointe avec notre support, vous pouvez solliciter l&apos;annulation de votre commande et le remboursement intégral de votre paiement.
            </p>
          </div>

          {/* Card 2: Eligibility */}
          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              2. Conditions d&apos;éligibilité au remboursement
            </h2>
            <p>Le remboursement est accordé dans les cas suivants :</p>
            <ul className="space-y-2 pt-1 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Problème technique persistant :</strong> Impossibilité avérée d&apos;accéder au serveur ou instabilité continue sur votre réseau, non résolue par nos équipes techniques dans les 24 heures.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Incompatibilité matérielle :</strong> Téléviseur ou équipement ne supportant aucun lecteur compatible certifié (Smart TV ancienne génération sans store d&apos;applications ni port HDMI).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Double commande accidentelle :</strong> En cas de souscription multiple par erreur, l&apos;accès excédentaire est immédiatement recrédité à 100 %.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Non-eligible cases */}
          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-amber-500" aria-hidden="true" />
              3. Situations non éligibles au remboursement
            </h2>
            <p>Le remboursement ne pourra pas être validé dans les situations suivantes :</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600">
              <li>Demande transmise au-delà du délai de 7 jours calendaires suivant la livraison des accès.</li>
              <li>Refus d&apos;appliquer les réglages de dépannage recommandés par le support (modification DNS Cloudflare 1.1.1.1 ou redémarrage de la box).</li>
              <li>Débit de connexion internet insuffisant (débit inférieur aux 15 Mbps requis pour la diffusion 4K/FHD) lorsque le test de ligne confirme un réseau local saturé.</li>
              <li>Partage non autorisé des accès en violation de la politique mono-écran (usage simultané sur plusieurs adresses IP distinctes sur une formule 1 écran).</li>
            </ul>
          </div>

          {/* Card 4: How to claim */}
          <div className="rounded-2xl border border-border bg-white p-6 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-heading">
              4. Procédure de demande et délais de traitement
            </h2>
            <p>
              Pour formuler une demande de remboursement, la démarche s&apos;effectue en 3 étapes simples :
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-600">
              <li>Ouvrez un ticket depuis notre page <Link href="/ouvrir-ticket" className="font-semibold text-primary underline">Support & Assistance</Link>.</li>
              <li>Indiquez votre <strong>numéro de commande</strong> et l&apos;adresse e-mail utilisée lors du paiement.</li>
              <li>Précisez le motif de votre demande avec une brève description du dysfonctionnement rencontré.</li>
            </ol>
            <p className="text-xs text-slate-500 bg-surface p-3 rounded-xl border border-border">
              <strong>Délai bancaire :</strong> Dès validation par notre équipe d&apos;assistance, le remboursement est ordonné sous <strong>24 à 48 heures ouvrées</strong> sur le moyen de paiement d&apos;origine (carte bancaire ou portefeuille électronique). Le crédit apparaît sur votre relevé bancaire sous 3 à 5 jours selon votre établissement financier.
            </p>
          </div>

          {/* Support CTA Box */}
          <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 text-center space-y-3">
            <h3 className="text-base font-bold text-heading">
              Vous rencontrez une difficulté avec votre abonnement ?
            </h3>
            <p className="text-xs sm:text-sm text-body max-w-xl mx-auto">
              Avant de demander l&apos;annulation, notre équipe d&apos;assistance 7j/7 est à votre disposition pour configurer gratuitement votre équipement et optimiser votre flux en moins de 15 minutes.
            </p>
            <div className="pt-2">
              <Link
                href="/ouvrir-ticket"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white hover:bg-primary-hover transition-colors shadow-sm"
              >
                <span>Contacter l&apos;Assistance Technique</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
