"use client";

import { useActionState } from "react";
import Link from "next/link";
import { loginAction } from "@/app/login/actions";

const initialLoginActionState = {
  success: false,
  error: null,
  values: {
    identifier: "",
    password: "",
  },
};

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialLoginActionState);

  return (
    <section className="px-4 py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl shadow-sm px-8 py-12 md:px-12 md:py-14">
          <h1 className="mb-10 text-center text-4xl font-semibold text-[#2e3338]">
            Log ind på din konto
          </h1>

          <form className="mx-auto max-w-xl" action={formAction}>
            <label className="mb-2 block text-lg text-[#333]" htmlFor="email">
              Email
            </label>
            <input
              className="mb-6 w-full border border-gray-300 px-4 py-3 text-lg outline-none transition focus:border-primary"
              id="email"
              name="identifier"
              type="email"
              placeholder="Email"
              autoComplete="email"
              defaultValue={state.values.identifier}
              required
            />

            <label className="mb-2 block text-lg text-[#333]" htmlFor="password">
              Password
            </label>
            <input
              className="mb-6 w-full border border-gray-300 px-4 py-3 text-lg outline-none transition focus:border-primary"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              defaultValue={state.values.password}
              required
            />

            {state.error ? <p className="mb-4 text-sm text-red-700">{state.error}</p> : null}
            {state.success && (
              <p className="mb-4 text-sm text-green-700">
                Du er logget ind. Token er gemt sikkert til brug pa favoritsiden.
              </p>
            )}

            <button
              className="mb-10 w-full bg-primary py-3 text-lg font-semibold text-white transition hover:opacity-95 disabled:opacity-70"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Logger ind..." : "Log ind"}
            </button>

            <p className="mb-4 text-lg text-[#333]">Log ind med</p>
            <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <button className="bg-[#db4a39] py-3 text-lg font-semibold text-white" type="button">
                Google
              </button>
              <button className="bg-[#3b5998] py-3 text-lg font-semibold text-white" type="button">
                Facebook
              </button>
              <button className="bg-[#1b2f4a] py-3 text-lg font-semibold text-white" type="button">
                Twitter
              </button>
            </div>

            <p className="text-center text-lg text-[#333]">
              Har du ikke en konto?{" "}
              <Link className="text-blue-500 underline-offset-2 hover:underline" href="/opret-bruger">
                Opret bruger.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
