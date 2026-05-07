"use client";

import { languages } from "../lib/site";
import { useLanguage } from "./language-provider";

type LanguageSwitcherProps = {
  compact?: boolean;
};

export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      aria-label="Language"
      className={`grid grid-cols-2 rounded-full border border-border bg-card/70 p-1 text-xs font-semibold text-muted ${
        compact ? "min-w-32" : "min-w-40"
      }`}
      role="group"
    >
      {languages.map((item) => (
        <button
          aria-pressed={language === item.code}
          className={`rounded-full px-3 py-2 transition ${
            language === item.code
              ? "bg-accent text-accent-foreground shadow-[0_10px_24px_rgba(255,107,53,0.18)]"
              : "hover:text-surface-foreground"
          }`}
          key={item.code}
          onClick={() => setLanguage(item.code)}
          type="button"
        >
          <span className="mr-1.5">{item.flag}</span>
          {compact ? item.shortLabel : item.label}
        </button>
      ))}
    </div>
  );
}
