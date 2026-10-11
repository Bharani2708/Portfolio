import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/SocialIcons';
import { SectionHeader } from '../components/SectionHeader';
import { usePortfolio } from '../context/PortfolioContext';

export const ContactSection = () => {
  const { personal, recordMessage } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Hidden honeypot for bot detection
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please specify your identity / name';
    if (!formData.email.trim()) {
      errors.email = 'Valid return communication address required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) errors.subject = 'Please specify subject parameters';
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = 'Transmission payload must be at least 10 characters';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => ({ ...prev, [e.target.name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Silently block spam bots filling the hidden honeypot
    if (formData.honeypot) {
      setStatus({ submitting: false, success: true, error: null });
      return;
    }

    if (!validate()) return;

    setStatus({ submitting: true, success: false, error: null });

    // Save directly to frontend storage (viewable in /admin)
    try {
      recordMessage(formData);
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Unable to store message locally.',
      });
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="INITIATE CONTACT"
          title="Let's Build Something"
          highlight="Extraordinary."
          subtitle="Have a challenging project, architectural inquiry, or full-time opportunity? Initialize secure transmission below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Direct Communication Coordinates
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${personal.socials.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-950/40 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">ELECTRONIC MAIL</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {personal.socials.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                  <div className="p-3 rounded-xl bg-cyan-950/40 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">PHYSICAL COORDINATES</div>
                    <div className="text-sm font-semibold text-white">{personal.location}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Verified Social Channels
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personal.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                    aria-label="Twitter / X"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Transmission Terminal
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-light">
                Fill the fields below to dispatch an automated telemetry query directly to my inbox.
              </p>

              {status.success && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                  <div>
                    <span className="font-bold">Transmission Dispatched.</span> Your message has been safely received. I will respond within 24 operational hours.
                  </div>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-2xl bg-red-950/50 border border-red-500/40 text-red-300 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
                  <div>
                    <span className="font-bold">Notice:</span> {status.error}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot field for anti-spam */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      NAME / IDENTITY <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                        fieldErrors.name ? 'border-red-500/60' : 'border-white/10'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all`}
                    />
                    {fieldErrors.name && (
                      <p className="text-[11px] text-red-400 mt-1 font-mono">{fieldErrors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      COMMUNICATION ADDRESS <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@enterprise.io"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                        fieldErrors.email ? 'border-red-500/60' : 'border-white/10'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all`}
                    />
                    {fieldErrors.email && (
                      <p className="text-[11px] text-red-400 mt-1 font-mono">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    SUBJECT PARAMETERS <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Distributed System Architecture Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                      fieldErrors.subject ? 'border-red-500/60' : 'border-white/10'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all`}
                  />
                  {fieldErrors.subject && (
                    <p className="text-[11px] text-red-400 mt-1 font-mono">{fieldErrors.subject}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    PAYLOAD / MESSAGE <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide context regarding the project scope, technical stack requirements, or collaboration details..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                      fieldErrors.message ? 'border-red-500/60' : 'border-white/10'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none`}
                  />
                  {fieldErrors.message && (
                    <p className="text-[11px] text-red-400 mt-1 font-mono">{fieldErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-sm tracking-wider uppercase hover:text-white hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>DISPATCHING PAYLOAD...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
