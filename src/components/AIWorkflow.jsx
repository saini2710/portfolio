import React from 'react';

export default function AIWorkflow() {
  return (
    <section className="section ai-section" id="ai" aria-labelledby="aiTitle">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">05 / MODERN ENGINEERING WORKFLOW</span>
          <h2 className="section-title" id="aiTitle">AI-Assisted Development &amp; Productivity.</h2>
          <p className="section-subtitle">
            Leveraging modern AI tooling as a force multiplier for architectural planning, rapid debugging, documentation, and technical velocity &mdash; anchored by senior engineering judgment.
          </p>
        </div>

        <div className="ai-grid">
          <div className="ai-banner-card reveal">
            <div className="ai-banner-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
              <span>DEVELOPER-IN-THE-LOOP SUPERPOWER</span>
            </div>
            <h3 className="ai-banner-title">Speed, Precision &amp; Technical Reasoning</h3>
            <p className="ai-banner-text">
              I utilize <strong>ChatGPT, Claude, and advanced Prompt Engineering</strong> to accelerate development cycles. Rather than relying on AI blindly, I leverage LLMs as an intelligent pair programmer to validate edge cases, generate boilerplate API clients, draft technical documentation, and debug complex integration quirks faster.
            </p>
            <div className="ai-tools-list">
              <span className="ai-tool-tag">ChatGPT (GPT-4o)</span>
              <span className="ai-tool-tag">Claude 3.5 Sonnet</span>
              <span className="ai-tool-tag">Prompt Engineering</span>
              <span className="ai-tool-tag">Context Modeling</span>
            </div>
          </div>

          <div className="ai-features-grid">
            <div className="ai-feature-card reveal">
              <div className="ai-feature-num">01</div>
              <h4>Architecture &amp; Task Planning</h4>
              <p>Evaluating trade-offs between monolithic vs headless architectures, mapping out API data flows, and modeling relational MySQL schemas prior to writing code.</p>
            </div>

            <div className="ai-feature-card reveal">
              <div className="ai-feature-num">02</div>
              <h4>Deep Debugging &amp; Edge Cases</h4>
              <p>Analyzing obscure stack traces, resolving regex intricacies, isolating concurrency bugs, and inspecting third-party API edge cases with high velocity.</p>
            </div>

            <div className="ai-feature-card reveal">
              <div className="ai-feature-num">03</div>
              <h4>Code Assistance &amp; Boilerplate</h4>
              <p>Rapidly scaffolding custom WordPress plugin hooks, PHP API integration wrappers, Shopify Liquid helper functions, and REST endpoint controllers.</p>
            </div>

            <div className="ai-feature-card reveal">
              <div className="ai-feature-num">04</div>
              <h4>Technical Documentation &amp; Specs</h4>
              <p>Generating clear Swagger/Postman API documentation, release notes, client handover manuals, and code comments to maintain high codebase maintainability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
