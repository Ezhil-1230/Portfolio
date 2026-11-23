export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Mobile' | 'AI / Computer Vision' | 'Desktop & Systems';
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  keyFeatures: string[];
  architecture: string;
  challenges: string[];
  githubUrl?: string;
  liveUrl?: string;
  hasLiveDemo: boolean;
  status: 'Completed' | 'Ongoing' | 'In Production';
  bannerGradient: string;
  accentColor: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  color: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  year: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
  badgeColor: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  university?: string;
  duration: string;
  gradeLabel: string;
  gradeValue: string;
  percentage?: string;
  description: string;
  highlights: string[];
  color: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  date?: string;
  credentialUrl?: string;
  description: string;
  skillsAcquired: string[];
  icon: string;
  badgeColor: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  year: string;
  description: string;
  icon: string;
  accent: string;
}
