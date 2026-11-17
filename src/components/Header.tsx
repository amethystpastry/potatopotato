"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "./Logo";
import { useCart, cartTotals } from "@/lib/store";
import { useHydrated } from "@/lib/useHydrated";

const left = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
const right = [
  { href: "/cakes", label: "Cakes" },
  { href: "/pastries", label: "Pastries" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = useCart((s) => s.items);
  const setCartOpen = useCart((s) => s.setOpen);
  const hydrated = useHydrated();
  const count = hydrated ? cartTotals(items).count : 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (item: { href: string; label: string }) => {
    const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
    return (
      <Link
        key={item.href}
        href={item.href}
        className={`relative text-[0.78rem] tracking-[0.22em] uppercase transition-colors hover:text-amethyst ${
          active ? "text-amethyst" : "text-ink/80"
        }`}
      >
        {item.label}
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
        Free self-collection at Greenridge & Woodlands · Island-wide delivery
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

            <div className="flex items-center justify-end gap-10">
              <nav className="hidden md:flex items-center gap-10">{right.map(link)}</nav>
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 -mr-2 text-ink hover:text-amethyst transition-colors"
                aria-label="Open cart"
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
                  <Link href={item.href} onClick={() => setOpen(false)} className="font-display text-5xl font-light">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <p className="text-center text-white/60 text-xs tracking-[0.25em] uppercase pb-10">
              Greenridge · Woodlands · Singapore
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
