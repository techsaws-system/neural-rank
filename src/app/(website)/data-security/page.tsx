import DataSecurityPage from "@/containers/data-security-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "Data Security & Compliance | Neural Rank AI SEO Platform",
  description:
    "Learn how Neural Rank protects your data with enterprise-grade security, encryption, access controls, and compliance-first AI SEO infrastructure built for trust and scale.",
  path: "/data-security",
});

function DataSecurity() {
  return <DataSecurityPage />;
}

export default DataSecurity;
