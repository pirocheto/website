import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://pirocheto.github.io",
  integrations: [
    starlight({
      title: "Pierre Rochet",
      customCss: [
        // Chemin vers vos style de base de Tailwind:
        "./src/custom.css",
        "./src/tailwind.css",
        "@fontsource-variable/jost",
      ],
      social: {
        github: "https://github.com/withastro/starlight",
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
    }),
    tailwind({
      // Désactive les styles de base par défaut:
      applyBaseStyles: false,
    }),
  ],
})
