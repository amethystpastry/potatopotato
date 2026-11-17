import type { Metadata } from "next";
import RotatingHero from "@/components/shop/RotatingHero";
import { cakeSlides } from "@/data/heroSlides";
import CollectionNav from "@/components/shop/CollectionNav";
import CollectionSection from "@/components/shop/CollectionSection";
import type { Collection } from "@/lib/products";

export const metadata: Metadata = {
  title: "Celebration Cakes",
  description: "Custom birthday cakes, kids’ character cakes, 3D sculpted cakes and wedding cakes, handmade to order in Singapore.",
};

const ids: Collection[] = ["elegant", "kids", "animal", "sport", "custom", "occasion"];

export default function CakesPage() {
  return (
    <>
      <RotatingHero
        label="Celebration cakes"
        slides={cakeSlides}
        background="/images/hero/powder-blue-bakery-hero-backdrop-1.jpg"
      />
      <CollectionNav ids={ids} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {ids.map((id, i) => <CollectionSection key={id} id={id} first={i === 0} />)}
      </div>
    </>
  );
}
