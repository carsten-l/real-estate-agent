import { z } from "zod";

export const loginSchema = z.object({
  identifier: z.string().trim().email("Indtast en gyldig emailadresse."),
  password: z.string().min(1, "Password er påkrævet."),
});

export const registerSchema = z
  .object({
    username: z.string().trim().min(2, "Brugernavn er påkrævet."),
    email: z.string().trim().email("Indtast en gyldig emailadresse."),
    password: z.string().min(6, "Password skal være mindst 6 tegn."),
    confirmPassword: z.string().min(1, "Bekræft password er påkrævet."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords matcher ikke.",
    path: ["confirmPassword"],
  });