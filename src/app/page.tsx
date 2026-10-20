import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustStatsStrip from '@/components/home/TrustStatsStrip';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import DestinationsSection from '@/components/home/DestinationsSection';

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <TrustStatsStrip />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
    </div>
  );
}
