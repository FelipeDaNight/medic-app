"use client";

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { medications } from "@/data/medications";
import { diseases } from "@/data/diseases";
import { updates } from "@/data/updates";
import { useFavorites } from "@/lib/favorites";
import { MedicationCard } from "@/components/cards/medication-card";
import { DiseaseCard } from "@/components/cards/disease-card";
import { UpdateCard } from "@/components/cards/update-card";
import { EmptyState } from "@/components/ui/empty-state";

export function FavoritesView() {
  const favorites = useFavorites();

  const favoriteMedications = medications.filter((m) =>
    favorites.some((f) => f.type === "medicamento" && f.slug === m.slug)
  );
  const favoriteDiseases = diseases.filter((d) =>
    favorites.some((f) => f.type === "doenca" && f.slug === d.slug)
  );
  const favoriteUpdates = updates.filter((u) =>
    favorites.some((f) => f.type === "atualizacao" && f.slug === u.slug)
  );

  if (favorites.length === 0) {
    return (
      <EmptyState
        icon={Star}
        title="Você ainda não salvou nada"
        description='Clique na estrela em qualquer medicamento, doença ou atualização para adicioná-los à sua lista de revisão.'
      />
    );
  }

  return (
    <div className="space-y-12">
      {favoriteMedications.length > 0 && (
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Medicamentos</h2>
            <Link href="/medicamentos" className="inline-flex items-center gap-1 text-sm font-medium text-brand">
              Ver todos <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteMedications.map((m) => (
              <MedicationCard key={m.slug} medication={m} />
            ))}
          </div>
        </section>
      )}

      {favoriteDiseases.length > 0 && (
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Doenças</h2>
            <Link href="/doencas" className="inline-flex items-center gap-1 text-sm font-medium text-brand">
              Ver todas <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteDiseases.map((d) => (
              <DiseaseCard key={d.slug} disease={d} />
            ))}
          </div>
        </section>
      )}

      {favoriteUpdates.length > 0 && (
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Atualizações</h2>
            <Link href="/atualizacoes" className="inline-flex items-center gap-1 text-sm font-medium text-brand">
              Ver todas <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {favoriteUpdates.map((u) => (
              <UpdateCard key={u.slug} update={u} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
