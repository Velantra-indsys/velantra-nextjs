export default function HeroSection() {
  return (
    <>
      <section className="platform-hero" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container platform-hero-grid">
        <div class="platform-copy reveal">
          <h1><span><em>One</em> Platform.</span><span><em>One</em> Ecosystem.</span><span><em>On</em> Your Hands.</span><span>Your Operations,</span><span>Finally Connected</span></h1>
          <p>Most businesses run on disconnected tools — one for HR, one for the gate, one for the ERP. Velantra brings them together. One platform, one view, one place to act.</p>
          <div class="platform-actions">
            <a class="button button-primary" href="#products">Explore Products <b>→</b></a>
            <a class="button button-secondary" href="#contact">Book a Demo</a>
          </div>
        </div>
        <div class="hero-showcase reveal delay-1" aria-label="Velantra app overview">
          <svg class="showcase-symbols" aria-hidden="true">
            <symbol id="ic-hr" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5"/><circle cx="17.5" cy="8" r="2.3"/><path d="M16 13.2c2.6.3 4.8 2.1 5 4.8"/></symbol>
            <symbol id="ic-payroll" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="12" rx="2.5"/><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18"/><path d="M10 15h4.2a1.5 1.5 0 0 0 0-3H10m0 0v6"/></symbol>
            <symbol id="ic-gate" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 4 4M6.5 18V8.5M14.5 18V8.5M6.5 13h8"/></symbol>
            <symbol id="ic-visitor" viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="16" rx="3"/><circle cx="12" cy="10" r="2.4"/><path d="M8.5 16c.7-2 2-3 3.5-3s2.8 1 3.5 3M9 6h6"/></symbol>
            <symbol id="ic-leave" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="m8.5 14.5 2 2 4-4.2"/></symbol>
            <symbol id="ic-asset" viewBox="0 0 24 24"><path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="M3 8l9 5 9-5M12 13v8"/></symbol>
            <symbol id="ic-vehicle" viewBox="0 0 24 24"><path d="M5 16h14l-1.5-5.5A2 2 0 0 0 15.6 9H8.4a2 2 0 0 0-1.9 1.5L5 16Z"/><path d="M7 16v2M17 16v2M7.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 6h6"/></symbol>
            <symbol id="ic-dashboard" viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="4" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="10" width="7" height="10" rx="1.5"/></symbol>
            <symbol id="ic-home" viewBox="0 0 24 24"><path d="m3 11 9-7 9 7"/><path d="M5 10v9h14v-9"/></symbol>
            <symbol id="ic-analytics" viewBox="0 0 24 24"><path d="M4 19V10M10 19V5M16 19v-7M22 19v-3"/></symbol>
            <symbol id="ic-inbox" viewBox="0 0 24 24"><path d="M3 7h18l-2 6H5L3 7Z"/><path d="M5 13v6h14v-6"/></symbol>
            <symbol id="ic-profile" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.2"/><path d="M4.5 20.5c0-3.6 3.4-5.5 7.5-5.5s7.5 1.9 7.5 5.5"/></symbol>
            <symbol id="ic-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
            <symbol id="ic-bell" viewBox="0 0 24 24"><path d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5 1.5 6H4.5C4.5 14 6 13 6 9Z"/><path d="M10 19a2 2 0 0 0 4 0"/></symbol>
          </svg>
          <div class="showcase-glow"></div>
          <svg class="showcase-orbit" viewBox="0 0 600 600" aria-hidden="true">
            <circle cx="300" cy="300" r="276"/>
            <circle cx="300" cy="300" r="200"/>
          </svg>
          <div class="showcase-phone">
            <i class="iphone-button iphone-action"></i>
            <i class="iphone-button iphone-volume-up"></i>
            <i class="iphone-button iphone-volume-down"></i>
            <i class="iphone-button iphone-power"></i>
            <div class="phone-screen">
              <span class="iphone-island"><i></i></span>
              <div class="phone-bar"><span class="phone-brand">Dashboard</span><svg><use href="#ic-bell"/></svg></div>
              <p class="phone-greeting">Good morning, <strong>Alex</strong> 👋</p>
              <div class="phone-overview">
                <div class="overview-head"><span>Total Overview</span><small>This Month</small></div>
                <div class="overview-chart"><span style="height:35%"></span><span style="height:55%"></span><span style="height:42%"></span><span style="height:70%"></span><span style="height:60%"></span><span style="height:85%"></span><span style="height:50%"></span></div>
              </div>
              <div class="phone-stats">
                <div><b>1,248</b><small>Employees</small></div>
                <div><b>256</b><small>Active Requests</small></div>
                <div><b>89%</b><small>Tasks Completed</small></div>
                <div><b>1,037</b><small>Assets</small></div>
              </div>
              <div class="phone-quick">
                <span>Quick Access</span>
                <div class="quick-grid">
                  <div><svg><use href="#ic-hr"/></svg><small>HRMS</small></div>
                  <div><svg><use href="#ic-payroll"/></svg><small>Payroll</small></div>
                  <div><svg><use href="#ic-leave"/></svg><small>Leave</small></div>
                  <div><svg><use href="#ic-asset"/></svg><small>Assets</small></div>
                </div>
              </div>
              <div class="phone-nav">
                <svg class="active"><use href="#ic-home"/></svg>
                <svg><use href="#ic-analytics"/></svg>
                <span class="phone-fab"><svg><use href="#ic-plus"/></svg></span>
                <svg><use href="#ic-inbox"/></svg>
                <svg><use href="#ic-profile"/></svg>
              </div>
            </div>
          </div>
          <div class="showcase-card card-hr"><svg><use href="#ic-asset"/></svg><span>Asset<br>Management</span></div>
          <div class="showcase-card card-project"><svg><use href="#ic-payroll"/></svg><span>Smart HR &amp;<br>Payroll</span></div>
          <div class="showcase-card card-finance"><svg><use href="#ic-visitor"/></svg><span>Visitor<br>Management</span></div>
          <div class="showcase-card card-chat"><svg><use href="#ic-gate"/></svg><span>Smart Gate<br>Management</span></div>
          <div class="showcase-card card-assets"><svg><use href="#ic-vehicle"/></svg><span>Vehicle<br>Tracking</span></div>
          <div class="showcase-card card-helpdesk"><svg><use href="#ic-dashboard"/></svg><span>Reports &amp;<br>Dashboard</span></div>
        </div>
      </div>` }} />
    </>
  );
}
