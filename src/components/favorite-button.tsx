"use client";

import { Star } from "lucide-react";
import { isFavorite, toggleFavorite, useFavorites, type FavoriteType } from "@/lib/favorites";

function cx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function FavoriteButton({
  type,
  slug,
  label,
  size = "md",
}: {
  type: FavoriteType;
  slug: string;
  label: string;
  size?: "sm" | "md";
}) {
  const favorites = useFavorites();
  const active = isFavorite(favorites, type, slug);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(type, slug);
      }}
      aria-pressed={active}
      aria-label={active ? `Remover ${label} dos favoritos` : `Salvar ${label} nos favoritos`}
      title={active ? "Remover dos favoritos" : "Salvar nos favoritos"}
      className={cx(
        "inline-flex items-center justify-center rounded-full border transition-colors",
        size === "sm" ? "h-8 w-8" : "h-10 w-10",
        active
          ? "border-amber-300 bg-amber-50 text-amber-500 dark:border-amber-800 dark:bg-amber-950"
          : "border-border bg-background-raised text-foreground-subtle hover:border-border-strong hover:text-foreground-muted"
      )}
    >
      <Star className={cx(size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]", active && "fill-current")} />
    </button>
  );
}
