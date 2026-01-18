"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  AchievementSectionContent01,
  AchievementSectionContent02,
} from "@/contents/home-page-content";

import { AnimatedBadge } from "@/components/partials/animated-badge";

import { cn } from "@/lib/utils";

const AchievementSection = () => {
  return (
    <section className="section-padding-standard layout-standard flex flex-col lg:gap-[6rem] gap-12">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-14 w-max"
        >
          {[...AchievementSectionContent01, ...AchievementSectionContent01].map(
            (logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="Partner logo"
                className="h-6 w-auto opacity-70 hover:opacity-100 transition"
              />
            )
          )}
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="col-span-1 p-2.5">
          <div className="flex flex-col gap-4 py-4">
            <AnimatedBadge
              heading="Thousands of Campaigns"
              className="w-fit border-border border-2 !text-xs"
            />

            <h3 className="lg:text-3xl md:text-2xl text-xl font-medium tracking-tight text-heading font-heading">
              Over <span className="text-primary-hover font-bold">2500+</span>{" "}
              Businesses Trust Neural Rank
            </h3>

            <p className="lg:text-lg md:text-base text-sm leading-relaxed font-medium">
              Every number here is real, earned, and growing every day because
              Neural Rank actually moves your business forward.
            </p>
          </div>
        </div>

        {AchievementSectionContent02.map((stat, index) => (
          <div
            key={index}
            className={cn(
              "col-span-1 p-2.5 min-h-[200px] rounded-2xl border border-border flex-center flex-col gap-1",
              stat.hideOnMobile && "max-lg:hidden"
            )}
          >
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-light font-heading text-heading tracking-tight">
              {stat.value}
            </h1>
            <p className="lg:text-lg md:text-base text-sm leading-relaxed font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementSection;
