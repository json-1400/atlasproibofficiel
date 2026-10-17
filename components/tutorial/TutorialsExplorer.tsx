"use client";
// CLIENT: interactive category & tag filtering for tutorials archive

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BookOpen, Wrench, Tv, Key, ArrowRight, Tag, X, Clock, FileText, Zap, Layers, HelpCircle } from "lucide-react";
import type { Tutorial, TutorialCategory } from "@/lib/mock-data-tutorials";

interface TutorialsExplorerProps {
  tutorials: Tutorial[];
  categories: TutorialCategory[];
  popularTags: string[];
}

export function TutorialsExplorer({
  tutorials,
  categories,
  popularTags,
}: TutorialsExplorerProps): React.JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredTutorials = useMemo(() => {
    return tutorials.filter((tut) => {
      const matchCategory =
        selectedCategory === "all" || tut.category === selectedCategory;
      const matchTag = !selectedTag || tut.tags.includes(selectedTag);
      return matchCategory && matchTag;
    });
  }, [tutorials, selectedCategory, selectedTag]);

  const getCategoryIcon = (id: string): React.JSX.Element => {
    switch (id) {
      case "installation":
        return <Tv className="h-3.5 w-3.5" aria-hidden="true" />;
      case "troubleshooting":
        return <Wrench className="h-3.5 w-3.5" aria-hidden="true" />;
      case "optimization":
        return <Zap className="h-3.5 w-3.5" aria-hidden="true" />;
      case "account":
        return <Key className="h-3.5 w-3.5" aria-hidden="true" />;
      case "comparisons":
        return <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />;
      default:
        return <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />;
    }
  };

  const clearFilters = (): void => {
    setSelectedCategory("all");
    setSelectedTag(null);
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isSelected
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white border border-border text-body hover:bg-slate-50 hover:text-heading"
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Popular Tags Bar */}
      <div className="rounded-2xl border border-border bg-white p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-heading">
            <Tag className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>Filtrer par thématique / mot-clé :</span>
          </div>
          {(selectedCategory !== "all" || selectedTag !== null) && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-primary font-medium cursor-pointer"
            >
              <X className="h-3 w-3" aria-hidden="true" />
              <span>Réinitialiser les filtres</span>
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {popularTags.map((tag) => {
            const isTagActive = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(isTagActive ? null : tag)}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${
                  isTagActive
                    ? "bg-primary text-white shadow-2xs font-bold"
                    : "bg-surface border border-border/80 text-slate-600 hover:bg-slate-100 hover:text-heading"
                }`}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Counter & Category Hub Link */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 px-1">
        <span>
          {filteredTutorials.length} guide{filteredTutorials.length > 1 ? "s" : ""} disponible{filteredTutorials.length > 1 ? "s" : ""}
          {selectedTag && (
            <> avec le tag <strong className="text-primary font-semibold">#{selectedTag}</strong></>
          )}
        </span>
        {selectedCategory !== "all" && (
          <Link
            href={`/tutoriels/categorie/${categories.find((c) => c.id === selectedCategory)?.slug || ""}`}
            className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
          >
            <span>Ouvrir la page dédiée de la catégorie</span>
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        )}
      </div>

      {/* Tutorials Grid */}
      <section
        aria-label="Liste des guides et tutoriels"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredTutorials.map((tut) => {
          return (
            <article
              key={tut.slug}
              className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-1 text-xs font-semibold text-primary">
                    {getCategoryIcon(tut.category)}
                    <span>{tut.categoryLabel || tut.category}</span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {tut.readingTime}
                  </span>
                </div>

                <h2 className="text-base font-bold text-heading leading-snug">
                  <Link
                    href={`/tutoriels/${tut.slug}`}
                    className="hover:text-primary transition-colors line-clamp-2"
                  >
                    {tut.title}
                  </Link>
                </h2>

                <p className="text-xs text-body leading-relaxed line-clamp-3">
                  {tut.excerpt}
                </p>

                {/* Tags preview */}
                {tut.tags && tut.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {tut.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                <Link
                  href={`/tutoriels/${tut.slug}`}
                  className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover"
                >
                  <span>Lire le guide complet</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <span className="flex items-center gap-1 text-[11px] text-slate-400">
                  <FileText className="h-3 w-3" aria-hidden="true" />
                  {tut.wordCount} mots
                </span>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
