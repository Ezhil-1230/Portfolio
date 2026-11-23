import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Strong object-oriented design, algorithmic foundations, and multi-paradigm development.",
    icon: "Code",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400",
    skills: [
      { name: "Java", highlight: true },
      { name: "Python", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "PHP", highlight: false },
      { name: "C", highlight: false },
      { name: "C++", highlight: false }
    ]
  },
  {
    title: "Frontend Development",
    description: "Building responsive, modern, user-friendly, and accessible interfaces.",
    icon: "Layout",
    color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400",
    skills: [
      { name: "React.js", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "HTML5", highlight: false },
      { name: "CSS3", highlight: false },
      { name: "Bootstrap", highlight: false }
    ]
  },
  {
    title: "Backend Development",
    description: "Architecting secure RESTful APIs, business logic controllers, and auth modules.",
    icon: "Server",
    color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "Authentication", highlight: true },
      { name: "JWT", highlight: true },
      { name: "Laravel", highlight: false }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Designing normalized relational schemas and document stores with ACID integrity.",
    icon: "Database",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
    skills: [
      { name: "MySQL", highlight: true },
      { name: "SQL", highlight: true },
      { name: "MongoDB", highlight: true }
    ]
  },
  {
    title: "Mobile Development",
    description: "Engineering native and cross-platform mobile apps with offline persistence.",
    icon: "Smartphone",
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
    skills: [
      { name: "Flutter", highlight: true },
      { name: "Android", highlight: true },
      { name: "Java", highlight: false },
      { name: "Firebase", highlight: true },
      { name: "SQLite", highlight: false }
    ]
  },
  {
    title: "Libraries & AI",
    description: "Computer vision image processing, feature extraction, and model inference.",
    icon: "Cpu",
    color: "from-rose-500/20 to-red-500/10 border-rose-500/30 text-rose-400",
    skills: [
      { name: "OpenCV", highlight: true }
    ]
  },
  {
    title: "Developer Tools",
    description: "Version control, IDE environments, local test servers, and BI analytics tools.",
    icon: "Wrench",
    color: "from-sky-500/20 to-indigo-500/10 border-sky-500/30 text-sky-400",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "VS Code", highlight: false },
      { name: "XAMPP", highlight: false },
      { name: "WAMP", highlight: false },
      { name: "Power BI", highlight: true },
      { name: "Tableau", highlight: false }
    ]
  },
  {
    title: "Core Concepts",
    description: "Fundamental computer science theory, algorithms, systems, and engineering best practices.",
    icon: "BookOpen",
    color: "from-indigo-500/20 to-violet-500/10 border-indigo-500/30 text-indigo-400",
    skills: [
      { name: "Object-Oriented Programming", highlight: true },
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "Database Management Systems", highlight: true },
      { name: "Software Engineering", highlight: false },
      { name: "CRUD Operations", highlight: false },
      { name: "Debugging", highlight: false },
      { name: "Artificial Intelligence & ML", highlight: true },
      { name: "Operating Systems", highlight: false },
      { name: "Computer Networks", highlight: false }
    ]
  },
  {
    title: "Professional Soft Skills",
    description: "Teamwork, rapid continuous learning, leadership, and proactive ownership.",
    icon: "HeartHandshake",
    color: "from-teal-500/20 to-emerald-500/10 border-teal-500/30 text-teal-400",
    skills: [
      { name: "Leadership", highlight: true },
      { name: "Adaptability", highlight: true },
      { name: "Time Management", highlight: false },
      { name: "Problem Solving", highlight: true }
    ]
  }
];
