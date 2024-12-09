import starlightPlugin from "@astrojs/starlight-tailwind"
import defaultTheme from "tailwindcss/defaultTheme"

const accent = {
  200: "#92d1fe",
  600: "#0073aa",
  900: "#003653",
  950: "#00273d",
}
const gray = {
  100: "#f3f7f9",
  200: "#e7eff2",
  300: "#bac4c8",
  400: "#7b8f96",
  500: "#495c62",
  700: "#2a3b41",
  800: "#182a2f",
  900: "#121a1c",
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
