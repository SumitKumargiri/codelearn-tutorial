"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type ParticlesProps = {
  count?: number;
};

export function Particles({ count = 200 }: ParticlesProps) {
  const meshRef = useRef<THREE.Points>(null);

  // Create particles geometry
  const particlesGeometry = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 10;
    particlePositions[i + 1] = (Math.random() - 0.5) * 10;
    particlePositions[i + 2] = (Math.random() - 0.5) * 10;
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    color: "#3A10E5",
    size: 0.05,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.5,
  });

  // Animate particles
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0001;
      meshRef.current.rotation.y += 0.0002;

      const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        if (positions[i + 1] > 5) {
          positions[i + 1] = -5;
        }
        positions[i + 1] += 0.01;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return <points ref={meshRef} geometry={particlesGeometry} material={particlesMaterial} />;
}
