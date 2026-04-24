"use client";

import { useState } from "react";
import Image from "next/image";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { products, categories, type Product } from "@/lib/data";
import { ShoppingBag, Heart, Eye } from "@phosphor-icons/react";

export function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const toggleLike = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newLiked = new Set(likedProducts);
    if (newLiked.has(productId)) {
      newLiked.delete(productId);
    } else {
      newLiked.add(productId);
    }
    setLikedProducts(newLiked);
  };

  const getTagColor = (tag?: string) => {
    switch(tag) {
      case "bestseller": return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "new": return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "limited": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "sale": return "bg-rose-500/20 text-rose-400 border-rose-500/30";
      default: return "bg-accent/10 text-accent border-accent/20";
    }
  };

  return (
    <section
      id="collection"
      className="relative bg-gradient-to-b from-background via-background/95 to-background px-6 py-28 md:px-10 md:py-36 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-radial from-accent/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1400px] relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <AnimatedItem>
            <EyebrowBadge>THE COLLECTION // FALL 2025</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1.1] tracking-tight text-foreground mt-6 mb-4">
              Pieces that
              <br />
              <span className="text-accent">last lifetimes.</span>
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mb-6" />
            <p className="max-w-[48ch] mx-auto font-sans text-base leading-relaxed text-zinc-400">
              Small batches. Big heart. Each piece numbered and signed by the artisan who made it.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <AnimatedItem key={cat.id}>
              <button
                onClick={() => setActiveCategory(cat.id)}
                className={`group px-5 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-[0.22em] transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-accent text-background shadow-lg shadow-accent/25"
                    : "border border-white/10 bg-white/5 text-zinc-400 hover:border-accent/30 hover:text-accent hover:bg-accent/5"
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <AnimatedItem key={product.id}>
              <div
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Stock Badge */}
                {!product.inStock && (
                  <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                      Sold Out
                    </span>
                  </div>
                )}

                {/* Tag Badge */}
                {product.tag && product.inStock && (
                  <div className={`absolute top-4 left-4 z-20 ${getTagColor(product.tag)} backdrop-blur-md px-3 py-1.5 rounded-full border`}>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-medium">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900/50">
                  <Image
                    src={product.imagePath}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
                  
                  {/* Action Buttons - Appear on Hover */}
                  <div className={`absolute bottom-4 left-4 right-4 flex gap-3 transition-all duration-400 ${
                    hoveredProduct === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}>
                    <button 
                      className="flex-1 bg-background/90 backdrop-blur-md text-foreground py-2.5 rounded-full font-mono text-[10px] uppercase tracking-[0.22em] transition-all duration-300 hover:bg-accent hover:text-background flex items-center justify-center gap-2"
                      onClick={() => console.log(`Add to cart: ${product.id}`)}
                    >
                      <ShoppingBag size={12} weight="bold" />
                      Add to Cart
                    </button>
                    <button 
                      className="bg-background/90 backdrop-blur-md p-2.5 rounded-full text-foreground transition-all duration-300 hover:bg-accent hover:text-background"
                      onClick={() => console.log(`Quick view: ${product.id}`)}
                    >
                      <Eye size={16} weight="bold" />
                    </button>
                    <button 
                      className={`bg-background/90 backdrop-blur-md p-2.5 rounded-full transition-all duration-300 ${
                        likedProducts.has(product.id) 
                          ? "text-rose-500 bg-rose-500/10" 
                          : "text-foreground hover:text-rose-500"
                      }`}
                      onClick={(e) => toggleLike(product.id, e)}
                    >
                      <Heart size={16} weight={likedProducts.has(product.id) ? "fill" : "bold"} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-serif text-xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-1">
                        {product.category}
                      </p>
                    </div>
                    <p className="font-serif text-xl font-light text-accent">
                      ${product.price}
                    </p>
                  </div>
                  
                  <p className="font-sans text-sm text-zinc-400 leading-relaxed mt-3">
                    {product.description}
                  </p>

                  {/* Materials Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {product.materials.slice(0, 2).map((material) => (
                      <span key={material} className="text-[9px] font-mono uppercase tracking-[0.15em] text-zinc-500 bg-white/5 px-2 py-1 rounded">
                        {material}
                      </span>
                    ))}
                    {product.materials.length > 2 && (
                      <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-zinc-500 bg-white/5 px-2 py-1 rounded">
                        +{product.materials.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button (Mobile) */}
                  <button 
                    className="w-full mt-5 bg-accent/10 border border-accent/20 text-accent py-2.5 rounded-full font-mono text-[10px] uppercase tracking-[0.22em] transition-all duration-300 hover:bg-accent hover:text-background flex items-center justify-center gap-2 md:hidden"
                    onClick={() => console.log(`Add to cart: ${product.id}`)}
                  >
                    <ShoppingBag size={12} weight="bold" />
                    Add to Cart — ${product.price}
                  </button>
                </div>

                {/* Artisan Signature Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-zinc-500">No products found in this category.</p>
            <button 
              onClick={() => setActiveCategory("all")}
              className="mt-4 text-accent hover:text-accent/80 transition-colors"
            >
              View all products →
            </button>
          </div>
        )}

        {/* View All Link */}
        <AnimatedItem>
          <div className="text-center mt-16">
            <a
              href="#all-products"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-accent/20 bg-accent/5 text-accent font-mono text-[11px] uppercase tracking-[0.22em] transition-all duration-300 hover:bg-accent hover:text-background hover:border-accent group"
            >
              Explore Full Collection
              <ArrowUpRight 
                size={14} 
                weight="bold" 
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
}

// Import ArrowUpRight at the top
import { ArrowUpRight } from "@phosphor-icons/react";