import type { ReactNode } from "react";

import "@/styles/globals.css";
import "@/styles/includes.css";

import { FontVariables } from "@/configurations/font";
import { siteConfig } from "@/configurations/site";
import { metadata } from "@/configurations/metadata";
import { viewport } from "@/configurations/viewport";

export { metadata };
export { viewport };

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <body className={`${FontVariables} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
