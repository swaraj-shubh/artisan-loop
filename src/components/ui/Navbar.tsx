"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, ShoppingBag, List, X } from "@phosphor-icons/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-accent/10 bg-background/80 backdrop-blur-2xl backdrop-saturate-150 shadow-2xl"
            : "border-b border-transparent bg-gradient-to-b from-black/40 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center gap-3 overflow-hidden"
          >
            <span
              aria-hidden
              className="relative inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(232,201,160,0.9)] transition-all duration-300 group-hover:scale-125"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-accent/60"></span>
            </span>
            <span className="font-serif text-xl font-light tracking-[0.3em] text-foreground transition-all duration-300 group-hover:tracking-[0.35em] md:text-2xl">
              ARTISAN<span className="text-accent">LOOP</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {["Collection", "Journal", "Studio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative font-mono text-[11px] font-light uppercase tracking-[0.28em] text-zinc-400 transition-all duration-300 hover:text-accent"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="group hidden items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/10 md:flex">
              <ShoppingBag size={14} weight="bold" />
              Cart (0)
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center rounded-full border border-accent/20 p-2 text-accent transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 md:hidden"
            >
              {mobileMenuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        style={{ top: "70px" }}
      >
        <nav className="flex flex-col items-center gap-8 p-8 pt-12">
          {["Collection", "Journal", "Studio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl font-light tracking-[0.2em] text-foreground transition-all duration-300 hover:text-accent hover:tracking-[0.3em]"
            >
              {item}
            </a>
          ))}
          <button className="mt-8 flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-6 py-3 font-mono text-sm uppercase tracking-[0.22em] text-accent">
            <ShoppingBag size={16} weight="bold" />
            Cart (0)
          </button>
        </nav>
      </div>
    </>
  );
}