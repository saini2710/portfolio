import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('nav-locked');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('nav-locked');
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-area">
            <span className="case-badge">
              <span className="badge-dot"></span>
              {project.badge}
            </span>
            <h2 className="modal-project-title" id="modal-project-title">
              {project.title}
            </h2>
            <a
              className="case-domain"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.domain} <span className="ext-arrow">&nearr;</span>
            </a>
          </div>

          <button
            className="modal-close-btn"
            type="button"
            onClick={onClose}
            aria-label="Close project details modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Main Visual Preview */}
          <div className="modal-preview-frame">
            <div className="browser-frame">
              <div className="browser-header">
                <div className="window-controls">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address">{project.domain}</div>
              </div>
              <div className="browser-viewport modal-viewport">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  width="800"
                  height="450"
                />
              </div>
            </div>
          </div>

          {/* Project Details Columns */}
          <div className="modal-details-grid">
            <div className="modal-detail-main">
              <h3 className="modal-section-heading">Project Overview</h3>
              <p className="modal-text">{project.fullDescription || project.shortDescription}</p>

              <h3 className="modal-section-heading">My Role &amp; Responsibilities</h3>
              <p className="modal-role-highlight">{project.role}</p>
              <ul className="modal-bullet-list">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: highlight }} />
                ))}
              </ul>

              {project.features && project.features.length > 0 && (
                <>
                  <h3 className="modal-section-heading">Key Architectural Features</h3>
                  <ul className="modal-bullet-list">
                    {project.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="modal-detail-sidebar">
              <div className="modal-meta-box">
                <h4 className="modal-meta-title">TECHNOLOGIES USED</h4>
                <div className="case-tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span className="tech-tag" key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-meta-box">
                <h4 className="modal-meta-title">PRODUCTION DEPLOYMENT</h4>
                <p className="modal-meta-val">Live Commercial Client System</p>
                <a
                  className="btn btn-primary modal-action-btn"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit Live Website</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
