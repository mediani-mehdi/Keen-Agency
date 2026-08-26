"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  ArrowUpRight,
  CheckCircle2,
  BarChart2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Layers,
} from "lucide-react";
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
  fps?: string;
  metricLabel: string;
  metricValue: string;
  ref?: string;
  summaryDeliverables?: string;
  videoSrc?: string;
  carouselImages?: string[];
}

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function ProjectModal({ project, onClose, onOpenContact }: ProjectModalProps) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    setIsPlaying(true);
    setIsMuted(true);
    setCarouselIndex(0);
  }, [project?.id]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project?.carouselImages) return;
    setCarouselIndex((prev) => (prev === 0 ? project.carouselImages!.length - 1 : prev - 1));
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project?.carouselImages) return;
    setCarouselIndex((prev) => (prev === project.carouselImages!.length - 1 ? 0 : prev + 1));
  };

  if (!project) return null;

  const hasCarousel = project.carouselImages && project.carouselImages.length > 0;
  const currentImage = hasCarousel ? project.carouselImages![carouselIndex] : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className={`relative w-full ${
            hasCarousel ? "max-w-5xl" : "max-w-4xl"
          } max-h-[90vh] flex flex-col bg-white rounded-[32px] shadow-2xl border border-slate-200 p-5 sm:p-8 z-10 overflow-y-auto text-slate-900`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer z-30"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {hasCarousel && currentImage ? (
            /* SPLIT 2-COLUMN CAROUSEL LAYOUT: Image on Left (No overlay), Text on Right */
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* LEFT COLUMN: Pure Carousel Image Display (Full Space, Zero Text Overlay) */}
              <div
                className={`relative w-full ${
                  project.id === "hyper-kinetic-03"
                    ? "md:col-span-6 lg:col-span-6 aspect-square"
                    : "md:col-span-6 lg:col-span-5 aspect-[2/3]"
                } max-h-[70vh] rounded-2xl overflow-hidden bg-slate-950 shadow-xl border border-slate-200`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={currentImage}
                      alt={`${project.title} - Slide ${carouselIndex + 1}`}
                      fill
                      unoptimized
                      priority
                      className={
                        project.id === "hyper-kinetic-03"
                          ? "object-cover object-center"
                          : "object-contain object-center"
                      }
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Navigation Arrows */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 z-20 cursor-pointer shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 z-20 cursor-pointer shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Top Carousel Counter */}
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-cyan-300 font-bold">
                    {carouselIndex + 1} / {project.carouselImages!.length}
                  </span>
                </div>

                {/* Bottom Carousel Dots */}
                <div className="absolute bottom-3 inset-x-0 mx-auto w-fit z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  {project.carouselImages!.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCarouselIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === carouselIndex ? "w-5 bg-[#0066FF]" : "w-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN: Project Details & Text */}
              <div
                className={`${
                  project.id === "hyper-kinetic-03"
                    ? "md:col-span-6 lg:col-span-6"
                    : "md:col-span-6 lg:col-span-7"
                } flex flex-col justify-between space-y-6`}
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-amber-500 text-slate-950 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Layers className="w-3 h-3" /> CAROUSEL ({project.carouselImages!.length} ASSETS)
                    </span>
                  </div>

                  {/* Project Title */}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 font-sans">
                    {project.title}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mt-1">
                    {t.projectModal.client} {project.client}
                  </p>

                  {/* Story Description */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      {t.projectModal.story}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
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

                {/* Impact Metric & CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                      <BarChart2 className="w-3.5 h-3.5" /> {t.projectModal.impactPerf}
                    </div>
                    <div className="text-2xl font-extrabold text-slate-950 tracking-tight font-sans mt-0.5">
                      {project.metricValue}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {project.metricLabel}
                    </div>
                  </div>

                  <Button
                    variant="pillPrimary"
                    onClick={() => {
                      onClose();
                      onOpenContact();
                    }}
                    className="text-xs font-semibold py-2.5 px-6 rounded-full flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>{t.projectModal.similarBtn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            /* STANDARD VIDEO / HERO BANNER LAYOUT FOR NON-CAROUSEL PROJECTS */
            <>
              {/* Hero Banner (Video OR Gradient) */}
              <div
                className={`w-full h-60 sm:h-80 md:h-96 rounded-2xl bg-gradient-to-br ${project.gradient} relative overflow-hidden flex flex-col justify-end p-5 sm:p-6 border border-slate-200/60 mb-6 text-white group shadow-inner shrink-0`}
              >
                {project.videoSrc ? (
                  <>
                    <video
                      ref={videoRef}
                      src={project.videoSrc}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                    {/* Floating Video Controls */}
                    <div className="absolute top-4 right-14 z-20 flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-colors cursor-pointer"
                        title={isMuted ? "Activer le son" : "Couper le son"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#0066FF]" />}
                      </button>
                      <button
                        onClick={toggleFullscreen}
                        className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-colors cursor-pointer"
                        title="Plein écran"
                      >
                        <Maximize className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Center Play/Pause button on hover */}
                    <button
                      onClick={togglePlay}
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/40 hover:bg-black/60 border border-white/30 flex items-center justify-center text-white backdrop-blur-md transition-all group-hover:scale-110 z-20 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-current opacity-80 group-hover:opacity-100" />
                      ) : (
                        <Play className="w-6 h-6 fill-current ml-1" />
                      )}
                    </button>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                )}

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                      {project.category}
                    </span>
                    {project.videoSrc && (
                      <span className="text-[10px] font-mono font-bold bg-[#0066FF] text-white px-2 py-0.5 rounded flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> 4K VIDEO MASTER
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-sans drop-shadow-md">
                    {project.title}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-slate-200 font-semibold mt-0.5 drop-shadow-sm">
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
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
