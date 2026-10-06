import React from 'react';
import resumePdf from '../assets/Gurjit_Singh_Senior_Web_Developer_CV.pdf';

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="heroTitle">
      <div className="hero-bg-glow hero-bg-glow-1" aria-hidden="true"></div>
      <div className="hero-bg-glow hero-bg-glow-2" aria-hidden="true"></div>
      <div className="hero-grid-pattern" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Availability Badge */}
          <div className="status-pill reveal">
            <span className="status-dot"></span>
            <span className="status-text">Available for Senior Roles &amp; High-Impact Projects</span>
          </div>

          {/* Main Hero Headline */}
          <p className="hero-eyebrow reveal">Senior Full Stack Web Developer &bull; 11+ Years Experience</p>
          <h1 className="hero-title reveal" id="heroTitle">
            Engineering High-Scale <span className="gradient-text">Web &amp; eCommerce</span> Solutions.
          </h1>

          {/* Lead Paragraph */}
          <p className="hero-lead reveal">
            Senior Web Developer with 11+ years of experience specializing in PHP, WordPress, WooCommerce, Shopify, JavaScript, React.js, and Node.js. Architecting resilient web platforms, custom themes &amp; plugins, high-conversion storefronts, and secure payment &amp; CRM API integrations.
          </p>

          {/* Primary Tech Pills */}
          <div className="hero-tech-strip reveal" aria-label="Core Technology Focus">
            <span className="tech-tag primary">PHP</span>
            <span className="tech-tag primary">WordPress</span>
            <span className="tech-tag primary">WooCommerce</span>
            <span className="tech-tag primary">Shopify</span>
            <span className="tech-tag primary">JavaScript</span>
            <span className="tech-tag">React.js</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">REST APIs</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">Laravel</span>
            <span className="tech-tag">Claude &amp; ChatGPT</span>
          </div>

          {/* Hero Action Buttons */}
          <div className="hero-cta-group reveal">
            <a className="btn btn-lg btn-primary" href="#projects">
              <span>View Featured Work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a
              className="btn btn-lg btn-secondary"
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Gurjit_Singh_Senior_Web_Developer_CV.pdf"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV</span>
            </a>
            <a className="btn btn-lg btn-ghost" href="#contact">
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        {/* Hero Architecture / Terminal Card */}
        <aside className="hero-card reveal" aria-label="Developer Profile Metrics">
          <div className="card-browser-bar">
            <div className="window-controls">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="window-title">gurjit-singh.dev &mdash; system_info.json</div>
          </div>

          <div className="hero-card-body">
            <div className="code-line"><span className="code-key">"name"</span>: <span className="code-val">"Gurjit Singh"</span>,</div>
            <div className="code-line"><span className="code-key">"title"</span>: <span className="code-val">"Senior Full Stack Web Developer"</span>,</div>
            <div className="code-line"><span className="code-key">"experience"</span>: <span className="code-val">"11+ Years (2015 – Present)"</span>,</div>
            <div className="code-line"><span className="code-key">"location"</span>: <span className="code-val">"Mohali, Punjab, India"</span>,</div>
            <div className="code-line"><span className="code-key">"company"</span>: <span className="code-val">"Satguru Technologies (Senior Lead)"</span>,</div>
            <div className="code-line"><span className="code-key">"specialization"</span>: [</div>
            <div className="code-sub-line"><span className="code-accent">"Full-Stack Architecture"</span>,</div>
            <div className="code-sub-line"><span className="code-accent">"WordPress &amp; WooCommerce Customization"</span>,</div>
            <div className="code-sub-line"><span className="code-accent">"Shopify Liquid &amp; App Integrations"</span>,</div>
            <div className="code-sub-line"><span className="code-accent">"Payment Gateways &amp; REST APIs"</span></div>
            <div className="code-line">]</div>

            <div className="card-stats-banner">
              <div className="stat-box">
                <div className="stat-number">11+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-box">
                <div className="stat-number">100+</div>
                <div className="stat-label">Commercial Projects</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-box">
                <div className="stat-number">100%</div>
                <div className="stat-label">End-to-End Ownership</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
