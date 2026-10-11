import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Computer3D } from './Computer3D';
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
        camera={{ position: [0, 0.35, 5.0], fov: 45 }}
        dpr={[1, 2]} // Performance optimization: cap device pixel ratio at 2
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Cinematic Ambient & Key Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-10, 8, -5]} intensity={0.8} color="#8B5CF6" />
        <pointLight position={[-6, -4, -4]} color="#8B5CF6" intensity={2} />
        <pointLight position={[6, 4, 3]} color="#00F0FF" intensity={2.5} />

        <Suspense fallback={null}>
          <StarGalaxy count={600} />
          <Computer3D />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 4}
          rotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};

