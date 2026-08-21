import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Dna,
  Layers,
  Stethoscope,
  ClipboardList,
  FlaskConical,
  SplitSquareHorizontal,
  HeartPulse,
  ShieldAlert,
  TrendingUp,
  GraduationCap,
  Pill,
  BookMarked,
  ArrowLeft,
} from "lucide-react";
import { diseases } from "@/data/diseases";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DetailSection, BulletList } from "@/components/ui/detail-section";
import { Callout } from "@/components/ui/callout";
import { EspecialidadeBadge, EtiologiaBadge, Badge } from "@/components/badges";
import { FavoriteButton } from "@/components/favorite-button";
import { DiseaseCard } from "@/components/cards/disease-card";
import { ClinicalCaseCard } from "@/components/clinical-case-card";

export function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};
  return {
    title: disease.nome,
    description: disease.resumo,
  };
}

export default async function DiseaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const related = diseases
    .filter((d) => d.especialidade === disease.especialidade && d.slug !== disease.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[{ label: "Doenças", href: "/doencas" }, { label: disease.nome }]}
      />

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{disease.nome}</h1>
          <p className="mt-1 text-sm text-foreground-subtle">
            {disease.sinonimos.length > 0 ? disease.sinonimos.join(" · ") : "Sem sinônimos comuns"} · CID-10{" "}
            {disease.cid10}
          </p>
        </div>
        <FavoriteButton type="doenca" slug={disease.slug} label={disease.nome} />
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <EspecialidadeBadge especialidade={disease.especialidade} />
        <EtiologiaBadge etiologia={disease.etiologia} />
        <Badge>CID-10 {disease.cid10}</Badge>
      </div>

      <p className="mt-6 text-lg leading-relaxed text-foreground-muted">{disease.resumo}</p>

      <div className="mt-2">
        <DetailSection title="Definição" icon={BookOpen}>
          <p className="text-foreground-muted">{disease.definicao}</p>
        </DetailSection>

        <DetailSection title="Epidemiologia" icon={Users}>
          <p className="text-foreground-muted">{disease.epidemiologia}</p>
        </DetailSection>

        <DetailSection title="Etiologia e fisiopatologia" icon={Dna}>
          <p className="text-foreground-muted">{disease.fisiopatologia}</p>
        </DetailSection>

        <DetailSection title="Classificação" icon={Layers}>
          <p className="text-foreground-muted">{disease.classificacao}</p>
        </DetailSection>

        <DetailSection title="Quadro clínico" icon={Stethoscope}>
          <BulletList items={disease.quadroClinico} />
        </DetailSection>

        <DetailSection title="Diagnóstico" icon={ClipboardList}>
          <BulletList items={disease.diagnostico} />
        </DetailSection>

        <DetailSection title="Exames complementares" icon={FlaskConical}>
          <BulletList items={disease.examesComplementares} />
        </DetailSection>

        <DetailSection title="Diagnóstico diferencial" icon={SplitSquareHorizontal}>
          <BulletList items={disease.diagnosticoDiferencial} />
        </DetailSection>

        <DetailSection title="Tratamento" icon={HeartPulse}>
          <BulletList items={disease.tratamento} />
        </DetailSection>

        <DetailSection
          title={disease.medicamentosSecaoTitulo ?? "Medicamentos de primeira linha"}
          icon={Pill}
        >
          {disease.medicamentosNota && (
            <p className="mb-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">
              {disease.medicamentosNota}
            </p>
          )}
          {disease.medicamentosPrimeiraLinha.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {disease.medicamentosPrimeiraLinha.map((m) => (
                <Link
                  key={m.slug}
                  href={`/medicamentos/${m.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-brand/20 bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand-strong transition-colors hover:border-brand/40"
                >
                  {m.nome}
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-foreground-subtle">
              Nenhum medicamento de primeira linha para esta doença tem ficha completa no site ainda.
            </p>
          )}
        </DetailSection>

        <DetailSection title="Complicações" icon={ShieldAlert}>
          <BulletList items={disease.complicacoes} />
        </DetailSection>

        <DetailSection title="Prognóstico" icon={TrendingUp}>
          <p className="text-foreground-muted">{disease.prognostico}</p>
        </DetailSection>
      </div>

      {disease.redFlags.length > 0 && (
        <Callout variant="warning" title="Sinais de alarme / red flags">
          <ul className="space-y-1.5">
            {disease.redFlags.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </Callout>
      )}

      {disease.pontosDeProva.length > 0 && (
        <div className="mt-6">
          <DetailSection title="Pontos mais cobrados em prova" icon={GraduationCap}>
            <BulletList items={disease.pontosDeProva} />
          </DetailSection>
        </div>
      )}

      <div className="mt-8">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          Pratique com um caso
        </h2>
        <ClinicalCaseCard caso={disease.casoClinico} especialidade={disease.especialidade} />
      </div>

      {disease.fontes.length > 0 && (
        <div className="mt-10 rounded-xl border border-border bg-background-raised p-4">
          <h2 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-foreground-subtle">
            <BookMarked className="h-3.5 w-3.5" />
            Fontes
          </h2>
          <dl className="mt-2 space-y-1 text-xs text-foreground-subtle">
            {disease.fontes.map((f, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-1.5">
                <dt className="shrink-0 font-medium text-foreground-muted">{f.tema}:</dt>
                <dd className={f.fonte === "fonte pendente" ? "italic" : ""}>{f.fonte}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
            Relacionadas em {disease.especialidade}
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((d) => (
              <DiseaseCard key={d.slug} disease={d} />
            ))}
          </div>
        </div>
      )}

      <Link
        href="/doencas"
        className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Doenças
      </Link>
    </div>
  );
}
