import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal, ArrowRight, Sparkles, Mail } from 'lucide-react';
import { HeroCanvas } from '../components/3d/HeroCanvas';
import { ProjectModal } from '../components/ProjectModal';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const HomePage = () => {
  const { personal, projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const selectedProjects = projects.slice(0, 2);

  return (
    <div className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 md:py-16 overflow-hidden bg-cyber-grid">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono text-cyan-300 font-medium tracking-wide">
                  SYSTEM ACTIVE // {personal.status}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-slate-400">
                    Hello, I'm
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 font-mono tracking-tight">
                    {personal.name}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                  Building Digital Experiences{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                    Beyond The Ordinary.
                  </span>
                </h1>
                <p className="text-lg sm:text-xl font-mono text-slate-300 font-medium flex items-center gap-2">
                  <span className="text-cyan-400">&gt;</span>
                  <span>{personal.role}</span>
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-400 max-w-xl font-light leading-relaxed"
              >
                {personal.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link
                  to="/projects"
                  className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-sm tracking-wide hover:text-white hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Selected Work</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="px-7 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>About My Journey</span>
                </Link>
              </motion.div>

              {/* Social Links Dock */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3 pt-4 border-t border-white/5"
              >
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-2">
                  Connect:
                </span>
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                  aria-label="Twitter / X"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <Link
                  to="/contact"
                  className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                  aria-label="Contact"
                >
                  <Mail className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right 3D Visual */}
            <div className="lg:col-span-5 h-[360px] sm:h-[450px] lg:h-[550px] w-full flex items-center justify-center relative">
              <HeroCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS OVERVIEW */}
      <section className="py-12 border-y border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {personal.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-4 rounded-2xl glass-panel border border-white/5"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORK PREVIEW */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                SELECTED WORK
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Featured Architectures & Systems.
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-white transition-colors group"
            >
              <span>VIEW ALL PROJECTS ({projects.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedProjects.map((proj) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">FEATURED</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-cyan-400 font-mono mt-1 mb-4">{proj.tagline}</p>

                  <p className="text-slate-300 text-sm font-light leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-xs font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="w-full py-3 rounded-xl glass-panel text-xs font-mono text-cyan-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>INSPECT BLUEPRINT DETAILS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO COLLABORATION BANNER */}
      <section className="py-20 relative bg-cyber-grid border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 text-center relative overflow-hidden">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Have an ambitious system or product to build?
            </h3>
            <p className="text-slate-400 text-base max-w-xl mx-auto font-light leading-relaxed mb-8">
              Available for full-time engineering roles, technical advisory, and creative computing contracts. Let's discuss your requirements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-sm hover:text-white hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2"
              >
                <span>Initialize Contact</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/experience"
                className="px-8 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-white border border-white/10 text-sm font-semibold transition-all"
              >
                View Experience Timeline
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default HomePage;

