export default function GateIndustries() {
  return (
    <>
      <section className="section industries-section" id="industries" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal"><div class="eyebrow"><span></span> Industries we serve</div><h2>Secure visitor journeys for every workplace.</h2></div>
        <div class="industry-grid reveal"><span>Manufacturing Plantss</span><span>Corporate Offices & IT Parks</span><span>Logistics & Warehousing</span><span>Construction & Infrastructure</span><span>Large Organisations & Institutional Campuses</span><span>Industrial Facilities</span></div>
      </div>` }} />
    </>
  );
}
