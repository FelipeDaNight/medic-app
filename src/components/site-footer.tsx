import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="text-sm font-semibold text-foreground">Rx Estudante</span>
            </Link>
            <p className="mt-3 text-sm text-foreground-subtle">
              Biblioteca de estudo com medicamentos, doenças e atualizações clínicas,
              organizada para consulta rápida durante a graduação.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground-subtle">
                Biblioteca
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/medicamentos" className="text-foreground-muted hover:text-foreground">Medicamentos</Link></li>
                <li><Link href="/doencas" className="text-foreground-muted hover:text-foreground">Doenças</Link></li>
                <li><Link href="/atualizacoes" className="text-foreground-muted hover:text-foreground">Atualizações</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground-subtle">
                Você
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/favoritos" className="text-foreground-muted hover:text-foreground">Favoritos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground-subtle">
                Projeto
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/sobre" className="text-foreground-muted hover:text-foreground">Sobre e fontes</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-background-raised p-4 text-xs leading-relaxed text-foreground-subtle">
          <strong className="text-foreground-muted">Aviso:</strong> conteúdo produzido para fins
          educacionais, como material de apoio ao estudo. Não substitui bula oficial, diretrizes
          atualizadas, julgamento clínico ou orientação de um profissional de saúde. Sempre
          confirme doses e condutas em fontes oficiais antes de aplicar na prática.
        </div>

        <p className="mt-6 text-xs text-foreground-subtle">
          © {new Date().getFullYear()} Rx Estudante. Projeto pessoal de estudo.
        </p>
      </div>
    </footer>
  );
}
