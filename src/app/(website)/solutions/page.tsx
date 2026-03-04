import AioAbout from "@/components/sections/solution/aio-about";
import AioSteps from "@/components/sections/solution/aio-steps";
import AIOSolutionPage from "@/containers/solutions/aio-solution-page";
import AioAboutCarousal from "@/components/sections/solution/aio-about-carousal";
import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "SEO Services for Higher Rankings & Organic Growth | Neural Rank",
  description:
    "Neural Rank delivers AI-powered SEO services including keyword intelligence, content optimization, technical SEO insights, and performance analytics designed to increase rankings and organic traffic.",
  path: "/solutions",
});

function SolutionPage() {
  return (
    <>
      <AIOSolutionPage />
      <AioAbout />
      <AioAboutCarousal />
      <AioSteps />
    </>
  );
}

export default SolutionPage;
