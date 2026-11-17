/**
 * Google reviews shown on the homepage.
 * These three are real reviews from the Amethyst Pastry & Cakes Google listing
 * (Greenridge Shopping Centre). Add more by copying the shape below.
 */
export interface Review {
  name: string;
  meta: string;
  stars: number;
  when: string;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "LianLian Tan",
    meta: "Local Guide · 13 reviews · 27 photos",
    stars: 5,
    when: "5 months ago",
    text: "I moved into this area recently and discovered this bakery. Cakes and bread are fresh. I’ll always stop by when doing my grocery shopping. I especially like the cute cake and fruit tarts! Price is reasonable and staff is friendly.",
  },
  {
    name: "Ken Tan",
    meta: "Local Guide · 909 reviews · 6,282 photos",
    stars: 4,
    when: "8 months ago",
    text: "Have been buying CNY pastries from them past years as they accept CDC voucher payment. Their pineapple tarts were consistently good though other festive pastries may be more common. Great service from staff overall. Bought the regular pineapple and cheese pineapple versions this year.",
  },
  {
    name: "Edmund Yew",
    meta: "Local Guide · 118 reviews · 93 photos",
    stars: 4,
    when: "a year ago",
    text: "This bakery has improved tremendously. Nowadays the bread selection is decent, the place looks cleaner, and waffles are always prepared fresh and hot! You can also ask them to make it crispier to your liking. Staff are also always very polite and sincere.",
  },
];
