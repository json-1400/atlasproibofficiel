"use client"; // CLIENT: interactive copy-to-clipboard state

import React, { useState } from "react";
import Link from "next/link";
import { Copy, Check, Tv, ExternalLink, HelpCircle, ShieldCheck } from "lucide-react";
import type { AppPage } from "@/lib/mock-data";

interface DownloaderCodeCardProps {
  app: AppPage;
}

export function DownloaderCodeCard({ app }: DownloaderCodeCardProps): React.JSX.Element {
  const [copied, setCopied] = useState(false);
  const code = app.downloaderCode;
  const hasCode = code && code !== "Non requis (Store TV)";
  const isExternal = app.apkUrl.startsWith("http://") || app.apkUrl.startsWith("https://");

  const handleCopy = async (): Promise<void> => {
    if (!code) return;
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback: silent failure on unsupported environments
    }
  };

  return (
    <div className="w-full rounded-2xl border-2 border-primary/20 bg-gradient-to-b from-primary/5 via-white to-surface p-5 sm:p-6 shadow-sm space-y-5">
      {/* Card Header */}
      <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
            <Tv className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-heading">
              {app.slug === "ios" ? "Lecteurs Apple App Store" : "Installation via Downloader"}
            </h2>
            <p className="text-[11px] text-slate-500 font-medium">
              {app.slug === "ios"
                ? "Faire tourner Atlas Pro sur iPhone & Apple TV"
                : "Application officielle Downloader by AFTVnews"}
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold">
          <ShieldCheck className="h-3 w-3" aria-hidden="true" />
          {app.slug === "ios" ? "App Store Certifié" : "Code Vérifié"}
        </span>
      </div>

      {/* Code Display or Alternative */}
      {app.slug === "ios" ? (
        <div className="space-y-4 text-xs">
          <p className="text-body leading-relaxed">
            Pour regarder vos chaînes Atlas Pro sur Apple, installez l&apos;une de ces applications certifiées depuis l&apos;App Store :
          </p>
          <div className="space-y-2">
            <a
              href="https://apps.apple.com/app/iptv-smarters-player-lite/id1628995509"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full inline-flex h-10 items-center justify-between rounded-xl border border-primary/20 bg-white px-3.5 text-xs font-bold text-heading hover:border-primary hover:text-primary transition-colors shadow-2xs"
            >
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                IPTV Smarters Player Lite
              </span>
              <span className="text-[11px] font-medium text-slate-400">Gratuit (iPhone / iPad) ↗</span>
            </a>
            <a
              href="https://apps.apple.com/app/uhf-iptv/id6443751726"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full inline-flex h-10 items-center justify-between rounded-xl border border-primary/20 bg-white px-3.5 text-xs font-bold text-heading hover:border-primary hover:text-primary transition-colors shadow-2xs"
            >
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                UHF IPTV Player
              </span>
              <span className="text-[11px] font-medium text-slate-400">Recommandé Apple TV ↗</span>
            </a>
          </div>

          <div className="rounded-xl bg-surface/80 border border-border/80 p-3 text-[11px] text-slate-600 space-y-1">
            <p className="font-bold text-heading">Connexion avec vos identifiants Atlas Pro :</p>
            <p>1. Lancez le lecteur installé depuis l&apos;App Store</p>
            <p>2. Choisissez <strong>Xtream Codes API</strong></p>
            <p>3. Renseignez l&apos;URL Serveur, Utilisateur et Mot de passe reçus par e-mail</p>
          </div>
        </div>
      ) : hasCode ? (
        <div className="space-y-4">
          <div className="rounded-xl bg-white border border-border p-4 text-center shadow-inner space-y-2">
            <span className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider">
              Code à saisir dans Downloader by AFTVnews
            </span>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono font-black text-primary tracking-widest selection:bg-primary/20">
                {code}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-bold text-heading hover:bg-slate-100 hover:text-primary transition-all active:scale-95"
                title="Copier le code Downloader"
                aria-label="Copier le code Downloader dans le presse-papier"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                    <span className="text-emerald-700">Copié !</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                    <span>Copier</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick 3-Step Downloader Instructions */}
          <div className="space-y-2 rounded-xl bg-surface/80 border border-border/80 p-3.5 text-xs">
            <p className="font-bold text-heading text-[12px] flex items-center gap-1.5">
              <span>Procédure rapide en 3 étapes :</span>
            </p>
            <ol className="space-y-2 text-slate-600 list-none pl-0">
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                  1
                </span>
                <span>
                  Ouvrez <strong>Downloader by AFTVnews</strong> sur votre Fire Stick ou Android TV (gratuit sur l&apos;Appstore).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                  2
                </span>
                <span>
                  Tapez le code numérique <strong className="font-mono text-primary font-bold">{code}</strong> dans la barre URL puis cliquez sur <strong>Go</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                  3
                </span>
                <span>
                  L&apos;application se télécharge et vous invite à cliquer sur <strong>Installer</strong>.
                </span>
              </li>
            </ol>
          </div>
        </div>
      ) : isExternal ? (
        <div className="space-y-3">
          <p className="text-xs text-body">
            Cette version est accessible directement via le magasin officiel ou l&apos;application dédiée :
          </p>
          <a
            href={app.apkUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            <span>Accéder au magasin officiel</span>
          </a>
        </div>
      ) : (
        <div className="space-y-3 text-xs text-body">
          <p>
            Installation directe sans Downloader requise pour cette plateforme ({app.platform}).
          </p>
        </div>
      )}

      {/* Support & Activation Action Bar */}
      <div className="pt-2 border-t border-border flex flex-col sm:flex-row gap-2">
        <Link
          href="/plans-tarifs/atlas-pro-12-mois"
          className="flex-1 inline-flex h-10 items-center justify-center rounded-xl bg-primary px-3 text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors text-center"
        >
          Activer un code (12 Mois à 40€)
        </Link>
        <Link
          href="/ouvrir-ticket"
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-white px-3 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          title="Assistance technique gratuite par ticket ou WhatsApp"
        >
          <HelpCircle className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
          <span>Aide installation</span>
        </Link>
      </div>
    </div>
  );
}
