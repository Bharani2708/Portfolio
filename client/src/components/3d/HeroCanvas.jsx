import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { QuantumCore } from './QuantumCore';
import { StarGalaxy } from './StarGalaxy';
import { FallbackGraphic } from './FallbackGraphic';
import { useWebGLSupport } from '../../hooks/useWebGLSupport';

export const HeroCanvas = () => {
  const isWebGLSupported = useWebGLSupport();

  if (!isWebGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <FallbackGraphic />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 2]} // Performance optimization: cap device pixel ratio at 2
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Cinematic Ambient & Key Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-8, -5, -5]} color="#8B5CF6" intensity={2} />
        <pointLight position={[8, 5, 2]} color="#00F0FF" intensity={2.5} />

        <Suspense fallback={null}>
          <StarGalaxy count={900} />
          <QuantumCore />
        </Suspense>
      </Canvas>
    </div>
  );
};

