'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Restore scroll position on reload if previously scrolled
    try {
      const saved = sessionStorage.getItem('holytgs_scroll_y');
      if (saved) {
        const y = parseFloat(saved);
        if (!isNaN(y) && y > 25) {
          lenis.scrollTo(y, { immediate: true });
        }
      }
    } catch {
      // ignore
    }

    // Save scroll state on beforeunload (sync without scroll-time blocking I/O)
    const handleBeforeUnload = () => {
      try {
        const y = Math.max(0, Math.round(lenis.scroll || window.scrollY || 0));
        sessionStorage.setItem('holytgs_scroll_y', String(y));
        sessionStorage.setItem('holytgs_is_scrolled', y > 25 ? '1' : '0');
      } catch {
        // ignore
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Throttled low-frequency update (at most every 500ms) to keep tab switches updated without jank
    let throttleTimer: ReturnType<typeof setTimeout> | null = null;
    lenis.on('scroll', (e: { scroll: number }) => {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          try {
            const y = Math.max(0, Math.round(e.scroll));
            sessionStorage.setItem('holytgs_scroll_y', String(y));
            sessionStorage.setItem('holytgs_is_scrolled', y > 25 ? '1' : '0');
          } catch {
            // ignore
          }
          throttleTimer = null;
        }, 500);
      }
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (throttleTimer) clearTimeout(throttleTimer);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

