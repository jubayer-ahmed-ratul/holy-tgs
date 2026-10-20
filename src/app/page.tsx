import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustStatsStrip from '@/components/home/TrustStatsStrip';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import DestinationsSection from '@/components/home/DestinationsSection';
import UniversitiesSection from '@/components/home/UniversitiesSection';
import ProcessSection from '@/components/home/ProcessSection';
import PartnersSection from '@/components/home/PartnersSection';
import GallerySection from '@/components/home/GallerySection';
import FaqSection from '@/components/home/FaqSection';
import SisterConcernsSection from '@/components/home/SisterConcernsSection';

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <TrustStatsStrip />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
      <UniversitiesSection />
      <ProcessSection />
      <PartnersSection />
      <GallerySection />
      <FaqSection />
      <SisterConcernsSection />
    </div>
  );
}
