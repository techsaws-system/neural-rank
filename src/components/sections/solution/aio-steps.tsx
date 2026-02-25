"use client";

import { Button } from "@/components/ui/button";

export default function AioSteps() {
  const steps = [
    {
      number: "01",
      title: "Select Your Brand + Competitors",
      desc: "Add your brand name, domain, and competitor set you want to monitor.",
    },
    {
      number: "02",
      title: "Choose LLM Sources",
      desc: "Track ChatGPT, Gemini, and Perplexity responses in real time.",
    },
    {
      number: "03",
      title: "View Insights, Trends, and Alerts",
      desc: "See mentions, sentiment, share of voice, and competitor comparisons.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[64px] leading-[75px] font-[400] mb-6">
            Effortless to Use in <br />3 Simple Steps
          </h2>

          <p className="text-[22px] leading-[32px] text-gray-400 max-w-3xl mx-auto">
            No matter your growth stage, OTTO has a plan designed to keep your
            SEO live, powerful, and in your control.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative rounded-3xl p-10 flex flex-col items-center text-center
              bg-[rgba(0,0,0,0.65)] backdrop-blur-2xl
              border border-[rgba(120,80,255,0.28)]
              shadow-[0_0_40px_rgba(80,55,206,0.12)]
              transition duration-300 hover:scale-[1.02]"
            >
              {/* Ambient Glow */}
              <div className="absolute -bottom-8 w-40 h-24 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />

              {/* Number Badge */}
              <div
                className="mb-6 h-14 w-14 rounded-full flex items-center justify-center
                text-black text-xl font-bold
                bg-gradient-to-br from-purple-300 to-purple-500"
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-[30px] leading-[38px] font-[400] mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[19px] leading-[28px] text-gray-400 mb-8 max-w-xs">
                {step.desc}
              </p>

              {/* CTA */}
              <Button className="px-7 py-3 rounded-full text-[18px] font-[700] bg-[#00FFD4] text-[#24262a]">
                Start Tracking Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
