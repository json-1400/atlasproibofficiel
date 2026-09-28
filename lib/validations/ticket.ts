import { z } from "zod";

export const ticketInputSchema = z.object({
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
    .max(30, "Numéro de téléphone trop long")
    .optional()
    .or(z.literal("")),
  orderNumber: z
    .string()
    .trim()
    .max(50, "La référence de commande est trop longue")
    .optional()
    .or(z.literal("")),
  category: z.enum(
    [
      "activation",
      "technique",
      "renouvellement",
      "commercial",
      "autre",
    ],
    {
      errorMap: () => ({ message: "Veuillez sélectionner une catégorie valide" }),
    }
  ),
  deviceType: z.enum(
    [
      "smart_tv_samsung_lg",
      "android_box_tv",
      "fire_tv_stick",
      "smartphone_tablette",
      "pc_mac",
      "mag_formuler",
      "autre",
    ],
    {
      errorMap: () => ({ message: "Veuillez sélectionner un type d'appareil valide" }),
    }
  ),
  subject: z
    .string()
    .trim()
    .min(5, "Le sujet doit comporter au moins 5 caractères")
    .max(150, "Le sujet est trop long"),
  message: z
    .string()
    .trim()
    .min(15, "Veuillez détailler votre problème (au moins 15 caractères)")
    .max(3000, "Le message ne peut dépasser 3000 caractères"),
  // Anti-bot fields
  honeypot: z.string().max(0, "Tentative de spam détectée").optional().or(z.literal("")),
  timestamp: z.number().int().positive("Session de soumission invalide"),
  challengeAnswer: z.string().trim().min(1, "Veuillez répondre au test de sécurité anti-robot"),
  challengeExpectedHash: z.string().trim().min(1, "Jeton anti-robot manquant"),
});

export type TicketInput = z.infer<typeof ticketInputSchema>;
