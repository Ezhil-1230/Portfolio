import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, CheckCircle2, Bot, Cpu, Terminal, Sparkles, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>CREDENTIALS & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
            Certifications & <span className="gradient-text-cyan">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-sm sm:text-base font-sans">
            Professional certifications and competition awards demonstrating verified engineering skills.
          </p>
        </div>

        {/* Top Feature: 2nd Prize Technical Stress Interview Competition (Trophy Card) */}
        {ACHIEVEMENTS.map((ach) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto relative rounded-3xl p-[2px] bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 shadow-2xl"
          >
            <div className="rounded-[22px] bg-[#0A0E1A] p-7 sm:p-9 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              
              {/* Trophy Icon Frame */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border-2 border-amber-500/40 flex items-center justify-center text-amber-400 shadow-lg flex-shrink-0 animate-pulse-slow">
                <Trophy className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              {/* Text Description */}
              <div className="space-y-2 text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Competition Honor</span>
                  <span>&bull;</span>
                  <span>{ach.year}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  {ach.title} &mdash; <span className="text-amber-400">{ach.subtitle}</span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                  {ach.organization}
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed font-sans pt-1">
                  "{ach.description}"
                </p>
              </div>

            </div>
          </motion.div>
        ))}

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-4">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-7 space-y-5 border-white/10 hover:border-cyan-500/30 hover:shadow-cyan-glow transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center p-2.5">
                    {cert.icon === 'Bot' ? <Bot className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${cert.badgeColor}`}>
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    Platform: {cert.platform}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {cert.description}
                </p>

                {/* Acquired Skills Badges */}
                <div className="space-y-1.5 pt-2">
                  <p className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">Acquired Competencies:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsAcquired.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Verified Status Footnote */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>
                <span className="text-zinc-500 text-[11px]">Official Syllabus</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
