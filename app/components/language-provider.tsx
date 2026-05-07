"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { type Language, siteCopy } from "../lib/site";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: (typeof siteCopy)[Language];
};

const STORAGE_KEY = "digitra-language";
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

      if (storedLanguage === "id" || storedLanguage === "en") {
        setLanguageState(storedLanguage);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  };

  const copy = useMemo(() => siteCopy[language], [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy,
    }),
    [copy, language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
