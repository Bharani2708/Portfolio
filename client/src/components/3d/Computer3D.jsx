import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Generates a rich, high-resolution futuristic developer IDE / terminal screen texture
const createScreenTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');

  // Background - Dark Cyberpunk IDE
  ctx.fillStyle = '#050b14';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle grid background in editor
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.03)';
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

  // Top window header bar
  ctx.fillStyle = '#0a1322';
  ctx.fillRect(0, 0, canvas.width, 52);

  // Window control buttons (macOS / Cyber style)
  ctx.fillStyle = '#ef4444'; // Red
  ctx.beginPath();
  ctx.arc(30, 26, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#eab308'; // Yellow
  ctx.beginPath();
  ctx.arc(54, 26, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#10b981'; // Green
  ctx.beginPath();
  ctx.arc(78, 26, 7, 0, Math.PI * 2);
  ctx.fill();

  // Window Title Tab
  ctx.fillStyle = '#111d33';
  ctx.fillRect(115, 8, 260, 36);
  ctx.fillStyle = '#00F0FF';
  ctx.font = 'bold 15px "JetBrains Mono", Consolas, monospace';
  ctx.fillText('⚡ BharaniDharan.jsx', 135, 31);

  // Status pill on right of header
  ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
  ctx.roundRect?.(canvas.width - 180, 10, 160, 32, 6) || ctx.fillRect(canvas.width - 180, 10, 160, 32);
  ctx.fillStyle = '#00F0FF';
  ctx.font = '12px "JetBrains Mono", Consolas, monospace';
  ctx.fillText('● SYSTEM ONLINE', canvas.width - 165, 30);

  // Sidebar divider
  ctx.fillStyle = '#0d192e';
  ctx.fillRect(0, 52, 60, canvas.height - 52);

  // Activity bar icons (simple geometric glyphs)
  ctx.fillStyle = '#00F0FF';
  ctx.fillRect(20, 75, 20, 16);
  ctx.fillStyle = '#64748b';
  ctx.fillRect(20, 115, 20, 16);
  ctx.fillRect(20, 155, 20, 16);

  // Line numbers column
  ctx.fillStyle = '#1e293b';
  ctx.font = '16px "JetBrains Mono", Consolas, monospace';
  for (let i = 1; i <= 15; i++) {
    ctx.fillText(String(i).padStart(2, '0'), 75, 68 + i * 34);
  }

  // Code editor content
  const codeLines = [
    { text: '// Initializing Full Stack Developer Environment', color: '#64748b' },
    { text: 'import { Developer, MERN } from "@tech/stack";', color: '#c084fc' },
    { text: '', color: '#fff' },
    { text: 'const engineer = new Developer({', color: '#00F0FF' },
    { text: '  name: "Bharani Dharan",', color: '#38bdf8' },
    { text: '  role: "Full Stack Engineer & MERN Specialist",', color: '#38bdf8' },
    { text: '  coreStack: ["React", "Node.js", "Express", "MongoDB"],', color: '#a78bfa' },
    { text: '  projects: ["Job Connect", "Cloud Workflows"],', color: '#34d399' },
    { text: '  location: "Tamil Nadu, India",', color: '#fbbf24' },
    { text: '  status: "READY_FOR_DEPLOYMENT",', color: '#4ade80' },
    { text: '});', color: '#00F0FF' },
    { text: '', color: '#fff' },
    { text: 'await engineer.deployNextGenExperience();', color: '#f43f5e' },
    { text: 'console.log("⚡ System compiled with 100% precision.");', color: '#10b981' },
  ];

  ctx.font = '17px "JetBrains Mono", Consolas, monospace';
  let y = 102;
  codeLines.forEach((line) => {
    if (line.text) {
      ctx.fillStyle = line.color;
      ctx.fillText(line.text, 115, y);
    }
    y += 34;
  });

  // Bottom terminal console strip
  ctx.fillStyle = '#030712';
  ctx.fillRect(60, canvas.height - 75, canvas.width - 60, 75);
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(60, canvas.height - 75);
  ctx.lineTo(canvas.width, canvas.height - 75);
  ctx.stroke();

  ctx.fillStyle = '#38bdf8';
  ctx.font = '14px "JetBrains Mono", Consolas, monospace';
  ctx.fillText('Terminal: bash', 80, canvas.height - 52);
  ctx.fillStyle = '#10b981';
  ctx.fillText('➜ ~/portfolio [main] $ npm run dev --ready', 80, canvas.height - 25);

  // Blinking green prompt cursor
  ctx.fillStyle = '#00F0FF';
  ctx.fillRect(495, canvas.height - 38, 10, 16);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Orbiting floating tech chip
const OrbitingChip = ({ label, color, position, speed, radius, angleOffset }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed + angleOffset;
    meshRef.current.position.x = position[0] + Math.cos(t) * radius;
    meshRef.current.position.z = position[2] + Math.sin(t) * radius;
    meshRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.15;
    meshRef.current.rotation.y = -t;
  });

  return (
    <group ref={meshRef}>
      {/* Holographic Glowing Chip Cube */}
      <mesh>
        <boxGeometry args={[0.55, 0.28, 0.1]} />
        <meshStandardMaterial
          color="#0a1220"
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      {/* Glowing Wireframe Border */}
      <mesh>
        <boxGeometry args={[0.58, 0.31, 0.12]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.7} />
      </mesh>
    </group>
  );
};

export const Computer3D = () => {
  const groupRef = useRef();
  const laptopRef = useRef();

  // Create screen texture once
  const screenTexture = useMemo(() => createScreenTexture(), []);

  // Cleanup texture on unmount
  useEffect(() => {
    return () => {
      screenTexture?.dispose();
    };
  }, [screenTexture]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Gentle natural floating
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.08;

    // React smoothly to user pointer
    const targetRotX = 0.25 - state.pointer.y * 0.2;
    const targetRotY = -0.45 + state.pointer.x * 0.35;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
  });

  // Materials
  const chassisMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#0d1522',
        metalness: 0.88,
        roughness: 0.22,
      }),
    []
  );

  const keyboardMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#050a12',
        metalness: 0.7,
        roughness: 0.4,
        emissive: '#00F0FF',
        emissiveIntensity: 0.06,
      }),
    []
  );

  const neonCyanMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#00F0FF',
      }),
    []
  );

  const neonVioletMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#8B5CF6',
      }),
    []
  );

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={groupRef} position={[0, -0.2, 0]} rotation={[0.25, -0.45, 0]}>
        {/* ================= LAPTOP BASE ================= */}
        <group ref={laptopRef}>
          {/* Main Base Chassis */}
          <mesh position={[0, 0, 0]} material={chassisMaterial}>
            <boxGeometry args={[3.2, 0.12, 2.2]} />
          </mesh>

          {/* Front Edge Neon Glow Strip */}
          <mesh position={[0, -0.01, 1.11]}>
            <boxGeometry args={[3.0, 0.025, 0.02]} />
            <meshStandardMaterial
              color="#00F0FF"
              emissive="#00F0FF"
              emissiveIntensity={1.5}
            />
          </mesh>

          {/* Keyboard Recess */}
          <mesh position={[0, 0.062, -0.15]}>
            <boxGeometry args={[2.8, 0.015, 1.3]} />
            <meshStandardMaterial color="#030712" roughness={0.6} />
          </mesh>

          {/* Keyboard Key Rows (Stylized 5 key stripes with subtle neon gaps) */}
          {[-0.55, -0.35, -0.15, 0.05, 0.25].map((z, rowIdx) => (
            <mesh key={rowIdx} position={[0, 0.075, z]} material={keyboardMaterial}>
              <boxGeometry args={[2.7, 0.018, 0.15]} />
            </mesh>
          ))}

          {/* Trackpad with illuminated perimeter */}
          <mesh position={[0, 0.064, 0.68]}>
            <boxGeometry args={[1.0, 0.01, 0.65]} />
            <meshStandardMaterial
              color="#080e18"
              roughness={0.25}
              metalness={0.8}
            />
          </mesh>
          <mesh position={[0, 0.066, 0.68]}>
            <boxGeometry args={[1.02, 0.005, 0.67]} />
            <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.4} />
          </mesh>

          {/* Left / Right Port Details */}
          <mesh position={[-1.61, 0, 0.2]}>
            <boxGeometry args={[0.02, 0.035, 0.15]} />
            <primitive object={neonCyanMaterial} attach="material" />
          </mesh>
          <mesh position={[-1.61, 0, -0.1]}>
            <boxGeometry args={[0.02, 0.035, 0.15]} />
            <primitive object={neonCyanMaterial} attach="material" />
          </mesh>
          <mesh position={[1.61, 0, 0.2]}>
            <boxGeometry args={[0.02, 0.035, 0.15]} />
            <primitive object={neonVioletMaterial} attach="material" />
          </mesh>

          {/* ================= LAPTOP SCREEN & LID ================= */}
          {/* Hinge & Screen Group angled back ~106 degrees */}
          <group position={[0, 0.06, -1.08]} rotation={[-Math.PI * 0.58, 0, 0]}>
            {/* Screen Lid Back Cover */}
            <mesh position={[0, 1.1, -0.04]} material={chassisMaterial}>
              <boxGeometry args={[3.2, 2.2, 0.08]} />
            </mesh>

            {/* Glowing Logo on Lid Back */}
            <mesh position={[0, 1.1, -0.082]}>
              <boxGeometry args={[0.45, 0.45, 0.01]} />
              <meshStandardMaterial
                color="#00F0FF"
                emissive="#00F0FF"
                emissiveIntensity={1.8}
              />
            </mesh>

            {/* Screen Bezel Outer Frame */}
            <mesh position={[0, 1.1, 0.005]}>
              <boxGeometry args={[3.15, 2.15, 0.01]} />
              <meshStandardMaterial color="#030712" roughness={0.3} metalness={0.5} />
            </mesh>

            {/* Display Panel (The glowing Code IDE screen) */}
            <mesh position={[0, 1.1, 0.015]}>
              <planeGeometry args={[2.98, 1.95]} />
              <meshBasicMaterial map={screenTexture} toneMapped={false} />
            </mesh>

            {/* Ambient Screen Light Emitted onto the keyboard */}
            <pointLight position={[0, 0.9, 0.5]} color="#00F0FF" intensity={0.9} distance={3} />
          </group>
        </group>

        {/* ================= HOLOGRAPHIC SURROUNDINGS ================= */}
        {/* Holographic Glowing Circuit Orbit Beneath */}
        <mesh position={[0, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.3, 2.33, 64]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.4} />
        </mesh>
        <mesh position={[0, -0.42, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.5, 2.52, 64]} />
          <meshBasicMaterial color="#8B5CF6" transparent opacity={0.3} />
        </mesh>

        {/* Orbiting Tech Chips */}
        <OrbitingChip
          label="React"
          color="#00F0FF"
          position={[0, 0.4, 0]}
          speed={0.7}
          radius={2.4}
          angleOffset={0}
        />
        <OrbitingChip
          label="Node"
          color="#10b981"
          position={[0, -0.1, 0]}
          speed={0.7}
          radius={2.4}
          angleOffset={Math.PI * 0.5}
        />
        <OrbitingChip
          label="MERN"
          color="#8B5CF6"
          position={[0, 0.6, 0]}
          speed={0.7}
          radius={2.4}
          angleOffset={Math.PI}
        />
        <OrbitingChip
          label="API"
          color="#f59e0b"
          position={[0, 0.1, 0]}
          speed={0.7}
          radius={2.4}
          angleOffset={Math.PI * 1.5}
        />
      </group>
    </Float>
  );
};
