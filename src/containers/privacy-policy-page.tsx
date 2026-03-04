import Link from "next/link";

import BackgroundGrid from "@/components/partials/background-grid";

function PrivacyPolicyPage() {
  return (
    <BackgroundGrid className="lg:pt-[100px] pt-[80px]">
      <div className="section-padding-standard !layout-standard flex-center flex-col md:gap-12 gap-8 w-full h-full">
        <h1 className="text-heading font-heading font-light md:text-6xl text-3xl text-center">
          <span className="font-bold bg-gradient-to-r from-primary-hover via-secondary to-primary bg-clip-text text-transparent">
            Neural Rank:
          </span>{" "}
          Privacy Policy
        </h1>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-medium lg:text-xl md:text-lg text-base font-foreground text-foreground">
              At Nerual Rank, we are committed to protecting and respecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website nerualrank.co (the “Website”), use our services, or
              interact with us in any other way.
            </p>
            <p className="font-medium lg:text-xl md:text-lg text-base font-foreground text-foreground">
              Please read this policy carefully to understand our practices
              regarding your personal data. By using our website and services,
              you agree to the collection and use of your information in
              accordance with this Privacy Policy.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              1. Information We Collect
            </h2>

            <p className="md:text-base text-sm font-medium">
              We may collect various types of personal data from you depending
              on your interactions with us. This information may include, but is
              not limited to:
            </p>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>
                • Personal Identification Information: Name, email address,
                phone number, and other contact details.
              </li>
              <li>
                • Business Information: Company name, job title, and other
                relevant business information.
              </li>
              <li>
                • Technical Data: IP address, browser type, operating system,
                device information, and browsing history on our website.
              </li>
              <li>
                • Transaction Information: Details of products or services you
                have purchased or inquired about, as well as billing and payment
                details.
              </li>
              <li>
                • Communications: Any correspondence or communications with us
                via Email, phone, or other channels.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              2. How We Use Your Information
            </h2>

            <p className="md:text-base text-sm font-medium">
              We may use the information we collect from you for the following
              purposes:
            </p>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>• To provide, operate, and maintain our services.</li>
              <li>• To process your inquiries, requests, and transactions.</li>
              <li>
                • To improve our website and personalize the user experience.
              </li>
              <li>
                • To communicate with you, including sending you promotional
                materials or important updates.
              </li>
              <li>
                • To analyze usage trends and gather statistical information to
                improve our services.
              </li>
              <li>
                • To ensure compliance with applicable laws and protect the
                rights, safety, and security of our business and users.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              3. Legal Basis for Processing (For GDPR Compliance)
            </h2>

            <p className="md:text-base text-sm font-medium">
              We process personal data under the following legal bases:
            </p>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>
                • Consent: Where you have given explicit consent for processing
                (e.g., subscribing to our newsletter).
              </li>
              <li>
                • Contractual Obligations: Where processing is necessary to
                fulfill a contract (e.g., providing services or responding to
                inquiries).
              </li>
              <li>
                • Legitimate Interests: Where processing is in our legitimate
                interests (e.g., to prevent fraud or ensure the security of our
                website).
              </li>
              <li>
                • Legal Obligations: Where we are required to process data to
                comply with legal obligations.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              4. Sharing of Information
            </h2>

            <p className="md:text-base text-sm font-medium">
              We do not sell, rent, or trade your personal information to third
              parties. However, we may share your information with trusted
              third-party service providers who assist us in operating our
              website, conducting business, or providing services to you. We
              only share your information in the following situations:
            </p>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>
                • Service Providers: We may share information with third-party
                service providers who perform services on our behalf (e.g.,
                payment processors, hosting providers, customer support).
              </li>
              <li>
                • Legal Compliance: We may disclose your information where
                required by law, regulation, or legal process.
              </li>
              <li>
                • Business Transfers: In the event of a merger, acquisition, or
                sale of company assets, your information may be transferred as
                part of that transaction.
              </li>
              <li>
                • With Your Consent: We may share your information with third
                parties with your explicit consent.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              5. Data Security
            </h2>

            <p className="md:text-base text-sm font-medium">
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. However, please note that
              no method of transmission over the Internet or method of
              electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              6. Data Retention
            </h2>

            <p className="md:text-base text-sm font-medium">
              We retain personal information for as long as is necessary to
              fulfill the purposes outlined in this Privacy Policy, or as
              required by law. Once we no longer need your personal information,
              we will securely dispose of it.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              7. Your Rights (For GDPR and CCPA Compliance)
            </h2>

            <p className="md:text-base text-sm font-medium">
              Under data protection laws, including the GDPR and CCPA, you have
              the following rights:
            </p>

            <ul className="flex flex-col gap-2 md:text-base text-sm font-medium">
              <li>
                • Right to Access: You have the right to request access to the
                personal data we hold about you.
              </li>
              <li>
                • Right to Rectification: You have the right to request that we
                correct any inaccurate or incomplete data we have about you.
              </li>
              <li>
                • Right to Erasure: You have the right to request that we delete
                your personal data, subject to certain conditions.
              </li>
              <li>
                • Right to Restrict Processing: You have the right to request
                that we limit the processing of your data under specific
                circumstances.
              </li>
              <li>
                • Right to Data Portability: You have the right to request a
                copy of your data in a structured, commonly used, and
                machine-readable format.
              </li>
              <li>
                • Right to Object: You have the right to object to the
                processing of your personal data in certain circumstances.
              </li>
              <li>
                • Right to Opt-Out of Sale (for CCPA): You have the right to
                request that your personal information not be sold to third
                parties.
              </li>
            </ul>

            <p className="md:text-base text-sm font-medium">
              To exercise these rights, please contact us at{" "}
              <Link href={"mailto:ask@nerualrank.co"}>ask@nerualrank.co</Link>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              8. Cookies and Tracking Technologies
            </h2>

            <p className="md:text-base text-sm font-medium">
              We use cookies and similar tracking technologies to improve your
              browsing experience on our website, analyze site traffic, and
              understand where our visitors are coming from. You can control
              your cookie preferences through your browser settings.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              9. SMS/MMS Communications
            </h2>

            <p className="md:text-base text-sm font-medium">
              By providing your mobile number and opting in, you consent to
              receive SMS and/or MMS messages from MYAIO regarding our products,
              services, promotions, and account-related updates. Message
              frequency may vary. Standard message and data rates may apply.
            </p>

            <p className="md:text-base text-sm font-medium">
              Opt-Out: You may opt out of receiving SMS/MMS messages at any time
              by replying “STOP” to any message we send. After you send the
              “STOP” message, we will send you a one-time confirmation to
              confirm that you have been unsubscribed.
            </p>

            <p className="md:text-base text-sm font-medium">
              Help: For assistance, reply “HELP” to any message or contact us at
              <Link href={"mailto:info@nerualrank.co"}>info@nerualrank.co</Link>
            </p>

            <p className="md:text-base text-sm font-medium">
              We will not share your mobile phone number with third parties for
              their own marketing purposes without your explicit consent, except
              as necessary to deliver the messaging service (e.g., with our SMS
              delivery providers) or as required by law.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              10. Third-Party Websites
            </h2>

            <p className="md:text-base text-sm font-medium">
              Our website may contain links to third-party websites that are not
              operated or controlled by MYAIO. This Privacy Policy applies
              solely to information collected on our website. We encourage you
              to review the privacy policies of any third-party websites before
              providing them with your personal information.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl md:text-xl text-lg font-heading text-heading font-semibold">
              11. Changes to This Privacy Policy
            </h2>

            <p className="md:text-base text-sm font-medium">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. We will notify you
              of any significant changes by posting the updated Privacy Policy
              on our website and revising the “Last Updated” date at the top of
              this page.
            </p>
          </div>
        </div>
      </div>
    </BackgroundGrid>
  );
}

export default PrivacyPolicyPage;
