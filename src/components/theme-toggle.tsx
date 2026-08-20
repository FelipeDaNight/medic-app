"use client";

import { Moon, Sun } from "lucide-react";
import { useIsDark, setDark } from "@/lib/theme";

export function ThemeToggle() {
  const isDark = useIsDark();

  function toggle() {
    setDark(!(isDark ?? false));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground-muted transition-colors hover:border-border-strong hover:text-foreground"
    >
      {isDark === null ? (
        <span className="block h-4 w-4" />
      ) : isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
