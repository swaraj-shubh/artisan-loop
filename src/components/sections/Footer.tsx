"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative border-t border-accent/10 bg-gradient-to-t from-background via-background to-background/95 px-6 py-16 md:px-10 md:py-20 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-accent/40 to-transparent" />
      
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent/40 h-2 w-2"></span>
                <span className="relative inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(232,201,160,0.9)]" />
              </div>
              <span className="font-serif text-lg font-light tracking-[0.3em] text-foreground">
                ARTISAN<span className="text-accent">LOOP</span>
              </span>
            </div>
            <p className="max-w-[32ch] font-sans text-sm leading-relaxed text-zinc-500">
              Handcrafted with intention. Worn with purpose. 
              Each piece tells a story of patience, skill, and love.
            </p>
            
            {/* Social Links with SVG Icons */}
            <div className="flex gap-4 mt-2">
              {[
                { 
                  href: "#", 
                  label: "Instagram",
                  svg: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  )
                },
                { 
                  href: "#", 
                  label: "Pinterest",
                  svg: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 20.2C8 18.6 8.5 16 9 13.5M17 9c0 2.8-2.2 5-5 5-2.8 0-5-2.2-5-5 0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5z" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  )
                },
                { 
                  href: "#", 
                  label: "YouTube",
                  svg: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  )
                },
                { 
                  href: "#", 
                  label: "Email",
                  svg: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  )
                },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  className="text-zinc-600 transition-all duration-300 hover:text-accent hover:scale-110"
                  aria-label={label}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-4">
            {[
              {
                title: "Explore",
                links: [
                  ["Collection", "#collection"],
                  ["Journal", "#journal"],
                  ["Studio Stories", "#stories"],
                  ["Lookbook", "#lookbook"],
                ]
              },
              {
                title: "Values",
                links: [
                  ["Sustainability", "#sustainability"],
                  ["Ethics", "#ethics"],
                  ["Artisans", "#artisans"],
                  ["Zero Waste", "#zerowaste"],
                ]
              },
              {
                title: "Support",
                links: [
                  ["FAQ", "#faq"],
                  ["Repairs", "#repairs"],
                  ["Size Guide", "#size"],
                  ["Care Instructions", "#care"],
                ]
              },
              {
                title: "Connect",
                links: [
                  ["Studio Visit", "#visit"],
                  ["Wholesale", "#wholesale"],
                  ["Press", "#press"],
                  ["Newsletter", "#newsletter"],
                ]
              },
            ].map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-accent/60">
                  {column.title}
                </span>
                <div className="flex flex-col gap-2.5">
                  {column.links.map(([name, href]) => (
                    <a
                      key={name}
                      href={href}
                      className="group flex items-center gap-1 font-sans text-[13px] text-zinc-500 transition-all duration-300 hover:text-accent"
                    >
                      {name}
                      <ArrowUpRight
                        size={10}
                        weight="bold"
                        className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-white/5 pt-8 font-mono text-[9px] uppercase tracking-[0.28em] text-zinc-600 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 gap-y-2">
            <span>© 2025 ARTISAN LOOP</span>
            <span className="text-zinc-700">•</span>
            <span>All pieces handmade with 
              <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" className="inline text-accent/60 mx-1">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              in small batches
            </span>
            <span className="text-zinc-700">•</span>
            <a href="#privacy" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-accent transition-colors">Terms</a>
          </div>
          <div className="flex items-center gap-3">
            <span>Carbon offset certified</span>
            <div className="h-px w-6 bg-accent/30" />
            <span>B Corp Pending</span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center pt-4">
          <p className="font-serif text-[10px] italic tracking-wide text-zinc-600">
            Every thread, intentional. Every knot, a decision. 
            This is not mass production — this is craftsmanship preserved.
          </p>
        </div>
      </div>
    </footer>
  );
}