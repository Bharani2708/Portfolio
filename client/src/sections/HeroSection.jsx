import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/SocialIcons';
import { HeroCanvas } from '../components/3d/HeroCanvas';
import { portfolioData } from '../data/portfolioData';

export const HeroSection = () => {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-cyber-grid"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-10rem)]">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono text-cyan-300 font-medium tracking-wide">
                SYSTEM READY // {personal.status}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Building Digital Experiences{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                  Beyond The Ordinary.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-mono text-slate-300 font-medium">
                {personal.role}
              </p>
            </motion.div>

            {/* Bio summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 max-w-xl font-light leading-relaxed"
            >
              {personal.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="group relative px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-sm tracking-wide hover:text-white hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const resumeEl = document.getElementById('experience');
                  if (resumeEl) resumeEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 sm:px-8 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Career Credentials</span>
              </button>
            </motion.div>

            {/* Social Links Dock */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
              <a
                href={`mailto:${personal.socials.email}`}
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right 3D Scene */}
          <div className="lg:col-span-5 h-[360px] sm:h-[450px] lg:h-[550px] w-full flex items-center justify-center relative">
            <HeroCanvas />
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => scrollTo('about')}
      >
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
};
