/**
 * @file howitworks.tsx
 * @description Interactive cinema scroll experience explaining how ASHA works across 4 steps.
 * Features realistic WhatsApp multi-turn conversation (Twi voice + English automation), 
 * actual ASHA C++ firmware API, 5-bus architecture, open API callout, and pure white sharp fonts.
 */

"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Play, Mic, CheckCheck, CheckCircle2, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    step: "01",
    tag: "Firmware Declaration",
    title: "Declare your devices with a single clean call.",
    description:
      "No custom networking or complex cloud synchronization code needed. Simply declare your device category, name, and hardware bus directly in firmware.",
    visual: (
      <div className="w-full max-w-lg rounded-2xl bg-[#000000] border border-white/10 p-6 shadow-2xl space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-white/60">main.ino</span>
        </div>
        <div className="space-y-2.5 text-white/90">
          <p className="text-amber-300">#include &lt;ASHA.h&gt;</p>
          <p className="text-white/40 pt-1">// Register hardware in one declarative line</p>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <p className="text-white/80">asha.asha_devices.addDevice(</p>
            <p className="pl-4 text-emerald-400">
              asha.genericDev(DeviceCategory::Actuator, &quot;My Light&quot;, BusType::PWM),
            </p>
            <p className="pl-4 text-amber-200">18</p>
            <p className="text-white/80">);</p>
          </div>
          <p className="text-white/40 pt-1">// Initialize cloud agent bridge</p>
          <p className="text-emerald-400 font-semibold">
            void setup() &#123; asha.begin(); &#125;
          </p>
        </div>
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
          <span>Target: ESP32-WROOM-32</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Hardware Ready
          </span>
        </div>
      </div>
    ),
  },
  {
    step: "02",
    tag: "Everyday Messaging & Open APIs",
    title: "Converse on WhatsApp,Telegram or build with our open API.",
    description:
      "No proprietary hubs or closed ecosystems. Control hardware via WhatsApp and Telegram out of the box, or build your own custom web and mobile apps using our open REST API and FastMCP server.",
    visual: (
      <div className="w-full max-w-lg rounded-2xl bg-[#000000] border border-white/10 p-5 shadow-2xl space-y-3 font-sans text-xs">
        {/* WhatsApp Top Chat Bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#25d366] flex items-center justify-center font-bold text-white text-xs">
              <Mic className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white">ASHA Assistant</p>
              <p className="text-[10px] text-[#25d366]">online</p>
            </div>
          </div>
          <span className="text-[10px] text-white/40 font-mono">WhatsApp Gateway</span>
        </div>

        {/* WhatsApp Chat Messages */}
        <div className="space-y-2.5 pt-1">
          {/* Turn 1: User Voice Note in Twi */}
          <div className="flex justify-end">
            <div className="bg-[#017a0b] text-white p-2.5 rounded-2xl rounded-tr-sm max-w-sm w-full shadow-md space-y-1.5">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 hover:bg-white/30"
                  aria-label="Play voice note"
                >
                  <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                </button>

                <div className="flex-1 flex items-center gap-[2.5px] h-5 px-1">
                  {[40, 65, 30, 85, 100, 75, 45, 90, 60, 35, 70, 95, 50, 80, 40, 60, 30].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}%` }}
                      className={`w-[2px] rounded-full ${i < 6 ? "bg-white" : "bg-white/40"}`}
                    />
                  ))}
                </div>

                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <Mic className="w-3 h-3 text-[#017a0b]" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[9px] text-white/70 px-1 font-mono">
                <span>0:04</span>
                <span className="flex items-center gap-1">
                  14:02
                  <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                </span>
              </div>
            </div>
          </div>

          {/* Turn 1 Reply: Bot responds in Twi */}
          <div className="flex justify-start">
            <div className="bg-[#202c33] text-white px-3.5 py-2 rounded-2xl rounded-tl-sm max-w-xs border border-white/5 shadow-sm space-y-0.5">
              <p className="text-white text-xs font-normal">
                Masɔ wo dan mu kanea no.
              </p>
              <span className="block text-[8px] text-white/40 text-right font-mono">14:02</span>
            </div>
          </div>

          {/* Turn 2: User follow-up with conditional scheduling */}
          <div className="flex justify-end">
            <div className="bg-[#017a0b] text-white px-3.5 py-2 rounded-2xl rounded-tr-sm max-w-xs shadow-md space-y-0.5">
              <p className="text-white text-xs font-normal">
                Also turn it off at 6am tomorrow morning, except when someone is at the door.
              </p>
              <span className="block text-[8px] text-white/70 text-right font-mono flex items-center justify-end gap-1">
                14:03
                <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
              </span>
            </div>
          </div>

          {/* Turn 2 Reply: Bot sets up edge automation */}
          <div className="flex justify-start">
            <div className="bg-[#202c33] text-white px-3.5 py-2 rounded-2xl rounded-tl-sm max-w-xs border border-white/5 shadow-sm space-y-0.5">
              <p className="text-white text-xs font-normal">
                I have set up the automation and will let you know.
              </p>
              <span className="block text-[8px] text-white/40 text-right font-mono">14:03</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    step: "03",
    tag: "Edge Autonomy",
    title: "Logic compiles to edge. Massive token savings.",
    description:
      "Rather than streaming every sensor tick to costly cloud LLMs, ASHA compiles monitoring rules directly into persistent on-device tasks. Devices run locally and only wake the agent when critical events occur.",
    visual: (
      <div className="w-full max-w-lg rounded-2xl bg-[#000000] border border-white/10 p-6 shadow-2xl space-y-5 text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-xs font-semibold text-white">Edge Efficiency Telemetry</span>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Offline Resilient
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 opacity-50">
            <span className="text-[10px] uppercase text-white/60">Traditional Cloud</span>
            <p className="text-xl font-bold line-through text-red-400">43,200</p>
            <p className="text-[11px] text-white/60">Continuous tokens per day</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-1">
            <span className="text-[10px] uppercase text-emerald-400">ASHA Edge Logic</span>
            <p className="text-xl font-bold text-emerald-300">&lt; 400 Tokens</p>
            <p className="text-[11px] text-emerald-200/70">One-time deploy • 0 continuous tokens</p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-white text-[11px]">
          <span className="flex items-center gap-1.5 font-normal">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Analog Sound Sampling
          </span>
          <span className="font-mono text-amber-200">200ms local loop</span>
        </div>
      </div>
    ),
  },
  {
    step: "04",
    tag: "Universal Hardware Bus",
    title: "Direct actuation across 5 physical hardware buses.",
    description:
      "Commands execute at the bare bus level. ASHA unifies heterogeneous hardware across 5 distinct protocols—from simple relays to modulated servos and infrared remotes.",
    visual: (
      <div className="w-full max-w-lg rounded-2xl bg-[#000000] border border-white/10 p-6 shadow-2xl space-y-3.5 text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-xs font-semibold text-white">Supported Bus Architecture</span>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            5 Protocols Supported
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-white">
          {/* Bus 1: Digital */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] uppercase text-amber-300 font-bold font-mono">Digital</span>
            <p className="text-xs font-normal text-white/90">Relays &amp; Lights</p>
          </div>

          {/* Bus 2: PWM */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] uppercase text-amber-300 font-bold font-mono">PWM</span>
            <p className="text-xs font-normal text-white/90">Fans &amp; Servos</p>
          </div>

          {/* Bus 3: Analog */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] uppercase text-amber-300 font-bold font-mono">Analog</span>
            <p className="text-xs font-normal text-white/90">Sensors &amp; Soil</p>
          </div>

          {/* Bus 4: I2C */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] uppercase text-amber-300 font-bold font-mono">I2C</span>
            <p className="text-xs font-normal text-white/90">OLEDs &amp; Modules</p>
          </div>

          {/* Bus 5: IR */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1 sm:col-span-2">
            <span className="text-[10px] uppercase text-amber-300 font-bold font-mono">IR (Infrared)</span>
            <p className="text-xs font-normal text-white/90">Smart TVs &amp; Air Conditioners</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setActiveStep(0);
    } else if (latest >= 0.25 && latest < 0.5) {
      setActiveStep(1);
    } else if (latest >= 0.5 && latest < 0.75) {
      setActiveStep(2);
    } else {
      setActiveStep(3);
    }
  });

  const current = STEPS[activeStep];

  return (
    <section id="architecture" ref={containerRef} className="relative h-[400vh] bg-[#290701] text-white">
      {/* Sticky Cinema Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Top Header & Step Tracker */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between border-b border-white/15 pb-5 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#ffd0c3] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-white">
              How ASHA Works
            </span>
          </div>

          {/* Progress Indicators */}
          <div className="flex items-center gap-2">
            {STEPS.map((s, idx) => (
              <div
                key={s.step}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  activeStep === idx ? "w-8 bg-white" : "w-2 bg-white/20"
                }`}
              />
            ))}
            <span className="text-xs font-mono text-white/70 ml-3">
              0{activeStep + 1} / 04
            </span>
          </div>
        </div>

        {/* Main Cinema Content Stage */}
        <div className="w-full max-w-6xl mx-auto py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Left Column: Narrative Copy */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-200">
                  <span>Step {current.step}</span>
                  <span>•</span>
                  <span>{current.tag}</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-light tracking-tight leading-[1.12] text-white">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed max-w-lg">
                  {current.description}
                </p>
              </div>

              {/* Right Column: Visual Card */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                {current.visual}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
