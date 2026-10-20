'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ArrowRight, MapPin } from 'lucide-react';
import { GALLERY_PHOTOS } from './gallery/galleryData';

type FilterCategory = 'all' | 'visa' | 'counseling' | 'campus';

const filterTabs: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All Moments' },
  { id: 'visa', label: 'Visa Celebrations' },
  { id: 'counseling', label: 'Admissions & IELTS' },
  { id: 'campus', label: 'Global Campuses' },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredPhotos =
    activeFilter === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === activeFilter);

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      {/* Background Decorative Ambient Highlights */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(21,130,138,0.05),_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(10,56,104,0.05),_transparent_70%)] pointer-events-none" />

      <div className="w-11/12 max-w-6xl mx-auto relative z-10">
        {/* ======================================================== */}
        {/* Section Header                                           */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-teal-50 text-brand-teal-700 border border-brand-teal-200/70 shadow-sm">
              <Camera className="w-3.5 h-3.5 text-brand-teal-600" />
              <span className="tracking-wide uppercase">OUR GALLERY & MOMENTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
              Life at <span className="text-[#0A3868]">HolyTGS</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Take a look inside our counseling sessions, visa celebrations, interactive language batches, and global campus milestones.
            </p>
          </div>

          {/* About Us Button on the Header (Desktop view) */}
          <div className="shrink-0 hidden md:block">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-brand-amber-500 hover:bg-brand-amber-600 text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 active:scale-[0.98] transition-all duration-300 group"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Category Filter Tabs                                     */}
        {/* ======================================================== */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#0A3868] text-white shadow-md shadow-[#0A3868]/20'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* Dynamic Gallery Photo Grid                               */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(10,56,104,0.14)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle Dark Gradient at bottom of image for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-md backdrop-blur-sm">
                      {photo.categoryLabel}
                    </span>
                  </div>

                  {/* Bottom Overlay Text */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-300 font-semibold tracking-wide uppercase">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{photo.location}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-sm">
                      {photo.title}
                    </h3>
                  </div>
                </div>

                {/* Card Caption Footer */}
                <div className="p-4 sm:p-5 bg-white">
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ======================================================== */}
        {/* Mobile About Us Button (Visible on mobile screens)       */}
        {/* ======================================================== */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-brand-amber-500 hover:bg-brand-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 active:scale-[0.98] transition-all duration-300 w-full"
          >
            <span>Learn More About Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

