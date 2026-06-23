import { getSmartIdIconMarkup } from '@/components/shared/smartIdIconMarkup';

export default function SmartIdFeatures() {
  return (
    <>
      <section className="section smart-feature-section" id="features" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal"><div class="eyebrow"><span></span> Features of Smart ID</div><h2>Everything employees need in one secure app.</h2><p>Every capability in Smart ID is designed around one goal — making work simpler, faster, and less frustrating for everyone involved.</p></div>
        <div class="smart-feature-grid">
          <article class="reveal">${getSmartIdIconMarkup('featureDigitalId', 'smart-id-home-icon')}<h3>Digital Employee ID</h3><ul>Every employee carries a verified digital identity — accessible on their phone, always current, always ready. No lost cards, no queues at reception.</article>
          <article class="reveal delay-1"><i class="bi bi-calendar-check" aria-hidden="true"></i><h3>Attendance Management</h3><ul>Attendance recorded accurately without paperwork or manual logs. Employees mark themselves in, managers see who's present — instantly, from anywhere.</ul></article>
          <article class="reveal delay-2"><i class="bi bi-calendar-minus" aria-hidden="true"></i><h3>Leave Management</h3><ul>Leave requests submitted, tracked, and resolved without back-and-forth emails. Balances always visible. Approvals reach the right person immediately.</ul></article>
          <article class="reveal"><i class="bi bi-check2-square" aria-hidden="true"></i><h3>Approval Workflows</h3><ul>Nothing gets stuck waiting for a manager to be at their desk. Approvals for any request reach the right person on their phone — and get resolved fast.</ul></article>
          <article class="reveal delay-1"><i class="bi bi-megaphone" aria-hidden="true"></i><h3>Notice Board</h3><ul>Every announcement reaches every employee — no missed circulars, no relying on word of mouth. Important updates are always front and centre.</ul></article>
          <article class="reveal delay-2"><i class="bi bi-clipboard-data" aria-hidden="true"></i><h3>Daily Pulse Surveys</h3><ul>Know how your teams actually feel. Quick, targeted surveys get honest responses — giving leaders the insight to act before small issues become big ones.</ul></article>
          <article class="reveal"><i class="bi bi-receipt" aria-hidden="true"></i><h3>Travel &amp; Expense Claims</h3><ul>Expenses submitted from the field the moment they happen. No lost receipts, no end-of-month scramble. Finance teams see claims in real time.</ul></article>
        </div>
      </div>` }} />
    </>
  );
}


