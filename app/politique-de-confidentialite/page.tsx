import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Lock, EyeOff, ShieldCheck, Database, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { buildOrganizationSchema, buildWebSiteSchema, buildBreadcrumbSchema } from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Politique de Confidentialité & RGPD | Atlas Pro ONTV Officiel",
    description:
      "Engagement de confidentialité et protection de vos données personnelles conformément au RGPD sur Atlas Pro ONTV Officiel.",
    path: "/politique-de-confidentialite",
  });
}

export default function PolitiqueConfidentialitePage(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Politique de Confidentialité" },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildBreadcrumbSchema([
      { name: "Accueil", path: "/" },
      { name: "Politique de Confidentialité", path: "/politique-de-confidentialite" },
    ]),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="space-y-3 border-b border-border pb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Protection des Données Personnelles</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl text-heading">
            Politique de Confidentialité (RGPD)
          </h1>
          <p className="text-sm text-body">
            Votre vie privée est une priorité absolue. Découvrez comment vos informations sont collectées, protégées et traitées sur {SITE_NAME}.
          </p>
        </header>

        <section className="space-y-6 text-sm text-body leading-relaxed">
          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              1. Principes généraux et conformité
            </h2>
            <p>
              Le traitement des données à caractère personnel effectué sur le site est conforme au Règlement Général sur la Protection des Données (Règlement UE 2016/679 du Parlement européen) et à la loi Informatique et Libertés modifiée.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" aria-hidden="true" />
              2. Données collectées et finalités
            </h2>
            <p>
              Nous appliquons le principe strict de minimisation des données. Seules les données indispensables à la livraison de vos accès sont requises :
            </p>
            <ul className="space-y-2 pt-1 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Adresse e-mail :</strong> Nécessaire pour la transmission immédiate de vos identifiants d&apos;accès, codes d&apos;activation et liens de configuration.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Numéro de téléphone / WhatsApp (optionnel) :</strong> Utilisé exclusivement pour l&apos;assistance technique ou les alertes de renouvellement en cas d&apos;échec de livraison par e-mail.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Historique de commande :</strong> Référence de formule, statut de validation et horodatage de licence.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading flex items-center gap-2">
              <EyeOff className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              3. Absence de conservation des données bancaires
            </h2>
            <p>
              Les transactions financières sont intégralement traitées par des prestataires de paiement certifiés PCI-DSS. À aucun moment {SITE_NAME} n&apos;a accès, ne stocke ni ne traite vos numéros de cartes de crédit ou identifiants bancaires.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading">
              4. Durée de conservation et vos droits (RGPD)
            </h2>
            <p>
              Vos données de commande sont conservées pour la durée stricte nécessaire à la gestion de votre abonnement et au support client afférent.
            </p>
            <p>
              Conformément à la réglementation européenne, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition au traitement de vos données. Pour exercer ces droits, il vous suffit d&apos;adresser une demande via notre{" "}
              <Link href="/ouvrir-ticket" className="text-primary font-medium hover:underline">
                centre de support technique
              </Link>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
