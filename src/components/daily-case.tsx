"use client";

import { useSyncExternalStore } from "react";
import { CalendarDays } from "lucide-react";
import type { Disease } from "@/data/types";
import { EspecialidadeBadge } from "@/components/badges";
import { ClinicalCaseCard } from "@/components/clinical-case-card";

function pickToday<T>(items: T[]): T {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const diffMs = Date.now() - start.getTime();
  const dayOfYear = Math.floor(diffMs / 86_400_000);
  return items[dayOfYear % items.length];
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  day: "2-digit",
  month: "long",
});

function subscribe() {
  return () => {};
}

function getServerSnapshot() {
  return null;
}

export function DailyCase({ diseases }: { diseases: Disease[] }) {
  const today = useSyncExternalStore(
    subscribe,
    () => dateFormatter.format(new Date()),
    getServerSnapshot
  );

  if (today === null) {
    return <div className="h-72 animate-pulse rounded-2xl border border-border bg-background-raised" />;
  }

  const disease = pickToday(diseases);

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <CalendarDays className="h-4 w-4 text-brand" />
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          Caso clínico do dia
        </h2>
        <span className="text-xs capitalize text-foreground-subtle">{today}</span>
        <EspecialidadeBadge especialidade={disease.especialidade} className="ml-auto" />
      </div>
      <ClinicalCaseCard
        caso={disease.casoClinico}
        diseaseName={disease.nome}
        diseaseHref={`/doencas/${disease.slug}`}
      />
    </div>
  );
}
