/**
 * Main JavaScript logic for José Andrés Acuña Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initNavbarScroll();
  initMobileMenu();
  initProjectFilters();
  initProfile360();
  initFlipbook();
  initMemoryGame();
  initSmoothScroll();
  initScrollReveal();
  initHeroParticles();
});

/**
 * Internationalization (i18n) Engine & Language Auto-Detection
 */
function initI18n() {
  if (typeof translations === 'undefined') return;

  // 1. Determine Language
  // Priority 1: User's saved preference in localStorage
  let currentLang = localStorage.getItem('portfolio_lang');

  if (!currentLang) {
    // Priority 2: Browser navigator language
    const userNavLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    
    // Priority 3: Client TimeZone evaluation
    let timeZone = '';
    try {
      timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch (e) {}

    const spanishTimezones = [
      'Guayaquil', 'Bogota', 'Lima', 'Santiago', 'Buenos_Aires',
      'Mexico_City', 'Madrid', 'Caracas', 'Montevideo', 'La_Paz',
      'Asuncion', 'Costa_Rica', 'Panama', 'Guatemala', 'Tegucigalpa',
      'El_Salvador', 'Managua', 'Santo_Domingo', 'Havana', 'San_Juan'
    ];
    const isSpanishZone = spanishTimezones.some(tz => timeZone.includes(tz));

    if (userNavLang.startsWith('es') || isSpanishZone) {
      currentLang = 'es';
    } else {
      currentLang = 'en';
    }
  }

  // Set initial language
  setLanguage(currentLang, false);

  // Bind click handlers to language switcher buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang) {
        setLanguage(selectedLang, true);
      }
    });
  });
}

/**
 * Apply selected language translations across the DOM
 */
function setLanguage(lang, savePreference = true) {
  if (typeof translations === 'undefined' || !translations[lang]) return;

  if (savePreference) {
    localStorage.setItem('portfolio_lang', lang);
  }

  document.documentElement.lang = lang;

  // Update active state on switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const langDict = translations[lang];

  // 1. Text content replacement (data-i18n)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (langDict[key]) {
      el.textContent = langDict[key];
    }
  });

  // 2. HTML content replacement (data-i18n-html)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (langDict[key]) {
      el.innerHTML = langDict[key];
    }
  });

  // 3. JSON formatted key elements in terminal
  document.querySelectorAll('[data-i18n-json-key]').forEach(el => {
    const key = el.getAttribute('data-i18n-json-key');
    if (langDict[key]) {
      el.textContent = `"${langDict[key]}"`;
    }
  });

  // 4. JSON formatted value string elements in terminal
  document.querySelectorAll('[data-i18n-json-str]').forEach(el => {
    const key = el.getAttribute('data-i18n-json-str');
    if (langDict[key]) {
      el.textContent = `"${langDict[key]}"`;
    }
  });

  // 5. Re-render dynamic projects in new language
  if (typeof renderDynamicProjects === 'function' && projectsData && projectsData.length > 0) {
    renderDynamicProjects();
  }
}

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

// ==========================================================================
// DYNAMIC PROJECTS FROM projects.json & SHOW MORE / LESS PAGINATION
// ==========================================================================
let projectsData = [];
let activeProjectFilter = 'all';
let isProjectsExpanded = false;
const INITIAL_PROJECTS_COUNT = 4;

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const btnToggleMore = document.getElementById('btn-toggle-projects');

  // Fetch Projects from projects.json
  fetch('projects.json')
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar projects.json');
      return response.json();
    })
    .then(data => {
      projectsData = data;
      renderDynamicProjects();
    })
    .catch(err => {
      console.warn('Carga dinámica omitida, usando fallback HTML existente:', err);
      setupStaticFiltersFallback();
    });

  // Filter Buttons Click
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      activeProjectFilter = btn.getAttribute('data-filter') || 'all';
      renderDynamicProjects();
    });
  });

  // Show More / Show Less Toggle Button Click
  if (btnToggleMore) {
    btnToggleMore.addEventListener('click', () => {
      isProjectsExpanded = !isProjectsExpanded;
      renderDynamicProjects();
      
      // If collapsing, scroll smoothly back to projects section
      if (!isProjectsExpanded) {
        const projSection = document.getElementById('projects');
        if (projSection) {
          projSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}

/**
 * Render Project Cards dynamically from projects.json
 */
function renderDynamicProjects() {
  const container = document.getElementById('projects-grid');
  const btnToggleMore = document.getElementById('btn-toggle-projects');
  const toggleText = document.getElementById('toggle-projects-text');
  const currentLang = document.documentElement.lang || localStorage.getItem('portfolio_lang') || 'es';

  if (!container || projectsData.length === 0) return;

  // Filter by category
  const filtered = projectsData.filter(p => {
    return activeProjectFilter === 'all' || p.category === activeProjectFilter;
  });

  // Determine items to display based on expansion state
  let visibleProjects = filtered;
  if (activeProjectFilter === 'all' && !isProjectsExpanded) {
    visibleProjects = filtered.slice(0, INITIAL_PROJECTS_COUNT);
  }

  // Update Toggle Button Visibility and Text
  if (btnToggleMore && toggleText) {
    if (activeProjectFilter !== 'all' || filtered.length <= INITIAL_PROJECTS_COUNT) {
      btnToggleMore.parentElement.style.display = 'none';
    } else {
      btnToggleMore.parentElement.style.display = 'flex';
      if (isProjectsExpanded) {
        btnToggleMore.classList.add('expanded');
        toggleText.textContent = currentLang === 'en' ? 'Show fewer projects' : 'Ver menos proyectos';
        toggleText.setAttribute('data-i18n', 'projects.btn.show_less');
      } else {
        btnToggleMore.classList.remove('expanded');
        toggleText.textContent = currentLang === 'en' ? 'Show more projects' : 'Ver más proyectos';
        toggleText.setAttribute('data-i18n', 'projects.btn.show_more');
      }
    }
  }

  // Render Project Cards HTML
  container.innerHTML = '';
  visibleProjects.forEach((proj, idx) => {
    const card = document.createElement('article');
    card.className = 'project-card is-revealed';
    card.setAttribute('data-category', proj.category);
    // Staggered Entrance Animation Delay for smooth card appearance
    card.style.animationDelay = `${idx * 85}ms`;

    const titleText = typeof proj.title === 'object' ? (proj.title[currentLang] || proj.title.es) : proj.title;
    const descText = typeof proj.description === 'object' ? (proj.description[currentLang] || proj.description.es) : proj.description;
    const badgeText = typeof proj.badgeText === 'object' ? (proj.badgeText[currentLang] || proj.badgeText.es) : proj.badgeText;

    // Highlights list items
    const highlightsHtml = proj.highlights.map(hl => {
      const hlText = typeof hl === 'object' ? (hl[currentLang] || hl.es) : hl;
      return `<div class="highlight-item"><i class="${hl.icon}"></i> <span>${hlText}</span></div>`;
    }).join('');

    // Tech Tags
    const tagsHtml = proj.techTags.map(t => `<span>${t}</span>`).join('');

    // Actions (Live Demo, Video Demo, Repo, Private badge)
    let actionButtonsHtml = '';
    if (proj.liveDemo) {
      actionButtonsHtml += `
        <a href="${proj.liveDemo}" target="_blank" class="btn-live-demo" title="Probar Aplicación en Vivo">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> <span data-i18n="btn.view_app">${currentLang === 'en' ? 'Live demo' : 'Ver aplicación'}</span>
        </a>
      `;
    }
    if (proj.videoDemo) {
      actionButtonsHtml += `
        <button class="btn-video-demo" onclick="openVideoModal('${proj.videoDemo}', '${escapeHtml(titleText)}')">
          <i class="fa-solid fa-play"></i> <span data-i18n="btn.view_video">${currentLang === 'en' ? 'Watch video' : 'Ver video'}</span>
        </button>
      `;
    }
    if (proj.repoUrl) {
      actionButtonsHtml += `
        <a href="${proj.repoUrl}" target="_blank" class="project-repo-link" title="Ver código en GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
      `;
    }
    if (proj.isPrivate) {
      actionButtonsHtml += `
        <span class="badge-private" title="Código en repositorio comercial/privado">
          <i class="fa-solid fa-lock"></i> <span data-i18n="badge.private">${currentLang === 'en' ? 'Private' : 'Privado'}</span>
        </span>
      `;
    }

    card.innerHTML = `
      <div class="project-card-banner has-photo">
        <img src="${proj.image}" alt="${escapeHtml(titleText)}" class="project-banner-img" onclick="openImageModal(this.src, '${escapeHtml(titleText)}')">
        <div class="project-badge"><i class="${proj.badgeIcon}"></i> ${badgeText}</div>
      </div>
      <div class="project-card-body">
        <div class="project-title-row">
          <h3 class="project-title">${escapeHtml(titleText)}</h3>
          <div class="project-actions">
            ${actionButtonsHtml}
          </div>
        </div>
        <p class="project-desc">${descText}</p>
        <div class="project-highlights">
          ${highlightsHtml}
        </div>
        <div class="project-tech-tags">
          ${tagsHtml}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function setupStaticFiltersFallback() {
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

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
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

/* ==========================================================================
   PROFILE 360° FLIP LOGIC (Formal vs. Informal)
   ========================================================================== */
function initProfile360() {
  const profileContainer = document.getElementById('profile-360');
  if (!profileContainer) return;

  profileContainer.addEventListener('click', () => {
    profileContainer.classList.toggle('is-flipped');
    const isFlipped = profileContainer.classList.contains('is-flipped');
    showToast(isFlipped ? 'Modo: Líder Comunitario & Tech Explorer (360°)' : 'Modo: Ingeniero Mecatrónico Formal (360°)');
  });
}

/* ==========================================================================
   FLIPBOOK 3D EDITORIAL ENGINE (Desktop Spread + Mobile Notebook Engine)
   ========================================================================== */
const FLIPBOOK_CHAPTERS = [
  {
    chapter: 'CAPÍTULO I',
    num: '01',
    tag: 'Sistemas Embebidos',
    title: 'Dispositivo Robótico de Rodilla',
    text: 'Diseño mecatrónico para rehabilitación activa/pasiva con control de fuerza y posición angular en tiempo real mediante sensor AS5600 y celda de carga HX711.',
    features: [
      { icon: 'fa-microchip', text: 'ESP32 + Raspberry Pi 5' },
      { icon: 'fa-brain', text: 'Algoritmo Random Forest' }
    ]
  },
  {
    chapter: 'CAPÍTULO II',
    num: '02',
    tag: 'IoT & Agricultura',
    title: 'Lora Kipu — Red Microclimática',
    text: 'Monitoreo ambiental autónomo de bajo consumo para detección temprana de fitopatologías en cultivos de cacao mediante protocolo LoRaWAN.',
    features: [
      { icon: 'fa-wifi', text: 'Nodos LoRaWAN de Largo Alcance' },
      { icon: 'fa-server', text: 'Microservicios FastAPI' }
    ]
  },
  {
    chapter: 'CAPÍTULO III',
    num: '03',
    tag: 'Automatización Industrial',
    title: 'Gemelo Digital & SCADA de Planta',
    text: 'Emulación virtualizada de celdas de manufactura conectadas a PLC Siemens S7-1200 y supervisión en tiempo real con Ignition SCADA vía OPC UA.',
    features: [
      { icon: 'fa-gears', text: 'TIA Portal + Factory I/O' },
      { icon: 'fa-network-wired', text: 'Protocolo Industrial OPC UA' }
    ]
  },
  {
    chapter: 'CAPÍTULO IV',
    num: '04',
    tag: 'I+D Aeroespacial',
    title: 'Horno de Curado Compuesto (CIDFAE)',
    text: 'Reacondicionamiento integral del sistema de potencia, rediseño de interfaz HMI en Kinco DTools y monitoreo remoto seguro por VNC.',
    features: [
      { icon: 'fa-display', text: 'Kinco DTools v4.5.6 HMI' },
      { icon: 'fa-bolt', text: 'Control Térmico de Potencia' }
    ]
  },
  {
    chapter: 'CAPÍTULO V',
    num: '05',
    tag: 'Software Fullstack',
    title: 'THE GOAT — Gift Cards & RFID',
    text: 'Plataforma web en producción para venta online con generación criptográfica SHA-256 y aplicación PWA para abono a manillas RFID en bares.',
    features: [
      { icon: 'fa-code', text: 'Next.js + TypeScript + Supabase' },
      { icon: 'fa-qrcode', text: 'PWA con Lector QR y Audio API' }
    ]
  },
  {
    chapter: 'CAPÍTULO VI',
    num: '06',
    tag: 'Liderazgo Global',
    title: 'IEEE & Formación Cambridge',
    text: 'Dirección nacional de IEEEXtreme 19.0, presidencia de rama estudiantil IEEE ESPE y certificación en liderazgo en Clare College, Cambridge.',
    features: [
      { icon: 'fa-award', text: 'Global Leadership Certificate' },
      { icon: 'fa-users', text: 'Gestión Multicultural de Equipos' }
    ]
  }
];

let currentFlipbookSpread = 0; // 0, 1, 2 for dual desktop spreads
let currentMobileChapter = 0;   // 0 to 5 for single mobile notebook

function initFlipbook() {
  const touchZone = document.getElementById('flipbook-touch-zone');
  const btnPrev = document.getElementById('btn-fb-prev');
  const btnNext = document.getElementById('btn-fb-next');
  const leftPage = document.getElementById('fb-left-page');
  const rightPage = document.getElementById('fb-right-page');

  if (!touchZone) return;

  renderFlipbookView();

  window.addEventListener('resize', () => {
    renderFlipbookView(false);
  });

  function nextFlip() {
    if (window.innerWidth <= 768) {
      currentMobileChapter = (currentMobileChapter + 1) % FLIPBOOK_CHAPTERS.length;
    } else {
      currentFlipbookSpread = (currentFlipbookSpread + 1) % (FLIPBOOK_CHAPTERS.length / 2);
    }
    renderFlipbookView(true, 'forward');
  }

  function prevFlip() {
    if (window.innerWidth <= 768) {
      currentMobileChapter = (currentMobileChapter - 1 + FLIPBOOK_CHAPTERS.length) % FLIPBOOK_CHAPTERS.length;
    } else {
      currentFlipbookSpread = (currentFlipbookSpread - 1 + (FLIPBOOK_CHAPTERS.length / 2)) % (FLIPBOOK_CHAPTERS.length / 2);
    }
    renderFlipbookView(true, 'backward');
  }

  // Buttons
  if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      prevFlip();
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      nextFlip();
    });
  }

  // Direct click on pages to flip
  if (rightPage) {
    rightPage.style.cursor = 'pointer';
    rightPage.addEventListener('click', () => {
      nextFlip();
    });
  }

  if (leftPage) {
    leftPage.style.cursor = 'pointer';
    leftPage.addEventListener('click', () => {
      prevFlip();
    });
  }

  // Touch swipe gestures
  let startX = 0;
  let startY = 0;

  touchZone.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  touchZone.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = endX - startX;
    const diffY = endY - startY;

    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        nextFlip();
      } else {
        prevFlip();
      }
    }
  }, { passive: true });
}

function renderFlipbookView(animate = false, direction = 'forward') {
  const isMobile = window.innerWidth <= 768;
  const leftPage = document.getElementById('fb-left-page');
  const rightPage = document.getElementById('fb-right-page');
  const indicator = document.getElementById('fb-indicator-text');

  if (!rightPage) return;

  if (isMobile) {
    // MOBILE: Single-page notebook mode
    const chapterData = FLIPBOOK_CHAPTERS[currentMobileChapter];
    if (!chapterData) return;

    if (animate) {
      rightPage.classList.remove('turn-leaf-forward', 'turn-leaf-backward');
      void rightPage.offsetWidth; // trigger reflow
      rightPage.classList.add(direction === 'forward' ? 'turn-leaf-forward' : 'turn-leaf-backward');
    }

    fillPageElement(rightPage, chapterData);

    if (indicator) {
      indicator.textContent = `Capítulo ${currentMobileChapter + 1} de ${FLIPBOOK_CHAPTERS.length}`;
    }
  } else {
    // DESKTOP: Dual-page open book mode
    const leftIndex = currentFlipbookSpread * 2;
    const rightIndex = currentFlipbookSpread * 2 + 1;
    const leftData = FLIPBOOK_CHAPTERS[leftIndex];
    const rightData = FLIPBOOK_CHAPTERS[rightIndex];

    if (animate) {
      const targetPage = direction === 'forward' ? rightPage : (leftPage || rightPage);
      targetPage.classList.remove('turn-leaf-forward', 'turn-leaf-backward');
      void targetPage.offsetWidth;
      targetPage.classList.add(direction === 'forward' ? 'turn-leaf-forward' : 'turn-leaf-backward');
      
      setTimeout(() => {
        if (leftPage && leftData) fillPageElement(leftPage, leftData);
        if (rightPage && rightData) fillPageElement(rightPage, rightData);
      }, 250);
    } else {
      if (leftPage && leftData) fillPageElement(leftPage, leftData);
      if (rightPage && rightData) fillPageElement(rightPage, rightData);
    }

    if (indicator) {
      indicator.textContent = `Spread ${currentFlipbookSpread + 1} de ${FLIPBOOK_CHAPTERS.length / 2}`;
    }
  }
}

function fillPageElement(pageEl, data) {
  const isLeft = pageEl.classList.contains('side-left');
  const prefix = isLeft ? 'fb-left' : 'fb-right';

  const chEl = document.getElementById(`${prefix}-chapter`);
  const numEl = document.getElementById(`${prefix}-num`);
  const tagEl = document.getElementById(`${prefix}-tag`);
  const titleEl = document.getElementById(`${prefix}-title`);
  const textEl = document.getElementById(`${prefix}-text`);
  const featEl = document.getElementById(`${prefix}-features`);

  if (chEl) chEl.textContent = data.chapter;
  if (numEl) numEl.textContent = data.num;
  if (tagEl) tagEl.textContent = data.tag;
  if (titleEl) titleEl.textContent = data.title;
  if (textEl) textEl.textContent = data.text;
  if (featEl) {
    featEl.innerHTML = data.features.map(f => 
      `<div><i class="fa-solid ${f.icon}"></i> ${f.text}</div>`
    ).join('');
  }
}

/* ==========================================================================
   MEMORY MATCHING GAME (Clase Martes 8 - Fade-out & Reemplazo con Fade-in)
   ========================================================================== */
const ALL_TECH_PAIRS = [
  { id: 'esp32', name: 'ESP32 IoT', icon: 'fa-microchip' },
  { id: 'ros2', name: 'ROS 2 Robótica', icon: 'fa-robot' },
  { id: 'plc', name: 'Siemens PLC', icon: 'fa-industry' },
  { id: 'lora', name: 'LoRaWAN', icon: 'fa-wifi' },
  { id: 'next', name: 'Next.js React', icon: 'fa-code' },
  { id: 'scada', name: 'Ignition SCADA', icon: 'fa-desktop' },
  { id: 'fastapi', name: 'FastAPI Python', icon: 'fa-bolt' },
  { id: 'hmi', name: 'Kinco HMI', icon: 'fa-display' }
];

let pendingPairsQueue = [];
let activeSlots = [];
let flippedCards = [];
let matchedCount = 0;
let totalPairsTarget = 6;
let movesCount = 0;
let gameTimerInterval = null;
let gameSeconds = 0;

function initMemoryGame() {
  const btnOpenNav = document.getElementById('btn-open-game-nav');
  const modal = document.getElementById('memory-game-modal');
  const btnClose = document.getElementById('btn-close-game');
  const btnRestart = document.getElementById('btn-restart-game');
  const btnPlayAgain = document.getElementById('btn-play-again');

  if (btnOpenNav && modal) {
    btnOpenNav.addEventListener('click', () => {
      modal.classList.remove('hidden');
      startMemoryGame();
    });
  }

  if (btnClose && modal) {
    btnClose.addEventListener('click', () => {
      modal.classList.add('hidden');
      clearInterval(gameTimerInterval);
    });
  }

  if (btnRestart) btnRestart.addEventListener('click', startMemoryGame);
  if (btnPlayAgain) btnPlayAgain.addEventListener('click', startMemoryGame);
}

function startMemoryGame() {
  const grid = document.getElementById('game-grid');
  const winBanner = document.getElementById('game-win-banner');
  const movesEl = document.getElementById('game-moves');
  const matchesEl = document.getElementById('game-matches');
  const timerEl = document.getElementById('game-timer');

  if (!grid) return;

  if (winBanner) winBanner.classList.add('hidden');
  grid.classList.remove('hidden');

  matchedCount = 0;
  movesCount = 0;
  flippedCards = [];
  gameSeconds = 0;
  totalPairsTarget = 6;

  if (movesEl) movesEl.textContent = '0';
  if (matchesEl) matchesEl.textContent = `0 / ${totalPairsTarget}`;
  if (timerEl) timerEl.textContent = '00:00';

  clearInterval(gameTimerInterval);
  gameTimerInterval = setInterval(() => {
    gameSeconds++;
    const m = String(Math.floor(gameSeconds / 60)).padStart(2, '0');
    const s = String(gameSeconds % 60).padStart(2, '0');
    if (timerEl) timerEl.textContent = `${m}:${s}`;
  }, 1000);

  // Shuffle master pool
  const shuffledPool = [...ALL_TECH_PAIRS].sort(() => Math.random() - 0.5);
  
  // First 4 pairs populate the 8 slots
  const initialPairs = shuffledPool.slice(0, 4);
  // Remaining pairs enter the replenishment queue
  pendingPairsQueue = shuffledPool.slice(4, totalPairsTarget);

  // Create initial deck of 8 cards
  const deck = [];
  initialPairs.forEach(item => {
    deck.push({ ...item, uid: item.id + '-1' });
    deck.push({ ...item, uid: item.id + '-2' });
  });
  deck.sort(() => Math.random() - 0.5);

  grid.innerHTML = '';
  activeSlots = new Array(8).fill(null);

  deck.forEach((cardData, slotIndex) => {
    const slot = document.createElement('div');
    slot.className = 'game-card-slot';
    slot.id = `slot-${slotIndex}`;
    grid.appendChild(slot);

    createCardInSlot(slot, cardData, slotIndex);
  });
}

function createCardInSlot(slotEl, cardData, slotIndex, isFadeIn = false) {
  const card = document.createElement('div');
  card.className = `memory-card ${isFadeIn ? 'fade-in' : ''}`;
  card.setAttribute('data-id', cardData.id);
  card.setAttribute('data-uid', cardData.uid);
  card.setAttribute('data-slot', slotIndex);

  card.innerHTML = `
    <div class="card-face card-front">
      <i class="fa-solid fa-code"></i>
    </div>
    <div class="card-face card-back">
      <i class="fa-solid ${cardData.icon}"></i>
      <span>${cardData.name}</span>
    </div>
  `;

  card.addEventListener('click', () => handleCardFlip(card, cardData, slotIndex));
  slotEl.innerHTML = '';
  slotEl.appendChild(card);
  activeSlots[slotIndex] = { cardEl: card, cardData };
}

function handleCardFlip(cardEl, cardData, slotIndex) {
  if (cardEl.classList.contains('is-flipped') || cardEl.classList.contains('fade-out') || flippedCards.length >= 2) {
    return;
  }

  cardEl.classList.add('is-flipped');
  flippedCards.push({ cardEl, cardData, slotIndex });

  if (flippedCards.length === 2) {
    movesCount++;
    const movesEl = document.getElementById('game-moves');
    if (movesEl) movesEl.textContent = movesCount;

    const [first, second] = flippedCards;

    if (first.cardData.id === second.cardData.id) {
      // MATCH FOUND!
      matchedCount++;
      const matchesEl = document.getElementById('game-matches');
      if (matchesEl) matchesEl.textContent = `${matchedCount} / ${totalPairsTarget}`;

      // COMPORTAMIENTO CLASE MARTES 8:
      // 1. Al acertar: desvanecimiento suave con .fade-out (0.5s), permaneciendo en DOM para no alterar la grilla
      setTimeout(() => {
        first.cardEl.classList.add('fade-out');
        second.cardEl.classList.add('fade-out');

        // 2. 1s después: si hay pares pendientes en la cola, ambos slots se rellenan con el siguiente par y hacen .fade-in
        setTimeout(() => {
          if (pendingPairsQueue.length > 0) {
            const nextPair = pendingPairsQueue.shift();
            const slot1 = document.getElementById(`slot-${first.slotIndex}`);
            const slot2 = document.getElementById(`slot-${second.slotIndex}`);

            if (slot1) createCardInSlot(slot1, { ...nextPair, uid: nextPair.id + '-1' }, first.slotIndex, true);
            if (slot2) createCardInSlot(slot2, { ...nextPair, uid: nextPair.id + '-2' }, second.slotIndex, true);
          } else {
            // No more pending cards, mark slot empty
            activeSlots[first.slotIndex] = null;
            activeSlots[second.slotIndex] = null;
          }

          // Check if all target pairs are matched
          if (matchedCount >= totalPairsTarget) {
            clearInterval(gameTimerInterval);
            setTimeout(() => {
              document.getElementById('game-grid').classList.add('hidden');
              document.getElementById('game-win-banner').classList.remove('hidden');
            }, 600);
          }
        }, 1000);

      }, 500);

      flippedCards = [];
    } else {
      // NO MATCH -> FLIP BACK
      setTimeout(() => {
        first.cardEl.classList.remove('is-flipped');
        second.cardEl.classList.remove('is-flipped');
        flippedCards = [];
      }, 1000);
    }
  }
}

