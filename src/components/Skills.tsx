import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  Smartphone, 
  Cpu, 
  Wrench, 
  BookOpen, 
  HeartHandshake,
  Check,
  Terminal,
  Filter
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Languages',
    'Frontend',
    'Backend',
    'Databases',
    'Mobile & AI',
    'Tools & Core'
  ];

  const getFilteredCategories = () => {
    if (activeFilter === 'All') return SKILL_CATEGORIES;
    if (activeFilter === 'Languages') return SKILL_CATEGORIES.filter(c => c.title.includes('Languages'));
    if (activeFilter === 'Frontend') return SKILL_CATEGORIES.filter(c => c.title.includes('Frontend'));
    if (activeFilter === 'Backend') return SKILL_CATEGORIES.filter(c => c.title.includes('Backend'));
    if (activeFilter === 'Databases') return SKILL_CATEGORIES.filter(c => c.title.includes('Databases'));
    if (activeFilter === 'Mobile & AI') return SKILL_CATEGORIES.filter(c => c.title.includes('Mobile') || c.title.includes('Libraries'));
    if (activeFilter === 'Tools & Core') return SKILL_CATEGORIES.filter(c => c.title.includes('Tools') || c.title.includes('Core') || c.title.includes('Soft'));
    return SKILL_CATEGORIES;
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const filteredCategories = getFilteredCategories();

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
            Skills & <span className="gradient-text-cyan">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-sm sm:text-base font-sans">
            Categorized overview of programming languages, frontend/backend technologies, databases, and engineering fundamentals.
          </p>
        </div>

        {/* Quick Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === option
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-glow scale-[1.02]'
                  : 'glass-card text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between border-white/10 hover:border-cyan-500/30 hover:shadow-cyan-glow transition-all duration-300 group"
            >
              <div className="space-y-4">
                
                {/* Header with Icon */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center p-2.5 bg-gradient-to-br ${category.color}`}>
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-transform duration-200 hover:scale-105 ${
                        skill.highlight
                          ? 'bg-zinc-800/90 text-cyan-300 border border-cyan-500/30 shadow-sm'
                          : 'bg-zinc-900/80 text-zinc-300 border border-white/5 hover:border-white/20'
                      }`}
                    >
                      <Check className="w-3 h-3 text-cyan-400" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Micro Bar */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{category.skills.length} Competencies</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
