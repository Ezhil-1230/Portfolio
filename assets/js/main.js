/**
 * Ezhil Mamnose P - Portfolio Main Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTyping();
  initMobileMenu();
  initProjectFilter();
  initProjectModal();
  initCopyEmail();
  initContactForm();
  initScrollTop();
  initNavHighlight();
});

/* -------------------------------------------------------------
   1. Theme Management (Dark / Light)
   ------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('ezhil_portfolio_theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('ezhil_portfolio_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-moon text-amber-500';
      } else {
        themeIcon.className = 'fa-solid fa-sun text-yellow-400';
      }
    }
  }
}

/* -------------------------------------------------------------
   2. Typing Animation
   ------------------------------------------------------------- */
function initTyping() {
  const typedTarget = document.getElementById('typed-text');
  if (!typedTarget) return;

  const roles = [
    'Software Developer',
    'Full Stack Engineer',
    'MCA Postgrad @ MCC',
    'React & Node.js Developer',
    'Python & Java Enthusiast'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 45;
  const pauseEnd = 1600;
  const pauseStart = 400;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      typedTarget.textContent = current.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typedTarget.textContent = current.substring(0, charIdx + 1);
      charIdx++;
    }

    if (!isDeleting && charIdx === current.length) {
      setTimeout(() => { isDeleting = true; type(); }, pauseEnd);
      return;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(type, pauseStart);
      return;
    }

    setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
  }

  type();
}

/* -------------------------------------------------------------
   3. Mobile Navigation Menu
   ------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    });
  });
}

/* -------------------------------------------------------------
   4. Project Filtering
   ------------------------------------------------------------- */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* -------------------------------------------------------------
   5. Project In-Depth Modal Data & Logic
   ------------------------------------------------------------- */
const projectDetailsData = {
  'beauty-parlour': {
    title: 'Beauty Parlour Management System',
    category: 'Full Stack Web Application',
    tagline: 'Comprehensive customer, appointment, and billing automation platform.',
    period: 'Web Application Project',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    overview: 'A complete end-to-end web application developed to modernize parlour operations. Designed to replace manual register logging with a centralized digital portal for customers and staff.',
    keyFeatures: [
      'Customer record tracking with history and service logs',
      'Appointment booking and slot scheduling management',
      'Automated service billing with invoice breakdown',
      'Administrative dashboard for revenue and inventory metrics'
    ],
    architecture: 'Built using PHP MVC principles on an Apache stack with a structured relational MySQL schema for appointment slots, customer master records, and service catalogs.',
    role: 'Full Stack Developer — Led UI design, SQL schema design, query optimization, and appointment conflict resolution logic.'
  },
  'hall-leave': {
    title: 'Hall Leave Application System',
    category: 'Cross-Platform Mobile App',
    tagline: 'Digitizing collegiate hall leave requests with automated approval workflows.',
    period: 'Mobile & Cloud Application',
    stack: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Cloud Firestore'],
    overview: 'Developed to eliminate paper-based hall leave applications in university residential halls. Provides students, tutors, and wardens with an instantaneous, transparent approval workflow.',
    keyFeatures: [
      'Interactive digital leave submission forms with date pickers & reason tagging',
      'Multi-level hierarchical approval workflow (Tutor -> Warden)',
      'Offline local storage using SQLite with Firebase cloud synchronization',
      'Push notification alerts on application status transitions'
    ],
    architecture: 'Reactive Flutter front-end utilizing SQLite for offline resilience and Firebase Cloud Firestore for real-time state synchronization across warden and student roles.',
    role: 'Mobile App Developer — Designed the user experience, implemented local database caching, and connected Firebase authentication.'
  },
  'age-gender': {
    title: 'Age and Gender Detection System',
    category: 'Computer Vision & AI',
    tagline: 'Real-time face detection and demographic classification using OpenCV.',
    period: 'Computer Vision Project',
    stack: ['Python', 'OpenCV', 'Deep Learning / CNN', 'NumPy'],
    overview: 'An intelligent computer vision system capable of identifying human faces from a live camera stream or video feed and classifying both estimated age range and gender in real time.',
    keyFeatures: [
      'High-speed face detection bounding box localization',
      'Multi-class age classification across structured age intervals',
      'Binary gender classification with confidence scoring',
      'Optimized frame processing loop to maintain smooth real-time FPS'
    ],
    architecture: 'Implemented using OpenCV’s Deep Neural Network (dnn) module with pre-trained Caffe models for face localization and age/gender inference pipelines.',
    role: 'Python & AI Developer — Built the image pre-processing pipeline, integrated model weights, and tuned confidence thresholds for robust detection under varied lighting.'
  },
  'hall-rebate': {
    title: 'Hall Mess Rebate System',
    category: 'Desktop Application & Systems',
    tagline: 'Automated student mess rebate calculation and audit tracking system.',
    period: 'Systems Application',
    stack: ['Java', 'Swing / JavaFX', 'MySQL', 'JDBC', 'OOP Architecture'],
    overview: 'A robust desktop application built to automate the complex monthly mess fee rebate calculations for hostel residents based on verified leave durations and dining policies.',
    keyFeatures: [
      'Automated rebate amount computation based on authorized leave days',
      'Role-based access for hall administrative staff and student representatives',
      'Exportable monthly deduction summaries and rebate audit reports',
      'Relational database integration with validation checks preventing duplicate claims'
    ],
    architecture: 'Object-Oriented Java architecture following DAO (Data Access Object) design patterns with JDBC drivers communicating directly to a secure MySQL database.',
    role: 'Software Developer — Handled database design, business logic validation, and responsive desktop UI components.'
  },
  'meeting-schedule': {
    title: 'Meeting Schedule & Alert App',
    category: 'Native Mobile Application',
    tagline: 'Native Android application for event planning and recurring notification alerts.',
    period: 'Mobile Application',
    stack: ['Android (Java)', 'SQLite', 'AlarmManager', 'Material Design'],
    overview: 'Designed to help students and busy professionals organize schedules, allocate meeting venues, track agendas, and receive timely background reminders.',
    keyFeatures: [
      'Interactive calendar scheduling interface with intuitive time pickers',
      'Reliable background notification triggers via Android AlarmManager',
      'Persistent local SQLite storage for lightning-fast offline access',
      'Meeting conflict warning when overlapping times are detected'
    ],
    architecture: 'Native Android application following Model-View-Presenter (MVP) patterns, leveraging SQLite database helpers and Android BroadcastReceivers for alert scheduling.',
    role: 'Android Developer — Implemented user interface in XML, structured local SQLite tables, and configured Android broadcast receivers.'
  }
};

function initProjectModal() {
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const detailButtons = document.querySelectorAll('.open-modal-btn');

  if (!modalBackdrop) return;

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = projectDetailsData[projectId];
      if (!data) return;

      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-category').textContent = data.category;
      document.getElementById('modal-tagline').textContent = data.tagline;
      document.getElementById('modal-overview').textContent = data.overview;
      document.getElementById('modal-architecture').textContent = data.architecture;
      document.getElementById('modal-role').textContent = data.role;

      // Populate Stack
      const stackContainer = document.getElementById('modal-stack');
      stackContainer.innerHTML = '';
      data.stack.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'px-2.5 py-1 text-xs font-mono rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20';
        span.textContent = tech;
        stackContainer.appendChild(span);
      });

      // Populate Features
      const featuresList = document.getElementById('modal-features');
      featuresList.innerHTML = '';
      data.keyFeatures.forEach(feat => {
        const li = document.createElement('li');
        li.className = 'flex items-start text-sm text-slate-300 gap-2';
        li.innerHTML = `<i class="fa-solid fa-check text-cyan-400 mt-1 flex-shrink-0"></i><span>${feat}</span>`;
        featuresList.appendChild(li);
      });

      // Show Modal
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------
   6. Copy Email to Clipboard
   ------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const email = 'ezhilmamnosedev@gmail.com';

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard: ' + email, 'success');
      }).catch(() => {
        showToast('Email: ' + email, 'info');
      });
    });
  });
}

/* -------------------------------------------------------------
   7. Contact Form Simulation & Feedback
   ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'warning');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';

    // Simulate sending delay
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast(`Thank you, ${name}! Your message has been sent successfully.`, 'success');

      // Also offer direct mailto fallback
      const mailtoLink = `mailto:ezhilmamnosedev@gmail.com?subject=${encodeURIComponent(subject || 'Inquiry from Portfolio')}&body=${encodeURIComponent(`Hi Ezhil,\n\nFrom: ${name} (${email})\n\n${message}`)}`;
      console.log('Mailto prepared:', mailtoLink);
    }, 1200);
  });
}

/* -------------------------------------------------------------
   8. Toast Notification Utility
   ------------------------------------------------------------- */
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;

  if (toastIcon) {
    if (type === 'success') {
      toastIcon.className = 'fa-solid fa-circle-check text-emerald-400 text-lg';
    } else if (type === 'warning') {
      toastIcon.className = 'fa-solid fa-triangle-exclamation text-amber-400 text-lg';
    } else {
      toastIcon.className = 'fa-solid fa-circle-info text-cyan-400 text-lg';
    }
  }

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* -------------------------------------------------------------
   9. Scroll-to-Top Button
   ------------------------------------------------------------- */
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      scrollTopBtn.classList.add('opacity-100');
    } else {
      scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
      scrollTopBtn.classList.remove('opacity-100');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -------------------------------------------------------------
   10. Active Navigation Highlight
   ------------------------------------------------------------- */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-indigo-400', 'font-semibold');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('text-indigo-400', 'font-semibold');
      }
    });
  });
}
