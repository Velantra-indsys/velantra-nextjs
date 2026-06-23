'use client';

import { useEffect } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { useTiltCard } from '@/hooks/useTiltCard';

type ActivePage = 'home' | 'about' | 'smart-id' | 'smart-gate' | 'smart-people';

const navItems = [
  { key: 'home', href: '/', label: 'Home' },
  { key: 'about', href: '/about', label: 'About Us' },
  { key: 'smart-id', href: '/smart-id', label: 'Smart-ID' },
  { key: 'smart-gate', href: '/smart-gate', label: 'Smart-Gate' },
  { key: 'smart-people', href: '/smart-people', label: 'Smart-People' },
] as const;

export default function Header({ active }: { active: ActivePage }) {
  useReveal();
  useScrollHeader();
  useTiltCard();

  useEffect(() => {
    const host = document.querySelector<HTMLElement>('[data-body-class]');
    document.body.className = host?.dataset.bodyClass || 'antialiased overflow-x-hidden';
  }, []);

  useEffect(() => {
    const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
    const nav = document.querySelector<HTMLElement>('.main-nav');
    if (!toggle || !nav) return;
    const onToggle = () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    };
    const close = () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', onToggle);
    const links = Array.from(nav.querySelectorAll('a'));
    links.forEach((link) => link.addEventListener('click', close));
    return () => {
      toggle.removeEventListener('click', onToggle);
      links.forEach((link) => link.removeEventListener('click', close));
    };
  }, []);

  return (
    <header className="site-header home-header">
      {active === 'home' ? (
        <a className="brand brand-lockup" href="/" aria-label="Velantra home">
          <span className="brand-wordmark"><img src="/Velentra-logo-text.png" alt="Velantra Business Management Platform" /></span>
        </a>
      ) : null}
      <button className="menu-toggle" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.key} className={active === item.key ? 'active' : undefined} href={item.href} aria-current={active === item.key ? 'page' : undefined}>{item.label}</a>
        ))}
        <a className="button button-small button-primary" href="/#contact">Contact</a>
      </nav>
    </header>
  );
}