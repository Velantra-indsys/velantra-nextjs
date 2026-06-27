export default function GateDashboard() {
  return (
    <>
      <section className="section gate-dashboard-section" id="dashboard" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container dashboard-layout">
        <div class="dashboard-copy reveal">
          <div class="eyebrow"><span></span> Real-time control</div>
          <h2>Complete Visibility with Intelligent Dashboard.</h2>
          <p>Your security team shouldn't be managing gate operations with a clipboard and a phone. SmartGate's live dashboard gives them — and you — total situational awareness from any screen, at any time.</p>
    
          <a class="button button-primary" href="/#contact">Explore Dashboard <b>&rarr;</b></a>
        </div>
        <div class="vms-dashboard reveal delay-1">
          <aside><b><small>SMART GATE</small></b><span class="active">Dashboard</span><span>Visitor Requests</span><span>Visitor List</span><span>Visitor Pass</span><span>Gate Control</span><span>Reports</span></aside>
          <div class="vms-workspace">
            <header><b>Dashboard</b><span>Search menus, pages...</span><em class="admin-user"><i class="bi bi-person-circle" aria-hidden="true"></i>Administrator</em></header>
            <div class="vms-stats"><article><small>Awaiting Approval</small><b>08</b><em>Review</em></article><article><small>Total Visitors</small><b>126</b><em>Today</em></article><article><small>Awaiting Today</small><b>10</b><em>Expected</em></article><article><small>On Premises</small><b>18</b><em>Live</em></article><article><small>Overstayed</small><b>02</b><em>Alert</em></article></div>
            <div class="vms-panels"><article><b>Pending Approvals</b><span>No pending approvals</span></article><article><b>Awaiting Check-In</b><span>Queue is clear</span></article><article><b>Currently On Premises</b><span>18 active visitors</span></article><article><b>Overstayed Visitors</b><span>2 need attention</span></article></div>
          </div>
        </div>
      </div>` }} />
    </>
  );
}
