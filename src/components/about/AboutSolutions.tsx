import { getSmartIdIconMarkup } from '@/components/shared/smartIdIconMarkup';

export default function AboutSolutions() {
  return (
    <>
      <section className="section about-solutions" id="solutions" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal">
          <div class="eyebrow"><span></span> Our Solutions</div>
          <h2>Four Pillars. One Partner.</h2>
          <p>Each Velantra solution is complete on its own. Together, they give your business a level of operational clarity that no single-point tool can match.</p>
        </div>
        <div class="solution-stack">
          <article class="solution-feature reveal">
            <div class="solution-title"><i class="bi bi-door-open" aria-hidden="true"></i><span><small>Gate &amp; Facility Management</small><h3>SmartGate</h3></span></div>
            <p>SmartGate brings visitors, materials, vehicles, and contractors under one platform, replacing paper registers and phone-call approvals with real-time digital control at every gate.</p>
            <ul><li>Zero unauthorized entry or exit</li><li>Every gate transaction timestamped and audit-ready</li><li>Security, admin, and management each see what they need</li><li>Works across multiple gates and facilities</li></ul>
            <a href="/smart-gate">Explore SmartGate <b>&rarr;</b></a>
          </article>
          <article class="solution-feature reveal delay-1">
            <div class="solution-title"><i class="bi bi-people" aria-hidden="true"></i><span><small>Human Resource Management</small><h3>Smart HR</h3></span></div>
            <p>Smart HR covers the full employee lifecycle, from recruitment and onboarding through attendance, leave, performance, and payroll, in one system HR teams and managers can use every day.</p>
            <ul><li>Payroll that runs accurately without manual reconciliation</li><li>Attendance and leave managed without spreadsheets</li><li>Performance tracked and acted on throughout the year</li><li>Complete workforce visibility for management</li></ul>
            <a href="/smart-people">Explore Smart HR <b>&rarr;</b></a>
          </article>
          <article class="solution-feature reveal">
            <div class="solution-title">${getSmartIdIconMarkup('aboutSolutionsSmartId', 'smart-id-home-icon')}<span><small>Employee Companion App</small><h3>Smart ID</h3></span></div>
            <p>Smart ID puts employees in control of their workday, from marking attendance and applying leave to submitting expenses and receiving company announcements.</p>
            <ul><li>Employees self-serve without HR involvement</li><li>Managers approve and act from their phone</li><li>Works with your current HR infrastructure</li><li>Mobile-friendly, built for where people actually work</li></ul>
            <a href="/smart-id">Explore Smart ID <b>&rarr;</b></a>
          </article>
          <article class="solution-feature ai-feature reveal delay-1">
            <div class="solution-title"><i class="bi bi-cpu" aria-hidden="true"></i><span><small>AI Integration &amp; Intelligent Reporting</small><h3>AI + ERP Connect</h3></span></div>
            <p>Velantra's AI integration layer sits on top of your existing ERP without replacing it. Ask questions in plain language, get reports in seconds, and connect HR, gate, and operational data to the records your ERP already holds.</p>
            <ul><li>Connects to your ERP with no replacement project</li><li>Natural language queries on your own business data</li><li>Automated reports delivered on schedule</li><li>Anomaly detection and trend alerts without manual analysis</li></ul>
          </article>
        </div>
      </div>` }} />
    </>
  );
}

