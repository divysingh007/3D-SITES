/**
 * AVANTIKA SAREE CENTRE AND GARMENTS
 * Premium Luxury Indian Ethnic Fashion Catalog & Database
 * Flagship Boutique: Thakur Churaha
 */

const PRODUCTS_DATA = [
  {
    id: "avantika-crimson-banarasi",
    name: "Crimson Banarasi Silk Saree",
    tagline: "Woven with pure gold zari by master weavers of Varanasi",
    category: "sarees",
    categoryName: "Sarees",
    price: 18500,
    originalPrice: 24000,
    fabric: "Pure Katan Silk",
    color: "Crimson Red",
    colorHex: "#8B1425",
    occasion: "Bridal & Wedding",
    tag: "Bestseller",
    badge: "Master Loom Edition",
    rating: 4.9,
    reviewCount: 48,
    isNew: true,
    isFeatured: true,
    isBridal: true,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=85"
    ],
    shortDesc: "A regal crimson Banarasi saree handwoven in pure mulberry katan silk with intricate floral kadhwa jaal and antiqued gold zari border.",
    description: "An heirloom piece celebrating timeless Indian heritage. Handcrafted over 28 working days in Varanasi, this Crimson Banarasi Silk Saree embodies ceremonial grace. The opulent kadhwa weave features delicate botanical creepers (bel jaal) interlaid with electroplated gold tested zari. Paired with a contrast-bordered unstitched katan silk blouse piece.",
    craftsmanship: {
      loom: "Traditional Pit Loom, Varanasi",
      weftWarp: "100% Pure Mulberry Katan Silk (208 Count)",
      zari: "Micro-Fine Antiqued Gold Tested Zari",
      weavingTime: "28 Days by Master Artisan",
      certification: "Silk Mark & Handloom Heritage Certified"
    },
    availableColors: [
      { name: "Crimson Red", hex: "#8B1425" },
      { name: "Ruby Maroon", hex: "#5E121E" },
      { name: "Rani Pink", hex: "#B8255F" }
    ],
    blouseOptions: [
      "Unstitched Fabric (Included 0.8m)",
      "Bespoke Made-to-Measure Blouse (+₹2,500)",
      "Padded Royal Sweetheart Neckline (+₹3,200)"
    ]
  },
  {
    id: "avantika-ivory-organza",
    name: "Ivory Organza Bloom",
    tagline: "Translucent gossamer drape adorned with delicate hand-painted motifs",
    category: "sarees",
    categoryName: "Organza",
    price: 18400,
    originalPrice: 22500,
    fabric: "Silk Organza",
    color: "Ivory Cream",
    colorHex: "#FAF6ED",
    occasion: "Cocktails & Sangeet",
    tag: "Trending",
    badge: "Botanical Atelier",
    rating: 4.8,
    reviewCount: 34,
    isNew: true,
    isFeatured: true,
    isBridal: false,
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469668-93510cb2866c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
    ],
    shortDesc: "Whisper-light ivory silk organza illuminated with pastel floral foliage, scalloped cutwork borders, and soft pearls.",
    description: "Modern romanticism meets bespoke craft. Ivory Organza Bloom is woven from ultra-fine silk filaments for effortless, fluid drape. Each petal is individually shaded with natural pigment washes and highlighted with hand-guided pearl and sequin embroidery along the delicate scalloped pallu.",
    craftsmanship: {
      loom: "Handloom Weft with Hand-Cut Scallop Work",
      weftWarp: "Filament Silk Organza",
      zari: "Muted Champagne Resham & Pearl Accents",
      weavingTime: "18 Days Hand Craftsmanship",
      certification: "Atelier Signature Edition"
    },
    availableColors: [
      { name: "Ivory Cream", hex: "#FAF6ED" },
      { name: "Blush Champagne", hex: "#F3E3D3" },
      { name: "Pistachio Milk", hex: "#E3ECE2" }
    ],
    blouseOptions: [
      "Unstitched Raw Silk Blouse (Included)",
      "Hand-Embroidered Scallop Blouse (+₹2,800)",
      "Corset-Style Contemporary Blouse (+₹3,500)"
    ]
  },
  {
    id: "avantika-rose-gold-tissue",
    name: "Rose Gold Tissue Saree",
    tagline: "Metallic luminescence woven with silk warp and metallic zari weft",
    category: "sarees",
    categoryName: "Festive Edit",
    price: 22900,
    originalPrice: 28000,
    fabric: "Tissue & Zari",
    color: "Rose Gold",
    colorHex: "#B76E79",
    occasion: "Reception",
    tag: "Celebrity Pick",
    badge: "Liquid Gold Texture",
    rating: 5.0,
    reviewCount: 42,
    isNew: false,
    isFeatured: true,
    isBridal: true,
    images: [
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
    ],
    shortDesc: "A celestial drape cast in liquid rose gold tissue, capturing evening candlelight with dramatic sophistication.",
    description: "Constructed with warp threads of pure mulberry silk and weft threads of gossamer rose-gold metallic zari. The saree offers a structured yet fluid drape that catches the light from every dimension, finished with a sleek mina-worked border.",
    craftsmanship: {
      loom: "Banaras Shuttle Handloom",
      weftWarp: "Pure Silk Warp x Metallic Zari Weft",
      zari: "Dual-Tone Rose Gold Alloy Zari",
      weavingTime: "24 Days Intensive Loom Work",
      certification: "Handcrafted Heritage Assurance"
    },
    availableColors: [
      { name: "Rose Gold", hex: "#B76E79" },
      { name: "Warm Champagne", hex: "#E2C992" },
      { name: "Silver Moonlight", hex: "#D6D6DC" }
    ],
    blouseOptions: [
      "Unstitched Tissue-Silk Blouse (Included)",
      "Deep-U Neck Zardozi Blouse (+₹2,900)",
      "Full Sleeves Royal Sheer Blouse (+₹3,600)"
    ]
  },
  {
    id: "avantika-emerald-heritage-silk",
    name: "Emerald Heritage Silk",
    tagline: "Deep forest jewel tones woven with sacred temple motifs",
    category: "sarees",
    categoryName: "Silk Sarees",
    price: 24500,
    originalPrice: 31000,
    fabric: "Pure Katan Silk",
    color: "Emerald Green",
    colorHex: "#1B4D3E",
    occasion: "Festive & Diwali",
    tag: "Exclusive",
    badge: "Temple Heritage Weave",
    rating: 4.9,
    reviewCount: 39,
    isNew: false,
    isFeatured: true,
    isBridal: false,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=85"
    ],
    shortDesc: "Vibrant emerald green pure silk adorned with antique copper zari peacock motifs and royal meenakari borders.",
    description: "Inspired by ancient temple fresco art, Emerald Heritage Silk carries the dignity of ancestral Indian weaving. The richly saturated emerald palette contrasts against burnished copper-gold zari, creating an aura of commanding grace.",
    craftsmanship: {
      loom: "Traditional Jacquard Handloom",
      weftWarp: "Heavy 4-Ply Mulberry Silk",
      zari: "Copper-Gold Antiqued Zari",
      weavingTime: "30 Days of Artisan Weaving",
      certification: "GI Certified Handloom Varanasi"
    },
    availableColors: [
      { name: "Emerald Green", hex: "#1B4D3E" },
      { name: "Royal Teal", hex: "#165057" },
      { name: "Forest Olive", hex: "#2E473B" }
    ],
    blouseOptions: [
      "Unstitched Matching Silk Piece (Included)",
      "Contrast Ruby Red Embroidered Blouse (+₹3,100)",
      "High Neck Regal Brocade Blouse (+₹3,400)"
    ]
  },
  {
    id: "avantika-ruby-bridal-weave",
    name: "Ruby Bridal Weave",
    tagline: "The quintessential bride's dream crafted with zardozi and real zari",
    category: "bridal",
    categoryName: "Bridal Sarees",
    price: 32000,
    originalPrice: 42000,
    fabric: "Heritage Brocade",
    color: "Ruby Deep Red",
    colorHex: "#680C1D",
    occasion: "Bridal & Wedding",
    tag: "Royal Couture",
    badge: "Bridal Masterpiece",
    rating: 5.0,
    reviewCount: 65,
    isNew: true,
    isFeatured: true,
    isBridal: true,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
    ],
    shortDesc: "A breathtaking bridal saree steeped in auspicious sindoori red with heavy bullion zardozi borders and a grand pallu.",
    description: "The crown jewel of our bridal atelier. Built for the bride who reveres tradition, this masterpiece features 3D zardozi French knots, dabka embroidery, and uncut mirror work sewn meticulously over rich Varanasi silk.",
    craftsmanship: {
      loom: "Dual-Artisan Frame Loom & Adda Work",
      weftWarp: "Heavy Grade Heirloom Katan Silk",
      zari: "Authentic Bullion Gold & Silver Dabka",
      weavingTime: "45 Days Hand Embroidery & Weave",
      certification: "Avantika Certified Royal Bridal Seal"
    },
    availableColors: [
      { name: "Ruby Deep Red", hex: "#680C1D" },
      { name: "Sindoori Crimson", hex: "#9E1B24" },
      { name: "Burgundy Wine", hex: "#4C061D" }
    ],
    blouseOptions: [
      "Unstitched Heavy Embroidered Fabric (Included)",
      "Bridal Sweetheart Blouse with Latkan (+₹4,500)",
      "Double Dupatta & Blouse Couture Suite (+₹6,500)"
    ]
  },
  {
    id: "avantika-champagne-zari",
    name: "Champagne Zari Saree",
    tagline: "Subtle royalty with understated radiance and shimmer",
    category: "sarees",
    categoryName: "Festive Edit",
    price: 21800,
    originalPrice: 27500,
    fabric: "Tissue & Zari",
    color: "Champagne Gold",
    colorHex: "#D8C59A",
    occasion: "Royal Soiree",
    tag: "Editor's Choice",
    badge: "Muted Opulence",
    rating: 4.8,
    reviewCount: 29,
    isNew: false,
    isFeatured: true,
    isBridal: false,
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=85"
    ],
    shortDesc: "Effortlessly poised champagne gold tissue saree featuring fine resham threadwork and an opulent satin finish.",
    description: "Designed for evening galas and intimate sangeet ceremonies, this champagne drape balances metallic reflection with cashmere-soft silk texture. The border features tone-on-tone embroidery bordered by micro pearls.",
    craftsmanship: {
      loom: "Narrow-Width Artisan Shuttle Loom",
      weftWarp: "Champagne Silk x Metallic Wire",
      zari: "Light Gold Matte Zari",
      weavingTime: "20 Days Handcrafting",
      certification: "Handcrafted Luxury Seal"
    },
    availableColors: [
      { name: "Champagne Gold", hex: "#D8C59A" },
      { name: "Soft Platinum", hex: "#DFE0DC" },
      { name: "Warm Honey", hex: "#C79D58" }
    ],
    blouseOptions: [
      "Unstitched Satin Silk Blouse (Included)",
      "Backless Pearl Tassel Blouse (+₹2,700)",
      "Structured Modern Bustier Blouse (+₹3,300)"
    ]
  },
  {
    id: "avantika-noor-jahan-lehenga",
    name: "Noor Jahan Zardozi Velvet Lehenga",
    tagline: "Regal bridal lehenga with 16 kalis hand-embroidered in gold bullion",
    category: "lehengas",
    categoryName: "Bridal Lehengas",
    price: 48000,
    originalPrice: 62000,
    fabric: "Velvet & Silk",
    color: "Ruby Deep Red",
    colorHex: "#5E0B19",
    occasion: "Bridal & Wedding",
    tag: "Haute Couture",
    badge: "Royal Bridal Suite",
    rating: 5.0,
    reviewCount: 31,
    isNew: true,
    isFeatured: true,
    isBridal: true,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
    ],
    shortDesc: "A couture velvet lehenga set featuring 16 hand-embroidered kalis, double organza dupattas, and heavy zardozi motifs.",
    description: "An ode to Mughal royal courts. Crafted on deep crimson micro-velvet with intricate floral arches and peacock roundels in antique gold pita work and nakshi zardozi. Includes custom tailoring and bridal veil.",
    craftsmanship: {
      loom: "Hand Kadhai on Wooden Adda Frames",
      weftWarp: "Silk Micro-Velvet with Pure Organza Veil",
      zari: "Pure Bullion, Dabka & Pota Pearls",
      weavingTime: "60 Days Dedicated Artisan Work",
      certification: "Avantika Haute Couture Guild"
    },
    availableColors: [
      { name: "Mughal Crimson", hex: "#5E0B19" },
      { name: "Royal Plum", hex: "#46142E" },
      { name: "Emerald Pine", hex: "#123C2C" }
    ],
    blouseOptions: [
      "Custom Bridal Blouse with Double Dupatta (Included)",
      "Extra Can-Can Flare & Velvet Trail (+₹3,500)"
    ]
  },
  {
    id: "avantika-peacock-kanjivaram",
    name: "Royal Peacock Kanjivaram Brocade",
    tagline: "Authentic Tamil temple weave with interlocking korvai borders",
    category: "sarees",
    categoryName: "Silk Sarees",
    price: 28500,
    originalPrice: 35000,
    fabric: "Pure Katan Silk",
    color: "Peacock Blue",
    colorHex: "#0D4F6A",
    occasion: "Bridal & Wedding",
    tag: "Heirloom",
    badge: "Korvai Weave",
    rating: 4.9,
    reviewCount: 27,
    isNew: false,
    isFeatured: true,
    isBridal: true,
    images: [
      "https://images.unsplash.com/photo-1610030469668-93510cb2866c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85"
    ],
    shortDesc: "Deep cobalt peacock silk paired with contrast crimson korvai borders and solid gold zari vanki motifs.",
    description: "Woven in Kanchipuram using the rare korvai technique where two weavers simultaneously intertwine the body and border. Heavyweight 3-ply mulberry silk that drapes with regal majesty.",
    craftsmanship: {
      loom: "Traditional 3-Shuttle Kanchipuram Handloom",
      weftWarp: "Heavy Mulberry Silk (6-Gram Silk Ratio)",
      zari: "2-Gram Gold Tested Silver Thread",
      weavingTime: "32 Days Dual Artisan Weave",
      certification: "Silk Mark & Kanchipuram GI Origin"
    },
    availableColors: [
      { name: "Peacock Blue", hex: "#0D4F6A" },
      { name: "Deep Royal Purple", hex: "#3B1E54" },
      { name: "Temple Green", hex: "#184E38" }
    ],
    blouseOptions: [
      "Unstitched Crimson Brocade Blouse (Included)",
      "Traditional Aari Work Maggam Blouse (+₹3,800)",
      "Contemporary Elbow Sleeve Blouse (+₹2,600)"
    ]
  },
  {
    id: "avantika-maharaja-suiting",
    name: "Maharaja Raw Silk Suiting & Sherwani",
    tagline: "Regal menswear tailored from hand-spun raw silk with antique brass buttons",
    category: "mens",
    categoryName: "Men's Suiting",
    price: 34500,
    originalPrice: 42000,
    fabric: "Raw Silk",
    color: "Ivory Cream",
    colorHex: "#F5EFE6",
    occasion: "Bridal & Wedding",
    tag: "Groom's Suite",
    badge: "Bespoke Royal Suiting",
    rating: 4.9,
    reviewCount: 22,
    isNew: true,
    isFeatured: true,
    isBridal: true,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
    ],
    shortDesc: "Equestrian cut raw silk bandhgala sherwani and Italian-fit tailored trousers crafted for groom majesty.",
    description: "Direct homage to royal suiting tradition from our Thakur Churaha flagship boutique. Tailored with hand-structured chest canvas, pure silk lining, and hand-carved heritage brass buttons with crest detailing.",
    craftsmanship: {
      loom: "Handspun Matka & Raw Silk Loom",
      weftWarp: "100% Organic Bhagalpur Raw Silk",
      zari: "Muted Resham Threadwork & Antiqued Brass",
      weavingTime: "Tailored to Precision (15 Days)",
      certification: "Avantika Master Tailoring Guild"
    },
    availableColors: [
      { name: "Ivory Cream", hex: "#F5EFE6" },
      { name: "Royal Midnight Navy", hex: "#152238" },
      { name: "Mughal Black", hex: "#1C1C1E" }
    ],
    blouseOptions: [
      "Complete 3-Piece Suite (Coat, Kurta, Churidar)",
      "With Silk Stole & Pocket Square (+₹2,400)",
      "Custom Hand-Embroidered Stole & Safa (+₹4,500)"
    ]
  },
  {
    id: "avantika-saffron-anarkali",
    name: "Saffron Chanderi Anarkali Suit Set",
    tagline: "Graceful flared silhouette woven in sheer Chanderi silk with gota patti",
    category: "suits",
    categoryName: "Suits & Kurtis",
    price: 14200,
    originalPrice: 18000,
    fabric: "Chanderi Silk",
    color: "Saffron Orange",
    colorHex: "#E67E22",
    occasion: "Festive & Diwali",
    tag: "Festive Pick",
    badge: "Heritage Gota Patti",
    rating: 4.8,
    reviewCount: 36,
    isNew: false,
    isFeatured: false,
    isBridal: false,
    images: [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469668-93510cb2866c?auto=format&fit=crop&w=1000&q=85"
    ],
    shortDesc: "A 3-piece Chanderi silk anarkali set with gold marodi work, matching palazzo pants, and organza dupatta.",
    description: "Flowing silhouette crafted with pure Chanderi silk with signature gold tissue borders and delicate gota patti hand embroidery. Lightweight and majestic for festive soirées.",
    craftsmanship: {
      loom: "Traditional Chanderi Loom, MP",
      weftWarp: "Silk Warp x Cotton Weft",
      zari: "Authentic Jaipur Gota Patti Work",
      weavingTime: "14 Days Hand-Stitched",
      certification: "Handcrafted Certified"
    },
    availableColors: [
      { name: "Saffron Orange", hex: "#E67E22" },
      { name: "Marigold Yellow", hex: "#F1C40F" },
      { name: "Coral Rose", hex: "#E74C3C" }
    ],
    blouseOptions: [
      "Semi-Stitched Suit Set (Standard M-XL included)",
      "Custom Stitching to Measurements (+₹1,500)"
    ]
  },
  {
    id: "avantika-gulabi-meenakari",
    name: "Gulabi Meenakari Georgette Saree",
    tagline: "Vibrant Banarasi khaddi georgette with enamelled multicolour flora",
    category: "sarees",
    categoryName: "Sarees",
    price: 16900,
    originalPrice: 21500,
    fabric: "Georgette",
    color: "Gulabi Rose",
    colorHex: "#C2185B",
    occasion: "Festive & Diwali",
    tag: "Artisan Special",
    badge: "Meenakari Atelier",
    rating: 4.9,
    reviewCount: 28,
    isNew: true,
    isFeatured: false,
    isBridal: false,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=85"
    ],
    shortDesc: "A featherlight pure khaddi georgette saree featuring intricate meenakari floral jaal in pastel silk resham.",
    description: "The playful vivacity of Gulabi rose meets the timeless sophistication of Banarasi khaddi weave. Fluid drape, subtle lustre, and colourful enamelled meenakari motifs that reflect master level artisan skill.",
    craftsmanship: {
      loom: "Khaddi Handloom, Banaras",
      weftWarp: "100% Pure Viscose Khaddi Georgette",
      zari: "Sona Rupa Zari with Resham Inlay",
      weavingTime: "22 Days Weaving",
      certification: "Handloom Guild Authenticated"
    },
    availableColors: [
      { name: "Gulabi Rose", hex: "#C2185B" },
      { name: "Carnation Blush", hex: "#E91E63" },
      { name: "Lavender Mauve", hex: "#8E44AD" }
    ],
    blouseOptions: [
      "Unstitched Matching Georgette Blouse (Included)",
      "Heavy Hand-Worked Aari Blouse (+₹2,400)",
      "Boat Neck Classic Tailored (+₹1,800)"
    ]
  },
  {
    id: "avantika-gilded-marigold-katan",
    name: "Marigold Banarasi Katan Silk",
    tagline: "Auspicious turmeric golden hue woven with shikar-gah hunting scenes",
    category: "sarees",
    categoryName: "Silk Sarees",
    price: 19800,
    originalPrice: 25000,
    fabric: "Pure Katan Silk",
    color: "Champagne Gold",
    colorHex: "#DAA520",
    occasion: "Bridal & Wedding",
    tag: "Heritage Revival",
    badge: "Shikargah Brocade",
    rating: 4.8,
    reviewCount: 30,
    isNew: false,
    isFeatured: false,
    isBridal: true,
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469668-93510cb2866c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85"
    ],
    shortDesc: "Vibrant Haldi golden-yellow pure katan silk woven with traditional shikargah brocade and antique zaris.",
    description: "The ultimate Haldi and wedding heirloom. Radiating warmth and divine festivity, this saree weaves centuries-old floral and fauna shikargah tapestry across the body with a heavy katan silk fall.",
    craftsmanship: {
      loom: "Traditional Pit Loom, Banaras",
      weftWarp: "Pure Katan Silk 220 Count",
      zari: "Antique Sona Zari Tested",
      weavingTime: "26 Days Weave Cycle",
      certification: "Silk Mark India Certified"
    },
    availableColors: [
      { name: "Marigold Gold", hex: "#DAA520" },
      { name: "Mustard Ochre", hex: "#C68B18" },
      { name: "Haldi Yellow", hex: "#F4D03F" }
    ],
    blouseOptions: [
      "Unstitched Matching Blouse (Included)",
      "Traditional Gota Patti Contrast Blouse (+₹2,600)",
      "Royal High Collar Blouse (+₹3,100)"
    ]
  }
];

// Collections metadata
const COLLECTIONS_DATA = [
  {
    id: "silk-sarees",
    name: "Silk Sarees",
    subtitle: "Pure Katan & Kanjivaram Weaves",
    count: "38+ Masterpieces",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    filterKey: "category",
    filterValue: "sarees"
  },
  {
    id: "bridal-sarees",
    name: "Bridal Sarees",
    subtitle: "Sindoor Reds & Royal Zari",
    count: "24+ Heirloom Drapes",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    filterKey: "category",
    filterValue: "bridal"
  },
  {
    id: "organza-edit",
    name: "Organza & Tissue",
    subtitle: "Gossamer Light & Metallic Sheen",
    count: "19+ Hand-Painted Pieces",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    filterKey: "fabric",
    filterValue: "Organza"
  },
  {
    id: "festive-edit",
    name: "Festive Edit",
    subtitle: "Celebrations & Royal Soirees",
    count: "45+ Curated Looks",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    filterKey: "occasion",
    filterValue: "Festive & Diwali"
  }
];

// Testimonials data
const TESTIMONIALS_DATA = [
  {
    quote: "Wearing the Crimson Banarasi for my wedding pheras was a dream. The weight, the rustle of real katan silk, and the intricate gold kadhwa weave felt like pure royalty. Guests couldn't stop asking about the drape.",
    author: "Ananya Singhania",
    city: "Mumbai & London",
    event: "Bride, The Taj Mahal Palace Wedding",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Avantika Saree Centre at Thakur Churaha has been our family's trusted bridal destination for decades. To see Avantika Saree Centre And Garments elevate that same wholesale integrity into high couture online is magnificent.",
    author: "Rajeshwari Tiwari",
    city: "Kanpur",
    event: "Mother of the Groom",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The Ivory Organza Bloom is pure poetry. I ordered it for my reception, and the scalloped finish with hand-embroidered pearls was executed with flawless haute couture precision.",
    author: "Devika Roy Kapoor",
    city: "New Delhi",
    event: "Reception Gala",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  }
];

// Instagram / Social Gallery from bio
const INSTAGRAM_POSTS = [
  {
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    likes: "2.4k",
    tag: "@avantika.saree.centre",
    caption: "The sacred art of Banarasi kadhwa jaal. Captured live from our Varanasi loom workshop."
  },
  {
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    likes: "4.1k",
    tag: "@avantika.saree.centre",
    caption: "Real Bride Tanya in the Ruby Bridal Weave — sheer sindoori majesty at Thakur Churaha."
  },
  {
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80",
    likes: "1.9k",
    tag: "@avantika.saree.centre",
    caption: "Ivory whisper: Silk organza petals falling softly across pastel twilight."
  },
  {
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
    likes: "3.7k",
    tag: "@avantika.saree.centre",
    caption: "16 kalis of pure velvet zardozi — handcrafted bridal dreams in progress."
  },
  {
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    likes: "2.8k",
    tag: "@avantika.saree.centre",
    caption: "Emerald heritage silk draped in royal pleats. Timeless silhouettes for eternal memories."
  },
  {
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=80",
    likes: "5.2k",
    tag: "@avantika.saree.centre",
    caption: "Champagne zari shimmering under evening chandeliers. The Festive Edit is here."
  }
];
