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
    ["atlas-pro-12-mois", "atlas-pro-6-mois", "atlas-pro-3-mois"],
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
  honeypot: z.string().max(0, "Tentative de spam détectée").optional(),
});

export type OrderInput = z.infer<typeof orderInputSchema>;
