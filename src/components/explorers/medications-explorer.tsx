"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PackageX } from "lucide-react";
import type { Medication } from "@/data/types";
import { TARJAS } from "@/data/types";
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

  const curatedNames = useMemo(() => {
    const names = medications.flatMap((m) => [m.nome, ...m.nomeComercial]).map(normalize);
    return names;
  }, [medications]);

  const filtered = useMemo(() => {
    return medications
      .filter((m) => matches(query, m.nome, m.nomeComercial, m.principioAtivo))
      .filter((m) => !tarja || m.tarja === tarja)
      .filter((m) => !categoria || m.categoria === categoria)
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }, [medications, query, tarja, categoria]);

  const tarjaOuCategoriaAtiva = Boolean(tarja || categoria);

  const indexMatches = useMemo(() => {
    if (!query.trim() || tarjaOuCategoriaAtiva) return [];
    return medicamentosIndex.filter((e) => {
      const n = normalize(e.nome);
      const jaExiste = curatedNames.some((c) => n === c || n.startsWith(`${c} `));
      return !jaExiste && matches(query, e.nome);
    });
  }, [query, tarjaOuCategoriaAtiva, curatedNames]);

  const hasActiveFilters = query || tarja || categoria;
  const totalEncontrado = filtered.length + indexMatches.length;

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
        {indexMatches.length > 0 && (
          <> · +{indexMatches.length} no índice de nomes{indexMatches.length > MAX_INDEX_RESULTS ? ` (mostrando ${MAX_INDEX_RESULTS})` : ""}</>
        )}
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

          {indexMatches.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                Índice de nomes (base bulario.com, 2018) — sem ficha completa ainda
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {indexMatches.slice(0, MAX_INDEX_RESULTS).map((entry) => (
                  <IndexEntryCard
                    key={entry.nome}
                    nome={entry.nome}
                    badges={[<Badge key="fonte">fonte não oficial</Badge>]}
                    nota="Nome real de medicamento, sem princípio ativo, tarja ou posologia verificados ainda."
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
