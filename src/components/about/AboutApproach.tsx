export default function AboutApproach() {
  return (
    <>
      <section className="section about-approach" id="approach" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading reveal">
          <div class="eyebrow"><span></span> Our Approach</div>
          <h2>How We Think About Technology</h2>
          <p>We don't build features. We solve business problems that have real operational and financial consequences.</p>
        </div>
        <div class="approach-grid">
          <article class="reveal"><i class="bi bi-tools" aria-hidden="true"></i><h3>Practical Over Impressive</h3><p>We favour technology that works reliably in the field, at a security gate, on a shop floor, or at a construction site, over technology that only looks good in a demo.</p></article>
          <article class="reveal delay-1"><i class="bi bi-diagram-3" aria-hidden="true"></i><h3>Connected by Design</h3><p>Every solution we build is designed to share data with the others. Integration is part of the product, not an afterthought.</p></article>
          <article class="reveal delay-2"><i class="bi bi-stars" aria-hidden="true"></i><h3>AI That Earns Its Place</h3><p>We apply AI where it reduces genuine manual effort, generates reports faster, surfaces patterns, and answers business questions in plain language.</p></article>
        </div>
      </div>` }} />
    </>
  );
}
