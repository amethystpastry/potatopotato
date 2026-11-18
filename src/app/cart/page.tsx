"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import QuantityStepper from "@/components/shop/QuantityStepper";
import CheckoutButton from "@/components/shop/CheckoutButton";
import { cartTotals, lineDetails, useCart } from "@/lib/store";
import { money } from "@/lib/format";
import { backdropStyles } from "@/lib/products";
import { site } from "@/data/site";
import { useHydrated } from "@/lib/useHydrated";
import { useLang, useT } from "@/lib/i18n";
import { productName, term } from "@/lib/productText";

export default function CartPage() {
  const { items, setQty, remove } = useCart();
  const hydrated = useHydrated();
  const lang = useLang();
  const t = useT();
  const { subtotal, count } = cartTotals(items);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <p className="eyebrow mb-3">{t("Your bag", "购物袋")}</p>
      <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">{t("Review your order", "确认您的订单")}</h1>

      {hydrated && items.length === 0 && (
        <div className="mt-16 rounded-xl bg-amethyst-mist p-12 text-center">
          <p className="font-display text-3xl">{t("Your bag is empty", "购物袋是空的")}</p>
          <p className="text-muted mt-2">{t("Browse our cakes and festive pastries.", "看看我们的蛋糕与节庆糕点。")}</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/cakes" className="btn btn-primary">{t("Shop cakes", "选购蛋糕")}</Link>
            <Link href="/pastries" className="btn btn-outline">{t("Shop pastries", "选购糕点")}</Link>
          </div>
        </div>
      )}

      {hydrated && items.length > 0 && (
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr] items-start">
          <ul className="divide-y divide-line">
            {items.map((item) => {
              const { product, variant, total } = lineDetails(item);
              if (!product || !variant) return null;
              return (
                <li key={item.key} className="py-6 flex gap-5">
                  <Link href={`/product/${product.slug}`} className="relative h-32 w-28 shrink-0 rounded-xl overflow-hidden" style={{ background: backdropStyles[product.backdrop].tile }}>
                    <Image src={product.image} alt={productName(product, lang)} fill sizes="112px" className={product.alpha ? "object-contain p-3" : "object-cover"} />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-4">
                      <div>
                        <Link href={`/product/${product.slug}`} className="font-display text-2xl leading-tight hover:text-amethyst">{productName(product, lang)}</Link>
                        <p className="text-sm text-muted mt-1">{term(variant.label, lang)}{variant.note ? ` · ${term(variant.note, lang)}` : ""}</p>
                        {item.message && <p className="text-sm text-muted mt-1">{t("Message", "祝福语")}: “{item.message}”</p>}
                      </div>
                      <p className="font-medium whitespace-nowrap">{money(total)}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-5">
                      <QuantityStepper value={item.qty} onChange={(n) => setQty(item.key, n)} />
                      <button onClick={() => remove(item.key)} className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-muted hover:text-red-600"><Trash2 size={14} /> {t("Remove", "移除")}</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <aside className="rounded-xl border border-line p-7 md:p-8 lg:sticky lg:top-28">
            <h2 className="font-display text-2xl">{t("Summary", "订单摘要")}</h2>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between"><dt className="text-muted">{t("Items", "件数")}</dt><dd>{count}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">{t("Subtotal", "小计")}</dt><dd className="font-medium">{money(subtotal)}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">{t("Self-collection", "门市自取")}</dt><dd>{t("Free", "免费")}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">{t("Island-wide delivery", "全岛送货")}</dt><dd>{money(site.deliveryFee)}</dd></div>
            </dl>
            <p className="mt-4 text-xs text-muted leading-relaxed">{t("Choose collection or delivery, and enter your preferred date, on the next step. Cakes need at least 3 days’ notice.", "下一步可选择自取或送货，并填写希望的日期。蛋糕需至少提前 3 天预订。")}</p>
            <CheckoutButton className="mt-7" />
          </aside>
        </div>
      )}
    </div>
  );
}
