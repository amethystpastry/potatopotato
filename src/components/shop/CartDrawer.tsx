"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Trash2, X } from "lucide-react";
import QuantityStepper from "./QuantityStepper";
import CheckoutButton from "./CheckoutButton";
import { cartTotals, lineDetails, useCart } from "@/lib/store";
import { money } from "@/lib/format";
import { backdropStyles } from "@/lib/products";
import { useHydrated } from "@/lib/useHydrated";
import { useLang, useT } from "@/lib/i18n";
import { productName, term } from "@/lib/productText";

export default function CartDrawer() {
  const { items, open, setOpen, setQty, remove } = useCart();
  const hydrated = useHydrated();
  const lang = useLang();
  const t = useT();
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const { subtotal, count } = cartTotals(items);

  return (
    <AnimatePresence>
      {open && hydrated && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-amethyst-deep/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="fixed top-0 right-0 z-[61] h-full w-full max-w-md bg-white flex flex-col shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            aria-label={t("Shopping cart", "购物袋")}
          >
            <header className="flex items-center justify-between px-6 h-[72px] border-b border-line">
              <h2 className="font-display text-2xl">{t("Your bag", "购物袋")} <span className="text-muted text-base">({count})</span></h2>
              <button onClick={() => setOpen(false)} aria-label={t("Close cart", "关闭购物袋")} className="p-2 -mr-2"><X size={22} strokeWidth={1.5} /></button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {items.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center text-muted">
                  <p className="font-display text-2xl text-ink">{t("Your bag is empty", "购物袋是空的")}</p>
                  <p className="mt-2 text-sm">{t("Let’s fix that.", "去挑选几样吧。")}</p>
                  <Link href="/cakes" onClick={() => setOpen(false)} className="btn btn-primary mt-6">{t("Shop cakes", "选购蛋糕")}</Link>
                </div>
              )}
              {items.map((item) => {
                const { product, variant, total } = lineDetails(item);
                if (!product || !variant) return null;
                return (
                  <div key={item.key} className="flex gap-4">
                    <div className="relative h-24 w-20 shrink-0 rounded-xl overflow-hidden" style={{ background: backdropStyles[product.backdrop].tile }}>
                      <Image src={product.image} alt={productName(product, lang)} fill sizes="80px" className={product.alpha ? "object-contain p-2" : "object-cover"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-3">
                        <Link href={`/product/${product.slug}`} onClick={() => setOpen(false)} className="font-display text-lg leading-tight hover:text-amethyst">{productName(product, lang)}</Link>
                        <span className="text-sm whitespace-nowrap">{money(total)}</span>
                      </div>
                      <p className="text-xs text-muted mt-1">{term(variant.label, lang)}{item.message ? ` · “${item.message}”` : ""}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <QuantityStepper size="sm" value={item.qty} onChange={(n) => setQty(item.key, n)} />
                        <button onClick={() => remove(item.key)} aria-label={t("Remove", "移除")} className="text-muted hover:text-red-600"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {items.length > 0 && (
              <footer className="border-t border-line px-6 py-5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">{t("Subtotal", "小计")}</span>
                  <span className="font-medium">{money(subtotal)}</span>
                </div>
                <p className="text-xs text-muted">{t("Delivery or self-collection is chosen at checkout.", "结账时可选择送货或自取。")}</p>
                <CheckoutButton />
                <Link href="/cart" onClick={() => setOpen(false)} className="block text-center text-xs tracking-[0.2em] uppercase text-amethyst hover:underline">{t("View bag", "查看购物袋")}</Link>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
