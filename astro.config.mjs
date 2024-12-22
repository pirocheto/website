import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://pirocheto.github.io",
  base: "/website/",
  integrations: [
    starlight({
      title: "DATA&IA",
      locales: {
        root: {
          label: "Français",
          lang: "fr",
        },
      },
      customCss: [
        // Chemin vers vos style de base de Tailwind:
        "./src/custom.css",
        "./src/tailwind.css",
        "./src/assets/fonts/jost",
      ],
      social: {
        github: "https://github.com/pirocheto",
        linkedin: "https://www.linkedin.com/in/pierre-rochet/",
      },
      sidebar: [
        {
          label: "Python",
          items: [
            { label: "Introduction", slug: "python/01-introduction" },
            { label: "Installation", slug: "python/02-installation" },
            { label: "Premiers pas", slug: "python/03-get-started" },
            { label: "Variables et Types", slug: "python/04-variables-types" },
          ],
        },
        {
          label: "Organisation des données",
          items: [
            { label: "Les types de systèmes", slug: "data/system-types" },
          ],
        },
        {
          label: "Références",
          slug: "references",
        },
      ],
      components: {
        Header: "./src/components/Header.astro",
        Hero: "./src/components/Hero.astro",
      },
    }),
    tailwind({
      // Désactive les styles de base par défaut:
      applyBaseStyles: false,
    }),
  ],
})
