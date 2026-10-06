import React from 'react';
import { tickerTechnologies } from '../data/skills';

export default function Ticker() {
  return (
    <section className="ticker-section" aria-label="Technologies Marquee">
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {tickerTechnologies.map((tech, index) => (
            <span className="ticker-item" key={`tick-1-${index}`}>
              <span className="ticker-bullet">&bull;</span> {tech}
            </span>
          ))}
          {/* Duplicate for seamless infinite scroll */}
          {tickerTechnologies.map((tech, index) => (
            <span className="ticker-item" key={`tick-2-${index}`}>
              <span className="ticker-bullet">&bull;</span> {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
