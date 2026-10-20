'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { SERVICE_CARDS } from './heroData';

export default function HeroFlightScene() {
  return (
    <div className="hidden lg:flex lg:col-span-6 xl:col-span-5 relative w-full h-[520px] sm:h-[550px] items-center justify-center">
      {/* SVG Flight Line Track (Traversing the clear middle channel at y: ~270) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        viewBox="0 0 500 550"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flightLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="1" />
          </linearGradient>
          <filter id="flightGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Glow Trail through the middle channel */}
        <path
          d="M 25 275 C 130 295, 230 250, 360 275 C 410 285, 445 270, 475 265"
          stroke="#f59e0b"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-35 blur-sm"
        />

        {/* Main Glowing Flight Path Trajectory Line */}
        <path
          d="M 25 275 C 130 295, 230 250, 360 275 C 410 285, 445 270, 475 265"
          stroke="url(#flightLineGradient)"
          strokeWidth="3.2"
          strokeDasharray="8 8"
          strokeLinecap="round"
          filter="url(#flightGlow)"
        />

        {/* Origin Departure Point */}
        <circle cx="25" cy="275" r="3.5" fill="#38bdf8" />

        {/* Destination Arrival Point */}
        <circle cx="475" cy="265" r="4" fill="#fbbf24" />
      </svg>

      {/* Animated Flying Airplane: Flies smoothly once through the middle gap and STOPS at the end */}
      <motion.div
        initial={{ x: 25, y: 275, rotate: -4, opacity: 0 }}
        animate={{
          x: [25, 130, 240, 360, 475],
          y: [275, 295, 250, 275, 265],
          rotate: [-4, 6, -6, 2, 0],
          opacity: [0, 1, 1, 1, 1],
        }}
        transition={{
          duration: 5.5,
          ease: 'easeInOut',
          repeat: 0, // Stops when reaching the end destination
        }}
        className="absolute pointer-events-none z-30 -ml-6 -mt-6"
        style={{ left: 0, top: 0 }}
      >
        <div className="relative flex items-center justify-center">
          {/* Engine Contrail Particle Glow */}
          <div className="absolute -bottom-1 -left-3 w-5 h-5 bg-brand-amber-400 rounded-full blur-md opacity-80" />
          <div className="absolute -bottom-2 -left-6 w-8 h-2 bg-gradient-to-r from-transparent via-amber-400/80 to-white rounded-full blur-xs" />

          {/* Glowing Golden Airplane Badge */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-amber-400 via-amber-500 to-amber-600 p-[2px] shadow-2xl shadow-amber-500/60 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-slate-950/85 flex items-center justify-center backdrop-blur-sm border border-amber-300/40">
              <Plane className="w-6 h-6 text-brand-amber-300 fill-brand-amber-400 transform -rotate-45 drop-shadow" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================= */}
      {/* 4 CARDS: Clean vertical spacing with middle flight gap     */}
      {/* ========================================================= */}

      {/* 1. TOP-MOST: Visa Processing (Top Right) */}
      <ServiceCard
        item={SERVICE_CARDS.visa}
        className="absolute top-2 right-2 sm:right-4"
      />

      {/* 2. UPPER: University Admission (Top Left, above middle gap) */}
      <ServiceCard
        item={SERVICE_CARDS.admission}
        className="absolute top-28 left-2 sm:left-4"
      />

      {/* [MIDDLE GAP IS HERE: y: 225px to 325px - Free Flight Corridor for the Plane] */}

      {/* 3. LOWER: Scholarship Guidance (Bottom Left, below middle gap) */}
      <ServiceCard
        item={SERVICE_CARDS.scholarship}
        className="absolute bottom-28 left-2 sm:left-4"
      />

      {/* 4. BOTTOM-MOST: IELTS Coaching (Bottom Right, at the very bottom) */}
      <ServiceCard
        item={SERVICE_CARDS.ielts}
        className="absolute bottom-2 right-2 sm:right-4"
      />
    </div>
  );
}

