export default function GatePillars() {
  return (
    <>
      <section className="gate-trust section" id="overview" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal"><div class="eyebrow"><span></span> What SmartGate manages</div><h2>One Platform for Every Gate Movement.</h2><p>SmartGate brings visitors, materials, vehicles, and contractors under one intelligent control layer — every movement tracked, documented, and secured.</p></div>
        <div class="gate-pillars-grid reveal">
          <article class="gate-pillar-card pillar-visitors">
            <div class="pillar-icon-wrap"><i class="bi bi-person-badge" aria-hidden="true"></i><span class="pillar-num">01</span></div>
            <div class="pillar-content"><h3>Visitors</h3><p>Digital registration, host approval, and verified entry — every visitor accounted for, every time.</p></div>
          </article>
          <article class="gate-pillar-card pillar-materials">
            <div class="pillar-icon-wrap"><i class="bi bi-box-seam" aria-hidden="true"></i><span class="pillar-num">02</span></div>
            <div class="pillar-content"><h3>Materials</h3><p>Track every item that enters or leaves your facility — inward delivery or outward dispatch, fully documented.</p></div>
          </article>
          <article class="gate-pillar-card pillar-vehicles">
            <div class="pillar-icon-wrap"><i class="bi bi-truck" aria-hidden="true"></i><span class="pillar-num">03</span></div>
            <div class="pillar-content"><h3>Vehicles</h3><p>End-to-end vehicle movement control — from entry authorization to exit clearance for every vehicle type.</p></div>
          </article>
          <article class="gate-pillar-card pillar-contractors">
            <div class="pillar-icon-wrap"><i class="bi bi-tools" aria-hidden="true"></i><span class="pillar-num">04</span></div>
            <div class="pillar-content"><h3>Contractors &amp; Services</h3><p>Manage service personnel, their equipment, and safe exit — nothing enters or leaves untracked.</p></div>
          </article>
        </div>
      </div>` }} />
    </>
  );
}
