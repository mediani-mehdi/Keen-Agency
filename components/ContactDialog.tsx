"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, CheckCircle2, Zap, ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const { t } = useLanguage();
  const cm = t.contactModal;

  const [step, setStep] = useState<"form" | "success">("form");
  const [selectedService, setSelectedService] = useState<string>(cm.servicesList[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep("success");
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0066FF", "#00E5FF", "#3B82F6", "#0F172A"],
      });
    }, 1000);
  };

  const handleReset = () => {
    setStep("form");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl border border-slate-200 p-6 sm:p-8 z-10 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {step === "form" ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-2">
                  <Zap className="w-4 h-4" /> {cm.badge}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight font-sans">
                  {cm.title}
                </h2>
                <p className="text-sm text-slate-600 mt-1 mb-6 font-light">
                  {cm.desc}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      {cm.serviceLabel}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {cm.servicesList.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setSelectedService(srv)}
                          className={`px-3 py-2 text-xs rounded-xl border text-left transition-all ${
                            selectedService === srv
                              ? "bg-blue-50 border-[#0066FF] text-[#0066FF] font-semibold shadow-xs"
                              : "border-slate-200 text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {cm.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {cm.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      {cm.phoneLabel}
                    </label>
                    <input
                      type="text"
                      placeholder="+212 600 00 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      {cm.messageLabel}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={cm.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <Button
                      type="submit"
                      variant="pillPrimary"
                      disabled={isSubmitting}
                      className="flex-1 h-12 text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          {cm.submittingBtn}
                        </span>
                      ) : (
                        <>
                          <span>{cm.submitBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>

                    <a
                      href="https://wa.me/212654674726"
                      target="_blank"
                      rel="noreferrer"
                      className="h-12 px-6 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{cm.whatsappDirect}</span>
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-[#0066FF] mb-4 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 font-sans">
                  {cm.successTitle}
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed font-light">
                  {cm.successDescPre}<span className="font-semibold text-slate-950">{formData.name || "partner"}</span>{cm.successDescMid}<span className="font-medium text-[#0066FF]">{formData.email}</span>{cm.successDescPost}
                </p>
                <div className="mt-8 flex justify-center">
                  <Button
                    variant="pillPrimary"
                    onClick={handleReset}
                    className="px-8 py-2.5"
                  >
                    {cm.backBtn}
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
