# Portfolio

Next.js portfolio starter with Tailwind CSS and Framer Motion.

## Stack

- **Next.js** (App Router) — multi-page routing + image optimization
- **Tailwind CSS** — styling
- **Framer Motion** — page/hero/scroll animations
- **Syne + DM Sans** — display and body fonts via `next/font`

## Get started

```bash
cd ~/Desktop/portfolio
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

1. Update your name in `src/components/Nav.tsx` and `src/components/Hero.tsx`
2. Replace projects in `src/data/projects.ts`
3. Swap Unsplash images for your own in `/public` or keep remote URLs
4. Change colors in `src/app/globals.css` (`:root` variables)
5. Add pages by creating folders under `src/app/` (e.g. `src/app/about/page.tsx`)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Run production server |
