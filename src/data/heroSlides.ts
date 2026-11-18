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
  zh: { eyebrow: string; title: string; accent: string; blurb: string; cta: string };
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
    zh: { eyebrow: "最畅销", title: "黄梨球", accent: "", blurb: "牛油酥皮包裹慢火熬制的黄梨馅，亲手搓圆，烤至金黄，入口即化。", cta: "选购黄梨球" },
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
    zh: { eyebrow: "脆片", title: "薄脆", accent: "脆片", blurb: "海苔、琥珀杏仁与鸡肉松薄片，烤得薄脆作响，一片接一片停不下来。", cta: "选购脆片" },
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
    zh: { eyebrow: "饼干", title: "手工", accent: "杏仁饼", blurb: "酥松香浓的杏仁饼，手工成形，小批量烘焙。", cta: "选购杏仁饼" },
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
    zh: { eyebrow: "古早味", title: "迷你", accent: "蛋卷", blurb: "炭火烤制的蛋卷，薄而香脆，沿用阿嬷那一辈的卷法。", cta: "选购蛋卷" },
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
    zh: { eyebrow: "节庆最爱", title: "金黄", accent: "芝麻球", blurb: "金黄脆壳裹满香烤芝麻，团圆饭桌上的经典，滚滚而来好兆头。", cta: "选购节庆糕点" },
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
    zh: { eyebrow: "优雅系列", title: "鲜花", accent: "蛋糕", blurb: "粉彩奶油、白巧克力淋面配真花点缀。按您的日期新鲜烘焙，绝不冷藏现货。", cta: "选购优雅蛋糕" },
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
    zh: { eyebrow: "儿童系列", title: "派对", accent: "卡通蛋糕", blurb: "可爱摆件、柔和配色，再亲手写上名字。让孩子记住吹蜡烛的那一刻。", cta: "选购儿童蛋糕" },
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
    zh: { eyebrow: "雕塑系列", title: "手工雕塑", accent: "乌龟蛋糕", blurb: "每一片龟甲都亲手塑形。我们的动物造型蛋糕，让生日变成一场展览。", cta: "选购动物蛋糕" },
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
    zh: { eyebrow: "运动系列", title: "球队", accent: "配色", blurb: "他的球队、他的队徽、他的名字。为家里最铁杆的球迷订制运动蛋糕。", cta: "选购运动蛋糕" },
  },
];
