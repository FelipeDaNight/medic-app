"use client";

import { Search } from "lucide-react";

export function HomeHeroSearch() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
      className="flex h-14 w-full items-center gap-3 rounded-2xl border border-border bg-background-raised px-5 text-left shadow-sm transition-colors hover:border-border-strong sm:w-[460px]"
    >
      <Search className="h-5 w-5 shrink-0 text-foreground-subtle" />
      <span className="flex-1 truncate text-sm text-foreground-subtle">
        Busque um medicamento, doença ou atualização...
      </span>
      <kbd className="hidden shrink-0 rounded border border-border px-1.5 py-0.5 text-[10px] text-foreground-subtle sm:block">
        ⌘K
      </kbd>
    </button>
  );
}
