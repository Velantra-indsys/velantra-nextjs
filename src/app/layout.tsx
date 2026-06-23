import type { Metadata } from 'next';
import RouteTransition from '@/components/layout/RouteTransition';
import ScrollToTopButton from '@/components/shared/ScrollToTopButton';
import { absoluteUrl, siteConfig } from '@/lib/seo';
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
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: 'Velantra | Business Management Platform',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'Business Software',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/Velentra-logo.png',
    apple: '/Velentra-logo.png',
  },
  openGraph: {
    title: 'Velantra | Business Management Platform',
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [{ url: '/hero%20bg.png', alt: 'Velantra business management platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velantra | Business Management Platform',
    description: siteConfig.description,
    images: ['/hero%20bg.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl('/Velentra-logo.png'),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en'],
    },
    sameAs: [`https://wa.me/${siteConfig.phone.replace('+', '')}`],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        <RouteTransition>{children}</RouteTransition>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
