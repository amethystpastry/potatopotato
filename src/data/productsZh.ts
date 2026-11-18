import type { Collection } from "@/lib/products";

/**
 * Simplified Chinese (中文) copy for the catalogue in `@/lib/products`.
 * Keyed by collection id, product slug, and the exact English term string.
 */

export const collectionZh: Record<Collection, { label: string; blurb: string }> = {
  elegant: {
    label: "招牌优雅系列",
    blurb: "鲜花、淋面与经典奶油霜，为每一场庆祝增添光彩。",
  },
  kids: {
    label: "童趣卡通系列",
    blurb: "美人鱼、小公主、超级英雄与彩虹，派对上的焦点。",
  },
  animal: {
    label: "动物王国",
    blurb: "手工塑造的可爱生灵，从温顺小绵羊到张口大鲨鱼。",
  },
  sport: {
    label: "运动与兴趣",
    blurb: "足球场、桌球台，还有一杯冰啤酒，献给每一位球迷。",
  },
  custom: {
    label: "3D 立体定制",
    blurb: "告诉我们您的故事，我们用蛋糕将它雕琢成真，细节一丝不苟。",
  },
  occasion: {
    label: "婚礼、杯子蛋糕与礼盒",
    blurb: "多层婚礼蛋糕、订婚蛋糕与杯子蛋糕礼盒。",
  },
  cny: {
    label: "新春年饼",
    blurb: "入口即化的黄梨球、香脆薄片与手工饼干，装于典藏礼罐。",
  },
  mooncake: {
    label: "中秋月饼",
    blurb: "无糖白莲蓉、海南酥皮与经典广式月饼。",
  },
};

export const productZh: Record<string, { name: string; description: string }> = {
  // ───────────── 招牌优雅系列 ─────────────
  "heha-purple-strawberry": {
    name: "紫晶草莓淋面蛋糕",
    description: "本店招牌：淡紫渐变海绵蛋糕，淋上白巧克力，缀以新鲜草莓与糖珠。",
  },
  "fresh-flower-cake": {
    name: "鲜花蛋糕",
    description: "顺滑奶油霜上点缀当季鲜花，于庆祝当天早晨亲手完成。",
  },
  "garden-blooms": {
    name: "花园盛放",
    description: "粉彩色调的裱花花园，适合献给母亲、生日或下午茶。",
  },
  "buttercream-florals": {
    name: "奶油霜裱花蛋糕",
    description: "手工裱制的玫瑰与毛茛，奶白与浅粉相映，香草或巧克力海绵任选。",
  },
  "pastel-petal": {
    name: "粉彩花瓣蛋糕",
    description: "层层褶边花瓣包裹轻盈海绵与鲜奶油，低调而雅致。",
  },
  "rose-bouquet": {
    name: "玫瑰花束蛋糕",
    description: "深红与粉色奶油霜玫瑰花束，献给纪念日与浪漫时刻。",
  },
  "blush-pink": {
    name: "腮红粉",
    description: "柔粉渐变配精致裱花，简约优雅，怎么拍都好看。",
  },
  "love-and-roses": {
    name: "爱与玫瑰",
    description: "鲜玫瑰配“love”字插牌，为求婚、纪念日与情人节而生。",
  },
  "floral-tiers": {
    name: "双层花语",
    description: "两层奶油霜蛋糕缀以垂坠花饰，适合小型婚礼与重要生日。",
  },
  "blue-and-white": {
    name: "蓝白之约",
    description: "粉蓝奶油霜配白色花饰，色调宁静经典。",
  },
  "chocolate-on-white": {
    name: "白底巧克力",
    description: "纯白蛋糕淋上黑巧克力，点缀巧克力碎片。",
  },
  "classic-chocolate-round": {
    name: "经典巧克力圆蛋糕",
    description: "浓郁巧克力甘纳许覆盖湿润巧克力海绵，人人都爱。",
  },
  "blue-on-white": {
    name: "白底蓝花",
    description: "白色奶油霜点缀柔蓝花饰与糖珍珠。",
  },
  "rainbow-side": {
    name: "彩虹侧纹",
    description: "白色蛋糕配一道鲜明彩虹奶油霜，简单又欢快。",
  },
  "dark-chocolate-dream": {
    name: "黑巧克力之梦",
    description: "黑巧克力海绵、甘纳许与巧克力卷层层叠叠，献给真正的巧克力迷。",
  },
  "assorted-fruits": {
    name: "缤纷鲜果蛋糕",
    description: "轻盈香草海绵配鲜奶油，顶上铺满当季水果。",
  },
  "floral-crown": {
    name: "鲜花冠冕",
    description: "顺滑奶油上环绕一圈鲜花，清新芬芳，优雅动人。",
  },
  "blooms-in-a-box": {
    name: "花盒蛋糕",
    description: "奶油霜花朵摆满花盒，既是礼物，也是甜点。",
  },
  "love-letter-cake": {
    name: "情书蛋糕",
    description: "心形蛋糕配手写祝福，用蛋糕说出心意。",
  },

  // ───────────── 童趣卡通系列 ─────────────
  "rainbow-pink": {
    name: "粉红彩虹",
    description: "粉色彩虹蛋糕配蓬松云朵与糖粒，小朋友生日的最爱。",
  },
  "mermaid-tail": {
    name: "美人鱼尾",
    description: "闪亮鳞片、翻糖鱼尾与贝壳，把海底魔法做成蛋糕。",
  },
  "sea-mermaid": {
    name: "海洋美人鱼",
    description: "海洋蓝调配美人鱼插件、珊瑚与珍珠。",
  },
  "mermaid-girls": {
    name: "美人鱼女孩",
    description: "多层美人鱼蛋糕，配手工人偶，献给生日小寿星。",
  },
  "princess-tiers": {
    name: "公主城堡双层蛋糕",
    description: "粉彩双层公主城堡蛋糕，缀以糖制皇冠。",
  },
  "princess-toppers": {
    name: "公主插件蛋糕",
    description: "经典奶油霜蛋糕，顶上公主插件，洒满可食用闪粉。",
  },
  "princess-cake": {
    name: "公主之梦",
    description: "柔粉奶油霜、小皇冠与满满闪耀。",
  },
  "superhero-cake": {
    name: "超级英雄之城",
    description: "城市天际线蛋糕，顶上站着孩子最爱的英雄。",
  },
  "hero-cake": {
    name: "英雄蛋糕",
    description: "鲜明英雄配色与漫画细节，献给最勇敢的生日。",
  },
  "wizard-cake": {
    name: "魔法学院",
    description: "魔法书、魔杖与学院配色，献给小小魔法师。",
  },
  "spaceship-cake": {
    name: "太空飞船历险",
    description: "火箭、星球与星星，过一个超乎想象的生日。",
  },
  "construction-cake": {
    name: "工地蛋糕",
    description: "挖掘机、翻斗车与巧克力“泥土”，献给小小建筑师。",
  },
  "cartoon-cake": {
    name: "卡通蛋糕",
    description: "手工塑造孩子最爱节目里的卡通角色。",
  },
  "cartoon-toppers": {
    name: "卡通插件蛋糕",
    description: "奶油霜蛋糕，顶上卡通角色任您挑选。",
  },
  "bears-cake": {
    name: "泰迪熊",
    description: "粉彩奶油霜蛋糕上，坐着可爱的翻糖泰迪熊。",
  },
  "bear-hugs": {
    name: "熊抱抱",
    description: "憨态可掬的小熊插件，配气球与云朵。",
  },
  "elephants-cake": {
    name: "小象宝宝",
    description: "粉彩小象与气球，适合满月宴与周岁生日。",
  },
  "babys-first": {
    name: "宝宝周岁",
    description: "温柔粉彩的周岁蛋糕，配熟睡宝宝插件。",
  },
  "rainbow-clouds": {
    name: "彩虹云朵",
    description: "一道彩虹横跨蓬松蛋白霜云朵。",
  },
  "playful-party": {
    name: "欢乐派对",
    description: "色彩明快、活泼有趣，可按任何派对主题定制。",
  },
  "little-celebration": {
    name: "小小庆典",
    description: "配合您的邀请卡设计的欢乐卡通蛋糕。",
  },

  // ───────────── 动物王国 ─────────────
  "butterfly-dreamy": {
    name: "梦幻蝴蝶",
    description: "淡紫与薰衣草色调，糖制蝴蝶翩翩起舞。",
  },
  "sheep-cake": {
    name: "小绵羊蛋糕",
    description: "以奶油霜旋纹塑成毛茸茸的小绵羊，软萌又美味。",
  },
  "tortoise-cake": {
    name: "乌龟蛋糕",
    description: "手绘龟壳，趴在沙色饼干底上。",
  },
  "shark-cake": {
    name: "鲨鱼来袭",
    description: "大白鲨从蓝色奶油霜浪花中跃出。",
  },
  "elephant-cake": {
    name: "大象蛋糕",
    description: "温和的立体大象，配翻糖细节。",
  },
  "lizard-cake": {
    name: "蜥蜴蛋糕",
    description: "逼真的立体蜥蜴，献给爬虫爱好者。",
  },
  "gecko-cake": {
    name: "壁虎蛋糕",
    description: "手工塑造的壁虎，栖息在岩石纹理蛋糕上。",
  },
  "chicken-cake": {
    name: "母鸡蛋糕",
    description: "欢快的翻糖母鸡，坐在奶油霜鸟巢里。",
  },
  "rabbits-cake": {
    name: "兔子花园",
    description: "翻糖小兔在胡萝卜田里嬉戏。",
  },
  "bunny-cake": {
    name: "小兔跳跳",
    description: "粉彩小兔蛋糕，适合复活节与春日生日。",
  },
  "monster-cake": {
    name: "友善小怪兽",
    description: "毛茸茸的奶油霜小怪兽，咧嘴大笑。",
  },

  // ───────────── 运动与兴趣 ─────────────
  "snooker-table": {
    name: "斯诺克桌球台",
    description: "绿色台呢桌球台，球、球杆与球袋一应俱全。",
  },
  "football-field": {
    name: "足球场",
    description: "绿色奶油霜球场，配翻糖足球与球门。",
  },
  "flags-with-football": {
    name: "球队战旗",
    description: "您支持球队的旗帜与配色，环绕足球主题中心。",
  },
  "football-icing-sheet": {
    name: "球会队徽蛋糕",
    description: "球会队徽印在可食用糖片上，以球队配色裱花镶边。",
  },
  "trains-and-buses": {
    name: "火车与巴士",
    description: "翻糖火车与巴士，行驶在巧克力海绵轨道上。",
  },
  "beer-theme-gold": {
    name: "啤酒金巧克力",
    description: "值得举杯的啤酒主题蛋糕，点缀金色巧克力。",
  },
  "dinosaur-cream-cake": {
    name: "恐龙鲜奶油蛋糕",
    description: "史前风鲜奶油蛋糕，配恐龙插件与棕榈树。",
  },
  "classic-chiffon": {
    name: "经典戚风",
    description: "轻盈松软的戚风配鲜奶油，简单而老少咸宜。",
  },
  "doodle-cake": {
    name: "涂鸦蛋糕",
    description: "手绘涂鸦裱在奶油霜上，欢迎发来您的草图。",
  },
  "sports-fan": {
    name: "运动迷",
    description: "任何运动、任何球队，告诉我们球衣号码即可。",
  },

  // ───────────── 3D 立体定制 ─────────────
  "peacock-cake": {
    name: "孔雀蛋糕",
    description: "令人惊艳的孔雀，翠绿与宝蓝羽毛逐片手绘。",
  },
  "3d-dinosaurs": {
    name: "3D 恐龙",
    description: "咆哮的霸王龙，立于蓝色奶油霜底座之上。",
  },
  "3d-car": {
    name: "3D 汽车蛋糕",
    description: "立体汽车蛋糕，颜色与车型任您指定。",
  },
  "aeroplane-cake": {
    name: "飞机蛋糕",
    description: "奶油霜云朵与翻糖飞机，献给航空爱好者。",
  },
  "hamburger-cake": {
    name: "汉堡蛋糕",
    description: "一个巨型汉堡，全是蛋糕，芝麻面包、生菜一应俱全。",
  },
  "watermelon-cake": {
    name: "西瓜蛋糕",
    description: "以蛋糕塑成的多汁西瓜片。",
  },
  "chemistry-cake": {
    name: "化学实验室",
    description: "烧杯、烧瓶与化学式，献给身边的科学家。",
  },
  "liquor-bottle": {
    name: "酒瓶蛋糕",
    description: "按其心头好塑造的立体酒瓶。",
  },
  "beer-mug-yellow": {
    name: "啤酒杯（拉格）",
    description: "泡沫丰盈的金色啤酒杯，以蛋糕塑成。",
  },
  "beer-mug-dark": {
    name: "啤酒杯（黑啤）",
    description: "深色黑啤杯，顶着绵密泡沫。",
  },
  "poop-emoji-cake": {
    name: "便便表情蛋糕",
    description: "菜单上最调皮的蛋糕，保证笑声不断。",
  },
  "number-1": {
    name: "数字 1",
    description: "立体数字蛋糕，适合周岁生日与周年纪念。",
  },
  "bowties-cake": {
    name: "领结蛋糕",
    description: "帅气领结，献给绅士的庆祝。",
  },
  "pinkish-custom": {
    name: "浅粉定制",
    description: "甜美粉色奶油霜蛋糕，按您的主题定制。",
  },
  "oreo-cream": {
    name: "奥利奥奶油",
    description: "曲奇奶油风味奶油霜，满满奥利奥。",
  },
  "black-forest-mousse": {
    name: "黑森林慕斯",
    description: "黑巧克力慕斯、樱桃与鲜奶油。",
  },
  "drawing-cake": {
    name: "画作蛋糕",
    description: "发来孩子的画作，我们将它重现在蛋糕上。",
  },
  "choi-san-yeh": {
    name: "财神爷",
    description: "财神爷造型的招财蛋糕，为新春团圆添喜气。",
  },
  "longevity-buns": {
    name: "寿桃包蛋糕",
    description: "寿桃包塑于蛋糕之上，为长辈大寿祝福。",
  },
  "longevity-peach": {
    name: "寿桃蛋糕",
    description: "传统寿桃蛋糕，为长辈贺寿。",
  },
  "two-tier-gold-orange": {
    name: "金箔香橙双层蛋糕",
    description: "巧克力双层蛋糕，饰以金箔与橙干片。",
  },
  "pinata-golf": {
    name: "惊喜敲敲蛋糕 · 高尔夫",
    description: "敲开巧克力圆顶，惊喜藏在其中。高尔夫主题。",
  },
  "pinata-planet": {
    name: "惊喜敲敲蛋糕 · 星球",
    description: "巧克力星球造型，敲开即见惊喜。",
  },
  "gift-box-8pcs": {
    name: "迷你蛋糕礼盒 · 8 件",
    description: "八款迷你蛋糕装于礼盒，最适合办公室分享。",
  },

  // ───────────── 婚礼、杯子蛋糕与礼盒 ─────────────
  "wedding-cake": {
    name: "经典婚礼蛋糕",
    description: "多层白色婚礼蛋糕，饰以鲜花。可预约试吃。",
  },
  "engagement-cake": {
    name: "Bertunang 订婚蛋糕",
    description: "优雅的订婚蛋糕，配花饰与金色点缀。",
  },
  "wedding-cupcakes": {
    name: "婚礼杯子蛋糕",
    description: "精致杯子蛋糕缀以糖花，点亮您的婚礼甜品桌。",
  },
  "number-cake-30": {
    name: "数字蛋糕",
    description: "奶油挞数字蛋糕，饰以水果、鲜花与马卡龙，任何数字皆可。",
  },
  "temple-cream-cake": {
    name: "庙宇鲜奶油蛋糕",
    description: "为宗教庆典与社区活动定制的鲜奶油蛋糕。",
  },
  "gift-box-6pcs": {
    name: "杯子蛋糕礼盒 · 6 件",
    description: "六个杯子蛋糕，装于系带礼盒。",
  },
  "unicorn-cupcakes": {
    name: "独角兽杯子蛋糕",
    description: "粉彩旋纹、独角与糖粒。",
  },
  "turtle-cupcakes": {
    name: "小海龟杯子蛋糕",
    description: "香草杯子蛋糕上趴着可爱的翻糖小海龟。",
  },
  "dinosaur-cupcakes": {
    name: "恐龙世界杯子蛋糕",
    description: "一打恐龙杯子蛋糕，开一场史前派对。",
  },
  "message-cupcakes": {
    name: "字母祝福杯子蛋糕",
    description: "一个杯子蛋糕一个字母，拼出您的心意。",
  },
  "school-bus": {
    name: "校车蛋糕",
    description: "黄色校车蛋糕，适合毕业典礼与教师节。",
  },
  "xmas-snowman": {
    name: "圣诞雪人",
    description: "憨态可掬的雪人树桩蛋糕，欢度佳节。",
  },

  // ───────────── 新春年饼 ─────────────
  "pineapple-ball": {
    name: "特选黄梨球",
    description: "人气之选。酥松入口即化的饼皮，包裹慢火熬制的黄梨酱，烤至金黄。",
  },
  "pineapple-cheese": {
    name: "招牌芝士黄梨",
    description: "招牌新意：咸香芝士酥皮包裹自家黄梨酱，甜中带咸，一吃上瘾。",
  },
  "ginger-pineapple-tart": {
    name: "姜香黄梨酥",
    description: "黄梨酱融入嫩姜，余韵温暖芬芳。",
  },
  "crispy-thin-almond-slice": {
    name: "琥珀杏仁薄片",
    description: "薄如纸的琥珀脆片，铺满杏仁片，一片接一片停不下来。",
  },
  "chicken-floss-slice": {
    name: "鸡肉松薄片",
    description: "咸甜脆片，夹着香喷喷的鸡肉松。",
  },
  "seaweed-slice": {
    name: "海苔薄片",
    description: "鲜香海苔烤入轻薄香脆的薄片中。",
  },
  "almond-cookies": {
    name: "匠心手工杏仁饼",
    description: "酥松香浓的杏仁饼，手工成型，小批烘焙。",
  },
  "pistachio-cookies": {
    name: "香酥开心果饼干",
    description: "牛油饼干，满载烘香开心果。",
  },
  "walnut-cookies": {
    name: "香酥核桃饼干",
    description: "经典核桃饼，口感酥软，顶缀烘香核桃。",
  },
  "mini-love-letters": {
    name: "炭烧蛋卷",
    description: "炭火烘烤的蛋卷，薄脆可口，装于 4 寸礼罐。",
  },
  "kueh-bangkit-sago": {
    name: "粿蔓吉沙谷",
    description: "细致的椰香沙谷饼，入口即化。",
  },

  // ───────────── 中秋月饼 ─────────────
  "harmony-quartet-gift-box": {
    name: "和谐四重奏月饼礼盒",
    description: "四款广式月饼：无糖白莲蓉、无糖红莲蓉、翡翠班兰与香浓开心果蓉，皆裹金黄饼皮。清真认证。",
  },
  "sugar-free-white-lotus-single-yolk": {
    name: "无糖白莲蓉单黄",
    description: "选用当季新鲜莲子制成的白莲蓉，以麦芽糖醇调甜，内藏咸香蛋黄。",
  },
  "sugar-free-white-lotus-double-yolk": {
    name: "无糖白莲蓉双黄",
    description: "最丰盛的经典：全无糖白莲蓉，配两颗咸蛋黄。",
  },
  "sugar-free-white-lotus": {
    name: "无糖白莲蓉",
    description: "纯正细滑的白莲蓉，不添加蔗糖，全家安心享用。",
  },
  "pure-white-lotus": {
    name: "纯白莲蓉",
    description: "传统之选：细滑白莲蓉，裹以金黄薄皮。",
  },
  "white-lotus-crispy-walnut": {
    name: "无糖白莲蓉核桃酥",
    description: "牛油酥皮嵌满核桃仁，包裹无糖白莲蓉。",
  },
  "white-lotus-egg-yolk-walnut": {
    name: "无糖白莲蓉蛋黄核桃酥",
    description: "核桃酥皮、白莲蓉与咸蛋黄，一口一个，九件装。",
  },
  "hainanese-pepper-salt-crispy": {
    name: "海南椒盐酥皮月饼",
    description: "经典椒盐馅，配芝麻、瓜子、核桃与陈皮，裹以轻盈酥脆的白酥皮。",
  },
  "hainanese-fusion": {
    name: "海南风味五仁月饼",
    description: "咸甜五仁馅配冬瓜，无添加糖，裹以海南酥皮。",
  },
  "black-sesame-mooncake": {
    name: "黑芝麻月饼",
    description: "烘香黑芝麻蓉，浓郁醇厚，裹以传统烘焙饼皮。",
  },
};

export const termZh: Record<string, string> = {
  // Cake sizes
  '6" round': "6 寸圆形",
  '8" round': "8 寸圆形",
  '10" round': "10 寸圆形",
  "Serves 8 – 10": "适合 8 – 10 人",
  "Serves 12 – 16": "适合 12 – 16 人",
  "Serves 20 – 25": "适合 20 – 25 人",

  // Boxes & tins
  "Keepsake tin": "典藏礼罐",
  "Box of 6": "6 个装",
  "Box of 8": "8 个装",
  "Box of 12": "12 个装",
  "Box of 24": "24 个装",

  // Mooncake packs
  "Box of 4": "4 个装",
  "Box of 4 · one of each flavour": "4 个装 · 每款口味各一",
  "Box of 4 · 130g each": "4 个装 · 每个 130 克",
  "Box of 4 · 180g each": "4 个装 · 每个 180 克",
  "Box of 4 · 200g each": "4 个装 · 每个 200 克",
  "Box of 8 · 85g each": "8 个装 · 每个 85 克",
  "Box of 9 · 60g each": "9 个装 · 每个 60 克",
  "Per piece": "单个",

  // Badges
  Signature: "招牌",
  "Best seller": "人气之选",
  "Gift box": "礼盒",

  // Seasonal
  "Chinese New Year": "农历新年",
  "Mid-Autumn Festival": "中秋节",
  Christmas: "圣诞节",
};
