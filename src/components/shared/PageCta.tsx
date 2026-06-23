type Variant = 'about' | 'smart-gate' | 'smart-id' | 'smart-people';

const ctas: Record<Variant, { className: string; id?: string; html: string }> = {
  'about': { className: 'page-cta people-closing-cta', html: String.raw`<div class="container">
        <div>
          <span>Let's Talk</span>
          <h2>Ready to Connect Your Business?</h2>
          <p>Tell us about your operations. We'll show you exactly where Velantra fits and what it will change.</p>
        </div>
        <div class="people-cta-actions">
          <a class="button" href="/#contact">Book a Demo <b>&rarr;</b></a>
          <a class="button button-ghost" href="https://wa.me/916374326329" target="_blank" rel="noopener">Talk to Our Team <b>&rarr;</b></a>
        </div>
      </div>` },
  'smart-gate': { className: 'page-cta people-closing-cta', html: String.raw`<div class="container">
        <div>
          <span>Ready to Digitize Your Gate Operations?</span>
          <h2>Secure Every Entry. Simplify Every Exit.</h2>
          <p>Take complete control of visitors, materials, vehicles, and contractors — all from one intelligent gate management platform.</p>
        </div>
        <div class="people-cta-actions">
          <a class="button" href="/#contact">Schedule a Free Demo <b>&rarr;</b></a>
          <a class="button button-ghost" href="#overview">See How It Works <b>&rarr;</b></a>
        </div>
      </div>` },
  'smart-id': { className: 'page-cta people-closing-cta', html: String.raw`<div class="container">
        <div>
          <span>Ready to Transform Employee Management?</span>
          <h2>Give Every Employee a Smarter Way to Work.</h2>
          <p>Bring attendance, leave, approvals, digital identity, announcements, surveys, and expenses into one secure mobile experience.</p>
        </div>
        <div class="people-cta-actions">
          <a class="button button-ghost" href="/#contact">Talk to Our Experts <b>&rarr;</b></a>
        </div>
      </div>` },
  'smart-people': { className: 'page-cta people-closing-cta', id: 'contact', html: String.raw`<div class="container">
          <div>
            <span>Ready to Transform Your HR Operations?</span>
            <h2>Smart People. Smart HR Management.</h2>
            <p>
              Digitize your HR processes, empower your employees, and drive
              performance with Smart HR.
            </p>
          </div>
          <div class="people-cta-actions">
            <a class="button" href="mailto:sales@indsys.com"
              >Book a Free Demo <b>&rarr;</b></a
            >
            <a class="button button-ghost" href="mailto:sales@indsys.com"
              >Talk to Our Experts <b>&rarr;</b></a
            >
          </div>
        </div>` },
};

export default function PageCta({ variant }: { variant: Variant }) {
  const cta = ctas[variant];
  return <section className={cta.className} id={cta.id} dangerouslySetInnerHTML={{ __html: cta.html }} />;
}
