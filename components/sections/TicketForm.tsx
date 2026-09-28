// CLIENT: interactive form state and client-side anti-bot verification
"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Send, RefreshCw, AlertCircle, ShieldCheck } from "lucide-react";
import type { AntiBotChallenge } from "@/lib/anti-bot";

interface TicketFormProps {
  initialChallenge: AntiBotChallenge;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  orderNumber?: string;
  category?: string;
  deviceType?: string;
  subject?: string;
  message?: string;
  challengeAnswer?: string;
  global?: string;
}

export function TicketForm({ initialChallenge }: TicketFormProps): React.JSX.Element {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderNumber: "",
    category: "technique",
    deviceType: "smart_tv_samsung_lg",
    subject: "",
    message: "",
    honeypot: "",
    challengeAnswer: "",
  });

  const [challenge, setChallenge] = useState<AntiBotChallenge>(initialChallenge);
  const [isRefreshingChallenge, setIsRefreshingChallenge] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const refreshChallenge = async (): Promise<void> => {
    setIsRefreshingChallenge(true);
    try {
      const response = await fetch("/api/tickets/challenge", { cache: "no-store" });
      if (response.ok) {
        const newChallenge: unknown = await response.json();
        if (
          typeof newChallenge === "object" &&
          newChallenge !== null &&
          "question" in newChallenge &&
          "expectedHash" in newChallenge &&
          "timestamp" in newChallenge
        ) {
          setChallenge(newChallenge as AntiBotChallenge);
          setFormData((prev) => ({ ...prev, challengeAnswer: "" }));
          setErrors((prev) => ({ ...prev, challengeAnswer: undefined, global: undefined }));
        }
      }
    } catch (err: unknown) {
      console.error("Erreur de renouvellement du test anti-bot", err);
    } finally {
      setIsRefreshingChallenge(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined, global: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setErrors({});

    // Client-side quick validation
    const clientErrors: FormErrors = {};
    if (formData.name.trim().length < 2) {
      clientErrors.name = "Veuillez indiquer votre nom complet (min. 2 caractères).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      clientErrors.email = "Veuillez renseigner une adresse e-mail valide.";
    }
    if (formData.subject.trim().length < 5) {
      clientErrors.subject = "Le sujet doit comporter au moins 5 caractères.";
    }
    if (formData.message.trim().length < 15) {
      clientErrors.message = "Veuillez détailler votre situation (au moins 15 caractères).";
    }
    if (!formData.challengeAnswer.trim()) {
      clientErrors.challengeAnswer = "Veuillez répondre au calcul de sécurité.";
    }

    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    startTransition(async () => {
      try {
        const payload = {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          orderNumber: formData.orderNumber.trim(),
          category: formData.category,
          deviceType: formData.deviceType,
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          honeypot: formData.honeypot,
          timestamp: challenge.timestamp,
          challengeAnswer: formData.challengeAnswer.trim(),
          challengeExpectedHash: challenge.expectedHash,
        };

        const res = await fetch("/api/tickets", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data: unknown = await res.json();

        if (!res.ok) {
          const errorMessage =
            typeof data === "object" && data !== null && "error" in data && typeof data.error === "string"
              ? data.error
              : "Une erreur est survenue lors de l'envoi de votre ticket.";
          setErrors({ global: errorMessage });
          await refreshChallenge();
          return;
        }

        if (
          typeof data === "object" &&
          data !== null &&
          "ticketNumber" in data &&
          typeof data.ticketNumber === "string"
        ) {
          router.push(`/ouvrir-ticket/confirmation?ticketId=${encodeURIComponent(data.ticketNumber)}`);
        } else {
          router.push("/ouvrir-ticket/confirmation");
        }
      } catch (err: unknown) {
        console.error("Erreur de soumission ticket", err);
        setErrors({ global: "Connexion impossible avec le serveur de support. Veuillez réessayer." });
        await refreshChallenge();
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      {/* Honeypot anti-spam - invisible pour les humains */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_field">Ne pas remplir si vous êtes humain</label>
        <input
          id="hp_field"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errors.global && (
        <div
          role="alert"
          className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-50 p-4 text-xs sm:text-sm text-red-700"
        >
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span>{errors.global}</span>
        </div>
      )}

      {/* Identité */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-heading">
            Nom et Prénom <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex : Alexandre Martin"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-heading">
            Adresse E-mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Ex : contact@domaine.com"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      {/* Téléphone / WhatsApp & Référence commande */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-heading">
            Téléphone / WhatsApp <span className="text-xs font-normal text-muted">(Optionnel)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+33 6 12 34 56 78"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="orderNumber" className="block text-xs font-bold uppercase tracking-wider text-heading">
            Référence Commande / Code <span className="text-xs font-normal text-muted">(Optionnel)</span>
          </label>
          <input
            id="orderNumber"
            name="orderNumber"
            type="text"
            value={formData.orderNumber}
            onChange={handleChange}
            placeholder="Ex : 10042 ou code reçu"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Catégorie & Type d'Appareil */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-heading">
            Catégorie de la demande <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-heading focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="technique">Problème technique / Chaînes coupées</option>
            <option value="activation">Activation / Code non reçu</option>
            <option value="renouvellement">Renouvellement d&apos;abonnement</option>
            <option value="commercial">Question commerciale / Facturation</option>
            <option value="autre">Autre renseignement</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="deviceType" className="block text-xs font-bold uppercase tracking-wider text-heading">
            Appareil utilisé <span className="text-red-500">*</span>
          </label>
          <select
            id="deviceType"
            name="deviceType"
            value={formData.deviceType}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-heading focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="smart_tv_samsung_lg">Smart TV Samsung / LG (IBO Player, Smart STB)</option>
            <option value="android_box_tv">Boîtier Android / Android TV Box</option>
            <option value="fire_tv_stick">Amazon Fire TV Stick</option>
            <option value="smartphone_tablette">Smartphone ou Tablette (Android / iOS)</option>
            <option value="pc_mac">Ordinateur (Windows / macOS / VLC)</option>
            <option value="mag_formuler">Boîtier MAG ou Formuler</option>
            <option value="autre">Autre matériel</option>
          </select>
        </div>
      </div>

      {/* Sujet */}
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-heading">
          Objet du ticket <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Ex : Erreur 'Check playlist url' sur Samsung TV"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          aria-invalid={!!errors.subject}
        />
        {errors.subject && <p className="text-xs text-red-600">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-heading">
          Description précise du dysfonctionnement <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez précisément votre problème : nom de l'application, message d'erreur exact, heure constatée..."
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
      </div>

      {/* Bloc de vérification anti-robot */}
      <div className="rounded-xl border border-border bg-white p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="text-xs font-bold text-heading">Sécurité anti-robot :</span>
            <span className="text-xs font-semibold text-primary">{challenge.question}</span>
          </div>
          <button
            type="button"
            onClick={refreshChallenge}
            disabled={isRefreshingChallenge || isPending}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-muted hover:text-heading"
            title="Générer un autre calcul"
          >
            <RefreshCw className={`h-3 w-3 ${isRefreshingChallenge ? "animate-spin" : ""}`} aria-hidden="true" />
            <span>Changer</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <input
            id="challengeAnswer"
            name="challengeAnswer"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            required
            value={formData.challengeAnswer}
            onChange={handleChange}
            placeholder="Votre réponse (ex: 7)"
            className="w-36 rounded-lg border border-border px-3 py-2 text-sm text-heading focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            aria-invalid={!!errors.challengeAnswer}
          />
          <span className="text-xs text-muted">Ce calcul protège notre serveur contre les spams.</span>
        </div>
        {errors.challengeAnswer && (
          <p className="text-xs text-red-600">{errors.challengeAnswer}</p>
        )}
      </div>

      {/* Bouton de Soumission */}
      <div>
        <button
          type="submit"
          disabled={isPending}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-sm hover:bg-primary-hover transition-colors disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Transmission de votre ticket en cours...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>Ouvrir mon ticket d&apos;assistance</span>
            </>
          )}
        </button>
        <p className="mt-2 text-center text-xs text-muted">
          Délai de réponse moyen garanti sous 2h ouvrées 7j/7. Accusé de réception envoyé par e-mail.
        </p>
      </div>
    </form>
  );
}
