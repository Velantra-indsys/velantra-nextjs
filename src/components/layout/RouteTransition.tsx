'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

const defaultBodyClass = 'antialiased overflow-x-hidden';

export default function RouteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const host = document.querySelector<HTMLElement>('[data-body-class]');
    document.body.className = host?.dataset.bodyClass || defaultBodyClass;
  }, [pathname]);

  return (
    <div key={pathname} className="route-transition">
      {children}
    </div>
  );
}
