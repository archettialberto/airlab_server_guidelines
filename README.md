# ATLAS — The AIRLab User Handbook

Documentation site for the **Artificial Intelligence and Robotics Lab** at
**Politecnico di Milano**, built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com).

Live site: https://archettialberto.github.io/airlab_server_guidelines/

- **Cluster Guide**: onboarding on polimi-cluster, SSH, Slurm jobs, Conda environments
- **Thesis Guide**: research, presentations, thesis writing, final dissertation
- **Legacy** (`/docs/legacy/`): unlisted archive of the retired Westworld / Elysium docs

## Setup

Requires [Node.js](https://nodejs.org) ≥ 18.

```bash
npm install
npm run dev       # dev server at http://localhost:4321/airlab_server_guidelines/
npm run build     # static site in dist/
```

Every push to `main` is built and deployed to GitHub Pages by
`.github/workflows/ci.yml`.

## Editing

- **Pages** live in `src/pages/docs/*.astro`. Each page wraps its content in
  `DocsLayout` and passes a `toc` array for the right-hand "On this page" rail.
- **Navigation** is defined in `src/config/theme.ts` (`NAV`). A new page shows
  up in the sidebar only after you add it there.
- **Components**: `CodeBlock` (code window with copy button), `OsCodeBlock`
  (same, with a Linux/Windows toggle), `LegacyBanner`.
- **Callouts**: `<div class="callout callout-info|warning|danger|success">`.
- **Colors**: `theme.config.js`. Keep the `--accent-*` variables in
  `src/styles/global.css` in sync.
- **Internal links** must include the base path:
  ``href={`${import.meta.env.BASE_URL}docs/slurm`}``.

Run `npm run build` before opening a pull request.
