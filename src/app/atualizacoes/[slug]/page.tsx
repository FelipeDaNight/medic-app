import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { updates } from "@/data/updates";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Callout } from "@/components/ui/callout";
import { EspecialidadeBadge, ImportanciaBadge } from "@/components/badges";
import { FavoriteButton } from "@/components/favorite-button";
import { UpdateCard } from "@/components/cards/update-card";
import { formatDate, readingTime } from "@/lib/text";

export function generateStaticParams() {
  return updates.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const update = updates.find((u) => u.slug === slug);
  if (!update) return {};
  return {
    title: update.titulo,
    description: update.resumo,
  };
}

export default async function UpdateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const update = updates.find((u) => u.slug === slug);
  if (!update) notFound();

  const related = updates
    .filter((u) => u.especialidade === update.especialidade && u.slug !== update.slug)
    .slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[{ label: "Atualizações", href: "/atualizacoes" }, { label: update.titulo }]}
      />

      <div className="mt-4 flex flex-wrap gap-1.5">
        <EspecialidadeBadge especialidade={update.especialidade} />
        <ImportanciaBadge importancia={update.importancia} />
      </div>

      <div className="mt-3 flex items-start justify-between gap-4">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground">
          {update.titulo}
        </h1>
        <div className="shrink-0 pt-1">
          <FavoriteButton type="atualizacao" slug={update.slug} label={update.titulo} />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-foreground-subtle">
        <span>{update.fonte}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={update.data}>{formatDate(update.data)}</time>
        <span aria-hidden="true">·</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {readingTime(update.corpo)} min de leitura
        </span>
      </div>

      <p className="mt-6 text-lg leading-relaxed text-foreground-muted">{update.resumo}</p>

      <div className="mt-6">
        <Callout variant="highlight" title="O que muda na prática">
          {update.destaque}
        </Callout>
      </div>

      <div className="prose-sm mt-6 space-y-4">
        {update.corpo.map((paragraph, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
            Relacionadas em {update.especialidade}
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {related.map((u) => (
              <UpdateCard key={u.slug} update={u} />
            ))}
          </div>
        </div>
      )}

      <Link
        href="/atualizacoes"
        className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Atualizações
      </Link>
    </div>
  );
}
