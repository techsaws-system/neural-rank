import UseTermsPage from "@/containers/use-terms-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "Terms of Use | Neural Rank AI SEO Services",
  description:
    "Review the terms of use governing access to Neural Rank’s AI-powered SEO tools, platforms, and services. Clear usage policies designed for transparency and reliability.",
  path: "/use-terms",
});

function UseTerms() {
  return <UseTermsPage />;
}

export default UseTerms;
