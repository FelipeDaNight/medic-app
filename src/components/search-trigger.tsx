"use client";

import { useSyncExternalStore } from "react";
import { Search } from "lucide-react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return /Mac|iPhone|iPad/.test(navigator.platform ?? navigator.userAgent) ? "⌘" : "Ctrl";
}

function getServerSnapshot() {
  return "Ctrl";
}

export function SearchTrigger({ className }: { className?: string }) {
  const modKey = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
      className={
        className ??
        "flex h-9 w-full items-center gap-2 rounded-lg border border-border bg-background-raised px-3 text-sm text-foreground-subtle transition-colors hover:border-border-strong sm:w-64"
      }
    >
      <Search className="h-4 w-4 shrink-0" />
      <span className="flex-1 text-left">Buscar...</span>
      <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px]">{modKey}K</kbd>
    </button>
  );
}
