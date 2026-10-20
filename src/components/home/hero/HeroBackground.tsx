'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeroSlide } from './types';

interface HeroBackgroundProps {
  slides: HeroSlide[];
  currentSlide: number;
}

export default function HeroBackground({
  slides,
  currentSlide,
}: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-100">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <motion.div
            key={slide.id}
            initial={{ opacity: index === 0 ? 1 : 0, scale: index === 0 ? 1 : 1.05 }}
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1 : 1.05,
            }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              className="w-full h-full object-cover object-center sm:object-right"
            />
          </motion.div>
        );
      })}

      {/* Desktop (>= sm): Left-to-right white shade: almost 20% solid white, then gradually shades out across the right */}
      <div
        className="hidden sm:block absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, #ffffff 0%, #ffffff 20%, rgba(255, 255, 255, 0.94) 34%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.25) 70%, transparent 88%)',
        }}
      />

      {/* Mobile (< sm): Balanced translucent white shade allowing background imagery to remain clearly visible while ensuring text readability */}
      <div
        className="sm:hidden absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.72) 30%, rgba(255, 255, 255, 0.58) 62%, rgba(255, 255, 255, 0.32) 85%, rgba(255, 255, 255, 0.12) 100%)',
        }}
      />
    </div>
  );
}

