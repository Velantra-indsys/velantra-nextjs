import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import ContactSection from '@/components/home/ContactSection';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Management Platform for HR and Gate Operations',
  description:
    'Velantra brings Smart ID, Smart Gate, and Smart People together for employee management, visitor control, HR workflows, and real-time reporting.',
  path: '/',
  keywords: ['Smart ID', 'Smart Gate', 'Smart People', 'business operations software', 'AI reporting'],
  image: '/hero%20bg.png',
});

export default function Page() {
  return (
    <div data-body-class="home-page antialiased overflow-x-hidden">
      <ScrollProgress />
      <Header active="home" />
      <main>
        <HeroSection />
        <ProductsSection />
        <WhatWeDoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
