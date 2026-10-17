import React from "react";
import { Sparkles } from "lucide-react";
import type { TutorialSection } from "@/lib/mock-data-tutorials";

interface TutorialSectionsListProps {
  sections: TutorialSection[];
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
              {section.intro}
            </p>
          )}
          <div className="space-y-3 text-sm sm:text-base text-body leading-relaxed">
            {section.paragraphs.map((para, pIdx) => (
              <p key={pIdx}>{para}</p>
            ))}
          </div>

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
                    {h3.content}
                  </p>
                  {h3.h4Tip && (
                    <div className="mt-2 rounded-lg bg-white border border-primary/20 p-3 text-xs text-primary font-medium flex items-start gap-2">
                      <Sparkles className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h4 className="font-bold uppercase tracking-wider text-[11px]">
                          Astuce Technique
                        </h4>
                        <p className="text-body mt-0.5">{h3.h4Tip}</p>
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
