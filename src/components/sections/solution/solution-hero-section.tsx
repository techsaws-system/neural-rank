"use client";

import Image from "next/image";

import { useNavigation } from "@/hooks/use-navigation";
import { useSeoForm } from "@/contexts/seo-form-context";

import { Button } from "@/components/ui/button";

import { ArrowRight, Headset } from "lucide-react";
import UsBankLogo from "../../../../public/logos/us-bank-logo.png";
import GrabLogo from "../../../../public/logos/grab-logo.svg";
import ZapierLogo from "../../../../public/logos/zapier-logo.png";
import IndeedLogo from "../../../../public/logos/indeed-logo.png";

function SolutionHeroSection() {
  const { navigateTo } = useNavigation();
  const { openForm } = useSeoForm();

  return (
    <div className="lg:pt-[100px] pt-[80px]">
      <div className="relative flex-center flex-col text-center section-padding-standard layout-standard">
        <p className="text-sm font-medium text-sub-heading font-heading mb-6">
          Neural Rank for AEO Teams
        </p>

        <h1 className="text-heading font-heading font-light md:text-6xl text-3xl lg:max-w-[800px] text-center mb-6">
          Show up in Answer Engines
        </h1>

        <p className="md:text-2xl text-base font-medium text-sub-heading lg:max-w-[900px] text-center mb-10">
          Information is shifting from blue links to AI answers, meet your
          customers there
        </p>

        <div className="w-full flex flex-col md:flex-row gap-4 justify-center mb-20">
          <Button
            onClick={() => navigateTo("/login")}
            className="relative max-md:w-full px-8 py-5 rounded-full text-sm md:text-base font-medium bg-gradient-to-b from-[#2b135f] to-[#4a208a] shadow-[0_0_24px_rgba(140,69,255,0.6)] group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>

            <span className="absolute inset-0 rounded-full border border-white/20" />
            <span className="absolute inset-0 rounded-full shadow-[0_0_14px_rgba(140,69,255,0.7)_inset]" />
          </Button>

          <Button
            onClick={openForm}
            className="px-8 max-md:w-full py-5 rounded-full text-sm md:text-base font-medium border-border text-secondary-foreground hover:bg-secondary-hover bg-secondary flex items-center gap-2"
          >
            <Headset className="w-4 h-4" />
            Contact Us
          </Button>
        </div>

        <p className="font-medium text-sub-heading mb-10">
          Used by AEO teams at leading companies
        </p>

        <div className="flex items-center justify-center gap-20 flex-wrap">
          <Image
            src={UsBankLogo}
            alt="Us Bank"
            height={36}
            width={180}
            className="opacity-70"
          />
          <Image
            src={GrabLogo}
            alt="Grab Holdings"
            height={36}
            width={180}
            className="opacity-70"
          />
          <Image
            src={ZapierLogo}
            alt="Zapier"
            height={36}
            width={180}
            className="opacity-70"
          />
          <Image
            src={IndeedLogo}
            alt="Indeed"
            height={36}
            width={180}
            className="opacity-70"
          />
        </div>
      </div>
    </div>
  );
}

export default SolutionHeroSection;
