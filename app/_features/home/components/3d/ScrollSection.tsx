"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollSectionProps = {
  children: React.ReactNode;
  className?: string;
  animationType?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scale";
};

export function ScrollSection({
  children,
  className = "",
  animationType = "fadeInUp",
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const getAnimationConfig = () => {
      switch (animationType) {
        case "fadeInLeft":
          return {
            x: -100,
            opacity: 0,
          };
        case "fadeInRight":
          return {
            x: 100,
            opacity: 0,
          };
        case "scale":
          return {
            scale: 0.8,
            opacity: 0,
          };
        case "fadeInUp":
        default:
          return {
            y: 50,
            opacity: 0,
          };
      }
    };

    gsap.from(sectionRef.current, {
      ...getAnimationConfig(),
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: false,
        markers: false,
      },
    });
  }, [animationType]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
