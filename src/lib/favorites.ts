"use client";

import { useSyncExternalStore } from "react";

export type FavoriteType = "medicamento" | "doenca" | "atualizacao";

export interface FavoriteEntry {
  type: FavoriteType;
  slug: string;
}

const STORAGE_KEY = "rx.favoritos.v1";
const listeners = new Set<() => void>();
let cache: FavoriteEntry[] | null = null;

function read(): FavoriteEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function write(entries: FavoriteEntry[]) {
  cache = entries;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): FavoriteEntry[] {
  if (cache === null) {
    cache = read();
  }
  return cache;
}

const EMPTY: FavoriteEntry[] = [];

function getServerSnapshot(): FavoriteEntry[] {
  return EMPTY;
}

export function isFavorite(entries: FavoriteEntry[], type: FavoriteType, slug: string): boolean {
  return entries.some((e) => e.type === type && e.slug === slug);
}

export function toggleFavorite(type: FavoriteType, slug: string) {
  const current = getSnapshot();
  const exists = isFavorite(current, type, slug);
  const next = exists
    ? current.filter((e) => !(e.type === type && e.slug === slug))
    : [...current, { type, slug }];
  write(next);
}

export function useFavorites(): FavoriteEntry[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
