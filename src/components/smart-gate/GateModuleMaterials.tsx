export default function GateModuleMaterials() {
  return (
    <>
      <section className="section gate-module-section mat-bg" id="materials" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container gate-module-layout">
        <div class="gate-module-copy reveal">
          <div class="eyebrow"><span></span> Materials management</div>
          <h2>Track Every Item.<br>In or Out.</h2>
          <p>Complete visibility over every material that moves through your gate — inward deliveries, outward dispatches, and returnable assets, all documented and approved.</p>
          <a class="button button-primary" href="/#contact">See It in Action <b>&rarr;</b></a>
        </div>
        <div class="gate-module-visual reveal delay-1">
          <div class="gm-cards-row">
            <div class="gm-card materials-theme">
              <div class="gmc-top"><small>Materials Gate Pass</small><b>MGP-2024-00047</b></div>
              <div class="gmc-body">
                <div class="gmc-row"><small>Material</small><b>Steel Rods — 200 Units</b></div>
                <div class="gmc-row"><small>Movement</small><b>Inward Delivery</b></div>
                <div class="gmc-row"><small>Vendor</small><b>Sundaram Industries</b></div>
                <div class="gmc-row"><small>PO Number</small><b>PO-2024-00891</b></div>
              </div>
              <div class="gmc-status-bar"><span class="gmc-chip gmc-approved">✓ Approved</span><span>Gate A · 10:45 AM</span></div>
            </div>
            <div class="gm-info-card"><small>Material Pass</small><h3>Steel Rods</h3><dl><div><dt>Quantity</dt><dd>200 Units</dd></div><div><dt>Vehicle No.</dt><dd>TN-01-AB-12**</dd></div><div><dt>Driver</dt><dd>Ra**** K****</dd></div><div><dt>Received By</dt><dd>Store Manager</dd></div></dl><div class="gm-steps"><b>Gate Movement</b><span>Request raised</span><span>Manager approved</span><span>Gate cleared</span></div></div>
          </div>
          <div class="gm-qr-bar">
            <div class="gm-mini-qr"></div>
            <div class="gm-qr-bar-info"><b>MGP-2026-00047 · Inward</b><small>Steel Rods — Sundaram Industries · Gate A</small></div>
            <span class="gm-qr-chip mat-chip">✓ Cleared</span>
          </div>
        </div>
      </div>` }} />
    </>
  );
}
