/**
 * @file Navbar.tsx
 * @description Clean navigation bar with black text and borders.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full flex items-center justify-between px-6 sm:px-10 py-6 text-white z-30 ">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <span className="text-xl font-bold tracking-tight text-[#7f654d]">
          ASHA
        </span>
      </Link>

      {/* Center Nav Links */}
      <nav className="hidden md:flex items-center gap-9 text-sm text-white font-medium border border-white rounded-3xl px-6 py-2.5 bg-black/50 backdrop-blur-md">
        <Link href="#research" className="hover:opacity-60 transition-opacity duration-200">
          Research
        </Link>
        <Link href="#architecture" className="hover:opacity-60 transition-opacity duration-200">
          Architecture
        </Link>
        <Link href="#hardware" className="hover:opacity-60 transition-opacity duration-200">
          Hardware
        </Link>
        <Link href="#paper" className="hover:opacity-60 transition-opacity duration-200">
          IEEE Paper
        </Link>
      </nav>

      {/* Action CTA */}
      <div className="hidden md:flex items-center gap-3">
        <Link
          href="#waitlist"
          className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-black hover:bg-black/80 transition-all duration-200 hover:scale-[1.02]"
        >
          Join Waitlist
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-1.5 text-black hover:opacity-70"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 bg-[#f1ecce] border border-black rounded-2xl p-6 shadow-xl flex flex-col gap-4 text-center z-50">
          <Link href="#research" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-black">
            Research
          </Link>
          <Link href="#architecture" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-black">
            Architecture
          </Link>
          <Link href="#hardware" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-black">
            Hardware
          </Link>
          <Link
            href="#waitlist"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-black"
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </header>
  );
}
