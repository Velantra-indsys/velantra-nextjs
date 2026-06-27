export default function PeopleWhy() {
  return (
    <>
      <section className="section people-why" id="benefits" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
          <div class="section-heading centered reveal">
            <h2>Why Choose Smart HR?</h2>
          </div>
          <div class="people-why-grid">
            <article class="reveal">
              <i class="bi bi-lightning-charge" aria-hidden="true"></i><h3>Payroll That Closes Without Drama</h3>
              <p>No more last-minute corrections, missed deductions, or weekend reconciliations. Statutory compliance — handled. Every cycle.</p>
            </article>
            <article class="reveal delay-1">
              <i class="bi bi-emoji-smile" aria-hidden="true"></i><h3>Improve Self-Service That Actually Works</h3>
              <p>Employees check balances, raise requests, and track status themselves. HR stops being a help desk and starts being strategic.</p>
            </article>
            <article class="reveal delay-2">
              <i class="bi bi-bar-chart" aria-hidden="true"></i><h3>Visibility Without Asking for Reports</h3>
              <p>Attendance, leave, headcount, performance — all live. Management sees what's happening without scheduling a review meeting.</p>
            </article>
            <article class="reveal">
              <i class="bi bi-check2-circle" aria-hidden="true"></i><h3>Statutory Compliance Built In</h3>
              <p>Local tax, payroll compliance, and labour law obligations handled automatically. No separate tracking, no missed filings.</p>
            </article>
            <article class="reveal delay-1">
              <i class="bi bi-shield-lock" aria-hidden="true"></i><h3>Grows With Your Headcount</h3>
              <p>Whether you're a growing mid-sized business or a multi-location enterprise, Smart HR handles the scale — same reliable workflows, no rearchitecting.</p>
            </article>
            <article class="reveal delay-2">
              <i class="bi bi-lightbulb" aria-hidden="true"></i><h3>A System Managers Actually Use</h3>
              <p>Approvals, reviews, and team visibility on their phone. Managers stay involved without being dependent on HR to tell them what's happening.</p>
            </article>
          </div>
        </div>` }} />
    </>
  );
}
