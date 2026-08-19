"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Sparkles, ArrowRight, Zap, ShieldCheck, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenReel: () => void;
}

export function HeroSection({ onOpenContact, onOpenReel }: HeroSectionProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-anim-text", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        delay: 0.15,
      });

      // Background subtle zoom & parallax on scroll
      if (bgImageRef.current && containerRef.current) {
        gsap.to(bgImageRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
          scale: 1.08,
          y: 40,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate min-h-screen w-full flex items-center justify-start overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 bg-slate-950"
    >
      {/* Full-bleed Hero Background Image Layer */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden transform-gpu"
      >
        <Image
          src="/hero.jpg"
          alt="Keen Agency Digital Visual"
          fill
          priority
          unoptimized
          className="object-cover object-right md:object-[center_right] scale-100"
        />
      </div>

      {/* Cinematic Vignette & Atmospheric Contrast Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent md:from-black/85 md:via-black/50 md:to-transparent z-1 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-1 pointer-events-none" />

      {/* Ambient Blue Energy Aura */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#0066FF]/25 rounded-full blur-[140px] pointer-events-none z-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-white">
          {/* Official Brand Logo - Keen logo f.png */}
          <div className="hero-anim-text flex items-center gap-3 mb-6">
            <div className="relative h-10 w-36 drop-shadow-md">
              <Image
                src="/Keen logo f.png"
                alt="Keen Agency Official Logo"
                fill
                unoptimized
                className="object-contain object-left"
                priority
              />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              {t.hero.badge}
            </span>
          </div>

          {/* H1 Main Headline */}
          <h1 className="hero-anim-text text-4xl sm:text-6xl lg:text-[4.3rem] font-bold tracking-tight text-white font-sans leading-[1.06] drop-shadow-lg">
            {t.hero.titlePre}
            <span className="text-white relative inline-block underline decoration-[#0066FF] decoration-wavy decoration-from-font underline-offset-8">
              {t.hero.titleHighlight}
            </span>
            {t.hero.titlePost}
          </h1>

          {/* Paragraph Description */}
          <p className="hero-anim-text mt-6 text-base sm:text-lg text-slate-200/90 max-w-xl font-light leading-relaxed drop-shadow-sm">
            <strong className="text-white font-semibold">{t.hero.subtitleBold}</strong>
            {t.hero.subtitleRest}
          </p>

          {/* Sub-label with bullet separator */}
          <div className="hero-anim-text mt-6 flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-slate-300 font-sans">
            <span>{t.hero.sublabel[0]}</span>
            <span>•</span>
            <span>{t.hero.sublabel[1]}</span>
            <span>•</span>
            <span>{t.hero.sublabel[2]}</span>
          </div>

          {/* Pill Action Buttons */}
          <div className="hero-anim-text mt-9 flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Button
              variant="pillPrimary"
              size="pill"
              onClick={onOpenContact}
              className="w-full sm:w-auto text-sm px-8 h-12 bg-white text-slate-950 hover:bg-slate-100 hover:text-black font-bold shadow-xl shadow-black/20"
            >
              {t.hero.startToday}
            </Button>

            <Button
              variant="pillOutline"
              size="pill"
              onClick={onOpenReel}
              className="w-full sm:w-auto text-sm px-8 h-12 flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white border-white/30 hover:border-white/60 backdrop-blur-md font-semibold"
            >
              <span>{t.hero.seeWork}</span>
              <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-cyan-300" />
            </Button>
          </div>

          {/* Live Trust Metrics Strip */}
          <div className="hero-anim-text mt-14 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                {t.hero.metrics.custom.val}
              </div>
              <div className="text-[11px] uppercase font-medium text-slate-300 mt-0.5 tracking-wider">
                {t.hero.metrics.custom.label}
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                {t.hero.metrics.support.val}
              </div>
              <div className="text-[11px] uppercase font-medium text-slate-300 mt-0.5 tracking-wider">
                {t.hero.metrics.support.label}
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                {t.hero.metrics.satisfaction.val}
              </div>
              <div className="text-[11px] uppercase font-medium text-slate-300 mt-0.5 tracking-wider">
                {t.hero.metrics.satisfaction.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
