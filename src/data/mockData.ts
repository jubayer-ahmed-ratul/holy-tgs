import {
  CompanyInfo,
  NavLink,
  ConsultancyService,
  FeaturedCountry,
  StatisticItem,
  Testimonial,
  ValueProposition,
  FaqItem,
} from '../types';

export const COMPANY_INFO: CompanyInfo = {
  name: 'HolyTGS Global Education & Immigration Services',
  shortName: 'HolyTGS',
  tagline: 'Empowering Your Global Academic Dreams',
  description:
    'HolyTGS is a premier study abroad consultancy dedicated to helping students secure admissions and visas at top-tier universities across the UK, Canada, USA, Australia, Germany, and Europe.',
  phone: '+1 (800) 456-7890',
  secondaryPhone: '+1 (800) 987-6543',
  email: 'admissions@holytgs.com',
  address: {
    street: '742 Evergreen Terrace, Suite 400',
    city: 'New York',
    state: 'NY',
    country: 'United States',
    postalCode: '10001',
  },
  officeHours: 'Mon - Fri: 9:00 AM - 6:00 PM | Sat: 10:00 AM - 3:00 PM',
  socialLinks: [
    {
      platform: 'facebook',
      label: 'Facebook',
      url: 'https://facebook.com/holytgs',
      icon: 'Facebook',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/company/holytgs',
      icon: 'Linkedin',
    },
    {
      platform: 'instagram',
      label: 'Instagram',
      url: 'https://instagram.com/holytgs',
      icon: 'Instagram',
    },
    {
      platform: 'youtube',
      label: 'YouTube',
      url: 'https://youtube.com/@holytgs',
      icon: 'Youtube',
    },
    {
      platform: 'whatsapp',
      label: 'WhatsApp',
      url: 'https://wa.me/18004567890',
      icon: 'MessageSquare',
    },
  ],
};

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Destinations',
    href: '/destinations',
    badge: 'Popular',
    children: [
      {
        label: 'Study in the UK',
        href: '/destinations/uk',
        description: 'World-renowned Russell Group universities with 2-year post-study work rights.',
        icon: 'GraduationCap',
      },
      {
        label: 'Study in Canada',
        href: '/destinations/canada',
        description: 'Top academic quality, affordable education, and generous PGWP opportunities.',
        icon: 'Compass',
      },
      {
        label: 'Study in the USA',
        href: '/destinations/usa',
        description: 'Global leader in technology and research with up to 3-year STEM OPT.',
        icon: 'BookOpen',
      },
      {
        label: 'Study in Australia',
        href: '/destinations/australia',
        description: 'Vibrant student lifestyle with Group of Eight universities and post-study visas.',
        icon: 'Sun',
      },
      {
        label: 'Study in Germany',
        href: '/destinations/germany',
        description: 'Zero to low tuition fees at public universities and strong industrial ties.',
        icon: 'Award',
      },
      {
        label: 'Study in Ireland',
        href: '/destinations/ireland',
        description: 'The European tech hub with welcoming communities and high graduate employability.',
        icon: 'Globe',
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'University Admission Counseling',
        href: '/services/admissions',
        description: 'Personalized profiling to match you with top-fit global universities.',
        icon: 'School',
      },
      {
        label: 'Student Visa Filing & Mock Interviews',
        href: '/services/visa-consultancy',
        description: '98.5% visa success rate with meticulous documentation and mock drills.',
        icon: 'FileCheck',
      },
      {
        label: 'Scholarships & Financial Aid',
        href: '/services/scholarships',
        description: 'Unlock merit-based and need-based global scholarship grants.',
        icon: 'Coins',
      },
      {
        label: 'Test Prep (IELTS / PTE / GRE)',
        href: '/services/test-prep',
        description: 'Targeted coaching from certified trainers to achieve required target bands.',
        icon: 'BookCheck',
      },
      {
        label: 'SOP & Resume Editing',
        href: '/services/sop-review',
        description: 'Professional review by native academic editors to maximize acceptance.',
        icon: 'Edit3',
      },
      {
        label: 'Pre-Departure & Accommodation',
        href: '/services/pre-departure',
        description: 'Briefings, airport pickup coordination, and trusted student housing.',
        icon: 'Home',
      },
    ],
  },
  {
    label: 'Universities',
    href: '/universities',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const SERVICES: ConsultancyService[] = [
  {
    id: 'university-selection',
    title: 'University & Course Profiling',
    slug: 'university-selection',
    shortDescription:
      'Data-backed course matching tailored to your academic background, budget, and future career objectives.',
    description:
      'Choosing the right university and degree program is the most critical decision of your academic journey. Our certified education counselors analyze your academic transcripts, budget, target destination, and long-term career aspirations to curate a shortlist of ambitious, target, and safe universities with high acceptance probabilities.',
    icon: 'School',
    isPopular: true,
    features: [
      'Profile evaluation and career pathway mapping',
      'Shortlisting of accredited global universities',
      'Tuition fee and cost of living comparisons',
      'Application fee waiver assistance where available',
    ],
    processSteps: [
      { step: 1, title: 'Profile Analysis', description: 'Comprehensive review of your grades and career ambitions.' },
      { step: 2, title: 'Course Shortlisting', description: 'Curating 5-8 ideal programs across target countries.' },
      { step: 3, title: 'Application Dispatch', description: 'Submitting polished applications directly to admissions.' },
    ],
  },
  {
    id: 'visa-assistance',
    title: 'Visa Guidance & Mock Interviews',
    slug: 'visa-assistance',
    shortDescription:
      'End-to-end visa filing support with expert documentation audits and one-on-one simulated embassy interviews.',
    description:
      'Student visa regulations vary widely across countries and change frequently. Our seasoned immigration experts guide you step-by-step through bank statements, sponsor affidavits, health insurance, and embassy appointments. We conduct realistic mock interview simulations to eliminate anxiety and ensure compliance.',
    icon: 'FileCheck',
    badge: '98.5% Success',
    isPopular: true,
    features: [
      'Comprehensive financial documentation audit',
      'Visa application form filling & scheduling',
      'Simulated mock embassy interview sessions',
      'Biometrics and health checkup coordination',
    ],
    processSteps: [
      { step: 1, title: 'Document Checklist', description: 'Issuing country-specific, personalized checklists.' },
      { step: 2, title: 'File Scrutiny', description: 'Multi-tiered inspection to avoid common refusal traps.' },
      { step: 3, title: 'Mock Drill', description: 'Intensive interview drills with certified visa officers.' },
    ],
  },
  {
    id: 'scholarship-aid',
    title: 'Scholarship & Funding Aid',
    slug: 'scholarship-aid',
    shortDescription:
      'Maximize your chances of securing institutional, departmental, and government-funded international grants.',
    description:
      'Higher education abroad is a major financial investment. We connect you with merit-based scholarships, tuition discount bursaries, research assistantships, and external philanthropic funds to significantly lighten your financial load.',
    icon: 'Coins',
    features: [
      'Identification of eligible grants and deadlines',
      'Tailored scholarship essay assistance',
      'Student education loan guidance with partner banks',
      'Tuition deposit payment advisory',
    ],
  },
  {
    id: 'test-preparation',
    title: 'English Test Prep (IELTS / PTE)',
    slug: 'test-preparation',
    shortDescription:
      'Rigorous test preparation with certified instructors, weekly mock exams, and personalized score diagnostics.',
    description:
      'Achieving high band scores in English proficiency tests like IELTS, PTE, or TOEFL opens the door to top-ranked institutions and scholarship opportunities. Benefit from structured batches, one-on-one speaking mock tests, and actionable feedback.',
    icon: 'BookCheck',
    features: [
      'Official test curriculum and practice materials',
      'Weekly computer-delivered mock tests',
      '1-on-1 speaking evaluation and writing band diagnostics',
      'Flexible online and in-person classroom batches',
    ],
  },
  {
    id: 'sop-editorial',
    title: 'SOP, Resume & Essay Editorial',
    slug: 'sop-editorial',
    shortDescription:
      'Turn your personal story into an irresistible narrative with our team of Ivy League academic editors.',
    description:
      'Your Statement of Purpose (SOP) and Letters of Recommendation (LOR) are your voice before the admissions committee. We help craft your story, emphasize unique strengths, address academic gaps, and eliminate grammatical errors while maintaining your authentic personal voice.',
    icon: 'Edit3',
    features: [
      'Line-by-line developmental editing and proofreading',
      'Plagiarism checks and structural reviews',
      'Tailored academic CV formatting',
      'Recommendation letter guidance for professors & managers',
    ],
  },
  {
    id: 'predeparture-housing',
    title: 'Pre-Departure & Accommodation',
    slug: 'predeparture-housing',
    shortDescription:
      'Smooth transition into your new home with student accommodation booking, foreign exchange, and briefings.',
    description:
      'Receiving your visa is just the beginning. We prepare you thoroughly for your new life with cultural adaptation seminars, verified student accommodation arrangements, foreign exchange (Forex) cards, and airport reception support.',
    icon: 'Home',
    features: [
      'Verified on-campus and private student dorm booking',
      'Student SIM card and international Forex card support',
      'Flight ticket booking guidance and baggage allowances',
      'Alumni networking and community groups',
    ],
  },
];

export const FEATURED_COUNTRIES: FeaturedCountry[] = [
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'UK',
    flag: '🇬🇧',
    slug: 'uk',
    tagline: 'World-Class Academic Legacy & 2-Year Graduate Visa',
    description:
      'Home to Oxford, Cambridge, and prestigious Russell Group universities, the UK provides 1-year master’s programs, cutting-edge research, and post-study work rights.',
    coverImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    popularUniversitiesCount: 130,
    featuredUniversities: [
      'University of Oxford',
      'Imperial College London',
      'University of Manchester',
      'University of Edinburgh',
      'King’s College London',
    ],
    popularCourses: ['Business Analytics', 'Data Science & AI', 'Law', 'Finance', 'Engineering'],
    intakes: ['September (Major)', 'January (Secondary)'],
    postStudyWorkVisa: '2 Years (3 Years for PhD graduates)',
    requirements: {
      ieltsRequirement: '6.0 - 7.0 Overall',
      gpaRequirement: 'Minimum 55% - 65% in Bachelor’s',
      workPermitDuration: '24 Months Post-Study',
      avgTuitionPerYear: '£14,000 - £26,000',
      avgLivingCostPerYear: '£9,000 - £12,000',
    },
    isPopular: true,
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    slug: 'canada',
    tagline: 'World-Class Quality of Life & Up to 3-Year PGWP',
    description:
      'Renowned for its welcoming culture, multicultural cities, and high post-graduation employment rates, Canada remains a top destination for ambitious international students.',
    coverImage: 'https://images.unsplash.com/photo-1517935703635-27c946dfbfaf?auto=format&fit=crop&w=1200&q=80',
    popularUniversitiesCount: 95,
    featuredUniversities: [
      'University of Toronto',
      'UBC (University of British Columbia)',
      'McGill University',
      'University of Waterloo',
      'McMaster University',
    ],
    popularCourses: ['Computer Science', 'Biotechnology', 'Supply Chain Management', 'Civil Engineering'],
    intakes: ['September (Fall)', 'January (Winter)', 'May (Spring)'],
    postStudyWorkVisa: 'Up to 3 Years PGWP',
    requirements: {
      ieltsRequirement: '6.5 Overall (No band < 6.0)',
      gpaRequirement: 'Minimum 60% or 3.0/4.0 GPA',
      workPermitDuration: 'Up to 36 Months',
      avgTuitionPerYear: 'CAD $18,000 - $35,000',
      avgLivingCostPerYear: 'CAD $12,000 - $16,000',
    },
    isPopular: true,
  },
  {
    id: 'usa',
    name: 'United States',
    code: 'USA',
    flag: '🇺🇸',
    slug: 'usa',
    tagline: 'Global Leader in Innovation & 3-Year STEM OPT',
    description:
      'The premier destination for academic research, technological advancement, and career acceleration, offering unmatched campus diversity and generous research grants.',
    coverImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80',
    popularUniversitiesCount: 250,
    featuredUniversities: [
      'MIT',
      'Stanford University',
      'Columbia University',
      'University of California, Berkeley',
      'New York University (NYU)',
    ],
    popularCourses: ['Artificial Intelligence', 'MBA & Finance', 'Robotics', 'Public Health', 'Data Analytics'],
    intakes: ['Fall (August/September)', 'Spring (January)'],
    postStudyWorkVisa: '1 Year OPT + 24-Month STEM Extension (Total 3 Years)',
    requirements: {
      ieltsRequirement: '6.5 - 7.5 (TOEFL 85-100+)',
      gpaRequirement: '3.0 / 4.0 or 65%+',
      workPermitDuration: '12 to 36 Months',
      avgTuitionPerYear: '$22,000 - $48,000',
      avgLivingCostPerYear: '$12,000 - $18,000',
    },
    isPopular: true,
  },
  {
    id: 'australia',
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    slug: 'australia',
    tagline: 'High Standard of Living & Generous Work Rights',
    description:
      'World-ranked institutions situated in stunning coastal cities with a high standard of living, flexible study paths, and excellent post-study career opportunities.',
    coverImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
    popularUniversitiesCount: 42,
    featuredUniversities: [
      'University of Melbourne',
      'University of Sydney',
      'Australian National University',
      'UNSW Sydney',
      'University of Queensland',
    ],
    popularCourses: ['Information Technology', 'Nursing & Healthcare', 'Civil Engineering', 'Hospitality & Tourism'],
    intakes: ['February (Semester 1)', 'July (Semester 2)'],
    postStudyWorkVisa: '2 to 4 Years (depending on qualification & location)',
    requirements: {
      ieltsRequirement: '6.5 Overall (PTE 58+)',
      gpaRequirement: '60% or above',
      workPermitDuration: '24 to 48 Months',
      avgTuitionPerYear: 'AUD $25,000 - $42,000',
      avgLivingCostPerYear: 'AUD $18,000 - $24,000',
    },
    isPopular: true,
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    slug: 'germany',
    tagline: 'Tuition-Free Public Education & Europe’s Industrial Powerhouse',
    description:
      'Most public universities in Germany charge zero tuition fees for international students. Benefit from world-class engineering, high innovation, and an 18-month job seeker visa.',
    coverImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
    popularUniversitiesCount: 50,
    featuredUniversities: [
      'Technical University of Munich (TUM)',
      'LMU Munich',
      'Heidelberg University',
      'RWTH Aachen University',
      'TU Berlin',
    ],
    popularCourses: ['Mechanical Engineering', 'Automotive Engineering', 'Computer Science', 'Renewable Energy'],
    intakes: ['Winter (October - Main)', 'Summer (April)'],
    postStudyWorkVisa: '18 Months Job Seeking Visa',
    requirements: {
      ieltsRequirement: '6.5 (or German B2/C1 for German-taught programs)',
      gpaRequirement: 'Minimum 70% or German GPA 2.5',
      workPermitDuration: '18 Months Post-Study',
      avgTuitionPerYear: '€0 - €3,000 (Nominal semester fee)',
      avgLivingCostPerYear: '€11,208 (Blocked Account Requirement)',
    },
    isPopular: false,
  },
  {
    id: 'ireland',
    name: 'Ireland',
    code: 'IE',
    flag: '🇮🇪',
    slug: 'ireland',
    tagline: 'European Silicon Valley & 2-Year Third Level Graduate Scheme',
    description:
      'English-speaking European destination hosting European headquarters of Google, Apple, Meta, and Pfizer. Ideal for tech, pharmaceuticals, and finance careers.',
    coverImage: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=1200&q=80',
    popularUniversitiesCount: 25,
    featuredUniversities: [
      'Trinity College Dublin',
      'University College Dublin (UCD)',
      'University of Galway',
      'University College Cork',
      'Dublin City University (DCU)',
    ],
    popularCourses: ['Software Engineering', 'Pharmaceutical Sciences', 'Data Analytics', 'Fintech'],
    intakes: ['Autumn (September)', 'Spring (January/February)'],
    postStudyWorkVisa: '2 Years for Master’s Graduates',
    requirements: {
      ieltsRequirement: '6.5 Overall',
      gpaRequirement: '60% or above',
      workPermitDuration: '24 Months',
      avgTuitionPerYear: '€12,000 - €22,000',
      avgLivingCostPerYear: '€10,000 - €14,000',
    },
    isPopular: false,
  },
];

export const STATISTICS: StatisticItem[] = [
  {
    id: 'success-rate',
    value: '98.5%',
    numericValue: 98.5,
    suffix: '%',
    label: 'Visa Success Rate',
    description: 'Industry-leading approval rate across high-scrutiny embassies',
    icon: 'ShieldCheck',
  },
  {
    id: 'students-placed',
    value: '12,500+',
    numericValue: 12500,
    suffix: '+',
    label: 'Students Enrolled',
    description: 'Proud alumni studying in 15+ countries around the globe',
    icon: 'GraduationCap',
  },
  {
    id: 'partner-universities',
    value: '600+',
    numericValue: 600,
    suffix: '+',
    label: 'Partner Universities',
    description: 'Direct institutional partnerships with fast-tracked admissions',
    icon: 'School',
  },
  {
    id: 'scholarships-secured',
    value: '$15M+',
    numericValue: 15,
    suffix: 'M+',
    label: 'Scholarships Awarded',
    description: 'Total merit scholarship grants won for our students to date',
    icon: 'Award',
  },
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    id: 'certified-counselors',
    title: 'Certified Global Counselors',
    description:
      'All our counselors hold British Council, ICEF, and USATC accreditations, ensuring 100% genuine and ethical guidance.',
    icon: 'BadgeCheck',
  },
  {
    id: 'transparent-process',
    title: '100% Transparent Tracking',
    description:
      'Track your application milestones, university communications, and visa filings with absolute clarity and zero hidden charges.',
    icon: 'Sparkles',
  },
  {
    id: 'fast-admissions',
    title: 'Priority Offer Letters',
    description:
      'Thanks to direct institutional tie-ups, our students receive admission offers up to 3x faster than standard application queues.',
    icon: 'Zap',
  },
  {
    id: 'end-to-end',
    title: 'End-to-End Handholding',
    description:
      'From initial profile evaluation to university application, visa approval, student flight, and foreign dorm check-in.',
    icon: 'HeartHandshake',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    studentName: 'Ayesha Rahman',
    studentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    country: 'United Kingdom',
    countryCode: 'UK',
    university: 'University of Manchester',
    degree: 'MSc Data Science',
    intake: 'September 2024',
    rating: 5,
    review:
      'HolyTGS made the daunting process of applying to UK universities effortless. They audited my SOP thoroughly and helped me secure a £5,000 international scholarship. My visa was approved in just 9 days!',
    visaGrantedDate: 'August 2024',
  },
  {
    id: '2',
    studentName: 'Tanvir Hossain',
    studentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    country: 'Canada',
    countryCode: 'CA',
    university: 'University of Waterloo',
    degree: 'Master of Engineering (ECE)',
    intake: 'January 2024',
    rating: 5,
    review:
      'The visa guidance team at HolyTGS is in a league of their own. They meticulously checked my financial documents and conducted two realistic mock visa drills that boosted my confidence immensely.',
    visaGrantedDate: 'November 2023',
  },
  {
    id: '3',
    studentName: 'Samira Patel',
    studentAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    country: 'Australia',
    countryCode: 'AU',
    university: 'University of Melbourne',
    degree: 'Master of International Business',
    intake: 'February 2024',
    rating: 5,
    review:
      'I was confused between Canada and Australia. The counselors broke down tuition costs, post-study work rights, and permanent residency options clearly. I could not be happier with my decision!',
    visaGrantedDate: 'December 2023',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'How do I start my study abroad application with HolyTGS?',
    answer:
      'You can schedule a free 1-on-1 counseling session through our website or visit our office. Our counselor will assess your academic background, test scores, budget, and career goals to prepare a customized application roadmap.',
  },
  {
    id: 'faq-2',
    category: 'admissions',
    question: 'Can I apply if I have not taken IELTS or PTE yet?',
    answer:
      'Yes! Many universities issue conditional offer letters while you prepare for your English language test. Our in-house training program can also help you prepare to achieve your target band before your visa submission.',
  },
  {
    id: 'faq-3',
    category: 'visa',
    question: 'What is your visa success rate and how do you achieve it?',
    answer:
      'Our visa success rate stands at 98.5%. We achieve this through meticulous document vetting, ensuring strict compliance with embassy financial proof requirements, and conducting rigorous one-on-one mock interview sessions.',
  },
  {
    id: 'faq-4',
    category: 'scholarship',
    question: 'Are international scholarships available for undergraduate and master’s programs?',
    answer:
      'Absolutely. Most partner universities provide automatic merit awards ranging from 10% to 50% tuition reduction. For competitive full-ride scholarships, we assist students in drafting stellar motivation essays and meeting early priority deadlines.',
  },
  {
    id: 'faq-5',
    category: 'visa',
    question: 'Can I work while studying abroad as an international student?',
    answer:
      'Yes, in destinations like the UK, Canada, Australia, and Germany, international students are permitted to work up to 20-24 hours per week during term time and full-time during official vacation breaks.',
  },
];

