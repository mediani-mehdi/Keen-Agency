import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "glow" | "pillPrimary" | "pillOutline";
  size?: "default" | "sm" | "lg" | "icon" | "pill";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer";

    const variants = {
      default:
        "bg-[#0066FF] text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30",
      pillPrimary:
        "bg-slate-950 text-white hover:bg-slate-800 shadow-lg shadow-slate-950/15 hover:scale-[1.02] font-semibold",
      pillOutline:
        "border border-slate-300/80 bg-white/70 backdrop-blur-md text-slate-900 hover:bg-white hover:border-slate-400 shadow-xs font-semibold",
      glow:
        "bg-[#0066FF] text-white hover:bg-blue-600 shadow-[0_0_25px_rgba(0,102,255,0.35)] hover:shadow-[0_0_35px_rgba(0,102,255,0.55)] hover:scale-[1.02]",
      outline:
        "border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-900 hover:bg-slate-100 hover:border-slate-300",
      secondary:
        "bg-slate-100 text-slate-900 hover:bg-slate-200",
      ghost:
        "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
      link: "text-[#0066FF] underline-offset-4 hover:underline p-0 h-auto",
    };

    const sizes = {
      default: "h-11 px-6 py-2.5 rounded-full",
      sm: "h-9 px-4 text-xs rounded-full",
      lg: "h-13 px-8 text-base font-semibold rounded-full",
      pill: "h-12 px-7 text-sm font-semibold rounded-full",
      icon: "h-10 w-10 p-0 rounded-full",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
