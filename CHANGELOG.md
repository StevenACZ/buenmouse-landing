# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added a strict Content Security Policy meta policy in the shared layout.
- Added `Person` and `BreadcrumbList` nodes to the JSON-LD `@graph`.
- Added a public-safe `AGENTS.md` with contributor guardrails.

### Changed

- Updated sitemap filtering to exclude non-canonical routes (`/` and `/404`) while keeping localized pages discoverable.
- Updated the root page to a noindex redirect helper that points to the default localized route.
- Updated PWA manifest metadata (`id`, `scope`, and `lang`) for better install consistency.
- Expanded README documentation with an SEO and performance section.
