import HomeHeroSection from "@/components/sections/home/home-hero-section";
import {
  AboutSection01,
  AboutSection02,
} from "@/components/sections/home/about-sections";
import AchievementSection from "@/components/sections/home/achievement-section";
import AICallToActionSection from "@/components/sections/home/ai-call-to-action-section";
import ClientsSection from "@/components/sections/home/clients-section";
import ProcessSection from "@/components/sections/home/process-section";

import FaqSection from "@/components/sections/common/faq-section";
import TestimonialSection from "@/components/sections/common/testimonial-section";
import DashboardCTASection from "@/components/sections/common/dashboard-cta-section";
import {
  DashboardPreviewSection01,
  DashboardPreviewSection02,
} from "@/components/sections/common/dashboard-preview-sections";
import CtaSection from "@/components/sections/common/cta-section";

function HomePage() {
  return (
    <main className="lg:pt-[100px] pt-[80px]">
      <HomeHeroSection />
      <ClientsSection />
      <DashboardCTASection />
      <AchievementSection />
      <AboutSection01 />
      <ProcessSection />
      <AboutSection02 />
      <AICallToActionSection />
      <DashboardPreviewSection01 />
      <DashboardPreviewSection02 />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}

export default HomePage;
