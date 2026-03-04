import AioAbout from "@/components/sections/solution/aio-about";
import AioSteps from "@/components/sections/solution/aio-steps";
import AioAboutCarousal from "@/components/sections/solution/aio-about-carousal";
import { PageMetadata } from "@/utils/page-matadata";
import SolutionHeroSection from "@/components/sections/solution/solution-hero-section";

export const metadata = PageMetadata({
  title: "SEO Services for Higher Rankings & Organic Growth | Neural Rank",
  description:
    "Neural Rank delivers AI-powered SEO services including keyword intelligence, content optimization, technical SEO insights, and performance analytics designed to increase rankings and organic traffic.",
  path: "/solutions",
});

function SolutionPage() {
  return (
    <>
      <SolutionHeroSection />
      <AioAbout />
      <AioAboutCarousal />
      <AioSteps />
    </>
  );
}

export default SolutionPage;
