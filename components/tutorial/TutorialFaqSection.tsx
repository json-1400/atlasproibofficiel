import React from "react";
import { HelpCircle } from "lucide-react";

interface TutorialFaqSectionProps {
  faq?: Array<{ question: string; answer: string }>;
}

export function TutorialFaqSection({ faq }: TutorialFaqSectionProps): React.JSX.Element {
  if (!faq || faq.length === 0) return <></>;

  return (
    <section
      id="faq"
      aria-label="Questions fréquentes"
      className="space-y-4 pt-6 border-t border-border scroll-mt-24"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-heading flex items-center gap-2">
        <HelpCircle className="h-6 w-6 text-primary" aria-hidden="true" />
        <span>Questions fréquentes (FAQ)</span>
      </h2>
      <div className="space-y-3">
        {faq.map(({ question, answer }) => (
          <details
            key={question}
            className="group rounded-xl border border-border bg-white p-5 open:border-primary/40 open:shadow-xs transition-all"
          >
            <summary className="text-sm font-bold text-heading cursor-pointer list-none flex items-center justify-between gap-4">
              <span>{question}</span>
              <HelpCircle
                className="h-4 w-4 text-primary shrink-0 group-open:text-primary-hover transition-colors"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed border-t border-slate-100 pt-3">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
