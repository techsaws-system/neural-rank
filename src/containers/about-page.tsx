import BackgroundGrid from "@/components/partials/background-grid";
import {
  AboutContentSection01,
  AboutContentSection02,
} from "@/components/sections/about/about-content-sections";
import AboutCtaSection from "@/components/sections/about/about-cta-section";
import AboutHeroSection from "@/components/sections/about/about-hero-section";
import AboutToolSection from "@/components/sections/about/about-tool-section";
import FaqSection from "@/components/sections/common/faq-section";
import TestimonialSection from "@/components/sections/common/testimonial-section";

function AboutPage() {
  return (
    <BackgroundGrid className="lg:pt-[100px] pt-[80px]">
      <AboutHeroSection />
      <AboutContentSection01 />
      <AboutToolSection />
      <AboutContentSection02 />
      <TestimonialSection />
      <FaqSection />
      <AboutCtaSection />
    </BackgroundGrid>
  );
}

export default AboutPage;
