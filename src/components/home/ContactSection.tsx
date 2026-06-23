'use client';

import { useEffect } from 'react';

export default function ContactSection() {

  useEffect(() => {
    const forms = Array.from(document.querySelectorAll<HTMLFormElement>("form"));
    const cleanups = forms.map((form) => {
      const onSubmit = (event: SubmitEvent) => {
        const contactMail = form.dataset.contactMail;
        event.preventDefault();
        const button = form.querySelector<HTMLButtonElement>("button[type='submit']");
        if (!button) return;
        const original = button.innerHTML;
        if (contactMail) {
          const formData = new FormData(form);
          const message = [
            `Full name: ${formData.get("name") || ""}`,
            `Work email: ${formData.get("email") || ""}`,
            `Company: ${formData.get("company") || ""}`,
            `Product interest: ${formData.get("product") || ""}`,
            "",
            "Message:",
            `${formData.get("message") || ""}`,
          ].join("\n");
          button.innerHTML = "Opening email...";
          button.disabled = true;
          window.location.href = `mailto:${contactMail}?subject=${encodeURIComponent("Velentra demo request")}&body=${encodeURIComponent(message)}`;
          window.setTimeout(() => { button.innerHTML = original; button.disabled = false; }, 2000);
          return;
        }
        button.innerHTML = "Request received";
        button.disabled = true;
        window.setTimeout(() => { button.innerHTML = original; button.disabled = false; form.reset(); }, 2500);
      };
      form.addEventListener("submit", onSubmit);
      return () => form.removeEventListener("submit", onSubmit);
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
  return (
    <>
      <section className="home-cta" id="contact" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container reveal">
        <div class="contact-intro">
          <h2 class="contact-title">Contact Us</h2>
          <span>Ready to modernize operations?</span>
          <h3>Build a smarter, more connected workplace.</h3>
          <p>Tell us about your organization and the workflows you want to improve. Our team will contact you with a tailored Velantra demo.</p>
          <div class="contact-details">
            <a class="contact-method contact-method-whatsapp" href="https://wa.me/916374326329" target="_blank" rel="noopener" aria-label="Chat with Velantra sales on WhatsApp">
              <i aria-hidden="true"><svg viewBox="0 0 32 32" focusable="false"><path d="M16 3.6A12.1 12.1 0 0 0 5.8 22.2L4 28l6-1.6A12.1 12.1 0 1 0 16 3.6Zm0 22.1c-2 0-3.9-.6-5.6-1.7l-.4-.2-3.5.9 1-3.4-.3-.4A9.9 9.9 0 1 1 16 25.7Zm5.4-7.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1a8.1 8.1 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.4.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.5-.4Z"/></svg></i>
              <span><small>WhatsApp</small><b>Chat with us</b></span>
            </a>
            <a class="contact-method contact-method-email" href="mailto:sales@indsys.com">
              <span><small>Email us</small><b>sales@indsys.com</b></span>
            </a>
          </div>
        </div>
        <form class="contact-form" action="mailto:sales@indsys.com" method="post" enctype="text/plain" data-contact-mail="hemanthviky@gmail.com">
          <div class="contact-form-head"><span>Book a demo</span><h3>Tell us about your needs</h3><p>Complete the form and our team will get back to you.</p></div>
          <div class="contact-form-grid">
            <label>Full name<input type="text" name="name" autocomplete="name" placeholder="Your full name" required></label>
            <label>Work email<input type="email" name="email" autocomplete="email" placeholder="name@company.com" required></label>
            <label>Company<input type="text" name="company" autocomplete="organization" placeholder="Company name" required></label>
            <label>Product interest<select name="product" required><option value="" selected disabled>Select a product</option><option>Smart-ID</option><option>Smart-Gate</option><option>Smart-People</option><option>Complete Velantra Suite</option></select></label>
          </div>
          <label>How can we help?<textarea name="message" placeholder="Tell us about your Employee, gate, or HR requirements" required></textarea></label>
          <button class="button contact-submit" type="submit">Submit demo request <b>→</b></button>
          <small>By submitting, you agree to be contacted about your request.</small>
        </form>
      </div>` }} />
    </>
  );
}
