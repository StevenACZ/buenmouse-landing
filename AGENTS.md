# BuenMouse Landing Guide

## Scope

Public Astro landing for BuenMouse (`https://mouse.stevenacz.com`). Keep it static-host friendly, single-language, accessible, and safe to publish.

## Security and Privacy

- Never commit credentials, tokens, internal paths, environment dumps, or private deployment notes.
- Keep `AGENTS.md`, `README.md`, `CHANGELOG.md`, and metadata public-safe.
- Keep local notes in an ignored `docs/` folder.
- Do not add analytics, trackers, or third-party scripts without an explicit product reason.

## Project Overview

| Field    | Value                                    |
| -------- | ---------------------------------------- |
| URL      | `https://mouse.stevenacz.com`            |
| App repo | `https://github.com/StevenACZ/BuenMouse` |
| Stack    | Astro 6, Sass, `@astrojs/sitemap`        |
| Output   | Static HTML in `dist/`                   |

## Structure

- `src/pages/index.astro`: only canonical route.
- `src/pages/404.astro`: error page using the same `Layout`.
- `src/layouts/Layout.astro`: head, meta, CSP, JSON-LD, global SCSS entry.
- `src/components/*.astro`: section components (TheNavbar, HeroSection, GesturesSection, HowItWorksSection, PerformanceSection, PrivacySection, DownloadSection, TheFooter).
- `src/components/icons/*.astro`: Lucide-style SVG icons (no runtime JS). Each accepts `size`, `class`, `strokeWidth` props.
- `src/styles/`: `_variables`, `_mixins`, `_base`, `_animations`, `_utilities`, `main.scss`.
- `src/data/github.ts`: build-time fetch of latest release version.
- `public/`: icons, manifest, robots, OG images.

## Commands

```bash
npm install
npm run dev
npm run format
npm run format:check
npm run typecheck
npm run build
npm run preview
```

Do not commit `.astro/`, `dist/`, `node_modules/`, local docs, or env files.

## Product Copy

Keep copy aligned with the public app positioning (v2.1):

- macOS 13.0+ menu bar app, SwiftUI + AppKit hybrid, universal binary
- four gestures, configured one toggle per gesture inside the app:
  - **Middle Click → Mission Control**
  - **Middle Drag → Switch Spaces** with adjustable drag distance (50–250 px) and an Invert direction toggle
  - **⌃ + Scroll → Zoom In / Out**
  - **Invert Scroll → Natural Direction**
- menu bar controls: Show Settings ⌘,, Gesture Monitoring on/off, Launch at Login, Appearance, Reset to Defaults…, About BuenMouse, Quit ⌘Q
- zero telemetry, 100% local processing, MIT licensed, Accessibility + AppleEvents permissions only
- distribution via signed DMG on GitHub releases

## UI Guidelines

- SCSS tokens live in `src/styles/_variables.scss`. Import with `@use "../styles/variables" as *`.
- Preserve the cyan identity (theme color `#22d3ee`) and restrained dark macOS aesthetic.
- Use existing utilities such as `.container`, `.section`, `.btn`, `.btn-primary`, `.btn-secondary`, `.card-glass`, `.text-gradient`, `.eyebrow`, `kbd`.
- Existing responsive breakpoints are 1024px, 768px, 480px.
- Keep animations based on `transform` and `opacity`. Respect `prefers-reduced-motion`.
- **Never use emojis as UI iconography.** Use the Lucide-style components in `src/components/icons/` (or add a new one in the same pattern).
- Prefer editing existing components before adding new ones.

## SEO and Structured Data

- `src/layouts/Layout.astro` owns title, description, CSP, Open Graph, Twitter Card, manifest link, sitemap link, and JSON-LD.
- Keep JSON-LD consolidated and non-conflicting: `WebSite`, `SoftwareApplication`, `Person`.
- `public/robots.txt` must reference `https://mouse.stevenacz.com/sitemap-index.xml`.
- `public/manifest.json` must stay valid JSON with real icons, categories, `lang: "en"`, `dir: "ltr"`.
- The deploy workflow validates the live HTML by grepping for `BuenMouse — Trackpad gestures for your mouse on macOS`; keep that exact string in the layout `<title>`.

## Verification

Run before finishing any task:

```bash
npm run format:check
npm run typecheck
npm run build
```

For SEO work, inspect `dist/index.html` for: `application/ld+json`, description + OG, CSP meta, manifest, sitemap-index, real OG image.

## Git Safety

- Conventional commits, incremental commits on a feature branch — never one big squash.
- No destructive git operations unless explicitly requested.
