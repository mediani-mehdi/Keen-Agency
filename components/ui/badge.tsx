import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "accent" | "dark" | "glass";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default:
      "bg-blue-50 text-[#0066FF] border border-blue-200/60 shadow-sm",
    secondary:
      "bg-slate-100 text-slate-800 border border-slate-200",
    outline:
      "border border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300",
    accent:
      "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-sm",
    dark:
      "bg-neutral-900/90 text-white border border-neutral-800 backdrop-blur-md",
    glass:
      "bg-white/70 backdrop-blur-md border border-white/60 text-slate-900 shadow-sm",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
