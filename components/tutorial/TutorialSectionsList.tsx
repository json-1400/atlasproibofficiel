import React from "react";
import { Sparkles, AlertTriangle, Info } from "lucide-react";
import type { TutorialSection, TutorialCallout, TutorialTable } from "@/lib/mock-data-tutorials";
import { RichText } from "./RichText";

interface TutorialSectionsListProps {
  sections: TutorialSection[];
}

function SectionCallout({ callout }: { callout: TutorialCallout }): React.JSX.Element {
  const isWarning = callout.type === "warning";

  const borderClass = isWarning
    ? "border-amber-400 bg-amber-50/50"
    : "border-primary/20 bg-primary-subtle/30";

  const titleClass = isWarning
    ? "text-amber-900"
    : "text-primary";

  const IconComponent = isWarning ? AlertTriangle : Info;

  return (
    <div className={`rounded-xl border p-4 sm:p-5 my-4 space-y-2 ${borderClass}`}>
      <div className="flex items-center gap-2">
        <IconComponent className={`h-5 w-5 shrink-0 ${titleClass}`} aria-hidden="true" />
        <h4 className={`text-sm sm:text-base font-bold ${titleClass}`}>
          {callout.title}
        </h4>
      </div>
      <p className="text-xs sm:text-sm text-body leading-relaxed">
        <RichText text={callout.text} />
      </p>
      {callout.link && (
        <div className="pt-1">
          <RichText text={`[${callout.link.label}](${callout.link.url})`} />
        </div>
      )}
    </div>
  );
}

function SectionTable({ table }: { table: TutorialTable }): React.JSX.Element {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-border shadow-2xs">
      <table className="w-full text-left text-xs sm:text-sm border-collapse">
        {table.caption && (
          <caption className="p-2.5 text-xs font-semibold text-muted text-left bg-surface/50 border-b border-border">
            {table.caption}
          </caption>
        )}
        <thead className="bg-surface border-b border-border text-heading font-bold text-xs uppercase tracking-wider">
          <tr>
            {table.headers.map((header, idx) => (
              <th key={idx} scope="col" className="px-4 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60 bg-white">
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-surface/30 transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className={`px-4 py-3 text-body ${cIdx === 0 ? "font-semibold text-heading" : ""}`}>
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TutorialSectionsList({ sections }: TutorialSectionsListProps): React.JSX.Element {
  if (!sections || sections.length === 0) return <></>;

  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`heading-${section.id}`}
          className="space-y-4 pt-4 border-t border-border/60"
        >
          <h2
            id={`heading-${section.id}`}
            className="text-xl sm:text-2xl font-bold text-heading scroll-mt-24"
          >
            {section.h2}
          </h2>

          {section.intro && (
            <p className="text-sm sm:text-base font-medium text-heading">
              <RichText text={section.intro} />
            </p>
          )}

          {section.callout && <SectionCallout callout={section.callout} />}

          {section.paragraphs && section.paragraphs.length > 0 && (
            <div className="space-y-3 text-sm sm:text-base text-body leading-relaxed">
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx}>
                  <RichText text={para} />
                </p>
              ))}
            </div>
          )}

          {section.table && <SectionTable table={section.table} />}

          {/* H3 Subsections */}
          {section.h3s && section.h3s.length > 0 && (
            <div className="space-y-4 pt-2">
              {section.h3s.map((h3) => (
                <div
                  key={h3.id}
                  id={h3.id}
                  className="rounded-xl border border-border/80 bg-surface/40 p-4 sm:p-5 space-y-2 scroll-mt-24"
                >
                  <h3 className="text-base sm:text-lg font-bold text-heading">
                    {h3.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    <RichText text={h3.content} />
                  </p>
                  {h3.h4Tip && (
                    <div className="mt-2 rounded-lg bg-white border border-primary/20 p-3 text-xs text-primary font-medium flex items-start gap-2">
                      <Sparkles className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h4 className="font-bold uppercase tracking-wider text-[11px]">
                          Astuce Technique
                        </h4>
                        <p className="text-body mt-0.5">
                          <RichText text={h3.h4Tip} />
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
