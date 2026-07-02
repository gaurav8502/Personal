# Gaurav Prakash — SRE & AIOps Portfolio

React + Vite + Tailwind + Framer Motion + Mermaid portfolio for GitHub Pages.

## Local setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages deployment

This repository includes `.github/workflows/deploy.yml`.

In GitHub, go to:

`Settings → Pages → Source → GitHub Actions`

Then push to `main`. The site will publish to:

`https://gaurav8502.github.io/Personal/`

## Important files

- `public/profile.jpeg` — LinkedIn profile photo
- `public/resume.pdf` — downloadable resume
- `src/main.jsx` — main website content
- `vite.config.js` — contains `base: '/Personal/'`
