import type { Metadata } from 'next';
import RouteTransition from '@/components/layout/RouteTransition';
import ScrollToTopButton from '@/components/shared/ScrollToTopButton';
import './globals.css';
import '@/styles/index.css';
import '@/styles/about.css';
import '@/styles/product.css';
import '@/styles/product-theme.css';
import '@/styles/smart-id-theme.css';
import '@/styles/smart-gate-theme.css';
import '@/styles/smart-people.css';
import '@/styles/theme-glow.css';
import '@/styles/unified-theme.css';

export const metadata: Metadata = {
  title: 'Velantra | Business Management Platform',
  description: 'Velantra is one platform for smart Employee, gate, and people management.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <RouteTransition>{children}</RouteTransition>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
