/**
 * Site metadata and navigation. Colors live in /theme.config.js.
 */

// ── Site metadata ─────────────────────────────────────────────────────────
export const SITE = {
  name:        'ATLAS',
  title:       'ATLAS — The AIRLab User Handbook',
  tagline:     'Politecnico di Milano · AIRLab',
  description: 'The official onboarding handbook for members of the Artificial Intelligence and Robotics Lab at Politecnico di Milano.',
} as const;

// ── Navigation ────────────────────────────────────────────────────────────
// Two top-level sections, each with its own pages.
// Legacy pages (/docs/legacy/*) are intentionally left out: reachable by URL only.
export const NAV = [
  {
    section: 'Cluster Guide',
    items: [
      { label: 'Welcome & Onboarding',  href: '/docs/welcome' },
      { label: 'Shell & Remote Access', href: '/docs/shell' },
      { label: 'Running Jobs (Slurm)',  href: '/docs/slurm' },
      { label: 'Software & Conda',      href: '/docs/environments' },
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
