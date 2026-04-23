"use server";

import { redirect } from "next/navigation";

import { registerUser } from "@/dal/auth";
import { registerSchema } from "@/lib/schemas/auth";

export type RegisterActionState = {
  success: boolean;
  formError: string | null;
  fieldErrors: {
    username: string | null;
    email: string | null;
    password: string | null;
    confirmPassword: string | null;
  };
  values: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
};

function getFormStringValue(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

export async function registerAction(
  _prevState: RegisterActionState,
  formData: FormData,
): Promise<RegisterActionState> {
  const values = {
    username: getFormStringValue(formData.get("username")),
    email: getFormStringValue(formData.get("email")),
    password: getFormStringValue(formData.get("password")),
    confirmPassword: getFormStringValue(formData.get("confirmPassword")),
  };

  const parsed = registerSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;

    return {
      success: false,
      formError: null,
      fieldErrors: {
        username: fieldErrors.username?.[0] ?? null,
        email: fieldErrors.email?.[0] ?? null,
        password: fieldErrors.password?.[0] ?? null,
        confirmPassword: fieldErrors.confirmPassword?.[0] ?? null,
      },
      values,
    };
  }

  try {
    await registerUser({
      username: parsed.data.username,
      email: parsed.data.email,
      password: parsed.data.password,
    });
  } catch {
    return {
      success: false,
      formError: "Kunne ikke oprette bruger. Prøv igen.",
      fieldErrors: {
        username: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
      values,
    };
  }

  redirect("/login");
}