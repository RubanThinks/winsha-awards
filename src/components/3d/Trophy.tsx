"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const Trophy = () => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Base */}
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.8, 1, 0.4, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
        </mesh>
        
        {/* Stem */}
        <mesh position={[0, -0.8, 0]}>
          <cylinderGeometry args={[0.1, 0.2, 1, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
        </mesh>

        {/* Cup/Elite Shape */}
        <mesh position={[0, 0.5, 0]}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#D4AF37"
            speed={2}
            distort={0.3}
            radius={1}
            metalness={1}
            roughness={0.1}
          />
        </mesh>

        {/* Glowing Core */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color="#7C3AED"
            emissive="#7C3AED"
            emissiveIntensity={10}
            toneMapped={false}
          />
        </mesh>

        {/* Decorative Rings */}
        <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.2, 0.02, 16, 100]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} opacity={0.5} transparent />
        </mesh>
        <mesh position={[0, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[1.1, 0.02, 16, 100]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} opacity={0.3} transparent />
        </mesh>
      </Float>

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#D4AF37" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#7C3AED" />
    </group>
  );
};

export default Trophy;
