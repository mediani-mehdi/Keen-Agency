"use client";

import React, { useState } from "react";
import { RotateCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactDialog } from "@/components/ContactDialog";
import { useLanguage } from "@/context/LanguageContext";

export default function RefundPolicyPage() {
  const { t } = useLanguage();
  const r = t.refundPolicy;
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0066FF] selection:text-white">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Header Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l'accueil / Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">
            <RotateCcw className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>{r.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-white">
            {r.title}
          </h1>

          <p className="mt-3 text-xs font-mono text-slate-400">
            {r.lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-[32px] border border-slate-200 shadow-sm space-y-10">
            {r.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-xl font-bold text-slate-950 font-sans tracking-tight">
                  {sec.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}

            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
              <span>KEEN AGENCY DIGITAL © {new Date().getFullYear()}</span>
              <a href="mailto:info@keenagency.org" className="text-[#0066FF] hover:underline">
                info@keenagency.org
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
