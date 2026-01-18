"use client";

import { RefObject, useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

import { WordFlip } from "@/components/partials/word-flip";
import { Button } from "@/components/ui/button";

import StarsBg from "../../../../public/backgrounds/stars-bg.png";
import GridLinesBg from "../../../../public/backgrounds/grid-lines-bg.png";

const useRelativeMousePosition = <T extends HTMLElement>(
  to: RefObject<T | null>
) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (!to.current) return;

      const { top, left } = to.current.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [to, mouseX, mouseY]);

  return [mouseX, mouseY] as const;
};

function AICallToActionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section
      ref={sectionRef}
      className="layout-standard section-padding-standard"
    >
      <motion.div
        ref={borderedDivRef}
        className="border border-border md:py-24 py-12 max-lg:px-4 rounded-3xl overflow-hidden relative group"
        style={{
          backgroundPositionY,
          backgroundImage: `url(${StarsBg.src})`,
        }}
        animate={{ backgroundPositionX: StarsBg.width }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        <div
          className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_30%,black,transparent)] group-hover:opacity-0 transition duration-700"
          style={{ backgroundImage: `url(${GridLinesBg.src})` }}
        />

        <motion.div
          className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
          style={{ maskImage, backgroundImage: `url(${GridLinesBg.src})` }}
        />

        <div className="relative">
          <div className="flex-center flex-col gap-2.5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mx-auto text-center max-md:leading-[1.2] tracking-tighter font-medium font-heading text-white/80">
              Get your brand mentioned by
            </h2>
            <WordFlip className="text-4xl md:text-6xl lg:text-7xl mx-auto text-center tracking-tighter font-medium font-heading text-heading" />
          </div>

          <p className="text-foreground font-foreground text-base lg:max-w-lg md:text-lg lg:text-xl text-center px-4 mt-5 tracking-tight mx-auto">
            Reach millions of consumers who are using AI to discover new
            products and brands
          </p>

          <div className="flex-center md:flex-row flex-col max-md:w-full gap-4 mt-8">
            <Button className="relative max-md:w-full px-8 py-5 rounded-full text-sm md:text-base font-medium bg-gradient-to-b from-[#2b135f] to-[#4a208a] shadow-[0_0_24px_rgba(140,69,255,0.6)]">
              <span className="relative z-10">Start Optimizing with AI</span>

              <span className="absolute inset-0 rounded-full border border-white/20" />
              <span className="absolute inset-0 rounded-full shadow-[0_0_14px_rgba(140,69,255,0.7)_inset]" />
            </Button>

            <Button className="px-8 max-md:w-full py-5 rounded-full text-sm md:text-base font-medium border-border text-secondary-foreground hover:bg-secondary-hover bg-secondary">
              See How It Works
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AICallToActionSection;
