"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

type AnimatedModelProps = {
  scale?: number;
};

export function AnimatedModel({ scale = 2.5 }: AnimatedModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const [isHovered, setIsHovered] = useState(false);
  const rotationTarget = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  // Create a complex 3D geometry for premium look
  useEffect(() => {
    if (!meshRef.current) return;

    const group = meshRef.current;

    // Create multiple rotating elements for depth
    const geometry1 = new THREE.IcosahedronGeometry(1, 4);
    const material1 = new THREE.MeshStandardMaterial({
      color: "#3A10E5",
      metalness: 0.7,
      roughness: 0.2,
      emissive: "#1a0f7d",
      emissiveIntensity: 0.5,
    });
    const mesh1 = new THREE.Mesh(geometry1, material1);

    const geometry2 = new THREE.OctahedronGeometry(0.7);
    const material2 = new THREE.MeshStandardMaterial({
      color: "#FFD300",
      metalness: 0.6,
      roughness: 0.3,
      emissive: "#FFD300",
      emissiveIntensity: 0.3,
    });
    const mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.z = 1.5;

    const geometry3 = new THREE.TorusGeometry(1.2, 0.3, 16, 100);
    const material3 = new THREE.MeshStandardMaterial({
      color: "#5B21B6",
      metalness: 0.8,
      roughness: 0.2,
      emissive: "#5B21B6",
      emissiveIntensity: 0.4,
    });
    const mesh3 = new THREE.Mesh(geometry3, material3);
    mesh3.rotation.x = Math.PI * 0.3;
    mesh3.rotation.z = Math.PI * 0.2;

    group.add(mesh1, mesh2, mesh3);

    return () => {
      geometry1.dispose();
      geometry2.dispose();
      geometry3.dispose();
      material1.dispose();
      material2.dispose();
      material3.dispose();
    };
  }, []);

  // Mouse parallax interaction
  useEffect(() => {
    const updateRotation = () => {
      rotationTarget.current.y = (mouse.x * Math.PI) / 2;
      rotationTarget.current.x = (mouse.y * Math.PI) / 2;
    };

    const interval = setInterval(updateRotation, 16);
    return () => clearInterval(interval);
  }, [mouse]);

  // Smooth animation loop
  useFrame(() => {
    if (!meshRef.current) return;

    // Smooth rotation towards target
    currentRotation.current.x += (rotationTarget.current.x - currentRotation.current.x) * 0.05;
    currentRotation.current.y += (rotationTarget.current.y - currentRotation.current.y) * 0.05;

    meshRef.current.rotation.x = currentRotation.current.x + Math.sin(Date.now() * 0.0003) * 0.1;
    meshRef.current.rotation.y = currentRotation.current.y + Date.now() * 0.0001;
    meshRef.current.rotation.z += 0.0002;

    // Floating animation
    meshRef.current.position.y += Math.sin(Date.now() * 0.001) * 0.002;

    // Scale animation on hover
    if (isHovered) {
      meshRef.current.scale.lerp(new THREE.Vector3(scale * 1.1, scale * 1.1, scale * 1.1), 0.1);
    } else {
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group
      ref={meshRef}
      scale={scale}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    />
  );
}
