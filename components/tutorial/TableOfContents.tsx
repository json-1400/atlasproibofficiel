"use client";
// CLIENT: interactive active section scroll spy & anchor smooth scroll

import React, { useEffect, useState } from "react";
import { List, ChevronRight } from "lucide-react";
import type { TutorialTocItem } from "@/lib/mock-data-tutorials";

interface TableOfContentsProps {
  items: TutorialTocItem[];
  className?: string;
}

export function TableOfContents({
  items,
  className = "",
}: TableOfContentsProps): React.JSX.Element {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + 120;
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Table des matières de l'article"
      className={`rounded-2xl border border-border bg-white p-5 shadow-xs ${className}`}
    >
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border text-heading font-bold text-sm">
        <List className="h-4 w-4 text-primary" aria-hidden="true" />
        <span>Sommaire du guide</span>
      </div>
      <ul className="space-y-1.5 text-xs sm:text-sm">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isH3 = item.level === 3;

          return (
            <li key={item.id} className={isH3 ? "pl-3" : ""}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`flex items-center justify-between py-1 px-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary/10 font-bold text-primary"
                    : "text-body hover:bg-slate-50 hover:text-heading"
                }`}
              >
                <span className="line-clamp-1">{item.title}</span>
                {isActive && (
                  <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0 ml-1" aria-hidden="true" />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
