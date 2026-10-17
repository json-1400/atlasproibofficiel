import React from "react";
import { Zap, CheckCircle2 } from "lucide-react";

interface AppAeoBoxProps {
  directAnswer: string;
  keyTakeaways: string[];
  appName: string;
}

export function AppAeoBox({
  directAnswer,
  keyTakeaways,
  appName,
}: AppAeoBoxProps): React.JSX.Element {
  return (
    <section
      aria-label={`Guide express et résumé d'installation pour ${appName}`}
      className="rounded-2xl border border-primary/25 bg-surface/50 p-6 sm:p-8 lg:p-10 space-y-6 shadow-xs"
    >
      <div className="space-y-2.5">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">
          <Zap className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Procédure express vérifiée</span>
        </div>
        <p className="text-base sm:text-lg text-heading font-medium leading-relaxed bg-white border border-border/80 rounded-xl p-5 shadow-2xs">
          {directAnswer}
        </p>
      </div>

      {keyTakeaways && keyTakeaways.length > 0 && (
        <div className="space-y-3 pt-1">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Points clés à retenir pour {appName}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {keyTakeaways.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 rounded-xl bg-white border border-border/80 p-4 text-xs sm:text-sm text-body shadow-2xs"
              >
                <CheckCircle2
                  className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
