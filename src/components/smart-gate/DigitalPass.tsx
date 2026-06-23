export default function DigitalPass() {
  return (
    <>
      <section className="section digital-pass-section" id="pass" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container digital-pass-layout">
        <div class="pass-visual reveal">
          <div class="pass-cards-row">
            <div class="visitor-pass">
              <div class="visitor-pass-top"><small>DAILY ACCESS</small><b>VP-3026-00009</b><em>Nag******</em></div>
              <div class="visitor-pass-detail"><span><small>Time slot</small><b>08:30 AM<br>06:30 PM</b></span><span><small>Valid from</small><b>12 Jun 2024</b></span><span><small>Valid to</small><b>13 Jun 2024</b></span></div>
              <div class="qr-code" aria-label="QR code placeholder"></div>
              <strong>SHOW ME</strong>
            </div>
            <div class="pass-info-card"><small>Visitor</small><h3>Nag******</h3><dl><div><dt>Email</dt><dd>Nag******@example.com</dd></div><div><dt>Phone</dt><dd>93441*****</dd></div><div><dt>Visitor Type</dt><dd>Consultant</dd></div><div><dt>Purpose</dt><dd>Business Consultation</dd></div></dl><div class="pass-timeline"><b>Visit Timeline</b><span>Request submitted</span><span>OTP verified</span><span>Host approved</span></div></div>
          </div>
          <div class="pass-qr-card">
            <div class="pass-qr-large" aria-label="QR code"></div>
            <div class="pass-qr-info">
              <b>Scan to Verify Entry</b>
              <small>VP-3026-00009 &nbsp;·&nbsp; Valid until 06:30 PM</small>
              <span class="pass-qr-status"><i class="bi bi-check-circle-fill" aria-hidden="true"></i> Verified &amp; Active</span>
            </div>
            <div class="pass-qr-gate"><span>Gate</span><b>A-01</b></div>
          </div>
        </div>
        <div class="digital-pass-copy reveal delay-1">
          <div class="eyebrow"><span></span> Digital visitor pass</div>
          <h2>Secure. Smart. Digital.</h2>
          <p>Every approved visitor gets a secure digital pass containing all essential visit information.</p>

          <a class="button button-primary" href="/#contact">See It in Action <b>&rarr;</b></a>
        </div>
      </div>` }} />
    </>
  );
}
