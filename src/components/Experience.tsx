import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { EXPERIENCES } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>PROFESSIONAL ENGAGEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
            Internship <span className="gradient-text-cyan">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-sm sm:text-base font-sans">
            Hands-on technical contributions in engineering teams and institutional innovation parks.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 opacity-30" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center group"
                >
                  
                  {/* Left Column (Desktop) */}
                  <div className={`sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:order-2 sm:pl-12 sm:text-left'} w-full`}>
                    <div className="space-y-1">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${exp.badgeColor} mb-1`}>
                        <Calendar className="w-3 h-3" />
                        <span>{exp.year}</span>
                        <span>&bull;</span>
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.position}
                      </h3>
                      <h4 className="text-base font-semibold text-zinc-300">
                        {exp.company}
                      </h4>
                      <p className="text-xs text-zinc-500 flex items-center gap-1 sm:justify-end">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        <span>{exp.location}</span>
                      </p>
                    </div>
                  </div>

                  {/* Center Node on Line */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-2xl glass-card border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:shadow-cyan-glow transition-all bg-[#080B14] z-10">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Right Column (Desktop) Card with Responsibilities */}
                  <div className={`sm:w-1/2 pl-12 sm:pl-0 mt-4 sm:mt-0 ${isEven ? 'sm:pl-12' : 'sm:order-1 sm:pr-12'} w-full`}>
                    <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-4 border-white/10 hover:border-cyan-500/30 hover:shadow-glass transition-all">
                      <ul className="space-y-2.5 text-sm text-zinc-300">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Badges */}
                      <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
