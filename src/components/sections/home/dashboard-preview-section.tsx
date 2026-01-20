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

import { DashboardPreviewSectionContent } from "@/contents/home-page-content";

import { AnimatedBadge } from "@/components/partials/animated-badge";
import { Button } from "@/components/ui/button";

import DashboardImage from "../../../../public/images/dashboard-img.png";
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

const DashboardPreviewSectionTab = (
  props: (typeof DashboardPreviewSectionContent)[number] &
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

function DashboardPreviewSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(
    DashboardPreviewSectionContent[0].backgroundPositionX,
  );
  const backgroundPositionY = useMotionValue(
    DashboardPreviewSectionContent[0].backgroundPositionY,
  );
  const backgroundSizeX = useMotionValue(
    DashboardPreviewSectionContent[0].backgroundSizeX,
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
        DashboardPreviewSectionContent[index].backgroundSizeX,
      ],
      animateOptions,
    );

    animate(
      backgroundPositionX,
      [
        backgroundPositionX.get(),
        DashboardPreviewSectionContent[index].backgroundPositionX,
      ],
      animateOptions,
    );

    animate(
      backgroundPositionY,
      [
        backgroundPositionY.get(),
        DashboardPreviewSectionContent[index].backgroundPositionY,
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
          <span className="text-primary-hover font-bold">Neural Rank</span>
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
          {DashboardPreviewSectionContent.map((tab, tabIndex) => (
            <DashboardPreviewSectionTab
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
              <motion.p
                variants={floatIn}
                className="flex items-center gap-2 md:text-base text-sm text-foreground"
              >
                <Check className="text-primary-hover flex-shrink-0" /> Spots
                weak pages before rankings drop
              </motion.p>
              <motion.p
                variants={floatIn}
                className="flex items-center gap-2 md:text-base text-sm text-foreground"
              >
                <Check className="text-primary-hover flex-shrink-0" /> Suggests
                high-converting content
              </motion.p>
              <motion.p
                variants={floatIn}
                className="flex items-center gap-2 md:text-base text-sm text-foreground"
              >
                <Check className="text-primary-hover flex-shrink-0" /> Flags
                underperforming ads early on
              </motion.p>
              <motion.p
                variants={floatIn}
                className="flex items-center gap-2 md:text-base text-sm text-foreground"
              >
                <Check className="text-primary-hover flex-shrink-0" /> Learns
                from patterns to predict next
              </motion.p>
            </motion.div>

            <Button className="px-8 mt-8 lg:w-fit max-md:w-full py-5 rounded-full text-sm md:text-base font-medium border-border text-secondary-foreground hover:bg-secondary-hover bg-secondary">
              Read More About This
            </Button>
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
                backgroundImage: `url(${DashboardImage.src})`,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default DashboardPreviewSection;
