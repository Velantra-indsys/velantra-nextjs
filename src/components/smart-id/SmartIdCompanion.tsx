export default function SmartIdCompanion() {
  return (
    <>
      <section className="section smart-companion" id="companion" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container companion-grid">
        <div class="companion-copy reveal delay-1">
          <div class="eyebrow"><span></span> About Smart ID</div>
          <h2>Your Digital Workplace Companion</h2>
          <p>Smart ID is an intelligent employee companion app designed to simplify daily Employee management — for employees, managers, and HR teams alike.</p>
          <p>Works standalone or alongside your existing HR system. Smart ID plugs into what you already have and fills the gap where employees need it most — on their phone, in the moment.</p>
          <ul class="companion-checklist">
            <li><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9"/><path d="m6 10.5 2.8 2.8 5-5.5"/></svg>Employees always informed and in control</li>
            <li><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9"/><path d="m6 10.5 2.8 2.8 5-5.5"/></svg>Managers approve and act without delays</li>
            <li><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9"/><path d="m6 10.5 2.8 2.8 5-5.5"/></svg>HR teams gain real-time Employee visibility</li>
            <li><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9"/><path d="m6 10.5 2.8 2.8 5-5.5"/></svg>Works with your existing HR infrastructure</li>
            <li class="checklist-full"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9"/><path d="m6 10.5 2.8 2.8 5-5.5"/></svg>Mobile-friendly — designed for the modern workplace</li>
          </ul>
        </div>
      </div>` }} />
    </>
  );
}
