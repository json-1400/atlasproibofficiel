import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import type { Tutorial } from "@/lib/mock-data";

export interface RelatedTutorialsProps {
  tutorials: Tutorial[];
  title?: string;
}

export function RelatedTutorials({
  tutorials,
  title = "Tutoriels et guides recommandés",
}: RelatedTutorialsProps): React.JSX.Element {
  if (tutorials.length === 0) {
    return <></>;
  }

  return (
    <section className="my-10 border-t border-border pt-8">
      <h3 className="text-xl font-bold text-heading mb-6 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
        <span>{title}</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {tutorials.map((tut) => (
          <article
            key={tut.slug}
            className="flex flex-col justify-between rounded-2xl border border-border bg-white p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
          >
            <div>
              <span className="inline-block rounded-md bg-surface px-2.5 py-1 text-[11px] font-semibold text-primary mb-2.5 uppercase tracking-wider">
                {tut.category}
              </span>
              <h4 className="text-sm font-bold text-heading line-clamp-2 mb-2 leading-snug">
                <Link
                  href={`/tutoriels/${tut.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {tut.title}
                </Link>
              </h4>
              <p className="text-xs text-body line-clamp-2 leading-relaxed">
                {tut.excerpt}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary">
              <Link
                href={`/tutoriels/${tut.slug}`}
                className="inline-flex items-center gap-1.5 hover:text-primary-hover"
              >
                <span>Lire le guide</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
