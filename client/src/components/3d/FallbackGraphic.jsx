import React from 'react';

export const FallbackGraphic = () => {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
      {/* Outer Rotating Glowing Ring */}
      <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-[spin_12s_linear_infinite] shadow-[0_0_30px_rgba(0,240,255,0.2)]" />
      {/* Secondary Counter-Rotating Ring */}
      <div className="absolute inset-4 rounded-full border border-violet-500/30 animate-[spin_8s_linear_infinite_reverse] shadow-[0_0_30px_rgba(139,92,246,0.2)]" />
      {/* Tertiary Angled Ring */}
      <div className="absolute inset-10 rounded-full border border-dashed border-cyan-400/40 animate-[spin_20s_linear_infinite]" />
      
      {/* Glowing Central Polyhedron Simulation */}
      <div className="relative w-28 h-28 bg-gradient-to-br from-cyan-400/20 to-violet-600/30 backdrop-blur-xl border border-cyan-400/50 rounded-2xl transform rotate-45 animate-pulse shadow-[0_0_40px_rgba(0,240,255,0.4)] flex items-center justify-center">
        <div className="w-12 h-12 rounded-lg bg-cyan-400/40 transform -rotate-45" />
      </div>
    </div>
  );
};

