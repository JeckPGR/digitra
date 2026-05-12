"use client";

import { useRef, useState, type ReactNode } from "react";
import { useLanguage } from "./language-provider";
import { useTheme, type Theme } from "./theme-provider";

type ThemeSwitcherProps = {
  compact?: boolean;
};

export function ThemeSwitcher({ compact = false }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const { copy } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function chooseTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    setOpen(false);
  }

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        aria-expanded={open}
        aria-label={copy.theme.switchLabel}
        className={`inline-flex h-11 items-center gap-2 rounded-full text-sm font-semibold text-card-foreground transition hover:text-accent ${
          compact
            ? "bg-transparent px-4 hover:bg-accent/10"
            : "border border-border bg-card px-3 hover:border-accent/50 hover:bg-accent/10"
        }`}
        onBlur={(event) => {
          if (
            !event.currentTarget.parentElement?.contains(
              event.relatedTarget as Node | null,
            )
          ) {
            setOpen(false);
          }
        }}
        onClick={() => setOpen((current) => !current)}
        suppressHydrationWarning
        type="button"
      >
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        <span className={compact ? "hidden sm:inline" : undefined}>
          {theme === "dark" ? copy.theme.dark : copy.theme.light}
        </span>
      </button>

      {open ? (
        <div className="absolute space-y-1 right-0 top-12 z-50 w-40 rounded-lg border border-border bg-card p-2 shadow-popover">
          <ThemeOption
            active={theme === "dark"}
            icon={<MoonIcon />}
            label={copy.theme.dark}
            onClick={() => chooseTheme("dark")}
          />
          <ThemeOption
            active={theme === "light"}
            icon={<SunIcon />}
            label={copy.theme.light}
            onClick={() => chooseTheme("light")}
          />
        </div>
      ) : null}
    </div>
  );
}

function ThemeOption({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition ${
        active
          ? "bg-accent text-accent-foreground"
          : "text-card-foreground hover:bg-accent/10 hover:text-accent"
      }`}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onClick}
      type="button"
    >
      {icon}
      {label}
    </button>
  );
}

export function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M20.99 12.62A8.5 8.5 0 1 1 11.38 3a6.5 6.5 0 0 0 9.61 9.62Z" />
    </svg>
  );
}
