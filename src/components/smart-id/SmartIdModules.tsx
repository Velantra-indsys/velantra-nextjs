export default function SmartIdModules() {
  return (
    <>
      <section className="section smart-modules" id="industries" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container modules-layout">
        <div class="module-panel reveal"><div class="eyebrow"><span></span> Powerful Modules Included</div><h2>Everything an employee needs. One app.</h2><br><p>From clocking in to raising an expense claim — Smart ID covers every touchpoint between an employee and their workplace. Ask us for the full walkthrough.</p></div>
        <div class="industry-panel reveal delay-1"><div class="eyebrow"><span></span> Designed for Every Industry</div><h2>Built for diverse workplaces.</h2><div class="industry-pills"><span>Manufacturing</span><span>Manufacturing Plants</span><span>Corporate Offices & IT Parks</span><span>Logistics & Warehousing</span><span>Construction & Infrastructure</span><span> Large Organisations & Institutional Campuses</span><span>Industrial Facilities</span></div></div>
      </div>` }} />
    </>
  );
}
