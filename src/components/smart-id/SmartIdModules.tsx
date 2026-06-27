export default function SmartIdModules() {
  return (
    <>
      <section className="section smart-modules" id="industries" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container modules-layout">
        <div class="module-panel reveal"><div class="eyebrow"><span></span> Powerful Modules Included</div><h2>Everything an employee needs. One app.</h2><div class="module-pills"><span>Digital ID</span><span>Attendance</span><span>Leave Management</span><span>Approval Workflows</span><span>Notice Board</span><span>Surveys &amp; Feedback</span><span>Expense Claims</span></div></div>
        <div class="industry-panel reveal delay-1"><div class="eyebrow"><span></span> Designed for Every Industry</div><h2>Built for diverse workplaces.</h2><div class="industry-pills"><span>Manufacturing</span><span>Corporate Offices</span><span>Large Organizations</span><span>Construction</span><span> Mid-sized Enterprises</span><span>IT &amp; Technology</span></div></div>
      </div>` }} />
    </>
  );
}
