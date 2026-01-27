"use client";

import Link from "next/link";

import { useSeoForm } from "@/contexts/seo-form-context";

import { ArrowRightIcon } from "lucide-react";

function AboutCtaSection() {
  const { openForm } = useSeoForm();
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "110vh" }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/backgrounds/office-bg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative h-[110vh] layout-standard flex flex-col gap-4 items-center justify-center">
        <h1 className="text-heading font-heading font-light md:text-7xl lg:max-w-[900px] text-4xl text-center">
          Born from chaos, Driven by AI, Backed by experts
        </h1>
        <p className="md:text-2xl text-base font-medium text-sub-heading lg:max-w-[1000px] text-center">
          Be part of a team shaping the next generation of AI-powered business
          tools.
        </p>

        <div className="flex items-center gap-4 justify-center mt-6">
          <div
            onClick={openForm}
            className="relative inline-block cursor-pointer"
          >
            <h1 className="dashboard-cta-button rounded-full px-6 py-3 text-background md:text-base font-medium text-sm">
              Get Started
            </h1>
          </div>

          <Link
            href={"/login"}
            className="flex items-center underline underline-offset-4 cursor-pointer text-heading font-heading md:text-base text-sm gap-2"
          >
            <ArrowRightIcon size={20} />
            <p>Login</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutCtaSection;
