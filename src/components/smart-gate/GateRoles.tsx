export default function GateRoles() {
  return (
    <>
      <section className="section roles-section" id="roles" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal"><div class="eyebrow"><span></span> Role-based workflow</div><h2>Built for Everyone Involved.</h2></div>
        <div class="role-grid">
          <article class="reveal">
            <i class="bi bi-person" aria-hidden="true"></i>
            <h3>Visitor</h3>
            <p>Registers digitally, receives a pass instantly, and walks in without paperwork or waiting at a counter.</p>
          </article>
          <article class="reveal delay-1">
            <i class="bi bi-person-check" aria-hidden="true"></i>
            <h3>Host</h3>
            <p>Gets notified the moment a visitor registers, approves or declines from their phone, and never gets caught off-guard.</p>
          </article>
          <article class="reveal delay-2">
            <i class="bi bi-check-lg" aria-hidden="true"></i>
            <h3>Security Team</h3>
            <p>Sees every active pass, every pending entry, every overstay &mdash; one screen, no paperwork, no phone calls to verify.</p>
          </article>
          <article class="reveal">
            <i class="bi bi-clock-history" aria-hidden="true"></i>
            <h3>Administrator</h3>
            <p>Full audit trail for every movement across every gate. Reports available any time &mdash; without asking security to dig through registers.</p>
          </article>
        </div>
      </div>` }} />
    </>
  );
}
