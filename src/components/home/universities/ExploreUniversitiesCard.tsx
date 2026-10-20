'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ExploreUniversitiesCard() {
  return (
    <div className="h-full">
      <div className="relative flex flex-col justify-between h-full rounded-3xl sm:rounded-[26px] bg-gradient-to-br from-[#0A3868] via-[#0D447D] to-[#0A3868] p-6 sm:p-7 text-white shadow-xl shadow-[#0A3868]/25 border border-white/15 overflow-hidden group">
        {/* Subtle Ambient Brand Glows (Teal & Amber) */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-teal-400/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-amber-400/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Part: Icon & Category Badge */}
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-brand-teal-500/20 text-brand-teal-300 border border-brand-teal-400/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
              <Building2 className="w-6 h-6" />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/15 text-brand-teal-200 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-brand-amber-400" />
              GLOBAL DIRECTORY
            </span>
          </div>

          {/* Heading & Description */}
          <div className="space-y-2 pt-1">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
              Explore 600+ Partner Universities Worldwide
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed font-normal">
              Find the perfect university tailored to your GPA, budget, and dream country across 15+ top study destinations.
            </p>
          </div>

          {/* Quick Perks */}
          <ul className="space-y-1.5 pt-1 text-xs text-blue-100 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal-400 shrink-0" />
              <span>Direct application fee waivers</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal-400 shrink-0" />
              <span>Fast-track offer letters in 2-4 weeks</span>
            </li>
          </ul>
        </div>

        {/* Bottom Part: Explore More CTA Button in Hero Amber Color */}
        <div className="relative z-10 pt-6 mt-4 border-t border-white/10">
          <Link
            href="/universities"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-brand-amber-500 hover:bg-brand-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 active:scale-[0.98] transition-all duration-300 w-full text-center group/btn"
          >
            <span>Explore More Universities</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}
