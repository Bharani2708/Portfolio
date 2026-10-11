import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="glass-panel p-10 sm:p-14 rounded-3xl border border-cyan-500/30 text-center max-w-lg w-full relative">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mb-6">
          <Compass className="w-8 h-8 animate-spin" />
        </div>

        <div className="text-5xl sm:text-6xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 mb-2">
          404
        </div>

        <h2 className="text-xl font-bold text-white mb-3">
          Coordinates Lost in Cyberspace
        </h2>

        <p className="text-slate-400 text-sm font-light mb-8">
          The requested system route does not exist or has been relocated to another sector.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-xs uppercase tracking-wider hover:text-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Apex System</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

