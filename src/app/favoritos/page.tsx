import type { Metadata } from "next";
import { FavoritesView } from "@/components/favorites-view";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Sua lista pessoal de medicamentos, doenças e atualizações salvos para revisão.",
};

export default function FavoritosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Favoritos</h1>
        <p className="mt-2 text-foreground-muted">
          Sua lista pessoal de revisão. Salvo neste navegador — sem necessidade de conta.
        </p>
      </div>
      <div className="mt-8">
        <FavoritesView />
      </div>
    </div>
  );
}
