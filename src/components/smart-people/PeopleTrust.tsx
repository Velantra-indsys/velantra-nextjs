export default function PeopleTrust() {
  return (
    <>
      <section className="section people-trust" id="features" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
          <div class="section-heading centered reveal">
            <h2>Trusted by Growing Organizations</h2>
            <p>
              Smart HR helps businesses digitize HR operations, improve
              productivity, and simplify employee management.
            </p>
          </div>
          <div class="people-trust-grid">
            <article class="reveal">
              <i class="bi bi-activity" aria-hidden="true"></i><h3>Real-Time Employee Insights</h3>
            </article>
            <article class="reveal delay-1">
              <i class="bi bi-calendar-check" aria-hidden="true"></i><h3>Automated Attendance Tracking</h3>
            </article>
            <article class="reveal delay-2">
              <i class="bi bi-cash-stack" aria-hidden="true"></i><h3>Streamlined Payroll Processing</h3>
            </article>
            <article class="reveal">
              <i class="bi bi-graph-up-arrow" aria-hidden="true"></i><h3>Performance Analytics</h3>
            </article>
            <article class="reveal delay-1">
              <i class="bi bi-diagram-3" aria-hidden="true"></i><h3>Department-Based Reporting</h3>
            </article>
            <article class="reveal delay-2">
              <i class="bi bi-shield-lock" aria-hidden="true"></i><h3>Secure Employee Records</h3>
            </article>
          </div>
        </div>` }} />
    </>
  );
}
