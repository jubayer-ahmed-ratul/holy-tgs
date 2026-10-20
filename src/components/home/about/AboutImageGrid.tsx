'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

export default function AboutImageGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Dynamic 3-Image Collage Grid */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4.5">
        {/* Main Tall Image (Left, 7 Columns): Graduates celebrating with city skyline */}
        <div className="col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group">
          <img
            src="/images/about/about-3.jpg"
            alt="HolyTGS Successful Graduates"
            className="w-full h-[320px] sm:h-[420px] lg:h-[470px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Stack (5 Columns): 2 Complementary Images */}
        <div className="col-span-5 flex flex-col gap-3 sm:gap-4.5">
          {/* Top Right: International students in library */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200/80 group flex-1">
            <img
              src="/images/about/about-1.jpg"
              alt="International Students Group Study"
              className="w-full h-[152px] sm:h-[200px] lg:h-[226px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Bottom Right: Personalized Consultation & Counseling */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200/80 group flex-1">
            <img
              src="/images/about/about-2.jpg"
              alt="Academic Advisory and Mentorship"
              className="w-full h-[152px] sm:h-[200px] lg:h-[226px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>

      {/* Floating Trust Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="absolute -bottom-5 sm:-bottom-6 left-3 sm:left-6 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-slate-900/10 rounded-2xl py-3 px-3.5 sm:py-3.5 sm:px-5 flex items-center gap-3 sm:gap-3.5 z-10"
      >
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-teal-500/15 border border-brand-teal-500/25 flex items-center justify-center text-brand-teal-600 flex-shrink-0">
          <Award className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div>
          <div className="text-sm sm:text-base font-black text-slate-900 tracking-tight leading-none">
            10+ Years of Excellence
          </div>
          <div className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal-600" />
            <span>Govt. Approved & Certified</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

