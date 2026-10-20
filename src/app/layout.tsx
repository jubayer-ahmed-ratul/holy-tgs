import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/common/SmoothScroll';
import WhatsAppButton from '@/components/common/WhatsAppButton';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'HolyTGS | Global Education & Study Abroad Consultancy',
  description:
    'Empowering students to achieve their global academic dreams. Expert university admissions, student visa guidance, and scholarship assistance for the UK, Canada, USA, Australia, Germany, and Ireland.',
  keywords: [
    'Study Abroad Consultancy',
    'Overseas Education',
    'Student Visa Guidance',
    'University Admissions',
    'Study in UK',
    'Study in Canada',
    'Study in USA',
    'Study in Australia',
    'Study in Germany',
    'IELTS Test Prep',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased font-sans selection:bg-brand-amber-500 selection:text-slate-950">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
