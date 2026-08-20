import type { ReactNode } from "react";
import type { Importancia, Tarja } from "@/data/types";

function cx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Badge({
  children,
  className,
  icon,
}: {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium",
        "border-border bg-background-raised text-foreground-muted",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}

const TARJA_STYLES: Record<Tarja, string> = {
  "Venda livre (MIP)":
    "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  "Tarja vermelha":
    "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300",
  "Tarja preta":
    "border-zinc-700 bg-zinc-900 text-zinc-50 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-100",
  "Tarja não informada":
    "border-border bg-background-raised text-foreground-subtle",
};

export function TarjaBadge({ tarja, className }: { tarja: Tarja; className?: string }) {
  return (
    <Badge className={cx(TARJA_STYLES[tarja], className)}>
      <span
        aria-hidden="true"
        className={cx(
          "h-1.5 w-1.5 rounded-full",
          tarja === "Venda livre (MIP)" && "bg-emerald-500",
          tarja === "Tarja vermelha" && "bg-red-500",
          tarja === "Tarja preta" && "bg-zinc-100",
          tarja === "Tarja não informada" && "bg-foreground-subtle"
        )}
      />
      {tarja}
    </Badge>
  );
}

const IMPORTANCIA_STYLES: Record<Importancia, string> = {
  Alta: "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300",
  Média:
    "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300",
  Baixa:
    "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300",
};

export function ImportanciaBadge({
  importancia,
  className,
}: {
  importancia: Importancia;
  className?: string;
}) {
  return (
    <Badge className={cx(IMPORTANCIA_STYLES[importancia], className)}>
      Importância {importancia}
    </Badge>
  );
}

export function EtiologiaBadge({ etiologia, className }: { etiologia: string; className?: string }) {
  return (
    <Badge
      className={cx(
        "border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-300",
        className
      )}
    >
      {etiologia}
    </Badge>
  );
}

export function EspecialidadeBadge({
  especialidade,
  className,
}: {
  especialidade: string;
  className?: string;
}) {
  return (
    <Badge
      className={cx(
        "border-brand/20 bg-brand-soft text-brand-strong",
        className
      )}
    >
      {especialidade}
    </Badge>
  );
}
