"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SearchX } from "lucide-react";
import type { Disease } from "@/data/types";
import { ETIOLOGIAS } from "@/data/types";
import { matches } from "@/lib/text";
import { SearchInput } from "@/components/ui/search-input";
import { FilterSelect } from "@/components/ui/filter-select";
import { EmptyState } from "@/components/ui/empty-state";
import { DiseaseCard } from "@/components/cards/disease-card";

export function DiseasesExplorer({ diseases }: { diseases: Disease[] }) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
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

  const filtered = useMemo(() => {
    return diseases
      .filter((d) => matches(query, d.nome, d.sinonimos, d.cid10))
      .filter((d) => !especialidade || d.especialidade === especialidade)
      .filter((d) => !etiologia || d.etiologia === etiologia)
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }, [diseases, query, especialidade, etiologia]);

  const hasActiveFilters = query || especialidade || etiologia;

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
        {filtered.length} {filtered.length === 1 ? "doença encontrada" : "doenças encontradas"}
      </p>

      {filtered.length === 0 ? (
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
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((disease) => (
            <DiseaseCard key={disease.slug} disease={disease} />
          ))}
        </div>
      )}
    </div>
  );
}
