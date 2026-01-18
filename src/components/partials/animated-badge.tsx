"use client";

import { motion } from "framer-motion";

import { AnimatedBadgeProps } from "@/types/components.partials-interfaces";

import { cn } from "@/lib/utils";

export function AnimatedBadge({ heading, className }: AnimatedBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden",
        "md:text-sm text-xs capitalize tracking-widest font-heading font-light",
        "text-heading backdrop-blur-2xl bg-background/60",
        "rounded-full border-2 border-border px-4 h-[30px]",
        className
      )}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
        initial={{ x: "-120%" }}
        animate={{ x: "120%" }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          ease: "easeInOut",
          repeatDelay: 1.5,
        }}
      />

      <span className="absolute inset-0 rounded-full shadow-[0_0_18px_rgba(140,69,255,0.35)]" />

      <span className="relative z-10 text-center">{heading}</span>
    </motion.div>
  );
}
