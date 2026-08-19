"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Cpu,
  TrendingUp,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

interface ProcessSectionProps {
  onOpenContact: () => void;
}

export function ProcessSection({ onOpenContact }: ProcessSectionProps) {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const p = t.process;
  const steps = p.steps;

  return (
    <section id="process" className="py-28 sm:py-36 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Swiss Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-300/80 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-[#0066FF] uppercase mb-3">
              <span>{p.index}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-sans leading-[1.08]">
              {p.titleMain} <br />
              <span className="text-[#0066FF]">{p.titleHighlight}</span>.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              {p.desc}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-500">
              <span>{p.metaAgile}</span>
              <span>•</span>
              <span>{p.metaSupport}</span>
            </div>
          </div>
        </div>

        {/* Bento Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Swiss Step Selector Bento */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden cursor-pointer ${
                    isActive
                      ? "bg-white border-[#0066FF] shadow-md shadow-blue-500/10"
                      : "bg-white/70 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#0066FF]">
                      {step.code}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      [{step.tag}]
                    </span>
                  </div>

                  <div className="text-base font-bold text-slate-950 font-sans mt-0.5">
                    {step.title}
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="active-process-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0066FF]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Phase Deep-Dive Bento Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-[32px] bg-white border border-slate-200 p-8 sm:p-10 shadow-md flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                    <span className="text-xs font-mono font-bold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                      {steps[activeStep].tag}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {p.phaseHeader} 0{activeStep + 1} {p.ofTotal}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-sans tracking-tight">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-light mt-3 leading-relaxed">
                    {steps[activeStep].description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                      {p.activitiesTitle}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {steps[activeStep].deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    {p.pipelineTag}
                  </span>
                  <Button
                    variant="pillPrimary"
                    size="pill"
                    onClick={onOpenContact}
                    className="text-xs px-6 h-10 flex items-center gap-2"
                  >
                    <span>{p.startPhaseBtn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
