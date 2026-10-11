import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectModal } from '../components/ProjectModal';
import { GithubIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FEATURED WORK"
          title="Engineered Systems &"
          highlight="Web Applications."
          subtitle="Full-stack projects and production systems built with MERN stack, RESTful APIs, and modern responsive interfaces."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(0,240,255,0.12)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    {proj.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg glass-panel text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {proj.live && proj.live !== '#' && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg glass-panel text-slate-400 hover:text-cyan-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-cyan-400 font-mono mt-1 mb-4">{proj.tagline}</p>

                <p className="text-slate-300 text-sm font-light leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                {/* Key Metrics */}
                {proj.metrics && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.metrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/5 text-[11px] font-mono text-slate-300"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded bg-slate-900 border border-white/5 text-xs font-mono text-cyan-300/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-3 rounded-xl glass-panel text-xs font-mono text-cyan-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>INSPECT DETAILED CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4" />
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
    </div>
  );
};

export default ProjectsPage;
