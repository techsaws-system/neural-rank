"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

import { useNavigation } from "@/hooks/use-navigation";
import { useSeoForm } from "@/contexts/seo-form-context";

import { Button } from "@/components/ui/button";

import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

const rotatingText = [
  "Google Rankings",
  "AI Search Results",
  "Answer Engines",
  "Revenue Growth",
];

export default function CtaSection() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { navigateTo } = useNavigation();
  const { openForm } = useSeoForm();

  // Ambient glow animation (GSAP = side-effects → OK in useEffect)
  useEffect(() => {
    if (!glowRef.current) return;

    gsap.to(glowRef.current, {
      scale: 1.2,
      opacity: 0.6,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  // Rotating text interval (deterministic)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rotatingText.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="!section-padding-standard max-md:pt-0">
      <div className="layout-standard pb-16">
        <div className="relative overflow-hidden rounded-[32px] bg-black border border-border flex items-center md:py-[5rem] py-16 justify-center">
          <div
            ref={glowRef}
            className="absolute w-[700px] h-[700px] rounded-full bg-purple-600/30 blur-[140px]"
          />

          <svg
            className="absolute inset-0 w-full h-full opacity-[0.08]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl text-center px-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 md:text-sm text-xs font-heading text-heading mb-4">
              <Sparkles className="w-4 h-4 text-purple-400" />
              AI-Powered SEO Growth
            </div>

            <h2 className="lg:text-5xl md:text-4xl text-3xl !leading-[1.2] font-medium tracking-tight font-heading text-center bg-gradient-to-r from-primary-hover via-secondary to-primary bg-clip-text text-transparent">
              Show Up Where Decisions Are Made
            </h2>

            <div className="relative h-[36px] mt-2 mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0 text-purple-400 font-heading text-3xl"
                >
                  {rotatingText[activeIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-foreground font-medium max-w-2xl mx-auto md:text-lg text-base mb-10">
              We help brands dominate Google, AI answers, and modern search
              engines with data-driven SEO strategies that convert traffic into
              revenue.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                onClick={openForm}
                className="relative max-md:w-full px-8 py-5 rounded-full text-sm md:text-base font-medium bg-gradient-to-b from-[#2b135f] to-[#4a208a] shadow-[0_0_24px_rgba(140,69,255,0.6)] group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Free SEO Audit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>

                <span className="absolute inset-0 rounded-full border border-white/20" />
                <span className="absolute inset-0 rounded-full shadow-[0_0_14px_rgba(140,69,255,0.7)_inset]" />
              </Button>

              <Button
                onClick={() => navigateTo("/about")}
                className="px-8 max-md:w-full py-5 rounded-full text-sm md:text-base font-medium border-border text-secondary-foreground hover:bg-secondary-hover bg-secondary flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
