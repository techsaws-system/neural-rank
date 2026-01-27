import BackgroundGrid from "@/components/partials/background-grid";

import PricingsHeroSection from "@/components/sections/pricings/pricings-hero-section";
import PricingsSection from "@/components/sections/pricings/pricings-section";

import {DashboardPreviewSection02 } from "@/components/sections/common/dashboard-preview-sections";
import DashboardCTASection from "@/components/sections/common/dashboard-cta-section";
import CtaSection from "@/components/sections/common/cta-section";

function PricingsPage() {
  return (
    <BackgroundGrid className="lg:pt-[100px] pt-[80px]">
      <PricingsHeroSection />
      <PricingsSection />
      <DashboardCTASection />
      <DashboardPreviewSection02 />
      <CtaSection />
    </BackgroundGrid>
  );
}

export default PricingsPage;
