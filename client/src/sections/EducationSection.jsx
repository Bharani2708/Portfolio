import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 sm:py-32 relative overflow-hidden bg-cyber-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="ACADEMIC BACKGROUND"
          title="Education &"
          highlight="Schooling."
          subtitle="Formal academic immersion from foundational schooling to undergraduate engineering."
        />

        <div className="space-y-8 mt-12">
          {education.map((edu, idx) => {
            const percentageValue = edu.percentage || (edu.grade?.includes('7.6') ? 76 : 80);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all relative overflow-hidden group"
              >
                {/* Left Cyan Accent Border */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-violet-500" />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Graduation Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 font-medium mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Status / Period Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono self-start">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Score & Progress Bar */}
                {edu.grade && (
                  <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-2 text-sm font-mono text-cyan-300 font-semibold">
                      <Award className="w-4 h-4 text-cyan-400" />
                      <span>{edu.grade}</span>
                    </div>

                    <div className="flex-1 max-w-xs h-2 rounded-full bg-slate-900 overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentageValue}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                      />
                    </div>
                  </div>
                )}

                {/* Coursework / Subjects */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/70 border border-white/5 text-[11px] font-mono text-slate-400"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
