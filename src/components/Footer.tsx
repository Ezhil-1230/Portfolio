import React from 'react';
import { Github, Linkedin, Mail, Heart, FileDown, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#05070D] py-14 px-4 sm:px-6 lg:px-8 relative text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Brand & Subtitle */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-center md:justify-start">
            <span className="text-base font-display font-extrabold text-white tracking-tight">
              EZHIL MAMNOSE <span className="text-cyan-400">P</span>
            </span>
          </div>
          <p className="text-xs font-mono text-cyan-400">
            Full Stack Developer | Software Developer
          </p>
          <p className="text-xs text-zinc-500 font-sans">
            Chennai, Tamil Nadu, India &bull; {PERSONAL_INFO.email}
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-zinc-400">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
          <span>&bull;</span>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <span>&bull;</span>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <span>&bull;</span>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <span>&bull;</span>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <span>&bull;</span>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-card text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-colors"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-card text-zinc-400 hover:text-white hover:border-blue-500/40 transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-xl glass-card text-zinc-400 hover:text-white hover:border-purple-500/40 transition-colors"
            title="Email"
            aria-label="Send an Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-card text-cyan-400 hover:text-white hover:border-cyan-400 transition-colors"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
        <p>&copy; 2026 Ezhil Mamnose P. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          <span>Designed & Developed with passion.</span>
        </p>
      </div>
    </footer>
  );
};
