"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type HeroOverlayProps = {
  onCtaClick?: () => void;
};

export function HeroOverlay({ onCtaClick }: HeroOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Initial animation on mount
    gsap.from(contentRef.current.children, {
      duration: 1,
      opacity: 0,
      y: 30,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      if (contentRef.current) {
        const scrollY = window.scrollY;
        gsap.to(contentRef.current, {
          y: scrollY * 0.5,
          duration: 0.5,
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div
        ref={contentRef}
        className="relative z-10 pointer-events-auto text-center max-w-2xl mx-auto px-6"
      >
        {/* Glassmorphism Badge */}
        <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 hover:bg-white/20 transition-all hover:border-white/40 cursor-pointer group">
          <Sparkles className="w-4 h-4 text-[#FFD300] group-hover:animate-spin" />
          <span className="text-sm text-white/90">AI-Powered Learning Experience</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Master Code with
          <span className="block bg-gradient-to-r from-[#3A10E5] via-[#FFD300] to-[#5B21B6] bg-clip-text text-transparent">
            3D Immersion
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto">
          Experience the future of coding education with interactive 3D visualizations, real-time
          feedback, and personalized learning paths.
        </p>

        {/* CTA Buttons with glassmorphism */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={onCtaClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Learning Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform" />
          </button>

          <button className="backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105">
            Explore Courses
          </button>
        </div>

        {/* Stats with glassmorphism cards */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { label: "Learners", value: "50M+" },
            { label: "Countries", value: "190+" },
            { label: "Companies", value: "5000+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all hover:border-white/20"
            >
              <div className="text-2xl font-bold text-[#FFD300] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
