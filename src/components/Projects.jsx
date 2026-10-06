import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const PRESET_FILTERS = [
  { label: 'All Projects', value: 'All' },
  { label: 'WordPress', value: 'WordPress' },
  { label: 'WooCommerce', value: 'WooCommerce' },
  { label: 'Shopify & Liquid', value: 'Shopify' },
  { label: 'PHP & Custom APIs', value: 'PHP & APIs' },
  { label: 'Healthcare', value: 'Healthcare' },
  { label: 'Real Estate', value: 'Real Estate' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;

    const filterLower = activeFilter.toLowerCase().trim();

    if (filterLower === 'wordpress') {
      return (
        project.technologies.some((t) => t.toLowerCase().includes('wordpress')) ||
        project.category.toLowerCase().includes('wordpress') ||
        project.badge.toLowerCase().includes('wordpress')
      );
    }

    if (filterLower === 'woocommerce') {
      return (
        project.technologies.some((t) => t.toLowerCase().includes('woocommerce')) ||
        project.category.toLowerCase().includes('woocommerce') ||
        project.badge.toLowerCase().includes('woocommerce')
      );
    }

    if (filterLower === 'shopify' || filterLower === 'shopify & liquid') {
      return (
        project.technologies.some((t) => t.toLowerCase().includes('shopify') || t.toLowerCase().includes('liquid')) ||
        project.category.toLowerCase().includes('shopify') ||
        project.badge.toLowerCase().includes('shopify')
      );
    }

    if (filterLower === 'php & apis' || filterLower === 'php' || filterLower === 'api') {
      return (
        project.technologies.some(
          (t) =>
            t.toLowerCase().includes('php') ||
            t.toLowerCase().includes('api') ||
            t.toLowerCase().includes('laravel') ||
            t.toLowerCase().includes('custom')
        ) ||
        project.badge.toLowerCase().includes('api') ||
        project.badge.toLowerCase().includes('gateway')
      );
    }

    if (filterLower === 'healthcare') {
      return (
        project.category.toLowerCase().includes('healthcare') ||
        project.badge.toLowerCase().includes('healthcare') ||
        project.badge.toLowerCase().includes('wellness') ||
        project.title.toLowerCase().includes('surgiassist') ||
        project.title.toLowerCase().includes('carbogenetics')
      );
    }

    if (filterLower === 'real estate') {
      return (
        project.category.toLowerCase().includes('real estate') ||
        project.badge.toLowerCase().includes('real estate') ||
        project.technologies.some((t) => t.toLowerCase().includes('property'))
      );
    }

    // Direct tag or keyword match
    return (
      project.technologies.some(
        (t) => t.toLowerCase() === filterLower || t.toLowerCase().includes(filterLower)
      ) ||
      project.category.toLowerCase().includes(filterLower) ||
      project.badge.toLowerCase().includes(filterLower) ||
      project.title.toLowerCase().includes(filterLower)
    );
  });

  const isCustomTagActive =
    activeFilter !== 'All' &&
    !PRESET_FILTERS.some((p) => p.value.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="section projects-section" id="projects" aria-labelledby="projectsTitle">
      <div className="container">
        <div className="section-header centered reveal visible">
          <span className="section-eyebrow">02 / FEATURED CASE STUDIES</span>
          <h2 className="section-title" id="projectsTitle">Selected Production Work &amp; Architecture.</h2>
          <p className="section-subtitle">
            Real-world commercial platforms demonstrating platform depth, custom payment gateways, and API pipelines.
          </p>

          {/* Filter Pills Bar */}
          <div className="project-filter-bar reveal visible" role="tablist" aria-label="Filter projects by technology">
            {PRESET_FILTERS.map((preset) => (
              <button
                key={preset.value}
                type="button"
                className={`filter-pill ${activeFilter.toLowerCase() === preset.value.toLowerCase() ? 'active' : ''}`}
                onClick={() => setActiveFilter(preset.value)}
              >
                {preset.label}
              </button>
            ))}

            {/* Custom Tag Pill (if user clicked a specific tech tag on a card) */}
            {isCustomTagActive && (
              <button
                type="button"
                className="filter-pill active custom-active-pill"
                onClick={() => setActiveFilter('All')}
                title="Click to clear tag filter"
              >
                <span>Tag: {activeFilter}</span>
                <span className="pill-clear-icon" style={{ marginLeft: '6px', fontWeight: 'bold' }}>&times;</span>
              </button>
            )}
          </div>

          {/* Results Summary */}
          <div className="filter-results-meta" style={{ marginTop: '0.85rem', fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Showing {filteredProjects.length} of {projects.length} commercial projects
            {activeFilter !== 'All' && (
              <button
                type="button"
                onClick={() => setActiveFilter('All')}
                style={{ marginLeft: '0.75rem', color: 'var(--accent-cyan)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', font: 'inherit' }}
              >
                Show All
              </button>
            )}
          </div>
        </div>

        <div className="case-study-list">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                activeFilter={activeFilter}
                onSelectTag={(tag) => setActiveFilter(tag)}
                onOpenModal={(proj) => setActiveModalProject(proj)}
              />
            ))
          ) : (
            <div className="no-projects-found" style={{ textAlign: 'center', padding: '3rem 1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-card)' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                No projects found matching the filter "{activeFilter}".
              </p>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => setActiveFilter('All')}
              >
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
