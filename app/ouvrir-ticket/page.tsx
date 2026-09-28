import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Clock, ShieldCheck, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { TicketForm } from "@/components/sections/TicketForm";
import { buildMetadata } from "@/lib/seo";
import { generateAntiBotChallenge } from "@/lib/anti-bot";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildContactPageSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/schema";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Ouvrir un Ticket Support Atlas Pro | Assistance & Dépannage 7j/7",
    description:
      "Besoin d'aide ? Ouvrez un ticket support Atlas Pro officiel. Assistance technique, dépannage de votre application IPTV et activation en moins de 2h ouvrées.",
    path: "/ouvrir-ticket",
  });
}

const SUPPORT_FAQS = [
  {
    question: "Quel est le délai de réponse moyen pour mon ticket support Atlas Pro ?",
    answer:
      "Notre support technique traite les tickets 7 jours sur 7. Le délai moyen de prise en charge est inférieur à 2 heures ouvrées, avec accusé de réception immédiat par e-mail.",
  },
  {
    question: "Quelles informations fournir pour accélérer la résolution de mon incident ?",
    answer:
      "Pour un diagnostic immédiat, mentionnez la marque de votre téléviseur ou boîtier (Samsung, LG, Fire TV), le nom de l'application IPTV utilisée et le message d'erreur précis affiché à l'écran.",
  },
  {
    question: "Puis-je contacter le support si je n'ai pas encore de commande ?",
    answer:
      "Oui. Vous pouvez ouvrir un ticket pour toute demande préalable à l'achat, question de compatibilité matérielle ou conseil sur le choix de votre abonnement Atlas Pro.",
  },
];

export default function OuvrirTicketPage(): React.JSX.Element {
  const initialChallenge = generateAntiBotChallenge();

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Assistance", href: "/tutoriels" },
    { label: "Ouvrir un ticket", href: "/ouvrir-ticket" },
  ];

  const pageSchemas = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildContactPageSchema(),
    buildBreadcrumbSchema([
      { name: "Accueil", path: "/" },
      { name: "Assistance", path: "/tutoriels" },
      { name: "Ouvrir un ticket", path: "/ouvrir-ticket" },
    ]),
    buildFaqSchema(SUPPORT_FAQS),
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      <JsonLd graph={pageSchemas} />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
          <MessageSquare className="h-4 w-4" aria-hidden="true" />
          <span>Support Technique Officiel</span>
        </div>
        <h1 className="text-3xl font-extrabold sm:text-4xl text-heading tracking-tight">
          Ouvrir un ticket support Atlas Pro
        </h1>
        <p className="text-base text-body leading-relaxed">
          Vous rencontrez une difficulté technique, une interruption de service ou une question sur votre abonnement ? Remplissez ce formulaire pour créer un <strong>ticket support Atlas Pro</strong> prioritaire. Nos techniciens interviennent 7j/7 pour rétablir vos flux et vous guider pas à pas.
        </p>
      </section>

      {/* Main Grid: Form + Sidebar */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        {/* Form Container */}
        <div className="lg:col-span-8">
          <TicketForm initialChallenge={initialChallenge} />
        </div>

        {/* Support Sidebar Information */}
        <aside className="lg:col-span-4 space-y-6">
          {/* SLA Card */}
          <div className="rounded-2xl border border-border bg-surface p-6 space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-heading">Assistance technique réactive</h2>
                <p className="text-xs text-muted">Prise en charge rapide</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-body">
              Chaque demande fait l&apos;objet d&apos;un suivi numéroté envoyé instantanément sur votre adresse e-mail. Temps de réponse moyen constaté : <strong>&lt; 2 heures</strong>.
            </p>
            <div className="border-t border-border pt-4 text-xs text-body space-y-2">
              <div className="flex items-center gap-2 text-heading font-medium">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <span>Serveurs monitorés 24h/24 et 7j/7</span>
              </div>
              <div className="flex items-center gap-2 text-heading font-medium">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <span>Diagnostics personnalisés par appareil</span>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Card */}
          <div className="rounded-2xl border border-border bg-white p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light text-accent">
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-heading">Urgence en direct ?</h3>
                <p className="text-xs text-muted">WhatsApp disponible</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-body">
              Pour une panne bloquante lors d&apos;une diffusion en direct ou un renouvellement immédiat, nos conseillers sont joignables directement.
            </p>
            <a
              href="https://wa.me/33756898687?text=Bonjour,%20j'ai%20besoin%20d'aide%20avec%20mon%20abonnement%20Atlas%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-xs font-bold text-white shadow-sm hover:opacity-95 transition-opacity"
            >
              <span>Contacter sur WhatsApp</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Self-Service Tutorials Link */}
          <div className="rounded-2xl border border-border bg-surface p-6 space-y-3">
            <div className="flex items-center gap-2 text-heading font-bold text-sm">
              <HelpCircle className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Guides et tutoriels d&apos;installation</span>
            </div>
            <p className="text-xs text-body leading-relaxed">
              Consultez nos pas-à-pas illustrés pour IBO Player, IPTV Smarters Pro et Fire TV Stick afin de résoudre les problèmes de configuration courants.
            </p>
            <Link
              href="/tutoriels"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
            >
              <span>Accéder aux tutoriels</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>

      {/* FAQ Section */}
      <section className="rounded-2xl border border-border bg-surface p-6 sm:p-10 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-heading">
            Foire aux questions sur le support technique
          </h2>
          <p className="text-sm text-body">
            Réponses aux questions les plus fréquemment posées avant d&apos;ouvrir un ticket.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SUPPORT_FAQS.map((faq, idx) => (
            <article key={idx} className="rounded-xl border border-border bg-white p-5 space-y-2">
              <h3 className="text-sm font-bold text-heading">{faq.question}</h3>
              <p className="text-xs text-body leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
