/**
 * @file projects.tsx
 * @description Showcase section for real-world projects built on the ASHA framework.
 * Features ColdGuard, Cinderella, and the ASHA Smart Home Testbed.
 */

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Trophy, Cpu, Home, Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-24 text-black">
      {/* Section Header */}
      <div className="space-y-3 mb-16 px-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-black/60">
          <Sparkles className="w-3.5 h-3.5 text-black/70" />
          <span>Ecosystem & Deployments</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-black leading-[1.15]">
          Projects Built With <span className="font-semibold">ASHA</span>
        </h2>
        <p className="max-w-xl text-sm sm:text-base text-black/70 font-normal">
          Explore real-world hardware, IoT automations, and edge AI applications powered by the ASHA architecture.
        </p>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {/* Card 1: ColdGuard */}
        <div className="group rounded-xl bg-transparent border border-transparent hover:bg-white hover:border-black/10 hover:shadow-md transition-all duration-300 p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Title & Underline */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-black">
                  ColdGuard
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-black/80 bg-black/5 px-2.5 py-1 rounded-full border border-black/10">
                  <Trophy className="w-3 h-3 text-amber-700" />
                  Hackathon Winner
                </span>
              </div>
              <div className="w-8 h-[2px] bg-black" />
            </div>

            {/* Video Embed */}
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-black/10 bg-black/5">
              <iframe
                src="https://www.youtube.com/embed/dLkrru8zOeA"
                title="ColdGuard Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-sm text-black/70 leading-relaxed font-normal">
              An AI-powered cold chain guardian protecting life-saving medicines. Built on ASHA&apos;s edge hardware architecture to monitor temperature telemetry and trigger fail-safes both online and completely offline.
            </p>
          </div>

          {/* Bottom Link */}
          <div className="pt-4 border-t border-black/10">
            <Link
              href="https://devpost.com/software/coldguard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-semibold text-black hover:opacity-70 transition-opacity"
            >
              <span>Case study</span>
              <span className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* Card 2: Cinderella */}
        <div className="group rounded-xl bg-transparent border border-transparent hover:bg-white hover:border-black/10 hover:shadow-md transition-all duration-300 p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Title & Underline */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-black">
                  Cinderella
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-black/80 bg-black/5 px-2.5 py-1 rounded-full border border-black/10">
                  <Cpu className="w-3 h-3 text-black" />
                  Gemma Challenge
                </span>
              </div>
              <div className="w-8 h-[2px] bg-black" />
            </div>

            {/* Video Embed */}
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-black/10 bg-black/5">
              <iframe
                src="https://www.youtube.com/embed/uEqSVSws0tc"
                title="Cinderella Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-sm text-black/70 leading-relaxed font-normal">
              An agentic IoT system pairing Google Gemma with ASHA&apos;s Model Context Protocol (MCP) server and ASHA.h firmware. Empowers open models to visually perceive environments and orchestrate physical hardware autonomously.
            </p>
          </div>

          {/* Bottom Link */}
          <div className="pt-4 border-t border-black/10">
            <Link
              href="https://dev.to/piusoblie/cinderella-is-in-good-hands-building-an-agentic-iot-system-with-gemma-4-and-asha-10dn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-semibold text-black hover:opacity-70 transition-opacity"
            >
              <span>Case study</span>
              <span className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* Card 3: Smart Home Testbed */}
        <div className="group rounded-xl bg-transparent border border-transparent hover:bg-white hover:border-black/10 hover:shadow-md transition-all duration-300 p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Title & Underline */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-black">
                  Smart Home Testbed
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-black/80 bg-black/5 px-2.5 py-1 rounded-full border border-black/10">
                  <Home className="w-3 h-3 text-black" />
                  Physical Prototype
                </span>
              </div>
              <div className="w-8 h-[2px] bg-black" />
            </div>

            {/* Video Embed */}
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-black/10 bg-black/5">
              <iframe
                src="https://www.youtube.com/embed/7ymsAUw07GY"
                title="ASHA Powered Smart Home Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-sm text-black/70 leading-relaxed font-normal">
              A physical multi-zone scale testbed demonstrating multilingual voice control in Twi and English. Validates real-time contextual reasoning, automated perimeter security, and bus actuation across PWM, digital, and analog circuits.
            </p>
          </div>

          {/* Bottom Link */}
          <div className="pt-4 border-t border-black/10">
            <Link
              href="https://www.youtube.com/watch?v=7ymsAUw07GY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-semibold text-black hover:opacity-70 transition-opacity"
            >
              <span>Watch demo</span>
              <span className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
