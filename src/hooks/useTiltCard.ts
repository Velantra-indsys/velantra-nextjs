'use client';

import { useEffect } from 'react';

export function useTiltCard() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.tilt-card'));
    const cleanups = cards.map((card) => {
      const onMove = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
      };
      const onLeave = () => { card.style.transform = ''; };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      return () => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
}