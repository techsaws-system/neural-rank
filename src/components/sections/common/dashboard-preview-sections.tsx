"use client";

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
  Variants,
} from "framer-motion";
import Image from "next/image";

import { DashboardPreviewSection01Content } from "@/contents/common-sections-content";

import { AnimatedBadge } from "@/components/partials/animated-badge";

import DashboardPreviewImg01 from "../../../../public/images/dashboard-preview-img-03.png";
import DashboardPreviewImg02 from "../../../../public/images/dashboard-preview-img-02.png";
import { Check } from "lucide-react";

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

const DashboardPreviewSection01Tab = (
  props: (typeof DashboardPreviewSection01Content)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean },
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);

    animate(yPercentage, [0, 0, 100, 100, 0], options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selected]);

  const handleTabHover = () => {
    if (!lottieRef.current) return;
    lottieRef.current.goToAndPlay(0, true);
  };

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      className="border border-border flex py-3 px-8 rounded-full gap-2.5 items-center lg:w-fit cursor-pointer relative bg-white/5 backdrop-blur-xl transition-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] group"
      key={props.title}
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          style={{ maskImage }}
          className="absolute inset-0 -m-px border border-primary-hover rounded-full"
        />
      )}

      <Lottie
        lottieRef={lottieRef}
        animationData={props.icon}
        loop={false}
        autoplay={false}
        className="h-5 w-5"
      />

      <div className="font-medium font-heading text-heading text-sm">
        {props.title}
      </div>
      {props.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-primary-hover text-primary-foreground font-semibold">
          new
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(91,47,176,0.15),transparent)] rounded-full" />
    </div>
  );
};

export function DashboardPreviewSection01() {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(
    DashboardPreviewSection01Content[0].backgroundPositionX,
  );
  const backgroundPositionY = useMotionValue(
    DashboardPreviewSection01Content[0].backgroundPositionY,
  );
  const backgroundSizeX = useMotionValue(
    DashboardPreviewSection01Content[0].backgroundSizeX,
  );

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [
        backgroundSizeX.get(),
        100,
        DashboardPreviewSection01Content[index].backgroundSizeX,
      ],
      animateOptions,
    );

    animate(
      backgroundPositionX,
      [
        backgroundPositionX.get(),
        DashboardPreviewSection01Content[index].backgroundPositionX,
      ],
      animateOptions,
    );

    animate(
      backgroundPositionY,
      [
        backgroundPositionY.get(),
        DashboardPreviewSection01Content[index].backgroundPositionY,
      ],
      animateOptions,
    );
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="layout-standard py-4 flex flex-col gap-12"
    >
      <motion.div
        variants={container}
        className="flex flex-col items-center justify-center gap-2 text-center"
      >
        <motion.div variants={fadeUp}>
          <AnimatedBadge heading="The Smart Way to Work" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="lg:text-6xl md:text-5xl text-3xl lg:max-w-5xl !leading-[1.2] font-medium tracking-tight text-heading font-heading uppercase mt-2"
        >
          What You Get with{" "}
          <span className="font-bold bg-gradient-to-r from-primary-hover via-secondary to-primary bg-clip-text text-transparent">
            Neural Rank
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-medium font-foreground text-sub-heading lg:text-xl md:text-lg text-base"
        >
          Smart tools that help you work faster, better, and smarter daily.
        </motion.p>
      </motion.div>

      <motion.div variants={container} className="flex flex-col gap-4 w-full">
        <motion.div className="lg:flex lg:justify-center lg:items-center gap-4 grid md:grid-cols-2 grid-cols-1">
          {DashboardPreviewSection01Content.map((tab, tabIndex) => (
            <DashboardPreviewSection01Tab
              {...tab}
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectTab(tabIndex)}
              key={tab.title}
            />
          ))}
        </motion.div>

        <motion.div
          variants={container}
          className="grid lg:grid-cols-2 grid-cols-1 mt-4 md:gap-8 gap-4"
        >
          <motion.div
            variants={container}
            className="flex flex-col lg:py-12 lg:order-1 order-2"
          >
            <motion.h1
              variants={floatIn}
              className="text-heading font-heading font-light lg:text-2xl md:text-xl text-lg"
            >
              AI-Powered Future Insights That Keep You Ahead
            </motion.h1>
            <motion.h2
              variants={floatIn}
              className="font-light font-foreground text-sub-heading lg:text-lg md:text-base text-sm max-md:mt-2"
            >
              Forecasts trends and campaign risks before they hit.
            </motion.h2>

            <motion.div
              variants={container}
              className="flex flex-col gap-4 mt-8"
            >
              <p className="flex items-center gap-2 md:text-base text-sm text-foreground">
                <Check className="text-primary-hover flex-shrink-0" /> Spots
                weak pages before rankings drop
              </p>
              <p className="flex items-center gap-2 md:text-base text-sm text-foreground">
                <Check className="text-primary-hover flex-shrink-0" /> Suggests
                high-converting content
              </p>
              <p className="flex items-center gap-2 md:text-base text-sm text-foreground">
                <Check className="text-primary-hover flex-shrink-0" /> Flags
                underperforming ads early on
              </p>
              <p className="flex items-center gap-2 md:text-base text-sm text-foreground">
                <Check className="text-primary-hover flex-shrink-0" /> Learns
                from patterns to predict next
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={floatIn}
            className="border border-border p-2.5 rounded-xl lg:order-2 order-1"
          >
            <motion.div
              className="aspect-video bg-cover border border-border rounded-lg"
              style={{
                backgroundPosition,
                backgroundSize,
                backgroundImage: `url(${DashboardPreviewImg01.src})`,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export function DashboardPreviewSection02() {
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
            src={DashboardPreviewImg02}
            alt="Nerual Rank Dashboard"
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
      </div>
    </motion.section>
  );
}
