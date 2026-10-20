'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, UserCheck, ShieldCheck, Globe2 } from 'lucide-react';
import AboutImageGrid from './about/AboutImageGrid';

// Static Data: Easily customizable anytime
export const ABOUT_STATIC_DATA = {
  badge: 'DISCOVER HOLYTGS',
  titleHighlight: 'Who',
  titleRemainder: 'We Are',
  subheading: 'Pioneering Transparent Pathways to Global Education & Academic Prestige',
  leadParagraph:
    'Established in 2014, Holy Tours and Global Studies (HolyTGS) has grown into a premier education and immigration consultancy. With over a decade of steadfast commitment, we have guided thousands of ambitious students to secure admissions and visas at top-tier institutions worldwide.',
  bodyParagraph:
    'We believe every student holds unique aspirations. Our veteran advisors offer personalized profile evaluations, university shortlisting, comprehensive scholarship strategies, and intensive visa interview preparation—supporting you at every step of your international journey.',
  pillars: [
    {
      id: 'pillar-1',
      icon: UserCheck,
      title: 'Certified Global Counselors',
      description: 'One-on-one tailored academic profiling and university matching.',
    },
    {
      id: 'pillar-2',
      icon: ShieldCheck,
      title: '98.5% Visa Success Record',
      description: 'Meticulous document vetting with realistic embassy mock interviews.',
    },
    {
      id: 'pillar-3',
      icon: Globe2,
      title: '600+ Partner Universities',
      description: 'Direct institutional connections across UK, USA, Canada, & Europe.',
    },
  ],
  buttonText: 'Explore More',
  buttonLink: '/about',
};

export default function AboutSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-slate-50">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Dynamic 3-Image Collage */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <AboutImageGrid />
          </div>

          {/* Right Column: Who We Are Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-7 order-1 lg:order-2"
          >
         

            {/* Main Heading with Teal 'Who' */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
                <span className="text-brand-teal-500">{ABOUT_STATIC_DATA.titleHighlight}</span>{' '}
                <span>{ABOUT_STATIC_DATA.titleRemainder}</span>
              </h2>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-slate-800 leading-snug">
                {ABOUT_STATIC_DATA.subheading}
              </p>
            </div>

            {/* Descriptions */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>{ABOUT_STATIC_DATA.leadParagraph}</p>
              <p>{ABOUT_STATIC_DATA.bodyParagraph}</p>
            </div>

           

            {/* CTA Button: Explore More */}
            <div className="pt-2">
              <Link
                href={ABOUT_STATIC_DATA.buttonLink}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base bg-brand-amber-500 hover:bg-brand-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 active:scale-[0.98] transition-all duration-300 text-center w-full sm:w-auto group"
              >
                <span>{ABOUT_STATIC_DATA.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

