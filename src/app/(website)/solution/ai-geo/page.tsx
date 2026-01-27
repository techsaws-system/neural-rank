import AIGeoSolutionPage from "@/containers/solutions/ai-geo-solution-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "AI GEO Optimization for Answer Engines & AI Search",
  description:
    "Optimize your brand for AI-generated search results with Neural Rank’s AI GEO solution. Get discovered in Google AI Overviews, ChatGPT answers, and next-generation answer engines.",
  path: "/solution/ai-geo",
});

function AIGeoSolution() {
  return <AIGeoSolutionPage />;
}

export default AIGeoSolution;
