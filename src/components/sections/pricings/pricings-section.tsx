"use client";

import { useSeoForm } from "@/contexts/seo-form-context";
import { useState } from "react";

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
import { cn } from "@/lib/utils";

function PricingsSection() {
  const { openForm } = useSeoForm();
  const [yearly, setYearly] = useState<{ [key: number]: boolean }>({});

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
                ${yearly[data.id] ? data.yearlyAmount : data.monthlyAmount} /
                {yearly[data.id] ? "month (yearly billing)" : "month"}
              </CardDescription>
            ) : (
              <CardDescription className="font-light text-heading text-2xl">
                Custom Pricing
              </CardDescription>
            )}

            {data.id === 1 || data.id === 2 ? (
              <div className="flex items-center gap-2 pt-2">
                <Switch
                  checked={yearly[data.id] || false}
                  onCheckedChange={(checked) =>
                    setYearly((prev) => ({ ...prev, [data.id]: checked }))
                  }
                  className="bg-white"
                />
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
                    className="flex-shrink-0 mt-1 text-green-500"
                  />
                  <p className="text-base">{data}</p>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="md:pt-12 py-8">
            <Button
              onClick={data.id === 1 || data.id === 2 ? openForm : undefined}
              asChild={data.id === 3}
              className={cn(
                "rounded-none border-2 border-border font-heading font-medium text-base w-full h-[50px]",
                data.id === 1 || data.id === 2
                  ? "bg-white hover:bg-white/80 text-background"
                  : "bg-primary-hover hover:bg-primary text-primary-foreground",
              )}
            >
              {data.id === 3 ? (
                <a href="tel:+12162478881">Contact Sales Team</a>
              ) : (
                "Get Started"
              )}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

export default PricingsSection;
