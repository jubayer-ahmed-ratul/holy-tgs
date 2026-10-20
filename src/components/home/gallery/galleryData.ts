export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'visa' | 'counseling' | 'campus';
  categoryLabel: string;
  image: string;
  caption: string;
  location: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-1',
    title: 'Visa Success Celebrations',
    category: 'visa',
    categoryLabel: 'Visa Approval',
    image: '/images/about/about-3.jpg',
    caption: 'Celebrating unconditional visa grants for our Fall semester batch.',
    location: 'HolyTGS Headquarters',
  },
  {
    id: 'g-2',
    title: '1-on-1 Profile Counseling',
    category: 'counseling',
    categoryLabel: 'Admissions Advisory',
    image: '/images/about/about-2.jpg',
    caption: 'Expert advisors matching students to top-tier global universities.',
    location: 'Advisory Lounge',
  },
  {
    id: 'g-3',
    title: 'IELTS Mastery & Mock Drills',
    category: 'counseling',
    categoryLabel: 'Language Center',
    image: '/images/about/about-1.jpg',
    caption: 'Small batch prep and intensive speaking sessions for target bands.',
    location: 'HolyTGS Language Center',
  },
  {
    id: 'g-4',
    title: 'Campus Life in Canada',
    category: 'campus',
    categoryLabel: 'Student Life',
    image: '/images/destinations/canada.jpg',
    caption: 'Our students settling happily at University of Toronto and UBC.',
    location: 'Toronto & Vancouver',
  },
  {
    id: 'g-5',
    title: 'UK University Admissions',
    category: 'campus',
    categoryLabel: 'Russell Group',
    image: '/images/destinations/uk.jpg',
    caption: 'Direct admissions and post-study work visa briefings for the UK.',
    location: 'London & Oxford',
  },
  {
    id: 'g-6',
    title: 'Pre-Departure Orientation',
    category: 'visa',
    categoryLabel: 'Pre-Departure',
    image: '/images/destinations/usa.jpg',
    caption: 'Essential packing, currency, and airport briefing with parents.',
    location: 'HolyTGS Seminar Hall',
  },
];

