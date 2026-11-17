import HeroShowcase from "@/components/home/HeroShowcase";
import Collections from "@/components/home/Collections";
import AboutTeaser from "@/components/home/AboutTeaser";
import InstagramSlider from "@/components/home/InstagramSlider";
import Reviews from "@/components/home/Reviews";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function HomePage() {
  return (
    <>
      <HeroShowcase />
      <Collections />
      <FeaturedProducts />
      <AboutTeaser />
      <InstagramSlider />
      <Reviews />
    </>
  );
}
