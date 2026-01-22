import {
  AboutSection01,
  AboutSection02,
} from "@/components/sections/home/about-sections";
import AchievementSection from "@/components/sections/home/achievement-section";
import AICallToActionSection from "@/components/sections/home/ai-call-to-action-section";
import AppSection from "@/components/sections/home/app-section";
import ClientsSection from "@/components/sections/home/clients-section";
import DashboardCTASection from "@/components/sections/home/dashboard-cta-section";
import DashboardPreviewSection from "@/components/sections/home/dashboard-preview-section";
import HomeHeroSection from "@/components/sections/home/home-hero-section";
import ProcessSection from "@/components/sections/home/process-section";
import TestimonialSection from "@/components/sections/home/testimonial-section";

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
      <DashboardPreviewSection />
      <AppSection />
      <TestimonialSection />
    </main>
  );
}

export default HomePage;
