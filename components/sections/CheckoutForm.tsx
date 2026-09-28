"use client";

// CLIENT: interactive form submission, honeypot handling, and checkout state management
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, AlertCircle, Loader2, CreditCard, Wallet, Tv } from "lucide-react";

export interface CheckoutFormProps {
  planSlug: "atlas-pro-12-mois" | "atlas-pro-6-mois" | "atlas-pro-3-mois";
  planPrice: number;
}

export function CheckoutForm({ planSlug, planPrice }: CheckoutFormProps): React.JSX.Element {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [devicesCount, setDevicesCount] = useState<number>(1);
  const [preferredPayment, setPreferredPayment] = useState<"carte_bancaire" | "paypal">("carte_bancaire");
  const [existingCode, setExistingCode] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          planSlug,
          devicesCount,
          preferredPayment,
          existingCode: existingCode.trim() || undefined,
          honeypot,
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
        redirectUrl?: string;
        details?: Record<string, string[]>;
      };

      if (!response.ok) {
        if (data.details) {
          const firstError = Object.values(data.details)[0]?.[0];
          setErrorMessage(firstError || data.error || "Erreur de validation");
        } else {
          setErrorMessage(data.error || "Une erreur est survenue lors de la commande.");
        }
        setIsLoading(false);
        return;
      }

      if (data.redirectUrl) {
        router.push(data.redirectUrl);
      } else {
        router.push("/merci");
      }
    } catch (err: unknown) {
      console.error("[Checkout Submission Error]", err);
      setErrorMessage("Impossible de joindre le serveur. Vérifiez votre connexion.");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field (hidden from genuine users) */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website_url">Ne pas remplir ce champ</label>
        <input
          id="website_url"
          name="website_url"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMessage && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-700 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-heading mb-1">
          Nom complet *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Jean Dupont"
          className="w-full rounded-xl border border-border px-3.5 py-2.5 text-xs text-heading focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-heading mb-1">
          Adresse e-mail (pour réception immédiate des codes) *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jean.dupont@email.com"
          className="w-full rounded-xl border border-border px-3.5 py-2.5 text-xs text-heading focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-semibold text-heading mb-1">
          Numéro de téléphone / WhatsApp *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+33 6 12 34 56 78"
          className="w-full rounded-xl border border-border px-3.5 py-2.5 text-xs text-heading focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <p className="mt-1 text-[11px] text-slate-400">
          Utilisé par nos techniciens pour vous assister lors de la première installation.
        </p>
      </div>

      <div>
        <label className="block text-xs font-semibold text-heading mb-1.5">
          Nombre d&apos;appareils (connexions simultanées) *
        </label>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => setDevicesCount(count)}
              className={`flex flex-col items-center justify-center rounded-xl border py-2.5 px-2 text-center transition-all ${
                devicesCount === count
                  ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
                  : "border-border bg-white text-body hover:border-slate-300 font-medium"
              }`}
              aria-pressed={devicesCount === count}
            >
              <span className="text-sm font-bold">{count}</span>
              <span className="text-[10px] text-slate-500">
                {count === 1 ? "Écran" : "Écrans"}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-heading mb-1.5">
          Mode de règlement souhaité *
        </label>
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => setPreferredPayment("carte_bancaire")}
            className={`flex items-center gap-2.5 rounded-xl border p-3 text-left transition-all ${
              preferredPayment === "carte_bancaire"
                ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
                : "border-border bg-white text-body hover:border-slate-300 font-medium"
            }`}
            aria-pressed={preferredPayment === "carte_bancaire"}
          >
            <CreditCard className="h-5 w-5 shrink-0" aria-hidden="true" />
            <div>
              <div className="text-xs font-bold leading-tight">Carte Bancaire</div>
              <div className="text-[10px] text-slate-500 font-normal">Instructions sécurisées</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setPreferredPayment("paypal")}
            className={`flex items-center gap-2.5 rounded-xl border p-3 text-left transition-all ${
              preferredPayment === "paypal"
                ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
                : "border-border bg-white text-body hover:border-slate-300 font-medium"
            }`}
            aria-pressed={preferredPayment === "paypal"}
          >
            <Wallet className="h-5 w-5 shrink-0" aria-hidden="true" />
            <div>
              <div className="text-xs font-bold leading-tight">PayPal</div>
              <div className="text-[10px] text-slate-500 font-normal">Virement sécurisé</div>
            </div>
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="existingCode" className="block text-xs font-semibold text-heading mb-1">
          Ancien code ou Adresse MAC (Facultatif - en cas de renouvellement)
        </label>
        <input
          id="existingCode"
          name="existingCode"
          type="text"
          value={existingCode}
          onChange={(e) => setExistingCode(e.target.value)}
          placeholder="Ex: 123456789012 ou 00:1A:79:..."
          className="w-full rounded-xl border border-border px-3.5 py-2.5 text-xs text-heading focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-sm hover:bg-primary-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Traitement sécurisé en cours...</span>
            </>
          ) : (
            <>
              <Lock className="h-4 w-4" aria-hidden="true" />
              <span>Valider ma commande ({planPrice}€)</span>
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-center text-slate-400">
        Activation rapide en moins de 15 minutes • Vos données restent 100% confidentielles.
      </p>
    </form>
  );
}
