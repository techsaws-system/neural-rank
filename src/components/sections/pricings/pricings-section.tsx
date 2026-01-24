"use client";

import { useSeoForm } from "@/contexts/seo-form-context";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { PricingSectionContent } from "@/contents/pricings-page-content";

import { MdEditDocument } from "react-icons/md";
import { Check } from "lucide-react";

function PricingsSection() {
  const { openForm } = useSeoForm();

  return (
    <section className="layout-standard pb-24 grid lg:grid-cols-3 grid-cols-1">
      {PricingSectionContent.map((data, index) => (
        <Card
          key={index}
          className="border-border bg-background rounded-none !grid !grid-cols-1"
        >
          <CardHeader>
            <CardTitle className="md:text-5xl text-4xl !text-primary-hover font-normal font-heading">
              {data.title}
            </CardTitle>
            {data.id === 1 || data.id === 2 ? (
              <CardDescription className="font-light text-heading text-2xl">
                ${data.monthlyAmount} /month
              </CardDescription>
            ) : (
              <CardDescription className="font-light text-heading text-2xl">
                Custom Pricing
              </CardDescription>
            )}

            {data.id === 1 || data.id === 2 ? (
              <div className="flex items-center gap-2 pt-2">
                <Switch className="bg-white" />
                <p className="font-light text-heading text-lg">Billed yearly</p>
              </div>
            ) : (
              <div className="flex items-center gap-2 pt-2 text-white/70">
                <MdEditDocument size={20} />
                <p className="font-medium text-lg">Tailored packages</p>
              </div>
            )}
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <p className="md:text-xl text-lg text-sub-heading">
              {data.description}
            </p>

            <div className="flex flex-col gap-4 mt-4">
              {data.points.map((data, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 text-heading"
                >
                  <Check
                    size={16}
                    className="flex-shrink-0 mt-1 text-primary-hover"
                  />
                  <p className="text-base">{data}</p>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="md:pt-12 py-8">
            <Button
              onClick={openForm}
              className="bg-primary rounded-none border-2 border-border text-heading font-heading font-medium text-base hover:bg-primary-hover w-full h-[50px]"
            >
              {data.id === 1 || data.id === 2
                ? "Get Started"
                : "Contact Sales Team"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

export default PricingsSection;
