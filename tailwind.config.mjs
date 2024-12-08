import starlightPlugin from "@astrojs/starlight-tailwind"
import defaultTheme from "tailwindcss/defaultTheme"

// Generated color palettes
const accent = {
  200: "#e3b6ed",
  600: "#a700c3",
  900: "#4e0e5b",
  950: "#36113e",
}
const gray = {
  100: "#f5f6f8",
  200: "#eceef2",
  300: "#c0c2c7",
  400: "#888b96",
  500: "#545861",
  700: "#353841",
  800: "#24272f",
  900: "#17181c",
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Votre couleur d'accentuation préférée.
        // Indigo est la plus proche des valeurs par défaut de Starlight.
        accent: accent,
        // Votre échelle de gris préférée.
        // Zinc est la plus proche des valeurs par défaut de Starlight.
        gray: gray,
      },
      fontFamily: {
        // Votre police de texte préférée.
        // Starlight utilise une pile de polices système par défaut.
        sans: [
          "Jost Variable",
          // '"Atkinson Hyperlegible"',
          ...defaultTheme.fontFamily.sans,
        ],
        // Votre police de code préférée.
        // Starlight utilise des polices système à chasse fixe par défaut.
        mono: ['"IBM Plex Mono"'],
      },
    },
  },
  plugins: [starlightPlugin()],
}
