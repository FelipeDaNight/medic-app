import type { ReactNode } from "react";
import { AlertTriangle, Info, Lightbulb } from "lucide-react";

const VARIANTS = {
  warning: {
    icon: AlertTriangle,
    className: "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200",
    iconClassName: "text-amber-500",
  },
  info: {
    icon: Info,
    className: "border-sky-200 bg-sky-50 text-sky-900 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-200",
    iconClassName: "text-sky-500",
  },
  highlight: {
    icon: Lightbulb,
    className: "border-brand/25 bg-brand-soft text-brand-strong",
    iconClassName: "text-brand",
  },
} as const;

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: keyof typeof VARIANTS;
  title?: string;
  children: ReactNode;
}) {
  const { icon: Icon, className, iconClassName } = VARIANTS[variant];
  return (
    <div className={`flex gap-3 rounded-xl border p-4 text-sm leading-relaxed ${className}`}>
      <Icon className={`h-5 w-5 shrink-0 ${iconClassName}`} />
      <div>
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <div>{children}</div>
      </div>
    </div>
  );
}
