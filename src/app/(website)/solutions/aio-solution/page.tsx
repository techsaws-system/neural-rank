import AIOSolutionPage from "@/containers/solutions/aio-solution-page";
import AioAbout from "@/components/sections/solution/aio-about";
import AioAboutCarousal from "@/components/sections/solution/aio-about-carousal";

import { PageMetadata } from "@/utils/page-matadata";
import AioSteps from "@/components/sections/solution/aio-steps";

export const metadata = PageMetadata({
  title: "SEO Services for Higher Rankings & Organic Growth | Neural Rank",
  description:
    "Neural Rank delivers AI-powered SEO services including keyword intelligence, content optimization, technical SEO insights, and performance analytics designed to increase rankings and organic traffic.",
  path: "/solutions/aio-solution",
});

function AIOSolution() {
  return (
    <>
      <AIOSolutionPage />
      <AioAbout />
      <AioAboutCarousal />
      <AioSteps />
    </>
  );
}

export default AIOSolution;
