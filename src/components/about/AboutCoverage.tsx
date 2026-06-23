export default function AboutCoverage() {
  return (
    <>
      <section className="section about-coverage" id="coverage" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal">
          <div class="eyebrow"><span></span> What Velantra Covers</div>
          <h2>Four connected capabilities for daily operations.</h2>
        </div>
        <div class="coverage-grid">
          <article class="reveal"><i class="bi bi-door-open" aria-hidden="true"></i><span>Live</span><h3>SmartGate</h3><p>Gate &amp; facility operations</p></article>
          <article class="reveal delay-1"><i class="bi bi-people" aria-hidden="true"></i><span>Live</span><h3>Smart HR</h3><p>Human resource management</p></article>
          <article class="reveal delay-2"><i class="bi bi-person-badge" aria-hidden="true"></i><span>Live</span><h3>Smart ID</h3><p>Employee companion app</p></article>
          <article class="reveal"><i class="bi bi-cpu" aria-hidden="true"></i><span>New</span><h3>AI + ERP Connect</h3><p>Integration &amp; intelligent reporting</p></article>
        </div>
      </div>` }} />
    </>
  );
}
