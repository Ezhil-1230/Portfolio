import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle, 
  AlertCircle, 
  Cpu, 
  Sparkles,
  ShieldCheck,
  Calendar,
  FolderGit2
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onConfigureLink?: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onConfigureLink
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080B14]/85 backdrop-blur-md"
        />

        {/* Modal Dialog Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto glass-card rounded-3xl p-6 sm:p-9 border border-white/15 shadow-2xl z-10 space-y-7"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-2 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-zinc-800/80 border border-white/5">
                Status: {project.status}
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-cyan-400 font-sans">
              {project.tagline}
            </p>
          </div>

          {/* Technologies Badges */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-800/90 text-zinc-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Comprehensive Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
              Project Overview
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Key Implemented Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Box */}
          <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-2">
            <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Software & Data Architecture</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              {project.architecture}
            </p>
          </div>

          {/* Engineering Challenges & Learnings */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Key Engineering Challenges Overcome</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                {project.challenges.map((challenge, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-mono">&bull;</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Repository Button */}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onConfigureLink?.(project.title)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold glass-card text-zinc-400 hover:text-white flex items-center gap-2 transition-all border border-dashed border-white/20"
                >
                  <FolderGit2 className="w-4 h-4 text-cyan-400" />
                  <span>Repository Link on Request</span>
                </button>
              )}

              {/* Live Demo Status */}
              {project.hasLiveDemo && project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white flex items-center gap-2 shadow-cyan-glow"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              ) : (
                <span className="px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-400 bg-zinc-900/70 border border-white/5">
                  Deployment Link Available Upon Configuration
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white glass-card"
            >
              Close Details
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
