import { getSmartIdIconMarkup } from '@/components/shared/smartIdIconMarkup';

export default function AboutHero() {
  return (
    <>
      <section className="about-hero" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container about-hero-grid">
        <div class="about-hero-copy reveal">
          <div class="eyebrow"><span></span> About Velantra</div>
          <h1>We Connect the Systems Your Business Runs On</h1>
          <p>Velantra is a business technology company built on more than 25 years of industry and operational experience. We help organizations improve efficiency, strengthen operational control, and accelerate digital transformation through practical, scalable, and integrated technology solutions.</p>
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
          <div class="system-node node-four"><i class="bi bi-cpu" aria-hidden="true"></i><span><b>AI + ERP Connect</b><small>Intelligent reporting</small></span></div>
        </div>
      </div>` }} />
      <section className="section about-intro" id="who-we-are" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container about-split">
        <div class="section-heading reveal">
          <div class="eyebrow"><span></span> Our Vision</div>
          <h2>Technology That Works With Your Business</h2>
        </div>
        <div class="about-copy reveal delay-1">
          <p>Our vision is to help organizations build smarter, more connected, and more efficient workplaces by combining deep operational expertise with modern technology. We believe technology should solve real business challenges, support growth, and create measurable value.</p>
          <p>At Velantra, we focus on building long-term partnerships with our clients by providing reliable solutions, continuous improvement, and ongoing support. As businesses evolve, our solutions evolve with them, ensuring sustained value and future readiness.</p>
          <p>Organizations choose Velantra because of our industry knowledge, hands-on experience, customer-first approach, and commitment to delivering technology that creates meaningful business outcomes. Our growing portfolio, including SmartGate, Smart HR, and Smart ID, reflects our mission to help businesses operate smarter, safer, and more efficiently.</p>
        </div>
      </div>` }} />
    </>
  );
}

