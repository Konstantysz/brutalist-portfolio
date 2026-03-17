# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:4321
npm run build     # Build static site to ./dist
npm run preview   # Preview production build
```

No test suite is configured.

## Architecture

Astro static site — all pages are server-rendered at build time, no client-side routing. TypeScript is used only for small utility scripts (`src/scripts/`).

### Bilingual routing

Every page exists in two versions:
- English: `src/pages/*.astro` (routes: `/`, `/experience`, `/projects`, `/contact`)
- Polish: `src/pages/pl/*.astro` (routes: `/pl`, `/pl/experience`, `/pl/projects`, `/pl/contact`)

The `lang` prop (`"en" | "pl"`) flows from each page → `BaseLayout.astro` → `Header.astro`. Language switching is handled by `Header.astro` mapping current path to its counterpart (see `enPath`/`plPath` logic at the top of that file).

### Data

Content lives in JSON files with bilingual fields:

```jsonc
// src/data/projects.json, src/data/experience.json
{ "title": { "en": "...", "pl": "..." }, ... }
```

Pages read these files at build time and pass the correct language string to components.

### Theme

Theme (light/dark) is set via `data-theme` attribute on `<html>`, persisted in `localStorage`. CSS variables in `src/styles/global.css` handle the visual switch — no JS class toggling. `src/scripts/theme.ts` exports `initTheme()` and `toggleTheme()`, called from `Header.astro`'s inline `<script>`.

### Design constraints

- No CSS frameworks, no Tailwind — all styles in `src/styles/global.css` or scoped `<style>` blocks
- No animations or transitions (`transition: none` is intentional)
- Accent color: `#DC143C` (crimson) — do not change without updating CSS variable `--accent`
- System fonts only: `Arial, Helvetica, Verdana, sans-serif`
- Max content width: 1000px; section padding: 24px sides, 16px top/bottom

### Mobile layout

On `≤768px`, desktop `<nav>` is hidden and replaced by a hamburger button + slide-in sidebar. Both are rendered in `Header.astro`; the sidebar toggling is pure JS in that file's `<script>` block.

## Project context

Full design spec and author info: `.claude/project-context.md`
