"use client";

import { ChevronDown } from "lucide-react";

export function FilterSelect({
  value,
  onChange,
  options,
  allLabel,
  label,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  allLabel: string;
  label: string;
}) {
  return (
    <div className="relative w-40 shrink-0 sm:w-48">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full appearance-none truncate rounded-xl border border-border bg-background-raised pl-3.5 pr-9 text-sm text-foreground focus:border-brand"
      >
        <option value="">{allLabel}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle" />
    </div>
  );
}
