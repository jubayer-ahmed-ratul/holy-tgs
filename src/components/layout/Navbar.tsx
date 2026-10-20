'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  ArrowRight,
  School,
  FileCheck,
  Coins,
  BookCheck,
  Edit3,
  Home as HomeIcon,
  Compass,
  BookOpen,
  Sun,
  Award,
  Globe,
} from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '@/data/mockData';

// Helper icon resolver for dropdown links
const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-4 h-4 text-brand-blue-600" />,
  Compass: <Compass className="w-4 h-4 text-brand-blue-600" />,
  BookOpen: <BookOpen className="w-4 h-4 text-brand-blue-600" />,
  Sun: <Sun className="w-4 h-4 text-brand-amber-500" />,
  Award: <Award className="w-4 h-4 text-brand-blue-600" />,
  Globe: <Globe className="w-4 h-4 text-brand-blue-600" />,
  School: <School className="w-4 h-4 text-brand-blue-600" />,
  FileCheck: <FileCheck className="w-4 h-4 text-brand-blue-600" />,
  Coins: <Coins className="w-4 h-4 text-brand-amber-500" />,
  BookCheck: <BookCheck className="w-4 h-4 text-brand-blue-600" />,
  Edit3: <Edit3 className="w-4 h-4 text-brand-blue-600" />,
  Home: <HomeIcon className="w-4 h-4 text-brand-blue-600" />,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  const lastScrolledRef = useRef(false);

  // Monitor scroll for smooth floating card transition (persisted across reloads without jank)
  useEffect(() => {
    setIsMounted(true);

    const checkScrollState = () => {
      const currentY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;

      let savedScrolled = false;
      try {
        savedScrolled = sessionStorage.getItem('holytgs_is_scrolled') === '1';
      } catch {
        // ignore
      }

      const isNowScrolled = currentY > 25 || savedScrolled;
      if (lastScrolledRef.current !== isNowScrolled) {
        lastScrolledRef.current = isNowScrolled;
        setIsScrolled(isNowScrolled);
      }
    };

    // 1. Check immediately on mount
    checkScrollState();

    // 2. Poll across RAF and timeouts to catch browser / Lenis scroll restoration
    const r1 = requestAnimationFrame(checkScrollState);
    const t1 = setTimeout(checkScrollState, 40);
    const t2 = setTimeout(checkScrollState, 120);
    const t3 = setTimeout(checkScrollState, 280);

    // 3. Confirm scroll position after layout settles (if confirmed at top, reset to static)
    const t4 = setTimeout(() => {
      const finalY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;
      if (finalY <= 25) {
        lastScrolledRef.current = false;
        setIsScrolled(false);
        try {
          sessionStorage.setItem('holytgs_is_scrolled', '0');
          sessionStorage.setItem('holytgs_scroll_y', '0');
        } catch {
          // ignore
        }
      }
    }, 500);

    // 4. Live scroll handler - only executes state and storage update when state actually flips!
    const handleScroll = () => {
      const currentY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;
      const scrolled = currentY > 25;
      if (scrolled !== lastScrolledRef.current) {
        lastScrolledRef.current = scrolled;
        setIsScrolled(scrolled);
        try {
          sessionStorage.setItem('holytgs_is_scrolled', scrolled ? '1' : '0');
        } catch {
          // ignore
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(r1);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileDropdown = (label: string) => {
    setExpandedMobileItem(prev => (prev === label ? null : label));
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Navigation Bar: Transparent over hero image in normal state, floating glassy capsule when scrolled or mobile menu open */}
      <nav
        className={`${
          isMounted
            ? 'transition-[background-color,border-color,box-shadow,padding,margin,border-radius] duration-300 ease-out'
            : 'transition-none'
        } mx-auto ${
          isScrolled || mobileMenuOpen
            ? 'w-11/12 mt-2 sm:mt-2.5 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.08)] py-2 sm:py-2.5 px-3.5 sm:px-7'
            : 'w-11/12 mt-2.5 sm:mt-4 rounded-2xl bg-transparent border-transparent shadow-none py-2 sm:py-3 px-1 sm:px-4'
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none py-0.5"
          >
            <Image
              src="/logo.png"
              alt="Holy Tours and Global Studies"
              width={70}
              height={40}
              priority
              className={`w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] ${
                isScrolled ? 'h-6 sm:h-7.5 lg:h-8.5' : 'h-6.5 sm:h-8.5 lg:h-9.5'
              }`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map(item => {
              const hasChildren = item.children && item.children.length > 0;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                      isScrolled
                        ? 'text-slate-700 hover:text-brand-navy-950 hover:bg-slate-100/70'
                        : 'text-slate-800 hover:text-brand-navy-950 hover:bg-slate-900/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors focus:outline-none ${
                      isScrolled
                        ? activeDropdown === item.label
                          ? 'text-brand-navy-950 bg-slate-100/90'
                          : 'text-slate-700 hover:text-brand-navy-950 hover:bg-slate-100/70'
                        : activeDropdown === item.label
                        ? 'text-brand-navy-950 bg-slate-900/10'
                        : 'text-slate-800 hover:text-brand-navy-950 hover:bg-slate-900/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand-amber-400 text-slate-950 border border-brand-amber-300">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isScrolled
                          ? activeDropdown === item.label
                            ? 'rotate-180 text-brand-navy-950'
                            : 'text-slate-400'
                          : activeDropdown === item.label
                          ? 'rotate-180 text-brand-amber-600'
                          : 'text-slate-500'
                      }`}
                    />
                  </button>

                  {/* Animated Mega Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: 'easeOut' }}
                        className="absolute left-0 top-full pt-2.5 w-[450px] xl:w-[490px] z-50"
                      >
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/90 p-4 grid grid-cols-1 gap-2">
                          {item.children?.map(subItem => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="group/item flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50/90 transition-all border border-transparent hover:border-slate-100"
                            >
                              <div className="p-2 rounded-lg bg-blue-50/80 text-brand-blue-600 group-hover/item:bg-brand-navy-950 group-hover/item:text-brand-amber-400 transition-colors shrink-0">
                                {subItem.icon && iconMap[subItem.icon] ? (
                                  iconMap[subItem.icon]
                                ) : (
                                  <GraduationCap className="w-4 h-4" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-semibold text-slate-900 group-hover/item:text-brand-navy-950">
                                    {subItem.label}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-brand-amber-500 transform group-hover/item:translate-x-1 transition-all" />
                                </div>
                                {subItem.description && (
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1 leading-relaxed">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* CTA & Mobile Hamburger Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href="/contact"
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-xl font-bold text-xs sm:text-sm bg-brand-amber-500 hover:bg-brand-amber-600 text-slate-950 shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/35 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isScrolled ? 'px-4 py-2' : 'px-5 py-2.5'
              }`}
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Hamburger Button for Mobile / Tablet */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`lg:hidden p-2 rounded-xl transition-colors focus:outline-none ${
                isScrolled
                  ? 'text-slate-700 hover:text-brand-navy-950 hover:bg-slate-100'
                  : 'text-slate-800 hover:text-brand-navy-950 hover:bg-slate-900/5'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden mt-2 pt-2 border-t border-slate-200/80 bg-white/95 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl"
            >
              <div className="py-2 space-y-1.5 max-h-[75vh] overflow-y-auto">
                {NAV_LINKS.map(item => {
                  const hasChildren = item.children && item.children.length > 0;

                  if (!hasChildren) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-brand-teal-600 hover:bg-slate-100/80 rounded-xl transition-colors"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  const isExpanded = expandedMobileItem === item.label;

                  return (
                    <div key={item.label} className="rounded-xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="w-full flex items-center justify-between px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-brand-teal-600 hover:bg-slate-100/80 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand-amber-100 text-brand-amber-700 border border-brand-amber-200">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-brand-teal-600' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-slate-50/90 rounded-xl px-2.5 py-1.5 space-y-1 mt-1 ml-2 border-l-2 border-brand-teal-500"
                          >
                            {item.children?.map(sub => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between px-2.5 py-1.5 text-xs text-slate-600 hover:text-brand-navy-950 hover:bg-white rounded-lg transition-colors font-medium"
                              >
                                <span>{sub.label}</span>
                                <ArrowRight className="w-3 h-3 text-slate-400" />
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Mobile Drawer Actions & Contacts */}
                <div className="pt-3 mt-3 border-t border-slate-200/80 space-y-2.5">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-brand-amber-500 hover:bg-brand-amber-600 shadow-sm transition-all"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="bg-slate-50/90 rounded-xl p-3 space-y-1.5 text-[11px] text-slate-600">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="flex items-center gap-2 hover:text-brand-teal-600 font-medium"
                    >
                      <Phone className="w-3 h-3 text-brand-teal-500" />
                      <span>{COMPANY_INFO.phone}</span>
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="flex items-center gap-2 hover:text-brand-teal-600 font-medium"
                    >
                      <Mail className="w-3 h-3 text-brand-teal-500" />
                      <span>{COMPANY_INFO.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
