"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { backdropStyles, fromPrice, collections, type Product } from "@/lib/products";
import { money } from "@/lib/format";
import { useCart } from "@/lib/store";

export default function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const add = useCart((s) => s.add);
  const single = product.variants.length === 1;
  return (
    <article className="group">
      <Link href={`/product/${product.slug}`} className="block relative rounded-xl overflow-hidden" style={{ background: backdropStyles[product.backdrop].tile }}>
        <div className="relative aspect-[4/5]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
            className={`${product.alpha ? "object-contain p-6 md:p-8 drop-shadow-[0_24px_30px_rgba(0,0,0,0.25)]" : "object-cover"} transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]`}
          />
        </div>
        {product.badge && (
          <span className="absolute top-4 left-4 rounded-sm bg-white/90 backdrop-blur px-3 py-1 text-[0.62rem] tracking-[0.2em] uppercase text-amethyst-deep">
            {product.badge}
          </span>
        )}
        {single && (
          <button
            onClick={(e) => {
              e.preventDefault();
              add({ slug: product.slug, variantId: product.variants[0].id, qty: 1 });
            }}
            aria-label={`Add ${product.name} to cart`}
            className="absolute bottom-4 right-4 h-11 w-11 rounded-md bg-amethyst text-white flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-amethyst-deep"
          >
            <Plus size={18} />
          </button>
        )}
      </Link>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.62rem] tracking-[0.25em] uppercase text-amethyst/80">{collections[product.collection].label}</p>
          <h3 className="font-display text-base md:text-lg leading-snug mt-1">
            <Link href={`/product/${product.slug}`} className="hover:text-amethyst transition-colors">{product.name}</Link>
          </h3>
        </div>
        <p className="text-sm text-ink whitespace-nowrap pt-4">
          {single ? "" : <span className="text-muted">from </span>}
          {money(fromPrice(product))}
        </p>
      </div>
    </article>
  );
}
