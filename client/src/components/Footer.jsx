import React from 'react';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const { personal } = portfolioData;

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-md pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Identity Column */}
          <div className="md:col-span-2 space-y-4">
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-3 cursor-pointer text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/40 flex items-center justify-center">
                <span className="font-mono font-bold text-cyan-400 text-sm">BD</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">{personal.name}</span>
            </button>
            <p className="text-sm text-slate-400 max-w-md font-light leading-relaxed">
              {personal.tagline}. Dedicated to engineering high-availability systems with responsive modern design systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.socials.email}`}
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              System Coordinates
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top */}
          <div className="flex flex-col justify-end items-start md:items-end">
            <button
              onClick={() => scrollTo('hero')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-xs font-mono text-cyan-400 hover:text-white hover:border-cyan-400/50 transition-all cursor-pointer group"
            >
              <span>RETURN TO APEX</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1.5 font-mono">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Built with React 19, Three.js, Tailwind CSS & Framer Motion</span>
          </div>
          <div>
            &copy; {currentYear} {personal.name}. All systems secured and encrypted.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
