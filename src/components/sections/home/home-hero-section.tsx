"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import StarsBg from "../../../../public/backgrounds/stars-bg.png";
import { Button } from "@/components/ui/button";
import { AnimatedBadge } from "@/components/partials/animated-badge";

function HomeHeroSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="section-padding-standard flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${StarsBg.src})`, backgroundPositionY }}
      animate={{ backgroundPositionX: StarsBg.width }}
      transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" />

      <div className="absolute inset-0 bg-black/20 z-[20]" />

      {/* Start Planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]" />
      {/* End Planet */}

      {/* Start Ring 1 */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute w-[344px] h-[344px] md:h-[580px] md:w-[580px] opacity-20 rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute h-5 w-5 border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full" />
        </div>
      </motion.div>
      {/* End Ring 1 */}

      {/* Start Ring 2 */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "-1turn" }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      />
      {/* End Ring 2 */}

      {/* Start Ring 3 */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full opacity-20 border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      {/* End Ring 3 */}

      <div className="layout-standard section-margin-standard relative z-30 flex-center flex-col gap-4">
        <AnimatedBadge heading="Built for Modern Search & AI Discovery" />

        <h1 className="lg:text-[7vw] text-[9vw] leading-[1.1] font-semibold tracking-tight bg-[radial-gradient(120%_120%_at_top_left,#ffffff_20%,#e9ddff_45%,rgba(140,69,255,0.6)_75%)] text-transparent bg-clip-text text-center uppercase">
          Rank Smarter
          <br />
          with AI-Driven SEO
        </h1>

        <p className="lg:max-w-4xl mx-auto text-base md:text-lg lg:text-xl font-foreground text-foreground text-center leading-relaxed">
          Neural Rank uses artificial intelligence to understand search intent,
          optimize content, and drive sustainable rankings across Google and
          AI-powered search engines.
        </p>

        <div className="flex-center md:flex-row flex-col max-md:w-full gap-4 mt-6">
          <Button className="relative max-md:w-full px-8 py-5 rounded-full text-sm md:text-base font-medium bg-gradient-to-b from-[#2b135f] to-[#4a208a] shadow-[0_0_24px_rgba(140,69,255,0.6)]">
            <span className="relative z-10">Start Optimizing with AI</span>

            <span className="absolute inset-0 rounded-full border border-white/20" />
            <span className="absolute inset-0 rounded-full shadow-[0_0_14px_rgba(140,69,255,0.7)_inset]" />
          </Button>

          <Button className="px-8 max-md:w-full py-5 rounded-full text-sm md:text-base font-medium border-border text-secondary-foreground hover:bg-secondary-hover bg-secondary">
            See How It Works
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

export default HomeHeroSection;
