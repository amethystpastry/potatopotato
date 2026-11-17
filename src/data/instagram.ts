/**
 * Instagram strip on the homepage. Instagram's API needs an access token for a
 * live feed, so this is a curated set of tiles that link to the profile.
 * Swap in real post images + permalinks whenever you like.
 */
export interface InstaTile {
  image: string;
  alt: string;
  href?: string;
}

const profile = "https://www.instagram.com/amethyst_sg/";

export const instagramTiles: InstaTile[] = [
  { image: "/images/custom/elegant-trio-of-artisan-celebration-cakes.png", alt: "Trio of celebration cakes", href: profile },
  { image: "/images/cny/take-event-3.jpg", alt: "Chinese New Year roadshow", href: profile },
  { image: "/images/elegant/j39-heha-purple.png", alt: "Amethyst strawberry drip cake", href: profile },
  { image: "/images/mooncake/take-event-1.jpg", alt: "Mid-Autumn mooncake fair", href: profile },
  { image: "/images/kids/j49-rainbow-pink.png", alt: "Rainbow pink cake", href: profile },
  { image: "/images/cny/take-event-4.jpg", alt: "Festive goodies display", href: profile },
  { image: "/images/custom/j58-peacock-cake.png", alt: "Peacock cake", href: profile },
  { image: "/images/mooncake/take-event-2.jpg", alt: "Mooncake tasting", href: profile },
  { image: "/images/animal/j41-butterfly-dreamy.png", alt: "Butterfly dreamy cake", href: profile },
  { image: "/images/cny/take-event-5.jpg", alt: "Roadshow at Takashimaya", href: profile },
  { image: "/images/occasion/wedding-2.png", alt: "Wedding cake", href: profile },
  { image: "/images/custom/photo-2022-04-07-19-32-30.jpg", alt: "Custom cake", href: profile },
];
