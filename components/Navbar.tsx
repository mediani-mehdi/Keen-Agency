"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 30);
  });

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.whyKeen, href: "#why-keen" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-2.5 bg-white/90 backdrop-blur-xl border-b border-slate-200/70 shadow-xs"
          : "py-4 bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Keen logo f.png */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`relative h-8 sm:h-9 w-28 sm:w-32 transition-all duration-300 group-hover:scale-105 ${scrolled ? "invert contrast-125" : ""}`}>
            <Image
              src="/Keen logo f.png"
              alt="Keen Agency Logo"
              fill
              unoptimized
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-md transition-all ${
            scrolled
              ? "bg-slate-100/90 border border-slate-200/70"
              : "bg-white/10 border border-white/20"
          }`}
        >
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                scrolled
                  ? "text-slate-700 hover:text-slate-950"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              {link.label}
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="navbar-hover"
                  className={`absolute inset-0 rounded-full shadow-xs -z-10 ${
                    scrolled ? "bg-white" : "bg-white/20"
                  }`}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Language Switcher & CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher Pill */}
          <div
            className={`flex items-center p-1 rounded-full border transition-all text-xs font-mono font-bold ${
              scrolled
                ? "bg-slate-100 border-slate-200/80 text-slate-700"
                : "bg-white/10 border-white/20 text-white"
            }`}
          >
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "fr"
                  ? scrolled
                    ? "bg-white text-[#0066FF] shadow-xs"
                    : "bg-white text-slate-950 shadow-xs"
                  : "hover:opacity-80 opacity-60"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? scrolled
                    ? "bg-white text-[#0066FF] shadow-xs"
                    : "bg-white text-slate-950 shadow-xs"
                  : "hover:opacity-80 opacity-60"
              }`}
            >
              EN
            </button>
          </div>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/212654674726"
            target="_blank"
            rel="noreferrer"
            className={`hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold px-4 h-9 rounded-full border transition-all ${
              scrolled
                ? "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                : "border-emerald-500/40 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/60"
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{t.nav.whatsapp}</span>
          </a>

          {/* Start Project CTA */}
          <Button
            variant={scrolled ? "pillPrimary" : "pillOutline"}
            size="sm"
            onClick={onOpenContact}
            className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-5 h-9 ${
              !scrolled ? "text-white border-white/30 bg-white/15 hover:bg-white/25" : ""
            }`}
          >
            <span>{t.nav.startProject}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full md:hidden transition-colors ${
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl"
        >
          <div className="flex flex-col space-y-3">
            {/* Mobile Logo & Language Switcher */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="relative h-7 w-28 invert contrast-125">
                <Image
                  src="/Keen logo f.png"
                  alt="Keen Agency Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
              <div className="flex items-center p-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold">
                <button
                  onClick={() => setLanguage("fr")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    language === "fr" ? "bg-white text-[#0066FF] shadow-xs" : "text-slate-600"
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    language === "en" ? "bg-white text-[#0066FF] shadow-xs" : "text-slate-600"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-slate-800 py-2 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <Button
                variant="pillPrimary"
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
              >
                {t.nav.startProject}
              </Button>
              <a
                href="https://wa.me/212654674726"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +212 654 67 47 26</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
