export default function GateModuleContractors() {
  return (
    <>
      <section className="section gate-module-section con-bg" id="contractors" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container gate-module-layout">
        <div class="gate-module-copy reveal">
          <div class="eyebrow"><span></span> Contractor management</div>
          <h2>Authorize Every Contractor.<br>Track Every Tool.</h2>
          <p>Manage service personnel with precision — from work order verification at entry to tool accounting and exit approval. Nothing in, nothing out without a record.</p>
          <a class="button button-primary" href="/#contact">See It in Action <b>&rarr;</b></a>
        </div>
        <div class="gate-module-visual reveal delay-1">
          <div class="gm-cards-row">
            <div class="gm-card contractors-theme">
              <div class="gmc-top"><small>Contractor Pass</small><b>CP-2024-00034</b></div>
              <div class="gmc-body">
                <div class="gmc-row"><small>Contractor</small><b>Rajan Electricals</b></div>
                <div class="gmc-row"><small>Work Order</small><b>WO-2024-00451</b></div>
                <div class="gmc-row"><small>Access Area</small><b>Block B — Level 2</b></div>
                <div class="gmc-row"><small>Tools</small><b>4 Items Logged</b></div>
              </div>
              <div class="gmc-status-bar"><span class="gmc-chip gmc-approved">✓ Authorized</span><span>Valid until 05:00 PM</span></div>
            </div>
            <div class="gm-info-card"><small>Contractor</small><h3>Rajan Kumar</h3><dl><div><dt>Company</dt><dd>Rajan Electricals</dd></div><div><dt>Work Type</dt><dd>Electrical Maintenance</dd></div><div><dt>Tools In</dt><dd>4 Items Logged</dd></div><div><dt>Exit Status</dt><dd>Pending</dd></div></dl><div class="gm-steps"><b>Service Log</b><span>Work order verified</span><span>Authorized by admin</span><span>Tools logged at entry</span></div></div>
          </div>
          <div class="gm-qr-bar">
            <div class="gm-mini-qr"></div>
            <div class="gm-qr-bar-info"><b>CP-2024-00034 · Contractor</b><small>Rajan Kumar · Block B L2 · Valid until 05:00 PM</small></div>
            <span class="gm-qr-chip con-chip">✓ Active</span>
          </div>
        </div>
      </div>` }} />
    </>
  );
}
