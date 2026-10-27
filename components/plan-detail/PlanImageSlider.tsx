"use client";

// CLIENT: interactive plan screenshots image slider with touch-scroll and navigation controls
import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface SlideItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

const DEFAULT_SLIDES: SlideItem[] = [
  {
    id: "slide-atlaspro-interface",
    src: "/atlaspro-interface.webp",
    alt: "Interface complète du lecteur IPTV Atlas Pro avec bouquets de chaînes et VOD",
    caption: "Tableau de bord et navigation fluide sur l'interface officielle Atlas Pro",
  },
  {
    id: "slide-ontv-login",
    src: "/atlas-pro-ontv-login.webp",
    alt: "Écran de connexion et activation de l'application officielle Atlas Pro ONTV",
    caption: "Connexion rapide : Identifiants Xtream Codes API sur Atlas Pro ONTV",
  },
  {
    id: "slide-comparatif-tv",
    src: "/iptv-vs-tv-traditionnelle.webp",
    alt: "Comparatif flux IPTV haute définition vs télévision traditionnelle par câble",
    caption: "Comparatif : Avantages de l'IPTV 4K par rapport à la TV traditionnelle",
  },
];

interface PlanImageSliderProps {
  planTitle?: string;
}

export function PlanImageSlider({ planTitle }: PlanImageSliderProps): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number): void => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const targetSlide = container.children[index] as HTMLElement | undefined;
    if (targetSlide) {
      container.scrollTo({
        left: targetSlide.offsetLeft,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = (): void => {
    const prevIndex = currentIndex === 0 ? DEFAULT_SLIDES.length - 1 : currentIndex - 1;
    scrollToSlide(prevIndex);
  };

  const handleNext = (): void => {
    const nextIndex = currentIndex === DEFAULT_SLIDES.length - 1 ? 0 : currentIndex + 1;
    scrollToSlide(nextIndex);
  };

  const handleScroll = (): void => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const itemWidth = container.clientWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex >= 0 && newIndex < DEFAULT_SLIDES.length && newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="relative rounded-2xl border border-border bg-slate-950 p-2 sm:p-3 shadow-sm overflow-hidden my-4" aria-label={`Aperçu en images : ${planTitle || "Abonnement Atlas Pro"}`}>
      {/* Slides Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none rounded-xl"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {DEFAULT_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full shrink-0 snap-center relative aspect-[16/9] sm:aspect-[2.16/1] bg-slate-900 rounded-lg overflow-hidden"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
              priority={index === 0}
              className="object-cover"
            />
            {/* Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 sm:p-4 text-white">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded bg-primary/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  <Eye className="h-3 w-3" aria-hidden="true" />
                  Aperçu
                </span>
                <p className="text-xs sm:text-sm font-semibold truncate text-slate-100">
                  {slide.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Image précédente"
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-xs"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Image suivante"
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-xs"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-1.5 pt-2 pb-1">
        {DEFAULT_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => scrollToSlide(index)}
            aria-label={`Aller à l'image ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? "w-6 bg-primary" : "w-2 bg-slate-700 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
