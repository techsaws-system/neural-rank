"use client";

import { motion, Variants } from "framer-motion";

import { AnimatedBadge } from "@/components/partials/animated-badge";
import VideoCarousel from "@/components/partials/video-carousel";

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
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="layout-standard section-margin-standard flex flex-col gap-4"
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
          <span className="text-primary-hover font-bold">Stories</span>
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
        <VideoCarousel />
      </motion.div>
    </motion.section>
  );
}

export default TestimonialSection;
