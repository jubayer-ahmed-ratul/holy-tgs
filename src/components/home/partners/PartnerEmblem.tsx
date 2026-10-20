'use client';

import React from 'react';
import Image from 'next/image';
import { PartnerUniversity } from './partnerData';

interface PartnerEmblemProps {
  partner: PartnerUniversity;
}

export default function PartnerEmblem({ partner }: PartnerEmblemProps) {
  // If a remote or static image URL is provided (e.g., from backend), render Image component
  if (partner.logoUrl) {
    return (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-1.5 border border-slate-200/80 shadow-sm flex items-center justify-center shrink-0">
        <Image
          src={partner.logoUrl}
          alt={partner.name}
          width={44}
          height={44}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Pre-configured SVGs for world-renowned partner university crests/monograms
  return (
    <div
      className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
      style={{ backgroundColor: partner.brandColor }}
    >
      <div className="w-7 h-7 flex items-center justify-center text-white">
        {renderEmblemSvg(partner.emblemType, partner.shortName)}
      </div>
    </div>
  );
}

function renderEmblemSvg(type: string, shortName: string) {
  switch (type) {
    case 'oxford':
      // Oxford shield with book and 3 crowns
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white" fillOpacity="0.15" />
          <path d="M8 9h8M8 13h8M8 17h5" stroke="white" strokeLinecap="round" />
        </svg>
      );
    case 'cambridge':
      // Cambridge shield with cross
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white" fillOpacity="0.15" />
          <path d="M12 6v12M6 12h12" stroke="white" strokeLinecap="round" />
        </svg>
      );
    case 'harvard':
      // Harvard shield with Veritas 3 books
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z" fill="white" fillOpacity="0.15" />
          <rect x="7" y="7" width="4" height="3" rx="0.5" fill="white" />
          <rect x="13" y="7" width="4" height="3" rx="0.5" fill="white" />
          <rect x="10" y="13" width="4" height="3" rx="0.5" fill="white" />
        </svg>
      );
    case 'mit':
      // MIT iconic typographic glyph
      return (
        <svg viewBox="0 0 32 20" fill="white" className="w-6 h-6">
          <path d="M0 0h4v20H0zM8 8h4v12H8zM16 4h4v16h-4zM24 0h4v20h-4zM8 0h12v4H8z" />
        </svg>
      );
    case 'toronto':
      // Toronto crest with tree & crown
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
          <path d="M12 22s7-4 7-10V5l-7-3-7 3v7c0 6 7 10 7 10z" fill="white" fillOpacity="0.15" />
          <circle cx="12" cy="11" r="3.5" stroke="white" fill="white" fillOpacity="0.3" />
          <path d="M12 7v8M8 11h8" stroke="white" />
        </svg>
      );
    case 'melbourne':
      // Melbourne crest with Victory star
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white" fillOpacity="0.15" />
          <path d="M12 7l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5z" fill="white" />
        </svg>
      );
    case 'munich':
      // TUM crest / technical arches
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
          <rect x="4" y="5" width="16" height="14" rx="2" stroke="white" fill="white" fillOpacity="0.15" />
          <path d="M8 9v6M12 9v6M16 9v6M8 9h8" stroke="white" strokeLinecap="round" />
        </svg>
      );
    case 'imperial':
      // Imperial crown & open book
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
          <path d="M5 16l2-8 5 4 5-4 2 8H5z" fill="white" fillOpacity="0.2" stroke="white" />
          <circle cx="7" cy="8" r="1" fill="white" />
          <circle cx="12" cy="12" r="1" fill="white" />
          <circle cx="17" cy="8" r="1" fill="white" />
        </svg>
      );
    case 'stanford':
      // Stanford Redwood Tree inside shield
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white" fillOpacity="0.15" />
          <path d="M12 6l-3 4h2l-2.5 4h2L9 18h6l-1.5-4h2L13 10h2L12 6z" fill="white" />
        </svg>
      );
    default:
      // Monogram fallback with first 2 characters
      return (
        <span className="text-xs font-black tracking-tight text-white uppercase select-none">
          {shortName.slice(0, 3)}
        </span>
      );
  }
}

