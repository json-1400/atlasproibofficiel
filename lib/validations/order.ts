import { z } from "zod";

export const orderInputSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Le nom doit comporter au moins 2 caractères")
    .max(100, "Le nom ne peut dépasser 100 caractères"),
  email: z
    .string()
    .trim()
    .email("Adresse e-mail invalide")
    .max(150, "L'adresse e-mail est trop longue"),
  phone: z
    .string()
    .trim()
    .min(6, "Le numéro de téléphone est trop court")
    .max(30, "Le numéro de téléphone est trop long"),
  planSlug: z.enum(
    [
      "atlas-pro-12-mois",
      "atlas-pro-6-mois",
      "atlas-pro-3-mois",
      "atlas-pro-2-ecrans",
      "atlas-pro-3-ecrans",
      "atlas-pro-4-ecrans",
    ],
    {
      errorMap: () => ({ message: "Le forfait sélectionné est invalide" }),
    }
  ),
  existingCode: z
    .string()
    .trim()
    .max(100, "L'identifiant est trop long")
    .optional()
    .nullable(),
  devicesCount: z.coerce
    .number()
    .int("Le nombre d'appareils doit être un entier")
    .min(1, "Au moins 1 appareil requis")
    .max(4, "Maximum 4 appareils")
    .default(1),
  preferredPayment: z
    .enum(["carte_bancaire", "paypal"], {
      errorMap: () => ({ message: "Veuillez choisir un moyen de paiement valide" }),
    })
    .default("carte_bancaire"),
  honeypot: z.string().max(0, "Tentative de spam détectée").optional(),
});

export type OrderInput = z.infer<typeof orderInputSchema>;
