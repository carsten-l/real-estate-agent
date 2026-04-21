---
description: "Use when editing Next.js App Router pages, data fetching, or TypeScript models in this project. Enforces DAL-based API access, shared types, and cache/tag patterns."
name: "Next.js Data Layer Conventions"
applyTo:
  - "src/**/*.ts"
  - "src/**/*.tsx"
---
# Next.js Data Layer Conventions

- Keep external API calls in `src/dal/*`. Do not fetch directly inside UI components.
- Keep route pages in `src/app/*` thin: read route params, call DAL functions, and pass typed props to components.
- Reuse domain types from `src/lib/types.ts` (`Agent`, `Property`, `Image`) instead of duplicating inline types.
- In DAL functions, always validate `response.ok` and throw an error that includes `response.statusText`.
- Use explicit cache values for API data:
  - List endpoints: `next: { revalidate: 60 * 60 * 24 * 30 }`
  - Detail endpoints: `next: { revalidate: 60 * 60 * 24 * 30, tags: ['<entity>-<id>'] }`
- Use `@/` path aliases for internal imports to match the current codebase style.
