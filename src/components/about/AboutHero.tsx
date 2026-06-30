import { getGeminiAiIconMarkup } from '@/components/shared/geminiAiIconMarkup';
import { getSmartIdIconMarkup } from '@/components/shared/smartIdIconMarkup';

export default function AboutHero() {
  return (
    <>
      <section className="about-hero" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container about-hero-grid">
        <div class="about-hero-copy reveal">
          <div class="eyebrow"><span></span> About Velantra</div>
          <h1>We Connect the Systems Your Business Runs On</h1>
          <p>Velantra is a business technology company built on 20+ years of industry and operational experience. We help organizations improve efficiency, strengthen operational control, and accelerate digital transformation through practical, scalable, and integrated technology solutions.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#solutions">Explore Solutions <b>&rarr;</b></a>
            <a class="button button-ghost" href="/#contact">Book a Demo</a>
          </div>
        </div>
        <div class="about-system-panel reveal delay-1" aria-label="Velantra connected platform overview">
          <div class="system-core">
            <span class="brand-logo"><img src="/Velentra-logo.png" alt=""></span>
          </div>
          <div class="system-node node-one"><i class="bi bi-door-open" aria-hidden="true"></i><span><b>SmartGate</b><small>Gate operations</small></span></div>
          <div class="system-node node-two"><i class="bi bi-people" aria-hidden="true"></i><span><b>Smart HR</b><small>Workforce management</small></span></div>
          <div class="system-node node-three">${getSmartIdIconMarkup('aboutHeroSmartId', 'smart-id-home-icon')}<span><b>Smart ID</b><small>Employee companion</small></span></div>
          <div class="system-node node-four">${getGeminiAiIconMarkup('aboutHeroAi')}<span><b>AI + ERP Connect</b><small>Intelligent reporting</small></span></div>
        </div>
      </div>` }} />
      <section className="section about-intro" id="who-we-are" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container about-split">
        <div class="section-heading reveal">
          <div class="eyebrow"><span></span> Our Vision</div>
          <h2>Technology That Works With Your Business</h2>
        </div>
        <div class="about-copy reveal delay-1">
          <p>We've spent more than 20 years inside the operations of manufacturers, facilities teams, and enterprise businesses. We know what the security guard actually does at the gate at 6am. We know how payroll day feels in an HR team running on Excel. We built Velantra because we couldn't find a product that understood both</p>
          <p>Every product in the Velantra suite was designed around real workflows, not ideal ones. That means it is designed for fast deployment — not multi-month implementation projects. It works on the devices your team already has. And it connects to the systems you're not ready to replace yet.</p>
          <p>Organizations choose Velantra because we come in with answers, not just software. Our team has implemented, operated, and optimised the same kinds of processes you're managing — which means the demo we show you will look like your business, not a generic slideshow. Our growing portfolio, including SmartGate, Smart HR, and Smart ID, reflects our mission to help businesses operate smarter, safer, and more efficiently.</p>
        </div>
      </div>` }} />
    </>
  );
}

