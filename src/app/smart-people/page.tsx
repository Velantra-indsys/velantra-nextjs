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

export const metadata: Metadata = {
  title: "Smart People. Smarter HR Management. | Velantra",
  description: "Velantra Smart People is a comprehensive HR management solution for employee lifecycle, attendance, payroll, performance, and reporting.",
};

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
