"use client";

import { useMemo, useState } from "react";
import { PackageX } from "lucide-react";
import type { Medication } from "@/data/types";
import { TARJAS } from "@/data/types";
import { matches } from "@/lib/text";
import { SearchInput } from "@/components/ui/search-input";
import { FilterSelect } from "@/components/ui/filter-select";
import { EmptyState } from "@/components/ui/empty-state";
import { MedicationCard } from "@/components/cards/medication-card";

export function MedicationsExplorer({ medications }: { medications: Medication[] }) {
  const [query, setQuery] = useState("");
  const [tarja, setTarja] = useState("");
  const [categoria, setCategoria] = useState("");

  const categorias = useMemo(
    () => Array.from(new Set(medications.map((m) => m.categoria))).sort((a, b) => a.localeCompare(b, "pt-BR")),
    [medications]
  );

  const filtered = useMemo(() => {
    return medications
      .filter((m) => matches(query, m.nome, m.nomeComercial, m.principioAtivo))
      .filter((m) => !tarja || m.tarja === tarja)
      .filter((m) => !categoria || m.categoria === categoria)
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }, [medications, query, tarja, categoria]);

  const hasActiveFilters = query || tarja || categoria;

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
        {filtered.length} {filtered.length === 1 ? "medicamento encontrado" : "medicamentos encontrados"}
      </p>

      {filtered.length === 0 ? (
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
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((medication) => (
            <MedicationCard key={medication.slug} medication={medication} />
          ))}
        </div>
      )}
    </div>
  );
}
