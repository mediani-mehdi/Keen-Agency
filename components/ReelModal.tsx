"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Maximize,
  RotateCcw,
  Film,
  Layers,
} from "lucide-react";
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

  const [activeTrack, setActiveTrack] = useState<"01" | "02">("01");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [volume, setVolume] = useState(1);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoTracks = {
    "01": {
      src: "/videos/creative-01.mp4",
      title: rm.track1Title || "Creative 01 // 3D & Brand Showcase",
      tag: rm.track1Tag || "3D & MOTION",
      fps: "60 FPS",
    },
    "02": {
      src: "/videos/creative-02.mp4",
      title: rm.track2Title || "Creative 02 // Viral Short-Form & Impact",
      tag: rm.track2Tag || "VIRAL REELS",
      fps: "60 FPS",
    },
  };

  const currentTrack = videoTracks[activeTrack];

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }
  }, [isOpen, activeTrack]);

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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      if (val === 0) {
        setIsMuted(true);
        videoRef.current.muted = true;
      } else {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((curr / dur) * 100);

    const format = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    setCurrentTime(format(curr));
    if (videoRef.current.duration) {
      setDuration(format(videoRef.current.duration));
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percent * (videoRef.current.duration || 0);
    videoRef.current.currentTime = newTime;
    setProgress(percent * 100);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-slate-950 rounded-[32px] shadow-2xl border border-slate-800 p-5 sm:p-7 z-10 overflow-y-auto text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-30 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Header with Track Switcher */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pr-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                <Sparkles className="w-4 h-4" /> {rm.badge}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
                {currentTrack.title}
              </h2>
            </div>

            {/* Video Selector Pills */}
            <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-full border border-slate-800 self-start md:self-auto">
              <button
                onClick={() => setActiveTrack("01")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeTrack === "01"
                    ? "bg-[#0066FF] text-white shadow-md shadow-blue-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Creative 01</span>
              </button>
              <button
                onClick={() => setActiveTrack("02")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeTrack === "02"
                    ? "bg-[#0066FF] text-white shadow-md shadow-blue-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Creative 02</span>
              </button>
            </div>
          </div>

          {/* Cinematic Video Player Viewport */}
          <div className="relative aspect-video w-full rounded-2xl bg-black border border-slate-800 overflow-hidden flex flex-col justify-between group shadow-2xl">
            {/* Real HTML5 Video */}
            <video
              ref={videoRef}
              key={currentTrack.src}
              src={currentTrack.src}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlay}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            />

            {/* Top Status Overlay */}
            <div className="relative z-10 flex items-center justify-between p-5 pointer-events-none bg-gradient-to-b from-black/80 via-transparent to-transparent">
              <span className="text-[11px] font-mono uppercase bg-red-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full flex items-center gap-2 font-bold shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> {rm.recBadge}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-cyan-300 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                  {currentTrack.tag}
                </span>
              </div>
            </div>

            {/* Center Big Play/Pause Overlay button */}
            <div className="relative z-10 flex items-center justify-center my-auto pointer-events-none">
              {!isPlaying && (
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={togglePlay}
                  className="pointer-events-auto w-20 h-20 rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer border border-blue-400"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </motion.button>
              )}
            </div>

            {/* Bottom Controls Bar */}
            <div className="relative z-20 pt-4 pb-4 px-5 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-3">
              {/* Interactive Scrubber Bar */}
              <div
                onClick={handleSeek}
                className="group/track relative w-full h-2 rounded-full bg-white/20 hover:h-3 transition-all cursor-pointer flex items-center"
              >
                <div
                  className="h-full bg-[#0066FF] rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md opacity-0 group-hover/track:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between gap-3 text-xs">
                {/* Left: Play, Restart, Timecode */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={handleRestart}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    title="Recommencer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <div className="font-mono text-slate-300 text-xs">
                    <span>{currentTime}</span> / <span className="text-slate-400">{duration || "00:30"}</span>
                  </div>
                </div>

                {/* Right: Volume, Fullscreen, Book CTA */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white/10 px-2.5 py-1 rounded-full">
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-[#0066FF] transition-colors cursor-pointer"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-4 h-4 text-red-400" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-cyan-300" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-16 h-1 accent-[#0066FF] bg-white/30 rounded-lg cursor-pointer"
                    />
                  </div>

                  <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    title="Plein écran"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>

                  <Button
                    variant="pillPrimary"
                    size="sm"
                    onClick={() => {
                      onClose();
                      onOpenContact();
                    }}
                    className="text-xs px-4 py-1.5 h-8 bg-white text-slate-950 hover:bg-slate-200 font-bold"
                  >
                    {rm.bookStyleBtn}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
