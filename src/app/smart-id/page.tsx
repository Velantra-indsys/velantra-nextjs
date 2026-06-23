import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import SmartIdHero from '@/components/smart-id/SmartIdHero';
import SmartIdCompanion from '@/components/smart-id/SmartIdCompanion';
import SmartIdFeatures from '@/components/smart-id/SmartIdFeatures';
import SmartIdBenefits from '@/components/smart-id/SmartIdBenefits';
import SmartIdModules from '@/components/smart-id/SmartIdModules';
import SmartIdSecurity from '@/components/smart-id/SmartIdSecurity';
import PageCta from '@/components/shared/PageCta';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Smart ID Employee Management App',
  description:
    'Velantra Smart ID gives employees one mobile app for attendance, leave, approvals, digital ID, surveys, announcements, profile details, and expense claims.',
  path: '/smart-id',
  keywords: [
    'Smart ID',
    'employee management app',
    'attendance app',
    'leave management',
    'digital employee ID',
    'expense claims',
  ],
  image: '/hero%20bg.png',
});

export default function Page() {
  return (
    <div data-body-class="product-v3 smart-page smart-id-refresh antialiased overflow-x-hidden">
      <ScrollProgress />
      <Header active="smart-id" />
      <main>
        <SmartIdHero />
        <SmartIdCompanion />
        <SmartIdFeatures />
        <SmartIdBenefits />
        <SmartIdModules />
        <SmartIdSecurity />
        <PageCta variant="smart-id" />
      </main>
      <Footer />
    </div>
  );
}
