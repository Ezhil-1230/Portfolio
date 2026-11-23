import { CertificationItem, AchievementItem } from '../types';

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "uipath",
    title: "UiPath Automation Explorer for Students",
    issuer: "ICT Academy",
    platform: "UiPath Academic Alliance",
    description: "Certified proficiency in Robotic Process Automation (RPA), automated workflows, UI selectors, recording tools, and data manipulation.",
    skillsAcquired: ["Robotic Process Automation", "UiPath Studio", "Workflow Automation", "Process Mining"],
    icon: "Bot",
    badgeColor: "border-orange-500/40 text-orange-400 bg-orange-500/10"
  },
  {
    id: "rust-leptos",
    title: "Full Stack Web Application with Rust and Leptos",
    issuer: "LinkedIn Learning",
    platform: "LinkedIn Learning",
    description: "Hands-on training in high-performance full-stack web applications using Rust, WebAssembly (Wasm), and the reactive Leptos framework.",
    skillsAcquired: ["Rust Systems Programming", "Leptos Framework", "WebAssembly (Wasm)", "Reactive Architecture"],
    icon: "Cpu",
    badgeColor: "border-blue-500/40 text-blue-400 bg-blue-500/10"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "stress-interview-prize",
    title: "2nd Prize Winner",
    subtitle: "Technical Stress Interview Competition",
    organization: "Collegiate Technical Symposium",
    year: "2024",
    description: "Recognized for exceptional composure, rapid algorithmic thinking, live problem-solving, and clear architectural communication under intense panel interview conditions.",
    icon: "Trophy",
    accent: "from-amber-500/20 to-yellow-500/10 border-amber-500/40 text-amber-400"
  }
];
