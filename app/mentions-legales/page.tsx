import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Server, FileText, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";
import { buildOrganizationSchema, buildWebSiteSchema, buildBreadcrumbSchema } from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Mentions Légales | Atlas Pro ONTV Officiel",
    description:
      "Mentions légales, conditions d'utilisation, informations sur l'éditeur et l'hébergeur du site Atlas Pro ONTV Officiel.",
    path: "/mentions-legales",
  });
}

export default function MentionsLegalesPage(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Mentions Légales" },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildBreadcrumbSchema([
      { name: "Accueil", path: "/" },
      { name: "Mentions Légales", path: "/mentions-legales" },
    ]),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="space-y-3 border-b border-border pb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Cadre Réglementaire & Légal</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl text-heading">
            Mentions Légales
          </h1>
          <p className="text-sm text-body">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l&apos;Économie Numérique (LCEN).
          </p>
        </header>

        <section className="space-y-6 text-sm text-body leading-relaxed">
          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              1. Éditeur de la plateforme
            </h2>
            <p>
              Le site <strong>{SITE_NAME}</strong> accessible à l&apos;adresse <Link href="/" className="text-primary hover:underline">{SITE_URL}</Link> est édité et exploité par les services de distribution officielle de licences Atlas Pro.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pt-1">
              <li><strong>Nom du service :</strong> {SITE_NAME}</li>
              <li><strong>Contact support & réclamations :</strong> <Link href="/ouvrir-ticket" className="text-primary hover:underline">Support Ticket en ligne</Link></li>
              <li><strong>Disponibilité assistance :</strong> 7 jours sur 7 (délai de réponse moyen inférieur à 2h ouvrées)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading flex items-center gap-2">
              <Server className="h-5 w-5 text-primary" aria-hidden="true" />
              2. Hébergement & Infrastructure
            </h2>
            <p>
              Le site internet et ses fonctions de diffusion d&apos;informations techniques sont hébergés sur les infrastructures sécurisées de :
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pt-1">
              <li><strong>Hébergeur :</strong> Netlify, Inc.</li>
              <li><strong>Adresse :</strong> 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis</li>
              <li><strong>Site officiel de l&apos;hébergeur :</strong> https://www.netlify.com</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading">
              3. Propriété intellectuelle & Nature des services
            </h2>
            <p>
              L&apos;ensemble des contenus textuels, infographies, logotypes et agencements graphiques présents sur ce site relèvent des législations internationales relatives au droit d&apos;auteur et à la propriété intellectuelle.
            </p>
            <p>
              Le service commercialise des codes d&apos;accès et clés de licence pour applications tierces et flux multimédias. L&apos;utilisateur demeure responsable de l&apos;usage de ses équipements et de la conformité de ses réceptions aux réglementations applicables dans son pays de résidence.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading">
              4. Respect des droits d&apos;auteur & Signalement de contenu (DMCA)
            </h2>
            <p>
              {SITE_NAME} respecte scrupuleusement les droits de propriété intellectuelle des créateurs et ayants droit. Notre plateforme commerciale et technique n&apos;héberge aucun flux audiovisuel ou fichier multimédia protégé sur ses propres serveurs web.
            </p>
            <p>
              Si vous êtes titulaire de droits d&apos;auteur ou représentant d&apos;un ayant droit et estimez qu&apos;une référence ou un lien présent sur le site enfreint vos droits, vous pouvez nous adresser directement une demande de retrait ou de désindexation via notre service de support en sélectionnant le motif &laquo; Propriété intellectuelle / Signalement DMCA &raquo;. Toute demande légitime et documentée sera examinée et traitée sous 24 à 48 heures ouvrées.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading">
              5. Données personnelles et cookies
            </h2>
            <p>
              Pour toute information concernant la collecte, le traitement et la sécurisation des données nominatives dans le respect du Règlement Général sur la Protection des Données (RGPD), veuillez consulter notre{" "}
              <Link href="/politique-de-confidentialite" className="text-primary font-medium hover:underline">
                Politique de Confidentialité
              </Link>.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-bold text-heading">Besoin d&apos;une information complémentaire ?</p>
              <p className="text-xs text-body">Notre équipe technique et administrative vous répond sous 2h ouvrées.</p>
            </div>
            <Link
              href="/ouvrir-ticket"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors shrink-0"
            >
              <span>Contacter le support</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
