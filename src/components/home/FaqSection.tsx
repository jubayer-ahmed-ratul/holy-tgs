'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  MessageCircle,
  ArrowRight,
  PhoneCall,
} from 'lucide-react';
import { FAQS_DATA, FaqItem } from './faq/faqData';

type FaqCategory = 'all' | 'admissions' | 'visa' | 'scholarship' | 'general';

const categories: { id: FaqCategory; label: string }[] = [
  { id: 'all', label: 'All Questions' },
  { id: 'admissions', label: 'Admissions & IELTS' },
  { id: 'visa', label: 'Visa & Embassies' },
  { id: 'scholarship', label: 'Scholarships' },
  { id: 'general', label: 'Work & Support' },
];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQS_DATA
      : FAQS_DATA.filter((item) => item.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(21,130,138,0.05),_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(10,56,104,0.04),_transparent_70%)] pointer-events-none" />

      <div className="w-11/12 max-w-5xl mx-auto relative z-10">
        {/* ======================================================== */}
        {/* Section Header                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5">
          

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
            Got Questions?{' '}
            <span className="text-[#0A3868]">We Have Answers</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Everything you need to know about university shortlisting, scholarships, IELTS preparation, and embassy visa filing.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Category Filter Tabs                                     */}
        {/* ======================================================== */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {categories.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#0A3868] text-white shadow-md shadow-[#0A3868]/20'
                    : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* Interactive Accordion List                               */}
        {/* ======================================================== */}
        <div className="space-y-4">
          {filteredFaqs.map((faq: FaqItem) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-blue-50/25 border-[#0A3868]/30 shadow-md shadow-[#0A3868]/5'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4.5 px-5 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-md border shrink-0 ${
                        isOpen
                          ? 'bg-brand-teal-50 text-brand-teal-700 border-brand-teal-200'
                          : 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}
                    >
                      {faq.categoryLabel}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#0A3868] text-white border-[#0A3868] rotate-180'
                        : 'bg-slate-100 text-slate-500 border-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* Bottom Help Box                                          */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-teal-500/10 text-brand-teal-600 flex items-center justify-center shrink-0 border border-brand-teal-500/20">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Still have questions?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Can’t find what you are looking for? Speak directly with our certified counselors.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-[#0A3868] hover:bg-[#07284b] text-white shadow-md shadow-[#0A3868]/20 transition-all duration-300 shrink-0 w-full sm:w-auto"
          >
            <span>Ask a Counselor</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

