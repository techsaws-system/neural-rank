import BackgroundGrid from "@/components/partials/background-grid";
import AppSection from "@/components/sections/home/app-section";
import DashboardCTASection from "@/components/sections/home/dashboard-cta-section";
import PricingsHeroSection from "@/components/sections/pricings/pricings-hero-section";
import PricingsSection from "@/components/sections/pricings/pricings-section";

function PricingsPage() {
  return (
    <BackgroundGrid className="lg:pt-[100px] pt-[80px]">
      <PricingsHeroSection />
      <PricingsSection />
      <DashboardCTASection />
      <AppSection />
    </BackgroundGrid>
  );
}

export default PricingsPage;
