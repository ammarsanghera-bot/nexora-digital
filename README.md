# Nexora Digital

Premium digital agency website — a **frontend portfolio demonstration** showcasing WordPress / Elementor–ready layouts, modern UI craft, and production-quality React architecture.

> **Important:** This is a React + Vite application. It is **not** a WordPress or Elementor website. Sections are structured so equivalent layouts can later be recreated in WordPress/Elementor for client delivery.

## Brand

- **Name:** Nexora Digital  
- **Tagline:** Digital Experiences That Move Businesses Forward.  
- **Theme:** Dark premium agency (`#0B0D12` + lime accent `#A3E635`)  
- **Typography:** Space Grotesk (headings) · Inter (body)

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services |
| `/about` | About |
| `/projects` | Projects (concept work + filters + modal) |
| `/contact` | Contact (validated inquiry form) |
| `/privacy` | Privacy Policy |

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 3
- Framer Motion
- Lucide React
- React Router
- React Hook Form + Zod

## Getting started

```bash
cd nexora-digital
npm install
npm run dev
```

### Scripts

```bash
npm run dev       # local development
npm run build     # production build → dist/
npm run preview   # preview production build
npm run lint      # oxlint
```

## Project structure

```text
src/
  components/
    layout/       Header, Footer, Layout
    home/         Homepage sections
    projects/     Mockups + modal
    contact/      Inquiry form
    ui/           Logo, Button, headings
  data/           Services, projects, copy
  pages/          Route pages
  lib/            utils + zod schemas
```

## Content notes

- Featured projects are **fictional concepts**, clearly labeled. Do not present them as client work.
- Contact form uses a **mock submit handler**. No email is sent until you connect a backend or form service (Formspree, Netlify Forms, etc.).
- Replace placeholders in `src/data/navigation.ts` (email, social URLs, location).

## Deployment

Static hosting works with the `dist` output.

**Vercel / Netlify / Cloudflare Pages**

- Build command: `npm run build`
- Output directory: `dist`
- For client-side routing, ensure all routes fallback to `index.html`

**SPA fallback (Netlify)** — add `public/_redirects`:

```text
/*    /index.html   200
```

**SPA fallback (Vercel)** — `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Elementor recreation notes

Layouts are section-based with clear headings, card grids, timelines, and CTAs—suitable for mapping into Elementor sections, containers, and global styles:

1. Define global colors/typography to match the design tokens in `tailwind.config.js`
2. Recreate each homepage section as an Elementor section
3. Use template kits for Services / Projects cards
4. Keep the same information hierarchy for SEO (one H1, logical H2s)

## License

Private portfolio demonstration. Update before public distribution.
