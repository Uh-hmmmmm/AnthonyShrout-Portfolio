// Prefix a public-folder path with Vite's base URL so it works on Pages and Cloudflare alike.
export function asset(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const trimmed = path.replace(/^\/+/, "");
  return `${base}${trimmed}`;
}
