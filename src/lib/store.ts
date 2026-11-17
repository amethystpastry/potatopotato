"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { bySlug } from "./products";

export interface CartItem {
  key: string;
  slug: string;
  variantId: string;
  qty: number;
  message?: string;
}

interface CartState {
  items: CartItem[];
  open: boolean;
  add: (item: Omit<CartItem, "key">) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
  setOpen: (open: boolean) => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      open: false,
      add: (item) =>
        set((s) => {
          const key = `${item.slug}:${item.variantId}:${item.message ?? ""}`;
          const existing = s.items.find((i) => i.key === key);
          const items = existing
            ? s.items.map((i) => (i.key === key ? { ...i, qty: i.qty + item.qty } : i))
            : [...s.items, { ...item, key }];
          return { items, open: true };
        }),
      remove: (key) => set((s) => ({ items: s.items.filter((i) => i.key !== key) })),
      setQty: (key, qty) =>
        set((s) => ({
          items: qty <= 0
            ? s.items.filter((i) => i.key !== key)
            : s.items.map((i) => (i.key === key ? { ...i, qty } : i)),
        })),
      clear: () => set({ items: [] }),
      setOpen: (open) => set({ open }),
    }),
    { name: "amethyst-cart", partialize: (s) => ({ items: s.items }) },
  ),
);

export function lineDetails(item: CartItem) {
  const product = bySlug(item.slug);
  const variant = product?.variants.find((v) => v.id === item.variantId);
  return { product, variant, total: (variant?.price ?? 0) * item.qty };
}

export function cartTotals(items: CartItem[]) {
  const subtotal = items.reduce((sum, i) => sum + lineDetails(i).total, 0);
  const count = items.reduce((n, i) => n + i.qty, 0);
  return { subtotal, count };
}
