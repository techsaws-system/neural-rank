"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import CertificateBadgeImg01 from "../../../public/images/certificate-badge-img-01.svg";
import CertificateBadgeImg02 from "../../../public/images/certificate-badge-img-02.svg";
import CertificateBadgeImg03 from "../../../public/images/certificate-badge-img-03.avif";
import Logo from "../../../public/favicons/logo-transparent.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-black border-y-2 border-border pb-6 section-padding-standard relative overflow-hidden">
        <div className="layout-standard relative z-10">
          <div className="flex md:items-start items-center justify-between mb-12">
            <div className="bg-gradient-to-r from-muted border-2 border-primary flex-center lg:p-4 p-2 rounded-lg">
              <Image
                src={Logo}
                alt="Neural Rank – AI-Powered SEO Platform for Real Rankings"
                className="lg:w-[60px] w-[50px] h-auto"
              />
            </div>

            <div className="flex flex-col gap-6 items-center">
              <div className="flex items-center gap-4">
                <Image
                  src={CertificateBadgeImg01}
                  alt="Certificate"
                  className="w-[40px] h-auto"
                />
                <Image
                  src={CertificateBadgeImg02}
                  alt="Certificate"
                  className="w-[40px] h-auto"
                />
                <Image
                  src={CertificateBadgeImg03}
                  alt="Certificate"
                  className="w-[40px] h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-2 gap-8 md:mb-16 mb-8">
            <div className="flex flex-col md:gap-6 gap-4">
              <h3 className="text-heading font-heading font-semibold md:text-base text-sm">
                Company
              </h3>
              <ul className="flex flex-col md:gap-3 gap-2">
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-white transition-colors md:text-sm text-xs font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className="hover:text-white transition-colors md:text-sm text-xs font-medium"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/solutions/aio-solution"}
                    className="hover:text-white transition-colors md:text-sm text-xs font-medium"
                  >
                    AIO Solution
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/solutions/geo-solution"}
                    className="hover:text-white transition-colors md:text-sm text-xs font-medium"
                  >
                    GEO Solution
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricings"}
                    className="hover:text-white transition-colors md:text-sm text-xs font-medium"
                  >
                    Pricings
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:gap-6 gap-4">
              <h3 className="text-heading font-heading font-semibold md:text-base text-sm">
                Legal
              </h3>
              <ul className="flex flex-col md:gap-3 gap-2">
                <li>
                  <Link
                    href={"/privacy-policy"}
                    className="hover:text-white transition-colors md:text-sm text-xs font-medium"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/use-terms"}
                    className="hover:text-white transition-colors md:text-sm text-xs font-medium"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/data-security"}
                    className="hover:text-white transition-colors md:text-sm text-xs font-medium"
                  >
                    Data Security
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:gap-6 gap-4 lg:col-span-1 col-span-2">
              <h3 className="text-heading font-heading font-semibold md:text-base text-sm">
                Need Help ?
              </h3>

              <ul className="flex flex-col md:gap-3 gap-2">
                <li>
                  <Link
                    href="https://www.google.com/maps?q=Downtown+Business+Center,+1550+West+5th+Avenue,+Cleveland,+Ohio+44113"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors md:text-sm text-xs font-medium flex items-start gap-2"
                  >
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                    <span>
                      Downtown Business Center, 1550 West 5th Avenue, Cleveland,
                      Ohio 44113, United States
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+12162478881"
                    className="hover:text-white transition-colors md:text-sm text-xs font-medium flex items-center gap-2"
                  >
                    <Phone size={16} className="mt-0.5 flex-shrink-0" />
                    <span>(216) 247 8881</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href={"mailto:info@neuralrank.com"}
                    className="hover:text-white transition-colors md:text-sm text-xs font-medium flex items-center gap-2"
                  >
                    <Mail size={16} className="mt-0.5 flex-shrink-0" />
                    <span>info@neuralrank.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between max-md:gap-3 items-center">
            <p className="text-muted-foreground font-medium md:text-sm text-xs">
              © Neural Rank. All rights reserved {currentYear}
            </p>

            <div className="flex items-center gap-4">
              <Link
                href={"/"}
                target="_blank"
                className="text-muted-foreground hover:text-heading transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href={"/"}
                target="_blank"
                className="text-muted-foreground hover:text-heading transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href={"/"}
                target="_blank"
                className="text-muted-foreground hover:text-heading transition-colors"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href={"/"}
                target="_blank"
                className="text-muted-foreground hover:text-heading transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-black overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 lg:h-24 md:h-16 h-8 bg-gradient-to-b from-black to-transparent z-10" />

        <div className="relative flex items-center justify-center overflow-hidden">
          <div
            className="
            flex font-extrabold tracking-tight
            text-[#2C2C2C]
            select-none
            translate-y-6
          "
            style={{
              fontSize: "clamp(72px, 12vw, 220px)",
              lineHeight: "0.85",
              textShadow:
                "0 30px 80px rgba(0,0,0,0.9), 0 6px 20px rgba(0,0,0,0.8)",
            }}
          >
            {["N", "E", "U", "R", "A", "L", "R", "A", "N", "K"].map(
              (letter, index) => (
                <span
                  key={index}
                  className="
                  inline-block
                  transition-transform duration-300 ease-out
                  hover:-translate-y-2 hover:scale-105
                "
                >
                  {letter}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
