import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Tutorial } from "@/lib/mock-data-tutorials";
import { getCategoryById } from "@/lib/mock-data";

interface TutorialHeaderProps {
  tut: Tutorial;
}

export function TutorialHeader({ tut }: TutorialHeaderProps): React.JSX.Element {
  const categorySlug = getCategoryById(tut.category)?.slug || "tous";

  return (
    <header className="space-y-4 pb-6 border-b border-border">
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/tutoriels/categorie/${categorySlug}`}
          className="inline-block rounded-md bg-primary/10 hover:bg-primary/20 transition-colors px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider"
        >
          {tut.categoryLabel || tut.category}
        </Link>
        {tut.tags &&
          tut.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface border border-border px-2.5 py-0.5 text-xs font-medium text-slate-600"
            >
              #{tag}
            </span>
          ))}
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading leading-tight">
        {tut.title}
      </h1>

      <p className="text-base sm:text-lg text-body leading-relaxed">
        {tut.excerpt}
      </p>

      {/* Main Featured Hero Image */}
      {tut.mainImage && (
        <figure className="pt-2 overflow-hidden rounded-2xl border border-border bg-white shadow-xs">
          <div className="relative aspect-video w-full overflow-hidden bg-slate-900 flex items-center justify-center">
            <Image
              src={tut.mainImage.url}
              alt={tut.mainImage.alt}
              width={tut.mainImage.width || 1200}
              height={tut.mainImage.height || 675}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
          <figcaption className="p-3 text-center text-xs text-slate-500 italic bg-surface">
            {tut.mainImage.caption || tut.mainImage.alt}
          </figcaption>
        </figure>
      )}
    </header>
  );
}
