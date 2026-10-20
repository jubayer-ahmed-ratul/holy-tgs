'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Trophy, Calendar, Award, ArrowUpRight } from 'lucide-react';
import { UniversityItem } from './universityData';

interface UniversityCardProps {
  university: UniversityItem;
  index?: number;
}

export default function UniversityCard({ university }: UniversityCardProps) {
  return (
    <div className="h-full">
      <Link
        href={university.link}
        className="group relative flex flex-col justify-between h-full bg-white rounded-3xl sm:rounded-[26px] border border-slate-200/90 hover:border-brand-teal-500/50 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(21,130,138,0.22)] hover:-translate-y-1.5 transition-[border-color,box-shadow,transform] duration-300 overflow-hidden p-3 sm:p-3.5"
      >
        {/* ======================================================== */}
        {/* Top Visual Area: Campus Photo Framed Inside the Card     */}
        {/* ======================================================== */}
        <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-900">
          {/* Campus Photograph optimized via Next.js Image */}
          <Image
            src={university.image}
            alt={university.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            decoding="async"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30 pointer-events-none" />

          {/* Top-Left: Country Flag & Name Capsule */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-slate-950/80 px-3 py-1 rounded-full border border-white/20 text-white z-10 shadow-sm">
            <span className="text-sm leading-none">{university.flag}</span>
            <span className="text-[11px] font-bold tracking-wide">
              {university.country}
            </span>
          </div>

          {/* Top-Right: World Rank Gold Trophy Pill */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-gradient-to-r from-brand-amber-500 to-amber-600 text-slate-950 font-black text-[11px] px-2.5 py-1 rounded-full shadow-lg shadow-amber-500/30 z-10">
            <Trophy className="w-3.5 h-3.5" />
            <span>{university.rankNumber} QS World</span>
          </div>

          {/* Bottom-Left Highlight Tag on Image */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 bg-white/95 text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm border border-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500 animate-pulse" />
              {university.acceptance}
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Bottom Details Area: Title, Location, Metrics, Programs   */}
        {/* ======================================================== */}
        <div className="p-3 sm:p-4 pt-4 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            {/* University Title */}
            <h3 className="text-lg sm:text-xl font-black text-slate-950 group-hover:text-brand-teal-600 transition-colors duration-200 leading-snug">
              {university.name}
            </h3>

            {/* City & Country */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-brand-teal-600 shrink-0" />
              <span>{university.city}</span>
            </div>
          </div>

          {/* Fast-Fact Metrics Row */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-1.5 bg-slate-50 rounded-xl px-2.5 py-2 border border-slate-100">
              <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-[11px] font-semibold text-slate-700 truncate">
                {university.intakes}
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-50 rounded-xl px-2.5 py-2 border border-slate-100">
              <Award className="w-3.5 h-3.5 text-brand-amber-500 shrink-0" />
              <span className="text-[11px] font-semibold text-slate-700 truncate">
                {university.ielts}
              </span>
            </div>
          </div>

          {/* Program Tags List */}
          <div className="space-y-1.5 pt-1">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Top Programs
            </div>
            <div className="flex flex-wrap gap-1.5">
              {university.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium bg-slate-100/90 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Card Footer Action Line */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-teal-600 group-hover:text-brand-teal-700 transition-colors">
            <span>View University Profile</span>
            <div className="w-7 h-7 rounded-full bg-brand-teal-50 flex items-center justify-center group-hover:bg-brand-teal-500 group-hover:text-white transition-all duration-200">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
