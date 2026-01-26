import BackgroundGrid from "@/components/partials/background-grid";

function DataSecurityPage() {
  return (
    <BackgroundGrid className="lg:pt-[100px] pt-[80px]">
      <div className="section-padding-standard !layout-standard flex-center flex-col md:gap-12 gap-8 w-full h-full">
        <h1 className="text-heading font-heading font-light md:text-6xl text-3xl text-center">
          <span className="font-bold bg-gradient-to-r from-primary-hover via-secondary to-primary bg-clip-text text-transparent">
            Neural Rank:
          </span>{" "}
          Data Security
        </h1>

        <div className="flex flex-col gap-10">
          <p className="font-medium lg:text-xl md:text-lg text-base font-foreground text-foreground">
            Neural Rank prioritizes the confidentiality, integrity, and
            availability of all client and internal data. Our operations span
            business process outsourcing, AI-powered marketing, and digital
            services delivered through secure mobile and web applications.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              1. Enterprise-Wide Security Governance
            </h2>

            <div className="flex flex-col gap-2">
              <span className="text-heading font-heading font-light md:text-lg text-base">
                1.1 Centralized Policy Framework
              </span>
              <p className="md:text-base text-sm font-medium">
                Neural Rank enforces uniform security policies across all
                departments. These policies are reviewed quarterly to remain
                compliant with evolving legal and technical standards.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-heading font-heading font-light md:text-lg text-base">
                1.2 Role-Based Access Control (RBAC)
              </span>
              <p className="md:text-base text-sm font-medium">
                Access to systems and sensitive data is strictly assigned based
                on role and function. Employees only access data essential to
                their responsibilities.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-heading font-heading font-light md:text-lg text-base">
                1.3 Data Classification & Handling
              </span>
              <p className="md:text-base text-sm font-medium">
                All data is categorized by sensitivity level with defined
                protocols for storage, access, and transfer.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              2. Application & AI Platform Security
            </h2>

            <div className="flex flex-col gap-2">
              <span className="text-heading font-heading font-light md:text-lg text-base">
                2.1 End-to-End Encryption:
              </span>
              <p className="md:text-base text-sm font-medium">
                AES-256 encryption for storage and TLS 1.3 for data
                transmission.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-heading font-heading font-light md:text-lg text-base">
                2.2 Multi-Factor Authentication (MFA):
              </span>
              <p className="md:text-base text-sm font-medium">
                Mandatory identity verification for dashboard access.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-heading font-heading font-light md:text-lg text-base">
                2.3 Secure API Gateways:
              </span>
              <p className="md:text-base text-sm font-medium">
                Token-authenticated gateways for all third-party integrations.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-heading font-heading font-light md:text-lg text-base">
                2.4 AI Model Containment:
              </span>
              <p className="md:text-base text-sm font-medium">
                AI models operate in isolated environments and do not retain
                customer data.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              3. Data Collection, Storage & Retention
            </h2>

            <div className="flex flex-col gap-2">
              <span className="text-heading font-heading font-light md:text-lg text-base">
                3.1 Consent-Based Handling:
              </span>
              <p className="md:text-base text-sm font-medium">
                Explicit user consent is obtained during onboarding.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-heading font-heading font-light md:text-lg text-base">
                3.2 Regional Data Storage:
              </span>
              <p className="md:text-base text-sm font-medium">
                Data is stored in SOC 2 & ISO 27001 certified data centers. U.S.
                data remains in U.S. regions.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-heading font-heading font-light md:text-lg text-base">
                3.3 Automatic Data Purging:
              </span>
              <p className="md:text-base text-sm font-medium">
                Data no longer required is automatically deleted on a rolling
                schedule.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              4. Operational Security
            </h2>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>• Network segmentation and workstation monitoring</li>
              <li>• Mandatory quarterly employee security training</li>
              <li>• 24/7 incident response with real-time monitoring</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              5. Customer Data Protections
            </h2>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>• No data sharing between customers</li>
              <li>• Full AI transparency and manual override controls</li>
              <li>• Detailed audit trails available upon request</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              6. Compliance & Certifications
            </h2>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>• GDPR (EU)</li>
              <li>• CCPA (California)</li>
              <li>• SOC 2 Type II (in progress)</li>
              <li>• Regular vulnerability scans and third-party audits</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              7. Ongoing Improvements
            </h2>

            <p className="md:text-base text-sm font-medium">
              Neural Rank continuously evaluates the security landscape. All new
              platform features—especially AI-driven capabilities—undergo
              rigorous risk assessments before deployment.
            </p>
          </div>
        </div>
      </div>
    </BackgroundGrid>
  );
}

export default DataSecurityPage;
