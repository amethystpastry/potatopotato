import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow mb-4 ${light ? "!text-white/70" : ""}`}>{eyebrow}</p>}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-light ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub && <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>{sub}</p>}
    </Reveal>
  );
}
