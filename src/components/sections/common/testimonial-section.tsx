"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

import { TestimonialSectionContent } from "@/contents/common-sections-content";

import { AnimatedBadge } from "@/components/partials/animated-badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Play } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function TestimonialSection() {
  const items = [...TestimonialSectionContent, ...TestimonialSectionContent];
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="layout-standard section-margin-standard flex flex-col"
    >
      <motion.div
        variants={container}
        className="flex flex-col justify-center gap-2"
      >
        <motion.div variants={fadeUp}>
          <AnimatedBadge heading="Client Wins on Camera" />
        </motion.div>

        <motion.h3
          variants={fadeUp}
          className="lg:text-6xl md:text-5xl text-3xl lg:max-w-5xl !leading-[1.2] font-medium tracking-tight text-heading font-heading uppercase mt-2"
        >
          Our Success{" "}
          <span className="font-bold bg-gradient-to-r from-primary-hover via-secondary to-primary bg-clip-text text-transparent">
            Stories
          </span>
        </motion.h3>

        <motion.p
          variants={fadeUp}
          className="font-medium font-foreground text-sub-heading lg:max-w-[900px] lg:text-xl md:text-lg text-base"
        >
          Watch how business owners grow with Neural Rank. Real clients, real
          numbers, and real-time transformations powered by automation and smart
          strategy.
        </motion.p>
      </motion.div>

      <motion.div variants={container} className="w-full">
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          <motion.div
            className="flex gap-8 py-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {items.map((item, index) => (
              <Dialog key={`${item.id}-${index}`}>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    className="relative min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] h-[480px] rounded-3xl overflow-hidden cursor-pointer group"
                    onClick={() => setActiveVideo(item.videoUrl)}
                  >
                    <Image
                      src={item.thumbnail}
                      alt="Client story"
                      fill
                      className="object-cover"
                      priority={index < 4}
                    />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)] scale-90 transition-all duration-300 ease-out group-hover:scale-100 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                        <div className="absolute inset-[2px] rounded-full bg-white/10" />

                        <Play
                          className="relative z-10 ml-[2px] text-white drop-shadow-md"
                          size={22}
                        />
                      </div>
                    </div>
                  </motion.div>
                </DialogTrigger>

                <DialogContent className="border !border-border bg-card p-0 !rounded-3xl aspect-video w-full max-w-5xl">
                  <DialogTitle className="hidden" />
                  {activeVideo && (
                    <video
                      src={activeVideo}
                      controls
                      autoPlay
                      playsInline
                      className="h-full w-full rounded-3xl object-contain"
                    />
                  )}
                </DialogContent>
              </Dialog>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default TestimonialSection;
