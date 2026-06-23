import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import ContactSection from '@/components/home/ContactSection';

export const metadata: Metadata = {
  title: "Velantra | Business Management Platform",
  description: "Velantra is one platform for smart Employee, gate, and people management.",
};

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
