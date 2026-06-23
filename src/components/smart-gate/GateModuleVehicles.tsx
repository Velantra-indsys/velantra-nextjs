export default function GateModuleVehicles() {
  return (
    <>
      <section className="section gate-module-section veh-bg" id="vehicles" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container gate-module-layout">
        <div class="gate-module-visual reveal">
          <div class="gm-cards-row">
            <div class="gm-card vehicles-theme">
              <div class="gmc-top"><small>Vehicle Entry Record</small><b>VER-2024-00183</b></div>
              <div class="gmc-vehicle-badge"><span><i class="bi bi-truck" aria-hidden="true"></i></span><div><b>TN-01-AB-56**</b><small>Heavy Goods Vehicle</small></div></div>
              <div class="gmc-body">
                <div class="gmc-row"><small>Driver</small><b>Su**** Ba**</b></div>
                <div class="gmc-row"><small>Purpose</small><b>Material Delivery</b></div>
                <div class="gmc-row"><small>Entry</small><b>09:15 AM</b></div>
                <div class="gmc-row"><small>Exit By</small><b>01:00 PM</b></div>
              </div>
              <div class="gmc-status-bar"><span class="gmc-chip gmc-active">◉ On Premises</span><span>Gate B</span></div>
            </div>
            <div class="gm-info-card"><small>Vehicle Record</small><h3>TN-01-AB-56**</h3><dl><div><dt>Driver</dt><dd>Su**** Ba**</dd></div><div><dt>Vehicle Type</dt><dd>HGV — Lorry</dd></div><div><dt>Gate</dt><dd>Gate B</dd></div><div><dt>Status</dt><dd>On Premises</dd></div></dl><div class="gm-steps"><b>Movement Log</b><span>Registered at gate</span><span>Driver verified</span><span>Entry authorized</span></div></div>
          </div>
          <div class="gm-qr-bar">
            <div class="gm-mini-qr"></div>
            <div class="gm-qr-bar-info"><b>VER-2024-00183 · Active</b><small>TN-01-AB-56** · Su**** Ba** · Gate B</small></div>
            <span class="gm-qr-chip veh-chip">◉ Active</span>
          </div>
        </div>
        <div class="gate-module-copy reveal delay-1">
          <div class="eyebrow"><span></span> Vehicle management</div>
          <h2>Control Every Vehicle.<br>Every Movement.</h2>
          <p>End-to-end vehicle tracking from the moment a vehicle approaches the gate to the moment it exits — with full verification and audit logs at every step.</p>
          <a class="button button-primary" href="/#contact">See It in Action <b>&rarr;</b></a>
        </div>
      </div>` }} />
    </>
  );
}
