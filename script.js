/**
 * GURJIT SINGH — SENIOR FULL STACK WEB DEVELOPER PORTFOLIO
 * Modular Vanilla JavaScript Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const header = document.querySelector('.site-header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const revealElements = document.querySelectorAll('.reveal');
  const sections = document.querySelectorAll('section[id], header[id]');
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');
  const currentYearEl = document.getElementById('currentYear');
  const backToTopBtn = document.getElementById('backToTop');

  let toastTimeout = null;

  // 1. Auto Update Copyright Year
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // 2. Sticky Header Scroll Effect
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Navigation Drawer Toggle
  if (navToggle && navMenu) {
    const toggleMenu = (open) => {
      const isExpanded = open !== undefined ? open : navToggle.getAttribute('aria-expanded') === 'true';
      const nextState = !isExpanded;

      navToggle.setAttribute('aria-expanded', String(nextState));
      navToggle.setAttribute('aria-label', nextState ? 'Close navigation menu' : 'Open navigation menu');
      navMenu.classList.toggle('open', nextState);
      document.body.classList.toggle('nav-locked', nextState);
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMenu(true); // Close it
      }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu(true);
        navToggle.focus();
      }
    });

    // Close menu when any nav link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleMenu(true);
        }
      });
    });
  }

  // 4. Scroll Reveal Animations (IntersectionObserver)
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1,
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  // 5. Active Nav Link on Scroll (IntersectionObserver)
  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              if (href === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => navObserver.observe(sec));
  }

  // 6. 1-Click Copy-to-Clipboard with Toast Feedback
  const showToast = (message) => {
    if (!toast) return;
    const msgSpan = toast.querySelector('.toast-message');
    if (msgSpan) msgSpan.textContent = message;

    toast.classList.add('show');
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  };

  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const textToCopy = button.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for non-https or older environments
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        const originalText = button.querySelector('span')?.textContent;
        const spanEl = button.querySelector('span');
        if (spanEl) spanEl.textContent = 'Copied!';
        button.style.borderColor = 'var(--accent-cyan)';
        button.style.color = 'var(--accent-cyan)';

        showToast(`Copied: ${textToCopy}`);

        setTimeout(() => {
          if (spanEl && originalText) spanEl.textContent = originalText;
          button.style.borderColor = '';
          button.style.color = '';
        }, 2200);
      } catch (err) {
        showToast(`Could not copy: ${textToCopy}`);
      }
    });
  });

  // 7. Back to Top Smooth Scroll
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }

  // 8. Logo / Name Click: Scroll to Top & Reload Page
  const brandLogos = document.querySelectorAll('.brand');
  brandLogos.forEach((logo) => {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      window.location.reload();
    });
  });
});
