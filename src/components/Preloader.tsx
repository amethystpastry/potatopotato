"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const subscribe = () => () => {};

export default function Preloader() {
  const firstVisit = useSyncExternalStore(subscribe, () => !sessionStorage.getItem("amethyst-loaded"), () => false);
  const [done, setDone] = useState(false);
  const show = firstVisit && !done;

  useEffect(() => {
    if (!firstVisit) return;
    document.documentElement.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("amethyst-loaded", "1");
      document.documentElement.style.overflow = "";
    }, 1800);
    return () => clearTimeout(timer);
  }, [firstVisit]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-amethyst text-white flex flex-col items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/brand/logo-mark.png"
              alt="Amethyst Pastry & Cakes"
              width={1091}
              height={417}
              priority
              className="logo-white w-[220px] md:w-[320px] h-auto"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
