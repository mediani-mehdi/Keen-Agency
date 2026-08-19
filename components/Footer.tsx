"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { language, setLanguage, t } = useLanguage();
  const f = t.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Swiss System Bar */}
        <div className="flex flex-wrap items-center justify-between pb-8 border-b border-slate-800 gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-4">
            <span className="text-white font-bold">{f.system}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {f.status}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>{f.location}</span>
            <span>•</span>
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-full px-2 py-0.5">
              <button
                onClick={() => setLanguage("fr")}
                className={`px-1.5 py-0.5 text-[10px] rounded font-bold cursor-pointer ${
                  language === "fr" ? "bg-[#0066FF] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                FR
              </button>
              <span className="text-slate-600">/</span>
              <button
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 text-[10px] rounded font-bold cursor-pointer ${
                  language === "en" ? "bg-[#0066FF] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-slate-800">
          {/* Brand Col with Keen logo f.png */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-36">
                <Image
                  src="/Keen logo f.png"
                  alt="Keen Agency Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-light">
              {f.desc}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://wa.me/212654674726"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-xs font-mono text-emerald-300 hover:bg-emerald-900"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +212 654 67 47 26</span>
              </a>
            </div>
          </div>

          {/* Nav Col 1: Features & Capabilities */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              {f.featuresHeader}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-light">
              <li><Link href="/#services" className="hover:text-[#0066FF] transition-colors">[01] Branding & Design</Link></li>
              <li><Link href="/#services" className="hover:text-[#0066FF] transition-colors">[02] Digital Marketing</Link></li>
              <li><Link href="/#services" className="hover:text-[#0066FF] transition-colors">[03] Content Creation</Link></li>
              <li><Link href="/#services" className="hover:text-[#0066FF] transition-colors">[04] Web Design & Dev</Link></li>
              <li><Link href="/#services" className="hover:text-[#0066FF] transition-colors">[05] Strategy & Consulting</Link></li>
            </ul>
          </div>

          {/* Nav Col 2: Navigation & Company Pages */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              {f.pagesHeader}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-light">
              <li><Link href="/about" className="hover:text-[#0066FF] transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/faq" className="hover:text-[#0066FF] transition-colors">{t.nav.faq}</Link></li>
              <li><Link href="/#portfolio" className="hover:text-[#0066FF] transition-colors">{t.nav.portfolio}</Link></li>
              <li><Link href="/#process" className="hover:text-[#0066FF] transition-colors">{t.nav.process}</Link></li>
            </ul>
          </div>

          {/* Nav Col 3: Direct Contact & Back to Top */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between items-start md:items-end">
            <div className="w-full md:text-right">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                {f.contactHeader}
              </h4>
              <ul className="space-y-2 text-xs font-mono text-slate-300 font-light">
                <li><a href="mailto:info@keenagency.org" className="hover:text-cyan-400 transition-colors">info@keenagency.org</a></li>
                <li><a href="mailto:digitalkeenagency@gmail.com" className="hover:text-cyan-400 transition-colors">digitalkeenagency@gmail.com</a></li>
                <li><a href="tel:+212654674726" className="hover:text-cyan-400 transition-colors">+212 654 67 47 26</a></li>
                <li><a href="tel:+212718366036" className="hover:text-cyan-400 transition-colors">+212 718 36 60 36</a></li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer group mt-4"
            >
              <span>{f.backToTop}</span>
              <ArrowUp className="w-4 h-4 text-[#0066FF] transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar with Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} KEEN AGENCY DIGITAL. {f.allRights}
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">{f.privacy}</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">{f.refund}</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">{f.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
