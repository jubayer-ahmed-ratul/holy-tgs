import React from 'react';
import {
  Compass,
  School,
  FileCheck2,
  Home,
  ShieldCheck,
  Plane,
  Car,
  Languages,
  LucideIcon,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: LucideIcon;
  badge?: string;
  features: string[];
  link: string;
}

export const HOME_SERVICES: ServiceItem[] = [
  {
    id: 'career-counseling',
    title: 'Career Counseling',
    shortDesc:
      'Personalized profiling to match your unique academic background with future global job market trends.',
    icon: Compass,
    badge: 'Profiling',
    features: [
      'Aptitude & interest evaluation',
      'Global career pathway mapping',
      'One-on-one counselor sessions',
    ],
    link: '/services#career-counseling',
  },
  {
    id: 'university-selection',
    title: 'University Selection',
    shortDesc:
      'Data-backed shortlisting across 600+ partner universities tailored to your budget, CGPA, and country choice.',
    icon: School,
    badge: '600+ Partners',
    features: [
      'Ambitious, target & safe lists',
      'Tuition fee & scholarship comparison',
      'Accredited global rankings review',
    ],
    link: '/services#university-selection',
  },
  {
    id: 'admission',
    title: 'Admission',
    shortDesc:
      'End-to-end application management ensuring polished documentation and expedited university offer letters.',
    icon: FileCheck2,
    badge: 'Fast-Track',
    features: [
      'Professional SOP & CV editorial',
      'Application fee waiver support',
      'Direct admission liaison',
    ],
    link: '/services#admission',
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    shortDesc:
      'Safe, student-friendly housing assistance with verified on-campus dorms and trusted private student apartments.',
    icon: Home,
    features: [
      'On/off-campus options vetted',
      'Affordable student lease contracts',
      'Close proximity to universities',
    ],
    link: '/services#accommodation',
  },
  {
    id: 'visa-application-guide',
    title: 'Visa Application Guide',
    shortDesc:
      'Industry-leading 98.5% approval track record with exhaustive financial audits and realistic mock interviews.',
    icon: ShieldCheck,
    badge: '98.5% Success',
    features: [
      'Embassy document checklist audit',
      'One-on-one simulated interview drills',
      'Biometrics & medical coordination',
    ],
    link: '/services#visa-application-guide',
  },
  {
    id: 'air-ticket-issue',
    title: 'Air Ticket Issue',
    shortDesc:
      'Exclusive international student fares with increased baggage limits, flexible dates, and convenient transit routes.',
    icon: Plane,
    badge: 'Student Fares',
    features: [
      'Special student discount pricing',
      'Extra 40-46kg baggage options',
      'Flexible departure dates & re-routing',
    ],
    link: '/services#air-ticket-issue',
  },
  {
    id: 'airport-pickup',
    title: 'Airport Pickup',
    shortDesc:
      'Warm arrival greeting at your destination airport with dependable private transfer straight to your new home.',
    icon: Car,
    features: [
      'Dedicated local driver greeting',
      'Luggage assistance & safe ride',
      'Peace of mind arrival notification',
    ],
    link: '/services#airport-pickup',
  },
  {
    id: 'language-course',
    title: 'Language Course',
    shortDesc:
      'Targeted test preparation for IELTS, PTE, and academic English taught by certified, high-band scoring trainers.',
    icon: Languages,
    badge: 'IELTS / PTE',
    features: [
      'Weekly computer-delivered mock tests',
      '1-on-1 speaking band diagnostics',
      'Flexible online & physical batches',
    ],
    link: '/services#language-course',
  },
];

