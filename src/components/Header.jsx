import React, { useState, useEffect } from 'react';
import resumePdf from '../assets/Gurjit_Singh_Senior_Web_Developer_CV.pdf';

export default function Header({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('nav-locked');
    } else {
      document.body.classList.remove('nav-locked');
    }
  }, [isMenuOpen]);

  const handleBrandClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    window.location.reload();
  };

  const navLinks = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'expertise', label: 'Stack', href: '#expertise' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'ai', label: 'AI Workflow', href: '#ai' },
    { id: 'services', label: 'Capabilities', href: '#services' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="container header-container">
        <div className="nav-shell">
          {/* Brand Logo & Reload Handler */}
          <a
            className="brand"
            href="/"
            onClick={handleBrandClick}
            aria-label="Gurjit Singh Home - Reload Page"
          >
            <span className="brand-badge" aria-hidden="true">GS</span>
            <span className="brand-meta">
              <span className="brand-name">Gurjit Singh</span>
              <span className="brand-role">Senior Full Stack Developer</span>
            </span>
          </a>

          {/* Desktop & Mobile Navigation Menu */}
          <nav className="site-nav" aria-label="Main Navigation">
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="navMenu">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Navigation Action Buttons */}
          <div className="nav-actions">
            <a
              className="btn btn-sm btn-outline nav-resume"
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Gurjit_Singh_Senior_Web_Developer_CV.pdf"
              aria-label="Download CV PDF"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>CV</span>
            </a>
            <a className="btn btn-sm btn-primary nav-contact-btn" href="#contact">
              <span>Hire Me</span>
            </a>
            <button
              className="nav-toggle"
              id="navToggle"
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="navMenu"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
