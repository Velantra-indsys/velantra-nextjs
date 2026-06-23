import type { Metadata } from 'next';

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://velantra.in').replace(/\/$/, '');

export const siteConfig = {
  name: 'Velantra',
  url: baseUrl,
  description:
    'Velantra connects employee management, gate operations, HR workflows, and reporting in one business management platform.',
  email: 'sales@indsys.com',
  phone: '+916374326329',
  locale: 'en_IN',
};

export const routes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/smart-gate', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/smart-id', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/smart-people', priority: 0.9, changeFrequency: 'weekly' as const },
];

const defaultKeywords = [
  'Velantra',
  'business management platform',
  'employee management software',
  'gate management software',
  'HR management software',
  'visitor management system',
  'workforce management',
];

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function absoluteUrl(path = '/') {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function createPageMetadata({ title, description, path, keywords = [], image = '/hero%20bg.png' }: PageSeo): Metadata {
  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: image,
          alt: `${siteConfig.name} business management platform`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

