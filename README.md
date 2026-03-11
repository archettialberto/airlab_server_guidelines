# ATLAS — The AIRLab User Handbook

Documentation site for the **Artificial Intelligence and Robotics Lab** at
**Politecnico di Milano**, built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com).

---

## Contents

- **Server Guide** — onboarding, shell essentials, tmux, Docker, Git & code quality
- **Thesis Guide** — conducting research, writing your thesis

Live site: _add your deployment URL here_

---

## Development

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 18
- npm ≥ 9 (bundled with Node)

### Install & run

```bash
# From the repository root
cd website

# Install dependencies
npm install

# Start the dev server with hot-reload
npm run dev
# → http://localhost:4321
```

### Build for production

```bash
npm run build
# Output in website/dist/
```

### Preview the production build locally

```bash
npm run preview
# → http://localhost:4321
```

---

## Deploying

The `dist/` folder is a self-contained static site — host it anywhere.

```bash
# Cloudflare Pages (recommended)
npx wrangler pages deploy dist --project-name atlas-airlab

# Netlify
npx netlify-cli deploy --prod --dir=dist

# GitHub Pages (gh-pages branch)
npx gh-pages -d dist

# Plain rsync to your own server
rsync -avz --delete dist/ user@your-server:/var/www/atlas/
```

If the site lives under a sub-path (e.g. `example.com/atlas/`), set the
`base` option in `astro.config.mjs`:

```js
export default defineConfig({
  integrations: [tailwind()],
  base: '/atlas',
});
```

---

## Extending the Documentation

### Adding a new page

1. **Create the file**

   ```
   src/pages/docs/my-topic.astro
   ```

   Use this template:

   ```astro
   ---
   import DocsLayout from '../../layouts/DocsLayout.astro';
   import CodeBlock from '../../components/CodeBlock.astro';

   const toc = [
     { label: 'First Section', id: 'first' },
     { label: 'Second Section', id: 'second' },
   ];
   ---

   <DocsLayout title="My Topic" toc={toc}>

     <h1>My Topic</h1>

     <p>Introduction paragraph.</p>

     <h2 id="first">First Section</h2>
     <p>Content here.</p>

     <h2 id="second">Second Section</h2>
     <CodeBlock lang="bash" filename="terminal" code={`echo "hello"`} />

   </DocsLayout>
   ```

   The page is immediately available at `/docs/my-topic`.

2. **Add it to the navigation**

   Open `src/config/theme.ts` and append an entry to the appropriate section
   in the `NAV` array:

   ```ts
   export const NAV = [
     {
       section: 'Server Guide',
       items: [
         // ... existing items ...
         { label: 'My Topic', href: '/docs/my-topic' },  // ← add here
       ],
     },
     // ...
   ];
   ```

   The sidebar updates automatically — no other changes needed.

### Available components

#### `<CodeBlock>`

macOS-style code window with syntax highlighting (Shiki), filename badge,
and a copy-to-clipboard button.

```astro
<CodeBlock
  lang="python"        <!-- required: Shiki language ID -->
  filename="train.py"  <!-- optional: shown in the header bar -->
  code={`import torch
model = torch.nn.Linear(128, 10)`}
/>
```

Supported language IDs: `bash`, `python`, `dockerfile`, `nginx`, `yaml`,
`typescript`, `astro`, `text`, `ini`, `latex`, `gitignore`, `markdown`, …
(any [Shiki-supported language](https://shiki.style/languages)).

#### Callout boxes

Defined in `src/styles/global.css`. Use any of four variants:

```html
<div class="callout callout-info">    <!-- blue  -->
<div class="callout callout-warning"> <!-- yellow -->
<div class="callout callout-danger">  <!-- red    -->
<div class="callout callout-success"> <!-- green  -->
```

Add an icon SVG as the first child for best results (see any existing doc page
for the icon pattern).

#### Tables

Plain HTML tables get automatic striped styling inside `.doc-content`:

```html
<table>
  <thead><tr><th>Column A</th><th>Column B</th></tr></thead>
  <tbody>
    <tr><td>Value 1</td><td>Value 2</td></tr>
  </tbody>
</table>
```

### Changing the accent color

All colors are controlled from a single file:

```
website/theme.config.js
```

Edit the `accent` object and restart the dev server. Tailwind regenerates
all utilities automatically. The CSS custom properties in `src/styles/global.css`
(`:root { --accent-* }`) must be kept in sync manually.

**Built-in presets** — replace the `accent` block with any of these:

| Name | 800 (primary) | 600 (links) | 50 (bg tint) |
|------|--------------|-------------|--------------|
| Polimi Heritage Blue (default) | `#102c53` | `#1e5299` | `#eaf1fb` |
| Teal | `#0f766e` | `#0d9488` | `#f0fdfa` |
| Amber | `#92400e` | `#d97706` | `#fffbeb` |
| Rose | `#9f1239` | `#e11d48` | `#fff1f2` |
| Violet | `#4c1d95` | `#7c3aed` | `#f5f3ff` |

### Project structure reference

```
website/
├── theme.config.js              ← accent colors (single source of truth)
├── astro.config.mjs             ← Astro config (base path, integrations)
├── tailwind.config.js           ← imports from theme.config.js
├── package.json
│
├── public/
│   └── favicon.svg
│
└── src/
    ├── config/
    │   └── theme.ts             ← SITE metadata + NAV sections
    │
    ├── components/
    │   ├── BaseHead.astro       ← <head> tags
    │   ├── CodeBlock.astro      ← macOS code window
    │   ├── Header.astro         ← top nav bar
    │   └── Sidebar.astro        ← left sidebar
    │
    ├── layouts/
    │   └── DocsLayout.astro     ← three-column doc layout
    │
    ├── pages/
    │   ├── index.astro          ← landing page
    │   └── docs/
    │       ├── welcome.astro
    │       ├── shell.astro
    │       ├── tmux.astro
    │       ├── docker.astro
    │       ├── git.astro
    │       ├── research.astro
    │       └── thesis.astro
    │
    └── styles/
        └── global.css           ← Tailwind directives + prose styles
```

---

## Contributing

1. Fork the repository and create a branch (`docs/my-topic`).
2. Make your changes following the patterns above.
3. Run `npm run build` and verify there are no errors.
4. Open a pull request with a brief description of what you changed and why.

For questions, open a GitHub issue or contact the lab coordinators.
