import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { queue } from "@/lib/queue";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "The story of Amethyst Pastry & Cakes 紫晶阁, a neighbourhood bakery in Bukit Panjang and Woodlands, Singapore.",
};

const values = [
  { title: "Made to order", text: "Every cake is baked for your date, never from a chiller. Three days’ notice is all we ask." },
  { title: "Heritage recipes", text: "Our pineapple balls, kueh bangkit and mooncakes follow recipes handed down through the family." },
  { title: "Halal certified", text: "Our festive pastries are Halal certified, so every table can share them." },
  { title: "Honest pricing", text: "Neighbourhood prices for boutique craft. We accept CDC vouchers in store." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst-mist">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4">Our story · {site.chineseName}</p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-ink">
              Baked with <em className="italic">heart</em>, in the heartlands
            </h1>
            <p className="mt-7 text-lg text-muted leading-relaxed max-w-xl">
              Amethyst Pastry & Cakes started as a little neighbourhood bakery at Greenridge Shopping Centre in Bukit
              Panjang: fresh bread in the morning, waffles after school, and a display of birthday cakes that kept
              growing more ambitious.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed max-w-xl">
              Today our team sculpts peacocks, snooker tables and mermaid tails out of cake, and every Chinese New Year
              and Mid-Autumn we bake thousands of tins of goodies that travel from Takashimaya fairs to reunion tables
              across the island.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image src="/images/mooncake/take-event-1.jpg" alt="Amethyst team at a Mid-Autumn fair" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" priority />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What we believe" title="Small bakery, serious craft" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} from="left" delay={queue(i)} className="rounded-xl border border-line p-7">
                <p className="font-display text-2xl text-amethyst">0{i + 1}</p>
                <h3 className="font-display text-xl mt-4">{v.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image src="/images/hero/crimson-new-year-bakery-backdrop-3.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#4a0a0d]/55" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center text-white">
          <Reveal>
            <p className="eyebrow !text-white/75 mb-4">Festive seasons</p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight">From our oven to your reunion table</h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              You’ll find us at Takashimaya and shopping-mall fairs every Chinese New Year and Mid-Autumn, handing out
              samples of the pineapple balls and crispy-skin mooncakes we’ve become known for.
            </p>
            <Link href="/pastries" className="btn btn-white mt-8">Shop festive pastries</Link>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            {["/images/cny/take-event-1.jpg", "/images/cny/take-event-2.jpg", "/images/cny/take-event-4.jpg", "/images/mooncake/take-event-2.jpg"].map((src, i) => (
              <div key={src} className={`relative rounded-xl overflow-hidden ${i % 2 ? "aspect-[3/4] mt-8" : "aspect-[3/4]"}`}>
                <Image src={src} alt="Amethyst festive roadshow" fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Visit us" title="Two outlets, one kitchen" sub="Come by for fresh bread, waffles and cakes, or collect your order in person." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {site.outlets.map((o, i) => (
              <Reveal key={o.name} from="left" delay={queue(i, 2)} className="rounded-xl bg-amethyst-mist p-8 md:p-10">
                <h3 className="font-display text-2xl">{o.name}</h3>
                <p className="mt-4 flex gap-3 text-ink/80"><MapPin size={18} className="shrink-0 mt-0.5 text-amethyst" /><span>{o.address}<br />{o.postal}</span></p>
                <p className="mt-3 flex gap-3 text-ink/80"><Phone size={18} className="shrink-0 mt-0.5 text-amethyst" /><span>{site.phone} · {site.mobile}</span></p>
                <p className="mt-3 text-sm text-muted">{o.hours}</p>
                <a href={site.googleMapsUrl} target="_blank" rel="noreferrer" className="btn btn-outline mt-7 !py-3 !px-5 text-[0.7rem]">Get directions</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
