import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

/** "Vinylcutter 101: Grundlagen!" → "vinylcutter-101-grundlagen" (keeps German readable: ä → ae). */
export function slugify(text) {
  return (
    text
      .toLowerCase()
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss")
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "seite"
  );
}

export function decodeEntities(text) {
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

export function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

/**
 * HTML → Markdown. `rewriteUrl(url, kind)` may return a new URL for links ("link") and images ("image"),
 * e.g. to point at downloaded files or at the new page paths.
 */
export function htmlToMarkdown(html, rewriteUrl = (u) => u) {
  const td = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" });
  td.use(gfm);
  // Confluence and WordPress wrap a lot in layout divs and spans that carry no meaning.
  td.remove(["script", "style", "noscript"]);
  td.addRule("image", {
    filter: "img",
    replacement: (_, node) => {
      const src = node.getAttribute("src") || node.getAttribute("data-image-src") || "";
      if (!src) return "";
      const alt = (node.getAttribute("alt") || "").replace(/[[\]]/g, "");
      return `![${alt}](${rewriteUrl(src, "image")})`;
    },
  });
  td.addRule("link", {
    filter: (node) => node.nodeName === "A" && node.getAttribute("href"),
    replacement: (content, node) => {
      const href = rewriteUrl(node.getAttribute("href"), "link");
      const text = content.trim();
      if (!text) return "";
      return `[${text}](${href})`;
    },
  });
  return td
    .turndown(html)
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** YAML front matter with safe quoting. */
export function frontMatter(data) {
  const lines = Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => `${k}: ${typeof v === "number" ? v : JSON.stringify(String(v))}`);
  return `---\n${lines.join("\n")}\n---\n\n`;
}

export async function writeText(path, text) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, text.endsWith("\n") ? text : `${text}\n`);
}

export async function download(url, path, headers = {}) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, Buffer.from(await res.arrayBuffer()));
}

export async function getJson(url, headers = {}) {
  const res = await fetch(url, { headers: { Accept: "application/json", ...headers } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return { body: await res.json(), headers: res.headers };
}
