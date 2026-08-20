"use client";

import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): boolean {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot(): boolean | null {
  return null;
}

export function useIsDark(): boolean | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setDark(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  window.localStorage.setItem("rx.tema", dark ? "dark" : "light");
  listeners.forEach((listener) => listener());
}
