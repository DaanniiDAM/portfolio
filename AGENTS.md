# AGENTS.md

This document is the authoritative guide for AI agents (and human contributors) working in this codebase. Read it before making changes.

## Project Overview

A personal developer portfolio built with **TanStack Start** and deployed on **Netlify**. The site is a single-page portfolio with anchor-based section navigation, plus standalone detail pages for `/resume`, `/projects`, and `/contact`. Content is managed through Markdown files with typed frontmatter via Content Collections.

## Architecture

### Routing (TanStack Router — file-based)

| File | Route | Purpose |
|---|---|---|
| `src/routes/__root.tsx` | (layout) | Root shell: NavBar, dark-mode toggle, theme init script |
| `src/routes/index.tsx` | `/` | Full portfolio homepage (all sections) |
| `src/routes/resume.tsx` | `/resume` | Detailed resume from content-collections |
| `src/routes/projects.tsx` | `/projects` | Projects grid |
| `src/routes/contact.tsx` | `/contact` | Standalone contact form |
| `src/routes/blog/$slug.tsx` | `/blog/:slug` | Blog post detail |

### Content (Content Collections)

All editable content lives in `content/` as Markdown with YAML frontmatter. Schemas are in `content-collections.ts`. Changes to schemas require matching changes to frontmatter in all affected files.

- `content/jobs/*.md` — work experience
- `content/education/*.md` — education
- `content/projects/*.md` — project cards
- `content/blog/*.md` — blog posts

### Theme System (Dark Mode)

Dark mode is set as the default via a class on `<html>`. An inline `<script>` in `__root.tsx` runs before hydration to read `localStorage` and avoid flash. Theme state is managed by React `useState` in `RootDocument` and toggled via the `NavBar`. Do NOT try to manage theme through CSS media queries alone — the class-based approach is intentional.

### Styling

Tailwind CSS 4 with `@theme inline` for CSS custom properties. Custom portfolio-specific classes (animations, gradient text, dot-grid, card-glow) are defined at the bottom of `src/styles.css`. The dark/light palettes use `oklch` color space for perceptual uniformity.

### Forms

Contact form uses **Netlify Forms** (`data-netlify="true"`). The form is submitted via `fetch` to `/contact.html` (the static form detector page in `public/`) to avoid a full page reload. Both the React form in `contact.tsx` and the static HTML form in `public/contact.html` must share the same `name` attribute value (`"contact"`) for Netlify to detect submissions correctly.

## Key Conventions

- **Content first**: personal data (name, email, bio, skill lists) lives in clearly-commented constants at the top of `src/routes/index.tsx`. Do not scatter it across components.
- **No inline magic strings**: section IDs used for anchor navigation (`#about`, `#skills`, etc.) must match between `NavBar` in `__root.tsx` and the `<section id="...">` elements in `index.tsx`.
- **Content Collections are the source of truth** for jobs/education/projects. Do not duplicate this data as static arrays in components.
- **Card hover effects** use the `.card-glow` CSS class from `src/styles.css`. Apply it to interactive cards consistently.
- **Icons**: use `lucide-react`. Do not add a second icon library.
- **TypeScript strict mode** — all new code must pass `tsc` with no errors.
- **No build artifacts** — do not commit `.tanstack/`, `dist/`, or `.netlify/` directories.

## Non-Obvious Decisions

- `src/routes/__root.tsx` uses `shellComponent` (not `component`) because TanStack Start requires this for the root HTML shell.
- The `themeScript` string is injected as a `dangerouslySetInnerHTML` script — this is intentional and necessary to prevent the flash of unstyled content on dark mode load. It is safe because the string is a static constant, not user input.
- `allEducations` (plural with -s) is the export name from content-collections — it follows the auto-generated naming convention.
- Projects and blog posts use `_meta.path` as the unique key because frontmatter titles are not guaranteed to be unique.

## Adding New Sections

1. Add the section component to `src/routes/index.tsx`
2. Give the `<section>` an `id` attribute
3. Add the matching anchor link to `navLinks` in `src/routes/__root.tsx`

## Adding New Projects/Jobs

Drop a new Markdown file into the appropriate `content/` subdirectory. The frontmatter fields must match the Zod schema in `content-collections.ts`. The page will automatically include the new entry on next build/reload.
