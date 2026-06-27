export default function SmartIdSecurity() {
  return (
    <>
      <section className="section smart-security" id="security" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container security-grid">
        <div class="security-copy reveal">
          <div class="eyebrow light"><span></span> Enterprise-Grade Security</div>
          <h2>Enterprise security. Without the enterprise complexity.</h2>
          <p>Every employee record in Smart ID is encrypted, every action is logged, and access is controlled by role &mdash; so the right people see the right data, and nothing else. If something changes, you have a full audit trail. If something goes wrong, you know exactly who did what and when.</p>
        </div>
        <div class="fingerprint-card reveal delay-1">
          <span>Employee Management</span>
          <h3>At Your Fingertips</h3>
          <p>Everything an employee needs to manage their workday &mdash; and everything a manager needs to stay on top of their team &mdash; available on one app, without calling HR.</p>
          <a class="security-card-action" href="#features">See the full platform <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>` }} />
    </>
  );
}
