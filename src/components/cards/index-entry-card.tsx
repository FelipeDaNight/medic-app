import { Badge } from "@/components/badges";

export function IndexEntryCard({
  nome,
  codigo,
  categoria,
}: {
  nome: string;
  codigo: string;
  categoria: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border-strong bg-background-raised/60 p-5">
      <h3 className="text-sm font-medium text-foreground-muted">{nome}</h3>
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <Badge>CID-10 {codigo}</Badge>
        <Badge className="border-dashed">{categoria}</Badge>
      </div>
      <p className="mt-3 text-xs text-foreground-subtle">
        No índice CID-10 — ainda sem ficha de estudo completa.
      </p>
    </div>
  );
}
