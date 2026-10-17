import React from "react";
import Link from "next/link";
import { ArrowRight, Download, HelpCircle, ShieldCheck, Tag } from "lucide-react";
import type { Tutorial } from "@/lib/mock-data-tutorials";

interface TutorialSidebarProps {
  tut: Tutorial;
  related: Tutorial[];
}

export function TutorialSidebar({ tut, related }: TutorialSidebarProps): React.JSX.Element {
  return (
    <aside aria-label="Informations complémentaires et navigation" className="space-y-6 lg:sticky lg:top-24">
      {/* Subscription Monetization Bridge */}
      <div className="rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-white p-5 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Abonnement Officiel
          </span>
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-extrabold text-heading">
            Atlas Pro 12 Mois
          </h3>
          <p className="text-xs text-body leading-relaxed">
            Accès complet à plus de 10 000 chaînes 4K, VOD et EPG 7 jours. Activation instantanée.
          </p>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-black text-heading">40€</span>
          <span className="text-xs text-slate-400 line-through">60€</span>
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            -33% Promo
          </span>
        </div>
        <Link
          href="/plans-tarifs/atlas-pro-12-mois"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
        >
          <span>Commander l&apos;offre 12 mois (40€)</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Fast Downloader Code Box */}
      <div className="rounded-2xl border border-border bg-white p-5 shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <Download className="h-4 w-4 text-primary" aria-hidden="true" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-heading">
            Code Downloader Fire Stick
          </h3>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5">
          <span className="text-xs text-slate-500 font-medium">Code AFTVnews :</span>
          <code className="text-base font-mono font-bold text-primary">822648</code>
        </div>
        <p className="text-[11px] text-body leading-relaxed">
          Tapez ce code à 6 chiffres dans Downloader pour télécharger directement l&apos;APK officiel Atlas Pro ONTV.
        </p>
        <Link
          href="/telecharger/atlas-pro-ontv"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          <span>Voir le guide de téléchargement</span>
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>
      </div>

      {/* Related Guides in Same Category */}
      {related.length > 0 && (
        <div className="rounded-2xl border border-border bg-white p-5 shadow-xs space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-heading">
            Guides recommandés
          </h3>
          <ul className="space-y-2.5">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/tutoriels/${item.slug}`}
                  className="group flex flex-col gap-0.5 text-xs text-body hover:text-primary transition-colors"
                >
                  <span className="font-semibold text-heading group-hover:text-primary line-clamp-2">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {item.readingTime} de lecture
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tutorial Tags */}
      {tut.tags && tut.tags.length > 0 && (
        <div className="rounded-2xl border border-border bg-white p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-1.5 text-heading font-bold text-xs uppercase tracking-wider">
            <Tag className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>Mots-clés & Thématiques</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {tut.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-surface border border-border/80 px-2.5 py-1 text-[11px] font-medium text-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Direct Ticket Support Banner */}
      <div className="rounded-2xl border border-border bg-slate-50 p-5 shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-primary" aria-hidden="true" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-heading">
            Besoin d&apos;assistance ?
          </h3>
        </div>
        <p className="text-xs text-body leading-relaxed">
          Nos techniciens répondent 7j/7 pour vous aider à configurer votre appareil ou renouveler vos accès.
        </p>
        <Link
          href="/ouvrir-ticket"
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-white px-3 py-2 text-xs font-semibold text-heading hover:bg-slate-100 transition-colors shadow-2xs"
        >
          <span>Ouvrir un ticket technique</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
