import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { queue } from "@/lib/queue";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About",
  description: "The story of Amethyst Pastry & Cakes 紫晶阁, a neighbourhood bakery in Bukit Panjang and Woodlands, Singapore.",
};

const values = [
  { title: "Made to order", text: "Every cake is baked for your date, never from a chiller. Three days’ notice is all we ask.",
    zhTitle: "按单订制", zhText: "每个蛋糕都按您的日期新鲜烘焙，绝不冷藏现货。只需提前三天预订。" },
  { title: "Heritage recipes", text: "Our pineapple balls, kueh bangkit and mooncakes follow recipes handed down through the family.",
    zhTitle: "传承配方", zhText: "我们的黄梨球、粿蔓吉与月饼，都沿用家族代代相传的配方。" },
  { title: "Halal certified", text: "Our festive pastries are Halal certified, so every table can share them.",
    zhTitle: "清真认证", zhText: "我们的节庆糕点获清真认证，每张餐桌都能一起分享。" },
  { title: "Honest pricing", text: "Neighbourhood prices for boutique craft. We accept CDC vouchers in store.",
    zhTitle: "实在价格", zhText: "精品手艺，街坊价格。门市接受 CDC 购物券。" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst-mist">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4"><T en="Our story" zh="品牌故事" /> · {site.chineseName}</p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-ink">
              <T en={<>Baked with <em className="italic">heart</em>, in the heartlands</>} zh={<>在邻里之间，<em>用心</em>烘焙</>} />
            </h1>
            <p className="mt-7 text-lg text-muted leading-relaxed max-w-xl">
              <T
                en="Amethyst Pastry & Cakes started as a little neighbourhood bakery at Greenridge Shopping Centre in Bukit Panjang: fresh bread in the morning, waffles after school, and a display of birthday cakes that kept growing more ambitious."
                zh="紫晶阁最初是武吉班让 Greenridge 购物中心里的一家街坊面包店：早上卖新鲜面包，放学后卖窝夫，橱窗里的生日蛋糕则越做越有野心。"
              />
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed max-w-xl">
              <T
                en="Today our team sculpts peacocks, snooker tables and mermaid tails out of cake, and every Chinese New Year and Mid-Autumn we bake thousands of tins of goodies that travel from Takashimaya fairs to reunion tables across the island."
                zh="如今，我们的团队用蛋糕雕出孔雀、桌球台和美人鱼尾巴。每逢农历新年与中秋，我们烘焙上千罐年饼与月饼，从高岛屋年货展送上全岛的团圆饭桌。"
              />
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image src="/images/mooncake/take-event-1.jpg" alt="Amethyst team at a Mid-Autumn fair" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" priority />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={<T en="What we believe" zh="我们的坚持" />} title={<T en="Small bakery, serious craft" zh="小小烘焙坊，认真做手艺" />} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} from="left" delay={queue(i)} className="rounded-xl border border-line p-7">
                <p className="font-display text-2xl text-amethyst">0{i + 1}</p>
                <h3 className="font-display text-xl mt-4"><T en={v.title} zh={v.zhTitle} /></h3>
                <p className="mt-3 text-muted leading-relaxed"><T en={v.text} zh={v.zhText} /></p>
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
            <p className="eyebrow !text-white/75 mb-4"><T en="Festive seasons" zh="节庆时节" /></p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight"><T en="From our oven to your reunion table" zh="从我们的烤炉，到您的团圆饭桌" /></h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              <T
                en="You’ll find us at Takashimaya and shopping-mall fairs every Chinese New Year and Mid-Autumn, handing out samples of the pineapple balls and crispy-skin mooncakes we’ve become known for."
                zh="每逢农历新年与中秋，您都能在高岛屋及各大商场的展销会找到我们，试吃我们闻名的黄梨球与酥皮月饼。"
              />
            </p>
            <Link href="/pastries" className="btn btn-white mt-8"><T en="Shop festive pastries" zh="选购节庆糕点" /></Link>
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
          <SectionHeading eyebrow={<T en="Visit us" zh="欢迎光临" />} title={<T en="Two outlets, one kitchen" zh="两家门市，同一厨房" />} sub={<T en="Come by for fresh bread, waffles and cakes, or collect your order in person." zh="欢迎来买新鲜面包、窝夫与蛋糕，或亲自领取您的订单。" />} />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {site.outlets.map((o, i) => (
              <Reveal key={o.name} from="left" delay={queue(i, 2)} className="rounded-xl bg-amethyst-mist p-8 md:p-10">
                <h3 className="font-display text-2xl">{o.name}</h3>
                <p className="mt-4 flex gap-3 text-ink/80"><MapPin size={18} className="shrink-0 mt-0.5 text-amethyst" /><span>{o.address}<br />{o.postal}</span></p>
                <p className="mt-3 flex gap-3 text-ink/80"><Phone size={18} className="shrink-0 mt-0.5 text-amethyst" /><span>{site.phone} · {site.mobile}</span></p>
                <p className="mt-3 text-sm text-muted"><T en={o.hours} zh="每日营业 · 晚上10点打烊" /></p>
                <a href={site.googleMapsUrl} target="_blank" rel="noreferrer" className="btn btn-outline mt-7 !py-3 !px-5 text-[0.7rem]"><T en="Get directions" zh="查看路线" /></a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
