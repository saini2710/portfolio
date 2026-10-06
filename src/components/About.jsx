import React from 'react';

export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="aboutTitle">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">01 / PROFESSIONAL PROFILE</span>
          <h2 className="section-title" id="aboutTitle">Full-Stack Engineering with Business &amp; Commerce Depth.</h2>
        </div>

        <div className="about-grid">
          <div className="about-narrative reveal">
            <p className="about-lead">
              I am a <strong>Senior Full Stack Web Developer</strong> with <strong>11+ years of hands-on experience</strong> architecting, developing, and maintaining high-performance web applications and enterprise-grade eCommerce systems.
            </p>
            <p>
              My core background is anchored in <strong>PHP, WordPress, WooCommerce, Shopify, JavaScript, React.js, Node.js, REST APIs, MySQL, and Laravel</strong>. Throughout my career at Satguru Technologies, I have led the end-to-end development of <strong>100+ commercial projects</strong>, delivering custom themes, bespoke plugins, complex business logic, custom payment gateway authorizations, and third-party CRM pipelines.
            </p>
            <p>
              Beyond coding, I take full ownership of the technical lifecycle: from initial requirements analysis and task estimation to team coordination, client communication, system migrations, Core Web Vitals optimization, and long-term production stability.
            </p>
            <div className="about-actions">
              <a className="btn btn-outline" href="#experience">
                <span>View Career Timeline</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a className="btn btn-ghost" href="#contact">
                <span>Direct Contact Details &rarr;</span>
              </a>
            </div>
          </div>

          {/* Impact Metrics Grid */}
          <div className="about-metrics-grid reveal">
            <div className="metric-card">
              <div className="metric-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="metric-val">11+</div>
              <div className="metric-title">Years Experience</div>
              <p className="metric-desc">Continuous professional web development experience from 2015 to Present.</p>
            </div>

            <div className="metric-card">
              <div className="metric-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="metric-val">100+</div>
              <div className="metric-title">Projects Delivered</div>
              <p className="metric-desc">Commercial WordPress, WooCommerce, Shopify, and PHP web builds led to production.</p>
            </div>

            <div className="metric-card">
              <div className="metric-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="metric-val">Full-Stack</div>
              <div className="metric-title">Frontend to Backend</div>
              <p className="metric-desc">PHP, Laravel, MySQL, Node.js, JavaScript, and React with responsive UI precision.</p>
            </div>

            <div className="metric-card">
              <div className="metric-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6a1.78 1.78 0 0 0 0-3.2z"></path>
                </svg>
              </div>
              <div className="metric-val">API &amp; Pay</div>
              <div className="metric-title">Gateways &amp; Integrations</div>
              <p className="metric-desc">Windcave, Gelato API, payment authorizations, CRMs, webhooks, and REST endpoints.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
