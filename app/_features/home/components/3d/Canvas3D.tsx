"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { AnimatedModel } from "./models/AnimatedModel";
import { Particles } from "./effects/Particles";
import { LoadingSpinner } from "./effects/LoadingSpinner";

type Canvas3DProps = {
  scale?: number;
};

export function Canvas3D({ scale = 2.5 }: Canvas3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1}
      performance={{ min: 0.5 }}
      style={{ touchAction: "none" }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

      {/* Lighting setup */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <directionalLight position={[-5, -5, 5]} intensity={0.5} />
      <pointLight position={[0, 0, 2]} intensity={0.5} color="#3A10E5" />

      {/* Environment - soft lighting */}
      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>

      {/* 3D Content */}
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatedModel scale={scale} />
        <Particles count={150} />
      </Suspense>

      {/* Post-processing would go here */}
    </Canvas>
  );
}
