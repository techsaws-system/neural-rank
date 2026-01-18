import HomePage from "@/containers/home-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "AI-Powered SEO Platform for Real Rankings",
  description:
    "Neural Rank is an AI-powered SEO platform helping brands rank higher, grow organic traffic, and dominate Google and AI-driven search engines with data-backed strategies.",
  path: "/",
});

function Home() {
  return <HomePage />;
}

export default Home;
