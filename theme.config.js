/**
 * ============================================================
 *  ATLAS THEME CONFIGURATION
 *  Politecnico di Milano brand identity — Heritage Blue palette
 *  https://www.polimi.it/il-politecnico/comunicazione/manuale-brand-identity
 * ============================================================
 *  Edit accent colors here. After saving, restart the dev server.
 *  These values drive Tailwind utilities (accent-*) and CSS
 *  custom properties (--accent-*) throughout the entire site.
 * ============================================================
 */

const theme = {
  // ── Accent palette — Polimi Heritage Blue (Pantone 539 C) ────────────────
  accent: {
    950: '#040e1c', // deepest
    900: '#071525', // very dark
    800: '#102c53', // ← PRIMARY — Polimi Heritage Blue
    700: '#163e72', // hover on dark backgrounds
    600: '#1e5299', // links, interactive
    500: '#2d6bbf', // lighter interactive
    400: '#4d87d4', // icons, highlights
    100: '#d4e3f5', // subtle tint
    50:  '#eaf1fb', // card / section backgrounds
  },

  // ── Code block window ────────────────────────────────────────────────────
  code: {
    bg:     '#0d1117',
    header: '#161b22',
    border: '#30363d',
  },

};

module.exports = theme;
