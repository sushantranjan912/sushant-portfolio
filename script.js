/**
 * Sushant Ranjan — Developer Portfolio
 * Vanilla JavaScript Core Engine
 * Zero dependencies, ultra-fast, robust, fully accessible
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. Sticky Navbar & Active Section Highlighting
     ========================================================================== */
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('back-to-top');

  const updateHeaderAndNav = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header blur state
    if (scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Active Section Detection
    let currentId = '';
    const scrollPosition = scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', updateHeaderAndNav, { passive: true });
  updateHeaderAndNav(); // Initial check

  // Back to top action
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     2. Mobile Drawer Navigation
     ========================================================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const setMobileNavState = (isOpen) => {
    if (isOpen) {
      mobileNav.classList.add('open');
      menuToggle.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      mobileNav.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    } else {
      mobileNav.classList.remove('open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !mobileNav.classList.contains('open');
      setMobileNavState(willOpen);
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        setMobileNavState(false);
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
        setMobileNavState(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        setMobileNavState(false);
      }
    });
  }

  /* ==========================================================================
     3. Smooth Anchor Scroll & Immediate Section Element Reveal
     ========================================================================== */
  const allAnchorLinks = document.querySelectorAll('a[href^="#"]');
  allAnchorLinks.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          // Immediately reveal all elements inside the targeted section
          targetSection.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('revealed');
          });
          // Also start any counters in target section
          targetSection.querySelectorAll('.stat-count, .counter').forEach((counter) => {
            animateCounter(counter);
          });
        }
      }
    });
  });

  /* ==========================================================================
     4. Hero Dynamic Typing & Rotating Phrases
     ========================================================================== */
  const dynamicRoleElement = document.getElementById('dynamic-role-text');
  if (dynamicRoleElement) {
    const phrases = [
      'Competitive Programmer.',
      'Problem Solver.',
      'Software Developer.'
    ];
    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = true;
    let typeSpeed = 2200; // start paused on initial phrase

    const typeLoop = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        dynamicRoleElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 40;
      } else {
        dynamicRoleElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 90;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause before deleting
        typeSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 400;
      }

      setTimeout(typeLoop, typeSpeed);
    };

    setTimeout(typeLoop, 2000);
  }

  /* ==========================================================================
     5. Scroll Reveal Animations (Proactive & Instant)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  // Immediately reveal elements already near or above the viewport
  const revealVisible = () => {
    const winHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= winHeight + 120) {
        el.classList.add('revealed');
      }
    });
  };

  revealVisible();
  window.addEventListener('resize', revealVisible, { passive: true });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0;
        if (delay > 0) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, Math.min(parseInt(delay, 10), 200));
        } else {
          entry.target.classList.add('revealed');
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '120px 0px 80px 0px',
    threshold: 0
  });

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  /* ==========================================================================
     6. Animated Number Counters
     ========================================================================== */
  const counterElements = document.querySelectorAll('.stat-count, .counter');

  const animateCounter = (el) => {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';

    const target = parseFloat(el.getAttribute('data-target'));
    const isDecimal = el.getAttribute('data-decimals') === '2';
    const duration = 1400; // ms
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeProgress * target;

      if (isDecimal) {
        el.textContent = currentVal.toFixed(2);
      } else {
        el.textContent = Math.floor(currentVal);
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        if (isDecimal) {
          el.textContent = target.toFixed(2);
        } else {
          el.textContent = target;
        }
      }
    };

    requestAnimationFrame(updateCount);
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '100px 0px 50px 0px',
    threshold: 0.05
  });

  counterElements.forEach((counter) => {
    counterObserver.observe(counter);
  });

  /* ==========================================================================
     7. Copy Email to Clipboard with Toast Notification
     ========================================================================== */
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer = null;

  const showToast = (message) => {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  const copyEmailButtons = document.querySelectorAll('.copy-email-btn');
  copyEmailButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const email = btn.getAttribute('data-email') || 'sushantranjan129@gmail.com';

      // Always show toast immediately to provide instant visual feedback
      showToast(`Copied ${email} to clipboard!`);

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).catch(() => {
          fallbackCopy(email);
        });
      } else {
        fallbackCopy(email);
      }
    });
  });

  const fallbackCopy = (text) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    } catch (err) {
      console.log('Clipboard fallback invoked');
    }
  };

  /* ==========================================================================
     8. Ambient Interactive Background Mesh Canvas
     ========================================================================== */
  const canvas = document.getElementById('ambient-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 24000), 45);
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
        this.baseAlpha = Math.random() * 0.35 + 0.15;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${this.baseAlpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let mouse = { x: null, y: null, maxDist: 130 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });

    let animationFrameId;
    const renderCanvas = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 105) {
            const alpha = (1 - dist / 105) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse if close
        if (mouse.x !== null) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.maxDist) {
            const alpha = (1 - dist / mouse.maxDist) * 0.2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(renderCanvas);
    };

    // Pause animation when tab is inactive
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(renderCanvas);
      }
    });

    renderCanvas();
  }

  /* ==========================================================================
     9. Card 3D Subtle Tilt Effect (Desktop)
     ========================================================================== */
  if (window.matchMedia('(hover: hover) and (min-width: 992px)').matches) {
    const tiltCards = document.querySelectorAll('.project-featured-card, .project-secondary-card');

    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -2.5;
        const rotateY = ((x - centerX) / centerX) * 2.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  console.log(
    '%c Sushant Ranjan | Developer Portfolio %c Ready for SDE & Internship Opportunities %c',
    'background: #6366f1; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
    'background: #0d1117; color: #38bdf8; border: 1px solid #6366f1; padding: 3px 8px; border-radius: 0 4px 4px 0;',
    'background: transparent;'
  );
});
