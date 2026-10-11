import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const CertificationsSection = () => {
  const { certifications } = portfolioData;

  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-20 relative bg-cyber-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="VERIFIED CREDENTIALS"
          title="Industry Certifications &"
          highlight="Accreditations."
          subtitle="Formally assessed technical proficiencies verified by leading cloud providers and developer institutes."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.1)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {cert.date}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h4>

                <p className="text-xs text-slate-400 font-mono mt-1">{cert.issuer}</p>

                {cert.credentialId && (
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                )}
              </div>

              {cert.link && (
                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-white transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

