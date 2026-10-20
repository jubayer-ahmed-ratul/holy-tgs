'use client';

import React from 'react';
import { PartnerUniversity } from './partnerData';
import PartnerEmblem from './PartnerEmblem';

interface PartnerCardProps {
  partner: PartnerUniversity;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="flex items-center gap-3.5 sm:gap-4 px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(10,56,104,0.12)] hover:border-brand-teal-500/50 transition-all duration-300 group select-none shrink-0 cursor-default">
      {/* University Official Emblem / Logo */}
      <PartnerEmblem partner={partner} />

      {/* University Metadata */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0A3868] transition-colors whitespace-nowrap">
            {partner.name}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <span>{partner.flag}</span>
            <span>{partner.country}</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-[11px] font-semibold text-brand-teal-700 bg-brand-teal-50 px-2 py-0.5 rounded-full border border-brand-teal-200/60 whitespace-nowrap">
            {partner.badge}
          </span>
        </div>
      </div>
    </div>
  );
}

