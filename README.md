# INL IT Next.js

## Stack

- Next.js 16.4.6 (App Router)
- React 19.3.0
- Tailwind CSS 4.3.0
- TypeScript, ESLint, and Prettier

## Requirements

Node.js 20.9 or later (Node 24 LTS recommended) and npm 10 or later.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
src/
  app/          # Routes, layouts, and global styles (Next.js App Router)
  components/   # Reusable UI components
  lib/          # Framework-agnostic helpers and integrations
public/         # Static files served from the site root
```

Use the `@/*` alias for imports from `src`, for example `@/components/button`.
