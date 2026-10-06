import React from 'react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experienceTitle">
      <div className="container">
        <div className="section-header centered reveal">
          <span className="section-eyebrow">04 / CAREER TIMELINE</span>
          <h2 className="section-title" id="experienceTitle">11+ Years of Professional Growth.</h2>
          <p className="section-subtitle">
            Consistent technical evolution from hands-on developer to senior engineering leadership.
          </p>
        </div>

        <div className="timeline-container">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className={`timeline-item ${exp.isCurrent ? 'current' : ''} reveal`}
              aria-labelledby={`role-${exp.id}-title`}
            >
              <div className="timeline-node">
                {exp.isCurrent && <span className="node-pulse"></span>}
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <span className="timeline-period">
                      {exp.period} &bull; {exp.duration}
                    </span>
                    <h3 className="timeline-role" id={`role-${exp.id}-title`}>
                      {exp.role}
                    </h3>
                    <p className="timeline-company">{exp.company} &bull; {exp.location}</p>
                  </div>
                  <div className={`role-badge ${exp.isCurrent ? 'senior' : ''}`}>
                    {exp.level}
                  </div>
                </div>

                <div className="role-tags">
                  {exp.tags.map((tag, tIdx) => (
                    <span className="tag-pill" key={tIdx}>
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="role-bullet-list">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} dangerouslySetInnerHTML={{ __html: bullet }} />
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
