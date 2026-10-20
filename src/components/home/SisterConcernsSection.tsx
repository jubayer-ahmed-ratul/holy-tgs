'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Layers,
  Plane,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Luggage,
  Globe,
  Award,
  Headphones,
} from 'lucide-react';

export default function SisterConcernsSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      {/* Background Ambient Radial Highlights */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(21,130,138,0.06),_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.05),_transparent_70%)] pointer-events-none" />

      <div className="w-11/12 max-w-6xl mx-auto relative z-10">
        {/* ======================================================== */}
        {/* Section Header                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3.5">
          

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
            Our <span className="text-[#0A3868]">Sister Concerns</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Beyond education consultancy, HolyTGS powers specialized language test preparation and comprehensive worldwide travel & ticketing services.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 2 Sister Concern Cards Grid                              */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
          {/* ------------------------------------------------------ */}
          {/* Card 1: Holy Tours & Travels                           */}
          {/* ------------------------------------------------------ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="group relative flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(10,56,104,0.12)] hover:border-brand-teal-500/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            {/* Top Decorative Color Bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-teal-500 via-[#0A3868] to-brand-teal-500" />

            <div className="space-y-6">
              {/* Header: Logo Badge & Venture Category */}
              <div className="flex items-center justify-between gap-4">
                {/* Official Logo Display */}
                <div className="h-14 sm:h-16 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-center shadow-inner group-hover:bg-white group-hover:border-brand-teal-300 transition-colors">
                  <Image
                    src="/logo.png"
                    alt="Holy Tours & Travels"
                    width={90}
                    height={46}
                    className="h-9 sm:h-10 w-auto object-contain"
                  />
                </div>

                {/* Division Pill */}
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-50 text-brand-blue-700 border border-blue-200/80 flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-[#0A3868]" />
                  <span>Travel & Tourism</span>
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight group-hover:text-[#0A3868] transition-colors">
                  Holy Tours & Travels
                </h3>
                <p className="text-xs sm:text-sm font-bold text-brand-teal-700 uppercase tracking-wide">
                  Global Air Ticketing, Tourist Visas & Holiday Packages
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed pt-1">
                  Specializing in student airfare discounts, extra baggage allowances, custom international holiday packages, umrah packages, and worldwide hotel reservations with 24/7 travel care.
                </p>
              </div>

              {/* 4 Feature Points */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center shrink-0 border border-brand-teal-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Student Special Airfares & Extra Baggage Allowances</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center shrink-0 border border-brand-teal-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Custom International Holiday & Umrah Packages</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center shrink-0 border border-brand-teal-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Worldwide Tourist & Visitor Visa Assistance</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center shrink-0 border border-brand-teal-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Airport Transfers & Global Hotel Bookings</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8 mt-6 border-t border-slate-100">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-brand-amber-500 hover:bg-brand-amber-600 text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 active:scale-[0.98] transition-all duration-300 w-full group/btn"
              >
                <span>Inquire Travel Services</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* ------------------------------------------------------ */}
          {/* Card 2: HolyTGS Language Center                        */}
          {/* ------------------------------------------------------ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="group relative flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(10,56,104,0.12)] hover:border-brand-teal-500/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            {/* Top Decorative Color Bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-amber-500 via-[#0A3868] to-brand-amber-500" />

            <div className="space-y-6">
              {/* Header: Logo Badge & Venture Category */}
              <div className="flex items-center justify-between gap-4">
                {/* Official Logo Display */}
                <div className="h-14 sm:h-16 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-center shadow-inner group-hover:bg-white group-hover:border-brand-teal-300 transition-colors">
                  <Image
                    src="/logo.png"
                    alt="HolyTGS Language Center"
                    width={90}
                    height={46}
                    className="h-9 sm:h-10 w-auto object-contain"
                  />
                </div>

                {/* Division Pill */}
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-brand-amber-600" />
                  <span>Language Academy</span>
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight group-hover:text-[#0A3868] transition-colors">
                  HolyTGS Language Center
                </h3>
                <p className="text-xs sm:text-sm font-bold text-brand-amber-600 uppercase tracking-wide">
                  IELTS, PTE Academic & Spoken English Training
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed pt-1">
                  Equipping students and professionals with high band scores through personalized mentorship, native instructors, small interactive batches, and computer-delivered mock exam labs.
                </p>
              </div>

              {/* 4 Feature Points */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-amber-50 text-brand-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>IELTS & PTE Academic Intensive Masterclasses</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-amber-50 text-brand-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Free Diagnostic Tests & Unlimited Computer Mock Drills</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-amber-50 text-brand-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Cambridge-Certified & High-Band Expert Trainers</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-amber-50 text-brand-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Spoken English & Embassy Visa Interview Coaching</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8 mt-6 border-t border-slate-100">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-brand-amber-500 hover:bg-brand-amber-600 text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 active:scale-[0.98] transition-all duration-300 w-full group/btn"
              >
                <span>Enroll in Language Courses</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

