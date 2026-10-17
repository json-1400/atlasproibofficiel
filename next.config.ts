import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/abonnements",
        destination: "/plans-tarifs",
        permanent: true,
      },
      {
        source: "/abonnements/:slug*",
        destination: "/plans-tarifs/:slug*",
        permanent: true,
      },
      {
        source: "/tutoriels/erreur-connexion-serveur",
        destination: "/tutoriels/atlas-pro-ne-peut-pas-se-connecter-au-serveur",
        permanent: true,
      },
      {
        source: "/tutoriels/installation-smart-tv-samsung",
        destination: "/tutoriels/installer-atlas-pro-sur-tv-samsung",
        permanent: true,
      },
      {
        source: "/tutoriels/installation-smart-tv-lg",
        destination: "/tutoriels/installer-atlas-pro-sur-lg-smart-tv",
        permanent: true,
      },
      {
        source: "/tutoriels/installation-fire-stick",
        destination: "/tutoriels/installer-atlas-pro-sur-fire-stick",
        permanent: true,
      },
      {
        source: "/tutoriels/recuperer-identifiant-code",
        destination: "/tutoriels/retrouver-entrer-code-atlas-pro-ontv",
        permanent: true,
      },
      {
        source: "/tutoriels/resoudre-buffering-coupures",
        destination: "/tutoriels/resoudre-coupure-buffering-atlas-pro",
        permanent: true,
      },
      {
        source: "/tutoriels/categorie/applications-lecteurs-iptv",
        destination: "/tutoriels",
        permanent: true,
      },
      {
        source: "/mentions-legales",
        destination: "/politique-de-confidentialite",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
