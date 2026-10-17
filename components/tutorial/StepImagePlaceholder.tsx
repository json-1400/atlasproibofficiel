import React from "react";
import Image from "next/image";
import { Monitor, Tv, Wifi, Cpu, Settings, CheckCircle2 } from "lucide-react";

interface StepImagePlaceholderProps {
  stepNumber: number;
  title: string;
  imageUrl?: string;
  alt: string;
  caption?: string;
  placeholderLabel?: string;
}

export function StepImagePlaceholder({
  stepNumber,
  title,
  imageUrl,
  alt,
  caption,
  placeholderLabel,
}: StepImagePlaceholderProps): React.JSX.Element {
  const isRealImage = Boolean(imageUrl && imageUrl.trim().length > 0);

  if (isRealImage && imageUrl) {
    return (
      <figure className="my-4 space-y-2 overflow-hidden rounded-xl border border-border bg-white shadow-xs">
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          <Image
            src={imageUrl}
            alt={alt}
            width={800}
            height={450}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
        {caption && (
          <figcaption className="px-4 py-2 text-center text-xs text-slate-500 italic">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  const getStepIcon = (num: number): React.JSX.Element => {
    switch (num) {
      case 1:
        return <Tv className="h-8 w-8 text-primary/80" aria-hidden="true" />;
      case 2:
        return <Wifi className="h-8 w-8 text-primary/80" aria-hidden="true" />;
      case 3:
        return <Settings className="h-8 w-8 text-primary/80" aria-hidden="true" />;
      case 4:
        return <Cpu className="h-8 w-8 text-primary/80" aria-hidden="true" />;
      default:
        return <Monitor className="h-8 w-8 text-primary/80" aria-hidden="true" />;
    }
  };

  return (
    <figure className="my-4 space-y-2 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white shadow-xs">
      <div
        className="relative flex aspect-video w-full flex-col items-center justify-center p-6 text-center border-b border-slate-100"
        role="img"
        aria-label={alt}
      >
        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-md bg-white border border-slate-200 px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          <span>Étape {stepNumber}</span>
        </div>

        <div className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider text-slate-400">
          Capture d&apos;écran d&apos;aide
        </div>

        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-xs">
          {getStepIcon(stepNumber)}
        </div>

        <p className="max-w-md text-sm font-bold text-heading">
          {placeholderLabel || title}
        </p>
        <p className="mt-1 max-w-sm text-xs text-slate-500 leading-normal">
          {alt}
        </p>

        <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
          <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
          <span>Vérifié par l&apos;équipe technique Atlas Pro</span>
        </div>
      </div>

      {caption && (
        <figcaption className="px-4 py-2 text-center text-xs text-slate-500 italic bg-slate-50/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
