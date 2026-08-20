import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Dna,
  Stethoscope,
  ClipboardList,
  SplitSquareHorizontal,
  HeartPulse,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";
import { diseases } from "@/data/diseases";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DetailSection, BulletList } from "@/components/ui/detail-section";
import { Callout } from "@/components/ui/callout";
import { EspecialidadeBadge, EtiologiaBadge, Badge } from "@/components/badges";
import { FavoriteButton } from "@/components/favorite-button";
import { DiseaseCard } from "@/components/cards/disease-card";

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

        <DetailSection title="Quadro clínico" icon={Stethoscope}>
          <BulletList items={disease.quadroClinico} />
        </DetailSection>

        <DetailSection title="Diagnóstico" icon={ClipboardList}>
          <BulletList items={disease.diagnostico} />
        </DetailSection>

        <DetailSection title="Diagnóstico diferencial" icon={SplitSquareHorizontal}>
          <BulletList items={disease.diagnosticoDiferencial} />
        </DetailSection>

        <DetailSection title="Tratamento" icon={HeartPulse}>
          <BulletList items={disease.tratamento} />
        </DetailSection>

        <DetailSection title="Prognóstico" icon={TrendingUp}>
          <p className="text-foreground-muted">{disease.prognostico}</p>
        </DetailSection>
      </div>

      <Callout variant="highlight" title="Caso ilustrativo">
        {disease.casoIlustrativo}
      </Callout>

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
