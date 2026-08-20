"use client";

import { useState } from "react";
import Link from "next/link";
import { Stethoscope, ChevronRight, Lightbulb, ClipboardCheck } from "lucide-react";
import type { DiseaseCase } from "@/data/types";

export function ClinicalCaseCard({
  caso,
  diseaseName,
  diseaseHref,
  especialidade,
}: {
  caso: DiseaseCase;
  diseaseName?: string;
  diseaseHref?: string;
  especialidade?: string;
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border bg-background-raised px-5 py-3">
        <Stethoscope className="h-4 w-4 text-brand" />
        <span className="text-sm font-semibold text-foreground">Caso clínico</span>
        {especialidade && (
          <span className="ml-auto text-xs text-foreground-subtle">{especialidade}</span>
        )}
      </div>

      <div className="p-5">
        <p className="text-[15px] leading-relaxed text-foreground">{caso.vinheta}</p>

        <p className="mt-4 rounded-xl bg-brand-soft px-4 py-3 text-sm font-medium text-brand-strong">
          {caso.pergunta}
        </p>

        {!revealed ? (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-foreground-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            Ver raciocínio e conduta
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <div className="mt-4 space-y-3">
            <div className="flex gap-2.5 rounded-xl border border-border bg-background-raised p-4">
              <Lightbulb className="h-4 w-4 shrink-0 text-amber-500" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground-subtle">
                  Raciocínio clínico
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{caso.raciocinio}</p>
              </div>
            </div>
            <div className="flex gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950">
              <ClipboardCheck className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                  Conduta
                </p>
                <p className="mt-1 text-sm leading-relaxed text-emerald-900 dark:text-emerald-200">
                  {caso.conduta}
                </p>
              </div>
            </div>
          </div>
        )}

        {diseaseHref && diseaseName && (
          <Link
            href={diseaseHref}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
          >
            Ver ficha completa de {diseaseName}
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}
