"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  HeartHandshake,
  Zap,
  Target,
  Compass,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactDialog } from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.aboutPage;
  const [isContactOpen, setIsContactOpen] = useState(false);

  const valueIcons = [Sparkles, HeartHandshake, Award, Zap, Users];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0066FF] selection:text-white">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero Header Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0066FF]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-widest text-slate-300 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>{a.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-sans text-white leading-[1.08]">
              {a.heroTitle}
            </h1>

            <p className="mt-6 text-base sm:text-xl text-slate-300 font-light leading-relaxed">
              {a.heroSubtitle}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {a.stats.map((st, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                  {st.val}
                </div>
                <div className="text-xs uppercase font-medium text-slate-300 mt-1 tracking-wider">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Brand Presentation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-[#0066FF] uppercase">
                <span>IDENTITY // DNA</span>
                <span>—</span>
                <span>ORIGIN</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-sans">
                {a.storyTitle}
              </h2>

              <p className="text-base text-slate-600 font-light leading-relaxed">
                {a.storyP1}
              </p>

              <p className="text-base text-slate-600 font-light leading-relaxed">
                {a.storyP2}
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Button
                  variant="pillPrimary"
                  onClick={() => setIsContactOpen(true)}
                  className="px-6 h-11 text-xs font-semibold"
                >
                  <span>{a.ctaBtn}</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Right Col: Mission & Vision Bento Cards */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 font-sans tracking-tight">
                  {a.missionTitle}
                </h3>
                <p className="text-sm text-slate-600 font-light mt-2 leading-relaxed">
                  {a.missionDesc}
                </p>
              </div>

              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 font-sans tracking-tight">
                  {a.visionTitle}
                </h3>
                <p className="text-sm text-slate-600 font-light mt-2 leading-relaxed">
                  {a.visionDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold tracking-widest text-[#0066FF] uppercase mb-2">
              // FOUNDATIONAL PILLARS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 font-sans">
              {a.coreValuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.valuesList.map((val, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={idx}
                  className="p-8 rounded-[28px] bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 font-sans tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-light mt-2 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-14 rounded-[36px] bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0066FF]/25 rounded-full blur-[120px] pointer-events-none -z-10" />

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-sans">
              {a.ctaTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto">
              {a.ctaSubtitle}
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                variant="pillPrimary"
                size="pill"
                onClick={() => setIsContactOpen(true)}
                className="px-8 h-12 text-sm bg-white text-slate-950 hover:bg-slate-100 font-bold"
              >
                <span>{a.ctaBtn}</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
