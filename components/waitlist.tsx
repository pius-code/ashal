"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Ticket, Sparkles, ChevronDown, Heart } from "lucide-react";

export default function Waitlist() {
  const [tab, setTab] = useState<"waitlist" | "contribute">("waitlist");
  const [email, setEmail] = useState("");
  const [contributionType, setContributionType] = useState("languages");
  const [customNote, setCustomNote] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setToastMessage("Please enter a valid email address.");
      setTimeout(() => setToastMessage(null), 3500);
      return;
    }

    if (tab === "waitlist") {
      setToastMessage("🎉 You're on the list! We'll send you an email once early access opens.");
    } else {
      setToastMessage("🙌 Thanks for joining the effort! We'll email you with contributor details.");
    }

    // Reset fields
    setEmail("");
    setCustomNote("");
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <section id="waitlist" className="w-full py-28 px-6 md:px-12 bg-[#f1ecce] text-[#290701] relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 z-50 px-6 py-4 rounded-2xl bg-[#290701] text-white shadow-2xl border border-[#e0a96d]/40 flex items-center gap-3 text-sm max-w-md mx-auto"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-2xl w-full mx-auto flex flex-col items-center text-center">

        {/* Mode Toggle Switch */}
        <div className="inline-flex p-1.5 rounded-full bg-[#290701]/10 border border-[#290701]/15 mb-10">
          <button
            onClick={() => setTab("waitlist")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              tab === "waitlist"
                ? "bg-[#290701] text-white shadow-sm"
                : "text-[#290701]/70 hover:text-[#290701]"
            }`}
          >
            Early Access Waitlist
          </button>
          <button
            onClick={() => setTab("contribute")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              tab === "contribute"
                ? "bg-[#290701] text-white shadow-sm"
                : "text-[#290701]/70 hover:text-[#290701]"
            }`}
          >
            Contribute to Project
          </button>
        </div>

        {/* Big Centered Headline */}
        <motion.h2
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#290701] mb-8"
        >
          {tab === "waitlist" ? "Early Access Opening Soon!" : "Contribute to ASHA"}
        </motion.h2>

        {/* Center Tilted Golden Ticket / Badge Graphic */}
        <div className="relative my-4 flex items-center justify-center">
          <motion.div
            initial={{ rotate: -8 }}
            animate={{ rotate: [-8, -5, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-28 bg-[#e0a96d] border-2 border-[#290701] rounded-2xl p-3 shadow-xl relative flex flex-col justify-between select-none cursor-pointer hover:scale-105 transition-transform"
          >
            {/* Cutout notches on ticket sides */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#f1ecce] rounded-full border-r-2 border-[#290701]" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#f1ecce] rounded-full border-l-2 border-[#290701]" />

            {/* Ticket Header */}
            <div className="flex items-center justify-between border-b border-[#290701]/30 pb-1 px-3">
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#290701]">ASHA // 2026</span>
              <Sparkles className="w-3.5 h-3.5 text-[#290701]" />
            </div>

            {/* Ticket Center */}
            <div className="text-center">
              <span className="text-xl font-extrabold tracking-widest text-[#290701] uppercase block">
                {tab === "waitlist" ? "ADMIT DEV" : "BUILDER"}
              </span>
              <span className="text-[9px] font-mono tracking-wider uppercase text-[#290701]/80">
                {tab === "waitlist" ? "No. 00482 // ACCESS PASS" : "OPEN HARDWARE // CORE"}
              </span>
            </div>

            {/* Ticket Footer */}
            <div className="border-t border-dashed border-[#290701]/40 pt-1 flex justify-between items-center px-3 text-[8px] font-mono text-[#290701]/70">
              <span>IEEE ICAST</span>
              <span>UG LABS</span>
            </div>
          </motion.div>
        </div>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-black/70 max-w-md mx-auto my-6 leading-relaxed">
          {tab === "waitlist"
            ? "Be first in line to test the firmware, deploy WhatsApp voice agents, and connect low-resource IoT devices."
            : "Help us expand vernacular language packs, build hardware bus adapters, or port firmware to new microcontrollers."}
        </p>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg mt-2">
          {tab === "waitlist" ? (
            /* WAITLIST INLINE INPUT BAR */
            <div className="flex flex-col sm:flex-row items-center bg-white border-2 border-[#290701] rounded-2xl p-1.5 shadow-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-5 py-3 text-sm text-[#290701] placeholder-black/40 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#e0a96d] hover:bg-[#d49959] text-[#290701] font-bold text-sm tracking-tight border border-[#290701]/20 transition-all shrink-0 cursor-pointer shadow-sm active:scale-95"
              >
                Receive Updates
              </button>
            </div>
          ) : (
            /* CONTRIBUTE MULTI-FIELD FORM */
            <div className="flex flex-col gap-3 bg-white border-2 border-[#290701] rounded-2xl p-4 shadow-lg text-left">
              
              {/* Contribution Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#290701] mb-1.5">
                  How would you like to contribute?
                </label>
                <div className="relative">
                  <select
                    value={contributionType}
                    onChange={(e) => setContributionType(e.target.value)}
                    className="w-full appearance-none px-4 py-3 rounded-xl bg-[#f1ecce]/40 border border-black/15 text-sm font-semibold text-[#290701] focus:outline-none focus:border-[#290701]"
                  >
                    <option value="languages">1. Add more vernacular languages</option>
                    <option value="bus">2. Contribute towards hardware bus (I2C, PWM, etc.)</option>
                    <option value="mcu">3. Port to other microcontrollers (ESP32, RP2040, etc.)</option>
                    <option value="other">4. Other / Custom contribution</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-black/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Custom Open Field if 'other' is picked */}
              {contributionType === "other" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="overflow-hidden"
                >
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#290701] mb-1.5">
                    Your Idea or Contribution Note
                  </label>
                  <textarea
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Tell us what you would like to build or connect..."
                    rows={2}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f1ecce]/40 border border-black/15 text-sm text-[#290701] placeholder-black/40 focus:outline-none focus:border-[#290701] resize-none"
                  />
                </motion.div>
              )}

              {/* Email Field & Submit */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#290701] mb-1.5">
                  Your Email
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="developer@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#f1ecce]/40 border border-black/15 text-sm text-[#290701] placeholder-black/40 focus:outline-none focus:border-[#290701]"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#e0a96d] hover:bg-[#d49959] text-[#290701] font-bold text-sm tracking-tight border border-[#290701]/20 transition-all shrink-0 cursor-pointer shadow-sm active:scale-95"
                  >
                    Submit
                  </button>
                </div>
              </div>

            </div>
          )}
        </form>

        {/* Small reassurance footer */}
        <p className="text-xs text-black/50 mt-4 flex items-center justify-center gap-1.5">
          <span>Zero spam. No proprietary lock-in. Open for developers &amp; researchers.</span>
        </p>

      </div>
    </section>
  );
}
