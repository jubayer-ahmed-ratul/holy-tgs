import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Award,
  Globe2,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  MessageSquare,
} from 'lucide-react';
import { COMPANY_INFO, FEATURED_COUNTRIES, SERVICES } from '@/data/mockData';

const socialIconMap: Record<string, React.ReactNode> = {
  facebook: <Facebook className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  instagram: <Instagram className="w-4 h-4" />,
  youtube: <Youtube className="w-4 h-4" />,
  whatsapp: <MessageSquare className="w-4 h-4" />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-950 text-slate-300 border-t border-slate-800">
      {/* 1. Trust & Accreditations Banner */}
      <div className="border-b border-slate-800/80 bg-brand-navy-900/60 py-6">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-800 text-brand-amber-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Certified Counselors</h4>
                <p className="text-xs text-slate-400">British Council & ICEF accredited education advisors</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-800 text-brand-amber-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">98.5% Visa Approval Rate</h4>
                <p className="text-xs text-slate-400">Proven track record with high-scrutiny embassies</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-800 text-brand-amber-400 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">600+ Partner Universities</h4>
                <p className="text-xs text-slate-400">Direct global partnerships across 15+ top destinations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Multi-Column Content */}
      <div className="w-11/12 mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group focus:outline-none">
              <div className="bg-white rounded-2xl py-2 px-3.5 inline-flex items-center shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Holy Tours and Global Studies"
                  width={140}
                  height={55}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Follow Us Online
              </span>
              <div className="flex items-center gap-2.5">
                {COMPANY_INFO.socialLinks.map(social => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-brand-amber-500 text-slate-400 hover:text-slate-950 flex items-center justify-center transition-all duration-200 border border-slate-800 hover:border-brand-amber-500 hover:scale-105"
                  >
                    {socialIconMap[social.platform] || <ExternalLink className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Popular Destinations (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Destinations</h3>
            <ul className="space-y-2.5 text-sm">
              {FEATURED_COUNTRIES.map(country => (
                <li key={country.id}>
                  <Link
                    href={`/destinations/${country.slug}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                  >
                    <span className="text-base">{country.flag}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{country.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Consultancy Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-amber-500/70 group-hover:text-brand-amber-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Headquarters</h3>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-amber-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}{' '}
                  {COMPANY_INFO.address.postalCode}, {COMPANY_INFO.address.country}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-amber-400 shrink-0" />
                <span>{COMPANY_INFO.officeHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-brand-amber-500 hover:bg-brand-amber-600 shadow-sm transition-all"
              >
                <span>Book Free Session</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-800/80 bg-brand-navy-950/80 py-6">
        <div className="w-11/12 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Giant Bottom Signature Typography "HOLYTGS" (Half Submerged at the Footer Edge) */}
      <div className="w-full overflow-hidden select-none pointer-events-none flex justify-center bg-brand-navy-950 border-t border-slate-800/40">
        <span className="text-[17vw] font-black tracking-widest text-center leading-[0.56] text-white/[0.08] sm:text-white/[0.12] uppercase pt-2 sm:pt-3 select-none whitespace-nowrap">
          HOLYTGS
        </span>
      </div>
    </footer>
  );
}

