export default function AboutWhy() {
  return (
    <>
      <section className="section about-why" id="why" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal">
          <div class="eyebrow"><span></span> Why Velantra</div>
          <h2>What Makes Us Different</h2>
          <p>There are many software vendors. There are very few partners who understand operations, technology, and integration equally well.</p>
        </div>
        <div class="why-grid">
          <article class="reveal"><i class="bi bi-link-45deg" aria-hidden="true"></i><h3>Built to Connect</h3><p>Our solutions are designed from the ground up to integrate with each other and with your ERP.</p></article>
          <article class="reveal delay-1"><i class="bi bi-person-workspace" aria-hidden="true"></i><h3>Operations-First Thinking</h3><p>We build for daily users: security guards, HR officers, plant managers, and operations teams.</p></article>
          <article class="reveal delay-2"><i class="bi bi-lightning-charge" aria-hidden="true"></i><h3>AI Without the Hype</h3><p>We add AI only where it saves time, removes manual work, or surfaces something genuinely useful.</p></article>
          <article class="reveal"><i class="bi bi-plug" aria-hidden="true"></i><h3>Works With What You Have</h3><p>We don't ask you to replace your ERP or start over. We connect to your existing systems.</p></article>
          <article class="reveal delay-1"><i class="bi bi-geo-alt" aria-hidden="true"></i><h3>Present When It Counts</h3><p>We are based in India and serve businesses across sectors with people who know your setup.</p></article>
          <article class="reveal delay-2"><i class="bi bi-shield-check" aria-hidden="true"></i><h3>Accountable by Default</h3><p>Every system creates an audit trail, every integration is documented, and every deployment is owned.</p></article>
        </div>
      </div>` }} />
    </>
  );
}
