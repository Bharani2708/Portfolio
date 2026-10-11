import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { CertificationsSection } from '../sections/CertificationsSection';
import { portfolioData } from '../data/portfolioData';

export const ExperiencePage = () => {
  const { experience } = portfolioData;

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="CAREER MILESTONES"
          title="Professional Experience &"
          highlight="Verified Credentials."
          subtitle="A comprehensive record of production roles, software engineering internships, and cloud certifications."
        />

        {/* Resume Download Callout */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Full Developer Curriculum Vitae</h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
                  Detailed technical resume including architecture case studies and verified work history.
                </p>
              </div>
            </div>

            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert('Verified Resume PDF download placeholder. You can link your actual PDF resume file in client/src/data/portfolioData.js under personal.resumeUrl!');
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-xs hover:text-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-10 mb-24">
          {experience.map((item, idx) => {
            const isInternship = item.type?.toLowerCase().includes('intern');
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-panel p-8 sm:p-10 rounded-3xl border ${
                  isInternship ? 'border-violet-500/30' : 'border-cyan-500/30'
                } hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] transition-all`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold ${
                        isInternship
                          ? 'bg-violet-950/60 text-violet-300 border border-violet-500/40'
                          : 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="text-sm font-mono text-cyan-300 font-medium">
                      {item.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{item.role}</h3>
                
                <div className="flex items-center gap-1 text-xs text-slate-400 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.location}</span>
                </div>

                <div className="space-y-3">
                  {item.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {item.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications & Industry Accreditations */}
        <div className="border-t border-white/5 pt-16">
          <CertificationsSection />
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
