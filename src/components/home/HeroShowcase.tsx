"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import { T, useT } from "@/lib/i18n";

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Amethyst! I'd like to place an order.")}`;

type Box = { src: string; alt: string; left: string; top: string; width: string; z: number };

// Staggered cluster of red lacquer gift boxes (positions are % of the cluster frame).
const boxes: Box[] = [
  { src: "/images/hero/red-box-pineapple-pastries.webp", alt: "Pineapple pastries in a red lacquer box", left: "7%", top: "-6%", width: "46%", z: 1 },
  { src: "/images/hero/red-box-mixed-crackers.webp", alt: "Assorted crackers in a red lacquer box", left: "51%", top: "6%", width: "44%", z: 2 },
  { src: "/images/hero/red-box-sesame-crackers.webp", alt: "Sesame crackers in a red lacquer box", left: "-2%", top: "38%", width: "46%", z: 3 },
  { src: "/images/hero/red-box-sesame-balls.webp", alt: "Sesame balls in a red lacquer box", left: "53%", top: "44%", width: "46%", z: 4 },
];

const SWITCH_START = 0.35;
const SWITCH_END = 0.6;
const MID = (SWITCH_START + SWITCH_END) / 2;
const ease = [0.22, 1, 0.36, 1] as const;
const greenBtn = "btn btn-compact bg-[#25D366] text-white hover:bg-[#1EBE5A]";

function PastryCluster() {
  return (
    <div className="relative aspect-[1.15/1] w-[min(84vw,40svh)] md:w-[min(100%,74svh,640px)]">
      {boxes.map((b, i) => (
        <motion.div
          key={b.src}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 + i * 0.14, ease }}
          className="absolute"
          style={{ left: b.left, top: b.top, width: b.width, zIndex: b.z }}
        >
          <Image
            src={b.src}
            alt={b.alt}
            width={1254}
            height={1254}
            priority
            sizes="(max-width: 768px) 40vw, 300px"
            className="w-full h-auto drop-shadow-[0_40px_50px_rgba(40,0,10,0.55)]"
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  );
}

function CakeTrio() {
  return (
    <div className="w-[min(94vw,62svh)] md:w-[min(100%,100svh,760px)]">
      <Image
        src="/images/hero/celebration-cakes-trio.webp"
        alt="Three celebration cakes: blue floral drip, white chocolate rose drip and a red petal gown cake"
        width={1672}
        height={941}
        sizes="(max-width: 768px) 94vw, 760px"
        className="w-full h-auto drop-shadow-[0_40px_50px_rgba(20,30,60,0.35)]"
        draggable={false}
      />
    </div>
  );
}

type StageProps = {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
  pointer: MotionValue<string>;
  light: boolean;
  eyebrow: string;
  title: string;
  sub: string;
  href: string;
  cta: string;
  visual: React.ReactNode;
  heading: "h1" | "h2";
};

function Stage({ opacity, y, pointer, light, eyebrow, title, sub, href, cta, visual, heading: H }: StageProps) {
  return (
    <motion.div style={{ opacity, pointerEvents: pointer }} className="absolute inset-0 z-10">
      <div className="h-full mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-20 md:pb-24 flex flex-col md:grid md:grid-cols-[0.9fr_1.1fr] md:items-center gap-6 md:gap-10">
        <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
          <p className={`eyebrow mb-3 md:mb-4 ${light ? "!text-white/80" : "!text-amethyst-deep/70"}`}>{eyebrow}</p>
          <H className={`font-display text-3xl md:text-4xl lg:text-5xl leading-tight ${light ? "text-white" : "text-amethyst-deep"}`}>
            {title}
          </H>
          <p className={`mt-3 md:mt-5 text-sm md:text-base leading-relaxed ${light ? "text-white/85" : "text-ink/75"}`}>{sub}</p>
          <div className="mt-5 md:mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            <Link href={href} className={`btn btn-compact ${light ? "btn-white" : "btn-primary"}`}>{cta}</Link>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className={greenBtn}><T en="WhatsApp us" zh="WhatsApp 联系我们" /></a>
          </div>
        </div>
        <motion.div style={{ y }} className="flex-1 min-h-0 flex items-center justify-center">
          {visual}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HeroShowcase() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const pastryOpacity = useTransform(scrollYProgress, [SWITCH_START, SWITCH_END], [1, 0]);
  const pastryY = useTransform(scrollYProgress, [SWITCH_START, SWITCH_END], [0, -60]);
  const cakeOpacity = useTransform(scrollYProgress, [SWITCH_START, SWITCH_END], [0, 1]);
  const cakeY = useTransform(scrollYProgress, [SWITCH_START, SWITCH_END], [60, 0]);
  const bgCake = useTransform(scrollYProgress, [SWITCH_START - 0.05, SWITCH_END], [0, 1]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  // Only the visible stage takes clicks.
  const pastryPointer = useTransform(scrollYProgress, (v): string => (v < MID ? "auto" : "none"));
  const cakePointer = useTransform(scrollYProgress, (v): string => (v >= MID ? "auto" : "none"));

  return (
    <section ref={ref} className="relative" style={{ height: "220vh" }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Backgrounds */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/crimson-new-year-backdrop-with-purple-accents-1.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <motion.div style={{ opacity: bgCake }} className="absolute inset-0">
          <Image src="/images/hero/powder-blue-bakery-hero-backdrop-1.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </motion.div>
        <motion.div
          style={{ opacity: pastryOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent"
        />

        <Stage
          heading="h1"
          opacity={pastryOpacity}
          y={pastryY}
          pointer={pastryPointer}
          light
          eyebrow={t("Heritage recipes · Keepsake boxes", "传承古早味 · 精美礼盒")}
          title={t("Festive Pastries", "节庆糕点")}
          sub={t(
            "Pineapple balls rolled by hand, crisps baked paper-thin and cookies made in small batches, packed in lacquer boxes for gifting.",
            "手工搓制的黄梨球、薄如纸的脆片与小批量烘焙的饼干，装进红漆礼盒，送礼自用皆宜。",
          )}
          href="/pastries"
          cta={t("See all pastries", "查看全部糕点")}
          visual={<PastryCluster />}
        />
        <Stage
          heading="h2"
          opacity={cakeOpacity}
          y={cakeY}
          pointer={cakePointer}
          light={false}
          eyebrow={t("Handcrafted · Made to order", "纯手工 · 按单订制")}
          title={t("Celebration Cakes", "庆典蛋糕")}
          sub={t(
            "Fresh florals, character cakes and hand-sculpted showpieces, baked for your date and finished with your message.",
            "鲜花蛋糕、卡通造型与手工雕塑蛋糕，按您的日期新鲜烘焙，并写上您的祝福。",
          )}
          href="/cakes"
          cta={t("See all cakes", "查看全部蛋糕")}
          visual={<CakeTrio />}
        />

        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-3 inset-x-0 flex justify-center text-white/70 animate-bounce z-10"
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
}
