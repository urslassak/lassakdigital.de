document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Custom Cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  if (cursor && ring) {
    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    function animRing() {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animRing);
    }
    animRing();

    // Cursor hover effects on interactive elements
    const hoverables = document.querySelectorAll('a, button, iframe, .nav-toggle, .variant-card');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '14px';
        cursor.style.height = '14px';
        ring.style.width = '48px';
        ring.style.height = '48px';
        ring.style.borderColor = 'rgba(255, 77, 28, 0.7)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'rgba(255, 77, 28, 0.4)';
      });
    });
  }

  // 2. Mobile navigation menu toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.querySelector('.nav-menu');
  const navElement = document.querySelector('nav');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('mobile-open');
      navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // Auto-close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('mobile-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navElement && !navElement.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('mobile-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Scroll Reveal Animation using IntersectionObserver
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    reveals.forEach(r => observer.observe(r));
  }

  // 4. Calendly Two-Click Consent Loader
  const loadBtn = document.getElementById('loadCalendlyBtn');
  const placeholder = document.getElementById('calendlyPlaceholder');
  if (loadBtn && placeholder) {
    loadBtn.addEventListener('click', () => {
      const container = placeholder.parentElement;
      container.innerHTML = `
        <iframe src="https://calendly.com/urs-lassakdigital/new-meeting"
          style="width: 100%; height: 600px; border: 0;" frameborder="0">
        </iframe>
      `;
    });
  }
});
