"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { AnimatedBadge } from "@/components/partials/animated-badge";

import AppImg02 from "../../../../public/images/app-img-02.png";

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

const floatIn: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function AppSection() {
  return (
    <motion.section
      className="layout-standard lg:py-4 max-lg:mb-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-16 gap-8 overflow-hidden items-center">
        <motion.div
          className="col-span-1 relative overflow-hidden max-lg:flex max-lg:justify-center"
          variants={floatIn}
        >
          <Image
            src={AppImg02}
            alt="Nerual Rank Dashboard App"
            className="object-cover h-auto lg:w-[500px] md:w-[400px] w-[300px]"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 z-50 h-[30%] w-full"
            style={{
              background:
                "linear-gradient(to top, #0b0a10 0%, rgba(11,10,16,0.7) 40%, transparent 100%)",
            }}
          />
        </motion.div>

        <motion.div
          className="lg:col-span-2 col-span-1 flex flex-col lg:gap-8 gap-4"
          variants={container}
        >
          <motion.div variants={container} className="flex flex-col gap-4">
            <motion.div variants={fadeUp}>
              <AnimatedBadge heading="Modern Search & AI Discovery" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="lg:text-6xl md:text-5xl text-3xl !leading-[1.2] font-medium tracking-tight text-heading font-heading"
            >
              <span className="text-primary-hover font-semibold"> SEO</span>{" "}
              your Real Rankings.
            </motion.h1>
          </motion.div>

          <motion.div variants={container} className="flex flex-col gap-4">
            <motion.p
              variants={fadeUp}
              className="leading-relaxed lg:text-xl md:text-lg text-base font-medium"
            >
              Neural Rank is an AI-powered SEO platform designed to help brands
              understand search intent, optimize content intelligently, and
              compete in an evolving search landscape shaped by both Google and
              AI-driven discovery engines.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="leading-relaxed lg:text-xl md:text-lg text-base font-medium"
            >
              Instead of guesswork and outdated tactics, Neural Rank uses
              data-driven insights and machine intelligence to guide smarter SEO
              decisions—so teams can focus on sustainable growth, not short-term
              tricks.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AppSection;
