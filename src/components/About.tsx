import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Code2, GraduationCap, Award, CheckCircle, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  // Animated Counter Component
  const Counter: React.FC<{ target: number; decimals?: number; suffix?: string }> = ({
    target,
    decimals = 0,
    suffix = '',
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let start = 0;
      const duration = 1400;
      const stepTime = 16;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }, [isInView, target]);

    return (
      <span>
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </span>
    );
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Professional Biography Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-7 sm:p-9 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center text-sm">
                  <Terminal className="w-4 h-4" />
                </span>
                <span>Software Developer & MCA Scholar</span>
              </h3>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300 font-sans">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Full-Stack Web Architectures</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>RESTful Backend & Database Design</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Clean, Scalable & Readable Code</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Rapid Continuous Technical Learning</span>
              </div>
            </div>
          </motion.div>

          {/* Achievement Cards (4 Cards with Animated Counters) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Card 1: 2 Internship Experiences */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass-card rounded-2xl p-5 hover:border-cyan-500/40 transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center p-2.5 flex-shrink-0 border border-cyan-500/20">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-white">
                  <Counter target={2} />
                </div>
                <p className="text-sm font-semibold text-zinc-200">Internship Experiences</p>
                <p className="text-xs text-zinc-400">Pentagon Innovations & MCC MRF Innovation Park</p>
              </div>
            </motion.div>

            {/* Card 2: 6 Development Projects */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass-card rounded-2xl p-5 hover:border-purple-500/40 transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center p-2.5 flex-shrink-0 border border-purple-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-white">
                  <Counter target={6} suffix="+" />
                </div>
                <p className="text-sm font-semibold text-zinc-200">Development Projects</p>
                <p className="text-xs text-zinc-400">Full Stack Web, Mobile, AI & Systems</p>
              </div>
            </motion.div>

            {/* Card 3: 8.9 B.Sc. CGPA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass-card rounded-2xl p-5 hover:border-blue-500/40 transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center p-2.5 flex-shrink-0 border border-blue-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-white">
                  <Counter target={8.9} decimals={1} suffix=" / 10" />
                </div>
                <p className="text-sm font-semibold text-zinc-200">B.Sc. Computer Science CGPA</p>
                <p className="text-xs text-zinc-400">The American College, Madurai (86.2%)</p>
              </div>
            </motion.div>

            {/* Card 4: 9.0 Current MCA CGPA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="glass-card rounded-2xl p-5 hover:border-emerald-500/40 transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center p-2.5 flex-shrink-0 border border-emerald-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-white">
                  <Counter target={9.0} decimals={1} suffix=" / 10" />
                </div>
                <p className="text-sm font-semibold text-zinc-200">Current MCA CGPA</p>
                <p className="text-xs text-zinc-400">Madras Christian College, Chennai</p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
