import { getGeminiAiIconMarkup } from '@/components/shared/geminiAiIconMarkup';
import { getSmartIdIconMarkup } from '@/components/shared/smartIdIconMarkup';

export default function AboutCoverage() {
  return (
    <>
      <section className="section about-coverage" id="coverage" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
        <div class="section-heading centered reveal">
          <div class="eyebrow"><span></span> What Velantra Covers</div>
          <h2>Four connected capabilities for daily operations.</h2>
        </div>
        <div class="coverage-grid">
          <article class="reveal"><i class="bi bi-door-open" aria-hidden="true"></i><span>Live</span><h3>SmartGate</h3><p>Every person and vehicle at your gate — known, approved, and on record.</p></article>
          <article class="reveal delay-1"><i class="bi bi-people" aria-hidden="true"></i><span>Live</span><h3>Smart HR</h3><p>Hiring to exit. Attendance to payroll. One system that doesn't lose the thread.</p></article>
          <article class="reveal delay-2">${getSmartIdIconMarkup('aboutCoverageSmartId', 'smart-id-home-icon')}<span>Live</span><h3>Smart ID</h3><p>Your employees manage their workday. HR stops answering the same questions.p</p></article>
          <article class="reveal">${getGeminiAiIconMarkup('aboutCoverageAi')}<span>New</span><h3>AI + ERP Connect</h3><p>Your ERP data, turned into answers — without a single manual report.</p></article>
        </div>
      </div>` }} />
    </>
  );
}

