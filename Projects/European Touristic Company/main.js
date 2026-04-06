/* ============================================================
   European Touristic Company — main.js
   Features: dark mode toggle, sticky header, mobile nav,
   tour filters, testimonial carousel, scroll reveal,
   back-to-top, form handling
   ============================================================ */

(function () {
  'use strict';

  /* ─── Dark Mode Toggle ─────────────────────────────────────── */
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');

  // Determine initial theme
  let currentTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', currentTheme);
      updateThemeIcon();
      themeToggle.setAttribute('aria-label', 'Switch to ' + (currentTheme === 'dark' ? 'light' : 'dark') + ' mode');
    });
  }

  function updateThemeIcon() {
    if (!themeToggle) return;
    themeToggle.innerHTML = currentTheme === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  /* ─── Sticky Header: scroll-aware behaviour ────────────────── */
  const header = document.getElementById('header');
  let lastScrollY = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (header) {
          header.classList.toggle('header--scrolled', y > 20);
          if (y > 300) {
            header.classList.toggle('header--hidden', y > lastScrollY && y > 300);
          } else {
            header.classList.remove('header--hidden');
          }
        }
        lastScrollY = y;
        ticking = false;
      });
      ticking = true;
    }
  });

  /* ─── Mobile Nav ───────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.classList.toggle('is-open', !isOpen);
      mobileNav.setAttribute('aria-hidden', String(isOpen));
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close on nav link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── Tour Filters ─────────────────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tourCards = document.querySelectorAll('.tour-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards with a smooth fade
      tourCards.forEach(card => {
        const cats = card.dataset.category || '';
        const matches = filter === 'all' || cats.includes(filter);

        if (matches) {
          card.classList.remove('hidden');
          // small stagger for visible cards
          card.style.animation = 'none';
          requestAnimationFrame(() => {
            card.style.animation = 'fadeInUp 0.4s cubic-bezier(0.16,1,0.3,1) forwards';
          });
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // inject keyframe for card filter animation
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(styleEl);

  /* ─── Testimonial Carousel ─────────────────────────────────── */
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('testiDots');
  const prevBtn = document.getElementById('testiPrev');
  const nextBtn = document.getElementById('testiNext');

  if (track && dotsContainer) {
    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    // On desktop show all 4, on mobile/tablet show 1
    let perPage = getPerPage();
    let currentPage = 0;
    let totalPages = Math.ceil(cards.length / perPage);

    function getPerPage() {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 900) return 2;
      return 4; // show all
    }

    function buildDots() {
      dotsContainer.innerHTML = '';
      totalPages = Math.ceil(cards.length / perPage);
      if (totalPages <= 1) {
        // hide nav if only 1 page
        if (prevBtn) prevBtn.style.visibility = 'hidden';
        if (nextBtn) nextBtn.style.visibility = 'hidden';
        return;
      }
      if (prevBtn) prevBtn.style.visibility = '';
      if (nextBtn) nextBtn.style.visibility = '';

      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.className = 'testi-dot' + (i === currentPage ? ' active' : '');
        dot.setAttribute('aria-label', `Go to page ${i + 1}`);
        dot.addEventListener('click', () => goToPage(i));
        dotsContainer.appendChild(dot);
      }
    }

    function goToPage(page) {
      currentPage = Math.max(0, Math.min(page, totalPages - 1));
      const offset = currentPage * perPage;
      // translate track
      const cardWidth = track.querySelector('.testimonial-card').offsetWidth;
      const gap = 24; // --space-6
      track.style.transform = `translateX(-${currentPage * (cardWidth * perPage + gap * perPage)}px)`;
      // update dots
      dotsContainer.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === currentPage));
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToPage(currentPage + 1));

    buildDots();

    // Auto-advance
    let autoTimer = setInterval(() => {
      if (totalPages > 1) {
        goToPage((currentPage + 1) % totalPages);
      }
    }, 5000);

    track.addEventListener('mouseenter', () => clearInterval(autoTimer));
    track.addEventListener('mouseleave', () => {
      autoTimer = setInterval(() => {
        if (totalPages > 1) goToPage((currentPage + 1) % totalPages);
      }, 5000);
    });

    // Rebuild on resize
    window.addEventListener('resize', () => {
      const newPer = getPerPage();
      if (newPer !== perPage) {
        perPage = newPer;
        currentPage = 0;
        track.style.transform = 'translateX(0)';
        buildDots();
      }
    });
  }

  /* ─── Scroll Reveal ────────────────────────────────────────── */
  // Add reveal classes to major sections
  const revealTargets = [
    { selector: '.section__header', delay: 0 },
    { selector: '.dest-card', delay: 1 },
    { selector: '.tour-card', delay: 1 },
    { selector: '.why-card', delay: 1 },
    { selector: '.testimonial-card', delay: 1 },
    { selector: '.about__visual', delay: 0 },
    { selector: '.about__content', delay: 2 },
  ];

  revealTargets.forEach(({ selector, delay }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      if (delay) el.classList.add(`reveal-delay-${Math.min(i + 1, 5)}`);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ─── Back to Top ──────────────────────────────────────────── */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── Smooth scroll for anchor links ──────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ─── Contact Form ─────────────────────────────────────────── */
  const form = document.querySelector('.contact__form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = '✓ Enquiry Sent!';
        btn.style.background = '#2d6a1a';
        btn.style.borderColor = '#2d6a1a';

        setTimeout(() => {
          btn.textContent = original;
          btn.style.background = '';
          btn.style.borderColor = '';
          btn.disabled = false;
          form.reset();
        }, 3500);
      }, 1400);
    });
  }

  /* ─── Number Counter animation for hero stats ─────────────── */
  const stats = document.querySelectorAll('.stat__num');
  if (stats.length) {
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const text = el.textContent;
          const num = parseFloat(text.replace(/[^0-9.]/g, ''));
          const suffix = text.replace(/[0-9.]/g, '');
          const duration = 1800;
          const startTime = performance.now();

          function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease out
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = (Math.round(num * eased * 10) / 10) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          counterObs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    stats.forEach(s => counterObs.observe(s));
  }

  /* ─── Cursor ripple on primary buttons ────────────────────── */
  document.querySelectorAll('.btn--primary').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute; border-radius: 50%;
        width: 0; height: 0;
        background: rgba(255,255,255,0.25);
        transform: translate(-50%, -50%);
        left: ${x}px; top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out forwards;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 700);
    });
  });

  // Ripple keyframe
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes ripple {
      to { width: 200px; height: 200px; opacity: 0; }
    }
  `;
  document.head.appendChild(rippleStyle);

})();
