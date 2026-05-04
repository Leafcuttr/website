document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll('.section, .card, .pain-card, .solution-item, .stat-item, .use-case-card, .feature-card, .hero > *');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.14,
      rootMargin: '0px 0px -8% 0px',
    });

    revealTargets.forEach((target) => {
      revealObserver.observe(target);
    });
  } else {
    revealTargets.forEach((target) => {
      target.classList.add('is-visible');
    });
  }

  const bars = document.querySelectorAll('.bar-fill[data-width]');
  bars.forEach((bar) => {
    const targetWidth = bar.dataset.width;
    bar.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.width = targetWidth;
      });
    });
  });

  const currentPath = window.location.pathname.replace(/index\.html$/, '').replace(/\/+$/, '/') || '/';
  document.querySelectorAll('.site-nav-list a').forEach((link) => {
    if (link.dataset.noActive === 'true') {
      return;
    }

    const linkPath = new URL(link.href).pathname.replace(/index\.html$/, '').replace(/\/+$/, '/') || '/';
    if (linkPath === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const terminalCode = document.querySelector('.hero-terminal__body code');
  if (terminalCode) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fullText = terminalCode.textContent;

    if (prefersReducedMotion) {
      terminalCode.textContent = fullText;
    } else {
      const typingDurationMs = 10000;
      const pauseDurationMs = 30000;
      const charDelayMs = Math.max(18, Math.min(160, Math.round(typingDurationMs / Math.max(fullText.length, 1))));

      const runCycle = () => {
        terminalCode.textContent = '';
        terminalCode.classList.add('is-typing');

        let index = 0;
        const typeNext = () => {
          terminalCode.textContent = fullText.slice(0, index);
          if (index < fullText.length) {
            index += 1;
            window.setTimeout(typeNext, charDelayMs);
          } else {
            terminalCode.classList.remove('is-typing');
            window.setTimeout(runCycle, pauseDurationMs);
          }
        };

        window.setTimeout(typeNext, 300);
      };

      window.setTimeout(runCycle, 300);
    }
  }
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav-list');
  
  if (navToggle && siteNav) {
    const closeMenu = () => {
      navToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-active');
      document.body.classList.remove('nav-open');
      siteNav.querySelectorAll('details[open]').forEach((details) => {
        details.open = false;
      });
    };

    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('is-active');
      document.body.classList.toggle('nav-open');
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (!siteNav.contains(e.target) && !navToggle.contains(e.target) && siteNav.classList.contains('is-active')) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && siteNav.classList.contains('is-active')) {
        closeMenu();
      }
    });
  }
});
