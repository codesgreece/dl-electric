import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Το ονοματεπώνυμο είναι υποχρεωτικό"),
  email: z.string().email("Μη έγκυρο email"),
  phone: z.string().min(8, "Το τηλέφωνο είναι υποχρεωτικό"),
  message: z.string().min(10, "Το μήνυμα είναι υποχρεωτικό"),
});

export const loginSchema = z.object({
  email: z.string().email("Μη έγκυρο email"),
  password: z.string().min(6, "Ο κωδικός είναι υποχρεωτικός"),
});

export const projectSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(5),
  category: z.enum(["HIGH_VOLTAGE", "SMART_HOME", "INDUSTRIAL", "CCTV"]),
  imageUrl: z.string().min(1),
  featured: z.boolean().optional(),
  sortOrder: z.number().optional(),
});

export const serviceSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(5),
  imageUrl: z.string().min(1),
  icon: z.string().min(1),
  sortOrder: z.number().optional(),
});

export const settingsSchema = z.object({
  companyName: z.string().min(1),
  founderName: z.string().min(1),
  phone: z.string().min(5),
  email: z.string().email(),
  experienceYears: z.number().int().min(0),
  mainDescription: z.string().min(5),
});

export type ContactInput = z.infer<typeof contactSchema>;
