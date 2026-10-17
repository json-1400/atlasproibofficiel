import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

export function AppsComparisonTable({ currentSlug }: { currentSlug: string }): React.JSX.Element {
  const appsData = [
    {
      slug: "atlas-pro-ontv",
      name: "Atlas Pro ONTV",
      target: "Smart TV, Fire Stick, Xiaomi Box",
      ui: "Télécommande (Horizontal)",
      size: "45 Mo",
      code: "822648",
      highlight: "Zapping instantané 0.3s & EPG 7j",
      badge: "Recommandé TV",
    },
    {
      slug: "atlas-pro-max",
      name: "Atlas Pro Max",
      target: "Smartphones & Tablettes",
      ui: "Tactile (Vertical/Horizontal)",
      size: "28 Mo",
      code: "388685",
      highlight: "Mode hors-ligne VOD & Cast TV",
      badge: "Recommandé Mobile",
    },
    {
      slug: "atlas-pro-9x",
      name: "Atlas Pro 9X",
      target: "Box 1 Go RAM & Vieux boîtiers",
      ui: "Télécommande / Clavier",
      size: "18 Mo",
      code: "4858164",
      highlight: "Poids plume & zéro consommation RAM",
      badge: "Ultra-léger",
    },
    {
      slug: "atlas-pro-ibo",
      name: "Atlas Pro IBO",
      target: "Android TV & Fire TV",
      ui: "Télécommande (Style IBO)",
      size: "32 Mo",
      code: "2681120",
      highlight: "Double accès Code 12 ch. & Xtream",
      badge: "Alternative",
    },
  ];

  return (
    <section
      aria-label="Comparatif des versions Atlas Pro"
      className="rounded-2xl border border-border bg-white p-6 sm:p-8 space-y-6 shadow-sm"
    >
      <div className="space-y-1">
        <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
          <Layers className="h-3.5 w-3.5" aria-hidden="true" />
          Aide au Choix
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-heading">
          Quelle version d&apos;Atlas Pro choisir pour votre matériel ?
        </h2>
        <p className="text-xs sm:text-sm text-body leading-relaxed">
          Chaque déclinaison d&apos;Atlas Pro est compilée pour répondre précisément aux capacités matérielles de votre écran.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-surface border-b border-border text-slate-700 font-bold uppercase tracking-wider text-[11px]">
            <tr>
              <th scope="col" className="p-3.5 sm:p-4">Application</th>
              <th scope="col" className="p-3.5 sm:p-4">Appareil cible</th>
              <th scope="col" className="p-3.5 sm:p-4">Contrôle</th>
              <th scope="col" className="p-3.5 sm:p-4">Poids APK</th>
              <th scope="col" className="p-3.5 sm:p-4">Code Downloader</th>
              <th scope="col" className="p-3.5 sm:p-4 text-right">Fiche</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {appsData.map((row) => {
              const isCurrent = row.slug === currentSlug;
              return (
                <tr
                  key={row.slug}
                  className={`hover:bg-slate-50/80 transition-colors ${
                    isCurrent ? "bg-primary/5 font-semibold" : ""
                  }`}
                >
                  <td className="p-3.5 sm:p-4">
                    <div className="space-y-0.5">
                      <div className="font-bold text-heading flex items-center gap-2">
                        <span>{row.name}</span>
                        {isCurrent && (
                          <span className="rounded bg-primary text-white text-[10px] font-bold px-1.5 py-0.2">
                            Page active
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-500">{row.highlight}</span>
                    </div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-body">{row.target}</td>
                  <td className="p-3.5 sm:p-4 text-body">{row.ui}</td>
                  <td className="p-3.5 sm:p-4 text-body font-mono text-xs">{row.size}</td>
                  <td className="p-3.5 sm:p-4">
                    <code className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-mono font-bold text-primary text-xs">
                      {row.code}
                    </code>
                  </td>
                  <td className="p-3.5 sm:p-4 text-right">
                    {isCurrent ? (
                      <span className="text-slate-400 text-xs italic">Actuelle</span>
                    ) : (
                      <Link
                        href={`/telecharger/${row.slug}`}
                        className="inline-flex items-center gap-1 text-primary hover:text-primary-hover font-semibold text-xs"
                      >
                        <span>Voir</span>
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </Link>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
