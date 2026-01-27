import GEOSolutionPage from "@/containers/solutions/geo-solution-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "GEO Optimization for Answer Engines & AI Search | Neural Rank",
  description:
    "Optimize your brand for AI-generated search results with Neural Rank’s AI GEO solution. Get discovered in Google AI Overviews, ChatGPT answers, and next-generation answer engines.",
  path: "/solutions/geo-solution",
});

function GEOSolution() {
  return <GEOSolutionPage />;
}

export default GEOSolution;
