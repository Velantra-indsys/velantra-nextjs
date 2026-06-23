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

export const metadata: Metadata = {
  title: "Smart ID Employee Work Buddy | Velantra",
  description: "Velantra Smart ID is the employee work buddy for attendance, leave, approvals, surveys, announcements, digital ID, and expense claims.",
};

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
