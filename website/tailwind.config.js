const theme = require('./theme.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // accent-* utilities map directly to theme.config.js accent palette
        accent: {
          950: theme.accent[950],
          900: theme.accent[900],
          800: theme.accent[800],
          700: theme.accent[700],
          600: theme.accent[600],
          500: theme.accent[500],
          400: theme.accent[400],
          100: theme.accent[100],
          50:  theme.accent[50],
        },
        code: {
          bg:     theme.code.bg,
          header: theme.code.header,
          border: theme.code.border,
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
