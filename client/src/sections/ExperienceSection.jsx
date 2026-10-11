import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-cyber-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="CAREER MILESTONES"
          title="Professional Experience &"
          highlight="Internships."
          subtitle="Real-world engineering contributions across cloud software environments and creative digital studios."
        />

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Vertical Glowing Circuit Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent shadow-[0_0_12px_rgba(0,240,255,0.4)]" />

          <div className="space-y-12 sm:space-y-16">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              const isInternship = item.type?.toLowerCase().includes('intern');

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-300" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`glass-panel p-6 sm:p-8 rounded-2xl border ${
                        isInternship ? 'border-violet-500/30' : 'border-cyan-500/30'
                      } hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all`}
                    >
                      {/* Badge / Type */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold ${
                            isInternship
                              ? 'bg-violet-950/60 text-violet-300 border border-violet-500/40'
                              : 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                          }`}
                        >
                          {item.type}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h4 className="text-xl font-bold text-white">{item.role}</h4>
                      <div className="flex items-center gap-2 text-sm text-cyan-300 font-medium mt-1">
                        <span>{item.company}</span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1 text-xs text-slate-400 font-normal">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Contribution bullets */}
                      <div className="mt-4 space-y-2.5">
                        {item.highlights.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                        {item.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded bg-slate-900 border border-white/10 text-[10px] font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
