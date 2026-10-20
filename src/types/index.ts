/**
 * Core TypeScript definitions for HolyTGS Study Abroad Consultancy Platform
 */

// ============================================================================
// Navigation & Global UI Types
// ============================================================================

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  icon?: string;
  children?: NavLink[];
  isExternal?: boolean;
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'whatsapp';
  label: string;
  url: string;
  icon: string;
}

// ============================================================================
// Consultancy Services Types
// ============================================================================

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ConsultancyService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  processSteps?: ServiceProcessStep[];
}

// ============================================================================
// Country & Study Destination Types
// ============================================================================

export interface CountryRequirements {
  ieltsRequirement: string;
  gpaRequirement: string;
  workPermitDuration: string;
  avgTuitionPerYear: string;
  avgLivingCostPerYear: string;
}

export interface FeaturedCountry {
  id: string;
  name: string;
  code: string;
  flag: string;
  slug: string;
  tagline: string;
  description: string;
  coverImage: string;
  popularUniversitiesCount: number;
  featuredUniversities: string[];
  popularCourses: string[];
  intakes: string[];
  postStudyWorkVisa: string;
  requirements: CountryRequirements;
  isPopular?: boolean;
}

// ============================================================================
// Testimonials & Social Proof Types
// ============================================================================

export interface Testimonial {
  id: string;
  studentName: string;
  studentAvatar: string;
  country: string;
  countryCode: string;
  university: string;
  degree: string;
  intake: string;
  rating: number;
  review: string;
  visaGrantedDate?: string;
}

// ============================================================================
// Statistics & Achievements Types
// ============================================================================

export interface StatisticItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description?: string;
  icon?: string;
}

// ============================================================================
// Features & Value Proposition Types
// ============================================================================

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ============================================================================
// FAQs Types
// ============================================================================

export type FaqCategory = 'general' | 'admissions' | 'visa' | 'scholarship';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

// ============================================================================
// Company Information & Contact Types
// ============================================================================

export interface CompanyAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string;
  secondaryPhone?: string;
  email: string;
  address: CompanyAddress;
  officeHours: string;
  socialLinks: SocialLink[];
}

// ============================================================================
// Consultation Lead & Booking Types
// ============================================================================

export type StudyLevel = 'bachelors' | 'masters' | 'phd' | 'diploma' | 'foundation';

export type EnglishTestStatus = 'not_taken' | 'ielts' | 'toefl' | 'pte' | 'duolingo';

export interface ConsultationRequest {
  fullName: string;
  email: string;
  phone: string;
  preferredCountry: string;
  studyLevel: StudyLevel;
  targetIntake: string;
  englishTestStatus: EnglishTestStatus;
  testScore?: string;
  notes?: string;
}

