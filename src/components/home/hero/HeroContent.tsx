'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HeroSlide } from './types';

interface HeroContentProps {
  activeSlide: HeroSlide;
}

export default function HeroContent({ activeSlide }: HeroContentProps) {
  return (
    <div className="col-span-12 lg:col-span-6 xl:col-span-7 space-y-5 sm:space-y-6 lg:-mt-10 xl:-mt-14 max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5 sm:space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
        >
          {/* Dynamic Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.18] sm:leading-[1.15] text-center lg:text-left w-full">
            <span>{activeSlide.title}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-500 via-brand-teal-600 to-brand-teal-500 mt-1 sm:mt-1.5">
              {activeSlide.highlightedText}
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-800 sm:text-slate-700 max-w-xl leading-relaxed font-medium sm:font-normal text-center lg:text-left mx-auto lg:mx-0">
            {activeSlide.description}
          </p>

          {/* 2 Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
            {/* Button 1: Primary Amber CTA */}
            <Link
              href={activeSlide.primaryBtnLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base bg-brand-amber-500 hover:bg-brand-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 active:scale-[0.98] transition-all duration-300 text-center w-full sm:w-auto"
            >
              <span>{activeSlide.primaryBtnText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Button 2: Glassy Secondary Action */}
            <Link
              href={activeSlide.secondaryBtnLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-white/90 sm:bg-slate-900/5 hover:bg-white text-slate-900 border border-slate-300/80 shadow-sm active:scale-[0.98] transition-all duration-300 text-center w-full sm:w-auto"
            >
              <span>{activeSlide.secondaryBtnText}</span>
              <ArrowRight className="w-4 h-4 text-brand-teal-600" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

