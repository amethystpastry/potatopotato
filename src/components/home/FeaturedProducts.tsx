import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "../shop/ProductCard";
import Reveal from "../ui/Reveal";
import { queue } from "@/lib/queue";
import { featured } from "@/lib/products";

export default function FeaturedProducts() {
  const items = featured().slice(0, 8);
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {items.map((p, i) => (
            <Reveal key={p.slug} from="left" delay={queue(i)}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-14 flex justify-center gap-3">
          <Link href="/cakes" className="btn btn-primary">All cakes</Link>
          <Link href="/pastries" className="btn btn-outline">All pastries <ArrowRight size={14} /></Link>
        </div>
      </div>
    </section>
  );
}
