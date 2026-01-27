"use client";

import { motion, Variants } from "framer-motion";

import { AboutToolSectionContent } from "@/contents/about-page-content";

import { AnimatedBadge } from "@/components/partials/animated-badge";

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

function AboutToolSection() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="layout-standard section-margin-standard section-padding-standard flex flex-col gap-12"
    >
      <motion.div
        variants={container}
        className="flex flex-col items-center justify-center gap-2 text-center"
      >
        <motion.div variants={fadeUp}>
          <AnimatedBadge heading="Neural Rank Tools" />
        </motion.div>

        <motion.h3
          variants={fadeUp}
          className="lg:text-6xl md:text-5xl text-3xl lg:max-w-5xl !leading-[1.2] font-medium tracking-tight text-heading font-heading uppercase mt-2"
        >
          <span className="font-bold bg-gradient-to-r from-primary-hover via-secondary to-primary bg-clip-text text-transparent">
            AI-Powered Tools
          </span>{" "}
          for Smarter Business Decisions
        </motion.h3>

        <motion.p
          variants={fadeUp}
          className="font-medium font-foreground text-sub-heading lg:max-w-[900px] lg:text-xl md:text-lg text-base"
        >
          Get instant access to a suite of AI tools built to optimize your
          marketing, uncover audience insights, and scale your business reach
          tremendously.
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        className="relative rounded-3xl overflow-hidden p-8 md:p-12"
        style={{
          backgroundImage: "url(/backgrounds/shape-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/40 backdrop-blur-sm pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {AboutToolSectionContent.map((feature, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md bg-white/10 border border-border rounded-2xl p-8 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <h3 className="lg:text-xl font-heading text-heading md:text-lg text-base">
                  {feature.title}
                </h3>
                <p className="leading-relaxed md:text-base font-medium text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default AboutToolSection;
