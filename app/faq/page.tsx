"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, HelpCircle, ArrowUpRight, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactDialog } from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqPage() {
  const { t } = useLanguage();
  const f = t.faqPage;
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    "0-0": true,
    "1-0": true,
  });

  const toggleItem = (categoryIdx: number, itemIdx: number) => {
    const key = `${categoryIdx}-${itemIdx}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0066FF] selection:text-white">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero Header */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0066FF]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-widest text-slate-300 mb-6">
              <HelpCircle className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>{f.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-sans text-white leading-[1.08]">
              {f.heroTitle}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {f.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {f.categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-300">
                <span className="text-xs font-mono font-bold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  SECTION 0{catIdx + 1}
                </span>
                <h2 className="text-2xl font-bold text-slate-950 font-sans tracking-tight">
                  {cat.name}
                </h2>
              </div>

              <div className="space-y-3">
                {cat.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = !!openItems[key];

                  return (
                    <div
                      key={itemIdx}
                      className="rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleItem(catIdx, itemIdx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                      >
                        <span className="text-base sm:text-lg font-bold text-slate-950 font-sans">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#0066FF] shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 font-light leading-relaxed border-t border-slate-100">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Need More Help Card */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-950 font-sans">
                {f.needMoreHelp}
              </h3>
              <p className="text-sm text-slate-600 font-light mt-1">
                Notre équipe est joignable 24h/24 et 7j/7 pour vous renseigner.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button
                variant="pillPrimary"
                onClick={() => setIsContactOpen(true)}
                className="w-full sm:w-auto text-xs px-6 h-11"
              >
                <span>{f.contactUsBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Button>

              <a
                href="https://wa.me/212654674726"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 h-11 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
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
