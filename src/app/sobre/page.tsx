import type { Metadata } from "next";
import { ShieldCheck, BookMarked, GraduationCap } from "lucide-react";
import { medications } from "@/data/medications";
import { diseases } from "@/data/diseases";
import { updates } from "@/data/updates";
import { cid10Index } from "@/data/cid10-index";
import { renameIndex } from "@/data/rename-index";
import { medicamentosIndex } from "@/data/medicamentos-index";
import { Callout } from "@/components/ui/callout";

const totalCid10 = cid10Index.length + diseases.length;
const totalMedIndex = renameIndex.length + medicamentosIndex.length + medications.length;

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
          <p className="mt-3 text-2xl font-semibold text-foreground">{totalMedIndex}</p>
          <p className="text-sm text-foreground-subtle">
            nomes de medicamentos no índice ({medications.length} com ficha completa)
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <BookMarked className="h-5 w-5 text-brand" />
          <p className="mt-3 text-2xl font-semibold text-foreground">{totalCid10}</p>
          <p className="text-sm text-foreground-subtle">
            categorias CID-10 no índice ({diseases.length} com ficha completa)
          </p>
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
            A biblioteca de doenças combina duas camadas: uma seleção curada dos temas mais comuns
            na graduação, com ficha de estudo completa, e o <strong>índice oficial da CID-10</strong>{" "}
            (categorias de 3 caracteres, fonte: DataSUS/Ministério da Saúde), que cobre praticamente
            toda a classificação — {cid10Index.length.toLocaleString("pt-BR")} categorias — para que
            a busca por nome ou código nunca fique de mãos vazias, mesmo quando o item ainda não tem
            ficha completa. A camada com ficha completa cresce continuamente.
          </p>
          <p className="mt-2">
            Para medicamentos, a estrutura ganhou uma terceira camada. A fonte primária do índice
            passou a ser a{" "}
            <strong>RENAME — Relação Nacional de Medicamentos Essenciais</strong>, lista oficial do
            Ministério da Saúde, com {renameIndex.length.toLocaleString("pt-BR")} nomes (denominação
            genérica/DCB, classe ATC e componente de financiamento — Básico, Estratégico,
            Especializado ou Hospitalar). A edição 2024 não pôde ser baixada a partir deste
            ambiente — o servidor bvsms.saude.gov.br bloqueia o acesso automatizado mesmo por
            múltiplas rotas —, então esta é a <strong>edição 2022</strong> da RENAME, extraída
            diretamente do PDF oficial (mesma base institucional; a maior parte do elenco não muda
            de uma edição para outra). Quando a edição 2024 ficar acessível, ela substitui esta.
          </p>
          <p className="mt-2">
            Uma terceira camada, o índice do dataset acadêmico{" "}
            <a
              href="https://github.com/LaCAfe/Bulario2018PT-br"
              target="_blank"
              rel="noreferrer"
              className="text-brand underline underline-offset-2"
            >
              Bulario2018PT-br
            </a>{" "}
            (Cunha, dos Santos e Guedes, 2018 — {medicamentosIndex.length.toLocaleString("pt-BR")}{" "}
            nomes coletados do site bulario.com), aparece só como <strong>fallback não verificado</strong>{" "}
            para nomes comerciais que a RENAME não lista, já que ela é organizada por
            denominação genérica. É rotulada separadamente na busca e nunca misturada com itens
            de ficha completa. A ANVISA segue como objetivo de longo prazo caso o acesso ao
            dataset oficial dela volte a funcionar.
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
