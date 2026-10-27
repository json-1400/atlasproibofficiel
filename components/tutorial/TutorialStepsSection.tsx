import React from "react";
import { Sparkles, Wrench } from "lucide-react";
import type { TutorialStep } from "@/lib/mock-data-tutorials";
import { StepImagePlaceholder } from "./StepImagePlaceholder";

import { RichText } from "./RichText";

interface TutorialStepsSectionProps {
  steps: TutorialStep[];
}

export function TutorialStepsSection({ steps }: TutorialStepsSectionProps): React.JSX.Element {
  if (!steps || steps.length === 0) return <></>;

  return (
    <section
      id="guide-etape-par-etape"
      aria-label="Guide pas à pas"
      className="space-y-6 pt-6 border-t border-border scroll-mt-24"
    >
      <div className="space-y-1">
        <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
          <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
          Instructions Officielles
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-heading">
          Marche à suivre pas à pas
        </h2>
      </div>

      <div className="space-y-6">
        {steps.map((step) => (
          <div
            key={step.stepNumber}
            className="rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-xs space-y-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white font-bold text-sm">
                {step.stepNumber}
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-heading">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  <RichText text={step.instruction} />
                </p>
              </div>
            </div>

            {/* Step Visual or Schematic Placeholder */}
            <StepImagePlaceholder
              stepNumber={step.stepNumber}
              title={step.title}
              imageUrl={step.image?.url}
              alt={step.image?.alt || step.title}
              caption={step.image?.caption}
              placeholderLabel={step.image?.placeholderLabel}
            />

            {step.tip && (
              <div className="rounded-lg bg-surface border border-border/80 px-3.5 py-2.5 text-xs text-body flex items-start gap-2">
                <Sparkles className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">
                  <strong className="text-heading font-semibold">Conseil pratique : </strong>
                  <RichText text={step.tip} />
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
