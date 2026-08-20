import type { Metadata } from "next";
import { medications } from "@/data/medications";
import { MedicationsExplorer } from "@/components/explorers/medications-explorer";

export const metadata: Metadata = {
  title: "Medicamentos",
  description:
    "Tarja, categoria, mecanismo de ação, posologia e similares — biblioteca de medicamentos para estudo.",
};

export default function MedicamentosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Medicamentos</h1>
        <p className="mt-2 text-foreground-muted">
          Tarja, categoria, mecanismo de ação e similares — organizados para consulta e revisão rápida.
        </p>
      </div>
      <div className="mt-8">
        <MedicationsExplorer medications={medications} />
      </div>
    </div>
  );
}
