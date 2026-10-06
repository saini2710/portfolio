import React, { useState } from 'react';
import resumePdf from '../assets/Gurjit_Singh_Senior_Web_Developer_CV.pdf';

export default function Contact({ onShowToast }) {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = async (text, key) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setCopiedKey(key);
      onShowToast(`Copied: ${text}`);

      setTimeout(() => {
        setCopiedKey(null);
      }, 2200);
    } catch (err) {
      onShowToast(`Could not copy: ${text}`);
    }
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contactTitle">
      <div className="container">
        <div className="contact-card reveal">
          <div className="contact-header">
            <span className="section-eyebrow">08 / GET IN TOUCH</span>
            <h2 className="contact-title" id="contactTitle">Have a project or senior opportunity?</h2>
            <p className="contact-lead">
              Let&rsquo;s build something robust, performant, and reliable. I am open to senior engineering roles, architectural consulting, and full-stack web/eCommerce engagements.
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="contact-grid">

            {/* Option 1: Email */}
            <div className="contact-item">
              <div className="contact-item-header">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="contact-label">EMAIL ADDRESS</div>
                  <a className="contact-val" href="mailto:gurijapra@gmail.com">gurijapra@gmail.com</a>
                </div>
              </div>
              <div className="contact-item-actions">
                <button
                  className="btn btn-sm btn-outline copy-btn"
                  type="button"
                  onClick={() => handleCopy('gurijapra@gmail.com', 'email')}
                  aria-label="Copy email address to clipboard"
                  style={copiedKey === 'email' ? { borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' } : {}}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>{copiedKey === 'email' ? 'Copied!' : 'Copy'}</span>
                </button>
                <a className="btn btn-sm btn-ghost" href="mailto:gurijapra@gmail.com">Send Mail &rarr;</a>
              </div>
            </div>

            {/* Option 2: Phone */}
            <div className="contact-item">
              <div className="contact-item-header">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div className="contact-label">DIRECT PHONE</div>
                  <a className="contact-val" href="tel:+919781679045">+91 97816 79045</a>
                </div>
              </div>
              <div className="contact-item-actions">
                <button
                  className="btn btn-sm btn-outline copy-btn"
                  type="button"
                  onClick={() => handleCopy('+919781679045', 'phone')}
                  aria-label="Copy phone number to clipboard"
                  style={copiedKey === 'phone' ? { borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' } : {}}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>{copiedKey === 'phone' ? 'Copied!' : 'Copy'}</span>
                </button>
                <a className="btn btn-sm btn-ghost" href="tel:+919781679045">Call Now &rarr;</a>
              </div>
            </div>

            {/* Option 3: LinkedIn */}
            <div className="contact-item">
              <div className="contact-item-header">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <div className="contact-label">LINKEDIN PROFILE</div>
                  <a className="contact-val" href="https://www.linkedin.com/in/gurjit-singh-yg" target="_blank" rel="noopener noreferrer">linkedin.com/in/gurjit-singh-yg</a>
                </div>
              </div>
              <div className="contact-item-actions">
                <a className="btn btn-sm btn-primary" href="https://www.linkedin.com/in/gurjit-singh-yg" target="_blank" rel="noopener noreferrer">
                  <span>Connect on LinkedIn</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Option 4: Location & Status */}
            <div className="contact-item">
              <div className="contact-item-header">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className="contact-label">LOCATION &amp; AVAILABILITY</div>
                  <span className="contact-val static">Mohali, Punjab, India &bull; Remote &amp; Hybrid</span>
                </div>
              </div>
              <div className="contact-item-actions">
                <a
                  className="btn btn-sm btn-secondary"
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Gurjit_Singh_Senior_Web_Developer_CV.pdf"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Contact Callout CTA */}
          <div className="contact-bottom-cta">
            <p>Looking for a proven Senior Full Stack Developer to lead or elevate your next web build?</p>
            <div className="cta-buttons">
              <a className="btn btn-primary" href="mailto:gurijapra@gmail.com">
                <span>Email Me Directly</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a
                className="btn btn-secondary"
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                download="Gurjit_Singh_Senior_Web_Developer_CV.pdf"
              >
                <span>Download Full CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
