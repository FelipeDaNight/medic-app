import { readFileSync, writeFileSync } from "node:fs";
import type { GeneratedUpdate } from "../types.js";

function toTsObjectLiteral(update: GeneratedUpdate): string {
  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const arr = (items: string[]) => `[\n${items.map((i) => `      "${esc(i)}",`).join("\n")}\n    ]`;

  return `  {
    slug: "${esc(update.slug)}",
    titulo: "${esc(update.titulo)}",
    resumo: "${esc(update.resumo)}",
    especialidade: "${esc(update.especialidade)}",
    importancia: "${update.importancia}",
    fonte: "${esc(update.fonte)}",
    data: "${update.data}",
    destaque: "${esc(update.destaque)}",
    corpo: ${arr(update.corpo)},
  },`;
}

/**
 * Appends new ClinicalUpdate-shaped objects into an existing `export const
 * X: ClinicalUpdate[] = [ ... ];` array in a TypeScript source file, right
 * before the closing `];`. Deliberately dumb string surgery instead of a real
 * AST transform — this repo's data files are hand-formatted and small enough
 * that a full TS compiler dependency isn't worth it for a CI script.
 */
export function appendUpdates(filePath: string, exportName: string, updates: GeneratedUpdate[]): number {
  if (updates.length === 0) return 0;

  const content = readFileSync(filePath, "utf8");
  const arrayDeclRe = new RegExp(`(export const ${exportName}[^=]*=\\s*\\[)([\\s\\S]*?)(\\n\\];)`);
  const match = content.match(arrayDeclRe);

  if (!match) {
    throw new Error(
      `Não encontrei "export const ${exportName}: ...[] = [ ... ];" em ${filePath} — o arquivo foi reformatado manualmente? Ajuste write-updates.ts.`
    );
  }

  const newEntries = updates.map(toTsObjectLiteral).join("\n");
  const rebuilt = content.replace(arrayDeclRe, `$1$2\n${newEntries}$3`);
  writeFileSync(filePath, rebuilt, "utf8");
  return updates.length;
}
