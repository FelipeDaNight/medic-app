// Duplicated from src/data/types.ts on purpose — this script runs standalone
// via tsx in CI and must not depend on the Next.js path-alias resolution.
export type Importancia = "Alta" | "Média" | "Baixa";

/**
 * A raw item as returned by a source fetcher, before LLM summarization.
 */
export interface RawSourceItem {
  titulo: string;
  url: string;
  data: string; // ISO date (yyyy-mm-dd) when known, "" otherwise
  corpoOriginal: string; // abstract / snippet / description as scraped, in the source's own language
  fonteNome: string; // human-readable source name, becomes ClinicalUpdate.fonte
  especialidadeSugerida?: string; // best-guess especialidade, LLM may override
}

/**
 * Tier controls the publish path:
 * - "oficial": restricted, curated official sources (Ministério da Saúde, ANVISA).
 *   Written directly into src/data/updates.ts and the PR auto-merges.
 * - "revisao": everything else (PubMed, sociedades médicas, faculdades). Written
 *   into src/data/updates-pending.ts (not imported by the site) and the PR is
 *   left open for a human to review before promoting items into updates.ts.
 */
export type SourceTier = "oficial" | "revisao";

export interface SourceConfig {
  id: string;
  tier: SourceTier;
  fetch(): Promise<RawSourceItem[]>;
}

/**
 * Shape written to src/data/updates.ts / updates-pending.ts — mirrors
 * src/data/types.ts ClinicalUpdate, duplicated here so this script has no
 * runtime dependency on the Next.js app (it runs standalone via tsx in CI).
 */
export interface GeneratedUpdate {
  slug: string;
  titulo: string;
  resumo: string;
  especialidade: string;
  importancia: Importancia;
  fonte: string;
  data: string;
  destaque: string;
  corpo: string[];
}
