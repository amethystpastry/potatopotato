"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const up: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};
const left: Variants = {
  hidden: { opacity: 0, x: -56 },
  show: { opacity: 1, x: 0 },
};


export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  from = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "p" | "h1" | "h2" | "h3" | "article";
  from?: "up" | "left";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={from === "left" ? left : up}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  );
}
