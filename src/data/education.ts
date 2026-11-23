import { EducationItem } from '../types';

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    field: "Computer Science & Software Applications",
    institution: "Madras Christian College, Chennai",
    university: "University of Madras",
    duration: "2025 – 2027",
    gradeLabel: "Current CGPA",
    gradeValue: "9.0 / 10",
    description: "Advanced post-graduate coursework covering Advanced Web Architectures, Distributed Databases, Cloud Computing, Artificial Intelligence, and Software Engineering methodologies.",
    highlights: [
      "Consistent 9.0 academic CGPA benchmark",
      "Active participant in technical symposiums and coding competitions",
      "Developing production-ready web and mobile software projects"
    ],
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/40 text-cyan-400"
  },
  {
    id: "bsc",
    degree: "Bachelor of Science in Computer Science",
    field: "Computer Science",
    institution: "The American College, Madurai",
    university: "Madurai Kamaraj University",
    duration: "2022 – 2025",
    gradeLabel: "Graduated CGPA",
    gradeValue: "8.9 / 10",
    percentage: "86.2%",
    description: "Comprehensive foundational degree in core computer science, discrete mathematics, object-oriented software design, relational databases, and data structures.",
    highlights: [
      "Graduated with Distinction (8.9 CGPA / 86.2%)",
      "Completed undergraduate capstone project in computer vision using OpenCV & Python",
      "Gained hands-on proficiency in Java, C, C++, and MySQL"
    ],
    color: "from-purple-500/20 to-pink-500/10 border-purple-500/40 text-purple-400"
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (12th Grade)",
    field: "Mathematics & Computer Science Stream",
    institution: "Rajalakshmi Genguswamy Matriculation Higher Secondary School",
    university: "State Board of School Examinations, Tamil Nadu",
    duration: "2022",
    gradeLabel: "Final Score",
    gradeValue: "78.83%",
    description: "Rigorous high-school preparation emphasizing Advanced Mathematics, Computer Science fundamentals, and Physics.",
    highlights: [
      "Secured 78.83% in state matriculation board examinations",
      "Built early foundational programming interest in C++ and basic algorithm design"
    ],
    color: "from-blue-500/20 to-indigo-500/10 border-blue-500/40 text-blue-400"
  },
  {
    id: "sslc",
    degree: "Secondary School Leaving Certificate (10th Grade)",
    field: "General Academic Curriculum",
    institution: "Rajalakshmi Genguswamy Matriculation Higher Secondary School",
    university: "State Board of School Examinations, Tamil Nadu",
    duration: "2020",
    gradeLabel: "Final Score",
    gradeValue: "98.6%",
    description: "Exemplary foundational academic performance across Mathematics, Science, Social Sciences, and Languages.",
    highlights: [
      "Outstanding academic performance securing 98.6%",
      "School rank holder in Mathematics and Science"
    ],
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-400"
  }
];
