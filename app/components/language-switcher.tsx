"use client";

import { useState } from "react";
import { languages, type Language } from "../lib/site";
import { useLanguage } from "./language-provider";

type LanguageSwitcherProps = {
  compact?: boolean;
};

export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const activeLanguage =
    languages.find((item) => item.code === language) ?? languages[0];

  function chooseLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    setOpen(false);
  }

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (
          !event.currentTarget.contains(event.relatedTarget as Node | null)
        ) {
          setOpen(false);
        }
      }}
    >
      <button
        aria-expanded={open}
        aria-label="Ganti bahasa"
        className={`inline-flex h-11 items-center gap-2 rounded-full text-sm font-semibold text-card-foreground transition hover:text-accent ${
          compact
            ? "min-w-11 justify-center bg-transparent px-3 hover:bg-accent/10 sm:min-w-28 sm:justify-start sm:px-4"
            : "min-w-36 justify-between border border-border bg-card px-3 hover:border-accent/50 hover:bg-accent/10"
        }`}
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className="text-base leading-none">{activeLanguage.flag}</span>
        <span className={compact ? "hidden sm:inline" : undefined}>
          {compact ? activeLanguage.shortLabel : activeLanguage.label}
        </span>
        <ChevronDownIcon className={compact ? "hidden sm:block" : undefined} />
      </button>

      {open ? (
        <div className="absolute right-0 top-12 z-50 w-40 space-y-1 rounded-lg border border-border bg-card p-2 shadow-popover">
          {languages.map((item) => (
            <button
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition ${
                language === item.code
                  ? "bg-accent text-accent-foreground"
                  : "text-card-foreground hover:bg-accent/10 hover:text-accent"
              }`}
              key={item.code}
              onClick={() => chooseLanguage(item.code)}
              type="button"
            >
              <span className="text-base leading-none">{item.flag}</span>
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 ${className ?? ""}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
