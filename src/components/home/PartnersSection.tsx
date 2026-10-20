'use client';

import React from 'react';
import { Building2, Sparkles, Globe2, ShieldCheck, CheckCircle } from 'lucide-react';
import { PARTNERS_ROW_1, PARTNERS_ROW_2, PartnerUniversity } from './partners/partnerData';
import PartnerCard from './partners/PartnerCard';

interface PartnersSectionProps {
  /**
   * Optional custom partner data for future backend API fetching:
   * e.g. const res = await fetch('/api/partners');
   */
  row1Partners?: PartnerUniversity[];
  row2Partners?: PartnerUniversity[];
}

export default function PartnersSection({
  row1Partners = PARTNERS_ROW_1,
  row2Partners = PARTNERS_ROW_2,
}: PartnersSectionProps) {
  // Duplicate arrays to create a mathematically seamless infinite loop track
  const duplicatedRow1 = [...row1Partners, ...row1Partners];
  const duplicatedRow2 = [...row2Partners, ...row2Partners];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-0 inset-x-0 h-40 bg-[radial-gradient(ellipse_at_top,_rgba(10,56,104,0.04),_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(21,130,138,0.04),_transparent_70%)] pointer-events-none" />

      {/* Background Subtle Dot Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full">
        {/* ======================================================== */}
        {/* Section Header                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4 space-y-3.5">
          

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
            Our <span className="text-[#0A3868]">Partners</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Proudly partnering with 600+ accredited universities and world-renowned institutions across the UK, USA, Canada, Australia, and Europe.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Infinite Marquee Double Row Container                    */}
        {/* ======================================================== */}
        <div className="relative w-full space-y-5 sm:space-y-6">
          {/* Left Edge Gradient Fade Mask */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20"
            aria-hidden="true"
          />

          {/* Right Edge Gradient Fade Mask */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20"
            aria-hidden="true"
          />

          {/* ------------------------------------------------------ */}
          {/* Row 1: Left to Right Marquee ("left to right jabe")     */}
          {/* ------------------------------------------------------ */}
          <div className="pause-on-hover overflow-hidden py-1">
            <div className="animate-marquee-ltr flex items-center gap-4 sm:gap-5 transform-gpu will-change-transform">
              {duplicatedRow1.map((partner, index) => (
                <PartnerCard
                  key={`row1-${partner.id}-${index}`}
                  partner={partner}
                />
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* Row 2: Right to Left Marquee ("nicher gulo right to left")*/}
          {/* ------------------------------------------------------ */}
          <div className="pause-on-hover overflow-hidden py-1">
            <div className="animate-marquee-rtl flex items-center gap-4 sm:gap-5 transform-gpu will-change-transform">
              {duplicatedRow2.map((partner, index) => (
                <PartnerCard
                  key={`row2-${partner.id}-${index}`}
                  partner={partner}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Bottom Trust Statistics Pill Bar                         */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-14 px-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-teal-600" />
            <span><strong className="text-slate-900 font-bold">600+</strong> Direct University Partnerships</span>
          </div>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-[#0A3868]" />
            <span><strong className="text-slate-900 font-bold">15+</strong> Prime Study Abroad Destinations</span>
          </div>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-amber-600" />
            <span><strong className="text-slate-900 font-bold">100%</strong> Application Fee Waiver Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

