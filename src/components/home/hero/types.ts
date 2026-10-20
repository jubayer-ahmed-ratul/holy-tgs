import React from 'react';

export interface HeroSlide {
  id: number;
  badge: string;
  title: string;
  highlightedText: string;
  description: string;
  image: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

export interface ServiceCardItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  hoverBorderColor: string;
  iconColor: string;
  iconBgColor: string;
}

