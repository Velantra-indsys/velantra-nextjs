export default function PeopleModules() {
  return (
    <>
      <section className="section people-modules" id="modules" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
          <div class="section-heading centered reveal">
            <h2>Core HR Modules</h2>
            <p>
              Everything you need to manage your people, processes, and
              performance in one place.
            </p>
          </div>
          <div class="people-module-grid">
            <article class="reveal">
              <i class="bi bi-person-vcard" aria-hidden="true"></i><h3>Employee Management</h3>
              <p>
                Manage employee information, documents, roles, and
                organizational structure.
              </p>
            </article>
            <article class="reveal delay-1">
              <i class="bi bi-person-plus" aria-hidden="true"></i><h3>Recruitment Management</h3>
              <p>
                Streamline hiring with job postings, applicant tracking,
                interviews, and onboarding.
              </p>
            </article>
            <article class="reveal delay-2">
              <i class="bi bi-arrow-repeat" aria-hidden="true"></i><h3>Employee Lifecycle Management</h3>
              <p>
                Manage the complete employee journey from onboarding to exit
                seamlessly.
              </p>
            </article>
            <article class="reveal">
              <i class="bi bi-calendar2-check" aria-hidden="true"></i><h3>Leave Management</h3>
              <p>
                Simplify leave requests, approvals, balance tracking, and
                leave policies.
              </p>
            </article>
            <article class="reveal delay-1">
              <i class="bi bi-bar-chart-line" aria-hidden="true"></i><h3>Performance Management</h3>
              <p>
                Set goals, track performance, conduct reviews, and drive
                employee growth.
              </p>
            </article>
            <article class="reveal delay-2">
              <i class="bi bi-cash-stack" aria-hidden="true"></i><h3>Payroll Management</h3>
              <p>
                Automate payroll processing, salary calculations, tax
                management, and payslips.
              </p>
            </article>
            <article class="reveal">
              <i class="bi bi-clock-history" aria-hidden="true"></i><h3>Shift &amp; Attendance Management</h3>
              <p>
                Manage shifts, track attendance, overtime, and ensure accurate
                time reporting.
              </p>
            </article>
          </div>
        </div>` }} />
    </>
  );
}
