'use client';

import React, { useState, useEffect } from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroFlightScene from './hero/HeroFlightScene';
import { HERO_SLIDES } from './hero/heroData';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slideshow every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden min-h-[540px] sm:min-h-[600px] lg:min-h-[700px] flex items-center bg-slate-100 pt-24 sm:pt-26 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      {/* 1. Cinematic Background Image Slideshow with White Shade Overlay */}
      <HeroBackground slides={HERO_SLIDES} currentSlide={currentSlide} />

      {/* 2. Main Hero Content Container (11/12 width standard) */}
      <div className="w-11/12 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Dynamic Text Content + 2 Action Buttons */}
          <HeroContent activeSlide={activeSlide} />

          {/* Right Column: Flight Line, Animated Airplane, and 4 Service Cards */}
          <HeroFlightScene />
        </div>
      </div>
    </section>
  );
}
