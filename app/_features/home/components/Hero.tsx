"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HeroOverlay } from "./3d/HeroOverlay";

// Dynamic import for Canvas to avoid SSR issues
const Canvas3D = dynamic(() => import("./3d/Canvas3D").then((mod) => ({ default: mod.Canvas3D })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#3A10E5]/30 border-t-[#3A10E5] rounded-full animate-spin" />
    </div>
  ),
});

export function Hero() {
  const handleCtaClick = () => {
    // Navigate to courses or trigger signup
    window.location.href = "/catalog";
  };

  return (
    <section className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#10162F] via-[#1A1F3A] to-[#10162F]" />

      {/* Animated background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3A10E5] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD300] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#5B21B6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />

      {/* 3D Canvas - spans full screen */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-[#3A10E5]/30 border-t-[#3A10E5] rounded-full animate-spin" />
            </div>
          }
        >
          <Canvas3D scale={2.5} />
        </Suspense>
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 w-full h-full">
        <HeroOverlay onCtaClick={handleCtaClick} />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-pulse">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#10162F]/50 z-5 pointer-events-none" />
    </section>
  );
}
