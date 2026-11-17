import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import AddToCart from "@/components/shop/AddToCart";
import ProductCard from "@/components/shop/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { queue } from "@/lib/queue";
import { backdropStyles, byCollection, bySlug, collections, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = bySlug(slug);
  return p ? { title: p.name, description: p.description, openGraph: { images: [p.image] } } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = bySlug(slug);
  if (!product) notFound();
  const c = collections[product.collection];
  const related = byCollection(product.collection).filter((p) => p.slug !== product.slug).slice(0, 4);
  const bd = backdropStyles[product.backdrop];
  const dark = product.backdrop === "crimson";

  return (
    <>
      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[60vh] lg:min-h-[calc(100vh-88px)] lg:sticky lg:top-[88px]" style={{ background: bd.page }}>
          {bd.image && <Image src={bd.image} alt="" fill sizes="50vw" className="object-cover opacity-90" priority />}
          <div className="absolute inset-0 flex items-center justify-center p-10 md:p-16">
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={1000}
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className={`${product.alpha ? "object-contain max-h-[70vh] w-auto drop-shadow-[0_50px_60px_rgba(0,0,0,0.35)] float-y" : "rounded-xl object-cover max-h-[70vh] w-auto shadow-2xl"}`}
            />
          </div>
          <nav className={`absolute top-6 left-6 flex items-center gap-1 text-[0.65rem] tracking-[0.2em] uppercase ${dark ? "text-white/80" : "text-ink/60"}`}>
            <Link href="/" className="hover:underline">Home</Link><ChevronRight size={12} />
            <Link href={c.category === "cakes" ? "/cakes" : "/pastries"} className="hover:underline">{c.category}</Link><ChevronRight size={12} />
            <span>{c.label}</span>
          </nav>
        </div>

        <div className="px-6 sm:px-10 lg:px-16 py-12 lg:py-20 max-w-xl">
          <Reveal>
            <p className="eyebrow mb-3">{c.label}{product.seasonal ? ` · ${product.seasonal}` : ""}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02]">{product.name}</h1>
            <p className="mt-6 text-muted text-lg leading-relaxed">{product.description}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <AddToCart product={product} />
          </Reveal>
          <Reveal delay={0.15} className="mt-12 space-y-5 text-sm text-ink/75 border-t border-line pt-8">
            {product.category === "cakes" ? (
              <>
                <p><strong className="text-ink font-medium">Lead time.</strong> Please order at least 3 days ahead. Sculpted and tiered designs may need 5 – 7 days; we’ll confirm by WhatsApp.</p>
                <p><strong className="text-ink font-medium">Flavours.</strong> Vanilla, chocolate, pandan, red velvet or Oreo sponge with fresh cream or buttercream. Tell us at checkout.</p>
                <p><strong className="text-ink font-medium">Collection & delivery.</strong> Free self-collection at Greenridge or Woodlands, or island-wide delivery.</p>
              </>
            ) : (
              <>
                <p><strong className="text-ink font-medium">Freshness.</strong> Baked in small batches. Best enjoyed within one month of purchase; keep in a cool, dry place.</p>
                <p><strong className="text-ink font-medium">Halal certified.</strong> Suitable for sharing with everyone at the table.</p>
                <p><strong className="text-ink font-medium">Collection & delivery.</strong> Free self-collection at our outlets, or island-wide delivery.</p>
              </>
            )}
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-line">
          <Reveal className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-light">You may also love</h2>
            <Link href={c.category === "cakes" ? `/cakes#${product.collection}` : `/pastries#${product.collection}`} className="text-xs tracking-[0.2em] uppercase text-amethyst hover:underline">View all</Link>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {related.map((p, i) => (
              <Reveal key={p.slug} from="left" delay={queue(i)}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
