import React from "react";
import { Cpu, HardDrive, ShieldCheck, Terminal, Layers, CheckCircle } from "lucide-react";
import type { AppPage } from "@/lib/mock-data";

interface AppSpecsGridProps {
  app: AppPage;
}

export function AppSpecsGrid({ app }: AppSpecsGridProps): React.JSX.Element {
  const specs = [
    {
      icon: Layers,
      label: "Plateforme supportée",
      value: app.platform,
    },
    {
      icon: CheckCircle,
      label: "Version officielle",
      value: app.version,
    },
    {
      icon: HardDrive,
      label: "Taille du paquet",
      value: app.fileSize ?? "Fichier optimisé",
    },
    {
      icon: Cpu,
      label: "Configuration minimale",
      value: app.minRequirements ?? "Android 5.0+ / 1 Go RAM",
    },
    {
      icon: Terminal,
      label: "Downloader by AFTVnews",
      value: app.downloaderCode ? `Code : ${app.downloaderCode}` : "Non requis (Store TV)",
    },
    {
      icon: ShieldCheck,
      label: "Authenticité",
      value: "Package officiel",
    },
  ];

  return (
    <section aria-label="Spécifications techniques" className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-heading">
        Fiche technique et prérequis système
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {specs.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4 space-y-2 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center gap-2 text-primary">
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {item.label}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-heading break-words">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
