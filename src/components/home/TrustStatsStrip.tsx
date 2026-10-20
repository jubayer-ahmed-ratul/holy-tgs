'use client';

import React from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ShieldCheck, School, Award, Users } from 'lucide-react';

interface StatItem {
  id: string;
  target: number;
  decimals?: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'visa-success',
    target: 98.5,
    decimals: 1,
    suffix: '%',
    label: 'Visa Success Rate',
    icon: ShieldCheck,
  },
  {
    id: 'partner-universities',
    target: 600,
    decimals: 0,
    suffix: '+',
    label: 'Partner Universities',
    icon: School,
  },
  {
    id: 'years-experience',
    target: 10,
    decimals: 0,
    suffix: '+',
    label: 'Years of Experience',
    icon: Award,
  },
  {
    id: 'students-placed',
    target: 15000,
    decimals: 0,
    suffix: '+',
    label: 'Students Placed',
    icon: Users,
  },
];

/**
 * AnimatedCounter: smoothly rolls numbers from 0 up to target when visible in viewport.
 * Configured with a deliberate, smooth duration so the user can easily observe the increment.
 */
function AnimatedCounter({
  target,
  decimals = 0,
  trigger,
}: {
  target: number;
  decimals?: number;
  trigger: boolean;
}) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!trigger) return;

    // Slow and smooth counter animation (3.6s) so numbers are clearly readable as they rise
    const controls = animate(0, target, {
      duration: 3.6,
      ease: [0.16, 1, 0.3, 1], // Smooth easeOut deceleration curve
      onUpdate: (value) => {
        setCount(value);
      },
    });

    return () => controls.stop();
  }, [trigger, target]);

  return (
    <span>
      {decimals > 0
        ? count.toFixed(decimals)
        : Math.round(count).toLocaleString()}
    </span>
  );
}

export default function TrustStatsStrip() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  // Triggers only when scrolled into view so the user doesn't miss the animation
  const isInView = useInView(containerRef, { once: true, margin: '-30px' });

  return (
    <section className="relative z-20 -mt-12 sm:-mt-16 lg:-mt-20 w-11/12 mx-auto">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0A3868] via-[#0D447D] to-[#0A3868] border border-white/20 shadow-[0_20px_50px_-10px_rgba(10,56,104,0.45)] py-6 sm:py-8 lg:py-8 px-4 sm:px-6 lg:px-8"
      >
        {/* Subtle Ambient Brand Glows */}
        <div className="absolute -top-20 -right-20 w-56 h-56 bg-brand-teal-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-brand-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* 4-Stat Grid: 2x2 on Mobile with Crosshair divider, 4-Columns on Desktop with Vertical dividers */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4">
          {STATS_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`relative flex flex-col items-center text-center px-3 py-3 sm:py-4 lg:py-2 transition-all duration-300 group
                  ${index % 2 === 0 ? 'border-r border-white/10 lg:border-r-0' : ''}
                  ${index < 2 ? 'border-b border-white/10 lg:border-b-0 pb-4 sm:pb-5 lg:pb-1' : 'pt-4 sm:pt-5 lg:pt-1'}
                  ${index < 3 ? 'lg:border-r lg:border-white/15' : ''}
                `}
              >
                {/* Icon Capsule with Brand Teal Styling */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-teal-500/15 border border-brand-teal-400/25 flex items-center justify-center mb-2.5 sm:mb-3 text-brand-teal-400 group-hover:scale-110 group-hover:bg-brand-teal-500/25 group-hover:text-teal-300 transition-all duration-300 shadow-inner">
                  <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </div>

                {/* Big Stat Value with Animated Counter & Teal Suffix */}
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-black text-white tracking-tight leading-tight mb-1 sm:mb-1.5 font-sans">
                  <AnimatedCounter
                    target={item.target}
                    decimals={item.decimals}
                    trigger={isInView}
                  />
                  <span className="text-brand-teal-400 ml-0.5">{item.suffix}</span>
                </div>

                {/* Clean English Label */}
                <div className="text-xs sm:text-sm font-semibold text-blue-100 tracking-wide">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
