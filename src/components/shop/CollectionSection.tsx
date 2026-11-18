import ProductCard from "./ProductCard";
import Reveal from "../ui/Reveal";
import { queue } from "@/lib/queue";
import { byCollection, collections, type Collection } from "@/lib/products";
import { T } from "@/lib/i18n";
import { categoryLabel, collectionBlurb, collectionLabel } from "@/lib/productText";

export default function CollectionSection({ id, first = false }: { id: Collection; first?: boolean }) {
  const c = collections[id];
  const items = byCollection(id);
  if (items.length === 0) return null;
  return (
    <section id={id} className="scroll-mt-28 py-14 md:py-20 border-t border-line first:border-t-0">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <p className="eyebrow mb-3">
            <T
              en={`${categoryLabel(c.category, "en")} · ${items.length} designs`}
              zh={`${categoryLabel(c.category, "zh")} · ${items.length} 款`}
            />
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight"><T en={c.label} zh={collectionLabel(id, "zh")} /></h2>
        </div>
        <p className="text-muted max-w-md md:text-right"><T en={c.blurb} zh={collectionBlurb(id, "zh")} /></p>
      </Reveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
        {items.map((p, i) => (
          <Reveal key={p.slug} from="left" delay={queue(i)}>
            <ProductCard product={p} priority={first && i < 4} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
