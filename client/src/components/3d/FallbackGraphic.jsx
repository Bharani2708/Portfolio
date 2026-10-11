import React from 'react';
import { Terminal, Laptop, Code2 } from 'lucide-react';

export const FallbackGraphic = () => {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
      {/* Outer Rotating Glowing Ring */}
      <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-[spin_12s_linear_infinite] shadow-[0_0_30px_rgba(0,240,255,0.2)]" />
      {/* Secondary Counter-Rotating Ring */}
      <div className="absolute inset-4 rounded-full border border-violet-500/30 animate-[spin_8s_linear_infinite_reverse] shadow-[0_0_30px_rgba(139,92,246,0.2)]" />
      
      {/* Glowing Computer Terminal Window */}
      <div className="relative w-56 h-36 bg-slate-900/90 backdrop-blur-xl border border-cyan-400/50 rounded-2xl p-4 shadow-[0_0_40px_rgba(0,240,255,0.3)] flex flex-col justify-between">
        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-mono text-cyan-400 ml-2">dev@bharani: ~</span>
        </div>
        <div className="font-mono text-xs text-slate-300 space-y-1">
          <p className="text-cyan-400">&gt; npm run dev</p>
          <p className="text-emerald-400">✓ System Online</p>
          <p className="text-slate-400 text-[10px]">// Full Stack Engineer</p>
        </div>
      </div>
    </div>
  );
};

