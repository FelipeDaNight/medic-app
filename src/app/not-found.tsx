import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand-strong">
        <SearchX className="h-6 w-6" />
      </span>
      <h1 className="mt-6 text-2xl font-semibold text-foreground">Página não encontrada</h1>
      <p className="mt-2 text-foreground-muted">
        O conteúdo que você procura pode ter sido movido ou ainda não existe na biblioteca.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-xl bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-strong"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
