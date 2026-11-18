import { collectionZh, productZh, termZh } from "@/data/productsZh";
import type { Collection, Product } from "./products";
import { collections } from "./products";
import type { Lang } from "./i18n";

// Pure helpers (no hooks) so both server and client components can use them.
export const zhName = (p: Product) => productZh[p.slug]?.name ?? p.name;
export const zhDescription = (p: Product) => productZh[p.slug]?.description ?? p.description;
export const zhTerm = (s: string) => termZh[s] ?? s;

export const productName = (p: Product, lang: Lang) => (lang === "zh" ? zhName(p) : p.name);
export const collectionLabel = (c: Collection, lang: Lang) =>
  lang === "zh" ? collectionZh[c].label : collections[c].label;
export const collectionBlurb = (c: Collection, lang: Lang) =>
  lang === "zh" ? collectionZh[c].blurb : collections[c].blurb;
export const term = (s: string | undefined, lang: Lang) => (s && lang === "zh" ? zhTerm(s) : s);
export const categoryLabel = (c: "cakes" | "pastries", lang: Lang) =>
  lang === "zh" ? (c === "cakes" ? "蛋糕" : "糕点") : c === "cakes" ? "Cakes" : "Pastries";
