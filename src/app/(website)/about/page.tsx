import AboutPage from "@/containers/about-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "About Neural Rank",
  description:
    "Learn about Neural Rank’s mission to transform SEO with AI-driven intelligence, data-backed insights, and ethical optimization strategies for sustainable growth.",
  path: "/about",
});

function About() {
  return <AboutPage />;
}

export default About;
