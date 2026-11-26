import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "rbla-ecommerce",
    title: "RBLA E-Commerce Platform",
    category: "Full Stack",
    tagline: "Scalable multi-tiered shopping platform with granular role-based access control.",
    description: "Architected a full-stack e-commerce web application featuring role-based access control for User, Admin and Superadmin, dynamic product management, cart workflows and payment integration.",
    longDescription: "The RBLA E-Commerce Platform is a robust, full-stack digital storefront and back-office administrative platform designed for high concurrency and granular security. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides custom tailored operational dashboards for customers, store administrators, and super-administrators with complete operational auditing.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    keyFeatures: [
      "Role-Based Access Control (RBAC) separating User, Admin, and Superadmin permissions",
      "Dynamic product catalog with multi-variant filtering, search, and inventory tracking",
      "Robust shopping cart workflows with persistent state management",
      "Secure payment gateway integration with simulated webhooks and transaction logging",
      "Full backend REST API endpoints with middleware validation and JWT token security"
    ],
    architecture: "Decoupled client-server architecture with React SPA frontend consuming authenticated Express REST APIs. MongoDB handles transactional orders, catalog indexing, and relational reference joins for user roles.",
    challenges: [
      "Implementing safe state reconciliation between client cart state and dynamic server-side inventory levels",
      "Structuring secure JWT bearer authorization headers and refresh token rotation across multiple privilege tiers"
    ],
    githubUrl: "https://github.com/Ezhil-1230/EZHIL-MAMNOSE-P-RBLA",
    hasLiveDemo: false,
    status: "Completed",
    bannerGradient: "from-cyan-900/40 via-blue-900/30 to-indigo-950/40",
    accentColor: "cyan",
    iconName: "ShoppingBag"
  },
  {
    id: "beauty-parlour",
    title: "Beauty Parlour Management System",
    category: "Full Stack",
    tagline: "Automated salon workflow, client records, and service billing system.",
    description: "Developed a web-based management system for customer records, appointment scheduling, billing and database-driven application management.",
    longDescription: "A specialized business automation platform created to replace manual record books in beauty parlours with a unified digital interface. It handles real-time slot bookings, client styling histories, service fee calculations, and daily ledger summaries.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    keyFeatures: [
      "Comprehensive customer record management with service histories",
      "Interactive appointment scheduling and slot conflict prevention",
      "Automated service billing calculation with invoice breakdowns",
      "Relational database integration for daily revenue logs and audit trails",
      "Full CRUD operations for salon staff and customer directories"
    ],
    architecture: "PHP MVC structure running on Apache with relational MySQL schema design incorporating foreign key constraints on appointment dates, staff assignments, and billing receipts.",
    challenges: [
      "Preventing double-booking collisions during peak holiday and weekend time slots",
      "Creating intuitive responsive forms for non-technical salon operators"
    ],
    githubUrl: "https://github.com/Ezhil-1230/Beatuty-Parlour-Management-System",
    hasLiveDemo: false,
    status: "Completed",
    bannerGradient: "from-purple-900/40 via-pink-900/30 to-indigo-950/40",
    accentColor: "purple",
    iconName: "Sparkles"
  },
  {
    id: "hall-mess-rebate",
    title: "Hall Mess Rebate System",
    category: "Desktop & Systems",
    tagline: "Institutional dining fee rebate calculator and administrative approval engine.",
    description: "Developed a desktop application automating student mess rebate submission, approval workflows and database operations.",
    longDescription: "A desktop software application engineered in Java using Object-Oriented principles and JDBC to streamline university hostel mess rebate requests. Calculates authorized financial deductions based on verified student absence intervals and generates official administrative reports.",
    technologies: ["Java", "MySQL", "JDBC", "OOP", "Swing / Desktop UI"],
    keyFeatures: [
      "Student rebate submission module with validation against academic hostel calendars",
      "Hierarchical approval workflow for hostel wardens and administrative staff",
      "Automated mess rebate deduction calculation algorithm",
      "Persistent MySQL database operations with transaction rollback support",
      "Automated record management and printable monthly fee statements"
    ],
    architecture: "Desktop MVC utilizing Data Access Object (DAO) design patterns. Employs JDBC connection pooling to communicate with an institutional MySQL server.",
    challenges: [
      "Enforcing strict date validation to prevent overlapping rebate claims across consecutive weekends",
      "Maintaining database concurrency when multiple administrative staff process end-of-month rebate batches"
    ],
    githubUrl: "https://github.com/Ezhil-1230/Hall-Mess-Rebate-System",
    hasLiveDemo: false,
    status: "Completed",
    bannerGradient: "from-emerald-900/40 via-teal-900/30 to-slate-950/40",
    accentColor: "emerald",
    iconName: "Calculator"
  },
  {
    id: "hall-leave-app",
    title: "Hall Leave Application System",
    category: "Mobile",
    tagline: "Digitized campus leave management and multi-level approvals.",
    description: "Developed a mobile application for digitized student leave requests, approvals, forms and database integration.",
    longDescription: "A cross-platform mobile application engineered using Flutter and Dart that replaces physical gate passes and paper leave application forms with real-time digital submissions, instant push notifications, and automated warden sign-offs.",
    technologies: ["Flutter", "Dart", "Firebase", "SQLite", "Cloud Firestore"],
    keyFeatures: [
      "Digital student leave application forms with dynamic reason and date selectors",
      "Real-time request management dashboard for hall tutors and wardens",
      "Multi-tier approval workflows with instant digital status updates",
      "Firebase Cloud Firestore integration for real-time synchronization",
      "Offline resilience with local SQLite caching for intermittent connectivity"
    ],
    architecture: "Flutter reactive client architecture using BLoC / provider state management with SQLite local database caching and Firebase Cloud Firestore for real-time document change listeners.",
    challenges: [
      "Ensuring students can draft leave requests offline and synchronize instantly upon regaining network connectivity",
      "Structuring strict security rules in Firebase to protect student contact and travel records"
    ],
    githubUrl: "https://github.com/Ezhil-1230/Hall-Leave-Application-System",
    liveUrl: "https://github.com/Ezhil-1230/Hall-Leave-Application-System/raw/main/release/Hall-Leave-Application-System.apk",
    hasLiveDemo: true,
    status: "Completed",
    bannerGradient: "from-blue-900/40 via-cyan-900/30 to-indigo-950/40",
    accentColor: "blue",
    iconName: "Smartphone"
  },
  {
    id: "meeting-schedule-app",
    title: "Meeting Schedule & Alert App",
    category: "Mobile",
    tagline: "Native Android organizer with background scheduling alarms.",
    description: "Developed a mobile application for meeting scheduling, tracking and automated notification alerts.",
    longDescription: "A native Android mobile application designed to help academic teams and professionals schedule meetings, resolve timetable overlaps, track minutes of meetings, and receive reliable foreground and background push reminders.",
    technologies: ["Android", "Java", "SQLite", "AlarmManager", "BroadcastReceiver"],
    keyFeatures: [
      "Intuitive calendar-based meeting scheduling interface",
      "Agenda tracking and attendee record management",
      "Automated alerts using Android AlarmManager for battery-efficient background triggers",
      "Notification management with custom heads-up priority channels",
      "Local SQLite database storage for zero-latency meeting lookups"
    ],
    architecture: "Native Android Java architecture following Model-View-Presenter (MVP). Employs Android BroadcastReceivers and AlarmManager APIs to deliver persistent alerts even across device reboots.",
    challenges: [
      "Handling Android OS battery optimization and Doze mode restrictions to ensure notifications fire on time",
      "Designing responsive tablet and smartphone layouts using ConstraintLayout"
    ],
    githubUrl: "https://github.com/Ezhil-1230/Meeting-Schedule-Alert-App",
    liveUrl: "https://github.com/Ezhil-1230/Meeting-Schedule-Alert-App/raw/main/release/Meeting-Schedule-Alert-App.apk",
    hasLiveDemo: true,
    status: "Completed",
    bannerGradient: "from-amber-900/40 via-orange-900/30 to-slate-950/40",
    accentColor: "amber",
    iconName: "CalendarClock"
  },
  {
    id: "age-gender-detection",
    title: "Age and Gender Detection System",
    category: "AI / Computer Vision",
    tagline: "Real-time face detection and demographic classification with OpenCV.",
    description: "Developed a real-time computer vision application using OpenCV for face detection and age and gender prediction.",
    longDescription: "An intelligent artificial intelligence and computer vision pipeline capable of detecting multiple human faces simultaneously in live video streams or static photographs, categorizing demographic gender with high confidence, and placing individuals into structured age brackets.",
    technologies: ["Python", "OpenCV", "Deep Neural Networks (DNN)", "NumPy"],
    keyFeatures: [
      "Real-time face detection with dynamic bounding box tracking",
      "Computer vision pipeline optimized for smooth frame rates (FPS)",
      "Age prediction across structured demographic intervals",
      "Binary gender classification with confidence percentage score overlays",
      "Robust performance across varied ambient lighting conditions"
    ],
    architecture: "Built with Python utilizing OpenCV's `dnn` (Deep Neural Network) module loading pre-trained Caffe model weights for face detection and classification inference pipelines.",
    challenges: [
      "Tuning confidence thresholds to eliminate false positives under dim background lighting",
      "Optimizing video frame resizing and batch normalization to maintain real-time performance on standard CPUs"
    ],
    githubUrl: "https://github.com/Ezhil-1230/age-and-gender-detection",
    hasLiveDemo: false,
    status: "Completed",
    bannerGradient: "from-rose-900/40 via-purple-900/30 to-slate-950/40",
    accentColor: "rose",
    iconName: "Eye"
  }
];
