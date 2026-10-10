/**
 * @file Navbar.tsx
 * @description Clean navigation bar with real anchor links and ASHA paper download.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full flex items-center justify-between px-6 sm:px-10 py-6 text-white z-30 pointer-events-auto">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <span className="text-xl font-bold tracking-tight text-[#7f654d]">
          ASHA
        </span>
      </Link>

      {/* Center Nav Links */}
      <nav className="hidden md:flex items-center gap-7 text-sm text-white font-medium border border-white/20 rounded-3xl px-6 py-2.5 bg-black/60 backdrop-blur-md shadow-lg">
        <Link href="#about" className="hover:text-[#e0a96d] transition-colors duration-200">
          About
        </Link>
        <Link href="#projects" className="hover:text-[#e0a96d] transition-colors duration-200">
          Projects
        </Link>
        <Link href="#architecture" className="hover:text-[#e0a96d] transition-colors duration-200">
          Architecture
        </Link>
        <Link href="#proof" className="hover:text-[#e0a96d] transition-colors duration-200">
          Proof
        </Link>
        <a
          href="/ASHA.pdf"
          download="ASHA_Paper.pdf"
          className="hover:text-[#e0a96d] transition-colors duration-200 flex items-center gap-1"
        >
          Paper
        </a>
      </nav>

      {/* Action CTA */}
      <div className="hidden md:flex items-center gap-3">
        <Link
          href="#waitlist"
          className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-black hover:bg-black/80 transition-all duration-200 hover:scale-[1.02] shadow-md border border-white/10"
        >
          Join Waitlist
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 hover:opacity-70"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 bg-[#290701] border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-center z-50 text-white">
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium hover:text-[#e0a96d]"
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium hover:text-[#e0a96d]"
          >
            Projects
          </Link>
          <Link
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium hover:text-[#e0a96d]"
          >
            Architecture
          </Link>
          <Link
            href="#proof"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium hover:text-[#e0a96d]"
          >
            Proof
          </Link>
          <a
            href="/ASHA.pdf"
            download="ASHA_Paper.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#e0a96d]"
          >
            Download IEEE Paper
          </a>
          <Link
            href="#waitlist"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#290701] bg-[#e0a96d]"
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </header>
  );
}
