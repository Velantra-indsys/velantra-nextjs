export default function SmartIdBenefits() {
  return (
    <>
      <section className="section smart-benefits" id="benefits" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal"><div class="eyebrow light"><span></span> Why Choose Smart ID?</div><h2>A better employee experience with real-time visibility.</h2></div>
        <div class="smart-benefit-grid">
          <article class="reveal"><i class="bi bi-speedometer2" aria-hidden="true"></i><h3>Increase Productivity</h3><p>Automate routine activities and reduce manual effort.</p></article>
          <article class="reveal delay-1"><i class="bi bi-emoji-smile" aria-hidden="true"></i><h3>Improve Employee Experience</h3><p>Give employees easy access anytime, anywhere.</p></article>
          <article class="reveal delay-2"><i class="bi bi-eye" aria-hidden="true"></i><h3>Real-Time Visibility</h3><p>Track attendance, approvals, leave, requests, and expenses instantly.</p></article>
          <article class="reveal"><i class="bi bi-chat-dots" aria-hidden="true"></i><h3>Better Communication</h3><p>Keep employees informed through centralized announcements.</p></article>
          <article class="reveal delay-1"><i class="bi bi-lightning-charge" aria-hidden="true"></i><h3>Faster Decision Making</h3><p>Gain real-time insights and make faster decisions.</p></article>
          <article class="reveal delay-2"><i class="bi bi-shield-lock" aria-hidden="true"></i><h3>Secure &amp; Reliable</h3><p>Enterprise-grade security ensures data privacy and protection.</p></article>
        </div>
      </div>` }} />
    </>
  );
}
