# Personal Developer Portfolio

A modern, dark-first personal portfolio website for a junior software developer focused on automation, APIs, and data science. Built with TanStack Start (React 19 + Vite 7), styled with Tailwind CSS 4, and deployed on Netlify.

## Features

- **Dark mode by default** with a light/dark toggle (preference persisted in localStorage)
- **Single-page layout** with smooth-scroll anchor navigation: Hero → About → Skills → Projects → Experience → Contact
- **Content Collections** — all resume content (jobs, education, projects) lives in Markdown files under `content/` and is fully typed via Zod schemas
- **Netlify Forms** — the contact form is wired to Netlify's serverless form handling with spam protection
- **Responsive & mobile-first** layout using Tailwind utility classes
- Subtle animations: gradient hero, fade-in-up on load, hover effects on cards, floating blobs

## Quickstart

```bash
# Install dependencies
npm install

# Start local dev server (port 3000, or 8888 via Netlify CLI)
npm run dev

# Or with Netlify CLI (recommended — emulates Forms, Functions, etc.)
netlify dev
```

## Customizing Your Content

All placeholder content is concentrated in `src/routes/index.tsx` at the top of the file. Look for the clearly-commented constants:

| Constant | What to replace |
|---|---|
| `YOUR_NAME` | Your full name |
| `HEADLINE` | One-line tagline |
| `INTRO` | 2-3 sentence hero intro |
| `ABOUT_TEXT` | Full about-me paragraphs |
| `EMAIL` | Your email address |
| `LINKEDIN_URL` | Your LinkedIn profile URL |
| `GITHUB_URL` | Your GitHub profile URL |
| `SKILLS` | Skills grid (add/remove items per category) |
| `ABOUT_HIGHLIGHTS` | Quick-tag highlights in the About section |

### Resume / CV content

Edit the Markdown files in `content/`:

- `content/jobs/*.md` — work experience entries
- `content/education/*.md` — education entries
- `content/projects/*.md` — project cards

Each file uses YAML frontmatter for structured fields (title, dates, tags, links) and the Markdown body for extended descriptions.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start (React 19 + Vite 7) |
| Routing | TanStack Router (file-based) |
| Styling | Tailwind CSS 4 |
| Content | Content Collections (type-safe Markdown) |
| UI Primitives | Radix UI + custom components |
| Icons | Lucide React |
| Forms | Netlify Forms |
| Deployment | Netlify |

## Project Structure

```
content/            # Markdown content for jobs, education, projects
src/
  routes/
    __root.tsx      # Root layout: NavBar + dark-mode toggle
    index.tsx       # Portfolio homepage (all sections)
    resume.tsx      # Detailed resume page
    projects.tsx    # Projects gallery page
    contact.tsx     # Standalone contact page
  components/ui/    # Radix-based UI primitives
  styles.css        # Tailwind + CSS custom properties + portfolio animations
```
