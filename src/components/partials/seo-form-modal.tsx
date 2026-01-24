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

export function SeoFormModal() {
  const { isOpen, closeForm } = useSeoForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log({
      name: formData.get("name"),
      email: formData.get("email"),
      number: formData.get("number"),
      website: formData.get("website"),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeForm()}>
      <DialogContent className="md:max-w-[480px] max-w-[90%] border-border">
        <DialogHeader>
          <DialogTitle className="text-heading font-heading text-2xl font-light">
            Get SEO Consultation
          </DialogTitle>
          <DialogDescription className="text-sm font-medium text-sub-heading">
            Share your details and we’ll analyze your growth potential.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-6 mt-4">
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
              placeholder="John Doe"
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
              placeholder="john@email.com"
              required
              className="h-[45px] bg-input border-border"
            />
          </div>

          <div className="grid gap-2">
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
              placeholder="(xxx) xxx-xxx"
              required
              className="h-[45px] bg-input border-border"
            />
          </div>

          <div className="grid gap-2">
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
              placeholder="example.com"
            />
          </div>

          <DialogFooter className="md:mt-4">
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
