// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mouse.stevenacz.com",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-ES",
        },
      },
      filter: (page) => {
        const { pathname } = new URL(page);
        return pathname !== "/" && pathname !== "/404/" && pathname !== "/404";
      },
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
      assetsInlineLimit: 0,
    },
  },
  // Improve SEO with trailing slashes
  trailingSlash: "always",
});
