export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: 'MessageSquare' | 'BookOpen' | 'FileText' | 'Award' | 'ShieldCheck' | 'Plane';
  accentColor: 'teal' | 'blue' | 'amber';
  lineColor: string; // Line segment color in brand palette
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Free counseling',
    description:
      'Tell us your goals — we assess your profile and shortlist countries & universities.',
    iconName: 'MessageSquare',
    accentColor: 'teal',
    lineColor: '#15828A',
  },
  {
    stepNumber: '02',
    title: 'IELTS preparation',
    description:
      'Hit your target band at HolyTGS Language Center with small batches and mock tests.',
    iconName: 'BookOpen',
    accentColor: 'blue',
    lineColor: '#0A3868',
  },
  {
    stepNumber: '03',
    title: 'Applications',
    description:
      'SOP, documents and university applications handled with you, step by step.',
    iconName: 'FileText',
    accentColor: 'amber',
    lineColor: '#F59E0B',
  },
  {
    stepNumber: '04',
    title: 'Offer & scholarship',
    description:
      'We chase offers and scholarships so you get the best possible deal.',
    iconName: 'Award',
    accentColor: 'teal',
    lineColor: '#15828A',
  },
  {
    stepNumber: '05',
    title: 'Visa filing',
    description:
      'Financial docs, interview prep and visa filing with experienced counselors.',
    iconName: 'ShieldCheck',
    accentColor: 'blue',
    lineColor: '#0A3868',
  },
  {
    stepNumber: '06',
    title: 'Fly & settle',
    description:
      'Pre-departure briefing, accommodation and airport guidance.',
    iconName: 'Plane',
    accentColor: 'amber',
    lineColor: '#F59E0B',
  },
];
