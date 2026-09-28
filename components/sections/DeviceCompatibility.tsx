import React from "react";
import Link from "next/link";
import { Download, Monitor, Smartphone, Tv, Laptop, HardDrive, CheckCircle2 } from "lucide-react";

interface DeviceCard {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  apps: string;
}

const DEVICES: DeviceCard[] = [
  {
    name: "Smart TV Samsung & LG",
    category: "Tizen OS & webOS",
    icon: Tv,
    apps: "IBO Player, IPTV Smarters Pro, Smart IPTV, Nanomid",
  },
  {
    name: "Boîtiers Android & Google TV",
    category: "Nvidia Shield, Xiaomi Mi Box, Chromecast",
    icon: HardDrive,
    apps: "Atlas Pro ONTV APK, Atlas Pro Max, TiviMate",
  },
  {
    name: "Amazon Fire TV Stick",
    category: "Fire OS 4K / 4K Max / Lite",
    icon: Monitor,
    apps: "Installation directe via Downloader (APK officiel)",
  },
  {
    name: "Apple TV & Écosystème iOS",
    category: "tvOS, iPadOS, iOS",
    icon: Smartphone,
    apps: "IPTV Smarters Lite, GSE Smart IPTV, IBO Player",
  },
  {
    name: "Ordinateurs PC & Mac",
    category: "Windows 10/11 & macOS",
    icon: Laptop,
    apps: "VLC Media Player, IPTV Smarters Pro PC, Web Player",
  },
  {
    name: "Boîtiers Dédiés MAG & Formuler",
    category: "Infomir MAG, Formuler Z",
    icon: HardDrive,
    apps: "Configuration par adresse MAC via portail Stalker",
  },
];

export function DeviceCompatibility(): React.JSX.Element {
  return (
    <div className="space-y-10">
      {/* 2 Dedicated Official Apps Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Version Officielle Stable</span>
            </div>
            <h3 className="text-lg font-bold text-heading">
              Application Atlas Pro ONTV (v4.5)
            </h3>
            <p className="text-xs sm:text-sm text-body leading-relaxed">
              Le lecteur historique conçu pour offrir une navigation ultra-fluide sur Android TV, boîtiers et téléviseurs connectés. Zapping instantané, gestion complète des listes de favoris et guide des programmes électronique (EPG).
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/telecharger/atlas-pro-ontv"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white hover:bg-primary-hover transition-colors"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Télécharger Atlas Pro ONTV APK</span>
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Interface Nouvelle Génération</span>
            </div>
            <h3 className="text-lg font-bold text-heading">
              Application Atlas Pro Max (v5.2)
            </h3>
            <p className="text-xs sm:text-sm text-body leading-relaxed">
              La déclinaison premium avec interface modernisée, intégration avancée du Replay 7 jours, lecteur vidéo multi-pistes audio et sous-titres personnalisables. Optimisée pour les écrans 4K Ultra HD.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/telecharger/atlas-pro-max"
              className="inline-flex items-center gap-2 rounded-xl border border-primary text-primary bg-white px-5 py-2.5 text-xs font-bold hover:bg-primary/5 transition-colors"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Télécharger Atlas Pro Max APK</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hardware Matrix */}
      <div className="space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-heading text-center sm:text-left">
          Compatibilité Matérielle Universelle
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEVICES.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.name}
                className="rounded-xl border border-border bg-white p-4 space-y-2 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-heading leading-tight">{d.name}</h4>
                    <span className="text-[11px] text-slate-500">{d.category}</span>
                  </div>
                </div>
                <p className="text-[11px] text-body pt-1 border-t border-border/60">
                  <strong className="text-heading font-medium">Lecteurs :</strong> {d.apps}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
