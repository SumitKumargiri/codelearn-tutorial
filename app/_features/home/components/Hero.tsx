"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Rocket, Sparkles, Stars, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "@/shared/figma/ImageWithFallback";
import { ROUTES } from "@/shared/config/routes";
import hero from "@/public/Heosection2.png";

const features = [
  {
    icon: BookOpen,
    title: "Beginner friendly",
    description: "Step-by-step lessons that make hard topics feel simple.",
  },
  {
    icon: Code2,
    title: "Hands-on code",
    description: "Practice with real examples and guided exercises.",
  },
  {
    icon: Rocket,
    title: "Build projects",
    description: "Learn by shipping portfolio-ready projects from day one.",
  },
];

const stats = [
  { value: "100+", label: "Tutorials" },
  { value: "20+", label: "Courses" },
  { value: "50+", label: "Projects" },
  { value: "10K+", label: "Learners" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#10162F] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(58,16,229,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,211,0,0.16),transparent_30%)]" />
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#3A10E5]/25 blur-3xl" />
      <div className="absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-[#FFD300]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#FFD300]" />
            Learn. Code. Grow.
          </div>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Learn to code.
            <span className="mt-3 block bg-gradient-to-r from-[#FFD300] via-white to-[#8B9CFF] bg-clip-text text-transparent">
              Build your future.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            CodeLearn Tutorial is your free path from fundamentals to advanced
            programming with practical examples, real-world projects, and a
            learning flow that keeps momentum high.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <CheckCircle2 className="h-4 w-4 text-[#FFD300]" />
              Free beginner-friendly lessons
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <CheckCircle2 className="h-4 w-4 text-[#FFD300]" />
              Hands-on projects and practice
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={ROUTES.CATALOG}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FFD300] px-8 py-4 font-semibold text-[#10162F] shadow-[0_18px_50px_rgba(255,211,0,0.22)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Tutorials
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={ROUTES.RESOURCES}
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/10"
            >
              View Resources
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <Icon className="h-6 w-6 text-[#FFD300]" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute left-6 top-8 z-10 hidden rounded-2xl border border-white/10 bg-[#10162F]/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD300] text-[#10162F]">
                <Stars className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">New lessons weekly</p>
                <p className="text-xs text-slate-300">Fresh content for every stage</p>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-white/10 bg-[#0B1024]/70 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-300">Learning dashboard</p>
                  <p className="text-lg font-semibold text-white">Build faster with guided lessons</p>
                </div>
                <div className="rounded-full bg-[#FFD300]/15 px-3 py-1 text-xs font-semibold text-[#FFD300]">
                  Live
                </div>
              </div>

              <ImageWithFallback
                src={hero.src}
                alt="CodeLearn learning hero illustration"
                width={800}
                height={700}
                className="h-auto w-full rounded-[1.25rem] object-contain drop-shadow-2xl"
              />

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Next milestone</p>
                  <p className="mt-2 text-sm font-semibold text-white">Learn JavaScript basics</p>
                  <p className="mt-1 text-sm text-slate-300">Short lessons, clear examples, no fluff.</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Focus</p>
                  <p className="mt-2 text-sm font-semibold text-white">Code practice every day</p>
                  <p className="mt-1 text-sm text-slate-300">Small wins that build confidence fast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/5 p-5">
              <p className="text-4xl font-semibold text-[#FFD300]">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
