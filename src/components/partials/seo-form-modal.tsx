"use client";

import { useSeoForm } from "@/contexts/seo-form-context";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "../ui/scroll-area";

export function SeoFormModal() {
  const { isOpen, closeForm } = useSeoForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log({
      name: formData.get("name"),
      email: formData.get("email"),
      number: formData.get("number"),
      businessName: formData.get("businessName"),
      businessAddress: formData.get("businessAddress"),
      website: formData.get("website"),
      description: formData.get("description"),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeForm()}>
      <DialogContent className="md:max-w-[480px] max-w-[90%] border-border z-[99999999]">
        <DialogHeader className="gap-0">
          <DialogTitle className="text-heading font-heading text-2xl font-light">
            Get SEO Consultation
          </DialogTitle>
          <DialogDescription className="text-sm font-medium text-sub-heading">
            Get free audit and consultation for your business
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4">
          <ScrollArea className="md:h-[350px] w-full h-[250px]">
            <div className="grid md:grid-cols-2 md:gap-2 gap-4 grid-cols-1 mb-6">
              <div className="grid gap-2">
                <Label
                  htmlFor="name"
                  className="text-heading font-heading font-light"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="h-[45px] bg-input border-border"
                />
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor="email"
                  className="text-heading font-heading font-light"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="h-[45px] bg-input border-border"
                />
              </div>
            </div>

            <div className="grid gap-2 mb-6">
              <Label
                htmlFor="number"
                className="text-heading font-heading font-light"
              >
                Phone Number
              </Label>
              <Input
                id="number"
                name="number"
                type="number"
                placeholder="+1 555 123 4567"
                required
                className="h-[45px] bg-input border-border"
              />
            </div>

            <div className="grid md:grid-cols-2 md:gap-2 gap-4 grid-cols-1 mb-6">
              <div className="grid gap-2">
                <Label
                  htmlFor="businessName"
                  className="text-heading font-heading font-light"
                >
                  Business Name (if any)
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  placeholder="Your company or brand name"
                  required
                  className="h-[45px] bg-input border-border"
                />
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor="businessAddress"
                  className="text-heading font-heading font-light"
                >
                  Business Address (if any)
                </Label>
                <Input
                  id="businessAddress"
                  name="businessAddress"
                  placeholder="City, State / Country"
                  required
                  className="h-[45px] bg-input border-border"
                />
              </div>
            </div>

            <div className="grid gap-2 mb-6">
              <Label
                htmlFor="website"
                className="text-heading font-heading font-light"
              >
                Website (optional)
              </Label>
              <Input
                id="website"
                name="website"
                className="h-[45px] bg-input border-border"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div className="grid gap-2">
              <Label
                htmlFor="description"
                className="text-heading font-heading font-light"
              >
                Description
              </Label>
              <Textarea
                rows={7}
                id="description"
                name="description"
                className="bg-input border-border"
                placeholder="Tell us about your business, services, target customers, and what you want to improve with SEO..."
              />
            </div>
          </ScrollArea>

          <DialogFooter className="mt-4">
            <Button
              type="submit"
              className="text-heading font-light md:py-4 py-5 px-8 rounded-sm hover:bg-primary-hover "
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
