import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Stethoscope,
  Cog,
  Waves,
  Pill,
  Ban,
  Users,
  AlertOctagon,
  Shuffle,
  ClipboardCheck,
  Layers,
  GraduationCap,
  ArrowLeft,
} from "lucide-react";
import { medications } from "@/data/medications";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DetailSection, BulletList } from "@/components/ui/detail-section";
import { Callout } from "@/components/ui/callout";
import { TarjaBadge, Badge } from "@/components/badges";
import { FavoriteButton } from "@/components/favorite-button";
import { MedicationCard } from "@/components/cards/medication-card";

export function generateStaticParams() {
  return medications.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const medication = medications.find((m) => m.slug === slug);
  if (!medication) return {};
  return {
    title: medication.nome,
    description: medication.resumo,
  };
}

export default async function MedicationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const medication = medications.find((m) => m.slug === slug);
  if (!medication) notFound();

  const related = medications
    .filter((m) => m.categoria === medication.categoria && m.slug !== medication.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Medicamentos", href: "/medicamentos" },
          { label: medication.nome },
        ]}
      />

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{medication.nome}</h1>
          <p className="mt-1 text-sm text-foreground-subtle">
            {medication.nomeComercial.join(" · ")}
          </p>
        </div>
        <FavoriteButton type="medicamento" slug={medication.slug} label={medication.nome} />
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <TarjaBadge tarja={medication.tarja} />
        <Badge>{medication.categoria}</Badge>
        <Badge>ATC {medication.codigoAtc}</Badge>
      </div>

      <p className="mt-6 text-lg leading-relaxed text-foreground-muted">{medication.resumo}</p>

      <dl className="mt-6 grid grid-cols-1 gap-3 rounded-2xl border border-border bg-background-raised p-4 sm:grid-cols-3">
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
            Princípio ativo
          </dt>
          <dd className="mt-1 text-sm text-foreground">{medication.principioAtivo}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
            Forma farmacêutica
          </dt>
          <dd className="mt-1 text-sm text-foreground">{medication.formaFarmaceutica}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
            Via de administração
          </dt>
          <dd className="mt-1 text-sm text-foreground">{medication.viaAdministracao}</dd>
        </div>
      </dl>

      <div className="mt-2">
        <DetailSection title="Indicações" icon={Stethoscope}>
          <BulletList items={medication.indicacoes} />
        </DetailSection>

        <DetailSection title="Mecanismo de ação" icon={Cog}>
          <p className="text-foreground-muted">{medication.mecanismoAcao}</p>
        </DetailSection>

        <DetailSection title="Farmacocinética" icon={Waves}>
          <p className="text-foreground-muted">{medication.farmacocinetica}</p>
        </DetailSection>

        <DetailSection title="Posologia usual" icon={Pill}>
          <p className="text-foreground-muted">{medication.posologia}</p>
        </DetailSection>

        <DetailSection title="Populações especiais" icon={Users}>
          <div className="space-y-3">
            <p className="text-foreground-muted">
              <span className="font-medium text-foreground">Ajuste renal/hepático: </span>
              {medication.ajusteRenalHepatico}
            </p>
            <p className="text-foreground-muted">
              <span className="font-medium text-foreground">Gestação e lactação: </span>
              {medication.gestacaoLactacao}
            </p>
          </div>
        </DetailSection>

        <DetailSection title="Contraindicações" icon={Ban}>
          <BulletList items={medication.contraindicacoes} />
        </DetailSection>

        <DetailSection title="Efeitos colaterais comuns" icon={AlertOctagon}>
          <BulletList items={medication.efeitosColaterais} />
        </DetailSection>

        <DetailSection title="Interações medicamentosas" icon={Shuffle}>
          <BulletList items={medication.interacoes} />
        </DetailSection>

        <DetailSection title="Monitorização" icon={ClipboardCheck}>
          <BulletList items={medication.monitorizacao} />
        </DetailSection>

        {medication.alertas.length > 0 && (
          <section className="border-t border-border py-6">
            <Callout variant="warning" title="Alerta importante">
              {medication.alertas.join(" ")}
            </Callout>
          </section>
        )}

        <DetailSection title="Genéricos e similares" icon={Layers}>
          <div className="flex flex-wrap gap-1.5">
            {medication.similares.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </DetailSection>

        {medication.pontosDeProva.length > 0 && (
          <DetailSection title="Pontos mais cobrados em prova" icon={GraduationCap}>
            <BulletList items={medication.pontosDeProva} />
          </DetailSection>
        )}
      </div>

      <Callout variant="highlight" title="Lembrete de estudo">
        Conteúdo para fins educacionais — sempre confirme doses e contraindicações na bula oficial
        e no contexto clínico do paciente antes de qualquer conduta.
      </Callout>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
            Relacionados em {medication.categoria}
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((m) => (
              <MedicationCard key={m.slug} medication={m} />
            ))}
          </div>
        </div>
      )}

      <Link
        href="/medicamentos"
        className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Medicamentos
      </Link>
    </div>
  );
}
