import { getSmartIdIconMarkup } from '@/components/shared/smartIdIconMarkup';

export default function SmartIdFeatures() {
  return (
    <>
      <section className="section smart-feature-section" id="features" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal"><div class="eyebrow"><span></span> Features of Smart ID</div><h2>One app that covers the entire employee workday.</h2><p>Smart ID is built around how employees actually work — not how HR software textbooks say they should.</p></div>
        <div class="smart-feature-grid">
          <article class="reveal">${getSmartIdIconMarkup('featureDigitalId', 'smart-id-home-icon')}<h3>Your Employees, Always in the Loop</h3><ul>Every employee has a verified digital identity, live attendance record, and direct line to company updates — no intermediary, no delay.</article>
          <article class="reveal delay-1"><i class="bi bi-calendar-check" aria-hidden="true"></i><h3>Leave and Approvals Without the Back-and-Forth</h3><ul>Requests raised, routed, and resolved on the app. Managers approve from their phone. HR gets the record automatically. No follow-up needed.</ul></article>
          <article class="reveal delay-2"><i class="bi bi-calendar-minus" aria-hidden="true"></i><h3>Management Visibility Without Asking for It</h3><ul>Team attendance, open requests, daily pulse responses — managers see what matters without calling HR or waiting for a morning report.</ul></article>
          <article class="reveal"><i class="bi bi-check2-square" aria-hidden="true"></i><h3>Expenses and Claims, Handled in the Field</h3><ul>Employees submit travel and expense claims on the spot. No paper forms, no end-of-month scramble, no lost receipts.</ul></article>
        </div>
      </div>` }} />
    </>
  );
}


