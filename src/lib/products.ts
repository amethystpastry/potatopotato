/**
 * Product catalog.
 *
 * Pastry prices (Chinese New Year goodies, mooncakes) come from the 2026 price
 * lists supplied by Amethyst. CAKE PRICES ARE PLACEHOLDERS — no cake price list
 * was supplied. Edit `CAKE_PRICING` below (or an individual product's `variants`)
 * before going live. All prices are in SGD cents.
 */

export type Category = "cakes" | "pastries";
export type Collection =
  | "elegant"
  | "kids"
  | "animal"
  | "sport"
  | "custom"
  | "occasion"
  | "cny"
  | "mooncake";
export type Backdrop = "crimson" | "powder" | "ivory" | "sage" | "lilac";

export interface Variant {
  id: string;
  label: string;
  note?: string;
  price: number;
}

export interface Product {
  slug: string;
  name: string;
  category: Category;
  collection: Collection;
  image: string;
  alpha: boolean;
  description: string;
  variants: Variant[];
  backdrop: Backdrop;
  badge?: string;
  seasonal?: string;
  allowMessage?: boolean;
  featured?: boolean;
  tags?: string[];
}

export const collections: Record<
  Collection,
  { label: string; category: Category; blurb: string; backdrop: Backdrop; cover: string }
> = {
  elegant: {
    label: "Signature & Elegant",
    category: "cakes",
    blurb: "Fresh florals, drips and buttercream classics for every celebration.",
    backdrop: "ivory",
    cover: "/images/elegant/j39-heha-purple.png",
  },
  kids: {
    label: "Kids & Characters",
    category: "cakes",
    blurb: "Mermaids, princesses, superheroes and rainbows that steal the party.",
    backdrop: "powder",
    cover: "/images/kids/j49-rainbow-pink.png",
  },
  animal: {
    label: "Animal Kingdom",
    category: "cakes",
    blurb: "Hand-sculpted creatures, from gentle sheep to a snapping shark.",
    backdrop: "sage",
    cover: "/images/animal/j41-butterfly-dreamy.png",
  },
  sport: {
    label: "Sports & Hobbies",
    category: "cakes",
    blurb: "Football pitches, snooker tables and a cold beer for the fan.",
    backdrop: "sage",
    cover: "/images/sport/j79-snookertable.png",
  },
  custom: {
    label: "3D & Custom Sculpted",
    category: "cakes",
    blurb: "Tell us the story. We sculpt it in cake, down to the last detail.",
    backdrop: "lilac",
    cover: "/images/custom/j58-peacock-cake.png",
  },
  occasion: {
    label: "Weddings, Cupcakes & Gifts",
    category: "cakes",
    blurb: "Tiered wedding cakes, engagement cakes and cupcake gift boxes.",
    backdrop: "ivory",
    cover: "/images/occasion/wedding-2.png",
  },
  cny: {
    label: "Chinese New Year Goodies",
    category: "pastries",
    blurb: "Melt-in-the-mouth pineapple balls, crisps and cookies in keepsake tins.",
    backdrop: "crimson",
    cover: "/images/cny/pineapple-ball.jpg",
  },
  mooncake: {
    label: "Mid-Autumn Mooncakes",
    category: "pastries",
    blurb: "Sugar-free white lotus, Hainanese crispy skin and Cantonese classics.",
    backdrop: "ivory",
    cover: "/images/mooncake/amethyst-cantonese-style-harmony-quartet-mooncake-gift-box-4-flavours.jpg",
  },
};

// PLACEHOLDER cake pricing tiers (cents). Replace with real prices.
const CAKE_PRICING = {
  classic: [6800, 9800, 13800],
  themed: [9800, 13800, 18800],
  sculpted: [12800, 16800, 22800],
};
const SIZES = [
  { id: "6in", label: '6" round', note: "Serves 8 – 10" },
  { id: "8in", label: '8" round', note: "Serves 12 – 16" },
  { id: "10in", label: '10" round', note: "Serves 20 – 25" },
];

function cakeVariants(tier: keyof typeof CAKE_PRICING): Variant[] {
  return SIZES.map((s, i) => ({ ...s, price: CAKE_PRICING[tier][i] }));
}

function cake(
  slug: string,
  name: string,
  collection: Collection,
  image: string,
  description: string,
  opts: Partial<Product> & { tier?: keyof typeof CAKE_PRICING } = {},
): Product {
  const { tier = "themed", ...rest } = opts;
  return {
    slug,
    name,
    category: "cakes",
    collection,
    image,
    alpha: !image.endsWith(".jpg"),
    description,
    variants: cakeVariants(tier),
    backdrop: collections[collection].backdrop,
    allowMessage: true,
    ...rest,
  };
}

function tin(
  slug: string,
  name: string,
  image: string,
  price: number,
  description: string,
  opts: Partial<Product> = {},
): Product {
  return {
    slug,
    name,
    category: "pastries",
    collection: "cny",
    image,
    alpha: false,
    description,
    variants: [{ id: "tin", label: "Keepsake tin", price }],
    backdrop: "crimson",
    seasonal: "Chinese New Year",
    ...opts,
  };
}

function mooncake(
  slug: string,
  name: string,
  image: string,
  price: number,
  pieces: string,
  description: string,
  opts: Partial<Product> = {},
): Product {
  return {
    slug,
    name,
    category: "pastries",
    collection: "mooncake",
    image,
    alpha: false,
    description,
    variants: [{ id: "box", label: pieces, price }],
    backdrop: "ivory",
    seasonal: "Mid-Autumn Festival",
    ...opts,
  };
}

export const products: Product[] = [
  // ───────────── Signature & Elegant ─────────────
  cake("heha-purple-strawberry", "Amethyst Strawberry Drip", "elegant", "/images/elegant/j39-heha-purple.png",
    "Our house signature: a lilac ombré sponge with white chocolate drip, fresh strawberries and a dusting of sugar sprinkles.",
    { tier: "classic", featured: true, badge: "Signature" }),
  cake("fresh-flower-cake", "Fresh Flower Cake", "elegant", "/images/elegant/flower.jpg",
    "Smooth buttercream crowned with seasonal fresh blooms, finished by hand on the morning of your celebration.", { tier: "classic" }),
  cake("garden-blooms", "Garden Blooms", "elegant", "/images/elegant/j22-flowers.png",
    "A soft garden of piped petals in pastel tones, perfect for mothers, birthdays and afternoon teas.", { tier: "classic" }),
  cake("buttercream-florals", "Buttercream Florals", "elegant", "/images/elegant/j24-cream-flowers.png",
    "Hand-piped roses and ranunculus in cream and blush, on a vanilla or chocolate sponge of your choice.", { tier: "classic" }),
  cake("pastel-petal", "Pastel Petal Cake", "elegant", "/images/elegant/j25-cream-flowers.png",
    "Ruffled petals wrap a light sponge layered with fresh cream. An understated centrepiece.", { tier: "classic" }),
  cake("rose-bouquet", "Rose Bouquet", "elegant", "/images/elegant/j26-roses-flowers.png",
    "A bouquet of buttercream roses in deep reds and pinks for anniversaries and romantic occasions.", { tier: "classic", featured: true }),
  cake("blush-pink", "Blush Pink", "elegant", "/images/elegant/j28-pinkish.png",
    "A blushing pink ombré with delicate piping. Simple, elegant and endlessly photogenic.", { tier: "classic" }),
  cake("love-and-roses", "Love & Roses", "elegant", "/images/elegant/j29-love-roses.png",
    "Fresh roses and a scripted ‘love’ topper. Made for proposals, anniversaries and Valentine’s.", { tier: "classic" }),
  cake("floral-tiers", "Floral Tiers", "elegant", "/images/elegant/j30-flowers-tiers.png",
    "Two tiers of buttercream dressed in cascading florals for intimate weddings and milestone birthdays.", { tier: "themed" }),
  cake("blue-and-white", "Blue & White", "elegant", "/images/elegant/j31-blue-white.png",
    "Powder blue buttercream with white florals, a calm and classic palette.", { tier: "classic" }),
  cake("chocolate-on-white", "Chocolate on White", "elegant", "/images/elegant/j032-choc-on-white.png",
    "A pristine white cake with a dark chocolate drip and chocolate shards.", { tier: "classic" }),
  cake("classic-chocolate-round", "Classic Chocolate Round", "elegant", "/images/elegant/j33-choc-round.png",
    "Rich chocolate ganache over a moist chocolate sponge. The crowd-pleaser.", { tier: "classic" }),
  cake("blue-on-white", "Blue on White", "elegant", "/images/elegant/j34-blue-on-white.png",
    "White buttercream with soft blue florals and pearls.", { tier: "classic" }),
  cake("rainbow-side", "Rainbow Side", "elegant", "/images/elegant/j35-rainbow-side.png",
    "A white cake with a bold rainbow buttercream stripe. Cheerful without the fuss.", { tier: "classic" }),
  cake("dark-chocolate-dream", "Dark Chocolate Dream", "elegant", "/images/elegant/j36-chocolate.png",
    "Layers of dark chocolate sponge, ganache and chocolate curls for the serious chocolate lover.", { tier: "classic" }),
  cake("assorted-fruits", "Assorted Fruits", "elegant", "/images/elegant/j38-assorted-fruits.png",
    "Light vanilla sponge with fresh cream and a crown of seasonal fruits.", { tier: "classic" }),
  cake("floral-crown", "Floral Crown", "elegant", "/images/elegant/flowers-3.jpg",
    "A crown of fresh flowers over smooth cream. Light, fragrant and elegant.", { tier: "classic" }),
  cake("blooms-in-a-box", "Blooms in a Box", "elegant", "/images/elegant/j21-flowers-in-box.jpg",
    "Buttercream florals arranged in a bloom box, a gift and a dessert in one.", { tier: "classic" }),
  cake("love-letter-cake", "Love Letter Cake", "elegant", "/images/elegant/love.jpg",
    "A heart-shaped cake with hand-written sentiment. Say it with cake.", { tier: "classic" }),

  // ───────────── Kids & Characters ─────────────
  cake("rainbow-pink", "Rainbow Pink", "kids", "/images/kids/j49-rainbow-pink.png",
    "A pink rainbow cake with fluffy clouds and sprinkles. A birthday favourite for little ones.", { featured: true }),
  cake("mermaid-tail", "Mermaid Tail", "kids", "/images/kids/mermaid-cakes-4.png",
    "Shimmering scales, a fondant tail and seashells. Under-the-sea magic in cake form."),
  cake("sea-mermaid", "Sea Mermaid", "kids", "/images/kids/j54-sea-mermaid.png",
    "Ocean blues with a mermaid topper, corals and pearls."),
  cake("mermaid-girls", "Mermaid Girls", "kids", "/images/kids/j45-mermaid-girls.png",
    "Tiered mermaid cake with hand-made figurines for the birthday girl."),
  cake("princess-tiers", "Princess Tiers", "kids", "/images/kids/j43-princess-tiers.jpg",
    "A two-tier princess castle cake in pastel pinks with sugar crowns."),
  cake("princess-toppers", "Princess Toppers", "kids", "/images/kids/j47-princess-toppers.png",
    "Classic buttercream cake crowned with princess toppers and edible glitter."),
  cake("princess-cake", "Princess Dream", "kids", "/images/kids/j63-princess.png",
    "Soft pink buttercream, a tiara and plenty of sparkle."),
  cake("superhero-cake", "Superhero City", "kids", "/images/kids/j56-superhero-cake.png",
    "A city skyline cake with your little one’s favourite hero on top.", { tier: "sculpted" }),
  cake("hero-cake", "Hero Cake", "kids", "/images/kids/j42-hero-cake.png",
    "Bold hero colours and comic-book details for the bravest birthday."),
  cake("wizard-cake", "Wizard School", "kids", "/images/kids/j52-harry-harry.png",
    "Spellbooks, wands and house colours for the young wizard."),
  cake("spaceship-cake", "Spaceship Adventure", "kids", "/images/kids/j46-spaceshiptoppers.png",
    "Rockets, planets and stars for a birthday that’s out of this world."),
  cake("construction-cake", "Construction Site", "kids", "/images/kids/j48-construtiontoppers.png",
    "Diggers, dump trucks and chocolate ‘soil’ for the little builder."),
  cake("cartoon-cake", "Cartoon Cake", "kids", "/images/kids/j61-cartoon-cake.png",
    "Hand-sculpted cartoon characters from your child’s favourite show."),
  cake("cartoon-toppers", "Cartoon Toppers", "kids", "/images/kids/j44-cartoon-toppers.jpg",
    "A buttercream cake topped with your choice of cartoon characters."),
  cake("bears-cake", "Teddy Bears", "kids", "/images/kids/j07-bears.png",
    "Sweet fondant teddy bears on a pastel buttercream cake."),
  cake("bear-hugs", "Bear Hugs", "kids", "/images/kids/j13-bears-1.png",
    "A cuddly bear topper with balloons and clouds."),
  cake("elephants-cake", "Little Elephants", "kids", "/images/kids/j11-elephants.png",
    "Pastel elephants and balloons for baby showers and first birthdays."),
  cake("babys-first", "Baby’s First", "kids", "/images/kids/j12-baby-1.png",
    "A gentle, pastel first-birthday cake with a sleeping baby topper."),
  cake("rainbow-clouds", "Rainbow Clouds", "kids", "/images/kids/j15-rainbow-1.png",
    "A rainbow arch over fluffy meringue clouds."),
  cake("playful-party", "Playful Party", "kids", "/images/kids/kids-7.png",
    "Bright, playful and fully customisable for any party theme."),
  cake("little-celebration", "Little Celebration", "kids", "/images/kids/kids-9.png",
    "A joyful character cake made to match your invitation."),

  // ───────────── Animal Kingdom ─────────────
  cake("butterfly-dreamy", "Butterfly Dreamy", "animal", "/images/animal/j41-butterfly-dreamy.png",
    "Lilac and lavender tones with sugar butterflies taking flight.", { featured: true }),
  cake("sheep-cake", "Sheep Cake", "animal", "/images/animal/sheepcake-2.png",
    "A woolly sheep sculpted in buttercream swirls. Soft, cute and delicious.", { tier: "sculpted" }),
  cake("tortoise-cake", "Tortoise Cake", "animal", "/images/animal/j05-tortoise.png",
    "A hand-painted tortoise shell on a sandy biscuit base.", { tier: "sculpted" }),
  cake("shark-cake", "Shark Attack", "animal", "/images/animal/j02-shark.png",
    "A great white breaching from blue buttercream waves.", { tier: "sculpted" }),
  cake("elephant-cake", "Elephant Cake", "animal", "/images/animal/j01-elephant.png",
    "A gentle 3D elephant with fondant details.", { tier: "sculpted" }),
  cake("lizard-cake", "Lizard Cake", "animal", "/images/animal/j03-lizard.png",
    "A realistic sculpted lizard for the reptile enthusiast.", { tier: "sculpted" }),
  cake("gecko-cake", "Gecko Cake", "animal", "/images/animal/j04-lizard.png",
    "A hand-modelled gecko resting on a rock-textured cake.", { tier: "sculpted" }),
  cake("chicken-cake", "Chicken Cake", "animal", "/images/animal/j06-chicken.png",
    "A cheerful hen sculpted in fondant on a nest of buttercream.", { tier: "sculpted" }),
  cake("rabbits-cake", "Rabbit Garden", "animal", "/images/animal/j09-rabbits.png",
    "Fondant bunnies in a carrot patch."),
  cake("bunny-cake", "Bunny Hop", "animal", "/images/animal/j19-rabbits.png",
    "A pastel bunny cake for Easter and springtime birthdays."),
  cake("monster-cake", "Friendly Monster", "animal", "/images/animal/j64-monster.png",
    "A fuzzy buttercream monster with a big smile."),

  // ───────────── Sports & Hobbies ─────────────
  cake("snooker-table", "Snooker Table", "sport", "/images/sport/j79-snookertable.png",
    "A green baize table complete with balls, cues and pockets.", { tier: "sculpted", featured: true }),
  cake("football-field", "Football Field", "sport", "/images/sport/j73-field-with-ball.png",
    "A pitch of green buttercream with a fondant football and goal."),
  cake("flags-with-football", "Club Colours", "sport", "/images/sport/j76-flags-with-football.png",
    "Your team’s flags and colours around a football centrepiece."),
  cake("football-icing-sheet", "Football Crest Cake", "sport", "/images/sport/cream-cake-icing-sheet-football.png",
    "Your club crest printed on edible icing, framed in team-colour piping."),
  cake("trains-and-buses", "Trains & Buses", "sport", "/images/sport/j82-trains-buses.png",
    "Fondant trains and buses on a track of chocolate sponge."),
  cake("beer-theme-gold", "Beer & Gold Chocolate", "sport", "/images/sport/beer-theme-gold-chocolate-2.png",
    "A cheers-worthy beer-themed cake with golden chocolate accents."),
  cake("dinosaur-cream-cake", "Dinosaur Cream Cake", "sport", "/images/sport/dinasour-theme-cream-cake.png",
    "A prehistoric cream cake with dinosaur toppers and palm trees."),
  cake("classic-chiffon", "Classic Chiffon", "sport", "/images/sport/chiffon-2-1.png",
    "A light, airy chiffon with fresh cream. Simple and loved by all ages.", { tier: "classic" }),
  cake("doodle-cake", "Doodle Cake", "sport", "/images/sport/drawing-3.png",
    "Hand-drawn doodles piped onto buttercream. Send us a sketch."),
  cake("sports-fan", "Sports Fan", "sport", "/images/sport/sports.png",
    "Any sport, any team. Tell us the jersey number."),

  // ───────────── 3D & Custom Sculpted ─────────────
  cake("peacock-cake", "Peacock Cake", "custom", "/images/custom/j58-peacock-cake.png",
    "A show-stopping peacock with hand-painted feathers in emerald and sapphire.", { tier: "sculpted", featured: true }),
  cake("3d-dinosaurs", "3D Dinosaurs", "custom", "/images/custom/j08-3ddinousars.png",
    "A roaring T-Rex sculpted over a blue buttercream base.", { tier: "sculpted" }),
  cake("3d-car", "3D Car Cake", "custom", "/images/custom/j18-car-3d.png",
    "A sculpted car in the colour and model of your choice.", { tier: "sculpted" }),
  cake("aeroplane-cake", "Aeroplane Cake", "custom", "/images/custom/j50-aeroplane.png",
    "Clouds of buttercream and a fondant plane for aviation lovers.", { tier: "sculpted" }),
  cake("hamburger-cake", "Hamburger Cake", "custom", "/images/custom/j57-hamburger.png",
    "A giant burger, all cake. Sesame bun, lettuce and all.", { tier: "sculpted" }),
  cake("watermelon-cake", "Watermelon Cake", "custom", "/images/custom/j55-watermelon.png",
    "A juicy watermelon slice sculpted in cake.", { tier: "sculpted" }),
  cake("chemistry-cake", "Chemistry Lab", "custom", "/images/custom/j62-chemistry.png",
    "Beakers, flasks and formulae for the scientist in your life.", { tier: "sculpted" }),
  cake("liquor-bottle", "Liquor Bottle", "custom", "/images/custom/j71-liuqor-bottle.png",
    "A sculpted bottle of their favourite spirit.", { tier: "sculpted" }),
  cake("beer-mug-yellow", "Beer Mug (Lager)", "custom", "/images/custom/j72-beer-yellow-mug.png",
    "A frothy golden beer mug sculpted in cake.", { tier: "sculpted" }),
  cake("beer-mug-dark", "Beer Mug (Stout)", "custom", "/images/custom/j74-beer-dark-mug.png",
    "A dark stout mug with a creamy head.", { tier: "sculpted" }),
  cake("poop-emoji-cake", "Poop Emoji Cake", "custom", "/images/custom/j59-shitty-shape.png",
    "The cheekiest cake on the menu. A guaranteed laugh.", { tier: "sculpted" }),
  cake("number-1", "Number 1", "custom", "/images/custom/j20-number-1.png",
    "A sculpted number cake for first birthdays and anniversaries."),
  cake("bowties-cake", "Bow Ties", "custom", "/images/custom/j17-bowties.png",
    "Dapper bow ties for a gentleman’s celebration."),
  cake("pinkish-custom", "Pinkish", "custom", "/images/custom/j14-pinkih.png",
    "A sweet pink buttercream cake customised with your theme."),
  cake("oreo-cream", "Oreo Cream", "custom", "/images/custom/j37-oreo-cream.png",
    "Cookies-and-cream buttercream loaded with Oreo.", { tier: "classic" }),
  cake("black-forest-mousse", "Black Forest Mousse", "custom", "/images/custom/j40-black-forest-mousse.png",
    "Dark chocolate mousse, cherries and fresh cream.", { tier: "classic" }),
  cake("drawing-cake", "Drawing Cake", "custom", "/images/custom/j53-drawing-cake.png",
    "Send us your child’s drawing and we’ll recreate it on cake."),
  cake("choi-san-yeh", "Choi San Yeh (God of Fortune)", "custom", "/images/custom/j77-choi-san-yeh.png",
    "A prosperity cake with the God of Fortune for Chinese New Year reunions.", { tier: "sculpted" }),
  cake("longevity-buns", "Longevity Buns Cake", "custom", "/images/custom/j78-longevity-buns.png",
    "Peach longevity buns sculpted on cake for grand birthdays.", { tier: "sculpted" }),
  cake("longevity-peach", "Longevity Peach", "custom", "/images/custom/longevity-3.jpg",
    "A traditional longevity peach cake for elders’ birthdays.", { tier: "sculpted" }),
  cake("two-tier-gold-orange", "Two Tier Gold & Dried Orange", "custom", "/images/custom/simple-two-tier-gold-dried-orange.png",
    "A chocolate two-tier dressed in gold leaf and dried orange slices.", { tier: "themed" }),
  cake("pinata-golf", "Piñata Cake · Golf", "custom", "/images/custom/pinata-cake-golf.png",
    "Crack the chocolate dome to reveal a surprise inside. Golf edition.", { tier: "sculpted" }),
  cake("pinata-planet", "Piñata Cake · Planet", "custom", "/images/custom/pinata-cake-planet-5.png",
    "A chocolate planet piñata with surprises inside.", { tier: "sculpted" }),
  cake("gift-box-8pcs", "Gift Box · 8 Mini Cakes", "custom", "/images/custom/j69-gift-box-8pcs-cake.png",
    "Eight mini cakes in a gift box, perfect for sharing at the office.",
    { variants: [{ id: "box8", label: "Box of 8", price: 6800 }] }),

  // ───────────── Weddings, Cupcakes & Gifts ─────────────
  cake("wedding-cake", "Classic Wedding Cake", "occasion", "/images/occasion/wedding-2.png",
    "Tiered white wedding cake with fresh florals. Tastings available by appointment.", { tier: "sculpted", featured: true }),
  cake("engagement-cake", "Bertunang Engagement Cake", "occasion", "/images/occasion/bertunang-cake-engagement.png",
    "An elegant engagement cake with floral detailing and gold accents.", { tier: "themed" }),
  cake("wedding-cupcakes", "Wedding Cupcakes", "occasion", "/images/custom/j70-wedding-cupcake.png",
    "Delicate cupcakes topped with sugar flowers for your wedding dessert table.",
    { variants: [{ id: "box12", label: "Box of 12", price: 7200 }, { id: "box24", label: "Box of 24", price: 13800 }] }),
  cake("number-cake-30", "Number Cake", "occasion", "/images/occasion/number-cake-30.png",
    "A cream-tart number cake dressed in fruit, flowers and macarons. Any number.", { tier: "themed" }),
  cake("temple-cream-cake", "Temple Cream Cake", "occasion", "/images/occasion/cream-cake-temple.png",
    "A custom cream cake for religious celebrations and community events.", { tier: "themed" }),
  cake("gift-box-6pcs", "Gift Box · 6 Cupcakes", "occasion", "/images/occasion/j80-gift-box-6pcs.png",
    "Six cupcakes in a ribboned gift box.",
    { variants: [{ id: "box6", label: "Box of 6", price: 4200 }] }),
  cake("unicorn-cupcakes", "Unicorn Cupcakes", "occasion", "/images/occasion/j68-cupcake-unicorn.png",
    "Pastel swirls, horns and sprinkles.",
    { variants: [{ id: "box6", label: "Box of 6", price: 4200 }, { id: "box12", label: "Box of 12", price: 7800 }] }),
  cake("turtle-cupcakes", "Turtle Cupcakes", "occasion", "/images/occasion/j66-cupcake-turtle.png",
    "Adorable fondant turtles on vanilla cupcakes.",
    { variants: [{ id: "box6", label: "Box of 6", price: 4200 }, { id: "box12", label: "Box of 12", price: 7800 }] }),
  cake("dinosaur-cupcakes", "Dinosaur World Cupcakes", "occasion", "/images/occasion/cupcake-dinasour-world-up.png",
    "A dozen dinosaur cupcakes for a prehistoric party.",
    { variants: [{ id: "box12", label: "Box of 12", price: 7800 }] }),
  cake("message-cupcakes", "Message Cupcakes", "occasion", "/images/occasion/j65-cupcake-wording.jpg",
    "Spell it out, one letter per cupcake.",
    { variants: [{ id: "box12", label: "Box of 12", price: 7800 }] }),
  cake("school-bus", "School Bus", "occasion", "/images/occasion/school-bus.png",
    "A yellow school bus cake for graduations and teachers’ day.", { tier: "sculpted" }),
  cake("xmas-snowman", "Christmas Snowman", "occasion", "/images/occasion/xmas-snowman.png",
    "A jolly snowman log cake for the festive season.", { tier: "themed", seasonal: "Christmas" }),

  // ───────────── Chinese New Year Goodies (real 2026 prices) ─────────────
  tin("pineapple-ball", "Premium Pineapple Ball 特选黄梨球", "/images/cny/pineapple-ball.jpg", 3200,
    "Our best-seller. Buttery, melt-in-the-mouth pastry wrapped around slow-cooked pineapple jam, baked golden.", { featured: true, badge: "Best seller" }),
  tin("pineapple-cheese", "Signature Pineapple Cheese 招牌芝士黄梨", "/images/cny/pineapple-cheese.jpg", 3400,
    "The signature twist: a savoury cheese crust around our house pineapple jam. Sweet, salty, addictive."),
  tin("ginger-pineapple-tart", "Ginger Pineapple Tart 姜香黄梨酥", "/images/cny/ginger-pineapple-tart.jpg", 3400,
    "Pineapple jam infused with young ginger for a warming, fragrant finish."),
  tin("crispy-thin-almond-slice", "Crispy Thin Almond Slice 琥珀杏仁薄片", "/images/cny/crispy-thin-almond-slice.jpg", 3000,
    "Paper-thin amber crisps studded with sliced almonds. Impossible to stop at one."),
  tin("chicken-floss-slice", "Thin Chicken Floss Crisp 鸡肉松薄片", "/images/cny/chicken-floss-slice.jpg", 3000,
    "Savoury-sweet crisps layered with fragrant chicken floss."),
  tin("seaweed-slice", "Thin Seaweed Slices 海苔薄片", "/images/cny/seaweed-slice.jpg", 3000,
    "Umami seaweed baked into light, crackly crisps."),
  tin("almond-cookies", "Artisan Almond Cookies 匠心手工杏仁饼", "/images/cny/almond-cookies.jpg", 3000,
    "Crumbly, nutty almond cookies hand-shaped and baked in small batches."),
  tin("pistachio-cookies", "Pistachio Cookies 香酥开心果饼干", "/images/cny/pistachio-cookies.jpg", 3200,
    "Buttery cookies with roasted pistachio throughout."),
  tin("walnut-cookies", "Walnut Cookies 香酥核桃饼干", "/images/cny/walnut-cookies.jpg", 3000,
    "Classic walnut cookies with a tender crumb and toasted walnut crown."),
  tin("mini-love-letters", "Mini Love Letters 炭烧蛋卷", "/images/cny/mini-love-letters.jpg", 2800,
    "Charcoal-grilled egg rolls, thin and crisp, in a 4-inch tin."),
  tin("kueh-bangkit-sago", "Kueh Bangkit Sago 粿蔓吉沙谷", "/images/cny/img.jpg", 3200,
    "Delicate coconut sago cookies that dissolve on the tongue."),

  // ───────────── Mid-Autumn Mooncakes (real prices) ─────────────
  mooncake("harmony-quartet-gift-box", "Harmony Quartet Mooncake Gift Box", "/images/mooncake/amethyst-cantonese-style-harmony-quartet-mooncake-gift-box-4-flavours.jpg", 6000, "Box of 4 · one of each flavour",
    "Four Cantonese-style mooncakes: sugar-free white lotus, sugar-free red lotus, emerald pandan and nutty pistachio paste, each in golden pastry. Halal certified.", { featured: true, badge: "Gift box" }),
  mooncake("sugar-free-white-lotus-single-yolk", "Sugar-Free White Lotus Single Yolk", "/images/mooncake/cantonese-style-sugar-free-white-lotus-paste-single-yolk-mooncake-4-pieces.jpg", 6000, "Box of 4 · 130g each",
    "Silky white lotus paste from fresh seasonal lotus seeds, sweetened with maltitol, with a savoury salted egg yolk at its heart."),
  mooncake("sugar-free-white-lotus-double-yolk", "Sugar-Free White Lotus Double Yolk", "/images/mooncake/sugar-free-white-lotus-paste-double-yolk-mooncake-4-pieces.jpg", 7800, "Box of 4 · 200g each",
    "Our richest classic: fully sugar-free white lotus paste paired with two salted egg yolks."),
  mooncake("sugar-free-white-lotus", "Sugar-Free White Lotus Paste", "/images/mooncake/sugar-free-white-lotus-paste-mooncake-4-pieces.jpg", 7000, "Box of 4 · 180g each",
    "Pure, silky white lotus paste with no cane sugar. Mindful indulgence for the whole family."),
  mooncake("pure-white-lotus", "Pure White Lotus Paste", "/images/mooncake/pure-white-lotus-paste-mooncake-4-pieces.jpg", 7000, "Box of 4",
    "The traditional favourite: smooth white lotus paste in a thin, golden baked skin."),
  mooncake("white-lotus-crispy-walnut", "Sugar-Free White Lotus Crispy Walnut", "/images/mooncake/sugar-free-white-lotus-crispy-walnut-mooncake-9-pieces.jpg", 6000, "Box of 9 · 60g each",
    "Buttery crisp pastry studded with walnut kernels around sugar-free white lotus paste."),
  mooncake("white-lotus-egg-yolk-walnut", "Sugar-Free White Lotus Egg Yolk Walnut", "/images/mooncake/sugar-free-white-lotus-paste-egg-yolk-walnut-mooncake-9-pieces.jpg", 6600, "Box of 9 · 60g each",
    "Crisp walnut pastry, white lotus paste and salted egg yolk in a bite-sized nine-piece box."),
  mooncake("hainanese-pepper-salt-crispy", "Hainanese Pepper Salt Crispy", "/images/mooncake/hainanese-pepper-salt-crispy-mooncake-8-pieces.jpg", 5600, "Box of 8 · 85g each",
    "Classic pepper-salt with sesame, melon seeds, walnuts and dried tangerine peel in a light, crispy white pastry."),
  mooncake("hainanese-fusion", "Hainanese Fusion Mooncake", "/images/mooncake/hainanese-fusion-mooncake-8-pieces.jpg", 6400, "Box of 8 · 85g each",
    "A savoury-sweet five-nut filling with winter melon, no added sugar, in a crispy Hainanese pastry."),
  mooncake("black-sesame-mooncake", "Black Sesame Mooncake", "/images/mooncake/black-sesame-mooncake.jpg", 1800, "Per piece",
    "Toasted black sesame paste, nutty and deep, in a traditional baked skin."),
];

export const bySlug = (slug: string) => products.find((p) => p.slug === slug);
export const byCategory = (category: Category) => products.filter((p) => p.category === category);
export const byCollection = (collection: Collection) => products.filter((p) => p.collection === collection);
export const fromPrice = (p: Product) => Math.min(...p.variants.map((v) => v.price));
export const featured = () => products.filter((p) => p.featured);

export const backdropStyles: Record<Backdrop, { tile: string; page: string; image?: string }> = {
  crimson: {
    tile: "linear-gradient(160deg, #a81b1f 0%, #7a0f14 100%)",
    page: "linear-gradient(180deg, #8f1418 0%, #5d0b0f 100%)",
    image: "/images/hero/crimson-new-year-bakery-backdrop-3.jpg",
  },
  powder: {
    tile: "linear-gradient(160deg, #e6f1fb 0%, #cfe2f4 100%)",
    page: "linear-gradient(180deg, #e9f2fb 0%, #d7e7f6 100%)",
    image: "/images/hero/powder-blue-bakery-hero-backdrop-1.jpg",
  },
  ivory: {
    tile: "linear-gradient(160deg, #fbf8f2 0%, #efe8dc 100%)",
    page: "linear-gradient(180deg, #fbf8f2 0%, #f1ebe1 100%)",
    image: "/images/hero/ivory-studio-backdrop-with-powder-blue-accents-3.jpg",
  },
  sage: {
    tile: "linear-gradient(160deg, #eef0e8 0%, #dde1d2 100%)",
    page: "linear-gradient(180deg, #f1f3ec 0%, #e2e6d8 100%)",
    image: "/images/hero/pale-sage-and-sand-backdrop-2.jpg",
  },
  lilac: {
    tile: "linear-gradient(160deg, #f3edfa 0%, #e2d6f2 100%)",
    page: "linear-gradient(180deg, #f6f1fb 0%, #e9dff5 100%)",
  },
};
