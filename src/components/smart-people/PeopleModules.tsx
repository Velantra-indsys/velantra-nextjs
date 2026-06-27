export default function PeopleModules() {
  return (
    <>
      <section className="section people-modules" id="modules" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
          <div class="section-heading centered reveal">
            <h2>Built for the Full HR Lifecycle</h2>
            <p>
              Smart HR covers every stage — so nothing falls through the cracks between joining and exit.
            </p>
          </div>
          <div class="people-module-grid">
            <article class="reveal">
              <i class="bi bi-person-vcard" aria-hidden="true"></i><h3>From Day One to Day Done</h3>
              <p>
                Every employee record, document, and role change — in one place from the moment they join to the moment they leave. No re-entering data across systems.
              </p>
            </article>
            <article class="reveal delay-1">
              <i class="bi bi-person-plus" aria-hidden="true"></i><h3>Attendance and Leave That Run Themselves</h3>
              <p>
                Shifts tracked, leave applied and approved, balances updated automatically. HR doesn't chase. Managers don't wait. Employees always know where they stand.
              </p>
            </article>
            <article class="reveal delay-2">
              <i class="bi bi-arrow-repeat" aria-hidden="true"></i><h3>Payroll That Closes on Time. Every Time.</h3>
              <p>
                Salary calculations, statutory deductions, and compliance filings processed without a weekend scramble. Payslips generated and distributed automatically.
              </p>
            </article>
            <article class="reveal">
              <i class="bi bi-calendar2-check" aria-hidden="true"></i><h3>Performance Conversations on Data</h3>
              <p>
                Goals set, progress tracked, reviews completed throughout the year — not just at appraisal time. Managers review with facts, not memory.
              </p>
            </article>
            
          </div>
        </div>` }} />
    </>
  );
}
