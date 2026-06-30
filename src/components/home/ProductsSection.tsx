'use client';

import { useEffect } from 'react';
import { getGeminiAiIconMarkup } from '@/components/shared/geminiAiIconMarkup';
import { getSmartIdIconMarkup } from '@/components/shared/smartIdIconMarkup';

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
        <div class="home-heading centered reveal"><h2>Four products. One operational advantage.</h2><p>Give employees, security teams, and HR leaders the tools they need while keeping every workflow connected.</p></div>
        <div class="product-highlight-grid" data-product-slider>
          <article class="product-highlight tilt-card reveal"><div class="product-icon product-icon-id">${getSmartIdIconMarkup('home', 'smart-id-home-icon')}</div><span>Employee Work Buddy</span><h3>Smart-ID</h3><p>Your employees spend less time on HR admin and more time on work that matters. Smart ID puts everything they need in one place — on their phone, in the moment.</p><a class="product-link" href="/smart-id">View Product <b>→</b></a></article>
          <article class="product-highlight tilt-card reveal delay-1"><div class="product-icon product-icon-gate"><i class="bi bi-door-open" aria-hidden="true"></i></div><span>Visitor &amp; Gate Control</span><h3>Smart-Gate</h3><p>Every person, vehicle, and material that moves through your facility — known, approved, and accounted for. SmartGate replaces uncertainty at the gate with complete operational control.</p><a class="product-link" href="/smart-gate">View Product <b>→</b></a></article>
          <article class="product-highlight tilt-card reveal delay-2"><div class="product-icon product-icon-people"><i class="bi bi-people" aria-hidden="true"></i></div><span>People &amp; HR Operations</span><h3>Smart-People</h3><p>From the day someone joins to the day they leave, Smart HR handles the full employee lifecycle without spreadsheets, without follow-up emails, and without things falling through the cracks.</p><a class="product-link" href="/smart-people">View Product <b>→</b></a></article>
          <article class="product-highlight tilt-card reveal"><div class="product-icon product-icon-ai">${getGeminiAiIconMarkup('homeProductsAi')}</div><span>AI Integration &amp; Reporting</span><h3>AI + ERP Connect</h3><p>Your ERP holds the data. AI + ERP Connect turns it into answers &mdash; without a single manual report, and without replacing the ERP you already run.</p><a class="product-link" href="/about#solutions">View Product <b>&rarr;</b></a></article>
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

