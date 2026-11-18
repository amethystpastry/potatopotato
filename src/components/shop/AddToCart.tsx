"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import QuantityStepper from "./QuantityStepper";
import { money } from "@/lib/format";
import { useCart } from "@/lib/store";
import type { Product } from "@/lib/products";
import { useLang, useT } from "@/lib/i18n";
import { term } from "@/lib/productText";

export default function AddToCart({ product }: { product: Product }) {
  const router = useRouter();
  const lang = useLang();
  const t = useT();
  const add = useCart((s) => s.add);
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState("");
  const variant = product.variants.find((v) => v.id === variantId)!;

  const addItem = () => add({ slug: product.slug, variantId, qty, message: message.trim() || undefined });

  return (
    <div className="space-y-7">
      {product.variants.length > 1 && (
        <div>
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-muted mb-3">{t("Size", "尺寸")}</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVariantId(v.id)}
                className={`rounded-md border px-4 py-3 text-left transition-colors ${
                  v.id === variantId ? "border-amethyst bg-amethyst-soft text-amethyst-deep" : "border-line hover:border-amethyst/50"
                }`}
              >
                <span className="block text-sm font-medium">{term(v.label, lang)}</span>
                {v.note && <span className="block text-xs text-muted">{term(v.note, lang)}</span>}
                <span className="block text-xs mt-1">{money(v.price)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {product.allowMessage && (
        <div>
          <label className="text-[0.65rem] tracking-[0.25em] uppercase text-muted mb-3 block" htmlFor="message">
            {t("Message on cake", "蛋糕祝福语")} <span className="normal-case tracking-normal">{t("(optional)", "（选填）")}</span>
          </label>
          <input
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, 60))}
            placeholder={t("Happy 4th Birthday Louise", "例如：祝 Louise 4 岁生日快乐")}
            className="w-full rounded-md border border-line px-4 py-3 text-sm outline-none focus:border-amethyst transition-colors bg-white"
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <QuantityStepper value={Math.max(1, qty)} onChange={(n) => setQty(Math.max(1, n))} />
        <p className="font-display text-3xl">{money(variant.price * qty)}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button type="button" onClick={addItem} className="btn btn-primary flex-1">
          <ShoppingBag size={16} strokeWidth={1.6} /> {t("Add to cart", "加入购物袋")}
        </button>
        <button
          type="button"
          onClick={() => {
            addItem();
            useCart.getState().setOpen(false);
            router.push("/cart");
          }}
          className="btn btn-outline flex-1"
        >
          {t("Buy now", "立即购买")}
        </button>
      </div>
    </div>
  );
}
