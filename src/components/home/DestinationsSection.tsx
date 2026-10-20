'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { POPULAR_DESTINATIONS } from './destinations/destinationData';
import DestinationCard from './destinations/DestinationCard';

export default function DestinationsSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-slate-50 overflow-hidden border-t border-slate-200/70">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-11/12 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5">
       
          

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
            <span className="text-brand-teal-500">Popular</span> Destinations
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Discover world-class universities, post-study work opportunities, and vibrant student lifestyles in top global education hubs.
          </p>
        </div>

        {/* 3 Full-Image Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {POPULAR_DESTINATIONS.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </div>

        {/* Section Bottom Button: More Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base bg-brand-amber-500 hover:bg-brand-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 active:scale-[0.98] transition-all duration-300 group"
          >
            <span>More Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

