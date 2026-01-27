"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { AnimatedBadge } from "@/components/partials/animated-badge";

import TeamImg01 from "../../../../public/images/team/team-img-02.png";
import TeamImg02 from "../../../../public/images/team/team-img-03.png";
import TeamImg03 from "../../../../public/images/team/team-img-05.png";
import TeamImg04 from "../../../../public/images/team/team-img-07.png";
import TeamImg05 from "../../../../public/images/team/team-img-08.png";
import TeamImg06 from "../../../../public/images/team/team-img-01.png";

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

export function AboutContentSection01() {
  return (
    <motion.section
      className="layout-standard py-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8 overflow-hidden items-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.div
        className="col-span-1 flex flex-col lg:gap-8 gap-4"
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
            <span className="font-bold bg-gradient-to-r from-primary-hover via-secondary to-primary bg-clip-text text-transparent">
              {" "}
              SEO
            </span>{" "}
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

      <motion.div
        className="col-span-1 grid grid-col-4 md:gap-4 gap-2"
        variants={container}
      >
        <motion.div
          variants={floatIn}
          className="w-full md:h-[350px] h-[250px] p-2.5 border-border border-2 rounded-xl col-span-4 flex-center"
        >
          <Image
            src={TeamImg01}
            alt="Our Team"
            className="object-cover h-full w-full will-change-transform object-left-top rounded-lg bg-center"
          />
        </motion.div>

        <motion.div
          variants={floatIn}
          className="col-span-2 w-full md:h-[250px] h-[150px] p-2.5 border-border border-2 rounded-xl flex-center"
        >
          <Image
            src={TeamImg02}
            alt="Our Team"
            className="object-cover h-full w-full will-change-transform object-left-top rounded-lg bg-center"
          />
        </motion.div>

        <motion.div
          variants={floatIn}
          className="col-span-2 w-full md:h-[250px] h-[150px] p-2.5 border-border border-2 rounded-xl flex-center"
        >
          <Image
            src={TeamImg03}
            alt="Our Team"
            className="object-cover h-full w-full will-change-transform object-left-top rounded-lg bg-center"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export function AboutContentSection02() {
  return (
    <motion.section
      className="layout-standard py-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8 overflow-hidden items-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.div
        className="col-span-1 grid grid-col-4 md:gap-4 gap-2"
        variants={container}
      >
        <motion.div
          variants={floatIn}
          className="w-full md:h-[350px] h-[250px] p-2.5 border-border border-2 rounded-xl col-span-4 flex-center"
        >
          <Image
            src={TeamImg04}
            alt="Our Team"
            className="object-cover h-full w-full will-change-transform object-left-top rounded-lg bg-center"
          />
        </motion.div>

        <motion.div
          variants={floatIn}
          className="col-span-2 w-full md:h-[250px] h-[150px] p-2.5 border-border border-2 rounded-xl flex-center"
        >
          <Image
            src={TeamImg05}
            alt="Our Team"
            className="object-cover h-full w-full will-change-transform object-left-top rounded-lg bg-center"
          />
        </motion.div>

        <motion.div
          variants={floatIn}
          className="col-span-2 w-full md:h-[250px] h-[150px] p-2.5 border-border border-2 rounded-xl flex-center"
        >
          <Image
            src={TeamImg06}
            alt="Our Team"
            className="object-cover h-full w-full will-change-transform object-left-top rounded-lg bg-center"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="col-span-1 flex flex-col lg:gap-8 gap-4"
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
            <span className="font-bold bg-gradient-to-r from-primary-hover via-secondary to-primary bg-clip-text text-transparent">
              {" "}
              SEO
            </span>{" "}
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
    </motion.section>
  );
}
