import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://pirocheto.github.io",
  base: "/website/",
  integrations: [
    starlight({
      title: "DATA&AI",
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
            { label: "Introduction", slug: "python/introduction" },
            { label: "Installation", slug: "python/installation" },
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
