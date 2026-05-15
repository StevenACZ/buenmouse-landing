# BuenMouse Landing Guide

## Scope

Public Astro landing page for BuenMouse. Keep it static, fast, multilingual, accessible, and safe to publish.

## Security and Privacy

- Never commit secrets, tokens, private keys, internal IPs, environment dumps, local machine paths, or private infrastructure notes.
- Keep `AGENTS.md`, `README.md`, `CHANGELOG.md`, and metadata public-safe.
- Keep local/private notes in ignored `docs/`.
- Do not add analytics, trackers, or third-party scripts without an explicit product reason.
- Keep CSP and external domains as narrow as possible.

## Project Overview

| Field  | Value                                 |
| ------ | ------------------------------------- |
| URL    | `https://mouse.stevenacz.com`         |
| Stack  | Astro, TypeScript, `@astrojs/sitemap` |
| Routes | `/en/` and `/es-ES/` are canonical    |
| Output | Static HTML in `dist/`                |

## Structure

- `astro.config.mjs`: Astro, sitemap, trailing slash behavior.
- `src/pages/`: root redirect helper, 404, and localized pages.
- `src/layouts/Layout.astro`: shared shell, SEO, CSP, JSON-LD.
- `src/components/`: landing sections.
- `src/i18n/`: translations and locale helpers.
- `src/lib/github.ts`: public release fetch.
- `src/styles/global.css`: design tokens and global styles.
- `public/`: static icons, manifest, OG image, robots.

## Commands

```bash
npm install
npm run dev
npm run format
npm run format:check
npm run typecheck
npm run build
```

Use npm because this repo tracks `package-lock.json`. Do not commit generated `dist/`, `.astro/`, local docs, or env files.

## Internationalization

- `src/i18n/ui.ts` is the canonical source for copy.
- `src/i18n/utils.ts` exposes helpers such as `useTranslations()` and locale detection.
- `/en/` and `/es-ES/` are the canonical indexable routes.
- The root `/` page is a noindex redirect helper and must not be treated as a canonical landing page.
- Add or update translation keys in every supported language in the same change.

## SEO and Structured Data

- Shared metadata lives in `src/layouts/Layout.astro`.
- Keep title, description, keywords, canonical URL, `hreflang`, Open Graph, Twitter Card, theme color, and JSON-LD aligned per locale.
- CSP is served as an HTTP header from nginx (`infrastructure/nginx/snippets/mouse-csp.conf` on the VPS), not as a `<meta>` tag. `frame-ancestors` is silently ignored when set via meta, so the header form is the only one that enforces it.
- Generated sitemap should include only canonical indexable routes plus valid localized alternates.
- Keep JSON-LD consolidated and non-conflicting: `WebSite`, `SoftwareApplication`, `Person`, and `BreadcrumbList`.
- Keep `public/manifest.json` aligned with the production app name, icons, categories, `lang`, and `dir`.
- `robots.txt` should reference the sitemap and avoid blocking the canonical localized routes.

## Design System

- Global variables live in `src/styles/global.css`.
- Keep the existing dark macOS-oriented visual identity, spacing scale, and animation patterns.
- Prefer editing existing sections over adding new components unless the new component has a clear reusable responsibility.
- Respect reduced-motion behavior and avoid layout shifts in above-the-fold content.

## Verification

Before marking work complete, run the relevant checks:

```bash
npm run format:check
npm run typecheck
npm run build
npm audit --audit-level=high
```

For SEO work, also inspect the generated `dist/` HTML and sitemap for:

- `application/ld+json`
- canonical and alternate locale links
- `og:image`
- valid sitemap XML
- CSP HTTP header from the VPS response (`curl -sI` against the live URL)

## Git Safety

- Use conventional commits.
- Do not use destructive git operations unless explicitly requested.
