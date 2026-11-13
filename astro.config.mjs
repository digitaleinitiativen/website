import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import rehypeBase from "./src/lib/rehype-base.mjs";

// The deploy workflow sets these from GitHub Pages: https://digitaleinitiativen.github.io + /website while there is
// no custom domain, https://digitaleinitiativen.at + / afterwards.
const site = process.env.SITE_URL || "https://digitaleinitiativen.at";
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: { rehypePlugins: [rehypeBase(base)] },
});
