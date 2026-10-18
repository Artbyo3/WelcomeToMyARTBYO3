// Rebuilds data/gallery.json by scanning the art/ folder.
//
//   node tools/generate-manifest.mjs
//
// Folder layout it expects (one folder per year is all it needs):
//
//   art/2019/enso.svg
//   art/2020/thumbs/seigaiha.jpg   <- optional thumbnail
//   art/2024/holiday/beach.jpg     <- subfolders are fine
//
// It never overwrites the details you typed by hand: titles, mediums,
// collections, tags and featured flags are kept for any file it has seen
// before, matched by path (or by id). Only new files get fresh entries.

import { readFile, writeFile, readdir, mkdir } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { join, dirname, relative, basename, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ART = join(root, "art");
const OUT = join(root, "data", "gallery.json");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg", ".tif", ".tiff"]);
const GENERIC = /^(img|dsc|dscf|photo|image|scan|screenshot|untitled|pic|dcim)[-_ ]?\d+/i;

const slug = (s) => s.toLowerCase().trim().replace(/[^\w]+/g, "-").replace(/^-|-$/g, "");
const titleCase = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = join(dir, entry.name);
    const rel = relative(root, full).split(sep).join("/");
    if (entry.isDirectory()) {
      if (entry.name === "thumbs" || entry.name === "node_modules" || entry.name === "drafts") continue;
      out.push(...(await walk(full)));
    } else if (IMAGE_EXT.has(extname(entry.name).toLowerCase())) {
      out.push(rel);
    }
  }
  return out;
}

function deriveTitle(name) {
  const base = basename(name, extname(name)).replace(/^\d+[-_ ]*/, "");
  if (!base || GENERIC.test(base) || /^\d+$/.test(base)) return "";
  return titleCase(base.replace(/[-_]+/g, " "));
}

function deriveYear(relPath, absPath) {
  const folderYear = relPath.split("/").slice(0, -1).find((p) => /^(19|20)\d{2}$/.test(p));
  if (folderYear) return Number(folderYear);
  try {
    return new Date(statSync(absPath).mtime).getFullYear();
  } catch {
    return null;
  }
}

async function readExisting() {
  if (!existsSync(OUT)) return { site: {}, collections: [], works: [] };
  try {
    return JSON.parse(await readFile(OUT, "utf8"));
  } catch (e) {
    console.warn("  ! existing gallery.json could not be parsed, starting fresh:", e.message);
    return { site: {}, collections: [], works: [] };
  }
}

function thumbnailFor(relPath) {
  const parts = relPath.split("/");
  const name = parts.pop();
  const year = parts.shift();
  const candidate = ["art", year, "thumbs", ...parts, name].join("/");
  return existsSync(join(root, candidate)) ? candidate : "";
}

async function main() {
  if (!existsSync(ART)) {
    console.error("No art/ folder found. Create art/<year>/ and add images first.");
    process.exit(1);
  }

  const existing = await readExisting();
  const seenIds = new Set();
  const bySrc = new Map(existing.works.map((w) => [w.src, w]));

  const files = (await walk(ART)).sort();
  const works = [];
  let added = 0;
  let kept = 0;

  for (const rel of files) {
    const abs = join(root, rel);
    const prior = bySrc.get(rel);
    const title = prior ? prior.title ?? "" : deriveTitle(rel);
    const year = prior?.year ?? deriveYear(rel, abs);

    let id = prior?.id || slug(deriveTitle(rel) || `${year || "x"}-${basename(rel, extname(rel))}`);
    while (seenIds.has(id)) id = `${id}-2`;
    seenIds.add(id);

    if (prior) kept++;
    else added++;

    works.push({
      id,
      src: rel,
      draftSrc: prior?.draftSrc || "",
      thumb: prior?.thumb || thumbnailFor(rel),
      title,
      titleJa: prior?.titleJa || "",
      subtitle: prior?.subtitle || "",
      year: year ?? null,
      medium: prior?.medium || "",
      collection: prior?.collection || "",
      colors: Array.isArray(prior?.colors) ? prior.colors : [],
      commentEn: prior?.commentEn || "",
      commentJa: prior?.commentJa || "",
      tags: Array.isArray(prior?.tags) ? prior.tags : [],
      ...(prior?.featured ? { featured: true } : {}),
    });
  }

  works.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

  const manifest = {
    site: existing.site || {},
    collections: existing.collections || [],
    works,
  };

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(manifest, null, 2) + "\n", "utf8");

  const years = [...new Set(works.map((w) => w.year).filter(Boolean))].sort();
  console.log(`gallery.json written: ${works.length} works (${added} new, ${kept} kept).`);
  if (years.length) console.log(`  years: ${years[0]}–${years[years.length - 1]}`);
  if (added) console.log("  Tip: open data/gallery.json to give the new works titles, mediums and collections.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
