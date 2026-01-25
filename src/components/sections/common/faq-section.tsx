"use client";

import { motion, Variants } from "framer-motion";

import { FaqSectionContent } from "@/contents/common-sections-content";

import { AnimatedBadge } from "@/components/partials/animated-badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Plus } from "lucide-react";

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

function FaqSection() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="layout-standard pb-24 flex flex-col gap-12"
    >
      <motion.div
        variants={container}
        className="flex flex-col items-center justify-center gap-2 text-center"
      >
        <motion.div variants={fadeUp}>
          <AnimatedBadge heading="Smart Moves Start with AI Clarity" />
        </motion.div>

        <motion.h3
          variants={fadeUp}
          className="lg:text-6xl md:text-5xl text-3xl lg:max-w-5xl !leading-[1.2] font-medium tracking-tight text-heading font-heading uppercase mt-2"
        >
          <span className="font-bold bg-gradient-to-r from-primary-hover via-secondary to-primary bg-clip-text text-transparent">
            Frequently
          </span>{" "}
          Asked Questions
        </motion.h3>

        <motion.p
          variants={fadeUp}
          className="font-medium font-foreground text-sub-heading lg:max-w-[900px] lg:text-xl md:text-lg text-base"
        >
          Quick answers to help you make the most of Nerual Rank
        </motion.p>
      </motion.div>

      <motion.div variants={container}>
        <Accordion
          type="single"
          collapsible
          className="lg:max-w-[900px] mx-auto"
        >
          {FaqSectionContent.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none"
            >
              <AccordionTrigger className="flex items-center border-none group">
                <div className="flex items-start justify-start gap-2 text-heading font-light">
                  <Plus
                    size={18}
                    className="flex-shrink-0 mt-1 group-hover:text-sub-heading"
                  />

                  <span className="md:text-lg text-base font-heading group-hover:text-sub-heading">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="md:text-base text-sm text-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
}

export default FaqSection;
