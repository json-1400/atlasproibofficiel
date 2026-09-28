import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://atlasproibofficiel.com";

export const SITE_NAME = "Atlas Pro ONTV Officiel";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export interface MetadataProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Builds standard, strict-mode compliant Next.js Metadata with absolute canonicals.
 * Ensures zero trailing slashes and full OpenGraph / Twitter tags.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: MetadataProps): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath.replace(/\/$/, "")}`;

  return {
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "fr-FR": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
