import BackgroundGrid from "@/components/partials/background-grid";
import AboutHeroSection from "@/components/sections/about/about-hero-section";

function AboutPage() {
  return (
    <BackgroundGrid className="lg:pt-[100px] pt-[80px]">
      <AboutHeroSection />
    </BackgroundGrid>
  );
}

export default AboutPage;
