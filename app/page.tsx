"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ImpactSection } from "@/components/ImpactSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { ContactDialog } from "@/components/ContactDialog";
import { ReelModal } from "@/components/ReelModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isReelOpen, setIsReelOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const handleOpenReel = () => setIsReelOpen(true);
  const handleCloseReel = () => setIsReelOpen(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0066FF] selection:text-white">
      {/* Scroll-aware Navigation with Language Switcher */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Hero Section with GSAP Load Sequence & Background */}
      <HeroSection
        onOpenContact={handleOpenContact}
        onOpenReel={handleOpenReel}
      />

      {/* Infinite Velocity Marquee */}
      <MarqueeSection />

      {/* Flagship Capabilities ("What We Do / Ce que nous faisons") */}
      <ServicesSection onSelectService={handleOpenContact} />

      {/* Portfolio Showcase with Dynamic Case Studies */}
      <PortfolioSection onOpenContact={handleOpenContact} />

      {/* 6-Stage Methodology */}
      <ProcessSection onOpenContact={handleOpenContact} />

      {/* Client Impact & 4 Pillars */}
      <ImpactSection />

      {/* Final Conversion CTA with 24/7 Dedicated Support Banner */}
      <CtaSection onOpenContact={handleOpenContact} />

      {/* Agency Footer */}
      <Footer />

      {/* Interactive Contact Modal with Confetti */}
      <ContactDialog
        isOpen={isContactOpen}
        onClose={handleCloseContact}
      />

      {/* Cinematic Agency Showreel Player Modal */}
      <ReelModal
        isOpen={isReelOpen}
        onClose={handleCloseReel}
        onOpenContact={handleOpenContact}
      />
    </main>
  );
}
