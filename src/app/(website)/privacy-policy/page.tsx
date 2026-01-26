import PrivacyPolicyPage from "@/containers/privacy-policy-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "Privacy Policy | Neural Rank AI-Powered SEO Platform",
  description:
    "Read Neural Rank’s privacy policy to understand how we collect, use, and protect your data while delivering secure, ethical, and AI-driven SEO solutions.",
  path: "/privacy-policy",
});

function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}

export default PrivacyPolicy;
