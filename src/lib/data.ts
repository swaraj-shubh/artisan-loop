export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription?: string;
  imagePath: string;
  category: 'accessories' | 'home' | 'wearables' | 'bags';
  tag?: 'bestseller' | 'new' | 'limited' | 'sale';
  materials: string[];
  dimensions?: string;
  careInstructions?: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "heirloom-merino-throw",
    name: "Heirloom Merino Throw",
    price: 248,
    description: "Woven from single-origin merino wool in a heritage chevron pattern.",
    longDescription: "Each throw takes twelve hours to complete on a traditional floor loom. The merino is ethically sourced from small farms in Patagonia, and the natural lanolin makes it stain-resistant and self-cleaning.",
    imagePath: "/product2.png",
    category: "home",
    tag: "bestseller",
    materials: ["100% Merino Wool", "Natural Dyes"],
    dimensions: "50\" × 70\"",
    careInstructions: "Spot clean or dry clean only. Air to refresh.",
    inStock: true,
  },
  {
    id: "mist-linen-wrap",
    name: "Mist Linen Wrap",
    price: 128,
    description: "Airy open-stitch lace in undyed natural linen. Breathes like morning fog.",
    longDescription: "Perfect for transitional weather, this wrap is light enough for summer evenings but substantial enough for spring layers. The linen gets softer with every wash.",
    imagePath: "/product.png",
    category: "wearables",
    tag: "new",
    materials: ["100% European Linen", "Undyed"],
    dimensions: "28\" × 78\"",
    careInstructions: "Machine wash cold, air dry.",
    inStock: true,
  },
  {
    id: "nesting-basket-set",
    name: "Nesting Basket Set",
    price: 184,
    description: "Three graduated baskets in jute-cotton blend with leather labels.",
    longDescription: "Hand-coiled using traditional basketry techniques passed down through generations in rural Bangladesh. Each basket takes three days to complete.",
    imagePath: "/product2.png",
    category: "home",
    tag: "limited",
    materials: ["Jute", "Organic Cotton", "Vegetable-tanned Leather"],
    dimensions: "S: 8\"×6\", M: 10\"×8\", L: 12\"×10\"",
    careInstructions: "Brush clean, avoid moisture.",
    inStock: true,
  },
  {
    id: "botanica-cushion",
    name: "Botanica Cushion",
    price: 98,
    description: "Textured tufted relief of botanicals in raw ecru cotton.",
    longDescription: "Each cushion is hand-tufted by artisans in Oaxaca, Mexico. The pattern depicts native wildflowers and is completely reversible.",
    imagePath: "/product.png",
    category: "home",
    materials: ["Organic Cotton", "Kapok Fill", "Natural Dyes"],
    dimensions: "18\" × 18\"",
    careInstructions: "Spot clean only.",
    inStock: true,
  },
  {
    id: "cloud-merino-beanie",
    name: "Cloud Merino Beanie",
    price: 68,
    description: "Chunky ribbed merino knit with a generous fold-over brim.",
    longDescription: "One size fits most. The merino is mulesing-free and traceable from farm to finished piece. Your winter ritual, handmade.",
    imagePath: "/product2.png",
    category: "wearables",
    tag: "bestseller",
    materials: ["100% Traceable Merino Wool"],
    dimensions: "One Size (fits 54-62cm)",
    careInstructions: "Hand wash cold, lay flat to dry.",
    inStock: true,
  },
  {
    id: "moon-market-bag",
    name: "Moon Market Bag",
    price: 88,
    description: "Open-weave raffia tote with leather drawstring handles.",
    longDescription: "Handwoven in Madagascar from sustainably harvested raffia. Strong enough for your farmer's market haul, beautiful enough for a beach day.",
    imagePath: "/product.png",
    category: "bags",
    tag: "new",
    materials: ["Raffia", "Vegetable-tanned Leather"],
    dimensions: "16\" × 14\" × 6\"",
    careInstructions: "Spot clean, store flat.",
    inStock: true,
  },
  {
    id: "ember-dyed-scarf",
    name: "Ember Dyed Scarf",
    price: 156,
    description: "Hand-dyed with madder root and cochineal for deep terracotta tones.",
    longDescription: "Each scarf is unique — no two are exactly alike. The natural dyeing process creates subtle variations that tell the story of the dye bath.",
    imagePath: "/product2.png",
    category: "wearables",
    tag: "limited",
    materials: ["Silk & Merino Blend", "Natural Dyes"],
    dimensions: "24\" × 72\"",
    careInstructions: "Hand wash cold with pH-neutral soap.",
    inStock: false,
  },
  {
    id: "weavers-journal",
    name: "Weaver's Journal",
    price: 42,
    description: "Hand-bound sketchbook with cotton paper and linen cover.",
    longDescription: "Made for recording patterns, sketching designs, and chronicling your own weaving journey. The cover is handwoven on a rigid heddle loom.",
    imagePath: "/product.png",
    category: "accessories",
    materials: ["Linen", "Cotton Paper", "Recycled Board"],
    dimensions: "7\" × 9\"",
    careInstructions: "Keep dry.",
    inStock: true,
  },
  {
    id: "driftwood-mobile",
    name: "Driftwood Mobile",
    price: 124,
    description: "Suspended sculpture with foraged driftwood and hand-spun thread.",
    longDescription: "Each piece is one-of-a-kind, assembled from driftwood collected on the Oregon coast. The threads are naturally dyed using foraged mushrooms and plants.",
    imagePath: "/product2.png",
    category: "home",
    tag: "limited",
    materials: ["Driftwood", "Hand-spun Cotton", "Natural Dyes"],
    dimensions: "24\" hanging length",
    careInstructions: "Dust gently.",
    inStock: true,
  },
];

export const categories = [
  { id: "all", name: "All", icon: "✨" },
  { id: "wearables", name: "Wearables", icon: "🧣" },
  { id: "home", name: "Home", icon: "🏠" },
  { id: "bags", name: "Bags", icon: "👜" },
  { id: "accessories", name: "Accessories", icon: "📔" },
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (category: string) => 
  category === "all" ? products : products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.tag === "bestseller");
export const getLimitedEdition = () => products.filter(p => p.tag === "limited");