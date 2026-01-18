"use client";

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

import { DashboardPreviewSectionContent } from "@/contents/home-page-content";

import DashboardImage from "../../../../public/images/dashboard-img.png";

const DashboardPreviewSectionTab = (
  props: (typeof DashboardPreviewSectionContent)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
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
      className="border border-border flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 cursor-pointer relative bg-white/5 backdrop-blur-xl transition-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] group"
      key={props.title}
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          style={{ maskImage }}
          className="absolute inset-0 -m-px border border-primary-hover rounded-xl"
        />
      )}
      <div className="h-12 w-12 border border-border bg-muted rounded-lg inline-flex justify-center items-center">
        <Lottie
          lottieRef={lottieRef}
          animationData={props.icon}
          loop={false}
          autoplay={false}
          className="h-5 w-5"
        />
      </div>
      <div className="font-medium font-heading text-heading text-sm">
        {props.title}
      </div>
      {props.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-primary-hover text-primary-foreground font-semibold">
          new
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(91,47,176,0.15),transparent)]" />
    </div>
  );
};

function DashboardPreviewSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(
    DashboardPreviewSectionContent[0].backgroundPositionX
  );
  const backgroundPositionY = useMotionValue(
    DashboardPreviewSectionContent[0].backgroundPositionY
  );
  const backgroundSizeX = useMotionValue(
    DashboardPreviewSectionContent[0].backgroundSizeX
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
      animateOptions
    );

    animate(
      backgroundPositionX,
      [
        backgroundPositionX.get(),
        DashboardPreviewSectionContent[index].backgroundPositionX,
      ],
      animateOptions
    );

    animate(
      backgroundPositionY,
      [
        backgroundPositionY.get(),
        DashboardPreviewSectionContent[index].backgroundPositionY,
      ],
      animateOptions
    );
  };
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-4">
        {DashboardPreviewSectionContent.map((tab, tabIndex) => (
          <DashboardPreviewSectionTab
            {...tab}
            selected={selectedTab === tabIndex}
            onClick={() => handleSelectTab(tabIndex)}
            key={tab.title}
          />
        ))}
      </div>

      <div className="border border-border p-2.5 rounded-xl lg:mt-16 mt-8">
        <motion.div
          className="aspect-video bg-cover border border-border rounded-lg"
          style={{
            backgroundPosition,
            backgroundSize,
            backgroundImage: `url(${DashboardImage.src})`,
          }}
        />
      </div>
    </section>
  );
}

export default DashboardPreviewSection;
