export interface DestinationItem {
  id: string;
  name: string;
  code: string;
  flag: string;
  tagline: string;
  universitiesCount: number;
  postStudyWork: string;
  image: string;
  link: string;
}

export const POPULAR_DESTINATIONS: DestinationItem[] = [
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'UK',
    flag: '🇬🇧',
    tagline: 'World-renowned Russell Group universities with 2-year post-study work rights.',
    universitiesCount: 130,
    postStudyWork: '2-Year PSW Visa',
    image: '/images/destinations/uk.jpg',
    link: '/destinations/uk',
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    tagline: 'Top academic quality, affordable education, and generous up to 3-year PGWP options.',
    universitiesCount: 95,
    postStudyWork: 'Up to 3-Year PGWP',
    image: '/images/destinations/canada.jpg',
    link: '/destinations/canada',
  },
  {
    id: 'usa',
    name: 'United States',
    code: 'USA',
    flag: '🇺🇸',
    tagline: 'Global leader in technology and research with up to 3-year STEM OPT extensions.',
    universitiesCount: 250,
    postStudyWork: '3-Year STEM OPT',
    image: '/images/destinations/usa.jpg',
    link: '/destinations/usa',
  },
];

