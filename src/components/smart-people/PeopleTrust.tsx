export default function PeopleTrust() {
  return (
    <>
      <section className="section people-trust" id="features" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
          <div class="section-heading centered reveal">
            <h2>Built for Operations-First Organizations</h2>
            <p>
              Smart HR is designed for businesses where HR isn't just administration — it's the backbone of how people, shifts, and payroll actually work together every day
            </p>
          </div>
          <div class="people-trust-grid">
            <article class="reveal">
              <i class="bi bi-activity" aria-hidden="true"></i><h3>Real-Time Employee Insights</h3><br><p>Know what's happening across your workforce — attendance, leave, and productivity — without waiting for end-of-day reports.</p>
            </article>
            <article class="reveal delay-1">
              <i class="bi bi-calendar-check" aria-hidden="true"></i><h3>Automated Attendance Tracking</h3><br><p>Attendance recorded accurately without paper registers or manual entry. Managers see who's present, late, or absent — instantly.</p>
            </article>
            <article class="reveal delay-2">
              <i class="bi bi-cash-stack" aria-hidden="true"></i><h3>Streamlined Payroll Processing</h3><br><p>Run payroll without manual reconciliation. Salary calculations, statutory deductions, and compliance filings handled automatically every cycle.</p>
            </article>
            <article class="reveal">
              <i class="bi bi-graph-up-arrow" aria-hidden="true"></i><h3>Performance Analytics</h3><br><p>Set goals, track progress, and conduct reviews throughout the year — so performance conversations happen on data, not memory.</p>
            </article>
            <article class="reveal delay-1">
              <i class="bi bi-diagram-3" aria-hidden="true"></i><h3>Department-Based Reporting</h3><br><p>Break down workforce data by department, location, or team. Give each manager the view they need without exposing what they don't.</p> 
            </article>
            <article class="reveal delay-2">
              <i class="bi bi-shield-lock" aria-hidden="true"></i><h3>Secure Employee Records</h3><br><p>Every employee document, contract, and record stored securely with role-based access. Audit-ready at any point in time.</p>
            </article>
          </div>
        </div>` }} />
    </>
  );
}
