"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ProjectItem, ProjectModal } from "./ProjectModal";
import { useLanguage } from "@/context/LanguageContext";

interface PortfolioSectionProps {
  onOpenContact: () => void;
}

function CardCarouselPreview({
  images,
  title,
  fit = "contain",
}: {
  images: string[];
  title: string;
  fit?: "contain" | "cover";
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden rounded-2xl flex items-center justify-center ${
        fit === "contain" ? "py-3 sm:py-4 px-2" : ""
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} - Slide ${currentIndex + 1}`}
            fill
            unoptimized
            className={fit === "cover" ? "object-cover object-center" : "object-contain object-center"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Mini Controls on Card Hover */}
      <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <button
          onClick={handlePrev}
          className="pointer-events-auto p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-transform hover:scale-110 cursor-pointer shadow-md"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-transform hover:scale-110 cursor-pointer shadow-md"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slide dots at bottom center */}
      <div className="absolute bottom-2.5 inset-x-0 mx-auto w-fit z-20 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex ? "w-3.5 bg-amber-400" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function PortfolioSection({ onOpenContact }: PortfolioSectionProps) {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const projects = t.portfolio.projects;

  return (
    <section id="portfolio" className="py-28 sm:py-36 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Project 1: Wide 2-Col Flagship (WATERPROOF TEST - Creative 01 Video) */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setSelectedProject(projects[0])}
            className="md:col-span-2 rounded-[32px] bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
          >
            <div>
              {/* Visual Frame */}
              <div
                className={`relative w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-br ${projects[0].gradient} p-6 flex flex-col justify-between overflow-hidden border border-white/20 text-white shadow-md`}
              >
                {projects[0].videoSrc ? (
                  <>
                    <video
                      src={projects[0].videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
                )}

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    {projects[0].category}
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-[#0066FF] transition-all duration-300 shadow-2xl">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    {projects[0].metricLabel}: <strong>{projects[0].metricValue}</strong>
                  </span>
                  <span className="text-xs font-mono text-white/90">{t.portfolio.inspectStudy}</span>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between">
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
          </motion.div>

          {/* Bento Project 2: 1-Col Dedicated Vertical Carousel Card (Saadbodyfit) */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setSelectedProject(projects[1])}
            className="rounded-[32px] bg-slate-50 border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
          >
            <div>
              {/* Pure Carousel Image Frame */}
              <div className="relative w-full h-80 sm:h-[460px] md:h-[480px] rounded-2xl bg-slate-950 overflow-hidden border border-slate-200 shadow-md">
                {projects[1].carouselImages && projects[1].carouselImages.length > 0 ? (
                  <CardCarouselPreview
                    images={projects[1].carouselImages}
                    title={projects[1].title}
                    fit="contain"
                  />
                ) : null}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight font-sans mt-4 group-hover:text-[#0066FF] transition-colors">
                {projects[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light mt-1.5 line-clamp-2 leading-relaxed">
                {projects[1].description}
              </p>
            </div>
          </motion.div>

          {/* Bento Project 3: 1-Col Uber Print Exact 1:1 Square Carousel Card */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setSelectedProject(projects[2])}
            className="rounded-[32px] bg-slate-50 border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-slate-800/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
          >
            <div>
              {/* Pure 1:1 Square Carousel Image Frame for Uber */}
              <div className="relative w-full aspect-square rounded-2xl bg-slate-950 overflow-hidden border border-slate-200 shadow-md">
                {projects[2].carouselImages && projects[2].carouselImages.length > 0 ? (
                  <CardCarouselPreview
                    images={projects[2].carouselImages}
                    title={projects[2].title}
                    fit="cover"
                  />
                ) : null}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight font-sans mt-4 group-hover:text-[#0066FF] transition-colors">
                {projects[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light mt-1.5 line-clamp-2 leading-relaxed">
                {projects[2].description}
              </p>
            </div>
          </motion.div>

          {/* Bento Project 4: Wide 2-Col Flagship (DURABILITY TEST - Creative 02 Video) */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setSelectedProject(projects[3])}
            className="md:col-span-2 rounded-[32px] bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
          >
            <div>
              <div
                className={`relative w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-br ${projects[3].gradient} p-6 flex flex-col justify-between overflow-hidden border border-white/20 text-white shadow-md`}
              >
                {projects[3].videoSrc ? (
                  <>
                    <video
                      src={projects[3].videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
                )}

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    {projects[3].category}
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-sky-600 transition-all duration-300 shadow-2xl">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    {projects[3].metricLabel}: <strong>{projects[3].metricValue}</strong>
                  </span>
                  <span className="text-xs font-mono text-white/90">{t.portfolio.watchFilm}</span>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between">
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
