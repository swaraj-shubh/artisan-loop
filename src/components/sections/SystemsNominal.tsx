"use client";

import { ArrowUpRight, Leaf, Heart, Clock, ShieldCheck } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const craftMetrics = [
  { 
    label: "Handcrafted Hours", 
    value: "8-12 hrs", 
    note: "Per piece, from raw fiber to finished good",
    icon: Clock
  },
  { 
    label: "Natural Fibers", 
    value: "100%", 
    note: "Merino wool, organic cotton, linen, jute",
    icon: Leaf
  },
  { 
    label: "Carbon Footprint", 
    value: "-67%", 
    note: "Compared to mass-produced alternatives",
    icon: Leaf
  },
  { 
    label: "Heirloom Guarantee", 
    value: "Lifetime", 
    note: "Repaired, restored, never replaced",
    icon: Heart
  },
  { 
    label: "Artisan Partners", 
    value: "43", 
    note: "Fair wage cooperatives across 12 countries",
    icon: ShieldCheck
  },
  { 
    label: "Zero Waste Rate", 
    value: "98.7%", 
    note: "Every fiber repurposed or composted",
    icon: Leaf
  },
];

export function SystemsNominal() {
  return (
    <section
      id="systems"
      className="relative border-t border-accent/5 bg-gradient-to-b from-background via-background/95 to-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32 overflow-hidden"
    >
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-accent/3 via-transparent to-transparent blur-3xl pointer-events-none" />
      
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:grid md:grid-cols-[5fr_6fr] md:gap-20 relative z-10">
        <AnimatedSection className="flex flex-col gap-8">
          <AnimatedItem>
            <EyebrowBadge>ARTISAN LOOP // CRAFT METRICS // 2025</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[16ch] font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl">
              &ldquo;Made with{" "}
              <span className="text-accent font-medium">intention.</span>
              <br />
              Worn with{" "}
              <span className="text-accent font-medium">purpose.</span>&rdquo;
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              Every piece that leaves our studio carries a story longer than its making. 
              From ethically sourced fibers to master artisans paid fairly — we measure 
              success not in units moved, but in lives touched and heirlooms created.
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-accent/20 bg-accent/5 px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/10 active:translate-y-[1px]"
            >
              Join the Circle
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col gap-3">
          {craftMetrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <AnimatedItem key={metric.label}>
                <div className="group relative flex items-center justify-between gap-6 py-4 border-b border-white/5 transition-all duration-300 hover:border-accent/20 hover:pl-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="mt-1">
                      <IconComponent 
                        size={20} 
                        weight="light" 
                        className="text-accent/40 transition-all duration-300 group-hover:text-accent group-hover:scale-110" 
                      />
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                        {metric.label}
                      </span>
                      <span className="font-sans text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                        {metric.note}
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="text-2xl font-light tracking-tight text-foreground md:text-3xl font-serif">
                      {metric.value}
                    </span>
                    <div className="absolute -bottom-1 left-0 w-0 h-px bg-accent/40 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}