import BackgroundGrid from "@/components/partials/background-grid";

function UseTermsPage() {
  return (
    <BackgroundGrid className="lg:pt-[100px] pt-[80px]">
      <div className="section-padding-standard !layout-standard flex-center flex-col md:gap-12 gap-8 w-full h-full">
        <h1 className="text-heading font-heading font-light md:text-6xl text-3xl text-center">
          <span className="font-bold bg-gradient-to-r from-primary-hover via-secondary to-primary bg-clip-text text-transparent">
            Neural Rank:
          </span>{" "}
          Terms of Use
        </h1>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              1. Definitions
            </h2>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>
                1.1 “Neural Rank” refers to the AIO platform (web and mobile
                applications), developed and operated by Neural Rank.
              </li>
              <li>
                1.2 “User” means any business entity or authorized
                representative using the Neural Rank Services.
              </li>
              <li>
                1.3 “Dashboard” refers to the AI-enabled web and mobile app
                interfaces.
              </li>
              <li>
                1.4 “Services” include but are not limited to digital marketing,
                SEO, web development, campaign management, reporting, GMB
                management, and associated analytics functions provided through
                the platform and by support teams.
              </li>
              <li>
                1.5 “Confidential Information” refers to any business,
                technical, or financial data shared by either party that is not
                public knowledge.
              </li>
              <li>
                1.6 “Force Majeure” refers to unforeseeable events outside
                reasonable control that impact service delivery (e.g., natural
                disasters, acts of government).
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              2. Scope and Acceptance
            </h2>

            <p className="md:text-base text-sm font-medium">
              By accessing the Neural Rank platform, users agree to comply with
              these Terms of Use, our Privacy Policy, and any associated
              contractual documents (e.g., service agreements, order forms).
              These Terms govern all platform usage and services, unless
              separately negotiated in writing.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              3. Services and Access
            </h2>

            <div className="flex flex-col gap-2">
              <span className="text-heading font-heading font-light md:text-lg text-base">
                3.1 Services Provided
              </span>

              <p className="md:text-base text-sm font-medium">
                Neural Rank offers AI-powered solutions that include:
              </p>

              <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
                <li>• AI-driven Web Analysis and Instant Fixes</li>
                <li>
                  • Social & Local Campaign Management (Google Ads, Facebook)
                </li>
                <li>• GMB Auto-Management (Posts, Reviews, FAQs)</li>
                <li>• Content Automation (Web, Blog, Social Templates)</li>
                <li>• Weekly Performance Reports</li>
                <li>• Visual Analytics and Predictive Insights</li>
                <li>
                  • Real-Time Optimization and Cross-Platform Campaign Sync
                </li>
                <li>• Competitor Monitoring and Customer Segmentation</li>
              </ul>

              <p className="md:text-base text-sm font-medium">
                All features are delivered via Neural Rank’s dashboard and
                mobile app, with operational backing from in-house teams.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-heading font-heading font-light md:text-lg text-base">
                3.2 Usage License
              </span>
              <p className="md:text-base text-sm font-medium">
                Users receive a non-exclusive, non-transferable, revocable right
                to use the platform for business purposes. Any resale,
                replication, or unauthorized use is strictly prohibited.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              4. Account Responsibility
            </h2>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>
                • Users must maintain the confidentiality of their login
                credentials.
              </li>
              <li>
                • All activity conducted under a registered account is
                considered authorized by the business entity.
              </li>
              <li>
                • Neural Rank is not liable for unauthorized access resulting
                from customer negligence.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              5. Platform Updates
            </h2>

            <p className="md:text-base text-sm font-medium">
              Neural Rank reserves the right to:
            </p>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>
                • Modify or enhance platform features at its sole discretion.
              </li>
              <li>
                • Roll out periodic updates to maintain or improve performance.
              </li>
              <li>
                • Notify users of substantial changes via Email, platform
                alerts, or documentation updates.
              </li>
            </ul>

            <p className="md:text-base text-sm font-medium">
              Users may terminate service if modifications materially impair
              intended usage and such termination is requested within 30 days of
              notice.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              6. Data and Analytics
            </h2>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>• Users own the data they input and generate.</li>
              <li>
                • Neural Rank may generate anonymized, aggregated analytics to
                improve service quality, system performance, and benchmarking.
              </li>
              <li>
                • These analytics do not identify individual businesses or
                users.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              7. Payment and Billing
            </h2>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>
                • Services are billed monthly in advance unless otherwise
                agreed.
              </li>
              <li>• Time-based services are invoiced in arrears.</li>
              <li>
                • Payment is due within 7 calendar days of invoice issuance.
              </li>
              <li>• Late payments may incur interest charges.</li>
            </ul>

            <p className="md:text-base text-sm font-medium">
              Pricing adjustments may be implemented annually with 60 days&apos;
              notice. Customers may object within 30 days; failure to object
              implies consent.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              8. User Obligations
            </h2>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>• Maintain accurate business and contact information.</li>
              <li>
                • Comply with all applicable data, advertising, and content
                laws.
              </li>
              <li>
                • Refrain from uploading or distributing malware, defamatory
                content, or unauthorized media.
              </li>
              <li>
                • Avoid the misuse of platform features for deceptive or illegal
                activities.
              </li>
            </ul>

            <p className="md:text-base text-sm font-medium">
              Neural Rank reserves the right to suspend or terminate accounts
              violating these terms without prior notice.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              9. Intellectual Property
            </h2>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>
                • Neural Rank retains all rights to software, processes, content
                templates, AI models, and analytics tools.
              </li>
              <li>
                • Users may not duplicate, reverse-engineer, or create
                derivative works from the platform or its components.
              </li>
              <li>
                • Pre-built marketing assets, templates, and analysis reports
                are for internal business use only.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              10. Support and Availability
            </h2>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>
                • Support hours and contact channels are detailed in the
                documentation and onboarding materials.
              </li>
              <li>
                • While Neural Rank aims for high availability, occasional
                downtime for maintenance may occur.
              </li>
              <li>
                • Service disruptions due to Force Majeure events are exempt
                from liability.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              11. Confidentiality
            </h2>

            <p className="md:text-base text-sm font-medium">
              Both parties agree not to disclose, copy, or misuse any non-public
              information shared in the course of business. This obligation
              survives contract termination.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              12. Limitation of Liability
            </h2>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>
                • Neural Rank is not liable for indirect damages, loss of
                profits, or data loss due to user-side mismanagement.
              </li>
              <li>
                • Direct liability is capped at the annual subscription value.
              </li>
              <li>
                • Claims arising from willful misconduct, gross negligence, or
                regulatory breaches remain unaffected.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              13. Term and Termination
            </h2>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>
                • Contracts renew automatically unless terminated per the
                agreed-upon notice period.
              </li>
              <li>
                • Upon termination, users must stop accessing the platform and
                may request data exports within 30 days.
              </li>
              <li>
                • Neural Rank will purge all customer data post-deletion period
                unless legally obligated to retain it.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              14. Amendments
            </h2>

            <p className="md:text-base text-sm font-medium">
              Neural Rank may update these Terms with prior notice. Continued
              use of the platform after modifications constitutes acceptance.
              Users are responsible for reviewing changes regularly.
            </p>
          </div>
        </div>
      </div>
    </BackgroundGrid>
  );
}

export default UseTermsPage;
