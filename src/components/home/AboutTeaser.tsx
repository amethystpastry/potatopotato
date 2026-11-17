import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";
import { site } from "@/data/site";

// Happy-customer figure is a placeholder: replace with the real number.
const stats = [
  { to: 5000, suffix: "+", label: "Happy customers" },
  { to: 100, suffix: "+", label: "Cake designs" },
  { to: 2, suffix: "", label: "Outlets in Singapore" },
];

export default function AboutTeaser() {
  return (
    <section className="relative overflow-hidden bg-amethyst-mist py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image src="/images/cny/take-event-3.jpg" alt="Amethyst at a festive roadshow" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:pl-8">
          <p className="eyebrow mb-4">About us · {site.chineseName}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-ink">
            A neighbourhood bakery with a <em className="italic">big heart</em>
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            Amethyst Pastry & Cakes began as a small shop in Greenridge, Bukit Panjang. Today we sculpt hundreds of
            custom cakes a year and bake festive goodies that travel from Takashimaya fairs to family reunion tables
            across Singapore.
          </p>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Every cake is made to order. Every pineapple ball is rolled by hand. No shortcuts, no pre-mixes.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 md:gap-6 border-y border-amethyst/15 py-7">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-amethyst leading-none">
                  <CountUp to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[0.65rem] sm:text-xs tracking-[0.18em] uppercase text-muted">{s.label}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn btn-outline mt-10">Our story</Link>
        </Reveal>
      </div>
    </section>
  );
}
