"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import type { HeroSlide } from "@/data/heroSlides";

const INTERVAL = 4800;
const ease = [0.22, 1, 0.36, 1] as const;
const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Amethyst! I'd like to place an order.")}`;

/**
 * Shop-page hero: products drop in from above while spinning, float for a
 * moment, then fall away as the next one arrives. Headline and copy change
 * with each product.
 */
export default function RotatingHero({
  slides,
  label,
  background,
  dark = false,
}: {
  slides: HeroSlide[];
  label: string;
  background: string;
  dark?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const reduce = useReducedMotion();
  const slide = slides[index];

  useEffect(() => {
    if (hidden) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearTimeout(t);
  }, [index, hidden, slides.length]);

  // Pause while the tab is in the background so slides don't race on return.
  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <section
      className="relative overflow-hidden h-[calc(100svh-104px)] md:h-[calc(100svh-120px)] min-h-[620px] max-h-[900px]"
      aria-roledescription="carousel"
    >
      <Image src={background} alt="" fill priority sizes="100vw" className="object-cover" />
      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          dark ? "from-black/35 via-black/5 to-transparent" : "from-white/55 via-white/10 to-transparent"
        }`}
      />

      <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-rows-[1fr_auto] md:grid-rows-1 md:grid-cols-[1fr_1.05fr] items-center gap-2 md:gap-8 pb-10 md:pb-0">
        {/* Product stage: each item drops in spinning, floats, then falls away */}
        <div className="relative h-full min-h-[300px] md:order-2">
          <AnimatePresence initial>
            <motion.div
              key={slide.src}
              className="absolute inset-0 flex items-center justify-center"
              initial={reduce ? { opacity: 0 } : { y: "-115%", rotate: -200, scale: 0.6, opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { y: "0%", rotate: 0, scale: 1, opacity: 1 }}
              exit={
                reduce
                  ? { opacity: 0, transition: { duration: 0.4 } }
                  : { y: "70%", rotate: 140, scale: 0.7, opacity: 0, transition: { duration: 0.7, ease: [0.55, 0, 0.75, 0.2] } }
              }
              transition={{ duration: 1.15, ease, opacity: { duration: 0.5 } }}
            >
              <motion.div
                className="relative w-[min(78vw,42svh)] md:w-[min(46vw,60svh,600px)] aspect-square"
                animate={reduce ? undefined : { y: [0, -12, 0], rotate: [0, 2.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 80vw, 600px"
                  className={`object-contain ${
                    dark ? "drop-shadow-[0_45px_50px_rgba(40,0,10,0.55)]" : "drop-shadow-[0_40px_45px_rgba(20,30,60,0.35)]"
                  }`}
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Copy: changes with each product */}
        <div className="relative md:order-1 text-center md:text-left" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={slide.src} initial="hidden" animate="show" exit="exit">
              <motion.p variants={line(0)} className={`eyebrow mb-3 md:mb-5 ${dark ? "!text-white/80" : "!text-amethyst-deep/70"}`}>
                {label} · {slide.eyebrow}
              </motion.p>
              <motion.h1
                variants={line(0.08)}
                className={`font-display text-3xl md:text-4xl lg:text-5xl leading-tight ${
                  dark ? "text-white" : "text-amethyst-deep"
                }`}
              >
                {slide.title} <em className="italic font-light">{slide.accent}</em>
              </motion.h1>
              <motion.p
                variants={line(0.16)}
                className={`mt-4 md:mt-6 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0 ${
                  dark ? "text-white/85" : "text-ink/75"
                }`}
              >
                {slide.blurb}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 md:mt-9 flex flex-wrap gap-3 justify-center md:justify-start">
            <Link href={slide.href} className={`btn ${dark ? "btn-white" : "btn-primary"}`}>
              {slide.cta}
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn bg-[#25D366] text-white hover:bg-[#1EBE5A]"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>

      {/* Preload the other slides so each one drops in fully loaded */}
      <div className="hidden" aria-hidden="true">
        {slides.slice(1).map((s) => (
          <Image key={s.src} src={s.src} alt="" width={600} height={600} sizes="600px" loading="eager" />
        ))}
      </div>
    </section>
  );
}

function line(delay: number) {
  return {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } },
    exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
  };
}
