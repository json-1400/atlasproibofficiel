"use client";

// CLIENT: interactive movie carousel navigation with touch scroll support
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Film, Sparkles } from "lucide-react";

interface MovieItem {
  id: string;
  title: string;
  genre: string;
  badge: string;
  year: string;
  image: string;
  alt: string;
}

const VOD_MOVIES: MovieItem[] = [
  {
    id: "cyber-chronicles",
    title: "Cyber Chronicles 2088",
    genre: "Science-Fiction • Action",
    badge: "4K HDR",
    year: "2026",
    image: "/images/vod/vod-cyber-chronicles-4k.jpg",
    alt: "Affiche du film Cyber Chronicles 2088 disponible en streaming 4K sur le catalogue VOD Atlas Pro ONTV",
  },
  {
    id: "final-glory",
    title: "Final Glory : Championnat",
    genre: "Documentaire Sport • Football",
    badge: "4K 60FPS",
    year: "2026",
    image: "/images/vod/vod-final-glory-stadium-4k.jpg",
    alt: "Affiche du documentaire sportif Final Glory disponible sur le serveur Atlas IPTV France",
  },
  {
    id: "shadow-protocol",
    title: "Shadow Protocol",
    genre: "Thriller • Espionnage",
    badge: "4K UHD",
    year: "2026",
    image: "/images/vod/vod-shadow-protocol-action-4k.jpg",
    alt: "Affiche du film d'action Shadow Protocol en version française VF et VOSTFR sur Atlas Pro",
  },
  {
    id: "interstellar-echoes",
    title: "Interstellar Echoes",
    genre: "Aventure Spatiale • Mystère",
    badge: "4K Dolby Vision",
    year: "2026",
    image: "/images/vod/vod-interstellar-echoes-space-4k.jpg",
    alt: "Affiche du film de science-fiction Interstellar Echoes en qualité 4K Ultra HD sur IPTV Atlas",
  },
  {
    id: "apex-velocity",
    title: "Apex Velocity",
    genre: "Course • Vitesse Extrême",
    badge: "4K HDR10",
    year: "2026",
    image: "/images/vod/vod-apex-velocity-racing-4k.jpg",
    alt: "Affiche du film de course automobile Apex Velocity inclus dans l'abonnement Atlas Pro ONTV",
  },
  {
    id: "realm-of-ashes",
    title: "Realm of Ashes (Série)",
    genre: "Drame Épique • Médiéval",
    badge: "Saison Complète 4K",
    year: "2026",
    image: "/images/vod/vod-realm-of-ashes-series-4k.jpg",
    alt: "Affiche de la série dramatique Realm of Ashes disponible en streaming illimité sur Atlas IPTV",
  },
];

export function VodCarousel(): React.JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right"): void => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-4">
      {/* Header with Navigation Arrows */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Film className="h-4 w-4" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-heading">
              Dernières Sorties Cinéma & Séries VOD 4K Incluses
            </h3>
            <p className="text-[11px] text-slate-500">
              Des milliers de titres en versions VF & VOSTFR avec pistes audio Dolby 5.1
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Faire défiler vers la gauche"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white text-heading hover:bg-surface hover:border-slate-300 transition-colors shadow-sm"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Faire défiler vers la droite"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white text-heading hover:bg-surface hover:border-slate-300 transition-colors shadow-sm"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Scrollable Container (Pure CSS Scroll-Snap) */}
      <div
        ref={scrollContainerRef}
        tabIndex={0}
        aria-label="Galerie des affiches du catalogue VOD Atlas Pro"
        className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth focus:outline-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {VOD_MOVIES.map((movie) => (
          <div
            key={movie.id}
            className="group flex-none w-[170px] sm:w-[210px] snap-start rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-200"
          >
            {/* Poster Image Container (2:3 Aspect Ratio) */}
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-900">
              <Image
                src={movie.image}
                alt={movie.alt}
                width={300}
                height={450}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 170px, 210px"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Quality Badge */}
              <div className="absolute top-2.5 right-2.5">
                <span className="inline-flex items-center gap-1 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-bold text-amber-400 backdrop-blur-sm border border-amber-400/20 shadow-sm">
                  <Sparkles className="h-2.5 w-2.5" aria-hidden="true" />
                  <span>{movie.badge}</span>
                </span>
              </div>

              {/* Hover Overlay with Play Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="h-5 w-5 fill-white ml-0.5" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Movie Info */}
            <div className="p-3 space-y-1">
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
                <span>{movie.year}</span>
                <span className="text-emerald-600 font-semibold">Inclus</span>
              </div>
              <h4 className="text-xs font-bold text-heading truncate group-hover:text-primary transition-colors">
                {movie.title}
              </h4>
              <p className="text-[11px] text-body truncate">
                {movie.genre}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
