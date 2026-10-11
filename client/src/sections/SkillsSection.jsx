import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { skills } = portfolioData;

  const allItems = skills.categories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, categoryId: cat.id }))
  );

  const displayedItems =
    activeCategory === 'all'
      ? allItems
      : allItems.filter((item) => item.categoryId === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-cyber-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="TECHNICAL ARSENAL"
          title="Engineered for"
          highlight="Performance & Scale."
          subtitle="Battle-tested technologies and architectural paradigms utilized across high-availability production environments."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            All Disciplines ({allItems.length})
          </button>
          {skills.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {displayedItems.map((item, idx) => (
            <motion.div
              layout
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    {item.level}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h4>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{item.tag}</span>
                <span className="text-slate-600 group-hover:text-cyan-400/80 transition-colors">
                  // VERIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
