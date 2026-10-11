import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  Unlock,
  KeyRound,
  Eye,
  EyeOff,
  FolderGit2,
  GraduationCap,
  Briefcase,
  Cpu,
  Mail,
  ShieldCheck,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  Check,
  X,
  ArrowLeft,
  LogOut,
  Save,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

export const AdminPage = () => {
  const {
    projects,
    education,
    experience,
    skills,
    personal,
    isAuthenticated,
    login,
    logout,
    changePassword,
    addProject,
    updateProject,
    deleteProject,
    updateEducation,
    addEducation,
    deleteEducation,
    updateExperience,
    addExperience,
    deleteExperience,
    updateSkills,
    updatePersonal,
    resetToDefaults,
    messages,
    deleteMessage,
  } = usePortfolio();

  // Authentication form state
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Active dashboard tab
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'education' | 'experience' | 'skills' | 'messages' | 'security'

  // Modal / Form states
  const [editingProject, setEditingProject] = useState(null);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [projectFormData, setProjectFormData] = useState({
    title: '',
    tagline: '',
    category: 'Full Stack MERN',
    description: '',
    longDescription: '',
    tech: '',
    github: '',
    liveUrl: '',
    featured: false,
    features: '',
  });

  // Password change state
  const [pwChangeData, setPwChangeData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [pwChangeMsg, setPwChangeMsg] = useState({ type: '', text: '' });

  // Handle Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!passwordInput.trim()) {
      setAuthError('Please enter the administrative access key');
      return;
    }
    setAuthLoading(true);
    setAuthError('');
    const res = await login(passwordInput);
    setAuthLoading(false);
    if (!res.success) {
      setAuthError(res.message || 'Access denied');
    } else {
      setPasswordInput('');
    }
  };

  // Open Add Project modal
  const handleOpenAddProject = () => {
    setEditingProject(null);
    setProjectFormData({
      title: '',
      tagline: '',
      category: 'Full Stack MERN',
      description: '',
      longDescription: '',
      tech: 'React, Node.js, Express, MongoDB, Tailwind CSS',
      github: 'https://github.com/bharani-dharan',
      liveUrl: '',
      featured: false,
      features: 'Role-based access\nReal-time telemetry\nSecure REST API',
    });
    setIsAddingProject(true);
  };

  // Open Edit Project modal
  const handleOpenEditProject = (proj) => {
    setEditingProject(proj);
    setProjectFormData({
      title: proj.title || '',
      tagline: proj.tagline || '',
      category: proj.category || 'Full Stack',
      description: proj.description || '',
      longDescription: proj.longDescription || '',
      tech: Array.isArray(proj.tech) ? proj.tech.join(', ') : proj.tech || '',
      github: proj.github || '',
      liveUrl: proj.liveUrl || '',
      featured: Boolean(proj.featured),
      features: Array.isArray(proj.features) ? proj.features.join('\n') : '',
    });
    setIsAddingProject(true);
  };

  // Save Project (Add or Edit)
  const handleSaveProject = (e) => {
    e.preventDefault();
    if (!projectFormData.title.trim()) return;

    const formattedTech = projectFormData.tech
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const formattedFeatures = projectFormData.features
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    const payload = {
      title: projectFormData.title,
      tagline: projectFormData.tagline,
      category: projectFormData.category,
      description: projectFormData.description,
      longDescription: projectFormData.longDescription || projectFormData.description,
      tech: formattedTech,
      github: projectFormData.github,
      liveUrl: projectFormData.liveUrl,
      featured: projectFormData.featured,
      features: formattedFeatures,
      architecture: 'MERN Stack Architecture',
    };

    if (editingProject) {
      updateProject({ ...editingProject, ...payload });
    } else {
      addProject(payload);
    }

    setIsAddingProject(false);
    setEditingProject(null);
  };

  // Handle Password Change
  const handleChangePasswordSubmit = async (e) => {
    e.preventDefault();
    setPwChangeMsg({ type: '', text: '' });
    if (pwChangeData.newPassword !== pwChangeData.confirmPassword) {
      setPwChangeMsg({ type: 'error', text: 'New passwords do not match' });
      return;
    }
    const res = await changePassword(pwChangeData.oldPassword, pwChangeData.newPassword);
    if (res.success) {
      setPwChangeMsg({ type: 'success', text: 'Password successfully changed!' });
      setPwChangeData({ oldPassword: '', newPassword: '', confirmPassword: '' });
    } else {
      setPwChangeMsg({ type: 'error', text: res.message });
    }
  };

  // -------------------------------------------------------------
  // VIEW 1: UNAUTHENTICATED TERMINAL LOGIN
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#030712] text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] relative z-10"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex p-3 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 mb-4 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              <Lock className="w-6 h-6 animate-pulse" />
            </div>
            <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase">
              // RESTRICTED ACCESS CLEARANCE
            </div>
            <h1 className="text-2xl font-bold text-white mt-1">Admin Command Console</h1>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              Provide authorization key to manage live projects, education credentials & telemetry.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">
                ADMIN ACCESS PASSWORD
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter admin password..."
                  autoFocus
                  className="w-full px-4 py-3.5 pr-12 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {authError && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-300 text-xs font-mono flex items-center gap-2"
              >
                <X className="w-4 h-4 flex-shrink-0 text-red-400" />
                <span>{authError}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-sm tracking-wider uppercase hover:text-white hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <KeyRound className="w-4 h-4" />
              <span>{authLoading ? 'VERIFYING...' : 'INITIALIZE SESSION'}</span>
            </button>
          </form>

          {/* Return link */}
          <div className="mt-6 pt-5 border-t border-white/5 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Portfolio</span>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: AUTHENTICATED ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Top Admin Navigation Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-black text-slate-950 tracking-tighter text-sm shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            BD
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">Admin Control Console</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              Live Management for Bharani Dharan's Portfolio
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            to="/"
            target="_blank"
            className="px-3.5 py-1.5 rounded-lg glass-panel text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all flex items-center gap-1.5"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={logout}
            className="px-3.5 py-1.5 rounded-lg bg-red-950/40 border border-red-500/30 text-xs font-mono text-red-300 hover:bg-red-900/50 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Metric Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          <div
            onClick={() => setActiveTab('projects')}
            className={`p-4 rounded-2xl glass-panel border cursor-pointer transition-all ${
              activeTab === 'projects'
                ? 'border-cyan-500/60 bg-cyan-950/20 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                : 'border-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
              <span>PROJECTS</span>
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">{projects.length}</div>
          </div>

          <div
            onClick={() => setActiveTab('education')}
            className={`p-4 rounded-2xl glass-panel border cursor-pointer transition-all ${
              activeTab === 'education'
                ? 'border-cyan-500/60 bg-cyan-950/20 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                : 'border-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
              <span>EDUCATION</span>
              <GraduationCap className="w-4 h-4 text-violet-400" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">{education.length}</div>
          </div>

          <div
            onClick={() => setActiveTab('experience')}
            className={`p-4 rounded-2xl glass-panel border cursor-pointer transition-all ${
              activeTab === 'experience'
                ? 'border-cyan-500/60 bg-cyan-950/20 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                : 'border-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
              <span>EXPERIENCE</span>
              <Briefcase className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">{experience.length}</div>
          </div>

          <div
            onClick={() => setActiveTab('skills')}
            className={`p-4 rounded-2xl glass-panel border cursor-pointer transition-all ${
              activeTab === 'skills'
                ? 'border-cyan-500/60 bg-cyan-950/20 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                : 'border-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
              <span>SKILLS</span>
              <Cpu className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">
              {skills.categories?.reduce((acc, c) => acc + c.items.length, 0) || 0}
            </div>
          </div>

          <div
            onClick={() => setActiveTab('messages')}
            className={`col-span-2 sm:col-span-1 p-4 rounded-2xl glass-panel border cursor-pointer transition-all ${
              activeTab === 'messages'
                ? 'border-cyan-500/60 bg-cyan-950/20 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                : 'border-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
              <span>INQUIRIES</span>
              <Mail className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">{messages.length}</div>
          </div>
        </div>

        {/* Tab Navigation Navigation Capsule */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          {[
            { id: 'projects', label: 'Projects Showcase', icon: FolderGit2 },
            { id: 'education', label: 'Education & Marks', icon: GraduationCap },
            { id: 'experience', label: 'Experience Timeline', icon: Briefcase },
            { id: 'skills', label: 'Technical Skills', icon: Cpu },
            { id: 'messages', label: `Inquiries (${messages.length})`, icon: Mail },
            { id: 'security', label: 'Admin Security', icon: ShieldCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TAB 1: PROJECTS SHOWCASE */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-white">Featured Projects ({projects.length})</h2>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Add, edit, or remove projects. Changes immediately reflect in the public hero & projects section.
                </p>
              </div>
              <button
                onClick={handleOpenAddProject}
                className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                        {proj.category}
                      </span>
                      {proj.featured && (
                        <span className="text-[10px] font-mono text-amber-400 px-2 py-0.5 rounded-full bg-amber-950/40 border border-amber-500/30 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          FLAGSHIP FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">{proj.tagline}</p>
                    <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {proj.tech?.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-white/5 text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 ml-2"
                        >
                          <span>Repo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenEditProject(proj)}
                        className="p-2 rounded-lg glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete project "${proj.title}"?`)) {
                            deleteProject(proj.id);
                          }
                        }}
                        className="p-2 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 hover:bg-red-900/60 transition-colors cursor-pointer"
                        title="Delete Project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 2: EDUCATION & MARKS */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">Education & Academic Marks</h2>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Edit degrees, school percentages (HSC & SSLC), institution names, or add achievements.
              </p>
            </div>

            <div className="space-y-4">
              {education.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    <div className="sm:col-span-4">
                      <label className="block text-[10px] font-mono text-slate-400 mb-1">DEGREE / LEVEL</label>
                      <input
                        type="text"
                        value={item.degree}
                        onChange={(e) => {
                          const updated = [...education];
                          updated[idx] = { ...updated[idx], degree: e.target.value };
                          updateEducation(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900/90 border border-white/10 text-white text-xs font-mono"
                      />
                    </div>

                    <div className="sm:col-span-5">
                      <label className="block text-[10px] font-mono text-slate-400 mb-1">INSTITUTION</label>
                      <input
                        type="text"
                        value={item.institution}
                        onChange={(e) => {
                          const updated = [...education];
                          updated[idx] = { ...updated[idx], institution: e.target.value };
                          updateEducation(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900/90 border border-white/10 text-white text-xs font-mono"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-[10px] font-mono text-slate-400 mb-1">
                        PERCENTAGE / CGPA
                      </label>
                      <input
                        type="text"
                        value={item.grade}
                        onChange={(e) => {
                          const updated = [...education];
                          const val = e.target.value;
                          const numericMatch = val.match(/\d+(\.\d+)?/);
                          const percentage = numericMatch ? parseFloat(numericMatch[0]) : item.percentage;
                          updated[idx] = { ...updated[idx], grade: val, percentage };
                          updateEducation(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900/90 border border-white/10 text-cyan-300 text-xs font-mono font-bold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pt-2">
                    <div className="sm:col-span-3">
                      <label className="block text-[10px] font-mono text-slate-400 mb-1">PERIOD / YEAR</label>
                      <input
                        type="text"
                        value={item.period}
                        onChange={(e) => {
                          const updated = [...education];
                          updated[idx] = { ...updated[idx], period: e.target.value };
                          updateEducation(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900/90 border border-white/10 text-white text-xs font-mono"
                      />
                    </div>

                    <div className="sm:col-span-7">
                      <label className="block text-[10px] font-mono text-slate-400 mb-1">COURSEWORK / MAJORS (comma separated)</label>
                      <input
                        type="text"
                        value={Array.isArray(item.coursework) ? item.coursework.join(', ') : item.coursework || ''}
                        onChange={(e) => {
                          const updated = [...education];
                          updated[idx] = {
                            ...updated[idx],
                            coursework: e.target.value.split(',').map((c) => c.trim()).filter(Boolean),
                          };
                          updateEducation(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900/90 border border-white/10 text-white text-xs font-mono"
                      />
                    </div>

                    <div className="sm:col-span-2 flex justify-end items-end pt-5">
                      <button
                        onClick={() => deleteEducation(item.id)}
                        className="px-3 py-2 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 hover:bg-red-900/60 text-xs font-mono flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() =>
                  addEducation({
                    degree: 'New Certification / Degree',
                    institution: 'Institution Name',
                    period: '2026',
                    grade: 'Percentage: 80%',
                    percentage: 80,
                    status: 'Completed',
                    coursework: ['Full Stack', 'Cloud'],
                  })
                }
                className="px-4 py-2.5 rounded-xl glass-panel text-xs font-mono text-cyan-400 hover:text-white hover:border-cyan-500/40 flex items-center gap-2 cursor-pointer transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Another Education Credential</span>
              </button>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 3: PROFESSIONAL EXPERIENCE */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Professional Experience Timeline</h2>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Update your job titles, company names, internships, and key accomplishments.
                </p>
              </div>
              <button
                onClick={() =>
                  addExperience({
                    role: 'Full Stack Engineer',
                    company: 'New Tech Company',
                    location: 'Tamil Nadu, India',
                    period: '2026 – Present',
                    type: 'Full-time',
                    description: 'Engineering resilient web applications.',
                    highlights: ['Engineered scalable microservices', 'Optimized database queries'],
                  })
                }
                className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Experience</span>
              </button>
            </div>

            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={exp.id || idx} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-slate-400 mb-1">ROLE</label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx] = { ...updated[idx], role: e.target.value };
                          updateExperience(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900/90 border border-white/10 text-white text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-slate-400 mb-1">COMPANY</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx] = { ...updated[idx], company: e.target.value };
                          updateExperience(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900/90 border border-white/10 text-white text-xs font-mono font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-slate-400 mb-1">PERIOD / DURATION</label>
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx] = { ...updated[idx], period: e.target.value };
                          updateExperience(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900/90 border border-white/10 text-white text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1">DESCRIPTION</label>
                    <textarea
                      rows={2}
                      value={exp.description}
                      onChange={(e) => {
                        const updated = [...experience];
                        updated[idx] = { ...updated[idx], description: e.target.value };
                        updateExperience(updated);
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900/90 border border-white/10 text-slate-300 text-xs font-mono resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1">
                      KEY BULLET POINTS (one per line)
                    </label>
                    <textarea
                      rows={3}
                      value={Array.isArray(exp.highlights) ? exp.highlights.join('\n') : ''}
                      onChange={(e) => {
                        const updated = [...experience];
                        updated[idx] = {
                          ...updated[idx],
                          highlights: e.target.value.split('\n').filter(Boolean),
                        };
                        updateExperience(updated);
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900/90 border border-white/10 text-slate-300 text-xs font-mono resize-none"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => deleteExperience(exp.id)}
                      className="px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 hover:bg-red-900/60 text-xs font-mono flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove Entry</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 4: SKILLS MANAGEMENT */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">Technical Arsenal</h2>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Add and manage skills displayed in your technical grid.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.categories?.map((cat, catIdx) => (
                <div key={cat.id} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="font-bold text-white text-sm font-mono text-cyan-400">{cat.name}</h3>
                    <span className="text-xs font-mono text-slate-500">{cat.items.length} items</span>
                  </div>

                  <div className="space-y-2">
                    {cat.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70 border border-white/5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">{item.name}</span>
                          <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded-md bg-cyan-950/50">
                            {item.level}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            const newCategories = [...skills.categories];
                            newCategories[catIdx].items = newCategories[catIdx].items.filter(
                              (_, i) => i !== itemIdx
                            );
                            updateSkills({ ...skills, categories: newCategories });
                          }}
                          className="text-slate-500 hover:text-red-400 transition-colors p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add skill to category */}
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const skillName = window.prompt(`Enter new skill name for ${cat.name}:`);
                        if (skillName && skillName.trim()) {
                          const newCategories = [...skills.categories];
                          newCategories[catIdx].items.push({
                            name: skillName.trim(),
                            level: 'Advanced',
                            tag: 'Full Stack',
                          });
                          updateSkills({ ...skills, categories: newCategories });
                        }
                      }}
                      className="w-full py-2 rounded-xl glass-panel text-xs font-mono text-cyan-400 hover:text-white hover:border-cyan-500/40 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Skill to {cat.name}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 5: INCOMING INQUIRIES & MESSAGES */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">Contact Telemetry & Inquiries ({messages.length})</h2>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Messages submitted by visitors via the contact terminal on your landing page.
              </p>
            </div>

            {messages.length === 0 ? (
              <div className="glass-panel p-12 rounded-3xl border border-white/5 text-center">
                <Mail className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-300">No Inquiries Yet</h3>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  Incoming contact submissions will be captured and listed here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{msg.name}</span>
                          <span className="text-xs font-mono text-cyan-400">&lt;{msg.email}&gt;</span>
                        </div>
                        <div className="text-xs font-mono text-slate-400 mt-0.5">
                          Subject: <span className="text-slate-200">{msg.subject}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-slate-500">
                          {new Date(msg.receivedAt).toLocaleString()}
                        </span>
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="p-1.5 rounded-lg bg-red-950/40 text-red-400 hover:bg-red-900/60 transition-colors cursor-pointer"
                          title="Delete message"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-mono whitespace-pre-wrap bg-slate-950/50 p-4 rounded-xl border border-white/5">
                      {msg.message}
                    </p>

                    <div className="pt-1">
                      <a
                        href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Reply via Email</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 6: SECURITY & PASSWORD SETTINGS */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'security' && (
          <div className="space-y-8 max-w-xl">
            <div>
              <h2 className="text-xl font-bold text-white">Admin Security Settings</h2>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Change your secret admin access password or restore original default dataset.
              </p>
            </div>

            {/* Change Password Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Update Admin Access Password</h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Set a new personal password to unlock /admin console.
                  </p>
                </div>
              </div>

              {pwChangeMsg.text && (
                <div
                  className={`p-3.5 rounded-xl text-xs font-mono flex items-center gap-2 ${
                    pwChangeMsg.type === 'success'
                      ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                      : 'bg-red-950/60 border border-red-500/40 text-red-300'
                  }`}
                >
                  {pwChangeMsg.type === 'success' ? (
                    <Check className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                  ) : (
                    <X className="w-4 h-4 flex-shrink-0 text-red-400" />
                  )}
                  <span>{pwChangeMsg.text}</span>
                </div>
              )}

              <form onSubmit={handleChangePasswordSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">CURRENT PASSWORD</label>
                  <input
                    type="password"
                    value={pwChangeData.oldPassword}
                    onChange={(e) =>
                      setPwChangeData((prev) => ({ ...prev, oldPassword: e.target.value }))
                    }
                    placeholder="Enter current password..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">NEW PASSWORD</label>
                  <input
                    type="password"
                    value={pwChangeData.newPassword}
                    onChange={(e) =>
                      setPwChangeData((prev) => ({ ...prev, newPassword: e.target.value }))
                    }
                    placeholder="Enter new password (min 4 chars)..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">CONFIRM NEW PASSWORD</label>
                  <input
                    type="password"
                    value={pwChangeData.confirmPassword}
                    onChange={(e) =>
                      setPwChangeData((prev) => ({ ...prev, confirmPassword: e.target.value }))
                    }
                    placeholder="Confirm new password..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider hover:text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  Save New Password
                </button>
              </form>
            </div>

            {/* Reset to Factory Defaults */}
            <div className="glass-panel p-6 rounded-3xl border border-red-500/20 bg-red-950/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-950/50 text-red-400">
                  <RotateCcw className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Reset Portfolio Data</h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Revert all changes to original default projects, schooling marks & experience.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (
                    window.confirm(
                      'Are you sure you want to revert all custom changes to the initial defaults?'
                    )
                  ) {
                    resetToDefaults();
                    alert('Data restored to defaults!');
                  }
                }}
                className="px-4 py-2 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono hover:bg-red-900/60 transition-colors cursor-pointer"
              >
                Restore Factory Defaults
              </button>
            </div>
          </div>
        )}
      </main>

      {/* ------------------------------------------------------------- */}
      {/* ADD / EDIT PROJECT MODAL */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {isAddingProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.2)] max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {editingProject ? 'Edit Project' : 'Add New Project'}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Fill the blueprint details below to update your portfolio showcase.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingProject(false)}
                  className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProject} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      PROJECT TITLE <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={projectFormData.title}
                      onChange={(e) =>
                        setProjectFormData((prev) => ({ ...prev, title: e.target.value }))
                      }
                      placeholder="e.g. Job Connect"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">CATEGORY</label>
                    <input
                      type="text"
                      value={projectFormData.category}
                      onChange={(e) =>
                        setProjectFormData((prev) => ({ ...prev, category: e.target.value }))
                      }
                      placeholder="e.g. Full Stack MERN"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">SUBTITLE / TAGLINE</label>
                  <input
                    type="text"
                    value={projectFormData.tagline}
                    onChange={(e) =>
                      setProjectFormData((prev) => ({ ...prev, tagline: e.target.value }))
                    }
                    placeholder="e.g. Dual-Role Recruitment & Application Tracking Platform"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">LIVE DEMO URL</label>
                    <input
                      type="url"
                      value={projectFormData.liveUrl}
                      onChange={(e) =>
                        setProjectFormData((prev) => ({ ...prev, liveUrl: e.target.value }))
                      }
                      placeholder="https://job-portal-sw24.onrender.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">GITHUB REPO URL</label>
                    <input
                      type="url"
                      value={projectFormData.github}
                      onChange={(e) =>
                        setProjectFormData((prev) => ({ ...prev, github: e.target.value }))
                      }
                      placeholder="https://github.com/bharani-dharan/repo"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    TECH STACK (comma separated)
                  </label>
                  <input
                    type="text"
                    value={projectFormData.tech}
                    onChange={(e) =>
                      setProjectFormData((prev) => ({ ...prev, tech: e.target.value }))
                    }
                    placeholder="React, Node.js, Express, MongoDB, Tailwind CSS"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    SHORT DESCRIPTION
                  </label>
                  <textarea
                    rows={3}
                    value={projectFormData.description}
                    onChange={(e) =>
                      setProjectFormData((prev) => ({ ...prev, description: e.target.value }))
                    }
                    placeholder="Describe what this project does and its core value proposition..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    KEY HIGHLIGHTS / FEATURES (one per line)
                  </label>
                  <textarea
                    rows={3}
                    value={projectFormData.features}
                    onChange={(e) =>
                      setProjectFormData((prev) => ({ ...prev, features: e.target.value }))
                    }
                    placeholder="Job tracking pipeline for recruiters&#10;Application tracking for job seekers&#10;Real-time application status updates"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="featuredCheckbox"
                    checked={projectFormData.featured}
                    onChange={(e) =>
                      setProjectFormData((prev) => ({ ...prev, featured: e.target.checked }))
                    }
                    className="w-4 h-4 rounded border-white/20 text-cyan-500 focus:ring-cyan-400"
                  />
                  <label htmlFor="featuredCheckbox" className="text-xs font-mono text-slate-300 cursor-pointer">
                    Flag as Flagship Featured Project (Banner highlight)
                  </label>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setIsAddingProject(false)}
                    className="px-4 py-2.5 rounded-xl glass-panel text-xs font-mono text-slate-300 hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider hover:text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>{editingProject ? 'Update Project' : 'Publish Project'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminPage;

