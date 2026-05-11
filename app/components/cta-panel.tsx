import type { ReactNode } from "react";

type CtaPanelProps = {
  action: ReactNode;
  className?: string;
  description: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
};

export function CtaPanel({
  action,
  className = "",
  description,
  eyebrow,
  title,
}: CtaPanelProps) {
  return (
    <div
      className={`relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-accent/25 bg-card p-8 text-card-foreground sm:p-10 md:flex md:items-center md:justify-between md:gap-8 ${className}`}
    >
      <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/5" />
      <span className="pointer-events-none absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-accent/[0.04]" />

      <div className="relative mb-6 md:mb-0">
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
          {description}
        </p>
      </div>

      <div className="relative shrink-0">{action}</div>
    </div>
  );
}
