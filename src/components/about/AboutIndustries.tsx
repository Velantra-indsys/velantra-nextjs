export default function AboutIndustries() {
  return (
    <>
      <section className="section about-industries" id="industries" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal">
          <div class="eyebrow"><span></span> Industries</div>
          <h2>Where Velantra Works</h2>
          <p>Any organization that manages people, facilities, and systems has a place for Velantra.</p>
        </div>
        <div class="industry-pills reveal">
          <span>Manufacturing</span><span>Corporate Offices</span><span>Logistics & Warehousing</span><span>Construction & Infrastructure</span><span>Transportation & Logistics Hubs</span>
        </div>
      </div>` }} />
    </>
  );
}
