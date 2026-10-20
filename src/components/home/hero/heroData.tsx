import React from 'react';
import { GraduationCap, Award, ShieldCheck, BookOpen } from 'lucide-react';
import { HeroSlide, ServiceCardItem } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: 'International Study Pathways',
    title: 'Embark on Your Global',
    highlightedText: 'Study Journey',
    description:
      'Turn your dreams into reality with admissions and visa guidance to world-class universities across the UK, Canada, USA, and Europe.',
    image: '/images/hero/slide-1.png',
    primaryBtnText: 'Apply Now',
    primaryBtnLink: '/contact',
    secondaryBtnText: 'Explore Destinations',
    secondaryBtnLink: '/destinations',
  },
  {
    id: 2,
    badge: 'Top World Universities',
    title: 'Graduate with Global',
    highlightedText: 'Academic Prestige',
    description:
      'Direct institutional partnerships with 600+ universities. Fast-track your offer letters and step confidently into your future career.',
    image: '/images/hero/slide-2.png',
    primaryBtnText: 'Book Free Counseling',
    primaryBtnLink: '/contact',
    secondaryBtnText: 'Our Consultancy Services',
    secondaryBtnLink: '/services',
  },
  {
    id: 3,
    badge: 'Scholarships & Test Prep',
    title: 'Unlock Up to 100%',
    highlightedText: 'Merit Scholarships',
    description:
      'Maximize your funding opportunities with specialized scholarship motivation essay reviews and high-band IELTS training.',
    image: '/images/hero/slide-3.png',
    primaryBtnText: 'Claim Scholarship Guide',
    primaryBtnLink: '/contact',
    secondaryBtnText: 'IELTS Prep Batches',
    secondaryBtnLink: '/services',
  },
];

export const SERVICE_CARDS: Record<string, ServiceCardItem> = {
  visa: {
    id: 'visa',
    title: 'Visa Processing',
    subtitle: '98.5% Approval Rate',
    icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
    badge: 'High Success',
    badgeColor: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30',
    hoverBorderColor: 'hover:border-emerald-400/60',
    iconColor: 'text-emerald-400',
    iconBgColor: 'bg-emerald-500/20',
  },
  admission: {
    id: 'admission',
    title: 'University Admission',
    subtitle: '600+ Partner Universities',
    icon: <GraduationCap className="w-4 h-4 text-brand-amber-400" />,
    badge: 'Direct Tie-ups',
    badgeColor: 'bg-brand-amber-400/20 text-brand-amber-300 border-brand-amber-400/30',
    hoverBorderColor: 'hover:border-brand-amber-400/60',
    iconColor: 'text-brand-amber-400',
    iconBgColor: 'bg-brand-amber-500/20',
  },
  scholarship: {
    id: 'scholarship',
    title: 'Scholarship Guidance',
    subtitle: 'Up to 100% Tuition Aid',
    icon: <Award className="w-4 h-4 text-brand-amber-400" />,
    badge: '$15M+ Won',
    badgeColor: 'bg-brand-amber-400/20 text-brand-amber-300 border-brand-amber-400/30',
    hoverBorderColor: 'hover:border-brand-amber-400/60',
    iconColor: 'text-brand-amber-400',
    iconBgColor: 'bg-brand-amber-500/20',
  },
  ielts: {
    id: 'ielts',
    title: 'IELTS Coaching',
    subtitle: 'Band 7.5+ Target Coaching',
    icon: <BookOpen className="w-4 h-4 text-sky-400" />,
    badge: 'Certified',
    badgeColor: 'bg-sky-400/20 text-sky-300 border-sky-400/30',
    hoverBorderColor: 'hover:border-sky-400/60',
    iconColor: 'text-sky-400',
    iconBgColor: 'bg-sky-500/20',
  },
};
