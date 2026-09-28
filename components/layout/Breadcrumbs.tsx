import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps): React.JSX.Element {
  return (
    <nav aria-label="Fil d'Ariane" className="py-3">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-body">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-heading transition-colors"
            aria-label="Accueil"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">Accueil</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="font-semibold text-heading" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-heading transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
