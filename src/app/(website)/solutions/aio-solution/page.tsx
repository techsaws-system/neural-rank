import AIOSolutionPage from "@/containers/solutions/aio-solution-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "SEO Services for Higher Rankings & Organic Growth | Neural Rank",
  description:
    "Neural Rank delivers AI-powered SEO services including keyword intelligence, content optimization, technical SEO insights, and performance analytics designed to increase rankings and organic traffic.",
  path: "/solutions/aio-solution",
});

function AIOSolution() {
  return <AIOSolutionPage />;
}

export default AIOSolution;
