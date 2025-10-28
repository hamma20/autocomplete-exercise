export async function fetchJson<T>(url: string): Promise<T> {
  const { readFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  const filePath = join(process.cwd(), "public", url.replace(/^\//, ""));
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}
