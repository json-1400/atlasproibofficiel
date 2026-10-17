import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Calendar, UserCheck } from "lucide-react";

interface AeoSummaryBoxProps {
  directAnswer: string;
  keyTakeaways: string[];
  author: {
    name: string;
    role: string;
  };
  updatedAt: string;
  readingTime: string;
  wordCount: number;
}

export function AeoSummaryBox({
  directAnswer,
  keyTakeaways,
  author,
  updatedAt,
  readingTime,
  wordCount,
}: AeoSummaryBoxProps): React.JSX.Element {
  return (
    <section
      aria-label="Synthèse et réponse directe"
      className="rounded-2xl border border-primary/20 bg-surface/60 p-5 sm:p-6 space-y-6 shadow-sm"
    >
      {/* E-E-A-T Editorial Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border/80 text-xs text-body">
        <div className="flex items-center gap-2">
          <UserCheck className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
          <span>
            Rédigé par <strong className="text-heading font-semibold">{author.name}</strong> ({author.role})
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            Mis à jour le {updatedAt}
          </span>
          <span className="inline-flex items-center gap-1 text-slate-600 font-medium">
            {readingTime} • {wordCount} mots
          </span>
        </div>
      </div>

      {/* AEO Direct Answer Target */}
      <div className="space-y-2.5">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">
          <Zap className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Réponse directe vérifiée (Position zéro)</span>
        </div>
        <p className="text-base sm:text-lg text-heading font-medium leading-relaxed bg-white border border-border/80 rounded-xl p-4 shadow-xs">
          {directAnswer}
        </p>
      </div>

      {/* GEO Key Takeaways Target */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          <span>Points clés à retenir (Généré par nos experts réseau)</span>
        </h3>
        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {keyTakeaways.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 rounded-lg bg-white border border-border/60 p-3 text-xs sm:text-sm text-body leading-relaxed"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
