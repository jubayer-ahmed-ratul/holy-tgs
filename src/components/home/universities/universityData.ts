export interface UniversityItem {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  flag: string;
  city: string;
  rankBadge: string;
  rankNumber: string;
  intakes: string;
  ielts: string;
  acceptance: string;
  tags: string[];
  image: string;
  link: string;
}

export const TOP_UNIVERSITIES: UniversityItem[] = [
  {
    id: 'oxford',
    name: 'University of Oxford',
    country: 'United Kingdom',
    countryCode: 'UK',
    flag: '🇬🇧',
    city: 'Oxford, England',
    rankBadge: 'QS World Rank #3',
    rankNumber: '#3',
    intakes: 'October Intake',
    ielts: '7.0+ IELTS',
    acceptance: '98.5 Global Score',
    tags: ['Computer Science', 'PPE & Economics', 'Law'],
    image: '/images/universities/oxford.jpg',
    link: '/universities#oxford',
  },
  {
    id: 'toronto',
    name: 'University of Toronto',
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    city: 'Toronto, Ontario',
    rankBadge: 'QS World Rank #21',
    rankNumber: '#21',
    intakes: 'Sept & Jan Intakes',
    ielts: '6.5+ IELTS',
    acceptance: '#1 in Canada',
    tags: ['AI & Data Science', 'Rotman MBA', 'Engineering'],
    image: '/images/universities/toronto.jpg',
    link: '/universities#toronto',
  },
  {
    id: 'harvard',
    name: 'Harvard University',
    country: 'United States',
    countryCode: 'USA',
    flag: '🇺🇸',
    city: 'Cambridge, Massachusetts',
    rankBadge: 'QS World Rank #4',
    rankNumber: '#4',
    intakes: 'Fall & Spring',
    ielts: '7.0+ / TOEFL 100+',
    acceptance: 'Ivy League Elite',
    tags: ['Computer Science', 'Business & MBA', 'Public Health'],
    image: '/images/universities/harvard.jpg',
    link: '/universities#harvard',
  },
  {
    id: 'melbourne',
    name: 'University of Melbourne',
    country: 'Australia',
    countryCode: 'AU',
    flag: '🇦🇺',
    city: 'Melbourne, Victoria',
    rankBadge: 'QS World Rank #13',
    rankNumber: '#13',
    intakes: 'Feb & July Intakes',
    ielts: '6.5+ IELTS',
    acceptance: '#1 in Australia',
    tags: ['FinTech & Finance', 'Biomedical', 'Engineering'],
    image: '/images/universities/melbourne.jpg',
    link: '/universities#melbourne',
  },
  {
    id: 'munich',
    name: 'Technical University of Munich',
    country: 'Germany',
    countryCode: 'DE',
    flag: '🇩🇪',
    city: 'Munich, Bavaria',
    rankBadge: 'QS World Rank #28',
    rankNumber: '#28',
    intakes: 'Winter & Summer',
    ielts: 'Zero/Low Tuition',
    acceptance: '#1 in Germany',
    tags: ['Robotics & AI', 'Automotive Eng', 'Informatics'],
    image: '/images/universities/munich.jpg',
    link: '/universities#munich',
  },
];
