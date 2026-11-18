"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "./Logo";
import { useCart, cartTotals } from "@/lib/store";
import { useHydrated } from "@/lib/useHydrated";
import { setLang, useLang, useT, type Lang } from "@/lib/i18n";

type NavItem = { href: string; label: string; zh: string };
const left: NavItem[] = [
  { href: "/", label: "Home", zh: "首页" },
  { href: "/about", label: "About", zh: "关于我们" },
  { href: "/contact", label: "Contact", zh: "联系我们" },
];
const right: NavItem[] = [
  { href: "/cakes", label: "Cakes", zh: "蛋糕" },
  { href: "/pastries", label: "Pastries", zh: "糕点" },
];

/** EN / 中文 switch. */
function LangSwitch({ light = false, className = "" }: { light?: boolean; className?: string }) {
  const lang = useLang();
  const opt = (value: Lang, text: string) => {
    const active = lang === value;
    return (
      <button
        type="button"
        onClick={() => setLang(value)}
        aria-pressed={active}
        lang={value === "zh" ? "zh-Hans" : "en"}
        className={`whitespace-nowrap px-1.5 md:px-2 py-1 text-[0.72rem] tracking-[0.12em] transition-colors ${
          active
            ? light ? "text-white font-medium" : "text-amethyst font-medium"
            : light ? "text-white/55 hover:text-white" : "text-ink/45 hover:text-amethyst"
        }`}
      >
        {text}
      </button>
    );
  };
  return (
    <div role="group" aria-label="Language / 语言" className={`flex items-center ${className}`}>
      {opt("en", "EN")}
      <span className={light ? "text-white/30" : "text-ink/20"}>|</span>
      {opt("zh", "中文")}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = useCart((s) => s.items);
  const setCartOpen = useCart((s) => s.setOpen);
  const hydrated = useHydrated();
  const count = hydrated ? cartTotals(items).count : 0;
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (item: NavItem) => {
    const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
    return (
      <Link
        key={item.href}
        href={item.href}
        className={`relative text-[0.78rem] tracking-[0.22em] uppercase transition-colors hover:text-amethyst ${
          active ? "text-amethyst" : "text-ink/80"
        }`}
      >
        {t(item.label, item.zh)}
        <span
          className={`absolute -bottom-1.5 left-0 h-px bg-amethyst transition-all duration-500 ${
            active ? "w-full" : "w-0"
          }`}
        />
      </Link>
    );
  };

  return (
    <>
      <div className="bg-amethyst text-white text-center text-[0.7rem] tracking-[0.2em] uppercase py-2 px-4">
        {t("Free self-collection at Greenridge & Woodlands · Island-wide delivery", "Greenridge 与 Woodlands 免费自取 · 全岛送货")}
      </div>
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-18px_rgba(61,28,102,0.35)]" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-[72px] md:h-[88px]">
            <nav className="hidden md:flex items-center gap-10">{left.map(link)}</nav>
            <button
              className="md:hidden p-2 -ml-2 text-ink"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>

            <Logo height={scrolled ? 40 : 50} className="transition-all duration-500 justify-self-center" />

            <div className="flex items-center justify-end gap-3 md:gap-8">
              <nav className="hidden md:flex items-center gap-10">{right.map(link)}</nav>
              <LangSwitch className="md:-mr-3" />
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 -mr-2 text-ink hover:text-amethyst transition-colors"
                aria-label={t("Open cart", "打开购物袋")}
              >
                <ShoppingBag size={22} strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-amethyst text-white text-[10px] font-medium flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-amethyst-deep text-white flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-5 h-[72px]">
              <Logo white height={40} />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center items-center gap-8">
              {[...left, ...right].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link href={item.href} onClick={() => setOpen(false)} className="font-display text-3xl">
                    {t(item.label, item.zh)}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <LangSwitch light className="justify-center pb-6 scale-125" />
            <p className="text-center text-white/60 text-xs tracking-[0.25em] uppercase pb-10">
              Greenridge · Woodlands · Singapore
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
