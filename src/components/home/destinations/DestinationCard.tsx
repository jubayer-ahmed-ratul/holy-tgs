'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DestinationItem } from './destinationData';

interface DestinationCardProps {
  destination: DestinationItem;
  index: number;
}

export default function DestinationCard({
  destination,
  index,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-[440px] sm:h-[480px] lg:h-[500px]"
    >
      {/* Entire Card acts as a clickable Link to the Country Page */}
      <Link
        href={destination.link}
        className="group relative block w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 cursor-pointer"
      >
        {/* Full Background Image */}
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Dark Cinematic Gradient Overlay for Crisp Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

        {/* Bottom Content: Flag (Top-Left of Country Name), Country Name, Subheading */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 space-y-2 sm:space-y-2.5">
          {/* Country Flag on the Top-Left of Country Name */}
          <div className="text-3xl sm:text-4xl leading-none drop-shadow-md">
            <span>{destination.flag}</span>
          </div>

          {/* Country Name */}
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight group-hover:text-brand-amber-400 transition-colors duration-200">
            {destination.name}
          </h3>

          {/* Subheading / Tagline */}
          <p className="text-xs sm:text-sm text-slate-200/90 font-normal leading-relaxed line-clamp-2">
            {destination.tagline}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
