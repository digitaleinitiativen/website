import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { site } from "../../site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function GET(context: APIContext) {
  const base = new URL(import.meta.env.BASE_URL, context.site).toString().replace(/\/$/, "");
  const news = (await getCollection("news")).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const items = news
    .slice(0, 30)
    .map(
      (n) =>
        `<item><title>${esc(n.data.title)}</title><link>${base}/geschichten/${n.id}/</link>` +
        `<guid>${base}/geschichten/${n.id}/</guid><pubDate>${n.data.date.toUTCString()}</pubDate>` +
        (n.data.description ? `<description>${esc(n.data.description)}</description>` : "") +
        `</item>`,
    )
    .join("");
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(site.name)}: What's up?</title>` +
    `<link>${base}/geschichten/</link><description>${esc(site.tagline)}</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
