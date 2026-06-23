export default function GateRoles() {
  return (
    <>
      <section className="section roles-section" id="roles" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal"><div class="eyebrow"><span></span> Role-based workflow</div><h2>Built for Everyone Involved.</h2></div>
        <div class="role-grid">
          <article class="reveal">
            <i class="bi bi-person" aria-hidden="true"></i>
            <h3>Visitor</h3>
          </article>
          <article class="reveal delay-1">
            <i class="bi bi-person-check" aria-hidden="true"></i>
            <h3>Host</h3>
          </article>
          <article class="reveal delay-2">
            <i class="bi bi-shield-lock" aria-hidden="true"></i>
            <h3>Security Team</h3>
          </article>
          <article class="reveal">
            <i class="bi bi-speedometer2" aria-hidden="true"></i>
            <h3>Administrator</h3>
          </article>
        </div>
      </div>` }} />
    </>
  );
}
