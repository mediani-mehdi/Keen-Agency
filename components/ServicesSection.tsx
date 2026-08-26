"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Flame,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Compass,
  Layout,
  BarChart3,
  Globe,
  Sliders,
  Layers,
  Palette,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="py-28 sm:py-36 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      {/* Subtle Swiss grid guides */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Swiss Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-300/80 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-[#0066FF] uppercase mb-3">
              <span>{s.index}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-sans leading-[1.08]">
              {s.titleMain} <br />
              <span className="text-[#0066FF]">{s.titleHighlight}</span>.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              {s.desc}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-500">
              <span>{s.metaApproach}</span>
              <span>•</span>
              <span>{s.metaSupport}</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: Wide 2-Col Flagship (Branding & Design) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-2 rounded-[32px] bg-white border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Card Meta Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <span className="text-[11px] font-mono font-bold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  {s.mod1.tag}
                </span>
                <Palette className="w-4 h-4 text-[#0066FF]" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-sans tracking-tight">
                    {s.mod1.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {s.mod1.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-4">
                    {s.mod1.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Interactive Visual Monitor */}
                <div className="lg:col-span-5 rounded-2xl bg-slate-950 text-white p-5 border border-slate-800 shadow-inner flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-3">
                      <span>{s.mod1.specHeader}</span>
                      <span className="animate-pulse">{s.mod1.specActive}</span>
                    </div>

                    <div className="relative aspect-[16/9] w-full rounded-xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-center items-center p-4">
                      <div className="relative h-12 w-40">
                        <Image
                          src="/Keen logo f.png"
                          alt="Keen Agency Logo Vector"
                          fill
                          unoptimized
                          className="object-contain"
                        />
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 mt-2 uppercase tracking-widest">
                        {s.mod1.specVoice}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>{s.mod1.specType}</span>
                      <span className="text-cyan-300">{s.mod1.specVector}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-500">
                {s.mod1.output}
              </span>
              <button
                onClick={() => onSelectService("Branding & Design")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066FF] hover:text-blue-700 group-hover:translate-x-1 transition-all cursor-pointer"
              >
                <span>{s.mod1.btn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Bento Card 2: 1-Col Digital Marketing */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[32px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <span className="text-[11px] font-mono font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {s.mod2.tag}
                </span>
                <Flame className="w-4 h-4 text-amber-500" />
              </div>

              <h3 className="text-2xl font-bold text-slate-950 font-sans tracking-tight">
                {s.mod2.title}
              </h3>
              <p className="text-sm text-slate-600 font-light mt-2 mb-6 leading-relaxed">
                {s.mod2.desc}
              </p>

              <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">{s.mod2.reachLabel}</span>
                  <span className="text-sm font-mono font-bold text-slate-950">{s.mod2.reachStatus}</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[88%]" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                  <span>{s.mod2.metricRoi}</span>
                  <span className="text-amber-600 font-bold">{s.mod2.funnel}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">{s.mod2.output}</span>
              <button
                onClick={() => onSelectService("Digital Marketing")}
                className="p-2 rounded-full bg-slate-100 group-hover:bg-[#0066FF] group-hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Bento Card 3: 1-Col Content Creation */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[32px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <span className="text-[11px] font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                  {s.mod3.tag}
                </span>
                <Sparkles className="w-4 h-4 text-indigo-500" />
              </div>

              <h3 className="text-2xl font-bold text-slate-950 font-sans tracking-tight">
                {s.mod3.title}
              </h3>
              <p className="text-sm text-slate-600 font-light mt-2 mb-6 leading-relaxed">
                {s.mod3.desc}
              </p>

              <div className="relative aspect-video w-full rounded-2xl bg-slate-950 overflow-hidden border border-slate-800 shadow-inner mb-4">
                <video
                  src="/videos/creative-02.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-white/10">
                  ● LIVE 4K
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 text-white font-mono text-xs space-y-2 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest">
                  {s.mod3.assetsHeader}
                </div>
                <div className="flex justify-between text-cyan-300 text-[11px]">
                  <span>{s.mod3.shortLabel}</span>
                  <span>{s.mod3.shortVal}</span>
                </div>
                <div className="flex justify-between text-slate-300 text-[11px]">
                  <span>{s.mod3.motionLabel}</span>
                  <span>{s.mod3.motionVal}</span>
                </div>
                <div className="flex justify-between text-emerald-400 text-[11px]">
                  <span>{s.mod3.retentionLabel}</span>
                  <span>{s.mod3.retentionVal}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">{s.mod3.output}</span>
              <button
                onClick={() => onSelectService("Content Creation")}
                className="p-2 rounded-full bg-slate-100 group-hover:bg-[#0066FF] group-hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Bento Card 4: Wide 2-Col Web Design & Development */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-2 rounded-[32px] bg-white border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {s.mod4.tag}
                </span>
                <Globe className="w-4 h-4 text-emerald-600" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-sans tracking-tight">
                    {s.mod4.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-light mt-3 leading-relaxed">
                    {s.mod4.desc}
                  </p>
                </div>

                {/* Swiss Deliverables Matrix */}
                <div className="grid grid-cols-2 gap-3">
                  {s.mod4.cards.map((c, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-mono font-bold text-[#0066FF]">{c.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">{s.mod4.output}</span>
              <button
                onClick={() => onSelectService("Web Design & Development")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066FF] hover:text-blue-700 group-hover:translate-x-1 transition-all cursor-pointer"
              >
                <span>{s.mod4.btn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
