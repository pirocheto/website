import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://pirocheto.github.io",
  base: "/website/",
  integrations: [
    starlight({
      title: "MLOpsfr",
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
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      components: {
        Header: "./src/components/Header.astro",
      },
    }),
    tailwind({
      // Désactive les styles de base par défaut:
      applyBaseStyles: false,
    }),
  ],
})
