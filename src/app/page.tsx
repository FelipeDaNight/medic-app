import Link from "next/link";
import {
  Pill,
  Activity,
  Newspaper,
  ArrowRight,
  Search,
  BookOpenCheck,
  Star,
} from "lucide-react";
import { medications } from "@/data/medications";
import { diseases } from "@/data/diseases";
import { updates } from "@/data/updates";
import { cid10Index } from "@/data/cid10-index";
import { renameIndex } from "@/data/rename-index";
import { medicamentosIndex } from "@/data/medicamentos-index";
import { HomeHeroSearch } from "@/components/home-hero-search";
import { UpdateCard } from "@/components/cards/update-card";
import { EspecialidadeBadge } from "@/components/badges";

const totalCid10 = cid10Index.length + diseases.length;
const totalMedIndex = renameIndex.length + medicamentosIndex.length + medications.length;

const PILLARS = [
  {
    href: "/medicamentos",
    icon: Pill,
    title: "Medicamentos",
    description: "Tarja, categoria, mecanismo de ação, posologia e similares.",
    countLabel: `${medications.length} com ficha completa · ${totalMedIndex} no índice de nomes`,
  },
  {
    href: "/doencas",
    icon: Activity,
    title: "Doenças",
    description: "Etiologia, quadro clínico, diagnóstico, tratamento e casos.",
    countLabel: `${diseases.length} com ficha completa · ${totalCid10} no índice CID-10`,
  },
  {
    href: "/atualizacoes",
    icon: Newspaper,
    title: "Atualizações clínicas",
    description: "O que mudou na prática, por importância clínica.",
    countLabel: `${updates.length} atualizações`,
  },
];

const STEPS = [
  {
    icon: Search,
    title: "Busque em segundos",
    description: "Use o ⌘K em qualquer página para pesquisar em toda a biblioteca sem sair do que você está lendo.",
  },
  {
    icon: BookOpenCheck,
    title: "Estude por seções",
    description: "Cada página de detalhe é organizada do jeito que cai em prova: definição, quadro clínico, diagnóstico e conduta.",
  },
  {
    icon: Star,
    title: "Salve o que importa",
    description: "Favorite medicamentos, doenças e atualizações para montar sua própria lista de revisão.",
  },
];

const especialidadesEmDestaque = Array.from(
  new Set([...diseases.map((d) => d.especialidade), ...updates.map((u) => u.especialidade)])
).slice(0, 10);

export default function Home() {
  const recentUpdates = [...updates].sort((a, b) => (a.data < b.data ? 1 : -1)).slice(0, 3);

  return (
    <div>
      <section className="border-b border-border bg-gradient-to-b from-brand-soft/60 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-brand/25 bg-brand-soft px-3 py-1 text-xs font-medium text-brand-strong">
              Feito para a rotina da graduação
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Sua biblioteca clínica de bolso
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
              Medicamentos, doenças e atualizações clínicas organizados em um só lugar, com busca
              instantânea e conteúdo estruturado do jeito que você precisa para estudar e revisar.
            </p>
            <div className="mt-8">
              <HomeHeroSearch />
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground-subtle">
              <span>{totalMedIndex} nomes de medicamentos no índice</span>
              <span>{totalCid10} categorias da CID-10 no índice de doenças</span>
              <span>{updates.length} atualizações clínicas</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-foreground">{pillar.title}</h2>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-foreground-muted">
                {pillar.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground-subtle">
                  {pillar.countLabel}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand">
                  Explorar
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-background-raised/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Como usar</h2>
          <p className="mt-2 max-w-xl text-foreground-muted">
            Pensado para ser rápido de usar entre uma aula e outra.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl border border-border bg-card p-6">
                <span className="text-xs font-semibold text-foreground-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  <step.icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Atualizações recentes
            </h2>
            <p className="mt-2 text-foreground-muted">O mais novo em prática clínica.</p>
          </div>
          <Link
            href="/atualizacoes"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-brand sm:inline-flex"
          >
            Ver todas <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {recentUpdates.map((update) => (
            <UpdateCard key={update.slug} update={update} />
          ))}
        </div>
        <Link
          href="/atualizacoes"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand sm:hidden"
        >
          Ver todas <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Especialidades em destaque
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {especialidadesEmDestaque.map((especialidade) => (
              <Link key={especialidade} href={`/doencas?especialidade=${encodeURIComponent(especialidade)}`}>
                <EspecialidadeBadge especialidade={especialidade} className="hover:bg-brand hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
