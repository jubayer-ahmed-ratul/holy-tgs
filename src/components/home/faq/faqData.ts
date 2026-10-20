export interface FaqItem {
  id: string;
  category: 'admissions' | 'visa' | 'scholarship' | 'general';
  categoryLabel: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    categoryLabel: 'General',
    question: 'How do I start my study abroad application with HolyTGS?',
    answer:
      'You can schedule a free 1-on-1 counseling session online or visit our office. Our certified counselor will evaluate your academic history, English proficiency, budget, and long-term career aspirations to build a personalized admissions roadmap.',
  },
  {
    id: 'faq-2',
    category: 'admissions',
    categoryLabel: 'Admissions',
    question: 'Can I apply for admission without an IELTS or PTE score?',
    answer:
      'Yes! Many universities in the UK, Canada, and USA offer conditional admission letters while you prepare for your English test. Our in-house HolyTGS Language Center also offers fast-track prep batches to help you secure your required band score.',
  },
  {
    id: 'faq-3',
    category: 'visa',
    categoryLabel: 'Visa & Embassy',
    question: 'What is HolyTGS’s visa success rate and how do you achieve it?',
    answer:
      'We maintain an outstanding 98.5% visa success rate. We achieve this through meticulous document vetting, strict adherence to embassy financial requirements, and intensive one-on-one embassy mock interview simulations.',
  },
  {
    id: 'faq-4',
    category: 'scholarship',
    categoryLabel: 'Scholarships',
    question: 'Are scholarships available for undergraduate and master’s programs?',
    answer:
      'Absolutely. Most of our 600+ partner universities offer automatic merit scholarships ranging from 10% to 50% tuition reduction. For competitive full-tuition awards, our editorial team assists with outstanding SOPs and scholarship essays.',
  },
  {
    id: 'faq-5',
    category: 'general',
    categoryLabel: 'Living & Work',
    question: 'Can I work part-time while studying abroad as an international student?',
    answer:
      'Yes. In destinations like the UK, Canada, Australia, and Germany, international students are legally allowed to work up to 20-24 hours per week during academic semesters, and full-time during official semester breaks.',
  },
  {
    id: 'faq-6',
    category: 'admissions',
    categoryLabel: 'Timeline',
    question: 'How long does the entire admission and visa process take?',
    answer:
      'Typically, the entire process takes 2 to 4 months from university application to visa issuance. However, to access the best scholarship pools and avoid last-minute rush, we recommend starting 4 to 6 months before your target intake.',
  },
  {
    id: 'faq-7',
    category: 'general',
    categoryLabel: 'Fees',
    question: 'Does HolyTGS charge for initial counseling?',
    answer:
      'No. Our initial academic profile evaluation, university shortlisting, and general counseling are 100% free. We also help qualify students for university application fee waivers where available.',
  },
  {
    id: 'faq-8',
    category: 'visa',
    categoryLabel: 'Support',
    question: 'Does HolyTGS provide accommodation and flight booking support?',
    answer:
      'Yes! Our sister concern Holy Tours & Travels coordinates discounted student airfares with extra luggage allowances, and our student services team assists in booking safe, verified university dorms or private student apartments.',
  },
];

