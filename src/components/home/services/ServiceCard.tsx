'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceItem } from './servicesData';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col items-center justify-center text-center bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-brand-teal-500/40 py-6 px-3.5 sm:py-8 sm:px-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_35px_-10px_rgba(15,23,42,0.12)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
    >
      {/* Top Gradient Accent on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal-500 via-brand-teal-400 to-brand-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Prominent Icon Badge */}
      <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-2xl bg-brand-teal-500/10 text-brand-teal-600 border border-brand-teal-500/20 flex items-center justify-center group-hover:bg-brand-teal-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-teal-500/25 transition-all duration-300 mb-3 sm:mb-4.5">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300" />
      </div>

      {/* Service Title */}
      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 group-hover:text-[#0A3868] transition-colors duration-200 tracking-tight leading-snug">
        {service.title}
      </h3>
    </motion.div>
  );
}
