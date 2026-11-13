// Imports pages, posts and custom post types from the WordPress REST API into src/content as Markdown.
// Images from wp-content/uploads are downloaded to public/media.
// Usage: node scripts/import-wordpress.mjs [--site https://digitaleinitiativen.at]
import { existsSync } from "node:fs";
import { parseArgs } from "node:util";
import { decodeEntities, download, frontMatter, getJson, htmlToMarkdown, stripTags, writeText } from "./lib/convert.mjs";

const { values } = parseArgs({ options: { site: { type: "string", default: "https://digitaleinitiativen.at" } } });
const site = values.site.replace(/\/+$/, "");
const host = new URL(site).host;
const SKIP_TYPES = new Set(["attachment", "wp_block", "wp_template", "wp_template_part", "wp_navigation", "wp_font_family", "wp_font_face", "wp_global_styles"]);

async function all(restBase) {
  const items = [];
  for (let page = 1; ; page++) {
    const { body, headers } = await getJson(`${site}/wp-json/wp/v2/${restBase}?per_page=100&page=${page}&status=publish&_embed=wp:featuredmedia`);
    items.push(...body);
    if (page >= Number(headers.get("x-wp-totalpages") ?? 1)) return items;
  }
}

const downloads = new Map(); // remote URL → local URL
const failures = [];
async function localMedia(url) {
  const clean = url.split("?")[0];
  const m = clean.match(/\/wp-content\/uploads\/(.+)$/);
  if (!m) return url;
  const local = `/media/${m[1]}`;
  if (!downloads.has(clean)) {
    downloads.set(clean, local);
    if (!existsSync(`public${local}`)) {
      try {
        await download(clean.startsWith("http") ? clean : `${site}${clean}`, `public${local}`);
      } catch (err) {
        failures.push(`${clean}: ${err.message}`);
      }
    }
  }
  return local;
}

/** Same-site links become root-relative so they keep working on the new host. */
function localLink(url) {
  try {
    const u = new URL(url, site);
    if (u.host !== host) return url;
    if (u.pathname.includes("/wp-content/uploads/")) return url; // handled as media
    return u.pathname + u.search + u.hash;
  } catch {
    return url;
  }
}

async function convert(html) {
  // Download every upload referenced in the HTML first, then rewrite synchronously.
  const urls = new Set();
  for (const m of html.matchAll(/(?:src|href|srcset)="([^"]+)"/g)) {
    for (const part of m[1].split(",")) {
      const u = part.trim().split(/\s+/)[0];
      if (u.includes("/wp-content/uploads/")) urls.add(new URL(u, site).toString());
    }
  }
  for (const u of urls) await localMedia(u);
  return htmlToMarkdown(html, (url) => {
    if (url.includes("/wp-content/uploads/")) return downloads.get(new URL(url, site).toString().split("?")[0]) ?? url;
    return localLink(url);
  });
}

const forms = [];
const types = Object.values((await getJson(`${site}/wp-json/wp/v2/types`)).body).filter(
  (t) => t.rest_base && !SKIP_TYPES.has(t.slug) && (t.viewable ?? true),
);
let count = 0;

for (const type of types) {
  let items;
  try {
    items = await all(type.rest_base);
  } catch (err) {
    console.log(`Skipping ${type.slug}: ${err.message}`);
    continue;
  }
  console.log(`${type.slug}: ${items.length}`);
  for (const item of items) {
    const title = decodeEntities(item.title?.rendered ?? item.slug);
    const html = item.content?.rendered ?? "";
    if (/<form[\s>]/i.test(html) || /\[contact-form-7/i.test(html)) forms.push(item.link);
    const body = await convert(html);
    const description = item.excerpt?.rendered ? stripTags(item.excerpt.rendered).replace(/\s*\[…\]$|\s*\[&hellip;\]$/, "") : undefined;
    const featured = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const image = featured ? await localMedia(featured) : undefined;

    if (type.slug === "post") {
      await writeText(
        `src/content/news/${item.slug}.md`,
        frontMatter({ title, date: item.date?.slice(0, 10), description, image, wordpressId: item.id }) + body,
      );
    } else {
      const path = new URL(item.link).pathname.replace(/^\/|\/$/g, "") || "startseite";
      await writeText(
        `src/content/pages/${path}.md`,
        frontMatter({ title, description: type.slug === "page" ? undefined : description, updated: item.modified?.slice(0, 10), wordpressId: item.id }) +
          (image && type.slug !== "page" ? `![](${image})\n\n` : "") +
          body,
      );
    }
    count++;
  }
}

console.log(`Wrote ${count} entries and ${downloads.size} media files.`);
if (forms.length) console.log(`These pages contain forms that need a replacement:\n  ${forms.join("\n  ")}`);
if (failures.length) console.log(`Could not download ${failures.length} files:\n  ${failures.join("\n  ")}`);
