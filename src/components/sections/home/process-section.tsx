"use client";

import { motion, type Variants, cubicBezier } from "framer-motion";

import { ProcessSectionContent01 } from "@/contents/home-page-content";

import { AnimatedBadge } from "@/components/partials/animated-badge";

import { cn } from "@/lib/utils";

import { Plus } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

function ProcessSection() {
  return (
    <section className="py-4 layout-standard section-margin-standard flex flex-col gap-12">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <AnimatedBadge heading="Process That Works" />

        <h3 className="lg:text-6xl md:text-5xl text-3xl lg:max-w-4xl !leading-[1.2] font-medium tracking-tight text-heading font-heading uppercase">
          Our <span className="text-primary-hover font-bold">3</span> Step
          Process
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {ProcessSectionContent01.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.step}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={cn(
                "relative p-8 flex flex-col gap-6",
                "bg-white/5 backdrop-blur-xl",
                "transition-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] relative group",
                item.class
              )}
            >
              <Plus className="absolute top-0 left-0 -translate-x-[12px] -translate-y-[12px] transform transition-transform duration-300 ease-out group-hover:rotate-180" />
              <Plus className="absolute top-0 right-0 translate-x-[12px] -translate-y-[12px] transform transition-transform duration-300 ease-out group-hover:rotate-180" />
              <Plus className="absolute bottom-0 left-0 -translate-x-[12px] translate-y-[12px] transform transition-transform duration-300 ease-out group-hover:rotate-180" />
              <Plus className="absolute bottom-0 right-0 translate-x-[12px] translate-y-[12px] transform transition-transform duration-300 ease-out group-hover:rotate-180" />

              <div className="flex items-center justify-between relative z-10">
                <span className="text-sm tracking-widest text-primary-hover font-bold">
                  STEP {item.step}
                </span>

                <div className="h-10 w-10 rounded-full bg-muted border border-border backdrop-blur-md flex items-center justify-center">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="flex flex-col gap-3 relative z-10">
                <h4 className="text-3xl font-normal text-heading font-heading">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-foreground font-medium">
                  {item.description}
                </p>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(91,47,176,0.15),transparent)]" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default ProcessSection;
