import type { ReactNode } from "react";

export default function Marquee({
  children,
  direction = "left",
  duration = 60,
  className = "",
  gap = "gap-6",
}: {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
  className?: string;
  gap?: string;
}) {
  return (
    <div className={`overflow-hidden marquee-pause ${className}`}>
      <div
        className={`marquee ${gap} pr-6 ${direction === "left" ? "marquee-left" : "marquee-right"}`}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className={`flex shrink-0 ${gap}`}>{children}</div>
        <div className={`flex shrink-0 ${gap}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
