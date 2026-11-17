import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function ShopHero({
  eyebrow,
  title,
  sub,
  background,
  cutout,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
  background: string;
  cutout?: string;
  dark?: boolean;
}) {
  return (
    <section className="relative overflow-hidden min-h-[52vh] md:min-h-[64vh] flex items-end">
      <Image src={background} alt="" fill priority sizes="100vw" className="object-cover" />
      {cutout && (
        <Image
          src={cutout}
          alt=""
          width={900}
          height={900}
          priority
          className="absolute right-[-6%] md:right-[4%] bottom-0 w-[60%] md:w-[42%] max-w-[640px] h-auto object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.35)] float-y"
        />
      )}
      <div className={`absolute inset-0 bg-gradient-to-t ${dark ? "from-black/60 via-black/10" : "from-white/70 via-white/0"} to-transparent`} />
      <Reveal className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-14 md:pb-20 pt-32">
        <p className={`eyebrow mb-4 ${dark ? "!text-white/80" : ""}`}>{eyebrow}</p>
        <h1 className={`font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] ${dark ? "text-white" : "text-amethyst-deep"}`}>{title}</h1>
        <p className={`mt-5 max-w-lg text-lg ${dark ? "text-white/80" : "text-ink/70"}`}>{sub}</p>
      </Reveal>
    </section>
  );
}
