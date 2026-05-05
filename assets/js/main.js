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

  const terminalCopyButton = document.querySelector('.hero-command__copy');
  const terminalCode = document.querySelector('.hero-command__code');
  if (terminalCopyButton && terminalCode) {
    const defaultLabel = terminalCopyButton.textContent || 'Copy';
    const copiedLabel = 'Copied';
    let copyResetTimer = null;

    const setCopiedState = () => {
      terminalCopyButton.classList.add('is-copied');
      terminalCopyButton.setAttribute('title', copiedLabel);
      terminalCopyButton.textContent = copiedLabel;

      window.clearTimeout(copyResetTimer);
      copyResetTimer = window.setTimeout(() => {
        terminalCopyButton.classList.remove('is-copied');
        terminalCopyButton.setAttribute('title', defaultLabel);
        terminalCopyButton.textContent = defaultLabel;
      }, 1800);
    };

    const copyText = async () => {
      const text = terminalCode.textContent.trim();

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(terminalCode);
          if (!selection) {
            throw new Error('Clipboard selection unavailable');
          }

          selection.removeAllRanges();
          selection.addRange(range);
          const copied = document.execCommand('copy');
          selection.removeAllRanges();

          if (!copied) {
            throw new Error('Clipboard copy failed');
          }
        }

        setCopiedState();
      } catch (error) {
        terminalCopyButton.setAttribute('aria-label', 'Copy failed');
        terminalCopyButton.setAttribute('title', 'Copy failed');
      }
    };

    terminalCopyButton.addEventListener('click', copyText);
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
