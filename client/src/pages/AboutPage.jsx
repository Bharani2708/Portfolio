import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, ShieldCheck, GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { SkillsSection } from '../sections/SkillsSection';
import { portfolioData } from '../data/portfolioData';

export const AboutPage = () => {
  const { about, personal, education } = portfolioData;

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ABOUT ME"
          title="Engineering Philosophy &"
          highlight="Technical Journey."
          subtitle="A deeper look into how I architect systems, solve latency challenges, and bridge full-stack engineering with creative computing."
        />

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12 mb-24">
          {/* Left Column: Terminal & Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                  <Terminal className="w-4 h-4" />
                  <span>DEVELOPER_PROFILE.json</span>
                </div>
                <div className="text-[11px] font-mono text-slate-500">FORMAT: MERN // 3D WEBGL</div>
              </div>

              <h3 className="text-2xl font-bold text-white leading-snug">
                {about.headline}
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>MERN Stack Architecture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>WebGL / Three.js Shaders</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Zero-Downtime Mentality</span>
                </div>
              </div>
            </div>

            {/* Quick Terminal Bio Info */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 font-mono text-xs text-slate-300 space-y-2">
              <div className="text-cyan-400 font-bold mb-3">// RUNTIME PARAMETERS</div>
              <div><span className="text-slate-500">CURRENT_LOCATION:</span> {personal.location}</div>
              <div><span className="text-slate-500">PRIMARY_STACK:</span> MongoDB, Express.js, React 19, Node.js, Three.js</div>
              <div><span className="text-slate-500">OPERATING_SYSTEM:</span> Linux / macOS / Windows Unix Terminal</div>
              <div><span className="text-slate-500">AVAILABILITY:</span> {personal.availability}</div>
            </div>
          </div>

          {/* Right Column: Architectural Discipline Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Core Engineering Pillars
            </h4>

            {about.pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.1)] transition-all"
              >
                <h5 className="text-base font-bold text-white mb-2 text-cyan-300">
                  {pillar.title}
                </h5>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-violet-950/30 border border-cyan-500/20 flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-mono uppercase text-cyan-300 font-semibold tracking-wider">
                  Quality Guarantee
                </div>
                <div className="text-xs text-slate-300 font-light mt-0.5">
                  Clean modular codebases, testable APIs, and fully responsive layouts.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Matrix Embedded on About Page */}
        <div className="mb-24">
          <SkillsSection />
        </div>

        {/* Academic Foundation Section */}
        <div className="border-t border-white/5 pt-20">
          <SectionHeader
            badge="ACADEMIC BACKGROUND"
            title="Education &"
            highlight="Computer Science Theory."
            subtitle="Strong theoretical grounding in data structures, algorithms, and distributed computing."
          />

          <div className="space-y-8 mt-12 max-w-5xl mx-auto">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all"
              >
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

                {edu.coursework && (
                  <div className="mt-6">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
                      <BookOpen className="w-4 h-4 text-violet-400" />
                      <span>Core Coursework</span>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
