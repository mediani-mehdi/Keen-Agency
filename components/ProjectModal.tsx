"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowUpRight, CheckCircle2, Sparkles, Flame, Eye, BarChart2 } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  impact: string;
  description: string;
  deliverables: string[];
  gradient: string;
  accentColor: string;
  fps: string;
  metricLabel: string;
  metricValue: string;
  ref?: string;
  summaryDeliverables?: string;
}

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function ProjectModal({ project, onClose, onOpenContact }: ProjectModalProps) {
  const { t } = useLanguage();
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-3xl bg-white rounded-[32px] shadow-2xl border border-slate-200 p-6 sm:p-10 z-10 overflow-hidden text-slate-900"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Visual Banner */}
          <div
            className={`w-full h-52 sm:h-64 rounded-2xl bg-gradient-to-br ${project.gradient} relative overflow-hidden flex flex-col justify-end p-6 border border-slate-200/60 mb-6 text-white`}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-cyan-200 bg-black/40 px-2 py-0.5 rounded border border-white/20">
                  {project.fps}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
                {project.title}
              </h2>
              <p className="text-xs uppercase tracking-widest text-slate-200 font-semibold mt-0.5">
                {t.projectModal.client} {project.client}
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left 2 Cols: Description & Deliverables */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {t.projectModal.story}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  {t.projectModal.deliverables}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Metrics & Action */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-1">
                  <BarChart2 className="w-4 h-4" /> {t.projectModal.impactPerf}
                </div>
                <div className="text-3xl font-extrabold text-slate-950 tracking-tight mt-2 font-sans">
                  {project.metricValue}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {project.metricLabel}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600 font-light">
                  {project.impact}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <Button
                  variant="pillPrimary"
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="w-full text-xs font-semibold py-2.5 rounded-full flex items-center justify-center gap-2"
                >
                  <span>{t.projectModal.similarBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
