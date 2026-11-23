import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, School, Terminal, CheckCircle2 } from 'lucide-react';
import { EDUCATION_LIST } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
            Education <span className="gradient-text-cyan">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-sm sm:text-base font-sans">
            Formal collegiate degrees and secondary school academic track record.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION_LIST.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-7 space-y-5 border-white/10 hover:border-cyan-500/30 hover:shadow-cyan-glow transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Top Badge: Duration & Grade */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-zinc-800/80 border border-white/5">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{item.duration}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.gradeLabel}: {item.gradeValue}</span>
                  </span>
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium">
                    <School className="w-4 h-4 flex-shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                  {item.university && (
                    <p className="text-xs text-zinc-400 font-mono">
                      Affiliation: {item.university}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer Micro Line */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Verified Academic Credential</span>
                <span className="text-cyan-400">&bull;&bull;&bull;</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
