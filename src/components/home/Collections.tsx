import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { queue } from "@/lib/queue";
import { collections, backdropStyles, type Collection } from "@/lib/products";
import { T } from "@/lib/i18n";
import { categoryLabel, collectionLabel } from "@/lib/productText";

const subs: Collection[] = ["elegant", "kids", "animal", "sport", "custom", "occasion", "cny", "mooncake"];

export default function Collections() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={<T en="What we make" zh="我们的出品" />}
          title={<T en="Two kitchens, one obsession" zh="两种手艺，一份执着" />}
          sub={<T en="Hand-sculpted celebration cakes made to order, and heritage festive pastries baked the way our grandmothers did." zh="按单手工订制的庆典蛋糕，以及沿用祖传做法烘焙的节庆糕点。" />}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal from="left">
            <Link href="/cakes" className="group relative block rounded-xl overflow-hidden aspect-[4/5] md:aspect-[5/6]">
              <Image src="/images/hero/powder-blue-bakery-hero-backdrop-1.jpg" alt="" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105" />
              <Image src="/images/custom/elegant-trio-of-artisan-celebration-cakes.png" alt="Celebration cakes" fill sizes="(max-width:768px) 100vw, 50vw" className="object-contain object-bottom p-6 pb-24 transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-3" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 bg-gradient-to-t from-amethyst-deep/80 via-amethyst-deep/30 to-transparent text-white">
                <p className="eyebrow !text-white/80 mb-2"><T en="Made to order · 3 days’ notice" zh="按单订制 · 请提前 3 天预订" /></p>
                <h3 className="font-display text-2xl md:text-3xl"><T en="Celebration Cakes" zh="庆典蛋糕" /></h3>
                <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase">
                  <T en="Shop cakes" zh="选购蛋糕" /> <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
          <Reveal from="left" delay={0.12}>
            <Link href="/pastries" className="group relative block rounded-xl overflow-hidden aspect-[4/5] md:aspect-[5/6]">
              <Image src="/images/hero/festive-chinese-new-year-snack-display-5.jpg" alt="Festive pastries in red lacquer boxes" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 bg-gradient-to-t from-[#4a0a0d]/85 via-[#4a0a0d]/30 to-transparent text-white">
                <p className="eyebrow !text-white/80 mb-2"><T en="Seasonal · Ships island-wide" zh="节庆限定 · 全岛送货" /></p>
                <h3 className="font-display text-2xl md:text-3xl"><T en="Festive Pastries" zh="节庆糕点" /></h3>
                <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase">
                  <T en="Shop pastries" zh="选购糕点" /> <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {subs.map((key, i) => {
            const c = collections[key];
            const href = c.category === "cakes" ? `/cakes#${key}` : `/pastries#${key}`;
            return (
              <Reveal key={key} from="left" delay={queue(i)}>
                <Link href={href} className="group block rounded-xl overflow-hidden border border-line bg-white hover:shadow-[0_24px_50px_-30px_rgba(61,28,102,0.45)] transition-shadow duration-500">
                  <div className="relative aspect-square" style={{ background: backdropStyles[c.backdrop].tile }}>
                    <Image src={c.cover} alt={c.label} fill sizes="(max-width:768px) 50vw, 25vw" className={`${c.cover.endsWith(".jpg") ? "object-cover" : "object-contain p-6"} transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105`} />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.62rem] tracking-[0.25em] uppercase text-amethyst/80 mb-1"><T en={categoryLabel(c.category, "en")} zh={categoryLabel(c.category, "zh")} /></p>
                    <h4 className="font-display text-lg md:text-xl leading-tight"><T en={c.label} zh={collectionLabel(key, "zh")} /></h4>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
