"use client";

import { useState, ReactNode } from "react";

import { SeoFormContext } from "@/contexts/seo-form-context";

export const SeoFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <SeoFormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </SeoFormContext.Provider>
  );
};
