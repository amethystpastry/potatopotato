import { BadgeCheck, Star } from "lucide-react";
import Marquee from "../ui/Marquee";
import Reveal from "../ui/Reveal";
import { reviews, type Review } from "@/data/reviews";
import { site } from "@/data/site";

function GoogleMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 2.9-2.2 5.4-4.7 7.1l7.6 5.9c4.4-4.1 6.9-10.1 6.9-17.5z" />
      <path fill="#FBBC05" d="M10.5 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.6l-7.9-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.7l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.3 0-11.6-4.1-13.5-9.9l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
    </svg>
  );
}

function Card({ r }: { r: Review }) {
  return (
    <article className="w-[320px] md:w-[400px] shrink-0 rounded-xl bg-white border border-line p-6 md:p-7 shadow-[0_20px_50px_-35px_rgba(61,28,102,0.5)]">
      <header className="flex items-start gap-3">
        <span className="h-11 w-11 rounded-full bg-amethyst text-white flex items-center justify-center font-display text-xl">
          {r.name.charAt(0)}
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-ink leading-tight">{r.name}</p>
          <p className="text-xs text-muted truncate">{r.meta}</p>
        </div>
        <GoogleMark />
      </header>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className={i < r.stars ? "fill-[#FBBC05] text-[#FBBC05]" : "text-line"} />
          ))}
        </div>
        <span className="text-xs text-muted">{r.when}</span>
      </div>
      <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/80 line-clamp-5">{r.text}</p>
      <p className="mt-5 inline-flex items-center gap-1.5 text-[0.65rem] tracking-[0.2em] uppercase text-muted">
        <BadgeCheck size={14} className="text-[#34A853]" /> Verified Google review
      </p>
    </article>
  );
}

export default function Reviews() {
  const rowA = [...reviews, ...reviews];
  const rowB = [...reviews.slice(1), ...reviews.slice(0, 1), ...reviews];
  return (
    <section className="bg-cream py-24 md:py-32 overflow-hidden">
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow mb-4">Loved by Singapore</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]">
            What our customers <em className="italic">are saying</em>
          </h2>
        </div>
        <a href={site.googleMapsUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
          <GoogleMark size={16} /> Read all on Google
        </a>
      </Reveal>

      <div className="space-y-6">
        <Marquee direction="left" duration={55}>
          {rowA.map((r, i) => <Card key={i} r={r} />)}
        </Marquee>
        <Marquee direction="right" duration={62}>
          {rowB.map((r, i) => <Card key={i} r={r} />)}
        </Marquee>
      </div>
    </section>
  );
}
