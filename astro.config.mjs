// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://buenmouse.dev",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-ES",
        },
      },
      filter: (page) => !page.includes("/404"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: {
    assets: "assets",
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
  // Improve SEO with trailing slashes
  trailingSlash: "always",
});
