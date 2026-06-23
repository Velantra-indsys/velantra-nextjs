import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import SmartPeopleHero from '@/components/smart-people/SmartPeopleHero';
import PeopleTrust from '@/components/smart-people/PeopleTrust';
import PeopleAnalytics from '@/components/smart-people/PeopleAnalytics';
import PeopleModules from '@/components/smart-people/PeopleModules';
import PeopleWhy from '@/components/smart-people/PeopleWhy';
import PageCta from '@/components/shared/PageCta';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Smart People HR Management Software',
  description:
    'Velantra Smart People helps HR teams manage employee lifecycle, attendance, shifts, payroll, performance, records, analytics, and reporting.',
  path: '/smart-people',
  keywords: [
    'Smart People',
    'HR management software',
    'payroll management',
    'employee lifecycle management',
    'attendance management',
    'HR analytics',
  ],
  image: '/smart-people%20bg.png',
});

export default function Page() {
  return (
    <div data-body-class="product-v3 people-page antialiased overflow-x-hidden">
      <ScrollProgress />
      <Header active="smart-people" />
      <main>
        <SmartPeopleHero />
        <PeopleTrust />
        <PeopleAnalytics />
        <PeopleModules />
        <PeopleWhy />
        <PageCta variant="smart-people" />
      </main>
      <Footer />
    </div>
  );
}
