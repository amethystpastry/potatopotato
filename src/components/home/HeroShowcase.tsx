"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { site } from "@/data/site";

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
const ease = [0.22, 1, 0.36, 1] as const;

function PastryCluster() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateY(5vh)" }}>
      <div className="relative w-[min(92vw,52vh)] aspect-[1/1.05] md:w-[min(76vw,74vh,960px)] md:aspect-[1.45/1]">
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
              sizes="(max-width: 768px) 45vw, 400px"
              className="w-full h-auto drop-shadow-[0_40px_50px_rgba(40,0,10,0.55)]"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CakeTrio() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-4" style={{ transform: "translateY(4vh)" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease }}
        className="w-[min(96vw,110vh)] md:w-[min(80vw,96vh,1100px)]"
      >
        <Image
          src="/images/hero/celebration-cakes-trio.webp"
          alt="Three celebration cakes: blue floral drip, white chocolate rose drip and a red petal gown cake"
          width={1672}
          height={941}
          sizes="(max-width: 768px) 96vw, 1100px"
          className="w-full h-auto drop-shadow-[0_40px_50px_rgba(20,30,60,0.35)]"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}

export default function HeroShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const pastryOpacity = useTransform(scrollYProgress, [SWITCH_START, SWITCH_END], [1, 0]);
  const pastryY = useTransform(scrollYProgress, [SWITCH_START, SWITCH_END], [0, -80]);
  const cakeOpacity = useTransform(scrollYProgress, [SWITCH_START, SWITCH_END], [0, 1]);
  const cakeY = useTransform(scrollYProgress, [SWITCH_START, SWITCH_END], [80, 0]);
  const bgCake = useTransform(scrollYProgress, [SWITCH_START - 0.05, SWITCH_END], [0, 1]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section ref={ref} className="relative" style={{ height: "220vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
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
          <Image
            src="/images/hero/powder-blue-bakery-hero-backdrop-1.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

        {/* Static showcases */}
        <motion.div style={{ opacity: pastryOpacity, y: pastryY }} className="absolute inset-0">
          <PastryCluster />
        </motion.div>
        <motion.div style={{ opacity: cakeOpacity, y: cakeY }} className="absolute inset-0">
          <CakeTrio />
        </motion.div>

        {/* Copy */}
        <div className="absolute inset-x-0 top-[12vh] md:top-[13vh] text-center px-4 pointer-events-none z-10">
          <motion.div style={{ opacity: pastryOpacity }} className="absolute inset-x-0">
            <h1 className="font-display text-white text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95]">
              Festive <em className="italic font-light">Pastries</em>
            </h1>
          </motion.div>
          <motion.div style={{ opacity: cakeOpacity }} className="absolute inset-x-0">
            <p className="eyebrow !text-amethyst-deep/70 mb-3">Handcrafted · Made to order</p>
            <h2 className="font-display text-amethyst-deep text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95]">
              Celebration <em className="italic font-light">Cakes</em>
            </h2>
          </motion.div>
        </div>

        {/* CTAs */}
        <div className="absolute inset-x-0 bottom-[15vh] md:bottom-[8vh] flex flex-col items-center gap-5 px-4 z-10">
          <div className="relative h-14 w-full flex justify-center">
            <motion.div style={{ opacity: pastryOpacity }} className="absolute flex gap-3">
              <Link href="/pastries" className="btn btn-compact btn-white">Shop pastries</Link>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-compact bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.7)] hover:bg-[#1EBE5A]">WhatsApp us</a>
            </motion.div>
            <motion.div style={{ opacity: cakeOpacity }} className="absolute flex gap-3">
              <Link href="/cakes" className="btn btn-compact btn-primary">Shop cakes</Link>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-compact bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.7)] hover:bg-[#1EBE5A]">WhatsApp us</a>
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-3 inset-x-0 flex justify-center text-white/70 animate-bounce"
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
}
