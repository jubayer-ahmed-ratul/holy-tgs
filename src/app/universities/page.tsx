'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Search,
  Filter,
  Sparkles,
  ArrowRight,
  Globe2,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { TOP_UNIVERSITIES, UniversityItem } from '@/components/home/universities/universityData';
import UniversityCard from '@/components/home/universities/UniversityCard';

const countryFilters = [
  { id: 'all', label: 'All Destinations', flag: '🌍' },
  { id: 'United Kingdom', label: 'United Kingdom', flag: '🇬🇧' },
  { id: 'Canada', label: 'Canada', flag: '🇨🇦' },
  { id: 'United States', label: 'United States', flag: '🇺🇸' },
  { id: 'Australia', label: 'Australia', flag: '🇦🇺' },
  { id: 'Germany', label: 'Germany', flag: '🇩🇪' },
];

export default function UniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');

  const filteredUniversities = TOP_UNIVERSITIES.filter((uni: UniversityItem) => {
    const matchesCountry =
      selectedCountry === 'all' || uni.country === selectedCountry;
    const matchesSearch =
      searchQuery.trim() === '' ||
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCountry && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ======================================================== */}
      {/* Hero Header Section                                      */}
      {/* ======================================================== */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
        {/* Ambient Radial Highlights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(21,130,138,0.08),_transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(10,56,104,0.06),_transparent_70%)] pointer-events-none" />

        <div className="w-11/12 max-w-6xl mx-auto relative z-10 text-center space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 mb-2">
            <Link href="/" className="hover:text-brand-teal-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Universities</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-teal-50 text-brand-teal-700 border border-brand-teal-200/70 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-brand-teal-600" />
            <span className="tracking-wide uppercase">600+ GLOBAL INSTITUTIONAL PARTNERS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
            Explore Top <span className="text-brand-teal-600">World Universities</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Direct institutional partnerships, conditional offer letters, and exclusive scholarship access across the UK, USA, Canada, Australia, and Germany.
          </p>

          {/* Quick Stat Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-teal-600" />
              <span>Direct Application Fee Waivers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-teal-600" />
              <span>Fast-Track Offer Letters (2-4 Weeks)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-teal-600" />
              <span>Merit Scholarships up to 50%</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Search & Filter Bar Section                              */}
      {/* ======================================================== */}
      <section className="py-8 bg-white border-b border-slate-200/80 sticky top-16 sm:top-20 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="w-11/12 max-w-6xl mx-auto space-y-4">
          <div className="flex flex-col md:flex-row gap-3.5 items-center justify-between">
            {/* Search Input Box */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by university, city, or subject (e.g. AI, MBA)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal-500/40 focus:border-brand-teal-500 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Results Count */}
            <div className="text-xs text-slate-500 font-medium self-end md:self-auto">
              Showing <span className="font-bold text-slate-900">{filteredUniversities.length}</span> partner universities
            </div>
          </div>

          {/* Country Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {countryFilters.map((tab) => {
              const isActive = selectedCountry === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCountry(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#0A3868] text-white shadow-md shadow-[#0A3868]/20'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border border-slate-200/60'
                  }`}
                >
                  <span>{tab.flag}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Universities Grid Section                                */}
      {/* ======================================================== */}
      <section className="py-14 sm:py-18">
        <div className="w-11/12 max-w-6xl mx-auto">
          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredUniversities.map((uni, index) => (
                <UniversityCard key={uni.id} university={uni} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/80 p-8 space-y-4 max-w-md mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No Universities Found</h3>
              <p className="text-xs sm:text-sm text-slate-500">
                We couldn't find any institutions matching your search or filter. Try clearing your filters or contact our counselors for complete listings.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCountry('all');
                }}
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#0A3868] text-white hover:bg-[#07284b] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* ======================================================== */}
          {/* Bottom Consultation Banner                               */}
          {/* ======================================================== */}
          <div className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-br from-[#0A3868] via-[#0D447D] to-[#0A3868] p-8 sm:p-10 text-white shadow-xl shadow-[#0A3868]/20 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-teal-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-amber-400/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-amber-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Shortlisting</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Don’t see your dream university listed here?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/85 max-w-xl">
                We represent 600+ partner universities across 15+ countries. Meet with our counselors to get a tailored list matching your exact academic GPA and budget.
              </p>
            </div>

            <div className="relative z-10 shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-brand-amber-500 hover:bg-brand-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto group"
              >
                <span>Book Free University Counseling</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

