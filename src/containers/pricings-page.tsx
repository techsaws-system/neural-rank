import BackgroundGrid from "@/components/partials/background-grid";

import PricingsHeroSection from "@/components/sections/pricings/pricings-hero-section";
import PricingsSection from "@/components/sections/pricings/pricings-section";

import {DashboardPreviewSection02 } from "@/components/sections/common/dashboard-preview-sections";
import DashboardCTASection from "@/components/sections/common/dashboard-cta-section";
import CtaSection from "@/components/sections/common/cta-section";
import TestimonialSection from "@/components/sections/common/testimonial-section";
import FaqSection from "@/components/sections/common/faq-section";

function PricingsPage() {
  return (
    <BackgroundGrid className="lg:pt-[100px] pt-[80px]">
      <PricingsHeroSection />
      <PricingsSection />
      <DashboardCTASection />
      <DashboardPreviewSection02 />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </BackgroundGrid>
  );
}

export default PricingsPage;
