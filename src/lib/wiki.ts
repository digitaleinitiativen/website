import type { CollectionEntry } from "astro:content";

export type WikiEntry = CollectionEntry<"wiki">;

/** URL of a wiki entry: "lasercutter/index" → /wiki/lasercutter/, "index" → /wiki/ */
export function wikiHref(id: string): string {
  const path = id.replace(/(^|\/)index$/, "");
  return path ? `/wiki/${path}/` : "/wiki/";
}

export interface WikiNode {
  entry?: WikiEntry;
  name: string;
  children: WikiNode[];
}

/** Builds the sidebar tree from the folder structure. */
export function wikiTree(entries: WikiEntry[]): WikiNode {
  const root: WikiNode = { name: "", children: [] };
  for (const entry of entries) {
    const parts = entry.id.split("/");
    const isIndex = parts.at(-1) === "index";
    if (isIndex) parts.pop();
    let node = root;
    for (const part of parts) {
      let child = node.children.find((c) => c.name === part);
      if (!child) {
        child = { name: part, children: [] };
        node.children.push(child);
      }
      node = child;
    }
    if (isIndex || !node.entry) node.entry = entry;
  }
  const sort = (n: WikiNode) => {
    n.children.sort(
      (a, b) =>
        (a.entry?.data.order ?? 999) - (b.entry?.data.order ?? 999) ||
        (a.entry?.data.title ?? a.name).localeCompare(b.entry?.data.title ?? b.name, "de"),
    );
    n.children.forEach(sort);
  };
  sort(root);
  return root;
}
