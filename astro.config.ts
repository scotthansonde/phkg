import { defineConfig } from "astro/config";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import astroLayouts from "astro-layouts";
import codeTitle from "remark-code-title";

// https://astro.build/config
export default defineConfig({
  site: "https://phkg.de",
  base: "/",
  markdown: {
    shikiConfig: {
      theme: "slack-dark",
    },
    remarkPlugins: [
      [
        astroLayouts,
        {
          default: "@layouts/Layout.astro",
        },
      ],
      codeTitle,
    ],
  },
  integrations: [
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
      logger: 0,
    }),
    tailwind(),
    sitemap(),
    mdx()
    ],
});
