"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Zap, Target } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ImpactSection() {
  const { t } = useLanguage();
  const w = t.whyKeen;

  const icons = [Sparkles, HeartHandshake, Zap, Target];

  return (
    <section id="why-keen" className="py-28 sm:py-36 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Swiss Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-300/80 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-[#0066FF] uppercase mb-3">
              <span>{w.index}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-sans leading-[1.08]">
              {w.titleMain} <br />
              <span className="text-[#0066FF]">{w.titleHighlight}</span>.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              {w.desc}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-500">
              <span>{w.metaValues}</span>
              <span>•</span>
              <span>{w.metaGrowth}</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {w.pillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="rounded-[32px] bg-slate-50 border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                    <span className="text-[11px] font-mono font-bold text-[#0066FF]">
                      {pillar.code}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      [{pillar.badge}]
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0066FF] shadow-xs mb-5 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 font-sans tracking-tight">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#0066FF] uppercase tracking-wider mt-1 mb-3">
                    {pillar.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{w.standard}</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
