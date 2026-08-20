"use client";

import { useMemo, useState } from "react";
import { Newspaper } from "lucide-react";
import type { ClinicalUpdate } from "@/data/types";
import { IMPORTANCIAS } from "@/data/types";
import { matches } from "@/lib/text";
import { SearchInput } from "@/components/ui/search-input";
import { FilterSelect } from "@/components/ui/filter-select";
import { EmptyState } from "@/components/ui/empty-state";
import { UpdateCard } from "@/components/cards/update-card";

export function UpdatesExplorer({ updates }: { updates: ClinicalUpdate[] }) {
  const [query, setQuery] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [importancia, setImportancia] = useState("");
  const [fonte, setFonte] = useState("");

  const especialidades = useMemo(
    () => Array.from(new Set(updates.map((u) => u.especialidade))).sort((a, b) => a.localeCompare(b, "pt-BR")),
    [updates]
  );

  const fontes = useMemo(
    () => Array.from(new Set(updates.map((u) => u.fonte))).sort((a, b) => a.localeCompare(b, "pt-BR")),
    [updates]
  );

  const filtered = useMemo(() => {
    return updates
      .filter((u) => matches(query, u.titulo, u.resumo))
      .filter((u) => !especialidade || u.especialidade === especialidade)
      .filter((u) => !importancia || u.importancia === importancia)
      .filter((u) => !fonte || u.fonte === fonte)
      .sort((a, b) => (a.data < b.data ? 1 : -1));
  }, [updates, query, especialidade, importancia, fonte]);

  const hasActiveFilters = query || especialidade || importancia || fonte;

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <SearchInput value={query} onChange={setQuery} placeholder="Buscar atualização por título ou assunto..." />
        <div className="flex flex-wrap gap-3">
          <FilterSelect
            label="Filtrar por especialidade"
            value={especialidade}
            onChange={setEspecialidade}
            options={especialidades}
            allLabel="Todas as especialidades"
          />
          <FilterSelect
            label="Filtrar por importância"
            value={importancia}
            onChange={setImportancia}
            options={[...IMPORTANCIAS]}
            allLabel="Todas as importâncias"
          />
          <FilterSelect
            label="Filtrar por fonte"
            value={fonte}
            onChange={setFonte}
            options={fontes}
            allLabel="Todas as fontes"
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-foreground-subtle">
        {filtered.length} {filtered.length === 1 ? "atualização encontrada" : "atualizações encontradas"} · mais recentes primeiro
      </p>

      {filtered.length === 0 ? (
        <div className="mt-4">
          <EmptyState
            icon={Newspaper}
            title="Nenhuma atualização encontrada"
            description={
              hasActiveFilters
                ? "Tente ajustar os termos da busca ou remover algum filtro."
                : "Ainda não há atualizações cadastradas."
            }
          />
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filtered.map((update) => (
            <UpdateCard key={update.slug} update={update} />
          ))}
        </div>
      )}
    </div>
  );
}
