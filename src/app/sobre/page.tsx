import type { Metadata } from "next";
import { ShieldCheck, BookMarked, GraduationCap } from "lucide-react";
import { medications } from "@/data/medications";
import { diseases } from "@/data/diseases";
import { updates } from "@/data/updates";
import { Callout } from "@/components/ui/callout";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Sobre o projeto Rx Estudante: propósito, curadoria de conteúdo e limitações.",
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">Sobre o Rx Estudante</h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
        O Rx Estudante é um projeto pessoal de estudo: uma biblioteca clínica que reúne
        medicamentos, doenças e atualizações de prática em um formato pensado para consulta rápida
        durante a graduação em medicina.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5">
          <GraduationCap className="h-5 w-5 text-brand" />
          <p className="mt-3 text-2xl font-semibold text-foreground">{medications.length}</p>
          <p className="text-sm text-foreground-subtle">medicamentos catalogados</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <BookMarked className="h-5 w-5 text-brand" />
          <p className="mt-3 text-2xl font-semibold text-foreground">{diseases.length}</p>
          <p className="text-sm text-foreground-subtle">doenças catalogadas</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <ShieldCheck className="h-5 w-5 text-brand" />
          <p className="mt-3 text-2xl font-semibold text-foreground">{updates.length}</p>
          <p className="text-sm text-foreground-subtle">atualizações clínicas</p>
        </div>
      </div>

      <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-foreground-muted">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Como o conteúdo é organizado</h2>
          <p className="mt-2">
            Cada medicamento traz indicação, mecanismo de ação, posologia usual, contraindicações,
            efeitos colaterais, interações e alertas especiais. Cada doença traz definição,
            epidemiologia, fisiopatologia, quadro clínico, diagnóstico, diagnóstico diferencial,
            tratamento e um caso ilustrativo para fixação. As atualizações resumem mudanças
            relevantes na prática clínica, sempre com a fonte indicada.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Base de conteúdo</h2>
          <p className="mt-2">
            A biblioteca começa com uma seleção curada dos temas mais comuns na graduação,
            organizada para crescer ao longo do tempo. O objetivo não é ser um substituto de
            bulário oficial ou de diretrizes médicas, e sim um ponto de partida rápido para revisão
            e estudo.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Callout variant="warning" title="Limitações importantes">
          Este é material de estudo, não um sistema de prescrição. Doses, contraindicações e
          condutas devem sempre ser confirmadas em bulas oficiais, diretrizes atualizadas e no
          julgamento clínico de um profissional de saúde antes de qualquer aplicação prática.
        </Callout>
      </div>
    </div>
  );
}
