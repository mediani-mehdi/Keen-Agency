"use client";

import React from "react";
import { ArrowUpRight, Sparkles, Zap, MessageSquare, ShieldCheck, CheckCircle2, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

interface CtaSectionProps {
  onOpenContact: () => void;
}

export function CtaSection({ onOpenContact }: CtaSectionProps) {
  const { t } = useLanguage();
  const c = t.cta;

  return (
    <section className="py-28 sm:py-36 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Swiss Bento Conversion Block */}
        <div className="rounded-[40px] bg-slate-950 text-white p-8 sm:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0066FF]/25 rounded-full blur-[140px] pointer-events-none -z-10" />

          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-slate-800 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                {c.bannerTag}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {c.systemTag}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Big Swiss Headline & Subtitle */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans text-white leading-[1.08]">
                {c.title1} <br />
                <span className="text-[#0066FF]">{c.title2}</span> <br />
                {c.title3}
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-light max-w-xl leading-relaxed">
                {c.desc}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  variant="pillPrimary"
                  size="pill"
                  onClick={onOpenContact}
                  className="w-full sm:w-auto text-sm px-8 h-12 bg-white text-slate-950 hover:bg-slate-100 hover:text-black font-bold shadow-xl shadow-black/30"
                >
                  <span>{c.sendBtn}</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>

                <a
                  href="https://wa.me/212654674726"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{c.whatsappBtn}</span>
                </a>
              </div>
            </div>

            {/* Right Col: Direct Channels Bento Card */}
            <div className="lg:col-span-5 rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF] pb-2 border-b border-white/10">
                {c.directContactHeader}
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <Mail className="w-4 h-4 text-[#0066FF] shrink-0" />
                  <span className="font-mono text-xs">info@keenagency.org</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <Mail className="w-4 h-4 text-[#0066FF] shrink-0" />
                  <span className="font-mono text-xs">digitalkeenagency@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono text-xs">+212 654 67 47 26 / +212 718 36 60 36</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400 font-light">
                {c.supportNote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
