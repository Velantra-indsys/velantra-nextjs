export default function SmartIdBenefits() {
  return (
    <>
      <section className="section smart-benefits" id="benefits" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal"><div class="eyebrow light"><span></span> Why Choose Smart ID?</div><h2>A better employee experience with real-time visibility.</h2></div>
        <div class="smart-benefit-grid">
          <article class="reveal"><i class="bi bi-speedometer2" aria-hidden="true"></i><h3>No More Admin Chasing</h3><p>Employees handle their own attendance, leave, and claims. HR stops being a message relay and starts doing actual HR work.</p></article>
          <article class="reveal delay-1"><i class="bi bi-emoji-smile" aria-hidden="true"></i><h3>Employees Who Feel Informed</h3><p>Company announcements, approvals, and responses reach every employee directly — not through a notice board they walk past once a week.</p></article>
          <article class="reveal delay-2"><i class="bi bi-eye" aria-hidden="true"></i><h3>Managers Who Can Actually Act</h3><p>When a manager can see attendance, pending approvals, and team activity on their phone, decisions happen in minutes — not after the morning meeting.</p></article>
          <article class="reveal"><i class="bi bi-chat-dots" aria-hidden="true"></i><h3>One Place, Not Ten Channels</h3><p>Stop repeating the same message across WhatsApp, email, and notice boards. One announcement reaches everyone — and you know it landed.</p></article>
          <article class="reveal delay-1"><i class="bi bi-lightning-charge" aria-hidden="true"></i><h3>Decisions on Data, Not Gut Feel</h3><p>Gain real-time insights and make faster decisionsSee who's present, what's pending, and what needs your attention — without asking anyone for a report.</p></article>
          <article class="reveal delay-2"><i class="bi bi-shield-lock" aria-hidden="true"></i><h3>Built to Last in the Field</h3><p>Works on everyday Android devices, low-bandwidth connections, and real workplace conditions — not just in a lab demo.</p></article>
        </div>
      </div>` }} />
    </>
  );
}
