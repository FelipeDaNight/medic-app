"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { Pill, Activity, Newspaper, Search, CornerDownLeft } from "lucide-react";
import type { Medication, Disease, ClinicalUpdate } from "@/data/types";

interface SearchItem {
  type: "medicamento" | "doenca" | "atualizacao";
  title: string;
  subtitle: string;
  href: string;
}

const TYPE_META = {
  medicamento: { label: "Medicamento", icon: Pill },
  doenca: { label: "Doença", icon: Activity },
  atualizacao: { label: "Atualização", icon: Newspaper },
} as const;

export function CommandPalette({
  medications,
  diseases,
  updates,
}: {
  medications: Medication[];
  diseases: Disease[];
  updates: ClinicalUpdate[];
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<SearchItem[]>(() => {
    const meds = medications.map((m) => ({
      type: "medicamento" as const,
      title: m.nome,
      subtitle: `${m.categoria} · ${m.principioAtivo}`,
      href: `/medicamentos/${m.slug}`,
    }));
    const diseasesItems = diseases.map((d) => ({
      type: "doenca" as const,
      title: d.nome,
      subtitle: `${d.especialidade} · CID-10 ${d.cid10}`,
      href: `/doencas/${d.slug}`,
    }));
    const updatesItems = updates.map((u) => ({
      type: "atualizacao" as const,
      title: u.titulo,
      subtitle: `${u.especialidade} · ${u.fonte}`,
      href: `/atualizacoes/${u.slug}`,
    }));
    return [...meds, ...diseasesItems, ...updatesItems];
  }, [medications, diseases, updates]);

  const fuse = useMemo(
    () =>
      new Fuse(items, {
        keys: ["title", "subtitle"],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [items]
  );

  const results = useMemo(() => {
    if (!query.trim()) return items.slice(0, 8);
    return fuse.search(query, { limit: 8 }).map((r) => r.item);
  }, [query, fuse, items]);

  const [prevQuery, setPrevQuery] = useState(query);
  if (query !== prevQuery) {
    setPrevQuery(query);
    setActiveIndex(0);
  }

  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setQuery("");
      setPrevQuery("");
      setActiveIndex(0);
    }
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    function onOpenRequest() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onOpenRequest);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onOpenRequest);
    };
  }, []);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function navigate(href: string) {
    setOpen(false);
    router.push(href);
  }

  function onInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = results[activeIndex];
      if (item) navigate(item.href);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]">
      <button
        aria-label="Fechar busca"
        onClick={() => setOpen(false)}
        className="fixed inset-0 bg-[var(--overlay)]"
      />
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-background-raised shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="h-4 w-4 shrink-0 text-foreground-subtle" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder="Buscar medicamento, doença ou atualização..."
            className="h-14 w-full bg-transparent text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none"
          />
          <kbd className="hidden shrink-0 rounded border border-border px-1.5 py-0.5 text-[10px] text-foreground-subtle sm:block">
            ESC
          </kbd>
        </div>
        <ul className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-8 text-center text-sm text-foreground-subtle">
              Nenhum resultado para &quot;{query}&quot;.
            </li>
          )}
          {results.map((item, index) => {
            const Icon = TYPE_META[item.type].icon;
            const active = index === activeIndex;
            return (
              <li key={`${item.type}-${item.href}`}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => navigate(item.href)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                    active ? "bg-brand-soft" : ""
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground-muted">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {item.title}
                    </span>
                    <span className="block truncate text-xs text-foreground-subtle">
                      {item.subtitle}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] text-foreground-subtle">
                    {TYPE_META[item.type].label}
                  </span>
                  {active && <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-brand" />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
