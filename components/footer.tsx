"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#290701] text-white py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        
        {/* Brand info */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl font-extrabold tracking-tight text-white font-['Martel_Sans']">
              ASHA
            </span>
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-[#e0a96d] border border-white/10">
              IEEE ICAST 2026
            </span>
          </div>
          <p className="text-sm text-white/60 max-w-sm leading-relaxed">
            Agentic Smart Home Assistant for Low-Resource Languages. Built at the University of Ghana.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8 text-sm">
          <a
            href="/ASHA.pdf"
            download="ASHA_Paper.pdf"
            className="text-white/80 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Research Paper</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
          <a
            href="https://devpost.com/software/coldguard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>ColdGuard</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
          <a
            href="https://dev.to/piusoblie/cinderella-is-in-good-hands-building-an-agentic-iot-system-with-gemma-4-and-asha-10dn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Cinderella Gemma</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
          <a
            href="#waitlist"
            className="text-[#e0a96d] hover:underline font-semibold"
          >
            Join Early Access
          </a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 gap-4">
        <span>© 2026 ASHA Research. All rights reserved.</span>
        <span>Empowering African vernacular languages on the edge.</span>
      </div>
    </footer>
  );
}
