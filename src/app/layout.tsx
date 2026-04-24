import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { OrbitalGlow } from "@/components/ui/OrbitalGlow";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artisan Loop — Handmade with Soul",
  description:
    "Artisanal crochet and handmade goods. Each piece carries the warmth of the hands that made it.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} scroll-smooth`}
    >
      <body className="relative min-h-screen bg-background font-sans text-foreground antialiased">
        <GrainTexture />
        <OrbitalGlow />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}