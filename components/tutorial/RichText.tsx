import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface RichTextProps {
  text: string;
  className?: string;
}

/**
 * Parses markdown-style bold (**text**) and links ([label](url))
 * safely into React elements with SEO-friendly internal/external link tags.
 */
export function RichText({ text, className }: RichTextProps): React.JSX.Element {
  if (!text) return <></>;

  // Regex matches [label](url) and **bold**
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (!part) return null;

        // Check for Markdown Link [label](url)
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, label, url] = linkMatch;
          const isInternal = url.startsWith("/") || url.startsWith("#");

          if (isInternal) {
            return (
              <Link
                key={index}
                href={url}
                className="font-medium text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
              >
                {label}
              </Link>
            );
          }

          return (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:text-primary-hover underline underline-offset-2 inline-flex items-center gap-0.5 transition-colors"
            >
              <span>{label}</span>
              <ExternalLink className="h-3 w-3 inline-block shrink-0" aria-hidden="true" />
            </a>
          );
        }

        // Check for Markdown Bold **text**
        const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
        if (boldMatch) {
          return (
            <strong key={index} className="font-bold text-heading">
              {boldMatch[1]}
            </strong>
          );
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
}
