import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Github, 
  Linkedin, 
  Briefcase, 
  Code2, 
  Award,
  CheckCircle2,
  Terminal,
  MapPin,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/personal';

interface HeroProps {
  onOpenSocialConfig?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSocialConfig }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const dynamicPhrases = [
    'Full Stack Web Applications',
    'Scalable Backend Systems',
    'Responsive React.js Interfaces',
    'REST APIs & Database Architectures',
    'Intelligent Software Solutions'
  ];

  // Smooth Typewriter Effect
  useEffect(() => {
    const current = dynamicPhrases[titleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % dynamicPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, dynamicPhrases]);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.25 },
      colors: ['#00F0FF', '#6366F1', '#A855F7'],
    });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Clean Typography & Professional Pitch */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left z-10 w-full"
        >
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold">{PERSONAL_INFO.status}</span>
            <span className="text-zinc-600">&bull;</span>
            <span className="text-zinc-300 font-sans">Software Developer & Full Stack Roles</span>
          </div>

          {/* Main Title Hierarchy */}
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              <Terminal className="w-4 h-4" />
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
              EZHIL MAMNOSE <span className="text-cyan-400">P</span>
            </h1>

            {/* Professional Role & Dynamic Sub-line */}
            <div className="space-y-1 pt-1">
              <p className="text-lg sm:text-xl font-semibold text-zinc-200 tracking-tight font-sans">
                Full Stack Developer <span className="text-zinc-500">|</span> Software Developer
              </p>

              <div className="h-8 flex items-center justify-center lg:justify-start gap-1.5 text-sm sm:text-base font-mono">
                <span className="text-zinc-400">Engineering</span>
                <span className="text-cyan-400 font-bold underline decoration-cyan-500/40 decoration-2 underline-offset-4">
                  {displayText}
                </span>
                <span className="w-0.5 h-4 bg-cyan-400 animate-pulse inline-block" />
              </div>
            </div>
          </div>

          {/* Professional Summary Description */}
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
            "{PERSONAL_INFO.heroDescription}"
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-cyan-glow hover:shadow-purple-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Ezhil_Mamnose_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeDownload}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-200 glass-card hover:border-cyan-500/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Contact Me &rarr;
            </a>
          </div>

          {/* Socials & Contact Summary Strip */}
          <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-mono text-zinc-400">
            <span className="text-zinc-500 uppercase tracking-wider text-[11px]">Connect:</span>
            
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-all"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-blue-500/40 transition-all"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-purple-500/40 transition-all"
              title="Send an Email"
              aria-label="Send an Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-zinc-300 font-sans hidden sm:inline">{PERSONAL_INFO.email}</span>
          </div>
        </motion.div>

        {/* Right Column: Clean Executive Developer Card (Aligned with Right Container Edge) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center lg:justify-end items-center z-10 w-full"
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[410px]">
            
            {/* Subtle backlight aura complementing the black suit & clean background */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 rounded-3xl blur-2xl pointer-events-none" />

            {/* Main Executive Card Frame */}
            <div className="relative glass-card rounded-3xl p-4 sm:p-5 space-y-4 shadow-glass">
              
              {/* Profile Headshot Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 shadow-inner">
                <img
                  src={PERSONAL_INFO.profileImagePath}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                />
                
                {/* Subtle bottom vignette to ensure perfect text contrast */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

                {/* Overlaid Bottom Title Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-left">
                  <div>
                    <p className="text-xs font-display font-bold text-white tracking-wide">{PERSONAL_INFO.name}</p>
                    <p className="text-[11px] text-cyan-400 font-mono">Software / Full Stack Developer</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                    MCA 9.0 CGPA
                  </span>
                </div>
              </div>

              {/* Integrated Neat & Clean Metrics Grid (Directly docked inside the card, no messy overlapping badges) */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-zinc-800/50 border border-white/5 text-center">
                  <span className="block text-xl font-display font-bold text-white">2</span>
                  <span className="text-[11px] text-zinc-400 font-mono">Internships</span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-800/50 border border-white/5 text-center">
                  <span className="block text-xl font-display font-bold text-cyan-400">6+</span>
                  <span className="text-[11px] text-zinc-400 font-mono">Projects</span>
                </div>
              </div>

              {/* Location Strip */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-center text-xs font-mono text-zinc-400 px-1">
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
