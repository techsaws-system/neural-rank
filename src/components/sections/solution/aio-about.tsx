"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type Card = {
  title: string;
  desc: string;
  span?: string;
};

function useMouseSpotlight() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({
        x: e.clientX - r.left,
        y: e.clientY - r.top,
      });
    };

    const onEnter = () => setActive(true);
    const onLeave = () => setActive(false);

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return { ref, pos, active };
}

function FeatureCard({ card }: { card: Card }) {
  const { ref, pos, active } = useMouseSpotlight();

  return (
    <motion.div
      ref={ref}
      className={[
        "group relative rounded-3xl p-10",
        "border border-[rgba(120,80,255,0.28)]",
        "backdrop-blur-2xl",
        "shadow-[0_0_55px_rgba(80,55,206,0.12)]",
        "transition-transform duration-300",
        "hover:scale-[1.015]",
        card.span ?? "",
      ].join(" ")}
      style={{
        // darker by ~50% via strong black layer
        background:
          "linear-gradient(135deg, rgba(80,55,206,0.55) 0%, rgba(0,0,0,0.88) 65%)",
      }}
      initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* MOVING GRADIENT BORDER (animated) */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl p-[1.25px] opacity-70 group-hover:opacity-100 transition-opacity">
        <div className="moving-border absolute inset-0 rounded-3xl" />
      </div>

      {/* APPLE-STYLE FROSTED INNER LAYER */}
      <div className="pointer-events-none absolute inset-[1px] rounded-3xl bg-[rgba(0,0,0,0.58)] backdrop-blur-2xl" />

      {/* SUBTLE AMBIENT PURPLE GLOW (animated) */}
      <motion.div
        className="pointer-events-none absolute -inset-10 rounded-[40px] opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(80,55,206,0.75), rgba(0,0,0,0) 70%)",
        }}
        animate={{ opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CURSOR SPOTLIGHT */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-200"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(380px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.12), rgba(80,55,206,0.22) 35%, rgba(0,0,0,0) 70%)`,
        }}
      />

      {/* GLASS NOISE TEXTURE */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.12] mix-blend-overlay noise" />

      {/* INNER HIGHLIGHT */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10">
        <h3 className="text-[32px] leading-[35px] font-[400] text-white mb-6">
          {card.title}
        </h3>
        <p className="text-[24px] leading-[32px] font-[400] text-gray-200">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function AioAbout() {
  const cards: Card[] = useMemo(
    () => [
      {
        title: "See Brand Mentions Inside AI Answers",
        desc: "Instantly track if ChatGPT, Gemini, and Perplexity cite your brand.",
        span: "md:col-span-2",
      },
      {
        title: "Monitor Sentiment in Real Time",
        desc: "Know if AI portrays your brand positively, negatively, or neutrally.",
      },
      {
        title: "Measure Share of Voice Across LLMs",
        desc: "Benchmark visibility against competitors inside AI-generated search results.",
      },
      {
        title: "Check Placement in AI Responses",
        desc: "See if you're mentioned first, last, or skipped entirely.",
      },
      {
        title: "Optimize Content for AI Discoverability",
        desc: "Understand what LLMs cite and adapt content to influence answers.",
      },
    ],
    [],
  );

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-24 md:py-32 overflow-hidden">
      {/* BACKGROUND AMBIENT BLOBS (subtle) */}
      <motion.div
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(closest-side, rgba(80,55,206,0.65), rgba(0,0,0,0) 70%)",
        }}
        animate={{ y: [0, 18, 0], opacity: [0.14, 0.24, 0.14] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* HERO */}
      <div className="max-w-4xl text-center relative z-10">
        <h1 className="text-[64px] leading-[75px] font-[400] text-white mb-12">
          What Becomes Possible <br />
          With LLM Visibility
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button className="px-8 py-6 rounded-full text-[18px] leading-[18px] font-[700] bg-black border border-white/10 text-[#24262a] hover:bg-neutral-900 transition">
            Learn More
          </Button>
        </div>
      </div>

      {/* GRID */}
      <div className="w-full max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <FeatureCard key={idx} card={card} />
          ))}
        </div>
      </div>

      {/* LOCAL STYLES (safe + scoped) */}
      <style jsx>{`
        .moving-border {
          background: conic-gradient(
            from 180deg,
            rgba(120, 80, 255, 0.05),
            rgba(120, 80, 255, 0.55),
            rgba(255, 255, 255, 0.12),
            rgba(120, 80, 255, 0.65),
            rgba(120, 80, 255, 0.05)
          );
          filter: blur(0.2px);
          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          padding: 1.25px;
          animation: spin 4.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .noise {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }
      `}</style>
    </section>
  );
}
