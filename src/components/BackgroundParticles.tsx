import React from 'react';

export const BackgroundParticles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep sophisticated gradient glow aligned to photo tones */}
      <div className="absolute top-[-15%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/8 via-blue-600/5 to-purple-600/8 blur-[160px]" />
      <div className="absolute top-[35%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-500/6 via-purple-500/5 to-transparent blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[20%] w-[550px] h-[550px] rounded-full bg-blue-600/6 blur-[160px]" />

      {/* Subtle modern engineering dot-grid background with radial fade */}
      <div 
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)'
        }}
      />
    </div>
  );
};
