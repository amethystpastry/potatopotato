import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";
import { site } from "@/data/site";
import { T } from "@/lib/i18n";

// Happy-customer figure is a placeholder: replace with the real number.
const stats = [
  { to: 5000, suffix: "+", label: "Happy customers", zh: "满意顾客" },
  { to: 100, suffix: "+", label: "Cake designs", zh: "蛋糕款式" },
  { to: 2, suffix: "", label: "Outlets in Singapore", zh: "新加坡门市" },
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
          <p className="eyebrow mb-4"><T en="About us" zh="关于我们" /> · {site.chineseName}</p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight text-ink">
            <T en={<>A neighbourhood bakery with a <em className="italic">big heart</em></>} zh={<>街坊小店，<em>用心</em>烘焙</>} />
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            <T
              en="Amethyst Pastry & Cakes began as a small shop in Greenridge, Bukit Panjang. Today we sculpt hundreds of custom cakes a year and bake festive goodies that travel from Takashimaya fairs to family reunion tables across Singapore."
              zh="紫晶阁从武吉班让 Greenridge 的一家小店起步。如今我们每年手工制作数百个订制蛋糕，烘焙的节庆糕点从高岛屋年货展一路走进全岛的团圆饭桌。"
            />
          </p>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            <T en="Every cake is made to order. Every pineapple ball is rolled by hand. No shortcuts, no pre-mixes." zh="每个蛋糕都按单制作，每颗黄梨球都亲手搓制。不走捷径，不用预拌粉。" />
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 md:gap-6 border-y border-amethyst/15 py-7">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-sans text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-amethyst leading-none">
                  <CountUp to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[0.65rem] sm:text-xs tracking-[0.18em] uppercase text-muted"><T en={s.label} zh={s.zh} /></p>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn btn-outline mt-10"><T en="Our story" zh="品牌故事" /></Link>
        </Reveal>
      </div>
    </section>
  );
}
