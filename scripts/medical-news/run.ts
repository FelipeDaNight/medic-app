import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { fetchPubMed } from "./sources/pubmed.js";
import { fetchAllRssFeeds } from "./sources/rss.js";
import { fetchGovBr } from "./sources/govbr.js";
import { loadKnownUrls, filterUnseen } from "./lib/dedupe.js";
import { summarizeAll } from "./lib/summarize.js";
import { appendUpdates } from "./lib/write-updates.js";
import type { RawSourceItem, SourceTier } from "./types.js";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, "../..");
const UPDATES_FILE = resolve(REPO_ROOT, "src/data/updates.ts");
const UPDATES_PENDING_FILE = resolve(REPO_ROOT, "src/data/updates-pending.ts");

function requireArgTier(): SourceTier {
  const arg = process.argv.find((a) => a.startsWith("--tier="));
  const tier = arg?.split("=")[1];
  if (tier !== "oficial" && tier !== "revisao") {
    console.error('Uso: tsx run.ts --tier=oficial | --tier=revisao');
    process.exit(1);
  }
  return tier;
}

async function fetchForTier(tier: SourceTier): Promise<RawSourceItem[]> {
  if (tier === "oficial") {
    // Só as fontes governamentais restritas — ver decisão do usuário em
    // docs/BACKEND-NOTICIAS.md sobre por que só essas ficam sem revisão humana.
    return fetchGovBr();
  }
  // tier === "revisao": tudo mais.
  const [pubmed, rss] = await Promise.all([fetchPubMed(), fetchAllRssFeeds()]);
  return [...pubmed, ...rss];
}

async function main() {
  const tier = requireArgTier();
  console.log(`[medical-news] rodando tier="${tier}"...`);

  const targetFile = tier === "oficial" ? UPDATES_FILE : UPDATES_PENDING_FILE;
  const exportName = tier === "oficial" ? "updates" : "updatesPending";

  const raw = await fetchForTier(tier);
  console.log(`[medical-news] ${raw.length} itens brutos encontrados.`);

  const known = loadKnownUrls(targetFile);
  // No tier "oficial" também não repete algo já promovido manualmente para
  // updates.ts a partir do pending — então checa nos dois arquivos.
  const knownExtra = tier === "oficial" ? loadKnownUrls(UPDATES_PENDING_FILE) : loadKnownUrls(UPDATES_FILE);
  for (const url of knownExtra) known.add(url);

  const unseen = filterUnseen(raw, known);
  console.log(`[medical-news] ${unseen.length} itens novos (não vistos antes).`);

  if (unseen.length === 0) {
    console.log("[medical-news] nada novo — encerrando sem alterar arquivos.");
    return;
  }

  const summarized = await summarizeAll(unseen);
  console.log(`[medical-news] ${summarized.length}/${unseen.length} resumidos com sucesso pela LLM.`);

  const count = appendUpdates(targetFile, exportName, summarized);
  console.log(`[medical-news] ${count} itens escritos em ${targetFile}.`);
}

main().catch((err) => {
  console.error("[medical-news] erro fatal:", err);
  process.exit(1);
});
