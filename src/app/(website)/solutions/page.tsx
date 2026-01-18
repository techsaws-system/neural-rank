import SolutionsPage from "@/containers/solutions-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "AI SEO Solutions for Smarter Rankings",
  description:
    "Explore Neural Rank’s AI-powered SEO solutions including keyword intelligence, content optimization, search intent modeling, and performance analytics built for modern search.",
  path: "/solutions",
});

function Solutions() {
  return <SolutionsPage />;
}

export default Solutions;
