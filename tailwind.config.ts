import flowbitePlugin from "flowbite/plugin";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  darkMode: "selector",

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fbf7fc",
          100: "#f7edfa",
          200: "#eddbf3",
          300: "#e1bee9",
          400: "#d4a1de",
          500: "#b86ec7",
          600: "#9d4faa",
          700: "#833f8c",
          800: "#6c3573",
          900: "#5c305f",
          950: "#39163c"
        },
      },
    },
  },

  plugins: [flowbitePlugin],
} satisfies Config;
