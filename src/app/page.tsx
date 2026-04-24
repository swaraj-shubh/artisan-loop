import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { Seq } from "@/components/sections/Seq";
import { Products } from "@/components/sections/Products";  // ← Add this
import { SystemsNominal } from "@/components/sections/SystemsNominal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CinematicReveal />
        <Seq />
        <Products /> 
        <SystemsNominal />
      </main>
      <Footer />
    </>
  );
}