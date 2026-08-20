"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SearchX } from "lucide-react";
import type { Disease } from "@/data/types";
import { ETIOLOGIAS } from "@/data/types";
import { cid10Index } from "@/data/cid10-index";
import { matches } from "@/lib/text";
import { SearchInput } from "@/components/ui/search-input";
import { FilterSelect } from "@/components/ui/filter-select";
import { EmptyState } from "@/components/ui/empty-state";
import { DiseaseCard } from "@/components/cards/disease-card";
import { IndexEntryCard } from "@/components/cards/index-entry-card";

const MAX_INDEX_RESULTS = 24;

export function DiseasesExplorer({ diseases }: { diseases: Disease[] }) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("busca") ?? "");
  const [especialidade, setEspecialidade] = useState(() => searchParams.get("especialidade") ?? "");
  const [etiologia, setEtiologia] = useState("");

  const especialidades = useMemo(
    () => Array.from(new Set(diseases.map((d) => d.especialidade))).sort((a, b) => a.localeCompare(b, "pt-BR")),
    [diseases]
  );

  const etiologiasDisponiveis = useMemo(
    () => ETIOLOGIAS.filter((e) => diseases.some((d) => d.etiologia === e)),
    [diseases]
  );

  const curatedCodes = useMemo(() => new Set(diseases.map((d) => d.cid10)), [diseases]);

  const filtered = useMemo(() => {
    return diseases
      .filter((d) => matches(query, d.nome, d.sinonimos, d.cid10))
      .filter((d) => !especialidade || d.especialidade === especialidade)
      .filter((d) => !etiologia || d.etiologia === etiologia)
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }, [diseases, query, especialidade, etiologia]);

  const especialidadeOuEtiologiaAtiva = Boolean(especialidade || etiologia);

  const indexMatches = useMemo(() => {
    if (!query.trim() || especialidadeOuEtiologiaAtiva) return [];
    return cid10Index.filter((e) => !curatedCodes.has(e.codigo) && matches(query, e.nome, e.codigo));
  }, [query, especialidadeOuEtiologiaAtiva, curatedCodes]);

  const hasActiveFilters = query || especialidade || etiologia;
  const totalEncontrado = filtered.length + indexMatches.length;

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <SearchInput value={query} onChange={setQuery} placeholder="Nome, sinônimo ou CID-10..." />
        <div className="flex flex-wrap gap-3">
          <FilterSelect
            label="Filtrar por especialidade"
            value={especialidade}
            onChange={setEspecialidade}
            options={especialidades}
            allLabel="Todas as especialidades"
          />
          <FilterSelect
            label="Filtrar por etiologia"
            value={etiologia}
            onChange={setEtiologia}
            options={[...etiologiasDisponiveis]}
            allLabel="Todas as etiologias"
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-foreground-subtle">
        {filtered.length} {filtered.length === 1 ? "doença com ficha completa" : "doenças com ficha completa"}
        {indexMatches.length > 0 && (
          <> · +{indexMatches.length} no índice CID-10{indexMatches.length > MAX_INDEX_RESULTS ? ` (mostrando ${MAX_INDEX_RESULTS})` : ""}</>
        )}
        {!query.trim() && !especialidadeOuEtiologiaAtiva && (
          <> · busque por nome ou código para consultar as {cid10Index.length + diseases.length} categorias oficiais da CID-10</>
        )}
      </p>

      {totalEncontrado === 0 ? (
        <div className="mt-4">
          <EmptyState
            icon={SearchX}
            title="Nenhuma doença encontrada"
            description={
              hasActiveFilters
                ? "Tente ajustar os termos da busca ou remover algum filtro."
                : "Ainda não há doenças cadastradas."
            }
          />
        </div>
      ) : (
        <>
          {filtered.length > 0 && (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((disease) => (
                <DiseaseCard key={disease.slug} disease={disease} />
              ))}
            </div>
          )}

          {indexMatches.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                Índice CID-10 (DataSUS) — sem ficha completa ainda
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {indexMatches.slice(0, MAX_INDEX_RESULTS).map((entry) => (
                  <IndexEntryCard
                    key={entry.codigo}
                    nome={entry.nome}
                    codigo={entry.codigo}
                    categoria={entry.capitulo}
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
