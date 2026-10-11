import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const QuantumCore = () => {
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const coreRef = useRef();
  const wireframeRef = useRef();

  useFrame((state, delta) => {
    // Gentle constant rotation
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x += delta * 0.3;
      outerRingRef.current.rotation.y += delta * 0.4;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.y -= delta * 0.5;
      innerRingRef.current.rotation.z += delta * 0.35;
    }

    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.2;
      coreRef.current.rotation.y += delta * 0.25;

      // React subtly to mouse position
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;
      coreRef.current.rotation.x = THREE.MathUtils.lerp(coreRef.current.rotation.x, targetY, 0.05);
      coreRef.current.rotation.y = THREE.MathUtils.lerp(coreRef.current.rotation.y, targetX, 0.05);
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.15;
      wireframeRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
      <group position={[0, 0, 0]}>
        {/* Central Luminous Quantum Core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color="#00F0FF"
            emissive="#005277"
            emissiveIntensity={0.8}
            roughness={0.15}
            metalness={0.9}
            flatShading
          />
        </mesh>

        {/* Outer Pulsing Wireframe Geo */}
        <mesh ref={wireframeRef}>
          <icosahedronGeometry args={[1.45, 1]} />
          <meshBasicMaterial
            color="#8B5CF6"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Gimbal Ring 1 */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[2.0, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#00F0FF"
            emissive="#00F0FF"
            emissiveIntensity={0.4}
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>

        {/* Gimbal Ring 2 */}
        <mesh ref={innerRingRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.75, 0.018, 16, 100]} />
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#8B5CF6"
            emissiveIntensity={0.5}
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
};

