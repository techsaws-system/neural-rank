"use client";

import { useEffect, useRef } from "react";

import { BackgroundGridProps } from "@/types/components.partials-interfaces";

export default function BackgroundGrid({
  children,
  className = "",
  gridSize = 200,
  lineWidth = 4,
  opacity = 0.3,
}: BackgroundGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const lineRGBA = "rgba(255, 255, 255, 0.06)";

    const parseAlpha = (rgba: string) => {
      const match = rgba.match(
        /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([0-9.]+)\s*\)/i,
      );
      return match ? Math.min(1, Math.max(0, Number(match[1]))) : 0.06;
    };

    const baseAlpha = parseAlpha(lineRGBA);
    const finalAlpha = Math.min(1, Math.max(0, baseAlpha * opacity));

    const draw = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = parent.clientWidth;
      const h = parent.clientHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = `rgba(255, 255, 255, ${finalAlpha})`;

      const offsetX = 0;
      const offsetY = 0;

      ctx.beginPath();

      for (let x = offsetX; x <= w; x += gridSize) {
        const xx = Math.round(x) + 0.5;
        ctx.moveTo(xx, 0);
        ctx.lineTo(xx, h);
      }

      for (let y = offsetY; y <= h; y += gridSize) {
        const yy = Math.round(y) + 0.5;
        ctx.moveTo(0, yy);
        ctx.lineTo(w, yy);
      }

      ctx.stroke();
    };

    const ro = new ResizeObserver(() => draw());
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    draw();
    window.addEventListener("resize", draw);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", draw);
    };
  }, [gridSize, lineWidth, opacity]);

  return (
    <main className={`relative w-full bg-[#0b0a10] ${className}`}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      />
      <div className="relative z-10">{children}</div>
    </main>
  );
}
