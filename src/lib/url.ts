/** Prefixes a root-relative path with the site's base path (e.g. /website/ on github.io, / on the real domain). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  return path.startsWith("/") && !path.startsWith("//") ? `${base}${path}` : path;
}
