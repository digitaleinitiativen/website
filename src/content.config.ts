import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/** Normal pages. The file path is the URL: pages/ueber-uns/verein.md → /ueber-uns/verein/ */
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    updated: z.coerce.date().optional(),
    wordpressId: z.number().optional(),
  }),
});

/** "What's up?" stories, shown on the homepage and under /geschichten/. */
const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    image: z.string().optional(),
    wordpressId: z.number().optional(),
  }),
});

/** The Makerlab wiki (formerly Confluence). Folders become sections, index.md is a section's own page. */
const wiki = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/wiki" }),
  schema: z.object({
    title: z.string(),
    updated: z.coerce.date().optional(),
    order: z.number().optional(),
    confluenceId: z.string().optional(),
  }),
});

export const collections = { pages, news, wiki };
