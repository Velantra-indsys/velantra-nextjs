export default function WhatWeDoSection() {
  return (
    <>
      <section className="home-section what-section" id="what-we-do" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container what-grid">
        <div class="what-copy reveal">
          <div class="home-heading"><span>What We Do</span><h2>Innovation Meets Business</h2><p>Making business operations simpler, smarter, and more connected.
Empowering organizations with technology built for the future.</p></div>
          <div class="what-actions">
            <a class="button button-primary" href="#products">Get Started</a>
            <a class="button button-secondary" href="#contact">Learn More</a>
          </div>
        </div>
        <div class="what-orbit-clip reveal delay-1">
        <div class="orbit-system" aria-label="Velantra connected capabilities">
          <svg class="orbit-symbols" aria-hidden="true">
            <symbol id="orbit-process" viewBox="0 0 24 24"><rect x="3" y="4" width="6" height="6" rx="2"/><rect x="15" y="14" width="6" height="6" rx="2"/><path d="M9 7h4a3 3 0 0 1 3 3v4M15 17h-4a3 3 0 0 1-3-3v-4"/><path d="m12 5 2 2-2 2M12 15l-2 2 2 2"/></symbol>
            <symbol id="orbit-people" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
            <symbol id="orbit-performance" viewBox="0 0 24 24"><path d="M3 12h4l3 8 4-16 3 8h4"/><path d="M4 20h16"/></symbol>
            <symbol id="orbit-scan" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><rect x="7" y="7" width="4" height="4" rx=".7"/><rect x="13" y="7" width="4" height="4" rx=".7"/><rect x="7" y="13" width="4" height="4" rx=".7"/><path d="M13 13h1.5v1.5H13zM16 13h1v4h-1M13 16h1.5"/></symbol>
            <symbol id="orbit-track" viewBox="0 0 24 24"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/><path d="M3 21h18"/></symbol>
            <symbol id="orbit-secure" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><rect x="8" y="11" width="8" height="6" rx="1.5"/><path d="M10 11V9a2 2 0 1 1 4 0v2"/></symbol>
            <symbol id="orbit-acquire" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></symbol>
            <symbol id="orbit-empower" viewBox="0 0 24 24"><path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/></symbol>
            <symbol id="orbit-elevate" viewBox="0 0 24 24"><path d="m3 17 6-6 4 4 7-8"/><path d="M14 7h6v6"/><path d="M4 21h16"/></symbol>
          </svg>
          <div class="orbit-center"><span class="brand-logo"><img src="/Velentra-logo.png" alt="Velantra"></span></div>
          <div class="orbit-ring orbit-ring-one">
            <span class="orbit-node orbit-blue" style="--p:0" aria-label="Process"><span class="orbit-content"><b>Process</b><svg><use href="#orbit-process"></use></svg></span></span>
            <span class="orbit-node orbit-green" style="--p:1" aria-label="People"><span class="orbit-content"><b>People</b><svg><use href="#orbit-people"></use></svg></span></span>
            <span class="orbit-node orbit-orange" style="--p:2" aria-label="Performance"><span class="orbit-content"><b>Performance</b><svg><use href="#orbit-performance"></use></svg></span></span>
          </div>
          <div class="orbit-ring orbit-ring-two">
            <span class="orbit-node orbit-cyan" style="--p:0" aria-label="Scan"><span class="orbit-content"><b>Scan</b><svg><use href="#orbit-scan"></use></svg></span></span>
            <span class="orbit-node orbit-violet" style="--p:1" aria-label="Track"><span class="orbit-content"><b>Track</b><svg><use href="#orbit-track"></use></svg></span></span>
            <span class="orbit-node orbit-amber" style="--p:2" aria-label="Secure"><span class="orbit-content"><b>Secure</b><svg><use href="#orbit-secure"></use></svg></span></span>
          </div>
          <div class="orbit-ring orbit-ring-three">
            <span class="orbit-node orbit-indigo" style="--p:0" aria-label="Acquire"><span class="orbit-content"><b>Acquire</b><svg><use href="#orbit-acquire"></use></svg></span></span>
            <span class="orbit-node orbit-rose" style="--p:1" aria-label="Empower"><span class="orbit-content"><b>Empower</b><svg><use href="#orbit-empower"></use></svg></span></span>
            <span class="orbit-node orbit-gold" style="--p:2" aria-label="Elevate"><span class="orbit-content"><b>Elevate</b><svg><use href="#orbit-elevate"></use></svg></span></span>
          </div>
        </div>
        </div>
      </div>` }} />
    </>
  );
}
