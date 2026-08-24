import { readFileSync } from "node:fs";
import type { RawSourceItem } from "../types.js";

/**
 * Avoid re-summarizing/re-adding an item already present. We match on the
 * source URL embedded in the existing file's `fonte` text — cheap, no extra
 * state file to maintain, good enough since each run only looks a few items
 * back per source.
 */
export function loadKnownUrls(filePath: string): Set<string> {
  try {
    const content = readFileSync(filePath, "utf8");
    const matches = content.match(/https?:\/\/[^\s"')]+/g) ?? [];
    return new Set(matches);
  } catch {
    return new Set(); // file doesn't exist yet — nothing known
  }
}

export function filterUnseen(items: RawSourceItem[], known: Set<string>): RawSourceItem[] {
  return items.filter((item) => item.url && !known.has(item.url));
}
