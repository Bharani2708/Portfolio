import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// High-resolution crisp developer IDE texture
const createScreenTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 650;
  const ctx = canvas.getContext('2d');

  // Background - Dark Obsidian Cyberpunk Editor
  ctx.fillStyle = '#060c18';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle background grid
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Top header bar (macOS / Cyber style)
  ctx.fillStyle = '#0b1528';
  ctx.fillRect(0, 0, canvas.width, 54);

  // Window control buttons
  ctx.fillStyle = '#ef4444'; // Red
  ctx.beginPath();
  ctx.arc(32, 27, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#f59e0b'; // Yellow
  ctx.beginPath();
  ctx.arc(56, 27, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#10b981'; // Green
  ctx.beginPath();
  ctx.arc(80, 27, 7, 0, Math.PI * 2);
  ctx.fill();

  // Active Tab
  ctx.fillStyle = '#11223e';
  ctx.roundRect?.(115, 10, 240, 36, [8, 8, 0, 0]) || ctx.fillRect(115, 10, 240, 36);
  ctx.fillStyle = '#00F0FF';
  ctx.font = 'bold 15px "JetBrains Mono", Consolas, monospace';
  ctx.fillText('⚛ BharaniDharan.jsx', 130, 33);

  // Status Badge on right of header
  ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
  ctx.roundRect?.(canvas.width - 185, 12, 165, 30, 6) || ctx.fillRect(canvas.width - 185, 12, 165, 30);
  ctx.strokeStyle = '#00F0FF';
  ctx.lineWidth = 1;
  ctx.strokeRect?.(canvas.width - 185, 12, 165, 30);
  ctx.fillStyle = '#00F0FF';
  ctx.font = 'bold 12px "JetBrains Mono", Consolas, monospace';
  ctx.fillText('● SYSTEM READY', canvas.width - 170, 32);

  // Sidebar activity strip
  ctx.fillStyle = '#091120';
  ctx.fillRect(0, 54, 55, canvas.height - 54);
  ctx.fillStyle = '#00F0FF';
  ctx.fillRect(18, 75, 18, 14);
  ctx.fillStyle = '#475569';
  ctx.fillRect(18, 110, 18, 14);
  ctx.fillRect(18, 145, 18, 14);

  // Line numbers
  ctx.fillStyle = '#334155';
  ctx.font = '16px "JetBrains Mono", Consolas, monospace';
  for (let i = 1; i <= 14; i++) {
    ctx.fillText(String(i).padStart(2, '0'), 72, 68 + i * 35);
  }

  // Code editor lines
  const codeLines = [
    { text: '// Full Stack MERN Engineer Profile', color: '#64748b' },
    { text: 'import { MERN, Architect } from "@innovator/core";', color: '#c084fc' },
    { text: '', color: '#fff' },
    { text: 'const engineer = new Architect({', color: '#00F0FF' },
    { text: '  name: "Bharani Dharan",', color: '#38bdf8' },
    { text: '  role: "Full Stack Developer",', color: '#38bdf8' },
    { text: '  stack: ["React", "Node.js", "Express", "MongoDB"],', color: '#a78bfa' },
    { text: '  project: "Job Connect - Dual Role Portal",', color: '#34d399' },
    { text: '  status: "OPEN_FOR_OPPORTUNITIES",', color: '#4ade80' },
    { text: '});', color: '#00F0FF' },
    { text: '', color: '#fff' },
    { text: 'await engineer.launchHighPerformanceSystems();', color: '#f43f5e' },
    { text: 'console.log("🚀 Welcome to my portfolio.");', color: '#10b981' },
  ];

  ctx.font = '17px "JetBrains Mono", Consolas, monospace';
  let y = 103;
  codeLines.forEach((line) => {
    if (line.text) {
      ctx.fillStyle = line.color;
      ctx.fillText(line.text, 115, y);
    }
    y += 35;
  });

  // Bottom terminal console
  ctx.fillStyle = '#030712';
  ctx.fillRect(55, canvas.height - 76, canvas.width - 55, 76);
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(55, canvas.height - 76);
  ctx.lineTo(canvas.width, canvas.height - 76);
  ctx.stroke();

  ctx.fillStyle = '#38bdf8';
  ctx.font = '13px "JetBrains Mono", Consolas, monospace';
  ctx.fillText('bash ⚡ ~/portfolio [master]', 75, canvas.height - 52);
  ctx.fillStyle = '#10b981';
  ctx.fillText('➜  npm run dev  // Live on http://localhost:5173', 75, canvas.height - 24);

  // Blinking cursor
  ctx.fillStyle = '#00F0FF';
  ctx.fillRect(510, canvas.height - 38, 10, 17);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Orbiting 3D Tech badge
const OrbitingBadge = ({ label, color, position, speed, radius, angleOffset }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed + angleOffset;
    meshRef.current.position.x = position[0] + Math.cos(t) * radius;
    meshRef.current.position.z = position[2] + Math.sin(t) * radius;
    meshRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.12;
    meshRef.current.rotation.y = -t;
  });

  return (
    <group ref={meshRef}>
      {/* Sleek rounded tech box */}
      <mesh>
        <boxGeometry args={[0.5, 0.26, 0.08]} />
        <meshStandardMaterial
          color="#091220"
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
      {/* Glowing wireframe border */}
      <mesh>
        <boxGeometry args={[0.53, 0.29, 0.1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.65} />
      </mesh>
    </group>
  );
};

export const Computer3D = () => {
  const groupRef = useRef();
  const screenTexture = useMemo(() => createScreenTexture(), []);

  useEffect(() => {
    return () => {
      screenTexture?.dispose();
    };
  }, [screenTexture]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    // Gentle floating
    groupRef.current.position.y = -0.35 + Math.sin(t * 0.8) * 0.05;

    // Responsive cursor-based 3D tilt
    const targetRotX = 0.32 - state.pointer.y * 0.15;
    const targetRotY = -0.45 + state.pointer.x * 0.25;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
  });

  const chassisMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#0d1524',
        metalness: 0.85,
        roughness: 0.25,
      }),
    []
  );

  const keyboardWellMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#050a12',
        roughness: 0.5,
      }),
    []
  );

  const keyCapMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#0a1424',
        emissive: '#00F0FF',
        emissiveIntensity: 0.08,
        metalness: 0.8,
        roughness: 0.3,
      }),
    []
  );

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
      {/* Root Computer Group */}
      <group ref={groupRef} position={[0, -0.35, 0]} rotation={[0.32, -0.45, 0]}>
        {/* ================= LAPTOP BASE ================= */}
        {/* Main Base Chassis */}
        <mesh position={[0, 0, 0]} material={chassisMaterial}>
          <boxGeometry args={[3.2, 0.1, 2.2]} />
        </mesh>

        {/* Front Edge Glowing Cyan Light Strip */}
        <mesh position={[0, -0.01, 1.105]}>
          <boxGeometry args={[3.0, 0.02, 0.02]} />
          <meshBasicMaterial color="#00F0FF" />
        </mesh>

        {/* Keyboard Well */}
        <mesh position={[0, 0.052, -0.15]} material={keyboardWellMaterial}>
          <boxGeometry args={[2.8, 0.01, 1.3]} />
        </mesh>

        {/* Keyboard Key Rows with subtle backlit spacing */}
        {[-0.6, -0.42, -0.24, -0.06, 0.12].map((zPos, rowIdx) => (
          <mesh key={rowIdx} position={[0, 0.065, zPos]} material={keyCapMaterial}>
            <boxGeometry args={[2.7, 0.018, 0.14]} />
          </mesh>
        ))}

        {/* Spacebar Row */}
        <mesh position={[0, 0.065, 0.32]} material={keyCapMaterial}>
          <boxGeometry args={[1.2, 0.018, 0.14]} />
        </mesh>
        <mesh position={[-0.95, 0.065, 0.32]} material={keyCapMaterial}>
          <boxGeometry args={[0.5, 0.018, 0.14]} />
        </mesh>
        <mesh position={[0.95, 0.065, 0.32]} material={keyCapMaterial}>
          <boxGeometry args={[0.5, 0.018, 0.14]} />
        </mesh>

        {/* Trackpad with neon outline */}
        <mesh position={[0, 0.055, 0.72]}>
          <boxGeometry args={[1.05, 0.008, 0.62]} />
          <meshStandardMaterial color="#070d18" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.058, 0.72]}>
          <boxGeometry args={[1.07, 0.004, 0.64]} />
          <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.5} />
        </mesh>

        {/* Side Ports */}
        <mesh position={[-1.605, 0, 0.2]}>
          <boxGeometry args={[0.02, 0.03, 0.16]} />
          <meshBasicMaterial color="#00F0FF" />
        </mesh>
        <mesh position={[-1.605, 0, -0.15]}>
          <boxGeometry args={[0.02, 0.03, 0.16]} />
          <meshBasicMaterial color="#00F0FF" />
        </mesh>
        <mesh position={[1.605, 0, 0.2]}>
          <boxGeometry args={[0.02, 0.03, 0.16]} />
          <meshBasicMaterial color="#8B5CF6" />
        </mesh>

        {/* ================= LAPTOP HINGE & SCREEN DISPLAY ================= */}
        {/* Hinge Cylindrical Pivot */}
        <mesh position={[0, 0.06, -1.04]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.05, 0.05, 2.6, 24]} />
          <meshStandardMaterial color="#070c16" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Screen Assembly: Hinged at [0, 0.06, -1.04], opened back ~18 degrees (-0.32 rad) */}
        <group position={[0, 0.06, -1.04]} rotation={[-0.32, 0, 0]}>
          {/* Outer Screen Lid Back Cover */}
          <mesh position={[0, 1.05, -0.04]} material={chassisMaterial}>
            <boxGeometry args={[3.2, 2.1, 0.07]} />
          </mesh>

          {/* Glowing Monogram Logo on Lid Back */}
          <mesh position={[0, 1.05, -0.078]}>
            <boxGeometry args={[0.42, 0.42, 0.01]} />
            <meshStandardMaterial
              color="#00F0FF"
              emissive="#00F0FF"
              emissiveIntensity={2}
            />
          </mesh>

          {/* Screen Inner Bezel */}
          <mesh position={[0, 1.05, 0.004]}>
            <boxGeometry args={[3.15, 2.05, 0.015]} />
            <meshStandardMaterial color="#030712" roughness={0.4} />
          </mesh>

          {/* Webcam dot */}
          <mesh position={[0, 2.02, 0.015]}>
            <sphereGeometry args={[0.015, 12, 12]} />
            <meshBasicMaterial color="#00F0FF" />
          </mesh>

          {/* Glowing Code Screen Display Panel */}
          <mesh position={[0, 1.05, 0.016]}>
            <planeGeometry args={[2.98, 1.88]} />
            <meshBasicMaterial map={screenTexture} toneMapped={false} />
          </mesh>

          {/* Dynamic Light Cast from Screen onto Keyboard */}
          <pointLight position={[0, 0.6, 0.4]} color="#00F0FF" intensity={1.2} distance={3} />
        </group>

        {/* ================= SURROUNDING HOLOGRAPHIC TECH ================= */}
        {/* Glowing Orbit Rings beneath */}
        <mesh position={[0, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.3, 2.33, 64]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.35} />
        </mesh>
        <mesh position={[0, -0.32, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.55, 2.58, 64]} />
          <meshBasicMaterial color="#8B5CF6" transparent opacity={0.25} />
        </mesh>

        {/* Orbiting Tech Badges */}
        <OrbitingBadge
          label="React"
          color="#00F0FF"
          position={[0, 0.3, 0]}
          speed={0.65}
          radius={2.35}
          angleOffset={0}
        />
        <OrbitingBadge
          label="Node"
          color="#10b981"
          position={[0, -0.15, 0]}
          speed={0.65}
          radius={2.35}
          angleOffset={Math.PI * 0.5}
        />
        <OrbitingBadge
          label="MERN"
          color="#8B5CF6"
          position={[0, 0.5, 0]}
          speed={0.65}
          radius={2.35}
          angleOffset={Math.PI}
        />
        <OrbitingBadge
          label="API"
          color="#f59e0b"
          position={[0, 0.1, 0]}
          speed={0.65}
          radius={2.35}
          angleOffset={Math.PI * 1.5}
        />
      </group>
    </Float>
  );
};
