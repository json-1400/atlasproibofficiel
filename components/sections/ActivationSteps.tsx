import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Tv } from "lucide-react";

export function ActivationSteps(): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Step 1 */}
      <div className="rounded-2xl border border-border bg-white p-6 sm:p-7 space-y-4 shadow-sm flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white text-base font-bold shadow-sm">
            1
          </div>
          <h3 className="text-base sm:text-lg font-bold text-heading">
            Étape 1 : Choisissez votre formule d&apos;abonnement
          </h3>
          <p className="text-xs sm:text-sm text-body leading-relaxed">
            Sélectionnez la durée souhaitée (<strong>12 mois à 40€</strong>, 6 mois ou 3 mois) et le nombre d&apos;écrans simultanés dont vous avez besoin (1 à 4 postes). Paiement 100% sécurisé sans aucun prélèvement automatique ultérieur.
          </p>
        </div>
        <div className="pt-2">
          <a
            href="#tarifs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
          >
            <span>Voir les forfaits disponibles</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Step 2 */}
      <div className="rounded-2xl border border-border bg-white p-6 sm:p-7 space-y-4 shadow-sm flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white text-base font-bold shadow-sm">
            2
          </div>
          <h3 className="text-base sm:text-lg font-bold text-heading">
            Étape 2 : Réception instantanée de vos codes par e-mail
          </h3>
          <p className="text-xs sm:text-sm text-body leading-relaxed">
            Dès validation de votre commande, notre plateforme automatisée vous expédie en moins de 15 minutes vos identifiants officiels : identifiant <strong>Xtream Codes API</strong>, mot de passe, URL du serveur et <strong>lien M3U</strong>.
          </p>
        </div>
        <div className="pt-2 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
          <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Expédition express 24h/24 & 7j/7</span>
        </div>
      </div>

      {/* Step 3 */}
      <div className="rounded-2xl border border-border bg-white p-6 sm:p-7 space-y-4 shadow-sm flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white text-base font-bold shadow-sm">
            3
          </div>
          <h3 className="text-base sm:text-lg font-bold text-heading">
            Étape 3 : Configuration de l&apos;application et visionnage
          </h3>
          <p className="text-xs sm:text-sm text-body leading-relaxed">
            Téléchargez l&apos;application{" "}
            <Link href="/telecharger/atlas-pro-ontv" className="text-primary font-semibold hover:underline">
              Atlas Pro ONTV
            </Link>{" "}
            ou{" "}
            <Link href="/telecharger/atlas-pro-max" className="text-primary font-semibold hover:underline">
              Atlas Pro Max
            </Link>{" "}
            sur votre Smart TV ou boîtier, renseignez vos accès et profitez de l&apos;ensemble de vos chaînes 4K sans attendre.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/tutoriels"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
          >
            <span>Consulter les guides d&apos;installation</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
