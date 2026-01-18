import PricingsPage from "@/containers/pricings-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "Pricing Plans for AI-Powered SEO",
  description:
    "View Neural Rank pricing plans designed for startups, agencies, and enterprises. Transparent, scalable AI-powered SEO plans built for real growth.",
  path: "/pricings",
});

function Pricings() {
  return <PricingsPage />;
}

export default Pricings;
