---
description: "Use when editing data fetching and page composition in src. Enforces DAL-first fetch access, thin App Router pages, shared domain types, and current cache/error patterns. Includes login action conventions where applicable."
name: "Next.js Data Layer Conventions"
applyTo: "src/**/*.{ts,tsx}"
---
# Next.js Data Layer Conventions

## Core conventions (always apply)

- Keep external API calls in `src/dal/*`. Do not fetch directly inside UI components.
- Keep route pages in `src/app/*` thin: read route params, call DAL functions, and pass typed props to components.
- Reuse domain types from `src/lib/types.ts` (`Agent`, `Property`, `Image`) instead of duplicating inline types.
- In DAL functions, validate `response.ok` and throw an error including `response.statusText`.
- Use explicit cache values for API data when data can be cached:
  - List endpoints: `next: { revalidate: 60 * 60 * 24 * 30 }`
  - Detail endpoints: `next: { revalidate: 60 * 60 * 24 * 30, tags: ['<entity>-<id>'] }`
- Use `@/` path aliases for internal imports.

## Server action conventions (apply to form/mutation flows)

- Prefer server actions for form submissions and mutations. Keep mutation logic out of client submit handlers.
- Validate server action input with a Zod schema before calling DAL functions.
- Prefer uncontrolled form fields (`name` + `FormData`) over controlled client input state, unless live field UI state is required.
- Normalize `FormData` values with a string guard before passing to Zod or DAL functions: `typeof value === "string" ? value : ""`.
- Prefer `noValidate` on forms that are validated by Zod in server actions, so browser-native validation messages do not compete with app messages.
- Return field-level errors from server actions (for example via `parsed.error.flatten().fieldErrors`) and render each error directly under its corresponding input.
- Return submitted form `values` in error states so the page can repopulate input `defaultValue` fields.
- When an action result is needed after a try/catch block, declare the variable before the try using `Awaited<ReturnType<typeof fn>>` to satisfy TypeScript's definite assignment check.
- Call `redirect()` after any try/catch block, never inside one. Next.js implements `redirect` by throwing internally, so a surrounding catch will intercept it.

## Login/auth conventions (apply only to login/auth flows)

- Persist JWT in secure, `httpOnly` cookies with `sameSite: 'lax'` and `path: '/'`.
- Keep all auth cookie writes server-side only (in server actions). Do not use `document.cookie` or `localStorage` for auth tokens.
- Use shared cookie options: `httpOnly: true`, `secure: process.env.NODE_ENV === 'production'`, `sameSite: 'lax'`, `path: '/'`, `maxAge`.
