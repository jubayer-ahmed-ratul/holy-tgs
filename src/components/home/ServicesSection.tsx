"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HOME_SERVICES } from "./services/servicesData";
import ServiceCard from "./services/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden border-t border-slate-200/70">
      {/* Background Subtle Accent Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-11/12 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
            <span className="text-brand-teal-500">Our</span> Services
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            From preliminary career profiling and university admissions to
            student visa filing, ticket booking, and destination airport
            reception—we accompany you every single step.
          </p>
        </div>

        {/* 8-Card Dynamic Grid (4 columns on desktop, 2 on mobile & tablet) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
          {HOME_SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Conversion Banner with Hero-styled Amber Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0A3868] via-[#0D447D] to-[#0A3868] p-8 sm:p-10 text-white shadow-xl shadow-[#0A3868]/20 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Subtle Ambient Light Orbs inside banner */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-teal-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-brand-amber-400/15 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 text-center md:text-left space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal-300 uppercase tracking-wider">
              <span>Personalized Student Support</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Ready to Kickstart Your Global Education Journey?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed font-normal">
              Book a 100% free, confidential counseling session with our
              certified counselors today.
            </p>
          </div>

          {/* Right Action Button (Matching Hero Primary Amber CTA) */}
          <div className="relative z-10 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base bg-brand-amber-500 hover:bg-brand-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 active:scale-[0.98] transition-all duration-300 text-center group"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
