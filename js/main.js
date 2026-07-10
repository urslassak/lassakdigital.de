document.addEventListener('DOMContentLoaded', () => {
  // Dynamically load webmanifest only if not on file:// protocol (prevents local CORS errors)
  if (window.location.protocol !== 'file:') {
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = 'site.webmanifest';
    document.head.appendChild(link);
  }

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
    const hoverables = document.querySelectorAll('a, button, iframe, input, .nav-toggle, .workflow-card, .process-card');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '14px';
        cursor.style.height = '14px';
        ring.style.width = '48px';
        ring.style.height = '48px';
        ring.style.borderColor = 'rgba(207, 154, 74, 0.7)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'var(--accent-glow)';
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

  // 4. Formspree Callback Form Handling
  const callbackForm = document.getElementById('formspree-callback');
  const formSuccess = document.getElementById('form-success');

  if (callbackForm && formSuccess) {
    callbackForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(callbackForm);

      try {
        const response = await fetch(callbackForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Fade out the form
          callbackForm.style.opacity = '0';
          callbackForm.style.transform = 'translateY(-10px)';

          setTimeout(() => {
            callbackForm.style.display = 'none';
            formSuccess.style.display = 'flex';
          }, 300); // Matches --transition-smooth (0.3s)
        } else {
          alert('Ups! Es gab ein Problem beim Absenden des Formulars. Bitte versuche es erneut.');
        }
      } catch (error) {
        alert('Ups! Es gab ein Problem beim Absenden des Formulars. Bitte überprüfe Deine Internetverbindung.');
      }
    });
  }

  // 5. About Modal Dialog (Über mich)
  const aboutModal = document.getElementById('aboutModal');
  const openModalBtn = document.getElementById('openAboutModal');
  const closeModalBtn = document.getElementById('closeAboutModal');

  if (aboutModal && openModalBtn && closeModalBtn) {
    openModalBtn.addEventListener('click', () => {
      aboutModal.showModal();
      document.body.style.overflow = 'hidden';
    });

    closeModalBtn.addEventListener('click', () => {
      aboutModal.close();
      document.body.style.overflow = '';
    });

    // Close when clicking on the backdrop
    aboutModal.addEventListener('click', (e) => {
      const rect = aboutModal.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        aboutModal.close();
        document.body.style.overflow = '';
      }
    });
  }
});
