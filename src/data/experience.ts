import { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "mcc-mrf",
    company: "MCC MRF Innovation Park",
    position: "Software Developer",
    year: "2026",
    period: "2026",
    location: "Chennai, Tamil Nadu",
    type: "Internship",
    responsibilities: [
      "Developed responsive user interface modules using React.js.",
      "Integrated database operations.",
      "Assisted in backend API configuration.",
      "Worked on authentication system integrations."
    ],
    technologies: ["React.js", "JavaScript", "REST APIs", "Authentication", "Database Integration"],
    badgeColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10"
  },
  {
    id: "pentagon-innovations",
    company: "Pentagon Innovations",
    position: "Full Stack Developer",
    year: "2025",
    period: "2025",
    location: "Tamil Nadu, India",
    type: "Internship",
    responsibilities: [
      "Developed and maintained web applications integrating frontend interfaces and backend databases.",
      "Engineered secure user authentication modules and optimized database functionalities.",
      "Contributed to application development, debugging and frontend-backend integration."
    ],
    technologies: ["Full Stack Web", "Backend Databases", "User Authentication", "CRUD Operations", "Debugging"],
    badgeColor: "border-purple-500/40 text-purple-400 bg-purple-500/10"
  }
];
