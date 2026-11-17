"use client";

import { useEffect, useState } from "react";
import { collections, type Collection } from "@/lib/products";

export default function CollectionNav({ ids }: { ids: Collection[] }) {
  const [active, setActive] = useState<Collection>(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id as Collection));
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);

  return (
    <div className="sticky top-[72px] md:top-[88px] z-30 bg-white/85 backdrop-blur-xl border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex gap-2 overflow-x-auto no-scrollbar py-3">
        {ids.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`shrink-0 rounded-full px-4 py-2 text-[0.68rem] tracking-[0.18em] uppercase transition-colors ${
              active === id ? "bg-amethyst text-white" : "bg-amethyst-mist text-ink/70 hover:bg-amethyst-soft"
            }`}
          >
            {collections[id].label}
          </a>
        ))}
      </div>
    </div>
  );
}
