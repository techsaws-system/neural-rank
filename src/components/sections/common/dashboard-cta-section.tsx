"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";

import { useSeoForm } from "@/contexts/seo-form-context";

import { AnimatedBadge } from "@/components/partials/animated-badge";

import { ArrowRightIcon, InspectIcon, Rocket } from "lucide-react";
import DashboardPreviewImg01 from "../../../../public/images/dashboard-preview-img-01.png";

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

function DashboardCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const { openForm } = useSeoForm();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftCardY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rightCardY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 1, 0.96],
  );
  const imageRotateX = useTransform(scrollYProgress, [0, 1], [6, -6]);

  return (
    <section
      ref={sectionRef}
      className="layout-standard md:my-12 max-md:mt-8 max-md:mb-4 relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-50 h-[30%] w-full"
        style={{
          background:
            "linear-gradient(to top, #0b0a10 0%, rgba(11,10,16,0.7) 40%, transparent 100%)",
        }}
      />

      <motion.div
        variants={container}
        className="flex flex-col items-center justify-center max-lg:mb-12 gap-2 text-center"
      >
        <motion.div variants={fadeUp}>
          <AnimatedBadge heading="AI That Works for You" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="lg:text-6xl md:text-5xl text-3xl lg:max-w-4xl !leading-[1.2] font-medium tracking-tight font-heading uppercase mt-2 text-center bg-gradient-to-r from-primary-hover via-secondary to-primary bg-clip-text text-transparent"
        >
          Run Your Business Smarter
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-medium lg:max-w-5xl font-foreground text-sub-heading lg:text-xl md:text-lg text-base"
        >
          Neural Rank gives you real-time insights into your local SEO
          campaigns. Track performance, optimize visibility, and see what’s
          working—anytime, without juggling multiple tools.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex items-center gap-4 justify-center mt-6"
        >
          <div
            onClick={openForm}
            className="relative inline-block cursor-pointer"
          >
            <h1 className="dashboard-cta-button rounded-full px-6 py-3 text-background md:text-base font-medium text-sm">
              Get Started
            </h1>
          </div>

          <Link
            href={"/"}
            className="flex items-center underline underline-offset-4 cursor-pointer text-heading font-heading md:text-base text-sm gap-2"
          >
            <ArrowRightIcon size={20} />
            <p>Login</p>
          </Link>
        </motion.div>
      </motion.div>

      <div className="relative z-20 w-full flex flex-col lg:flex-row items-center lg:justify-center gap-4">
        <motion.div
          style={{ y: mounted ? leftCardY : 0 }}
          className="perspective-[1000px] max-lg:hidden"
        >
          <div className="relative bg-white/5 backdrop-blur-xl border border-border rounded-3xl h-[200px] w-[400px] flex flex-col gap-4 px-4 py-8">
            <Rocket size={40} />
            <p className="text-2xl font-normal text-heading font-heading">
              4x Increase in Lead Conversions.
            </p>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(91,47,176,0.15),transparent)]" />
          </div>
        </motion.div>

        <div className="lg:hidden flex md:flex-row flex-col md:gap-6 gap-4">
          <motion.div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-border rounded-3xl w-full flex flex-col md:gap-4 gap-2 px-4 md:py-8 py-12 max-md:text-center items-center text-heading">
              <Rocket size={40} className="max-md:h-[35px] max-md:w-[35px]" />
              <p className="md:text-xl text-lg font-medium font-heading">
                4x Increase in Lead Conversions
              </p>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(91,47,176,0.15),transparent)]" />
            </div>
          </motion.div>

          <motion.div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-border rounded-3xl w-full flex flex-col md:gap-4 gap-2 px-4 md:py-8 py-12 max-md:text-center items-center text-heading">
              <InspectIcon
                size={40}
                className="max-md:h-[35px] max-md:w-[35px]"
              />
              <p className="md:text-xl text-lg font-medium font-heading">
                98% Accurate Predictive Insights
              </p>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(91,47,176,0.15),transparent)]" />
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{
            y: mounted ? imageY : 0,
            scale: mounted ? imageScale : 1,
            rotateX: mounted ? imageRotateX : 0,
          }}
          className="relative perspective-[1200px]"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] blur-2xl bg-black/40" />

          <Image
            src={DashboardPreviewImg01}
            alt="Neural Rank Dashboard"
            priority
            className="w-[500px] h-auto flex-shrink-0 rounded-[28px] drop-shadow-[0_40px_90px_rgba(0,0,0,0.65)]"
          />
        </motion.div>

        <motion.div
          style={{ y: mounted ? rightCardY : 0 }}
          className="perspective-[1000px] max-lg:hidden"
        >
          <div className="relative bg-white/5 backdrop-blur-xl border border-border rounded-3xl h-[200px] w-[400px] flex flex-col gap-4 px-4 py-8">
            <InspectIcon size={40} />
            <p className="text-2xl font-normal text-heading font-heading">
              98% Accurate Predictive Insights
            </p>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(91,47,176,0.15),transparent)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DashboardCTASection;
