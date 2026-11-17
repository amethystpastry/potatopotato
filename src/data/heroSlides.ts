// Slides for the rotating heroes on the Pastries and Cakes pages.
// Each slide drops in spinning; its headline and copy replace the previous one.

export type HeroSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  accent: string; // italic part of the headline
  blurb: string;
  href: string;
  cta: string;
};

export const pastrySlides: HeroSlide[] = [
  {
    src: "/images/hero/six-golden-pineapple-pastries-1.png",
    alt: "Six golden pineapple balls",
    eyebrow: "Best seller",
    title: "Pineapple",
    accent: "Balls",
    blurb: "Buttery, melt-in-the-mouth pastry wrapped around slow-cooked pineapple jam, rolled by hand and baked golden.",
    href: "/product/pineapple-ball",
    cta: "Shop pineapple balls",
  },
  {
    src: "/images/hero/four-assorted-golden-savory-crisps-3.png",
    alt: "Assorted golden savoury crisps",
    eyebrow: "Crisps",
    title: "Paper-thin",
    accent: "Crisps",
    blurb: "Seaweed, amber almond and chicken floss slices, baked so thin they crackle. Impossible to stop at one.",
    href: "/product/crispy-thin-almond-slice",
    cta: "Shop crisps",
  },
  {
    src: "/images/hero/golden-chinese-new-year-almond-cookies-1.png",
    alt: "Almond cookies",
    eyebrow: "Cookies",
    title: "Artisan",
    accent: "Almond Cookies",
    blurb: "Crumbly, nutty almond cookies hand-shaped and baked in small batches.",
    href: "/product/almond-cookies",
    cta: "Shop almond cookies",
  },
  {
    src: "/images/hero/chinese-new-year-kueh-kapit-trio-2.png",
    alt: "Rolled love letter egg rolls",
    eyebrow: "Heritage",
    title: "Mini",
    accent: "Love Letters",
    blurb: "Charcoal-grilled egg rolls, thin and crisp, folded the way our grandmothers made them.",
    href: "/product/mini-love-letters",
    cta: "Shop love letters",
  },
  {
    src: "/images/hero/three-golden-sesame-snack-balls-2.png",
    alt: "Golden sesame balls",
    eyebrow: "Festive favourites",
    title: "Golden",
    accent: "Sesame Balls",
    blurb: "Toasted sesame over a crisp golden shell, a reunion-table classic that rolls in good fortune.",
    href: "/pastries#cny",
    cta: "Shop festive pastries",
  },
];

export const cakeSlides: HeroSlide[] = [
  {
    src: "/images/hero/pastel-blue-floral-cake-cutout-2.png",
    alt: "Pastel blue drip cake with fresh roses and baby’s breath",
    eyebrow: "Elegant",
    title: "Fresh",
    accent: "Floral Cakes",
    blurb: "Pastel buttercream, a white chocolate drip and real blooms. Baked for your date, never from a chiller.",
    href: "/cakes#elegant",
    cta: "Shop elegant cakes",
  },
  {
    src: "/images/hero/blue-puppy-birthday-cake-3.png",
    alt: "Blue birthday cake with puppy toppers",
    eyebrow: "Kids",
    title: "Little",
    accent: "Party Cakes",
    blurb: "Cute toppers, soft colours and a hand-piped name. The cake they will remember blowing candles on.",
    href: "/cakes#kids",
    cta: "Shop kids’ cakes",
  },
  {
    src: "/images/hero/handcrafted-green-tortoise-birthday-cake-1.png",
    alt: "Sculpted green tortoise birthday cake",
    eyebrow: "Sculpted",
    title: "Hand-sculpted",
    accent: "Tortoise",
    blurb: "Every scale shaped by hand. Our sculpted animal cakes turn a birthday into a showpiece.",
    href: "/product/tortoise-cake",
    cta: "Shop animal cakes",
  },
  {
    src: "/images/hero/chelsea-football-club-16th-birthday-cake-4.png",
    alt: "Football club crest birthday cake",
    eyebrow: "Sports",
    title: "Club",
    accent: "Colours",
    blurb: "Their team, their crest, their name. Custom sports cakes for the biggest fan in the family.",
    href: "/cakes#sport",
    cta: "Shop sports cakes",
  },
];
