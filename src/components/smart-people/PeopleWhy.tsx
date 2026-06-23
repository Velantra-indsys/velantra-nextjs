export default function PeopleWhy() {
  return (
    <>
      <section className="section people-why" id="benefits" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
          <div class="section-heading centered reveal">
            <h2>Why Choose Smart HR?</h2>
          </div>
          <div class="people-why-grid">
            <article class="reveal">
              <i class="bi bi-lightning-charge" aria-hidden="true"></i><h3>Increase Efficiency</h3>
              <p>Automate routine HR tasks and save valuable time.</p>
            </article>
            <article class="reveal delay-1">
              <i class="bi bi-emoji-smile" aria-hidden="true"></i><h3>Improve Employee Experience</h3>
              <p>Empower employees with self-service and transparency.</p>
            </article>
            <article class="reveal delay-2">
              <i class="bi bi-bar-chart" aria-hidden="true"></i><h3>Real-Time Insights</h3>
              <p>Make data-driven decisions with live dashboards.</p>
            </article>
            <article class="reveal">
              <i class="bi bi-check2-circle" aria-hidden="true"></i><h3>Accurate &amp; Compliant</h3>
              <p>Ensure payroll accuracy and stay compliant always.</p>
            </article>
            <article class="reveal delay-1">
              <i class="bi bi-shield-lock" aria-hidden="true"></i><h3>Scalable &amp; Secure</h3>
              <p>Built to grow with your organization securely.</p>
            </article>
            <article class="reveal delay-2">
              <i class="bi bi-lightbulb" aria-hidden="true"></i><h3>Better Decision Making</h3>
              <p>Access advanced reports and analytics instantly.</p>
            </article>
          </div>
        </div>` }} />
    </>
  );
}
