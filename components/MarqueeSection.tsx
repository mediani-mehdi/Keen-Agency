"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function MarqueeSection() {
  const { t } = useLanguage();
  const items = t.marquee;

  return (
    <div className="relative py-4 bg-slate-950 text-white overflow-hidden border-y border-white/10 select-none font-sans">
      <div className="flex w-max">
        {/* Track 1 */}
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{
            repeat: Infinity,
            duration: 26,
            ease: "linear",
          }}
          className="flex items-center gap-12 pr-12"
        >
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-5 whitespace-nowrap">
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/50">
                {item.code}
              </span>
              <span className="text-sm font-bold tracking-tight uppercase text-white font-sans">
                {item.text}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                [{item.tag}]
              </span>
              <span className="text-slate-600 font-mono text-xs">/</span>
            </div>
          ))}
        </motion.div>

        {/* Track 2 */}
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{
            repeat: Infinity,
            duration: 26,
            ease: "linear",
          }}
          className="flex items-center gap-12 pr-12"
        >
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-5 whitespace-nowrap">
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/50">
                {item.code}
              </span>
              <span className="text-sm font-bold tracking-tight uppercase text-white font-sans">
                {item.text}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                [{item.tag}]
              </span>
              <span className="text-slate-600 font-mono text-xs">/</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
