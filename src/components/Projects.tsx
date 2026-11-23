import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Terminal, 
  Sparkles, 
  ArrowUpRight, 
  Info,
  ShoppingBag,
  Calculator,
  Smartphone,
  CalendarClock,
  Eye,
  FolderGit2
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onConfigureLink?: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onConfigureLink }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Full Stack',
    'Mobile',
    'AI / Computer Vision',
    'Desktop & Systems'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'CalendarClock': return <CalendarClock className="w-5 h-5" />;
      case 'Eye': return <Eye className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-sm sm:text-base font-sans">
            Engineered software systems encompassing modern full-stack web applications, mobile platforms, computer vision, and desktop architectures.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-cyan-glow scale-[1.02]'
                  : 'glass-card text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-3xl overflow-hidden border-white/10 hover:border-cyan-500/40 hover:shadow-cyan-glow transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                
                {/* Visual Thumbnail Banner */}
                <div className={`relative h-44 p-6 bg-gradient-to-br ${project.bannerGradient} border-b border-white/10 flex flex-col justify-between overflow-hidden`}>
                  {/* Subtle geometric grid backdrop */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                  {/* Top Bar: Category Pill & Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white shadow-sm">
                      {getProjectIcon(project.iconName)}
                    </div>
                  </div>

                  {/* Banner Title Preview */}
                  <div className="relative z-10">
                    <p className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase">Project Architecture</p>
                    <p className="text-base font-display font-bold text-white line-clamp-1">
                      {project.title}
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-400/90 font-mono">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans line-clamp-3">
                    "{project.description}"
                  </p>

                  {/* Key Feature Bullets */}
                  <div className="space-y-1.5 pt-1 text-xs text-zinc-400">
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">&bull;</span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono text-zinc-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Bottom Actions Bar */}
              <div className="p-6 pt-0 space-y-3">
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  
                  {/* GitHub Button */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold glass-card text-zinc-300 hover:text-white hover:border-cyan-500/40 transition-all flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onConfigureLink?.(project.title)}
                      className="px-3 py-2 rounded-xl text-xs font-mono text-zinc-400 glass-card hover:text-white flex items-center gap-1.5"
                      title="Repository configuration"
                    >
                      <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Repo on Request</span>
                    </button>
                  )}

                  {/* Live Demo Status Pill */}
                  {project.hasLiveDemo && project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="px-2.5 py-1.5 text-[11px] font-mono text-zinc-500 rounded-lg bg-zinc-900/60 border border-white/5">
                      Completed
                    </span>
                  )}

                  {/* View Details Button */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-cyan-glow transition-all flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onConfigureLink={onConfigureLink}
      />
    </section>
  );
};
