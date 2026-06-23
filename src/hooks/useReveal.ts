'use client';

import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));

    const details = Array.from(document.querySelectorAll<HTMLDetailsElement>('.faq-list details'));
    const cleanups = details.map((item) => {
      const onToggle = () => {
        if (!item.open) return;
        details.forEach((other) => { if (other !== item) other.open = false; });
      };
      item.addEventListener('toggle', onToggle);
      return () => item.removeEventListener('toggle', onToggle);
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}