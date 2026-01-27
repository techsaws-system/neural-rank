import AISeoSolutionPage from "@/containers/solutions/ai-seo-solution-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "AI SEO Services for Higher Rankings & Organic Growth",
  description:
    "Neural Rank delivers AI-powered SEO services including keyword intelligence, content optimization, technical SEO insights, and performance analytics designed to increase rankings and organic traffic.",
  path: "/solution/ai-seo",
});

function AISeoSolution() {
  return <AISeoSolutionPage />;
}

export default AISeoSolution;
