import { z } from "zod";

export const contactInputSchema = z.object({
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
  subject: z
    .string()
    .trim()
    .max(150, "Le sujet est trop long")
    .optional()
    .nullable(),
  message: z
    .string()
    .trim()
    .min(10, "Le message doit comporter au moins 10 caractères")
    .max(2000, "Le message est trop long"),
  honeypot: z.string().max(0, "Tentative de spam détectée").optional(),
});

export type ContactInput = z.infer<typeof contactInputSchema>;
