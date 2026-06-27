'use client';

import { useEffect } from 'react';

export default function SmartIdHero() {

  useEffect(() => {
    const phoneCarousel = document.querySelector<HTMLElement>("[data-phone-carousel]");
    const phoneTrack = phoneCarousel?.querySelector<HTMLElement>(".pdf-phone-track");
    const phoneDots = Array.from(document.querySelectorAll<HTMLButtonElement>(".phone-carousel-dots button"));
    if (!phoneCarousel || !phoneTrack || !phoneDots.length) return;
    let activePhoneScreen = 0;
    let phoneTimer = 0;
    const showPhoneScreen = (index: number) => {
      activePhoneScreen = (index + phoneDots.length) % phoneDots.length;
      phoneTrack.style.transform = `translateX(-${activePhoneScreen * 100}%)`;
      phoneDots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === activePhoneScreen));
    };
    const startPhoneCarousel = () => {
      window.clearInterval(phoneTimer);
      phoneTimer = window.setInterval(() => showPhoneScreen(activePhoneScreen + 1), 3200);
    };
    const dotCleanups = phoneDots.map((dot, index) => {
      const onClick = () => { showPhoneScreen(index); startPhoneCarousel(); };
      dot.addEventListener("click", onClick);
      return () => dot.removeEventListener("click", onClick);
    });
    const onEnter = () => window.clearInterval(phoneTimer);
    phoneCarousel.addEventListener("mouseenter", onEnter);
    phoneCarousel.addEventListener("mouseleave", startPhoneCarousel);
    startPhoneCarousel();
    return () => {
      window.clearInterval(phoneTimer);
      dotCleanups.forEach((cleanup) => cleanup());
      phoneCarousel.removeEventListener("mouseenter", onEnter);
      phoneCarousel.removeEventListener("mouseleave", startPhoneCarousel);
    };
  }, []);
  return (
    <>
      <section className="smart-id-hero" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container smart-id-hero-grid">
        <div class="smart-id-hero-copy reveal">
          <div class="eyebrow"><span></span> Smart ID</div>
          <h1><span class="h1-big">One App.</span><span class="h1-sub">Everything Your Employees Need.</span></h1>
          <h2>Stop managing employees through WhatsApp groups and Excel sheets.</h2>
          <p>If your employees are chasing managers on WhatsApp for leave approvals, or HR is still maintaining attendance in registers — there's a better way. Smart ID gives every employee a single app for everything they need at work, and gives managers the visibility to act without being chased.</p>
          <div class="hero-actions"><a class="button button-ghost" href="#features">Explore Features</a></div>
        </div>

        <div class="smart-id-phone-stage reveal delay-1" aria-label="Smart ID mobile app screens">
          <div class="phone-glow"></div>
          <div class="smart-real-phone">
            <i class="smart-phone-button smart-phone-action"></i><i class="smart-phone-button smart-phone-volume-up"></i><i class="smart-phone-button smart-phone-volume-down"></i><i class="smart-phone-button smart-phone-power"></i>
            <div class="smart-phone-glass" data-phone-carousel>
              <span class="smart-phone-island"><i></i></span>
              <div class="pdf-phone-track">
                <section class="smart-app-screen leave-screen">
                  <small class="screen-label">LEAVE BALANCE</small>
                  <div class="leave-balance"><strong>CASUAL LEAVE</strong><b>11</b><span>Available</span><small>1 used · 12 total</small></div>
                  <button class="apply-leave">＋ Apply for Leave</button>
                  <small class="screen-label">RECENT APPLICATIONS</small>
                  <div class="request-list"><div><i class="bi bi-file-earmark-text" aria-hidden="true"></i><span><b>Casual Leave</b><small>12 Mar · 1 Day</small></span><em>OPEN</em></div><div><i class="bi bi-file-earmark-text" aria-hidden="true"></i><span><b>Casual Leave</b><small>20 Jan · 1 Day</small></span><em>OPEN</em></div><div><i class="bi bi-file-earmark-check" aria-hidden="true"></i><span><b>Casual Leave</b><small>4 Apr · 3 Days</small></span><em class="approved">APPROVED</em></div></div>
                  <nav class="smart-app-nav"><span>⌂<small>Home</small></span><span>◉<small>Attendance</small></span><span>♧<small>Leave</small></span><span>▦<small>Company</small></span><span>⊖<small>More</small></span></nav>
                </section>
                <section class="smart-app-screen attendance-screen">
                  <header><span>‹</span><b>ATTENDANCE CALENDAR</b><span>◉</span></header>
                  <div class="calendar-month"><span>‹</span><strong>March 2025</strong><span>›</span></div>
                  <div class="calendar-days head"><b>SU</b><b>MO</b><b>TU</b><b>WE</b><b>TH</b><b>FR</b><b>SA</b></div>
                  <div class="calendar-days dates"><i></i><i></i><i></i><i></i><i>1</i><i>2</i><i>3</i><i>2</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i><i>10</i><i>13</i><i>15</i><i>16</i><i>14</i><i>15</i><i>18</i><i>18</i><i>13</i><i>25</i><i>23</i><i>25</i><i>25</i><i>25</i><i>29</i><i class="today">18</i><i>25</i><i>26</i><i>26</i><i>27</i><i>28</i><i>29</i></div>
                  <div class="calendar-key"><span>Present</span><span>Absent</span><span>Half Day</span><span>Holiday</span></div>
                  <div class="attendance-stats"><span><b>26</b><small>PRESENT</small></span><span><b>5</b><small>ABSENT</small></span><span><b>2</b><small>HALF DAY</small></span></div>
                  <nav class="smart-app-nav"><span>⌂<small>Home</small></span><span>◉<small>Attendance</small></span><span>♧<small>Leave</small></span><span>▦<small>Company</small></span><span>⊖<small>More</small></span></nav>
                </section>
                <section class="smart-app-screen profile-screen">
                  <div class="profile-avatar employee-avatar" role="img" aria-label="Alan profile avatar"><i class="fa-solid fa-user" aria-hidden="true"></i></div>
                  <h3>Alan</h3><p>Consultant</p>
                  <dl><div><dt>Employee ID</dt><dd>HR-IN-045</dd></div><div><dt>Contact Number</dt><dd>637********</dd></div><div><dt>Emergency Contact</dt><dd>73********</dd></div><div><dt>Blood Group</dt><dd>AB+</dd></div></dl>
                  <div class="profile-actions"><span>IN</span><span>IN<br><small>LATE IN</small></span><span>OUT</span></div>
                  <nav class="smart-app-nav"><span>⌂<small>Home</small></span><span>◉<small>Attendance</small></span><span>♧<small>Leave</small></span><span>▦<small>Company</small></span><span>⊖<small>More</small></span></nav>
                </section>
              </div>
            </div>
          </div>
          <div class="phone-carousel-dots" aria-label="Choose app screen"><button class="active" type="button" aria-label="Show leave management"></button><button type="button" aria-label="Show attendance calendar"></button><button type="button" aria-label="Show digital employee ID"></button></div>
        </div>
      </div>` }} />
    </>
  );
}


