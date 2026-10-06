import React from 'react';
import { educationList } from '../data/education';

export default function Education() {
  return (
    <section className="section education-section" id="education" aria-labelledby="eduTitle">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">07 / ACADEMIC FOUNDATION</span>
          <h2 className="section-title" id="eduTitle">Education &amp; Credentials.</h2>
          <p className="section-subtitle">
            Formal Computer Science education underpinning practical engineering expertise.
          </p>
        </div>

        <div className="education-grid">
          {educationList.map((edu) => (
            <article className="education-card reveal" key={edu.id}>
              <div className="edu-year-badge">{edu.year}</div>
              <div className="edu-details">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">{edu.institution}</p>
                <p className="edu-location">{edu.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
