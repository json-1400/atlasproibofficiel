import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileCheck, Zap, ShieldAlert, CreditCard, RotateCcw } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { buildOrganizationSchema, buildWebSiteSchema, buildBreadcrumbSchema } from "@/lib/schema";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Conditions Générales de Vente (CGV) | Atlas Pro ONTV Officiel",
    description:
      "Conditions Générales de Vente des abonnements et licences Atlas Pro ONTV Officiel. Tarifs, livraison express sous 15 min et garanties.",
    path: "/conditions-generales-de-vente",
  });
}

export default function CGVPage(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Conditions Générales de Vente" },
  ];

  const graphData = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildBreadcrumbSchema([
      { name: "Accueil", path: "/" },
      { name: "Conditions Générales de Vente", path: "/conditions-generales-de-vente" },
    ]),
  ];

  return (
    <>
      <JsonLd graph={graphData} />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="space-y-3 border-b border-border pb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <FileCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Modalités Contractuelles de Commande</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl text-heading">
            Conditions Générales de Vente (CGV)
          </h1>
          <p className="text-sm text-body">
            Les présentes conditions régissent l&apos;ensemble des commandes de licences et abonnements passées sur {SITE_NAME}.
          </p>
        </header>

        <section className="space-y-6 text-sm text-body leading-relaxed">
          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading">
              1. Objet du contrat et services
            </h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à toutes les souscriptions d&apos;abonnements numériques proposées sur le site : formules 12 mois, 6 mois, 3 mois, renouvellements et options multi-écrans.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" aria-hidden="true" />
              2. Tarifs et absence de reconduction tacite
            </h2>
            <p>
              Les tarifs indiqués sur le catalogue sont exprimés en Euros (€) toutes taxes comprises.
            </p>
            <p className="rounded-xl bg-slate-50 border border-border p-3 text-xs font-medium text-slate-700">
              <strong>Zéro abonnement caché :</strong> Nos offres sont souscrites à titre ferme pour la période choisie (3, 6 ou 12 mois). Aucun prélèvement automatique récurrent ni reconduction tacite n&apos;est opéré sans action volontaire de renouvellement de la part du client.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" aria-hidden="true" />
              3. Modalités de livraison numérique immédiate
            </h2>
            <p>
              Tous les produits commercialisés sont des biens immatériels et numériques. Dès validation du paiement, le serveur génère et expédie automatiquement vos codes d&apos;activation et paramètres de configuration par e-mail en moins de 15 minutes.
            </p>
            <p className="text-xs text-slate-500">
              Il incombe à l&apos;acheteur de renseigner une adresse e-mail valide et de vérifier son dossier de courriers indésirables (Spams) si le message n&apos;apparaît pas dans la boîte principale.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-primary" aria-hidden="true" />
              4. Droit de rétractation et garanties
            </h2>
            <p>
              Conformément à l&apos;article L221-28 13° du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture d&apos;un contenu numérique sans support matériel dont l&apos;exécution a commencé après accord préalable exprès du consommateur.
            </p>
            <p>
              Néanmoins, en cas d&apos;anomalie technique avérée empêchant tout fonctionnement du service et ne pouvant être résolue par notre assistance technique dans un délai de 48 heures, un remplacement d&apos;accès ou un remboursement gracieux peut être accordé sur simple demande motivée via le support.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
            <h2 className="text-lg font-bold text-heading flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-primary" aria-hidden="true" />
              5. Assistance technique et résolution des litiges
            </h2>
            <p>
              Pour toute question relative à l&apos;utilisation, à la configuration ou à la prolongation d&apos;une licence, le client dispose d&apos;un accès direct à notre service d&apos;assistance 7j/7 depuis notre page dédiée :{" "}
              <Link href="/ouvrir-ticket" className="text-primary font-medium hover:underline">
                Ouvrir un ticket support
              </Link>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
