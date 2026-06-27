export default function AboutWork() {
  return (
    <>
      <section className="section about-work" id="work" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal">
          <div class="eyebrow"><span></span> How We Work</div>
          <h2>A Partner, Not Just a Client</h2>
          <p>We don't hand over software and walk away. We work alongside your team from understanding to outcomes.</p>
        </div>
        <div class="work-steps">
          <article class="reveal"><i class="bi bi-search" aria-hidden="true"></i><h3>Assess Your Needs</h3><p>We analyze your existing processes, security requirements, workforce challenges, and operational goals to identify the best-fit solution.</p></article>
          <article class="reveal delay-1"><i class="bi bi-sliders" aria-hidden="true"></i><h3>Configure & Integrate</h3><p>We configure SmartGate, Smart HR, or Smart ID around your actual workflows — and connect to your existing ERP or systems without a replacement project.</p></article>
          <article class="reveal delay-2"><i class="bi bi-mortarboard" aria-hidden="true"></i><h3>Train & Empower</h3><p>We train your security team, HR officers, and floor managers directly — not just IT. Because adoption happens at the gate and the HR desk, not in a server room.</p></article>
          <article class="reveal"><i class="bi bi-life-preserver" aria-hidden="true"></i><h3>Support & Grow</h3><p>We continuously support your organization with updates, enhancements, and recommendations as your needs evolve.</p></article>
        </div>
      </div>` }} />
    </>
  );
}
