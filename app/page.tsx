/**
 * @file page.tsx
 * @description Main landing page for ASHA assembling Navbar, Hero, WhatIs, Projects, HowItWorks, and Proof.
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIs from "@/components/whatis";
import Projects from "@/components/projects";
import HowItWorks from "@/components/howitworks";
import Proof from "@/components/proof";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1ecce] text-black flex flex-col">
      <Navbar />
      <Hero />
      <WhatIs />
      <Projects />
      <HowItWorks />
      <Proof />
    </main>
  );
}
