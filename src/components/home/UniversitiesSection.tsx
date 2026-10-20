'use client';

import React from 'react';
import { TOP_UNIVERSITIES } from './universities/universityData';
import UniversityCard from './universities/UniversityCard';
import ExploreUniversitiesCard from './universities/ExploreUniversitiesCard';

export default function UniversitiesSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden border-t border-slate-200/70">
      {/* Background Decorative Ambient Radial Glows (Zero blur filter overhead) */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(21,130,138,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05),transparent_70%)] pointer-events-none" />

      <div className="w-11/12 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5">
         

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
            Explore Top <span className="text-brand-teal-500">Universities</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Gain direct admissions, exclusive application fee waivers, and fast-track offer letters to world-class institutions through HolyTGS.
          </p>
        </div>

        {/* 5 University Cards + 1 Explore More Card (3 on top row, 2 + Explore More on second row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {/* Row 1: First 3 Universities (Oxford, Toronto, Harvard) */}
          {TOP_UNIVERSITIES.slice(0, 3).map((uni, index) => (
            <UniversityCard key={uni.id} university={uni} index={index} />
          ))}

          {/* Row 2: Next 2 Universities (Melbourne, Munich) */}
          {TOP_UNIVERSITIES.slice(3, 5).map((uni, index) => (
            <UniversityCard key={uni.id} university={uni} index={index + 3} />
          ))}

          {/* Row 2, Right Side: Explore More Banner Card */}
          <ExploreUniversitiesCard />
        </div>
      </div>
    </section>
  );
}

