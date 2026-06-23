export default function Footer() {
  return <footer className="site-footer premium-footer" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container footer-grid">
      <div><a class="brand footer-brand" href="/"><span class="brand-logo"><img src="/Velentra-logo.png" alt=""></span><span>Velantra</span></a><p>Velantra helps organizations build smarter, more secure, and efficient workplaces through innovative technology and digital transformation solutions.</p><div class="social-links"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="YouTube">yt</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">ig</a></div></div>
      <div><b>Products</b><a href="/smart-id">Smart-ID</a><a href="/smart-gate">Smart-Gate</a><a href="/smart-people">Smart-People</a></div>
      <div><b>Company</b><a href="/about">About Us</a><a href="/#contact">Contact</a><a href="/#faq">Resources</a></div>
      <div><b>Contact</b><a href="https://wa.me/916374326329" target="_blank" rel="noopener">WhatsApp</a><a href="mailto:sales@indsys.com">sales@indsys.com</a></div>
    </div>
    <div class="container footer-bottom"><span>&copy; 2026 Velantra. All Rights Reserved.</span><span>Powered by <strong>INDSYS</strong></span></div>` }} />;
}
