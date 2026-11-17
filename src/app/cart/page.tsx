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

export default function CartPage() {
  const { items, setQty, remove } = useCart();
  const hydrated = useHydrated();
  const { subtotal, count } = cartTotals(items);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <p className="eyebrow mb-3">Your bag</p>
      <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">Review your order</h1>

      {hydrated && items.length === 0 && (
        <div className="mt-16 rounded-xl bg-amethyst-mist p-12 text-center">
          <p className="font-display text-3xl">Your bag is empty</p>
          <p className="text-muted mt-2">Browse our cakes and festive pastries.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/cakes" className="btn btn-primary">Shop cakes</Link>
            <Link href="/pastries" className="btn btn-outline">Shop pastries</Link>
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
                    <Image src={product.image} alt={product.name} fill sizes="112px" className={product.alpha ? "object-contain p-3" : "object-cover"} />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-4">
                      <div>
                        <Link href={`/product/${product.slug}`} className="font-display text-2xl leading-tight hover:text-amethyst">{product.name}</Link>
                        <p className="text-sm text-muted mt-1">{variant.label}{variant.note ? ` · ${variant.note}` : ""}</p>
                        {item.message && <p className="text-sm text-muted mt-1">Message: “{item.message}”</p>}
                      </div>
                      <p className="font-medium whitespace-nowrap">{money(total)}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-5">
                      <QuantityStepper value={item.qty} onChange={(n) => setQty(item.key, n)} />
                      <button onClick={() => remove(item.key)} className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-muted hover:text-red-600"><Trash2 size={14} /> Remove</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <aside className="rounded-xl border border-line p-7 md:p-8 lg:sticky lg:top-28">
            <h2 className="font-display text-2xl">Summary</h2>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between"><dt className="text-muted">Items</dt><dd>{count}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Subtotal</dt><dd className="font-medium">{money(subtotal)}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Self-collection</dt><dd>Free</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Island-wide delivery</dt><dd>{money(site.deliveryFee)}</dd></div>
            </dl>
            <p className="mt-4 text-xs text-muted leading-relaxed">Choose collection or delivery, and enter your preferred date, on the next step. Cakes need at least 3 days’ notice.</p>
            <CheckoutButton className="mt-7" />
          </aside>
        </div>
      )}
    </div>
  );
}
