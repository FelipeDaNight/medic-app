import type { Metadata } from "next";
import { Suspense } from "react";
import { diseases } from "@/data/diseases";
import { DiseasesExplorer } from "@/components/explorers/diseases-explorer";

export const metadata: Metadata = {
  title: "Doenças",
  description:
    "Etiologia, quadro clínico, diagnóstico, tratamento e casos ilustrativos — biblioteca de doenças para estudo.",
};

export default function DoencasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Doenças</h1>
        <p className="mt-2 text-foreground-muted">
          Etiologia, quadro clínico, diagnóstico, tratamento e casos ilustrativos, organizados por especialidade.
        </p>
      </div>
      <div className="mt-8">
        <Suspense fallback={null}>
          <DiseasesExplorer diseases={diseases} />
        </Suspense>
      </div>
    </div>
  );
}
