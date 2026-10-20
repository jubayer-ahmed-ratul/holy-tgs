'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCardItem } from './types';

interface ServiceCardProps {
  item: ServiceCardItem;
  className?: string;
}

export default function ServiceCard({ item, className = '' }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ duration: 0.2 }}
      className={`h-[105px] w-[215px] sm:w-[230px] z-10 bg-slate-950/50 hover:bg-slate-900/70 backdrop-blur-md border border-white/20 ${item.hoverBorderColor} rounded-2xl p-3.5 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group ${className}`}
    >
      {/* Top Row: Icon + Badge */}
      <div className="flex items-center justify-between">
        <div
          className={`w-8 h-8 rounded-lg ${item.iconBgColor} ${item.iconColor} flex items-center justify-center transition-colors`}
        >
          {item.icon}
        </div>
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}
        >
          {item.badge}
        </span>
      </div>

      {/* Bottom Row: Title + Subtitle */}
      <div>
        <h3
          className={`text-xs sm:text-sm font-bold text-white transition-colors truncate ${
            item.id === 'visa'
              ? 'group-hover:text-emerald-300'
              : item.id === 'ielts'
              ? 'group-hover:text-sky-300'
              : 'group-hover:text-brand-amber-300'
          }`}
        >
          {item.title}
        </h3>
        <p className="text-[11px] text-slate-300 mt-0.5 truncate">
          {item.subtitle}
        </p>
      </div>
    </motion.div>
  );
}

