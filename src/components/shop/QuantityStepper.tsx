"use client";

import { Minus, Plus } from "lucide-react";

export default function QuantityStepper({
  value,
  onChange,
  size = "md",
}: {
  value: number;
  onChange: (n: number) => void;
  size?: "sm" | "md";
}) {
  const h = size === "sm" ? "h-9" : "h-12";
  return (
    <div className={`inline-flex items-center rounded-md border border-line ${h}`}>
      <button type="button" aria-label="Decrease" onClick={() => onChange(value - 1)} className="px-3 h-full text-ink/70 hover:text-amethyst">
        <Minus size={14} />
      </button>
      <span className="w-8 text-center text-sm tabular-nums">{value}</span>
      <button type="button" aria-label="Increase" onClick={() => onChange(value + 1)} className="px-3 h-full text-ink/70 hover:text-amethyst">
        <Plus size={14} />
      </button>
    </div>
  );
}
