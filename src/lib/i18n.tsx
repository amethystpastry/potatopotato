"use client";

import { useEffect, type ReactNode } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useHydrated } from "./useHydrated";

export type Lang = "en" | "zh";

const useLangStore = create<{ lang: Lang; setLang: (lang: Lang) => void }>()(
  persist((set) => ({ lang: "en", setLang: (lang) => set({ lang }) }), { name: "amethyst-lang" }),
);

export const setLang = (lang: Lang) => useLangStore.getState().setLang(lang);

/** Current language. Always "en" during SSR and hydration so markup matches. */
export function useLang(): Lang {
  const lang = useLangStore((s) => s.lang);
  return useHydrated() ? lang : "en";
}

/** Pick the English or Chinese value for the current language. */
export function useT() {
  const lang = useLang();
  return <V,>(en: V, zh: V): V => (lang === "zh" ? zh : en);
}

/** Inline bilingual text, usable from server components. */
export function T({ en, zh }: { en: ReactNode; zh: ReactNode }) {
  return <>{useLang() === "zh" ? zh : en}</>;
}

/** Keeps <html lang> in step with the chosen language. */
export function LangSync() {
  const lang = useLang();
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hans-SG" : "en";
  }, [lang]);
  return null;
}
