"use client";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function LoadingSpinner() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.05;
      meshRef.current.rotation.y += 0.05;
    }
  });

  const geometry = new THREE.TorusGeometry(0.8, 0.2, 16, 100);
  const material = new THREE.MeshStandardMaterial({
    color: "#3A10E5",
    metalness: 0.7,
    roughness: 0.2,
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}
