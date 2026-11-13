// Imports a Confluence space into src/content/wiki as Markdown, with images and attachments in public/wiki-files.
// Usage: node scripts/import-confluence.mjs [--base https://x.atlassian.net] [--space MR]
// Public spaces need no login. Otherwise set CONFLUENCE_EMAIL and CONFLUENCE_API_TOKEN.
import { rm } from "node:fs/promises";
import { basename, extname } from "node:path";
import { parseArgs } from "node:util";
import { download, frontMatter, getJson, htmlToMarkdown, slugify, writeText } from "./lib/convert.mjs";

const { values } = parseArgs({
  options: {
    base: { type: "string", default: "https://digitaleinitiativen.atlassian.net" },
    space: { type: "string", default: "MR" },
  },
});
const base = values.base.replace(/\/+$/, "");
const auth = process.env.CONFLUENCE_EMAIL && process.env.CONFLUENCE_API_TOKEN
  ? { Authorization: `Basic ${Buffer.from(`${process.env.CONFLUENCE_EMAIL}:${process.env.CONFLUENCE_API_TOKEN}`).toString("base64")}` }
  : {};

const WIKI_DIR = "src/content/wiki";
const FILES_DIR = "public/wiki-files";

async function allPages() {
  const pages = [];
  let start = 0;
  for (;;) {
    const url = `${base}/wiki/rest/api/content?spaceKey=${values.space}&type=page&status=current&limit=50&start=${start}` +
      `&expand=body.export_view,ancestors,version,extensions.position`;
    const { body } = await getJson(url, auth);
    pages.push(...body.results);
    if (body.results.length < 50) return pages;
    start += 50;
  }
}

async function attachments(pageId) {
  const out = [];
  let start = 0;
  for (;;) {
    const { body } = await getJson(`${base}/wiki/rest/api/content/${pageId}/child/attachment?limit=50&start=${start}`, auth);
    out.push(...body.results);
    if (body.results.length < 50) return out;
    start += 50;
  }
}

const pages = await allPages();
console.log(`Found ${pages.length} pages in space ${values.space}`);
const byId = new Map(pages.map((p) => [p.id, p]));

// The space home page has no ancestors inside the space; it becomes /wiki/.
const roots = pages.filter((p) => !p.ancestors.some((a) => byId.has(a.id)));
const home = roots.length === 1 ? roots[0] : undefined;
const hasChildren = new Set(pages.flatMap((p) => (p.ancestors.at(-1) ? [p.ancestors.at(-1).id] : [])));

// Unique folder names per parent.
const slugOf = new Map();
const taken = new Map();
for (const p of pages) {
  if (p === home) continue;
  const parent = p.ancestors.filter((a) => byId.has(a.id) && byId.get(a.id) !== home).at(-1)?.id ?? "root";
  let slug = slugify(p.title);
  const used = taken.get(parent) ?? new Set();
  for (let i = 2; used.has(slug); i++) slug = `${slugify(p.title)}-${i}`;
  used.add(slug);
  taken.set(parent, used);
  slugOf.set(p.id, slug);
}

/** Path of a page inside the wiki, e.g. "maschinen/lasercutter". */
function pathOf(p) {
  if (p === home) return "";
  const chain = p.ancestors.filter((a) => byId.has(a.id) && byId.get(a.id) !== home).map((a) => slugOf.get(a.id));
  return [...chain, slugOf.get(p.id)].join("/");
}
const hrefOf = (p) => (pathOf(p) ? `/wiki/${pathOf(p)}/` : "/wiki/");

await rm(WIKI_DIR, { recursive: true, force: true });
await rm(FILES_DIR, { recursive: true, force: true });

let fileCount = 0;
const failures = [];
for (const p of pages) {
  const files = new Map(); // attachment title → local URL
  for (const a of await attachments(p.id)) {
    const name = `${slugify(basename(a.title, extname(a.title)))}${extname(a.title).toLowerCase()}`;
    const local = `${FILES_DIR}/${p.id}/${name}`;
    try {
      await download(`${base}/wiki${a._links.download}`, local, auth);
      files.set(a.title, `/wiki-files/${p.id}/${name}`);
      fileCount++;
    } catch (err) {
      failures.push(`${p.title}: ${a.title}: ${err.message}`);
    }
  }

  const rewrite = (url, kind) => {
    const abs = url.startsWith("/") ? `${base}${url.startsWith("/wiki") ? "" : "/wiki"}${url}` : url;
    if (!abs.startsWith(base)) return url;
    const u = new URL(abs);
    const att = u.pathname.match(/\/download\/(?:attachments|thumbnails)\/\d+\/([^/]+)$/);
    if (att) return files.get(decodeURIComponent(att[1])) ?? url;
    const page = u.pathname.match(/\/pages\/(\d+)/) ?? [null, u.searchParams.get("pageId")];
    if (page[1] && byId.has(page[1])) return hrefOf(byId.get(page[1])) + (u.hash || "");
    return kind === "image" ? url : abs;
  };

  const markdown = htmlToMarkdown(p.body.export_view.value, rewrite);
  const path = pathOf(p);
  const file = p === home ? "index.md" : hasChildren.has(p.id) ? `${path}/index.md` : `${path}.md`;
  const position = p.extensions?.position;
  await writeText(
    `${WIKI_DIR}/${file}`,
    frontMatter({
      title: p === home ? "Makerlab-Wiki" : p.title,
      updated: p.version?.when?.slice(0, 10),
      order: typeof position === "number" && position >= 0 ? position : undefined,
      confluenceId: p.id,
    }) + markdown,
  );
}

if (!home) {
  await writeText(`${WIKI_DIR}/index.md`, frontMatter({ title: "Makerlab-Wiki", order: 0 }) + "Alle Anleitungen findest du links.");
}

console.log(`Wrote ${pages.length} pages and ${fileCount} files.`);
if (failures.length) {
  console.log(`Could not download ${failures.length} attachments:\n  ${failures.join("\n  ")}`);
}
