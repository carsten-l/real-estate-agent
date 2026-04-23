"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginSchema } from "@/lib/schemas/auth";

import { login } from "@/dal/auth";

const AUTH_TOKEN_COOKIE_KEY = "dinmaegler_auth_token";
const AUTH_USER_ID_COOKIE_KEY = "dinmaegler_auth_user_id";
const AUTH_USERNAME_COOKIE_KEY = "dinmaegler_auth_username";
const TOKEN_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

type LoginActionState = {
  success: boolean;
  error: string | null;
  values: {
    identifier: string;
    password: string;
  };
};

function getFormStringValue(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

export async function loginAction(
  _prevState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  const values = {
    identifier: getFormStringValue(formData.get("identifier")),
    password: getFormStringValue(formData.get("password")),
  };

  const parsed = loginSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Formularen indeholder ugyldige data.",
      values,
    };
  }

  let authResult: Awaited<ReturnType<typeof login>>;

  try {
    authResult = await login(parsed.data.identifier, parsed.data.password);
  } catch {
    return {
      success: false,
      error: "Login fejlede. Tjek email og password, og prøv igen.",
      values,
    };
  }

  const cookieStore = await cookies();
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: TOKEN_MAX_AGE_SECONDS,
  };

  cookieStore.set(AUTH_TOKEN_COOKIE_KEY, authResult.jwt, cookieOptions);
  cookieStore.set(AUTH_USER_ID_COOKIE_KEY, String(authResult.user.id), cookieOptions);
  cookieStore.set(AUTH_USERNAME_COOKIE_KEY, authResult.user.username, cookieOptions);

  redirect("/");
}
