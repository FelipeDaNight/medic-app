import { MESH_REGIAO, ossos } from "@/data/skeletalSystem";
import type { Osso, RegiaoEsqueleto } from "@/data/types";

export interface BoneEntry {
  key: string;
  displayName: string;
  meshNames: string[];
  osso: Osso | null;
}

function humanizeMeshName(meshBaseName: string): string {
  return meshBaseName
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function baseNameOf(meshName: string): string {
  return meshName.replace(/_(L|R|left|right)$/i, "");
}

export function boneEntriesForRegion(regiao: RegiaoEsqueleto): BoneEntry[] {
  const authored = ossos.filter((o) => o.regiao === regiao);
  const authoredMeshNames = new Set(authored.map((o) => o.meshNames).flat());

  const entries: BoneEntry[] = authored.map((osso) => ({
    key: osso.slug,
    displayName: osso.nomeComum,
    meshNames: osso.meshNames,
    osso,
  }));

  const groups = new Map<string, string[]>();
  for (const [meshName, meshRegiao] of Object.entries(MESH_REGIAO)) {
    if (meshRegiao !== regiao || authoredMeshNames.has(meshName)) continue;
    const base = baseNameOf(meshName);
    const list = groups.get(base) ?? [];
    list.push(meshName);
    groups.set(base, list);
  }

  const groupedEntries = Array.from(groups.entries())
    .map(([base, meshNames]) => ({
      key: base,
      displayName: humanizeMeshName(base),
      meshNames,
      osso: null,
    }))
    .sort((a, b) => a.displayName.localeCompare(b.displayName, "pt-BR"));

  return [...entries.sort((a, b) => a.displayName.localeCompare(b.displayName, "pt-BR")), ...groupedEntries];
}

export function regionMeshNames(regiao: RegiaoEsqueleto): Set<string> {
  const names = new Set<string>();
  for (const [meshName, meshRegiao] of Object.entries(MESH_REGIAO)) {
    if (meshRegiao === regiao) names.add(meshName);
  }
  return names;
}
