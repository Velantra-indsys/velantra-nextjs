import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import AboutHero from '@/components/about/AboutHero';
import AboutCoverage from '@/components/about/AboutCoverage';
import AboutSolutions from '@/components/about/AboutSolutions';
import AboutApproach from '@/components/about/AboutApproach';
import AboutWork from '@/components/about/AboutWork';
import AboutWhy from '@/components/about/AboutWhy';
import AboutIndustries from '@/components/about/AboutIndustries';
import PageCta from '@/components/shared/PageCta';

export const metadata: Metadata = {
  title: "About Velantra | We Connect the Systems Your Business Runs On",
  description: "About Velantra, a business technology partner connecting HR, workforce, gate operations, ERP, and AI reporting into one operational platform.",
};

export default function Page() {
  return (
    <div data-body-class="product-v3 about-page antialiased overflow-x-hidden">
      <ScrollProgress />
      <Header active="about" />
      <main>
        <AboutHero />
        <AboutCoverage />
        <AboutApproach />
        <AboutSolutions />
        <AboutWork />
        <AboutWhy />
        <AboutIndustries />
        <PageCta variant="about" />
      </main>
      <Footer />
    </div>
  );
}
