import type { Metadata } from "next";
import { updates } from "@/data/updates";
import { UpdatesExplorer } from "@/components/explorers/updates-explorer";

export const metadata: Metadata = {
  title: "Atualizações clínicas",
  description: "O que mudou na prática, por importância clínica — o mais recente primeiro.",
};

export default function AtualizacoesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Atualizações clínicas</h1>
        <p className="mt-2 text-foreground-muted">
          O que mudou na prática, por importância clínica — o mais recente primeiro.
        </p>
      </div>
      <div className="mt-8">
        <UpdatesExplorer updates={updates} />
      </div>
    </div>
  );
}
