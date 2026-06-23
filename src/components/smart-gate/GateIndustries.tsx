export default function GateIndustries() {
  return (
    <>
      <section className="section industries-section" id="industries" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal"><div class="eyebrow"><span></span> Industries we serve</div><h2>Secure visitor journeys for every workplace.</h2></div>
        <div class="industry-grid reveal"><span>Corporate Offices</span><span>Manufacturing Plants</span><span>Large Organizationsal Institutions</span><span>Industrial Facilities</span><span>Construction Sites</span></div>
      </div>` }} />
    </>
  );
}
