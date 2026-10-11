import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="ACADEMIC FOUNDATION"
          title="Education &"
          highlight="Core Theory."
          subtitle="Formal academic immersion in computer science principles, algorithmic optimization, and distributed systems."
        />

        <div className="space-y-8 mt-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all relative overflow-hidden group"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/5 pb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-base text-cyan-300 font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-1.5 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.grade && (
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{edu.grade}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Coursework highlights */}
              {edu.coursework && (
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
                    <BookOpen className="w-4 h-4 text-violet-400" />
                    <span>Key Theoretical & Practical Coursework</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.coursework.map((course, cIdx) => (
                      <div
                        key={cIdx}
                        className="px-3.5 py-2 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300 font-light flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

