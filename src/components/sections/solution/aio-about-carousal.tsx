"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AioStages() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = 760;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  // AUTO SCROLL
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 760, behavior: "smooth" });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const stages = [
    {
      number: "01",
      title: "Cross-LLM Monitoring",
      desc: "See your presence across ChatGPT, Gemini, Perplexity, and SearchGPT, and whether you’re mentioned first, last, or buried in the middle of responses.",
    },
    {
      number: "02",
      title: "Sentiment Analysis",
      desc: "Understand whether AI mentions portray you positively, neutrally, or negatively.",
    },
    {
      number: "03",
      title: "Share of Voice Tracking",
      desc: "Measure how frequently your brand appears compared to competitors in AI-generated results.",
    },
    {
      number: "04",
      title: "Placement Intelligence",
      desc: "Track ranking positions within AI responses to understand visibility hierarchy.",
    },
    {
      number: "05",
      title: "Content Optimization",
      desc: "Refine content strategy based on how LLMs cite and reference your brand.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-32">
      {/* SAME CONTAINER STRUCTURE AS LAST SECTION */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-[64px] leading-[75px] font-[400] mb-8">
            The 5-Stage to Analyze <br />
            and Increase Visibility
          </h2>

          <p className="text-[22px] leading-[32px] text-gray-400 max-w-3xl mx-auto">
            As users shift to AI answers, traditional SEO tools miss half the
            story. LLM Visibility shows if your brand appears, where it ranks in
            queries, the sentiment, and your share of voice.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Fades (inside container now) */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-black p-3 rounded-full"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-black p-3 rounded-full"
          >
            <ChevronRight size={22} />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {stages.map((stage, i) => (
              <div
                key={i}
                className="snap-start min-w-[720px] max-w-[720px] rounded-3xl p-14 flex flex-col justify-between bg-[rgba(0,0,0,0.65)] backdrop-blur-2xl border border-white/10"
              >
                <div>
                  <div className="flex items-center gap-6 mb-8">
                    <div
                      className="h-16 w-16 rounded-full flex items-center justify-center text-black text-2xl font-bold bg-gradient-to-br from-purple-300 to-purple-500"
                    >
                      {stage.number}
                    </div>

                    <h3 className="text-[40px] font-[400] leading-tight">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="text-[22px] leading-[32px] text-gray-400 max-w-[580px]">
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-12">
                  <Button className="px-8 py-4 rounded-full text-[18px] font-[700] bg-[#00FFD4] text-[#24262a]">
                    Start for Free
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
