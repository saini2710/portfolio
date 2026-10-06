import React from 'react';
import resumePdf from '../assets/Gurjit_Singh_Senior_Web_Developer_CV.pdf';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBrandClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    window.location.reload();
  };

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              className="brand"
              href="/"
              onClick={handleBrandClick}
              aria-label="Gurjit Singh Home - Reload"
            >
              <span className="brand-badge" aria-hidden="true">GS</span>
              <span className="brand-meta">
                <span className="brand-name">Gurjit Singh</span>
                <span className="brand-role">Senior Full Stack Web Developer</span>
              </span>
            </a>
            <p className="footer-tagline">
              11+ years engineering scalable web applications, custom WooCommerce &amp; Shopify platforms, and resilient API integrations.
            </p>
          </div>

          <div className="footer-nav">
            <div className="footer-nav-col">
              <div className="footer-nav-title">NAVIGATION</div>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Featured Projects</a></li>
                <li><a href="#expertise">Tech Stack</a></li>
                <li><a href="#experience">Career Timeline</a></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <div className="footer-nav-title">EXPERTISE</div>
              <ul>
                <li><a href="#ai">AI Workflows</a></li>
                <li><a href="#services">Capabilities</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <div className="footer-nav-title">CONNECT</div>
              <ul>
                <li><a href="mailto:gurijapra@gmail.com">Email</a></li>
                <li><a href="https://www.linkedin.com/in/gurjit-singh-yg" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li>
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Gurjit_Singh_Senior_Web_Developer_CV.pdf"
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; <span id="currentYear">{currentYear}</span> Gurjit Singh. All rights reserved. Senior Full Stack Web Developer.
          </p>
          <div className="footer-controls">
            <div className="system-status">
              <span className="status-dot"></span>
              <span>All systems operational</span>
            </div>
            <a
              className="back-to-top"
              href="#home"
              id="backToTop"
              onClick={handleBackToTop}
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
