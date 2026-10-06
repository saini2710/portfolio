import React from 'react';

export default function ProjectCard({ project, index, activeFilter, onSelectTag, onOpenModal }) {
  return (
    <article
      className="case-study-card reveal visible"
      aria-labelledby={`proj-${project.id}-title`}
    >
      <div className="case-study-media">
        <div
          className="browser-frame"
          onClick={() => onOpenModal(project)}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onOpenModal(project)}
          aria-label={`View ${project.title} project details`}
        >
          <div className="browser-header">
            <div className="window-controls">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="browser-address">{project.domain}</div>
          </div>
          <div className="browser-viewport">
            <img
              src={project.image}
              alt={`${project.title} Website Screenshot`}
              loading="lazy"
              width="600"
              height="375"
            />
          </div>
        </div>
      </div>

      <div className="case-study-info">
        <div className="case-info-top">
          <div className="case-header-row">
            <span className="case-badge">
              <span className="badge-dot"></span>
              {project.badge}
            </span>
            <a
              className="case-domain"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.domain} in new tab`}
            >
              {project.domain} <span className="ext-arrow">↗</span>
            </a>
          </div>

          <h3 className="case-title" id={`proj-${project.id}-title`}>
            {project.title}
          </h3>

          <p className="case-description">
            {project.shortDescription}
          </p>

          <ul className="case-highlights">
            {project.highlights.map((highlight, hIdx) => (
              <li key={hIdx} dangerouslySetInnerHTML={{ __html: highlight }} />
            ))}
          </ul>
        </div>

        <div className="case-footer-row">
          <div className="case-tech-stack" aria-label={`${project.title} Technologies`}>
            {project.technologies.slice(0, 5).map((tech, tIdx) => (
              <button
                type="button"
                className={`tech-tag interactive-tag ${activeFilter?.toLowerCase() === tech.toLowerCase() ? 'active' : ''}`}
                key={tIdx}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTag(tech);
                }}
                title={`Filter projects by ${tech}`}
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="case-actions-group">
            <button
              className="btn btn-sm btn-outline project-detail-btn"
              type="button"
              onClick={() => onOpenModal(project)}
              aria-label={`View detailed case study for ${project.title}`}
            >
              <span>Details</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </button>
            <a
              className="btn btn-sm btn-primary"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live website`}
            >
              <span>Visit Live</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
