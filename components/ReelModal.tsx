"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Volume2, VolumeX, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export function ReelModal({ isOpen, onClose, onOpenContact }: ReelModalProps) {
  const { t } = useLanguage();
  const rm = t.reelModal;
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-4xl bg-white rounded-[32px] shadow-2xl border border-slate-200 p-6 sm:p-8 z-10 overflow-hidden text-slate-900"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066FF]">
              <Sparkles className="w-4 h-4" /> {rm.badge}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 mt-1">
              {rm.title}
            </h2>
          </div>

          {/* Cinematic Simulated Video Player */}
          <div className="relative aspect-video w-full rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-800 to-sky-600 border border-slate-200 overflow-hidden flex flex-col justify-between p-6 group text-white shadow-inner">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            {/* Simulated Live Action Scene */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase bg-red-600 text-white px-2.5 py-0.5 rounded-full flex items-center gap-1.5 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-white" /> {rm.recBadge}
              </span>
              <span className="text-xs font-mono text-cyan-200 bg-black/40 px-2.5 py-1 rounded-full border border-white/20">
                {rm.timer}
              </span>
            </div>

            {/* Center Reel Icon */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 rounded-full bg-white text-[#0066FF] flex items-center justify-center shadow-2xl cursor-pointer"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </motion.button>
              <p className="text-xs font-medium text-white/90 mt-4 tracking-wide">
                {rm.experienceText}
              </p>
            </div>

            {/* Video Controls Bar */}
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/20 bg-black/30 backdrop-blur-md -mx-6 -mb-6 px-6 py-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded-full hover:bg-white/20 text-white cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <div className="w-32 sm:w-64 h-1.5 rounded-full bg-white/30 overflow-hidden">
                  <motion.div
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="h-full bg-white"
                  />
                </div>
              </div>

              <Button
                variant="pillPrimary"
                size="sm"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="text-xs px-5 py-1.5 h-8"
              >
                {rm.bookStyleBtn}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
