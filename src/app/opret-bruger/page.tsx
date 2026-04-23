"use client";

import { useActionState } from "react";
import Link from "next/link";

import { registerAction, type RegisterActionState } from "./actions";

const initialRegisterActionState: RegisterActionState = {
  success: false,
  formError: null,
  fieldErrors: {
    fullName: null,
    email: null,
    password: null,
    confirmPassword: null,
  },
  values: {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(registerAction, initialRegisterActionState);

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl px-8 py-12 shadow-sm md:px-12 md:py-14">
          <h1 className="mb-10 text-center text-4xl font-semibold text-[#2e3338]">
            Opret bruger hos Din Mægler
          </h1>

          <form className="mx-auto max-w-xl" action={formAction} noValidate>
            <label className="mb-2 block text-lg text-[#333]" htmlFor="fullName">
              Fulde navn
            </label>
            <input
              className="mb-2 w-full border border-gray-300 px-4 py-3 text-lg outline-none transition focus:border-primary"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Fulde navn"
              autoComplete="name"
              defaultValue={state.values.fullName}
            />
            {state.fieldErrors.fullName ? (
              <p className="mb-4 text-sm text-red-700">{state.fieldErrors.fullName}</p>
            ) : (
              <div className="mb-6" />
            )}

            <label className="mb-2 block text-lg text-[#333]" htmlFor="email">
              Email adresse
            </label>
            <input
              className="mb-2 w-full border border-gray-300 px-4 py-3 text-lg outline-none transition focus:border-primary"
              id="email"
              name="email"
              type="email"
              placeholder="Email adresse"
              autoComplete="email"
              defaultValue={state.values.email}
            />
            {state.fieldErrors.email ? (
              <p className="mb-4 text-sm text-red-700">{state.fieldErrors.email}</p>
            ) : (
              <div className="mb-6" />
            )}

            <label className="mb-2 block text-lg text-[#333]" htmlFor="password">
              Password
            </label>
            <input
              className="mb-2 w-full border border-gray-300 px-4 py-3 text-lg outline-none transition focus:border-primary"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              defaultValue={state.values.password}
            />
            {state.fieldErrors.password ? (
              <p className="mb-4 text-sm text-red-700">{state.fieldErrors.password}</p>
            ) : (
              <div className="mb-6" />
            )}

            <label className="mb-2 block text-lg text-[#333]" htmlFor="confirmPassword">
              Bekræft password
            </label>
            <input
              className="mb-2 w-full border border-gray-300 px-4 py-3 text-lg outline-none transition focus:border-primary"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Bekræft password"
              autoComplete="new-password"
              defaultValue={state.values.confirmPassword}
            />
            {state.fieldErrors.confirmPassword ? (
              <p className="mb-4 text-sm text-red-700">{state.fieldErrors.confirmPassword}</p>
            ) : (
              <div className="mb-6" />
            )}

            {state.formError ? <p className="mb-4 text-sm text-red-700">{state.formError}</p> : null}

            <button
              className="w-full bg-primary py-3 text-lg font-semibold text-white transition hover:opacity-95 disabled:opacity-70"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Opretter bruger..." : "Opret bruger"}
            </button>

            <p className="mt-8 text-center text-lg text-[#333]">
              Har du allerede en konto?{" "}
              <Link className="text-blue-500 underline-offset-2 hover:underline" href="/login">
                Log ind.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}