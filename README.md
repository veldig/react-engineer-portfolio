# Portfolio Template

Open-source portfolio template by Martin Vizcaino.

A bold, responsive portfolio template for software engineers and creators. Built with React + Vite + Tailwind and designed to showcase projects, experience, and a downloadable resume.

## Why This Exists

I rebuilt my personal portfolio to reflect higher engineering standards and decided to open-source the structure so other developers can use it as a clean starting point.

## Features
- Fully responsive layout with mobile-friendly navigation
- Hero, About, Experience, Projects, and Contact sections
- Downloadable resume button (configurable path)
- Hire-me contact fallback (mailto + scroll to Contact)
- Animated transitions with Framer Motion
- Single-source config for links, text, and content

## Tech Stack
- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Quickstart
```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
npm run preview
```

## Deployment (Vercel)
1. Push this repo to GitHub.
2. In Vercel, click **New Project** and import the repo.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

## Customization
All content and links live in `src/data/siteConfig.js`.

Update:
- Name, role, tagline, and location
- Navigation labels/anchors
- Resume PDF path (`resume.url`)
- Social links and contact info
- Experience, projects, and skills
- SEO metadata

Replace assets:
- Headshot: swap `src/assets/headshot-placeholder.svg` for your image
- Resume PDF: replace `public/resume.pdf`
- Open Graph image: replace `public/og-image.svg`

## License
MIT - see `LICENSE`.
