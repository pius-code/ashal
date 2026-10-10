"use client";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Starts full-screen (100% / 100vh / sharp corners) -> shrinks into a floating card!
  const width = useTransform(scrollYProgress, [0, 0.08], ["100%", "90%"]);
  const height = useTransform(scrollYProgress, [0, 0.08], ["100vh", "82vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.08], ["0rem", "2.5rem"]);

  return (
    <div className="w-full flex justify-center">
      <motion.section
        ref={containerRef}
        style={{ width, height, borderRadius }}
        className="relative flex flex-col items-center justify-center text-center px-4 overflow-hidden isolate"
      >
        <Image
          src="/brownbg.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover -z-10"
        />

        {/* Tint */}
        <div className="absolute inset-0 bg-black/30 -z-10" />

        {/* Centered Content */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.12]">
            Build hardware that <br />
            <span className="font-normal text-amber-200">speaks your</span> language.
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-50 font-light leading-relaxed">
            The agentic framework bridging low-resource African languages directly to physical IoT microcontrollers.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
