"use client";

import { createContext, useContext } from "react";

import { SeoFormContextType } from "@/types/contexts-interfaces";

export const SeoFormContext = createContext<SeoFormContextType | null>(null);

export const useSeoForm = () => {
  const context = useContext(SeoFormContext);
  if (!context) {
    throw new Error("useSeoForm must be used within SeoFormProvider");
  }
  return context;
};
