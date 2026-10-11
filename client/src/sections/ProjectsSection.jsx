import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectModal } from '../components/ProjectModal';
import { portfolioData } from '../data/portfolioData';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const { projects } = portfolioData;

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== featuredProject.id);

  const filteredSecondary =
    activeFilter === 'all'
      ? secondaryProjects
      : secondaryProjects.filter((p) =>
          p.category.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="PORTFOLIO HIGHLIGHTS"
          title="Featured Production"
          highlight="Deployments & Systems."
          subtitle="A selection of high-concurrency systems, interactive 3D simulations, and web platforms engineered with MERN and WebGL."
        />

        {/* 1. Flagship Featured Project Banner */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 glass-panel rounded-3xl border border-cyan-500/30 p-8 sm:p-12 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] transition-all"
          >
            {/* Subtle glow accent */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>FLAGSHIP SYSTEM // {featuredProject.category}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  {featuredProject.title}
                </h3>

                <p className="text-cyan-300 text-sm font-mono">{featuredProject.tagline}</p>

                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Metrics */}
                {featuredProject.metrics && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {featuredProject.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-300"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-xs hover:text-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-white/20 transition-all"
                      aria-label="View Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {featuredProject.live && (
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Graphic Mockup simulation */}
              <div className="lg:col-span-5 h-64 sm:h-80 w-full rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-500/30 transition-all">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">nexus-cloud.preview.io</span>
                </div>

                <div className="flex-1 flex items-center justify-center py-6">
                  <div className="relative text-center space-y-2">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/30 border border-cyan-400/40 flex items-center justify-center animate-pulse">
                      <Layers className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-xs font-mono text-cyan-300">REAL-TIME CLUSTER TELEMETRY</div>
                    <div className="text-[10px] font-mono text-slate-500">10,000 CONCURRENT NODES</div>
                  </div>
                </div>

                <div className="text-right text-[10px] font-mono text-emerald-400">
                  LATENCY: 42MS // HEALTH: 100%
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. Secondary Projects Section */}
        <div className="flex items-center justify-between mb-8">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <span>Additional Architectures & Experiments</span>
          </h4>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            {['all', '3D Graphics', 'Backend'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSecondary.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel rounded-2xl border border-white/5 hover:border-cyan-500/40 p-6 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    {proj.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h4>

                <p className="text-xs text-cyan-400 font-mono mt-1 mb-3">{proj.tagline}</p>

                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed line-clamp-3">
                  {proj.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-[10px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-2.5 rounded-xl glass-panel text-xs font-mono text-cyan-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>INSPECT BLUEPRINT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
