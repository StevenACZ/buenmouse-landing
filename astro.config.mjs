// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mouse.stevenacz.com",
  integrations: [
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        return pathname !== "/404/" && pathname !== "/404";
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
  trailingSlash: "always",
});
