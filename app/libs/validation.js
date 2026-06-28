import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),

  email: z
    .email("Invalid email address"),

  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot exceed 15 digits"),

  company: z
    .string()
    .trim()
    .optional(),

  service: z
    .string()
    .min(1, "Please select a service"),

  budget: z
    .string()
    .min(1, "Please select a budget"),

  timeline: z
    .string()
    .optional(),

  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message is too long"),
});