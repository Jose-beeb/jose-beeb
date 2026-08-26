/**
 * Main JavaScript logic for José Andrés Acuña Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initProjectFilters();
  initSmoothScroll();
  initScrollReveal();
  initHeroParticles();
});

/**
 * Handle Navbar styling on scroll
 */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Background blur/shadow change
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * Handle Mobile Menu Toggle
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .btn-nav-cv');

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      closeMobileNav();
    }
  });

  function closeMobileNav() {
    navMenu.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  }
}

/**
 * Handle Project Category Filtering
 */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * Handle Smooth Scroll for Anchor Links with Header Offset
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Copy text to clipboard and show toast
 */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copiado: ${text}`);
  }).catch(() => {
    showToast('Error al copiar al portapapeles');
  });
}

/**
 * Display toast notification
 */
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/**
 * Open Lightbox Modal for Project Images
 */
function openImageModal(imgSrc, caption) {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');

  if (!modal || !modalImg) return;

  modalImg.src = imgSrc;
  modalCaption.textContent = caption || '';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Close Lightbox Modal
 */
function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/**
 * Open Video Player Modal (YouTube)
 */
function openVideoModal(videoId, caption) {
  const modal = document.getElementById('video-modal');
  const videoContainer = document.getElementById('video-container');
  const videoCaption = document.getElementById('video-caption');
  const modalContent = modal ? modal.querySelector('.video-modal-content') : null;

  if (!modal || !videoContainer) return;

  // Check if it's a YouTube Short or regular video
  const isShort = caption && caption.toLowerCase().includes('shorts');
  if (modalContent) {
    if (isShort) {
      modalContent.classList.add('is-short');
    } else {
      modalContent.classList.remove('is-short');
    }
  }

  // Inject responsive YouTube iframe with autoplay
  videoContainer.innerHTML = `
    <iframe 
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" 
      title="${caption || 'Video Demo'}" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
    </iframe>
  `;

  videoCaption.textContent = caption || '';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Close Video Player Modal and Stop Playback
 */
function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const videoContainer = document.getElementById('video-container');

  if (!modal) return;

  modal.classList.remove('active');
  if (videoContainer) {
    videoContainer.innerHTML = ''; // Stops video audio/playback immediately
  }
  document.body.style.overflow = '';
}

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeImageModal();
    closeVideoModal();
  }
});


/**
 * Swap Main Banner Image when clicking gallery thumbnails
 */
function swapMainImage(targetImgId, newSrc) {
  const targetImg = document.getElementById(targetImgId);
  if (!targetImg) return;

  targetImg.style.opacity = '0.3';
  setTimeout(() => {
    targetImg.src = newSrc;
    targetImg.style.opacity = '1';
  }, 150);

  // Update active state in thumbnail container
  const gallery = targetImg.closest('.project-card').querySelector('.project-thumbnail-gallery');
  if (gallery) {
    gallery.querySelectorAll('.thumb-img').forEach((thumb) => {
      if (thumb.getAttribute('src') === newSrc) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  }
}

/**
 * Initialize IntersectionObserver for Scroll Reveal Animations
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  // Fallback for older browsers
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach((el) => revealObserver.observe(el));
}

/**
 * Cyberphysical Connected Nodes Canvas Animation (Hero Background)
 */
function initHeroParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  const particles = [];
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 22 : 45;
  const maxDistance = isMobile ? 90 : 130;

  const mouse = {
    x: null,
    y: null,
    radius: 120
  };

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 1.8 + 1.2;
      this.baseAlpha = Math.random() * 0.4 + 0.3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce on edges
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse subtle interaction on desktop
      if (mouse.x !== null && mouse.y !== null && !isMobile) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 242, 254, ${this.baseAlpha})`;
      ctx.shadowColor = '#00f2fe';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  // Create initial particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let animationFrameId = null;
  let isHeroVisible = true;

  function animate() {
    if (!isHeroVisible) return;

    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Update and draw each particle
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  // Resize listener with debounce
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }, 150);
  });

  // Track mouse on hero container
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    heroSection.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Pause canvas animation when hero is not visible in viewport to save CPU/battery
    if ('IntersectionObserver' in window) {
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isHeroVisible = entry.isIntersecting;
          if (isHeroVisible && !animationFrameId) {
            animate();
          } else if (!isHeroVisible && animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
        });
      }, { threshold: 0.05 });

      heroObserver.observe(heroSection);
    }
  }
}


