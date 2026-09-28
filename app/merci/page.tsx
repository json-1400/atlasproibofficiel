import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail, Download, ArrowRight, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Confirmation de Commande | Atlas Pro ONTV",
    description: "Merci pour votre commande. Vos codes Atlas Pro vous parviennent par e-mail en moins de 15 minutes.",
    path: "/merci",
    noIndex: true,
  });
}

interface MerciPageProps {
  searchParams: Promise<{
    orderId?: string;
    plan?: string;
  }>;
}

export default async function MerciPage({
  searchParams,
}: MerciPageProps): Promise<React.JSX.Element> {
  const params = await searchParams;
  const orderId = params.orderId;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 space-y-8 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-light text-accent">
        <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
      </div>

      <div className="space-y-3">
        {orderId && (
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <span>Commande</span>
            <span className="font-mono font-bold text-heading">#{orderId}</span>
          </div>
        )}
        <h1 className="text-3xl font-extrabold sm:text-4xl text-heading">
          Merci pour votre commande !
        </h1>
        <p className="text-sm sm:text-base text-body max-w-xl mx-auto leading-relaxed">
          Votre demande d&apos;abonnement Atlas Pro ONTV a bien été prise en compte. Notre serveur génère
          actuellement vos accès officiels.
        </p>
      </div>

      {/* Next Steps Card */}
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 text-left space-y-6">
        <h2 className="text-lg font-bold text-heading text-center sm:text-left">
          Que se passe-t-il maintenant ?
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">
              <Mail className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-heading">1. Réception de vos identifiants</h3>
              <p className="text-xs text-body mt-0.5">
                Surveillez votre boîte de réception (et vos courriers indésirables / spams). Vous recevrez vos codes d&apos;activation en 15 minutes maximum.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">
              <Download className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-heading">2. Téléchargez l&apos;application</h3>
              <p className="text-xs text-body mt-0.5">
                Si ce n&apos;est pas déjà fait, installez l&apos;APK officiel sur votre Smart TV ou boîtier Android pour être prêt dès réception.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-heading">3. Activation en 1 clic</h3>
              <p className="text-xs text-body mt-0.5">
                Entrez le code reçu dans l&apos;application pour débloquer immédiatement plus de 10 000 chaînes directes et le catalogue VOD.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <Link
          href="/telecharger/atlas-pro-ontv"
          className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
        >
          <span>Télécharger l&apos;application APK</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          href="/tutoriels"
          className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-xl border border-border bg-white px-6 text-xs font-bold text-heading hover:bg-surface transition-colors"
        >
          Consulter les guides d&apos;installation
        </Link>
      </div>
    </div>
  );
}
