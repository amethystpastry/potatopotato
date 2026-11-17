"use client";

import { useEffect, useRef, useState } from "react";

/** Counts from 0 to `to` once the number scrolls into view. */
export default function CountUp({ to, suffix = "", duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const run = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValue(to);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("en-SG")}
      {suffix}
    </span>
  );
}
