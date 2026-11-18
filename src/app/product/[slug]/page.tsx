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
import { T } from "@/lib/i18n";
import { categoryLabel, collectionLabel, zhDescription, zhName, zhTerm } from "@/lib/productText";

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
            <Link href="/" className="hover:underline"><T en="Home" zh="首页" /></Link><ChevronRight size={12} />
            <Link href={c.category === "cakes" ? "/cakes" : "/pastries"} className="hover:underline"><T en={c.category} zh={categoryLabel(c.category, "zh")} /></Link><ChevronRight size={12} />
            <span><T en={c.label} zh={collectionLabel(product.collection, "zh")} /></span>
          </nav>
        </div>

        <div className="px-6 sm:px-10 lg:px-16 py-12 lg:py-20 max-w-xl">
          <Reveal>
            <p className="eyebrow mb-3">
              <T
                en={`${c.label}${product.seasonal ? ` · ${product.seasonal}` : ""}`}
                zh={`${collectionLabel(product.collection, "zh")}${product.seasonal ? ` · ${zhTerm(product.seasonal)}` : ""}`}
              />
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight"><T en={product.name} zh={zhName(product)} /></h1>
            <p className="mt-6 text-muted text-lg leading-relaxed"><T en={product.description} zh={zhDescription(product)} /></p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <AddToCart product={product} />
          </Reveal>
          <Reveal delay={0.15} className="mt-12 space-y-5 text-sm text-ink/75 border-t border-line pt-8">
            {product.category === "cakes" ? (
              <>
                <T
                  en={<>
                    <p><strong className="text-ink font-medium">Lead time.</strong> Please order at least 3 days ahead. Sculpted and tiered designs may need 5 – 7 days; we’ll confirm by WhatsApp.</p>
                    <p><strong className="text-ink font-medium">Flavours.</strong> Vanilla, chocolate, pandan, red velvet or Oreo sponge with fresh cream or buttercream. Tell us at checkout.</p>
                    <p><strong className="text-ink font-medium">Collection & delivery.</strong> Free self-collection at Greenridge or Woodlands, or island-wide delivery.</p>
                  </>}
                  zh={<>
                    <p><strong className="text-ink font-medium">预订时间。</strong>请至少提前 3 天下单。雕塑及多层蛋糕可能需要 5 – 7 天，我们会通过 WhatsApp 与您确认。</p>
                    <p><strong className="text-ink font-medium">口味。</strong>香草、巧克力、班兰、红丝绒或 Oreo 蛋糕胚，搭配鲜奶油或奶油霜。结账时告诉我们即可。</p>
                    <p><strong className="text-ink font-medium">自取与送货。</strong>可在 Greenridge 或 Woodlands 免费自取，或选择全岛送货。</p>
                  </>}
                />
              </>
            ) : (
              <>
                <T
                  en={<>
                    <p><strong className="text-ink font-medium">Freshness.</strong> Baked in small batches. Best enjoyed within one month of purchase; keep in a cool, dry place.</p>
                    <p><strong className="text-ink font-medium">Halal certified.</strong> Suitable for sharing with everyone at the table.</p>
                    <p><strong className="text-ink font-medium">Collection & delivery.</strong> Free self-collection at our outlets, or island-wide delivery.</p>
                  </>}
                  zh={<>
                    <p><strong className="text-ink font-medium">新鲜度。</strong>小批量烘焙，建议购买后一个月内享用，请存放于阴凉干燥处。</p>
                    <p><strong className="text-ink font-medium">清真认证。</strong>适合与餐桌上的每一位分享。</p>
                    <p><strong className="text-ink font-medium">自取与送货。</strong>可在门市免费自取，或选择全岛送货。</p>
                  </>}
                />
              </>
            )}
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-line">
          <Reveal className="flex items-end justify-between mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight"><T en="You may also love" zh="您可能也会喜欢" /></h2>
            <Link href={c.category === "cakes" ? `/cakes#${product.collection}` : `/pastries#${product.collection}`} className="text-xs tracking-[0.2em] uppercase text-amethyst hover:underline"><T en="View all" zh="查看全部" /></Link>
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
