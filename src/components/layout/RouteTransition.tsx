'use client';

import { useLayoutEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const defaultBodyClass = 'antialiased overflow-x-hidden';

export default function RouteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    const host = document.querySelector<HTMLElement>('[data-body-class]');
    document.body.className = host?.dataset.bodyClass || defaultBodyClass;
  }, [pathname]);

  useLayoutEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href]');
      if (!link || link.target || link.hasAttribute('download')) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const href = `${url.pathname}${url.search}${url.hash}`;
      const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      const isSamePageHash = url.pathname === window.location.pathname && url.search === window.location.search && url.hash;
      if (!href.startsWith('/') || href === current || href.startsWith('/_next/') || isSamePageHash) return;

      event.preventDefault();
      router.push(href);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [router]);

  return (
    <div className="route-transition">
      {children}
    </div>
  );
}
