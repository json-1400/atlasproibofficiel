import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail, Clock, ArrowRight, HelpCircle, Download } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Ticket Reçu | Support Atlas Pro ONTV",
    description:
      "Votre ticket d'assistance technique a bien été enregistré. Un technicien vous répondra sous 2 heures ouvrées.",
    path: "/ouvrir-ticket/confirmation",
    noIndex: true,
  });
}

interface ConfirmationPageProps {
  searchParams: Promise<{
    ticketId?: string;
  }>;
}

export default async function TicketConfirmationPage({
  searchParams,
}: ConfirmationPageProps): Promise<React.JSX.Element> {
  const params = await searchParams;
  const ticketId = params.ticketId;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 space-y-8 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-light text-accent">
        <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
      </div>

      <div className="space-y-3">
        {ticketId && (
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <span>Ticket de support</span>
            <span className="font-mono font-bold text-heading">#{ticketId}</span>
          </div>
        )}
        <h1 className="text-3xl font-extrabold sm:text-4xl text-heading">
          Demande d&apos;assistance enregistrée !
        </h1>
        <p className="text-sm sm:text-base text-body max-w-xl mx-auto leading-relaxed">
          Nous avons bien reçu votre signalement. Un accusé de réception a été envoyé à votre adresse e-mail avec la référence de suivi.
        </p>
      </div>

      {/* Étapes de traitement */}
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 text-left space-y-6">
        <h2 className="text-lg font-bold text-heading text-center sm:text-left">
          Que va-t-il se passer maintenant ?
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">
              <Mail className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-heading">1. Vérifiez vos e-mails</h3>
              <p className="text-xs text-body mt-0.5">
                Un e-mail récapitulatif contenant votre identifiant de ticket vous a été adressé. Pensez à vérifier vos courriers indésirables (spams).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">
              <Clock className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-heading">2. Diagnostic technique sous 2h</h3>
              <p className="text-xs text-body mt-0.5">
                Un technicien analyse l&apos;état de vos identifiants ou les logs du serveur par rapport à votre matériel. Vous recevrez une réponse détaillée par e-mail.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">
              <HelpCircle className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-heading">3. Résolution pas-à-pas</h3>
              <p className="text-xs text-body mt-0.5">
                Si un réglage DNS ou un réalignement de playlist est nécessaire, les instructions exactes vous seront communiquées en toute simplicité.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions & Auto-dépannage */}
      <div className="space-y-3 pt-2">
        <p className="text-xs text-muted">
          Pendant le traitement de votre ticket, vous pouvez consulter nos ressources :
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/tutoriels"
            className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
          >
            <HelpCircle className="h-4 w-4" aria-hidden="true" />
            <span>Consulter les tutoriels de dépannage</span>
          </Link>
          <Link
            href="/telecharger/atlas-pro-ontv"
            className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 text-xs font-bold text-heading hover:bg-surface transition-colors"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>Télécharger l&apos;application officielle</span>
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-1 rounded-xl px-4 text-xs font-medium text-muted hover:text-heading transition-colors"
          >
            <span>Retour à l&apos;accueil</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
