export default function SmartPeopleHero() {
  return (
    <>
      <section className="inner-hero people-hero" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container inner-hero-grid">
          <div class="people-hero-copy reveal">
            <div class="people-label"><span></span> Smart HR</div>
            <h1>Smart People.<br /><em>Smarter HR Management.</em></h1>
            <h2>
              Manage Your Entire Employee Lifecycle from One Powerful Platform
            </h2>
            <p>
              Smart HR is a comprehensive HR management solution that helps
              organizations automate processes, improve employee experience,
              and drive performance with real-time insights.
            </p>
            <!-- <ul class="people-hero-list">
              <li>Employee Management</li>
              <li>Payroll &amp; Salary Processing</li>
              <li>Attendance Management</li>
              <li>Performance Management</li>
              <li>Leave &amp; Holiday Management</li>
              <li>Department &amp; Designation</li>
              <li>Shift Management</li>
              <li>Reports &amp; Dashboards</li>
            </ul> -->
            <div class="hero-actions people-hero-actions">
            </div>
          </div>

          <div class="people-visual reveal delay-1" aria-label="Executive HR dashboard">
            <div class="people-dashboard executive-dashboard">
              <div class="people-top">
                <b>Executive Dashboard</b><span><i class="bi bi-broadcast-pin" aria-hidden="true"></i> Live</span>
              </div>
              <div class="people-kpis executive-kpis">
                <div><small>Total employees</small><b>102</b><em>Active staff</em></div>
                <div><small>Present today</small><b>0</b><em>0% attendance rate</em></div>
                <div><small>Late arrivals</small><b>0</b><em>No leave today</em></div>
                <div><small>Avg productivity</small><b>0%</b><em>Expected hours</em></div>
                <div><small>Non-productive hrs</small><b>0</b><em>Total gap today</em></div>
              </div>
              <div class="executive-hours">
                <span><small>Cumulative Work Hours</small><b>0:00:00</b></span>
                <em>Overall</em><em>Employee</em>
              </div>
              <div class="people-main executive-main">
                <div class="people-chart executive-chart">
                  <small>Productivity vs Non-Productivity Trend</small>
                  <span style="height: 18%"></span>
                  <span style="height: 18%"></span>
                  <span style="height: 18%"></span>
                  <span style="height: 18%"></span>
                  <span style="height: 18%"></span>
                  <span style="height: 18%"></span>
                </div>
                <div class="people-list executive-list">
                  <small>Daily metrics</small>
                  <p><i class="bi bi-clock-history" aria-hidden="true"></i><b>Productive hours</b><strong>0:00</strong></p>
                  <p><i class="bi bi-hourglass-split" aria-hidden="true"></i><b>Non-productive hours</b><strong>0:00</strong></p>
                  <p><i class="bi bi-bell" aria-hidden="true"></i><b>Alert methods</b><strong>No data</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>` }} />
    </>
  );
}
