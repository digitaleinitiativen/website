// Prefixes root-relative links and images in Markdown with the base path, so content can always write "/wiki/...".
export default function rehypeBase(base) {
  const prefix = (base || "/").replace(/\/+$/, "");
  const fix = (value) => (typeof value === "string" && value.startsWith("/") && !value.startsWith("//") ? `${prefix}${value}` : value);
  const walk = (node) => {
    if (node.type === "element" && node.properties) {
      if ("href" in node.properties) node.properties.href = fix(node.properties.href);
      if ("src" in node.properties) node.properties.src = fix(node.properties.src);
    }
    // Raw HTML blocks (e.g. tables imported from Confluence) are not parsed into elements, so fix their attributes as text.
    if (node.type === "raw" && typeof node.value === "string") {
      node.value = node.value.replace(/\b(src|href)="(\/(?!\/)[^"]*)"/g, (_, attr, url) => `${attr}="${fix(url)}"`);
    }
    node.children?.forEach(walk);
  };
  return () => (tree) => {
    if (prefix) walk(tree);
  };
}
