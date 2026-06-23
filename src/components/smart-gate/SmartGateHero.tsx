export default function SmartGateHero() {
  return (
    <>
      <section className="smart-gate-hero" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container smart-gate-hero-grid">
        <div class="smart-gate-hero-copy reveal">
          <div class="eyebrow"><span></span> Gate Management </div>
          <h1>Secure Every Entry.<br>Simplify Every Exit.</h1>
          <p>SmartGate gives your security and operations teams complete control over Visitors, Materials, Vehicles, and Contractors — at every entry and exit point, from one place.</p>
          <div class="hero-actions"><a class="button button-ghost" href="#journey">How It Works</a></div>
        </div>

        <div class="gate-login-stage reveal delay-1">
          <div class="gate-login-glow"></div>
          <div class="gate-login-card">
            <div class="login-brand"><span class="shield-icon"><i class="bi bi-shield-check" aria-hidden="true"></i></span><span><b>Velantra VMS</b><small>Visitor Management System</small></span></div>
            <div class="login-content"><h3>Welcome.</h3><p>Enter your email to verify your identity and begin the registration process.</p><label>Email address<input type="email" value="you@company.com" readonly></label><button type="button">Send OTP</button></div>
          </div>
          <span class="login-orbit orbit-one"></span><span class="login-orbit orbit-two"></span>
          <div class="login-float-card"><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span><b>Visitor verified</b><small>Digital pass ready</small></span></div>
        </div>
      </div>` }} />
    </>
  );
}
