/**
 * @file whatis.tsx
 * @description Overview section explaining what ASHA is, its research goals, and an animated 3-step technical pipeline.
 */

import React from "react";
import { ArrowDownToLine, Mic, Cpu, Sparkles, ArrowRight, ArrowDown } from "lucide-react";

export default function WhatIs() {
  return (
    <section id="research" className="w-full max-w-6xl mx-auto px-6 py-24 text-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Heading Column */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-semibold tracking-wider uppercase text-black/60">
            About The Project
          </span>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-black leading-[1.15]">
            What is <span className="font-semibold">ASHA?</span>
          </h2>
          <p className="text-sm text-black/60 font-normal">
            Ongoing research focused on bridging native African dialects to physical computing.
          </p>

          <div className="pt-4">
            <a
              href="/ASHA.pdf"
              download="ASHA_Research_Paper.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-black hover:bg-black/80 transition-all duration-200"
            >
              <ArrowDownToLine className="w-4 h-4" />
              Download Research Paper
            </a>
          </div>
        </div>

        {/* Right Information Column */}
        <div className="lg:col-span-7 space-y-8">
          <p className="text-lg sm:text-xl font-light leading-relaxed text-black/90">
            ASHA is an agentic framework designed to democratize smart hardware control for speakers of low-resource languages, starting with Twi in Ghana.
          </p>

          <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal">
            Commercial smart assistants almost exclusively serve dominant global languages. ASHA solves this by coupling fine-tuned indigenous speech recognition with an agentic LLM layer that absorbs high transcription noise, converting everyday mother-tongue speech into direct, bus-level microcontroller actions.
          </p>

          {/* 3 Core Pillars with Flow Arrows */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-black/10">
            {/* Step 1: Speech */}
            <div className="flex-1 w-full space-y-1.5 p-4 rounded-2xl border border-black/10 bg-white/40">
              <Mic className="w-4 h-4 text-black mb-2 animate-bounce" />
              <h3 className="text-sm font-semibold text-black">Vernacular Speech</h3>
              <p className="text-xs text-black/60 leading-normal">
                Transcribes native Twi dialect audio commands directly.
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="flex justify-center text-black/40 py-1 sm:py-0">
              <ArrowRight className="hidden sm:block w-4 h-4" />
              <ArrowDown className="sm:hidden w-4 h-4" />
            </div>

            {/* Step 2: Reasoning */}
            <div className="flex-1 w-full space-y-1.5 p-4 rounded-2xl border border-black/10 bg-white/40">
              <Sparkles className="w-4 h-4 text-black mb-2 animate-bounce" />
              <h3 className="text-sm font-semibold text-black">Agentic Reasoning</h3>
              <p className="text-xs text-black/60 leading-normal">
                Absorbs ASR errors and validates real-time device states.
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="flex justify-center text-black/40 py-1 sm:py-0">
              <ArrowRight className="hidden sm:block w-4 h-4" />
              <ArrowDown className="sm:hidden w-4 h-4" />
            </div>

            {/* Step 3: Hardware */}
            <div className="flex-1 w-full space-y-1.5 p-4 rounded-2xl border border-black/10 bg-white/40">
              <Cpu className="w-4 h-4 text-black mb-2 animate-bounce" />
              <h3 className="text-sm font-semibold text-black">Edge Hardware</h3>
              <p className="text-xs text-black/60 leading-normal">
                Drives relays, sensors, and servos on ESP32 microcontrollers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
