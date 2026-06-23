'use client';

import { useEffect } from 'react';

export default function ProductsSection() {

  useEffect(() => {
    const productSlider = document.querySelector<HTMLElement>("[data-product-slider]");
    const productCards = productSlider ? Array.from(productSlider.querySelectorAll<HTMLElement>(".product-highlight")) : [];
    const productPrev = document.querySelector<HTMLButtonElement>("[data-product-prev]");
    const productNext = document.querySelector<HTMLButtonElement>("[data-product-next]");
    const productDots = document.querySelector<HTMLElement>("[data-product-dots]");
    if (!productSlider || !productCards.length || !productPrev || !productNext || !productDots) return;
    let activeProduct = 0;
    let scrollFrame = 0;
    const cleanups: Array<() => void> = [];
    productDots.replaceChildren();
    const getCenteredScrollLeft = (card: HTMLElement) => {
      const sliderBox = productSlider.getBoundingClientRect();
      const cardBox = card.getBoundingClientRect();
      return productSlider.scrollLeft + cardBox.left + cardBox.width / 2 - sliderBox.left - sliderBox.width / 2;
    };
    const updateControls = (index: number) => {
      activeProduct = index;
      productPrev.disabled = index === 0;
      productNext.disabled = index === productCards.length - 1;
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === index);
        dot.setAttribute("aria-current", dotIndex === index ? "true" : "false");
      });
    };
    const showProduct = (index: number) => {
      const nextIndex = Math.max(0, Math.min(index, productCards.length - 1));
      productSlider.scrollTo({ left: getCenteredScrollLeft(productCards[nextIndex]), behavior: "smooth" });
      updateControls(nextIndex);
    };
    const dots = productCards.map((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Show product ${index + 1}`);
      const onClick = () => showProduct(index);
      dot.addEventListener("click", onClick);
      cleanups.push(() => dot.removeEventListener("click", onClick));
      productDots.append(dot);
      return dot;
    });
    const onPrev = () => showProduct(activeProduct - 1);
    const onNext = () => showProduct(activeProduct + 1);
    const onScroll = () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const sliderCenter = productSlider.getBoundingClientRect().left + productSlider.clientWidth / 2;
        const nearestIndex = productCards.reduce((nearest, card, index) => {
          const box = card.getBoundingClientRect();
          const distance = Math.abs(box.left + box.width / 2 - sliderCenter);
          return distance < nearest.distance ? { index, distance } : nearest;
        }, { index: 0, distance: Infinity }).index;
        updateControls(nearestIndex);
      });
    };
    const onResize = () => {
      if (!window.matchMedia("(max-width: 700px)").matches) return;
      productSlider.scrollTo({ left: getCenteredScrollLeft(productCards[activeProduct]) });
    };
    const onScrollEnd = () => showProduct(activeProduct);
    productPrev.addEventListener("click", onPrev);
    productNext.addEventListener("click", onNext);
    productSlider.addEventListener("scroll", onScroll, { passive: true });
    productSlider.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("resize", onResize);
    updateControls(0);
    requestAnimationFrame(() => { if (window.matchMedia("(max-width: 700px)").matches) showProduct(0); });
    return () => {
      cleanups.forEach((cleanup) => cleanup());
      productPrev.removeEventListener("click", onPrev);
      productNext.removeEventListener("click", onNext);
      productSlider.removeEventListener("scroll", onScroll);
      productSlider.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(scrollFrame);
    };
  }, []);
  return (
    <>
      <section className="home-section products-section" id="products" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="home-heading centered reveal"><h2>Three products. One operational advantage.</h2><p>Give employees, security teams, and HR leaders the tools they need while keeping every workflow connected.</p></div>
        <div class="product-highlight-grid" data-product-slider>
          <article class="product-highlight tilt-card reveal"><div class="product-icon product-icon-id"><svg class="smart-id-home-icon" width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><defs><linearGradient id="homeSmartIdBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1565FF"/><stop offset="100%" stop-color="#0A2E8A"/></linearGradient><linearGradient id="homeSmartIdShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1DE9B6"/><stop offset="100%" stop-color="#1A3DFF"/></linearGradient></defs><rect x="180" y="70" width="170" height="280" rx="20" fill="none" stroke="#082D7D" stroke-width="10"/><rect x="235" y="82" width="30" height="8" rx="4" fill="#082D7D"/><rect x="95" y="120" width="220" height="140" rx="18" fill="url(#homeSmartIdBlueGrad)"/><circle cx="145" cy="170" r="22" fill="white"/><path d="M110 230 C110 205, 180 205, 180 230 L180 240 L110 240 Z" fill="white"/><rect x="195" y="160" width="85" height="8" rx="4" fill="white"/><rect x="195" y="182" width="85" height="8" rx="4" fill="white"/><rect x="195" y="205" width="50" height="8" rx="4" fill="white"/><path d="M290 235 C330 235, 355 210, 355 210 L355 290 C355 340, 290 370, 290 370 C290 370, 225 340, 225 290 L225 210 C225 210, 250 235, 290 235 Z" fill="url(#homeSmartIdShieldGrad)"/><path d="M255 285 L275 305 L320 255" fill="none" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Employee Work Buddy</span><h3>Smart-ID</h3><p>Smart ID empowers employees with instant access to attendance, leave, approvals, and company updates from a single app.
Designed to simplify daily operations, improve engagement, and enhance workplace efficiency.</p><ul><li>Employee ID</li><li>Attendance</li><li>Leave </li><li>Approval </li><li>Notice Board & Announcements</li><li>Team AttendanceTravel & Expense Claims</li></ul><a class="product-link" href="/smart-id">View Product <b>→</b></a></article>
          <article class="product-highlight featured tilt-card reveal delay-1"><div class="product-icon product-icon-gate"><i class="bi bi-door-open" aria-hidden="true"></i></div><span>Visitor &amp; Gate Control</span><h3>Smart-Gate</h3><p>Smart Gate is an intelligent gate automation platform that streamlines visitor management, vehicle tracking, material movement, and security compliance through real-time monitoring and digital access control.</p><ul><li>Visitor</li><li>Vehicle</li><li>Material Inward & Outward</li><li>Document Verification</li><li>Live Monitoring Dashboard</li><li>QR & Digital Pass</li></ul><a class="product-link" href="/smart-gate">View Product <b>→</b></a></article>
          <article class="product-highlight tilt-card reveal delay-2"><div class="product-icon product-icon-people"><i class="bi bi-people" aria-hidden="true"></i></div><span>People &amp; HR Operations</span><h3>Smart-People</h3><p>Smart People is a comprehensive Human Resource Management platform that simplifies employee administration, recruitment, attendance, payroll, performance, and HR operations through a single intelligent system.</p><ul><li>Employee</li><li>Recruitment</li><li>Employee Lifecycle</li><li>Attendance Management</li><li>Shift Management</li><li>Payroll Management</li></ul><a class="product-link" href="/smart-people">View Product <b>→</b></a></article>
        </div>
        <div class="product-slider-controls" data-product-slider-controls aria-label="Product slider controls">
          <button type="button" data-product-prev aria-label="Previous product"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg></button>
          <div class="product-slider-dots" data-product-dots></div>
          <button type="button" data-product-next aria-label="Next product"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg></button>
        </div>
      </div>` }} />
    </>
  );
}
