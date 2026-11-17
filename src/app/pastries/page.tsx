import type { Metadata } from "next";
import RotatingHero from "@/components/shop/RotatingHero";
import { pastrySlides } from "@/data/heroSlides";
import CollectionNav from "@/components/shop/CollectionNav";
import CollectionSection from "@/components/shop/CollectionSection";
import type { Collection } from "@/lib/products";

export const metadata: Metadata = {
  title: "Festive Pastries",
  description: "Chinese New Year pineapple balls, cookies and crisps, plus sugar-free Mid-Autumn mooncakes from Amethyst Pastry & Cakes.",
};

const ids: Collection[] = ["cny", "mooncake"];

export default function PastriesPage() {
  return (
    <>
      <RotatingHero
        dark
        label="Festive pastries"
        slides={pastrySlides}
        background="/images/hero/crimson-new-year-plum-blossoms-4.jpg"
      />
      <CollectionNav ids={ids} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {ids.map((id, i) => <CollectionSection key={id} id={id} first={i === 0} />)}
      </div>
    </>
  );
}
