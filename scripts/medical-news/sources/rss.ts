import type { RawSourceItem } from "../types.js";

/**
 * Generic RSS/Atom source — works for any feed (WordPress /feed/, Atom, etc.).
 * Confirmed working example: SBP (Sociedade Brasileira de Pediatria),
 * https://www.sbp.com.br/feed/ — use this as the template when adding a new
 * sociedade médica or faculdade de medicina that publishes a feed.
 *
 * Not every institution has one (e.g. SBC's site returned 404 on /feed at the
 * time this was written) — verify with `curl -I <url>` before adding an entry.
 */

export interface RssFeedDef {
  nome: string; // becomes ClinicalUpdate.fonte
  url: string;
  especialidade: string;
}

// Add new sociedades/faculdades here once you've confirmed the feed URL
// resolves (see module comment above). Left intentionally short — this is a
// starting point, not a finished list.
export const RSS_FEEDS: RssFeedDef[] = [
  { nome: "SBP (Sociedade Brasileira de Pediatria)", url: "https://www.sbp.com.br/feed/", especialidade: "Pediatria" },
  // { nome: "Nome da faculdade/sociedade", url: "https://.../feed", especialidade: "..." },
];

const ITEMS_PER_FEED = 5;

function extractTag(xml: string, tag: string): string | null {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  if (!match) return null;
  return match[1]
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .trim();
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function parseRssDate(raw: string | null): string {
  if (!raw) return "";
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toISOString().slice(0, 10);
}

export async function fetchRssFeed(feed: RssFeedDef): Promise<RawSourceItem[]> {
  const res = await fetch(feed.url, { headers: { "User-Agent": "RxEstudanteBot/1.0" } });
  if (!res.ok) throw new Error(`RSS "${feed.nome}" retornou ${res.status}`);
  const xml = await res.text();

  const itemBlocks = xml.match(/<item[^>]*>[\s\S]*?<\/item>/gi) ?? [];

  return itemBlocks.slice(0, ITEMS_PER_FEED).map((block): RawSourceItem => {
    const titulo = stripHtml(extractTag(block, "title") ?? "(sem título)");
    const link = (extractTag(block, "link") ?? "").trim();
    const description = stripHtml(
      extractTag(block, "content:encoded") ?? extractTag(block, "description") ?? ""
    );
    const pubDate = extractTag(block, "pubDate");

    return {
      titulo,
      url: link,
      data: parseRssDate(pubDate),
      corpoOriginal: description || titulo,
      fonteNome: feed.nome,
      especialidadeSugerida: feed.especialidade,
    };
  });
}

export async function fetchAllRssFeeds(): Promise<RawSourceItem[]> {
  const results: RawSourceItem[] = [];
  for (const feed of RSS_FEEDS) {
    try {
      results.push(...(await fetchRssFeed(feed)));
    } catch (err) {
      console.warn(`[rss] falhou para "${feed.nome}":`, (err as Error).message);
    }
  }
  return results;
}
