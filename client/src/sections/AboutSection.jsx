import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Box, Zap, Terminal, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  Box: Box,
  Zap: Zap,
};

export const AboutSection = () => {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="IDENTITY & ETHOS"
          title="Engineering Precision."
          highlight="Visual Mastery."
          subtitle="Building resilient distributed software with an obsessive focus on performance, architecture, and aesthetics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left Column: Narrative & Metrics */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6"
            >
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                <Terminal className="w-4 h-4" />
                <span>CORE_PHILOSOPHY.md</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {about.headline}
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Clean Architecture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Zero-Trust Security</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Sub-second Latency</span>
                </div>
              </div>
            </motion.div>

            {/* Statistics Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personal.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-5 rounded-2xl border border-white/5 text-center group hover:border-cyan-500/30 transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {about.pillars.map((pillar, idx) => {
              const IconComp = iconMap[pillar.icon] || Cpu;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.1)] transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all flex-shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Quick Status Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-violet-950/30 border border-cyan-500/20 flex items-center gap-4"
            >
              <ShieldCheck className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-mono uppercase text-cyan-300 font-semibold tracking-wider">
                  Location & Availability
                </div>
                <div className="text-sm text-slate-300 font-light mt-0.5">
                  {personal.location} &bull; {personal.availability}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

