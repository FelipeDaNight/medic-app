import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function DetailSection({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border py-6 first:border-t-0 first:pt-0">
      <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground-muted">
        <Icon className="h-4 w-4 text-brand" />
        {title}
      </h2>
      <div className="mt-3 text-[15px] leading-relaxed text-foreground">{children}</div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span className="text-foreground-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}
