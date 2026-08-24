import type { RawSourceItem } from "../types.js";

/**
 * PubMed (NCBI E-utilities) — free, no auth required for low volume.
 * https://www.ncbi.nlm.nih.gov/books/NBK25501/
 *
 * Strategy: run a handful of curated search terms (one per broad area we
 * already cover on the site), pull the most recent N results for each, fetch
 * their abstracts, and hand them to the LLM summarizer as review-tier drafts.
 * This is not meant to be exhaustive — it's a discovery feed for "did anything
 * change recently in a topic we already teach."
 */

const EUTILS_BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils";

// Add an NCBI_API_KEY (secret) to raise the rate limit from 3req/s to 10req/s
// if this list grows — https://www.ncbi.nlm.nih.gov/account/settings/
const API_KEY = process.env.NCBI_API_KEY;

export const PUBMED_SEARCH_TERMS: { termo: string; especialidade: string }[] = [
  { termo: "hypertension guideline", especialidade: "Cardiologia" },
  { termo: "heart failure guideline", especialidade: "Cardiologia" },
  { termo: "type 2 diabetes guideline", especialidade: "Endocrinologia" },
  { termo: "asthma COPD guideline", especialidade: "Pneumologia" },
  { termo: "sepsis guideline", especialidade: "Infectologia" },
  { termo: "chronic kidney disease guideline", especialidade: "Nefrologia" },
  { termo: "rheumatoid arthritis guideline", especialidade: "Reumatologia" },
];

const RESULTS_PER_TERM = 3;

function withKey(url: string): string {
  return API_KEY ? `${url}&api_key=${API_KEY}` : url;
}

async function esearch(term: string): Promise<string[]> {
  const url = withKey(
    `${EUTILS_BASE}/esearch.fcgi?db=pubmed&retmode=json&sort=pub+date&retmax=${RESULTS_PER_TERM}&term=${encodeURIComponent(
      term
    )}`
  );
  const res = await fetch(url);
  if (!res.ok) throw new Error(`PubMed esearch falhou (${res.status}) para "${term}"`);
  const json = (await res.json()) as { esearchresult?: { idlist?: string[] } };
  return json.esearchresult?.idlist ?? [];
}

interface EsummaryDocsum {
  uid: string;
  title: string;
  pubdate: string; // e.g. "2026 Jul 15" or "2026"
  fulljournalname?: string;
}

async function esummary(ids: string[]): Promise<EsummaryDocsum[]> {
  if (ids.length === 0) return [];
  const url = withKey(
    `${EUTILS_BASE}/esummary.fcgi?db=pubmed&retmode=json&id=${ids.join(",")}`
  );
  const res = await fetch(url);
  if (!res.ok) throw new Error(`PubMed esummary falhou (${res.status})`);
  const json = (await res.json()) as { result?: Record<string, unknown> };
  const result = json.result ?? {};
  return ids
    .map((id) => result[id] as EsummaryDocsum | undefined)
    .filter((d): d is EsummaryDocsum => Boolean(d));
}

async function efetchAbstract(id: string): Promise<string> {
  const url = withKey(`${EUTILS_BASE}/efetch.fcgi?db=pubmed&retmode=text&rettype=abstract&id=${id}`);
  const res = await fetch(url);
  if (!res.ok) return "";
  return (await res.text()).trim();
}

function parsePubDate(pubdate: string): string {
  // NCBI pubdate is loosely formatted ("2026 Jul 15", "2026 Jul", "2026").
  // Best-effort parse; fall back to empty string rather than a wrong date.
  const parsed = new Date(pubdate);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toISOString().slice(0, 10);
}

export async function fetchPubMed(): Promise<RawSourceItem[]> {
  const items: RawSourceItem[] = [];

  for (const { termo, especialidade } of PUBMED_SEARCH_TERMS) {
    try {
      const ids = await esearch(termo);
      const summaries = await esummary(ids);
      for (const doc of summaries) {
        const abstract = await efetchAbstract(doc.uid);
        items.push({
          titulo: doc.title,
          url: `https://pubmed.ncbi.nlm.nih.gov/${doc.uid}/`,
          data: parsePubDate(doc.pubdate),
          corpoOriginal: abstract || doc.title,
          fonteNome: `PubMed${doc.fulljournalname ? ` — ${doc.fulljournalname}` : ""}`,
          especialidadeSugerida: especialidade,
        });
        // NCBI etiquette: stay well under the rate limit even with an API key.
        await new Promise((r) => setTimeout(r, API_KEY ? 120 : 350));
      }
    } catch (err) {
      console.warn(`[pubmed] falhou para termo "${termo}":`, (err as Error).message);
    }
  }

  return items;
}
