'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  BookOpen,
  FileText,
  Award,
  ShieldCheck,
  Plane,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { PROCESS_STEPS, ProcessStep } from './process/processData';

// Map icon names to Lucide icons matching the user's reference
const iconMap: Record<ProcessStep['iconName'], React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A3868]" strokeWidth={1.85} />,
  BookOpen: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A3868]" strokeWidth={1.85} />,
  FileText: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A3868]" strokeWidth={1.85} />,
  Award: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A3868]" strokeWidth={1.85} />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A3868]" strokeWidth={1.85} />,
  Plane: <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A3868]" strokeWidth={1.85} />,
};

// Step colors for accents and subtle borders
const stepStyles = {
  teal: {
    nodeBorder: 'border-brand-teal-300/80',
    nodeGlow: 'group-hover:shadow-[0_0_16px_rgba(21,130,138,0.25)]',
    cardBorderHover: 'hover:border-brand-teal-500/40',
    watermarkColor: 'text-slate-200/90 group-hover:text-brand-teal-200/40',
  },
  blue: {
    nodeBorder: 'border-blue-300/80',
    nodeGlow: 'group-hover:shadow-[0_0_16px_rgba(10,56,104,0.2)]',
    cardBorderHover: 'hover:border-[#0A3868]/40',
    watermarkColor: 'text-slate-200/90 group-hover:text-blue-200/40',
  },
  amber: {
    nodeBorder: 'border-amber-300/80',
    nodeGlow: 'group-hover:shadow-[0_0_16px_rgba(245,158,11,0.25)]',
    cardBorderHover: 'hover:border-brand-amber-500/50',
    watermarkColor: 'text-slate-200/90 group-hover:text-amber-200/40',
  },
};

export default function ProcessSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      {/* Background Subtle Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f055_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f055_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient Radial Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(21,130,138,0.05),_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.04),_transparent_70%)] pointer-events-none" />

      <div className="w-11/12 max-w-6xl mx-auto relative z-10">
        {/* ======================================================== */}
        {/* Section Header                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3.5">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
            Your Journey to a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A3868] via-brand-teal-600 to-[#0A3868]">
              Global University
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            We guide you step-by-step from your first dream consultation to settling comfortably into your international student life.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Alternating Step-by-Step Timeline Container              */}
        {/* ======================================================== */}
        <div className="relative">
          {PROCESS_STEPS.map((step: ProcessStep, index: number) => {
            const isLeft = index % 2 === 0; // Steps 01, 03, 05 on Left (desktop)
            const isFirst = index === 0;
            const isLast = index === PROCESS_STEPS.length - 1;
            const styles = stepStyles[step.accentColor];

            // Next step color for seamless line gradient connection
            const nextLineColor = !isLast
              ? PROCESS_STEPS[index + 1].lineColor
              : 'transparent';

            return (
              <div
                key={step.stepNumber}
                className="relative group py-5 sm:py-7 md:py-9"
              >
                {/* -------------------------------------------------- */}
                {/* Vertical Timeline Spine Line Segment               */}
                {/* -------------------------------------------------- */}
                {/* Desktop Spine: perfectly centered */}
                <div
                  className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] pointer-events-none"
                  aria-hidden="true"
                >
                  {/* Top half connecting line */}
                  {!isFirst && (
                    <div
                      className="absolute top-0 bottom-1/2 left-0 right-0"
                      style={{
                        background: `linear-gradient(to bottom, ${PROCESS_STEPS[index - 1].lineColor}, ${step.lineColor})`,
                      }}
                    />
                  )}
                  {/* Bottom half connecting line */}
                  {!isLast ? (
                    <div
                      className="absolute top-1/2 bottom-0 left-0 right-0"
                      style={{
                        background: `linear-gradient(to bottom, ${step.lineColor}, ${nextLineColor})`,
                      }}
                    />
                  ) : (
                    <div
                      className="absolute top-1/2 h-16 left-0 right-0"
                      style={{
                        background: `linear-gradient(to bottom, ${step.lineColor}, transparent)`,
                      }}
                    />
                  )}
                </div>

                {/* Mobile Spine: positioned at left-6 */}
                <div
                  className="md:hidden absolute left-6 top-0 bottom-0 -translate-x-1/2 w-[2px] pointer-events-none"
                  aria-hidden="true"
                >
                  {!isFirst && (
                    <div
                      className="absolute top-0 bottom-1/2 left-0 right-0"
                      style={{
                        background: `linear-gradient(to bottom, ${PROCESS_STEPS[index - 1].lineColor}, ${step.lineColor})`,
                      }}
                    />
                  )}
                  {!isLast ? (
                    <div
                      className="absolute top-1/2 bottom-0 left-0 right-0"
                      style={{
                        background: `linear-gradient(to bottom, ${step.lineColor}, ${nextLineColor})`,
                      }}
                    />
                  ) : (
                    <div
                      className="absolute top-1/2 h-16 left-0 right-0"
                      style={{
                        background: `linear-gradient(to bottom, ${step.lineColor}, transparent)`,
                      }}
                    />
                  )}
                </div>

                {/* -------------------------------------------------- */}
                {/* Center Node Squircle Badge                         */}
                {/* -------------------------------------------------- */}
                {/* Desktop Node (Center) */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div
                    className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white border ${styles.nodeBorder} shadow-[0_4px_16px_rgba(15,23,42,0.08)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${styles.nodeGlow}`}
                  >
                    {iconMap[step.iconName]}
                  </div>
                </motion.div>

                {/* Mobile Node (Left-6) */}
                <div className="md:hidden absolute left-6 top-8 -translate-x-1/2 z-20">
                  <div
                    className={`w-10 h-10 rounded-xl bg-white border ${styles.nodeBorder} shadow-[0_2px_10px_rgba(15,23,42,0.08)] flex items-center justify-center`}
                  >
                    {iconMap[step.iconName]}
                  </div>
                </div>

                {/* -------------------------------------------------- */}
                {/* Alternating 2-Column Grid Layout                   */}
                {/* -------------------------------------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
                  {/* Left Column */}
                  {isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="md:pr-14 lg:pr-18 pl-14 md:pl-0 transform-gpu will-change-transform"
                    >
                      {/* Left Card: Right-aligned on desktop, left-aligned on mobile */}
                      <div
                        className={`relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(10,56,104,0.1)] transition-all duration-300 ${styles.cardBorderHover} hover:-translate-y-1 overflow-hidden`}
                      >
                        {/* Big Watermark Number: Top-Right */}
                        <div
                          className={`absolute top-4 right-6 sm:top-5 sm:right-7 text-5xl sm:text-6xl font-black ${styles.watermarkColor} transition-colors select-none pointer-events-none leading-none tracking-tighter`}
                        >
                          {step.stepNumber}
                        </div>

                        {/* Card Content: Right-aligned on desktop */}
                        <div className="relative z-10 pt-4 sm:pt-6 text-left md:text-right flex flex-col md:items-end">
                          <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#0A3868] transition-colors">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    // Spacer for even steps on desktop left
                    <div className="hidden md:block" />
                  )}

                  {/* Right Column */}
                  {!isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="pl-14 md:pl-14 lg:pl-18 transform-gpu will-change-transform"
                    >
                      {/* Right Card: Left-aligned on both desktop and mobile */}
                      <div
                        className={`relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(10,56,104,0.1)] transition-all duration-300 ${styles.cardBorderHover} hover:-translate-y-1 overflow-hidden`}
                      >
                        {/* Big Watermark Number: Top-Left on desktop, Top-Right on mobile */}
                        <div
                          className={`absolute top-4 right-6 sm:top-5 md:right-auto md:left-8 text-5xl sm:text-6xl font-black ${styles.watermarkColor} transition-colors select-none pointer-events-none leading-none tracking-tighter`}
                        >
                          {step.stepNumber}
                        </div>

                        {/* Card Content: Left-aligned */}
                        <div className="relative z-10 pt-4 sm:pt-6 text-left flex flex-col items-start">
                          <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#0A3868] transition-colors">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    // Spacer for odd steps on desktop right
                    <div className="hidden md:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* Bottom Call-To-Action Strip                              */}
        {/* ======================================================== */}
        <div className="mt-14 sm:mt-18 rounded-3xl bg-gradient-to-br from-[#0A3868] via-[#0D447D] to-[#0A3868] p-7 sm:p-9 text-white shadow-xl shadow-[#0A3868]/20 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-teal-400/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-amber-400/15 rounded-full blur-2xl pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-amber-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Begin Your Journey</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Ready to take Step 01 today?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/85 max-w-xl">
              Book a free 1-on-1 counseling session with our certified education experts and receive a customized global study roadmap.
            </p>
          </div>

          {/* Right Action Button (Hero Amber Button Style) */}
          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-brand-amber-500 hover:bg-brand-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto group"
            >
              <span>Book Free Counseling</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
