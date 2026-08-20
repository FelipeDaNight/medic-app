"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PackageX } from "lucide-react";
import type { Medication } from "@/data/types";
import { TARJAS } from "@/data/types";
import { renameIndex } from "@/data/rename-index";
import { medicamentosIndex } from "@/data/medicamentos-index";
import { matches, normalize } from "@/lib/text";
import { SearchInput } from "@/components/ui/search-input";
import { FilterSelect } from "@/components/ui/filter-select";
import { EmptyState } from "@/components/ui/empty-state";
import { MedicationCard } from "@/components/cards/medication-card";
import { IndexEntryCard } from "@/components/cards/index-entry-card";
import { Badge } from "@/components/badges";

const MAX_INDEX_RESULTS = 24;

export function MedicationsExplorer({ medications }: { medications: Medication[] }) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("busca") ?? "");
  const [tarja, setTarja] = useState("");
  const [categoria, setCategoria] = useState("");

  const categorias = useMemo(
    () => Array.from(new Set(medications.map((m) => m.categoria))).sort((a, b) => a.localeCompare(b, "pt-BR")),
    [medications]
  );

  const curatedNames = useMemo(
    () => medications.flatMap((m) => [m.nome, ...m.nomeComercial]).map(normalize),
    [medications]
  );

  const filtered = useMemo(() => {
    return medications
      .filter((m) => matches(query, m.nome, m.nomeComercial, m.principioAtivo))
      .filter((m) => !tarja || m.tarja === tarja)
      .filter((m) => !categoria || m.categoria === categoria)
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }, [medications, query, tarja, categoria]);

  const tarjaOuCategoriaAtiva = Boolean(tarja || categoria);

  const renameMatches = useMemo(() => {
    if (!query.trim() || tarjaOuCategoriaAtiva) return [];
    return renameIndex.filter((e) => {
      const n = normalize(e.nome);
      const jaExiste = curatedNames.some((c) => n === c || n.startsWith(`${c} `) || c.startsWith(`${n} `));
      return !jaExiste && matches(query, e.nome);
    });
  }, [query, tarjaOuCategoriaAtiva, curatedNames]);

  const renameNames = useMemo(() => renameIndex.map((e) => normalize(e.nome)), []);

  const fallbackMatches = useMemo(() => {
    if (!query.trim() || tarjaOuCategoriaAtiva) return [];
    return medicamentosIndex.filter((e) => {
      const n = normalize(e.nome);
      const jaCurado = curatedNames.some((c) => n === c || n.startsWith(`${c} `));
      const jaNoRename = renameNames.some((r) => n === r || n.startsWith(`${r} `) || r.startsWith(`${n} `));
      return !jaCurado && !jaNoRename && matches(query, e.nome);
    });
  }, [query, tarjaOuCategoriaAtiva, curatedNames, renameNames]);

  const hasActiveFilters = query || tarja || categoria;
  const totalEncontrado = filtered.length + renameMatches.length + fallbackMatches.length;

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <SearchInput value={query} onChange={setQuery} placeholder="Nome, nome comercial ou princípio ativo..." />
        <div className="flex flex-wrap gap-3">
          <FilterSelect
            label="Filtrar por tarja"
            value={tarja}
            onChange={setTarja}
            options={[...TARJAS]}
            allLabel="Todas as tarjas"
          />
          <FilterSelect
            label="Filtrar por categoria"
            value={categoria}
            onChange={setCategoria}
            options={categorias}
            allLabel="Todas as categorias"
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-foreground-subtle">
        {filtered.length} {filtered.length === 1 ? "medicamento com ficha completa" : "medicamentos com ficha completa"}
        {renameMatches.length > 0 && <> · +{renameMatches.length} no índice RENAME</>}
        {fallbackMatches.length > 0 && <> · +{fallbackMatches.length} no índice não verificado</>}
      </p>

      {totalEncontrado === 0 ? (
        <div className="mt-4">
          <EmptyState
            icon={PackageX}
            title="Nenhum medicamento encontrado"
            description={
              hasActiveFilters
                ? "Tente ajustar os termos da busca ou remover algum filtro."
                : "Ainda não há medicamentos cadastrados."
            }
          />
        </div>
      ) : (
        <>
          {filtered.length > 0 && (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((medication) => (
                <MedicationCard key={medication.slug} medication={medication} />
              ))}
            </div>
          )}

          {renameMatches.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                Índice RENAME 2022 (Ministério da Saúde) — sem ficha completa ainda
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {renameMatches.slice(0, MAX_INDEX_RESULTS).map((entry) => (
                  <IndexEntryCard
                    key={entry.nome}
                    nome={entry.nome}
                    badges={[
                      <Badge key="cat">{entry.categoria}</Badge>,
                      <Badge key="comp" className="border-dashed">
                        {entry.componente}
                      </Badge>,
                    ]}
                    nota="No índice oficial RENAME — nome, classe ATC e componente de financiamento verificados; ainda sem ficha clínica completa."
                  />
                ))}
              </div>
            </div>
          )}

          {fallbackMatches.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                Índice não verificado (base bulario.com, 2018)
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {fallbackMatches.slice(0, MAX_INDEX_RESULTS).map((entry) => (
                  <IndexEntryCard
                    key={entry.nome}
                    nome={entry.nome}
                    badges={[<Badge key="fonte">fonte não oficial</Badge>]}
                    nota="Fora da RENAME (provavelmente nome comercial). Sem princípio ativo, tarja ou posologia verificados."
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
