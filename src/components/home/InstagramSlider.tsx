import Image from "next/image";
import InstagramIcon from "../ui/InstagramIcon";
import Marquee from "../ui/Marquee";
import Reveal from "../ui/Reveal";
import { instagramTiles } from "@/data/instagram";
import { site } from "@/data/site";

export default function InstagramSlider() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow mb-4">Follow along</p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight">
            Fresh out of the oven, <em className="italic">on Instagram</em>
          </h2>
        </div>
        <a href={site.instagram} target="_blank" rel="noreferrer" className="btn btn-outline">
          <InstagramIcon size={16} /> {site.instagramHandle}
        </a>
      </Reveal>

      <Marquee direction="left" duration={70} gap="gap-4">
        {instagramTiles.map((t, i) => (
          <a
            key={i}
            href={t.href ?? site.instagram}
            target="_blank"
            rel="noreferrer"
            className="group relative block w-[220px] md:w-[300px] aspect-square rounded-xl overflow-hidden bg-amethyst-soft"
          >
            <Image src={t.image} alt={t.alt} fill sizes="300px" className={`${t.image.endsWith(".jpg") ? "object-cover" : "object-contain p-5"} transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105`} />
            <div className="absolute inset-0 bg-amethyst-deep/0 group-hover:bg-amethyst-deep/40 transition-colors duration-500 flex items-center justify-center">
              <InstagramIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={28} />
            </div>
          </a>
        ))}
      </Marquee>
    </section>
  );
}
