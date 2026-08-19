"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Play,
  Layers,
  Activity,
  Eye,
  BarChart2,
  Sliders,
} from "lucide-react";
import { ProjectItem, ProjectModal } from "./ProjectModal";
import { useLanguage } from "@/context/LanguageContext";

interface PortfolioSectionProps {
  onOpenContact: () => void;
}

export function PortfolioSection({ onOpenContact }: PortfolioSectionProps) {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const projects = t.portfolio.projects;

  return (
    <section id="portfolio" className="py-28 sm:py-36 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Swiss Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-300/80 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-[#0066FF] uppercase mb-3">
              <span>{t.portfolio.index}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-sans leading-[1.08]">
              {t.portfolio.titleMain} <br />
              <span className="text-[#0066FF]">{t.portfolio.titleHighlight}</span>.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              {t.portfolio.desc}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-500">
              <span>{t.portfolio.quality}</span>
              <span>•</span>
              <span>{t.portfolio.retention}</span>
            </div>
          </div>
        </div>

        {/* Bento Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Project 1: Wide 2-Col Flagship */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setSelectedProject(projects[0])}
            className="md:col-span-2 rounded-[32px] bg-slate-50 border border-slate-200 p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
          >
            <div>
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0066FF]">
                  {projects[0].client}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {projects[0].ref}
                </span>
              </div>

              {/* Visual Frame */}
              <div
                className={`relative w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-br ${projects[0].gradient} p-6 flex flex-col justify-between overflow-hidden border border-white/20 text-white shadow-md`}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    {projects[0].category}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-white bg-black/40 px-2.5 py-0.5 rounded-full border border-white/20">
                    60 FPS MASTER
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-[#0066FF] transition-all duration-300 shadow-2xl">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    {projects[0].metricLabel}: <strong>{projects[0].metricValue}</strong>
                  </span>
                  <span className="text-xs font-mono text-white/80">{t.portfolio.inspectStudy}</span>
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight font-sans group-hover:text-[#0066FF] transition-colors">
                    {projects[0].title}
                  </h3>
                  <p className="text-sm text-slate-600 font-light mt-2 max-w-xl leading-relaxed">
                    {projects[0].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>{projects[0].summaryDeliverables}</span>
              <span className="text-[#0066FF] font-bold">{t.portfolio.clickToView}</span>
            </div>
          </motion.div>

          {/* Bento Project 2: 1-Col Viral Short-Form */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setSelectedProject(projects[1])}
            className="rounded-[32px] bg-slate-50 border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
                  {projects[1].client}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {projects[1].ref}
                </span>
              </div>

              <div
                className={`relative w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-br ${projects[1].gradient} p-6 flex flex-col justify-between overflow-hidden border border-white/20 text-white shadow-md`}
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    {projects[1].category}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-white bg-black/40 px-2.5 py-0.5 rounded-full border border-white/20">
                    REEL 9:16
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-amber-600 transition-all duration-300 shadow-2xl">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    {projects[1].metricLabel}: <strong>{projects[1].metricValue}</strong>
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight font-sans mt-5 group-hover:text-[#0066FF] transition-colors">
                {projects[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light mt-2 line-clamp-2 leading-relaxed">
                {projects[1].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>{projects[1].summaryDeliverables}</span>
              <ArrowUpRight className="w-4 h-4 text-[#0066FF]" />
            </div>
          </motion.div>

          {/* Bento Project 3: 1-Col UI Micro-Interactions */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setSelectedProject(projects[2])}
            className="rounded-[32px] bg-slate-50 border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600">
                  {projects[2].client}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {projects[2].ref}
                </span>
              </div>

              <div
                className={`relative w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-br ${projects[2].gradient} p-6 flex flex-col justify-between overflow-hidden border border-white/20 text-white shadow-md`}
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    {projects[2].category}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-white bg-black/40 px-2.5 py-0.5 rounded-full border border-white/20">
                    LOTTIE / WEB
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-indigo-600 transition-all duration-300 shadow-2xl">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    {projects[2].metricLabel}: <strong>{projects[2].metricValue}</strong>
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight font-sans mt-5 group-hover:text-[#0066FF] transition-colors">
                {projects[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light mt-2 line-clamp-2 leading-relaxed">
                {projects[2].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>{projects[2].summaryDeliverables}</span>
              <ArrowUpRight className="w-4 h-4 text-[#0066FF]" />
            </div>
          </motion.div>

          {/* Bento Project 4: Wide 2-Col Brand Architecture */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setSelectedProject(projects[3])}
            className="md:col-span-2 rounded-[32px] bg-slate-50 border border-slate-200 p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600">
                  {projects[3].client}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {projects[3].ref}
                </span>
              </div>

              <div
                className={`relative w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-br ${projects[3].gradient} p-6 flex flex-col justify-between overflow-hidden border border-white/20 text-white shadow-md`}
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    {projects[3].category}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-white bg-black/40 px-2.5 py-0.5 rounded-full border border-white/20">
                    FILM COMMERCIAL
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-sky-600 transition-all duration-300 shadow-2xl">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    {projects[3].metricLabel}: <strong>{projects[3].metricValue}</strong>
                  </span>
                  <span className="text-xs font-mono text-white/80">{t.portfolio.watchFilm}</span>
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight font-sans group-hover:text-[#0066FF] transition-colors">
                    {projects[3].title}
                  </h3>
                  <p className="text-sm text-slate-600 font-light mt-2 max-w-xl leading-relaxed">
                    {projects[3].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>{projects[3].summaryDeliverables}</span>
              <span className="text-[#0066FF] font-bold">{t.portfolio.discoverWork}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}
