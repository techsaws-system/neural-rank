import Image from "next/image";

import { AboutHeroSectionContent } from "@/contents/about-page-content";

import { CountUp } from "@/components/partials/count-up";

function AboutHeroSection() {
  return (
    <section className="section-padding-standard w-full h-full">
      <div className="section-padding-standard layout-standard flex-center flex-col gap-12">
        <div className="flex-center flex-col gap-4">
          <h1 className="text-heading font-heading font-light md:text-6xl text-3xl lg:max-w-[700px] text-center">
            It Started With the Idea to Help Businesses
          </h1>
          <p className="md:text-2xl text-base font-medium text-sub-heading lg:max-w-[900px] text-center">
            We built Neural Rank because everything else was a mess. Too many
            tools, Too much fluff. So we stripped it down, powered it up with
            AI, and made an all-in-one platform that actually works for every
            type of business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-16 md:mt-8">
          {AboutHeroSectionContent.map((item, index) => (
            <div
              key={index}
              className="flex-center w-full flex-col lg:gap-12 gap-4"
            >
              <div
                className="relative overflow-hidden rounded-2xl group"
                style={{ height: "386px" }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="w-[400px] h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="space-y-2 text-center">
                <h3 className="text-3xl font-semibold tracking-tight font-heading text-center bg-gradient-to-r from-primary-hover via-secondary to-primary bg-clip-text text-transparent">
                  <CountUp value={item.count} suffix={item.suffix} />
                </h3>
                <p className="leading-relaxed lg:text-xl md:text-lg text-base font-medium">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
