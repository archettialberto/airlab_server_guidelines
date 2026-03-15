/**
 * TypeScript re-export of theme constants for use in Astro components.
 * Colors must stay in sync with /theme.config.js — edit that file to retheme.
 */

// ── Accent palette — Polimi Heritage Blue ─────────────────────────────────
export const ACCENT = {
  950: '#040e1c',
  900: '#071525',
  800: '#102c53',  // ← Polimi Heritage Blue (Pantone 539 C)
  700: '#163e72',
  600: '#1e5299',
  500: '#2d6bbf',
  400: '#4d87d4',
  100: '#d4e3f5',
  50:  '#eaf1fb',
} as const;

// ── Code block window ─────────────────────────────────────────────────────
export const CODE = {
  bg:     '#0d1117',
  header: '#161b22',
  border: '#30363d',
} as const;

// ── Site metadata ─────────────────────────────────────────────────────────
export const SITE = {
  name:        'ATLAS',
  title:       'ATLAS — The AIRLab User Handbook',
  tagline:     'Politecnico di Milano · AIRLab',
  description: 'The official onboarding handbook for members of the Artificial Intelligence and Robotics Lab at Politecnico di Milano.',
  version:     '2.0.0',
  github:      'https://github.com/lab-AIRLab',
} as const;

// ── Navigation ────────────────────────────────────────────────────────────
// Two top-level sections, each with its own pages.
export const NAV = [
  {
    section: 'Server Guide',
    items: [
      { label: 'Welcome & Onboarding', href: '/docs/welcome' },
      { label: 'Shell & Terminal',     href: '/docs/shell' },
      { label: 'Docker & Experiments', href: '/docs/docker' },
    ],
  },
  {
    section: 'Thesis Guide',
    items: [
      { label: 'Conducting Research',  href: '/docs/research' },
      { label: 'Making Presentations',  href: '/docs/presentations' },
      { label: 'Writing Your Thesis',  href: '/docs/thesis' },
      { label: 'Thesis Dissertation',  href: '/docs/dissertation' },
    ],
  },
] as const;
